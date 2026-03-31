process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

const puppeteer = require('puppeteer-core');
const path = require('path');
const fs = require('fs');
const sqlite3 = require('sqlite3').verbose();

const sleep = (ms) => new Promise(r => setTimeout(r, ms));

const NOMENCLADORES = [
  { slug: 'area', name: 'Areas', route: '/management/nomenclatures/area/list' },
  { slug: 'country', name: 'Paises', route: '/management/nomenclatures/country/list' },
  { slug: 'state', name: 'Estados', route: '/management/nomenclatures/state/list' },
  { slug: 'county', name: 'Condados', route: '/management/nomenclatures/county/list' },
  { slug: 'containers-state', name: 'EstadosContenedor', route: '/management/nomenclatures/containers-state/list' },
  { slug: 'container-type', name: 'TiposContenedor', route: '/management/nomenclatures/container-type/list' },
  { slug: 'permit-type', name: 'TiposPermiso', route: '/management/nomenclatures/permit-type/list' },
  { slug: 'loads-type', name: 'TiposCarga', route: '/management/nomenclatures/loads-type/list' },
  { slug: 'currency', name: 'Monedas', route: '/management/nomenclatures/currency/list' },
  { slug: 'product', name: 'Productos', route: '/management/nomenclatures/product/list' },
  { slug: 'operator', name: 'Operadores', route: '/management/nomenclatures/operator/list' },
  { slug: 'plant', name: 'Plantas', route: '/management/nomenclatures/plant/list' },
  { slug: 'sap', name: 'EstadosSAP', route: '/management/nomenclatures/sap/list' },
  { slug: 'client', name: 'Clientes', route: '/management/nomenclatures/client/list' },
  { slug: 'supplier', name: 'Proveedores', route: '/management/nomenclatures/supplier/list' },
  { slug: 'management-type', name: 'TiposGestion', route: '/management/nomenclatures/management-type/list' },
];

const BASE_URL = 'https://localhost:5000';
const OUTPUT_DIR = path.join(__dirname, '../static/img/nomenclaturas');
const FIREFOX_PROFILE = process.env.HOME + '/snap/firefox/common/.mozilla/firefox/7a0g4z93.default-1767602802589';

function getFirefoxCookies() {
  return new Promise((resolve, reject) => {
    const db = new sqlite3.Database(FIREFOX_PROFILE + '/cookies.sqlite', (err) => {
      if (err) {
        console.log('Error opening database:', err.message);
        resolve([]);
        return;
      }
    });

    db.all('SELECT host, name, value, path, expiry, isSecure FROM moz_cookies WHERE host LIKE "%localhost%" OR host LIKE "%5000%"', [], (err, rows) => {
      if (err) {
        console.log('Error querying:', err.message);
        resolve([]);
        return;
      }

      const cookies = rows.map(row => ({
        name: row.name,
        value: row.value,
        domain: row.host.startsWith('.') ? row.host : '.' + row.host,
        path: row.path,
        expires: row.expiry > 0 ? row.expiry : -1,
        secure: row.isSecure === 1,
        httpOnly: false
      }));

      console.log('Found ' + cookies.length + ' cookies for localhost');
      db.close();
      resolve(cookies);
    });
  });
}

async function captureScreenshots() {
  const cookies = await getFirefoxCookies();

  const browser = await puppeteer.launch({
    executablePath: '/usr/bin/google-chrome',
    headless: 'new',
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
      '--ignore-certificate-errors',
      '--disable-gpu',
      '--disable-dev-shm-usage'
    ]
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1920, height: 1080 });

  if (cookies.length > 0) {
    console.log('Setting cookies...');
    for (const cookie of cookies) {
      try {
        await page.setCookie(cookie);
      } catch (e) {
        // Ignore cookie errors
      }
    }
  }

  console.log('Navegando a la pagina principal...\n');

  await page.goto(BASE_URL + '/dashboard', {
    waitUntil: 'domcontentloaded',
    timeout: 30000
  });
  await sleep(5000);

  const url = await page.url();
  console.log('URL actual:', url);

  if (url.includes('/auth/login')) {
    console.log('\nNo se encontraron cookies validas. Por favor, inicia sesion en Firefox y ejecuta este script de nuevo.\n');
    await browser.close();
    return;
  }

  console.log('Sesion activa detectada!\n');

  console.log('Capturando screenshots de nomencladores...\n');

  for (const nom of NOMENCLADORES) {
    try {
      console.log('Capturando: ' + nom.name);

      await page.goto(BASE_URL + nom.route, {
        waitUntil: 'domcontentloaded',
        timeout: 30000
      });
      await sleep(4000);

      const currentUrl = await page.url();
      if (currentUrl.includes('/auth/login')) {
        console.log('Sesion expirada.');
        break;
      }

      const filename = nom.slug + '-listado.png';
      const filepath = path.join(OUTPUT_DIR, filename);

      await page.screenshot({
        path: filepath,
        fullPage: false
      });

      const stats = fs.statSync(filepath);
      console.log('Guardado: ' + filename + ' (' + stats.size + ' bytes)');

    } catch (error) {
      console.error('Error: ' + error.message);
    }
  }

  console.log('\nCaptura completada!');
  await browser.close();
}

async function main() {
  console.log('Script de captura de screenshots usando cookies de Firefox\n');
  console.log('Directorio: ' + OUTPUT_DIR);
  console.log('Frontend: ' + BASE_URL + '\n');
  console.log('IMPORTANTE: Inicia sesion en Firefox antes de ejecutar.\n');

  await captureScreenshots();
}

main();
