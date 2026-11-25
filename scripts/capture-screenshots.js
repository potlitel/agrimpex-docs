process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

const puppeteer = require('puppeteer-core');
const path = require('path');
const fs = require('fs');
const os = require('os');
const sqlite3 = require('sqlite3').verbose();

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const root = path.join(__dirname, '..');
const inventoryPath = path.join(root, 'scripts/docs-inventory.json');
const outputDir = path.join(root, 'static/img/screenshots');
const baseUrl = (process.env.DOCS_CAPTURE_BASE_URL || 'http://localhost:5000').replace(/\/$/, '');
const apiUrl = (process.env.DOCS_API_URL || 'http://127.0.0.1:8990').replace(/\/$/, '');
const only = (process.env.DOCS_CAPTURE_ONLY || '').split(',').map((s) => s.trim()).filter(Boolean);
const limit = Number(process.env.DOCS_CAPTURE_LIMIT || 0);
const delay = Number(process.env.DOCS_CAPTURE_DELAY || 1500);
const batchSize = Number(process.env.DOCS_CAPTURE_BATCH || 12);
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
        '--disable-background-networking', '--js-flags=--max-old-space-size=512',
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
    await page.goto(`${baseUrl}/dashboard`, { waitUntil: 'domcontentloaded', timeout: 45000 });
    await sleep(2500);
    if (page.url().includes('/auth/login')) throw new Error('La sesión no fue reconocida por el frontend; revisa el token y la configuración local.');
    return { browser, page };
  }

  let { browser, page } = await launch();
  console.log('Sesión activa detectada.');

  const screens = inventory.screens.filter((screen) => {
    if (only.length && !only.includes(screen.docId)) return false;
    if (process.env.DOCS_CAPTURE_SKIP_EXISTING === '1' && fs.existsSync(path.join(outputDir, `${screen.docId}.png`))) return false;
    return true;
  }).slice(0, limit || undefined);

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

  for (const screen of screens) {
    const route = ROUTE_OVERRIDES[screen.docId] || screen.sourceRoute;
    if (/:|\$/.test(route)) {
      console.log(`OMITIR ${screen.docId} (ruta con parámetros: ${screen.sourceRoute})`);
      skipped++;
      continue;
    }
    try {
      if (!browser || !browser.connected || sinceRestart >= batchSize) await restart();
      await page.goto(`${baseUrl}${route}`, { waitUntil: 'domcontentloaded', timeout: 30000 });
      await page.waitForNetworkIdle({ idleTime: 500, timeout: 6000 }).catch(() => {});
      await sleep(delay);
      const isAuthScreen = route.startsWith('/auth');
      if (!isAuthScreen && page.url().includes('/auth/login')) throw new Error('Sesión expirada durante la captura');
      const file = path.join(outputDir, `${screen.docId}.png`);
      fs.mkdirSync(path.dirname(file), { recursive: true });
      await page.screenshot({ path: file, fullPage: false });
      captured++;
      sinceRestart++;
      if (updatePage(screen.docId)) updated++;
      console.log(`CAPTURADO ${screen.docId} (${page.url()}) -> ${path.relative(root, file)}`);
    } catch (error) {
      failures.push(`${screen.docId}: ${error.message}`);
      console.error(`ERROR ${screen.docId}: ${error.message}`);
      if (!browser || !browser.connected) {
        try { await restart(); } catch (restartError) {
          console.error(`ERROR reiniciando navegador: ${restartError.message}`);
          try { if (browser) await browser.close(); } catch {}
          browser = null;
          page = null;
        }
      }
    }
  }

  try { if (browser) await browser.close(); } catch {}
  console.log(`\nResultado: ${captured} capturas, ${updated} páginas actualizadas, ${skipped} omitidas, ${failures.length} errores.`);
  if (failures.length) {
    console.error(failures.join('\n'));
    process.exitCode = 1;
  }
}

main().catch((error) => {
  console.error(`Error fatal: ${error.message}`);
  process.exitCode = 1;
});
