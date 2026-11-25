process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

const puppeteer = require('puppeteer-core');
const path = require('path');
const fs = require('fs');
const os = require('os');
const sqlite3 = require('sqlite3').verbose();

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

/**
 * Algunas rutas Angular (en particular /dashboard) nunca disparan el evento
 * DOMContentLoaded que Puppeteer espera, aunque la página termine de
 * renderizar. Se tolera el timeout de la navegación y se sondea readyState.
 */
async function gotoReady(page, url) {
  for (let attempt = 0; attempt < 2; attempt++) {
    try {
      await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 15000 });
    } catch (error) {
      if (!/timeout/i.test(error.message)) throw error;
    }
    const deadline = Date.now() + 25000;
    while (Date.now() < deadline) {
      const state = await page.evaluate(() => ({
        ready: document.readyState,
        length: (document.body && document.body.innerText ? document.body.innerText.length : 0),
      })).catch(() => null);
      // La sesión autenticada deja peticiones externas pendientes (fuentes),
      // así que "interactive" con contenido renderizado también cuenta como listo.
      if (state && (state.ready === 'complete' || (state.ready === 'interactive' && state.length > 150))) return;
      await sleep(500);
    }
    if (attempt === 0) await sleep(1000);
  }
  throw new Error(`La página no terminó de renderizar (${url})`);
}

const root = path.join(__dirname, '..');
const inventoryPath = path.join(root, 'scripts/docs-inventory.json');
const manifestPath = path.join(root, 'scripts/docs-captures.json');
const outputDir = path.join(root, 'static/img/screenshots');
const baseUrl = (process.env.DOCS_CAPTURE_BASE_URL || 'https://localhost:5000').replace(/\/$/, '');
const apiUrl = (process.env.DOCS_API_URL || 'http://127.0.0.1:8990').replace(/\/$/, '');
const only = (process.env.DOCS_CAPTURE_ONLY || '').split(',').map((s) => s.trim()).filter(Boolean);
const onlySuffix = (process.env.DOCS_CAPTURE_SUFFIX || '').split(',').map((s) => s.trim()).filter(Boolean);
const limit = Number(process.env.DOCS_CAPTURE_LIMIT || 0);
const delay = Number(process.env.DOCS_CAPTURE_DELAY || 1500);
const batchSize = Number(process.env.DOCS_CAPTURE_BATCH || 12);
// "inventory" captura la imagen original de cada pantalla; "extra" captura las
// imágenes sufijadas del manifiesto sin tocar las originales.
const mode = (process.env.DOCS_CAPTURE_MODE || 'inventory').toLowerCase();
const appVersion = 'v1.0.0';
const userDataKey = 'authf649fc9a5f55';

// Rutas con parámetros: se capturan con valores concretos de ejemplo.
const ROUTE_OVERRIDES = {
  'seguridad/notificaciones': '/logistic/notification/BL/BL-1',
  'core/verify': '/verify/DEMO-CODE',
};

const lsKeys = {
  token: `${appVersion}-token-${userDataKey}`,
  refreshToken: `${appVersion}-refresh_token`,
  refreshExpiration: `${appVersion}-session_ttl`,
};

function resolveExecutable() {
  const candidates = [
    process.env.DOCS_CAPTURE_EXECUTABLE,
    path.join(os.homedir(), '.cache/ms-playwright/chromium-1234/chrome-linux64/chrome'),
    '/usr/bin/google-chrome',
    '/usr/bin/chromium',
    '/usr/bin/chromium-browser',
  ].filter(Boolean);
  const found = candidates.find((candidate) => fs.existsSync(candidate));
  if (!found) throw new Error('No se encontró Chrome/Chromium. Define DOCS_CAPTURE_EXECUTABLE.');
  return found;
}

function firefoxProfiles() {
  const profiles = [process.env.DOCS_FIREFOX_PROFILE].filter(Boolean);
  const base = path.join(os.homedir(), '.mozilla/firefox');
  if (fs.existsSync(base)) {
    for (const entry of fs.readdirSync(base, { withFileTypes: true })) {
      if (entry.isDirectory() && /default/i.test(entry.name)) profiles.push(path.join(base, entry.name));
    }
  }
  return profiles.filter((profile) => fs.existsSync(path.join(profile, 'cookies.sqlite')));
}

function readFirefoxToken(name) {
  return new Promise((resolve) => {
    const profiles = firefoxProfiles();
    if (!profiles.length) return resolve(null);
    let pending = profiles.length;
    let best = null;
    for (const profile of profiles) {
      const source = path.join(profile, 'cookies.sqlite');
      const target = path.join(os.tmpdir(), `agrimpex-docs-cookies-${path.basename(profile)}-${process.pid}.sqlite`);
      try {
        fs.copyFileSync(source, target);
      } catch {
        if (--pending === 0) return resolve(best);
        continue;
      }
      const db = new sqlite3.Database(target, sqlite3.OPEN_READONLY, (error) => {
        if (error) {
          try { fs.unlinkSync(target); } catch {}
          if (--pending === 0) return resolve(best);
          return;
        }
        db.get('SELECT value, expiry FROM moz_cookies WHERE host="localhost" AND name=? ORDER BY expiry DESC LIMIT 1', [name], (queryError, row) => {
          db.close();
          try { fs.unlinkSync(target); } catch {}
          if (!queryError && row && (!best || row.expiry > best.expiry)) best = row;
          if (--pending === 0) resolve(best);
        });
      });
    }
  });
}

function decodeExpiry(token) {
  try {
    const payload = JSON.parse(Buffer.from(token.split('.')[1], 'base64url').toString());
    return payload.exp * 1000;
  } catch {
    return 0;
  }
}

async function refreshSession() {
  if (process.env.DOCS_BEARER) {
    return { token: process.env.DOCS_BEARER, refreshToken: null, expiration: decodeExpiry(process.env.DOCS_BEARER) };
  }
  const stored = await readFirefoxToken('refresh_token');
  if (!stored) throw new Error('No hay refresh token de localhost en ningún perfil de Firefox.');
  const response = await fetch(`${apiUrl}/api/refresh_token`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ refresh_token: stored.value }),
  });
  if (!response.ok) throw new Error(`No se pudo refrescar la sesión: HTTP ${response.status} ${(await response.text()).slice(0, 200)}`);
  const data = await response.json();
  if (!data.token) throw new Error('La API no devolvió un token.');
  return {
    token: data.token,
    refreshToken: data.refresh_token || stored.value,
    expiration: data.refresh_token_expiration || decodeExpiry(data.token),
  };
}

function updatePage(docId) {
  const file = path.join(root, 'docs', `${docId}.md`);
  if (!fs.existsSync(file)) return false;
  const content = fs.readFileSync(file, 'utf8');
  const image = `/img/screenshots/${docId}.png`;
  let updated = content.replace(
    /!\[[^\]]* — captura pendiente\]\(\/img\/screenshots\/placeholder\.svg\)/,
    `![${docId.split('/').pop()} — captura real](${image})`,
  );
  updated = updated.replace(/\*Captura referencial pendiente de sustituir por una imagen real\.\*/, '*Captura tomada del backoffice Agrimpex.*');
  if (updated === content) return false;
  fs.writeFileSync(file, updated);
  return true;
}

/**
 * Rellena campos declarados en el manifiesto. Se usa el setter nativo y un
 * evento `input` para que Angular reactive forms registre el valor, incluidos
 * los campos precargados en el entorno local que deben dejarse vacíos.
 */
async function applyFill(page, fill) {
  if (!Array.isArray(fill) || !fill.length) return;
  for (const field of fill) {
    await page.waitForSelector(field.selector, { timeout: 20000 });
    const applied = await page.$$eval(field.selector, (elements, options) => {
      const element = elements[options.index || 0];
      if (!element) return false;
      const prototype = element.tagName === 'TEXTAREA'
        ? HTMLTextAreaElement.prototype
        : HTMLInputElement.prototype;
      Object.getOwnPropertyDescriptor(prototype, 'value').set.call(element, options.value ?? '');
      element.dispatchEvent(new Event('input', { bubbles: true }));
      return true;
    }, { value: field.value ?? '', index: field.index ?? 0 });
    if (!applied) throw new Error(`No se encontró el campo "${field.selector}"`);
  }
}

/**
 * Intercepta la petición declarada en el manifiesto y devuelve una respuesta
 * controlada, sin enviar correos ni modificar cuentas. Devuelve una función
 * que desinstala el interceptor al terminar la captura.
 */
async function installResponder(page, respond) {
  if (!respond) return () => {};
  const onRequest = (request) => {
    // La API real resuelve el preflight CORS; solo se simula la petición final.
    if (request.method() === 'OPTIONS') return request.continue();
    if (request.url().includes(respond.url)) {
      const origin = request.headers().origin || baseUrl;
      return request.respond({
        status: Number(respond.status || 200),
        contentType: 'application/json',
        headers: {
          'Access-Control-Allow-Origin': origin,
          'Access-Control-Allow-Credentials': 'true',
        },
        body: JSON.stringify(respond.body ?? {}),
      });
    }
    return request.continue();
  };
  await page.setRequestInterception(true);
  page.on('request', onRequest);
  return async () => {
    page.off('request', onRequest);
    await page.setRequestInterception(false).catch(() => {});
  };
}

async function main() {
  const inventory = JSON.parse(fs.readFileSync(inventoryPath, 'utf8'));
  const session = await refreshSession();
  if (session.expiration && session.expiration < Date.now()) throw new Error('El token obtenido ya está vencido.');
  console.log(`Sesión refrescada (expira ${new Date(session.expiration).toISOString()}).`);

  const executablePath = resolveExecutable();
  const origin = new URL(baseUrl).origin;
  const injectValues = {
    origin,
    tokenKey: lsKeys.token,
    refreshKey: lsKeys.refreshToken,
    expirationKey: lsKeys.refreshExpiration,
    token: session.token,
    refreshToken: session.refreshToken,
    expiration: session.expiration,
  };

  async function launch() {
    const browser = await puppeteer.launch({
      executablePath,
      headless: 'new',
      args: [
        '--no-sandbox', '--disable-setuid-sandbox', '--ignore-certificate-errors',
        '--disable-gpu', '--disable-dev-shm-usage', '--disable-extensions',
        '--disable-background-networking',
      ],
    });
    const page = await browser.newPage();
    await page.setViewport({ width: 1366, height: 768 });
    await page.evaluateOnNewDocument((values) => {
      if (location.origin !== values.origin) return;
      if (location.pathname.startsWith('/auth')) {
        localStorage.removeItem(values.tokenKey);
        localStorage.removeItem(values.refreshKey);
        localStorage.removeItem(values.expirationKey);
        return;
      }
      localStorage.setItem(values.tokenKey, values.token);
      if (values.refreshToken) localStorage.setItem(values.refreshKey, values.refreshToken);
      if (values.expiration) localStorage.setItem(values.expirationKey, String(values.expiration));
    }, injectValues);
    await gotoReady(page, `${baseUrl}/dashboard`);
    await sleep(2500);
    if (page.url().includes('/auth/login')) throw new Error('La sesión no fue reconocida por el frontend; revisa el token y la configuración local.');
    return { browser, page };
  }

  let { browser, page } = await launch();
  console.log('Sesión activa detectada.');

  const jobs = mode === 'extra'
    ? JSON.parse(fs.readFileSync(manifestPath, 'utf8')).captures.filter((capture) => {
        if (only.length && !only.includes(capture.docId)) return false;
        if (onlySuffix.length && !onlySuffix.includes(capture.suffix)) return false;
        if (process.env.DOCS_CAPTURE_SKIP_EXISTING === '1' && fs.existsSync(path.join(outputDir, `${capture.docId}-${capture.suffix}.png`))) return false;
        return true;
      })
    : inventory.screens.filter((screen) => {
        if (only.length && !only.includes(screen.docId)) return false;
        if (process.env.DOCS_CAPTURE_SKIP_EXISTING === '1' && fs.existsSync(path.join(outputDir, `${screen.docId}.png`))) return false;
        return true;
      }).map((screen) => ({ docId: screen.docId, route: ROUTE_OVERRIDES[screen.docId] || screen.sourceRoute }));
  const bounded = jobs.slice(0, limit || undefined);
  console.log(`Modo ${mode}: ${bounded.length} capturas pendientes.`);

  let captured = 0;
  let skipped = 0;
  let updated = 0;
  let sinceRestart = 0;
  const failures = [];

  async function restart() {
    try { if (browser) await browser.close(); } catch {}
    ({ browser, page } = await launch());
    sinceRestart = 0;
  }

  for (const job of bounded) {
    const label = job.suffix ? `${job.docId}-${job.suffix}` : job.docId;
    const route = job.route;
    if (mode === 'extra' && !job.suffix) {
      console.log(`OMITIR ${label} (el manifiesto exige un sufijo)`);
      skipped++;
      continue;
    }
    if (/:|\$/.test(route)) {
      console.log(`OMITIR ${label} (ruta con parámetros: ${route})`);
      skipped++;
      continue;
    }
    let removeResponder = () => {};
    try {
      if (!browser || !browser.connected || sinceRestart >= batchSize) await restart();
      await gotoReady(page, `${baseUrl}${route}`);
      if (job.waitFor) await page.waitForSelector(job.waitFor, { timeout: 15000 });
      await applyFill(page, job.fill);
      removeResponder = await installResponder(page, job.respond);
      await page.waitForNetworkIdle({ idleTime: 500, timeout: 6000 }).catch(() => {});
      await sleep(delay);
      if (!route.startsWith('/auth') && page.url().includes('/auth/login')) throw new Error('Sesión expirada durante la captura');
      if (job.clickText) {
        const clicked = await page.evaluate((text) => {
          const buttons = Array.from(document.querySelectorAll('button'));
          const exact = buttons.find((button) => button.textContent.trim() === text);
          const target = exact || buttons.find((button) => button.textContent.trim().includes(text));
          if (!target) return false;
          target.click();
          return true;
        }, job.clickText);
        if (!clicked) throw new Error(`No se encontró el botón "${job.clickText}"`);
        await sleep(800);
        if (job.waitForText) {
          await page.waitForFunction(
            (text) => Boolean(document.body && document.body.innerText.includes(text)),
            { timeout: 12000 },
            job.waitForText,
          );
        }
      }
      const scrollY = Number(job.scrollY || 0);
      if (scrollY) {
        await page.evaluate((y) => window.scrollTo(0, y), scrollY);
        await sleep(500);
      }
      if (job.scrollRight) {
        const scrolled = await page.evaluate(() => {
          const container = Array.from(document.querySelectorAll('*')).find(
            (element) => element.scrollWidth - element.clientWidth > 20 && getComputedStyle(element).overflowX === 'auto',
          );
          if (!container) return false;
          container.scrollLeft = container.scrollWidth;
          return true;
        });
        if (!scrolled) throw new Error('No se encontró el contenedor desplazable de la tabla');
        await sleep(500);
      }
      const file = path.join(outputDir, job.suffix ? `${job.docId}-${job.suffix}.png` : `${job.docId}.png`);
      fs.mkdirSync(path.dirname(file), { recursive: true });
      await page.screenshot({ path: file, fullPage: false });
      captured++;
      sinceRestart++;
      if (mode !== 'extra' && updatePage(job.docId)) updated++;
      console.log(`CAPTURADO ${label} (${page.url()}) -> ${path.relative(root, file)}`);
    } catch (error) {
      failures.push(`${label}: ${error.message}`);
      console.error(`ERROR ${label}: ${error.message}`);
      if (!browser || !browser.connected) {
        try { await restart(); } catch (restartError) {
          console.error(`ERROR reiniciando navegador: ${restartError.message}`);
          try { if (browser) await browser.close(); } catch {}
          browser = null;
          page = null;
        }
      }
    } finally {
      await removeResponder();
    }
  }

  try { if (browser) await browser.close(); } catch {}
  console.log(`\nResultado: ${captured} capturas, ${updated} páginas actualizadas, ${skipped} omitidas, ${failures.length} errores.`);
  if (failures.length) {
    console.error(failures.join('\n'));
    process.exit(1);
  }
}

main().catch((error) => {
  console.error(`Error fatal: ${error.message}`);
  process.exit(1);
});
