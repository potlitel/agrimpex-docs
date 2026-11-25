import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import { createRequire } from 'node:module';
import { fileURLToPath } from 'node:url';

const require = createRequire(import.meta.url);
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const args = process.argv.slice(2);
const inventoryOnly = args.includes('--inventory-only');
const inventoryArg = args.indexOf('--inventory');
const inventoryPath = inventoryArg >= 0
  ? path.resolve(args[inventoryArg + 1])
  : path.resolve(process.env.DOCS_INVENTORY || path.join(root, 'scripts/docs-inventory.json'));
const frontendSrc = path.resolve(root, '../agrimpex-backoffice/src');
const expectedNavLabels = [
  'Autenticación', 'Administración', 'Logística', 'Nomenclaturas', 'Seguridad',
  'Reportes', 'Calidad', 'Configuración', 'Perfil', 'Acerca del Sistema',
];
const requiredHeadings = ['Propósito', 'Acceso', 'Captura', 'Campos', 'Acciones'];
const allowedExtraHeadings = [
  'Filtros del listado', 'Formulario (alta y edición)', 'Operaciones y documentos', 'Interpretación del panel',
  'Recorrido del acceso', 'Contenedor y modal legal',
  'Formulario de inicio de sesión', 'Sesión, errores y redirecciones',
  'Formulario de recuperación', 'Envío del código',
  'Formulario de nueva contraseña', 'Validación del código y errores',
  'Mapa del módulo', 'Operaciones y estados', 'Uso del asistente',
  'Control y trazabilidad', 'Columnas y resultados', 'Generación y exportación',
];
const expectedScreenCount = 113;
const manifestPath = path.join(root, 'scripts/docs-captures.json');
const errors = [];
const fail = (message) => errors.push(message);

const inventory = JSON.parse(fs.readFileSync(inventoryPath, 'utf8'));
const screens = inventory.screens || [];
const docIds = screens.map((screen) => screen.docId);
const idSet = new Set(docIds);
const summary = [];

if (idSet.size !== docIds.length) {
  const seen = new Set();
  for (const id of docIds) {
    if (seen.has(id)) fail(`docId duplicado en el inventario: ${id}`);
    seen.add(id);
  }
}
summary.push(`inventario: ${screens.length} pantallas, ${idSet.size} ids únicos`);
if (screens.length !== expectedScreenCount) {
  fail(`El inventario tiene ${screens.length} pantallas; se esperan ${expectedScreenCount}`);
}

for (const group of inventory.navigation || []) {
  for (const id of group.docIds) {
    if (!idSet.has(id)) fail(`El grupo "${group.navLabel}" referencia un id sin inventario: ${id}`);
  }
}
if ((inventory.navigation || []).length !== expectedNavLabels.length) {
  fail(`El inventario declara ${inventory.navigation?.length ?? 0} grupos; se esperan ${expectedNavLabels.length}`);
}

if (fs.existsSync(frontendSrc)) {
  const sources = [];
  const walk = (dir) => {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      const full = path.join(dir, entry.name);
      if (entry.isDirectory()) walk(full);
      else if (full.endsWith('.ts')) sources.push(fs.readFileSync(full, 'utf8'));
    }
  };
  walk(frontendSrc);
  for (const screen of screens) {
    const symbol = new RegExp(`\\b(class|const|interface|function)\\s+${screen.sourceComponent}\\b`);
    if (!sources.some((source) => symbol.test(source))) {
      fail(`Componente inexistente en el frontend: ${screen.sourceComponent} (${screen.docId})`);
    }
  }
  summary.push(`frontend: ${screens.length} componentes verificados`);
} else {
  summary.push(`frontend: no disponible en ${frontendSrc}; se omite la verificación de componentes`);
}

const byKey = new Map();
for (const screen of screens) {
  if (!screen.screenKey) continue;
  if (!byKey.has(screen.screenKey)) byKey.set(screen.screenKey, []);
  byKey.get(screen.screenKey).push(screen);
}
for (const duplicate of inventory.duplicates || []) {
  const entries = byKey.get(duplicate.screenKey) || [];
  const canonical = entries.filter((screen) => screen.canonical);
  if (canonical.length !== 1) {
    fail(`La pantalla duplicada ${duplicate.screenKey} tiene ${canonical.length} entradas canónicas; se espera 1`);
    continue;
  }
  if (canonical[0].module !== duplicate.canonicalModule || canonical[0].docId !== duplicate.canonicalDocId) {
    fail(`El módulo canónico de ${duplicate.screenKey} no coincide con el inventario`);
  }
}
for (const [key, entries] of byKey) {
  const canonical = entries.filter((screen) => screen.canonical);
  if (canonical.length > 1) fail(`Múltiples entradas canónicas para ${key}`);
}
summary.push(`duplicados: ${(inventory.duplicates || []).length} enlaces cruzados canónicos`);

const parseFrontMatter = (content) => {
  const match = content.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!match) return null;
  const frontMatter = {};
  for (const line of match[1].split(/\r?\n/)) {
    const field = line.match(/^([a-z_]+):\s*(.*)$/);
    if (field) frontMatter[field[1]] = field[2].trim();
  }
  return frontMatter;
};

const readSidebar = () => {
  const source = fs.readFileSync(path.join(root, 'sidebars.js'), 'utf8')
    .replace(/export\s+default\s+sidebars\s*;?/, 'module.exports = sidebars;');
  const context = { module: { exports: {} }, exports: {}, require };
  vm.runInNewContext(source, context, { filename: 'sidebars.js' });
  return context.module.exports.docsSidebar;
};

if (!inventoryOnly) {
  for (const screen of screens) {
    const file = path.join(root, 'docs', `${screen.docId}.md`);
    if (!fs.existsSync(file)) {
      fail(`Falta el documento de ${screen.docId}: docs/${screen.docId}.md`);
      continue;
    }
    const content = fs.readFileSync(file, 'utf8');
    const frontMatter = parseFrontMatter(content);
    if (!frontMatter) {
      fail(`Front matter ausente en docs/${screen.docId}.md`);
      continue;
    }
    for (const [key, expected] of [['source_route', screen.sourceRoute], ['source_component', screen.sourceComponent]]) {
      if (frontMatter[key] !== expected) {
        fail(`docs/${screen.docId}.md: ${key} esperado "${expected}", encontrado "${frontMatter[key] ?? '(ausente)'}"`);
      }
    }
    const h1 = content.match(/^# (.+)$/gm) || [];
    if (h1.length !== 1) fail(`docs/${screen.docId}.md: se espera un único H1, encontrados ${h1.length}`);
    else if (h1[0].slice(2) !== screen.label) {
      fail(`docs/${screen.docId}.md: el H1 "${h1[0].slice(2)}" no coincide con la etiqueta "${screen.label}"`);
    }
    const headings = (content.match(/^## (.+)$/gm) || []).map((line) => line.slice(3));
    const original = headings.slice(0, requiredHeadings.length);
    if (original.join('|') !== requiredHeadings.join('|')) {
      fail(`docs/${screen.docId}.md: los encabezados originales son ${original.join(', ')}; se esperaban ${requiredHeadings.join(', ')}`);
    }
    const extras = headings.slice(requiredHeadings.length);
    for (const heading of extras) {
      if (!allowedExtraHeadings.includes(heading)) {
        fail(`docs/${screen.docId}.md: sección añadida no reconocida "${heading}"`);
      }
    }
    if (new Set(extras).size !== extras.length) {
      fail(`docs/${screen.docId}.md: secciones añadidas duplicadas`);
    }
    const realCapture = path.join(root, 'static/img/screenshots', `${screen.docId}.png`);
    if (fs.existsSync(realCapture)) {
      if (!content.includes(`/img/screenshots/${screen.docId}.png`)) {
        fail(`docs/${screen.docId}.md: no referencia su captura real`);
      }
      if (content.includes('captura pendiente')) {
        fail(`docs/${screen.docId}.md: conserva la leyenda de captura pendiente`);
      }
    } else if (!content.includes('/img/screenshots/placeholder.svg')) {
      fail(`docs/${screen.docId}.md: falta la captura de referencia`);
    }
  }
  summary.push(`documentos: ${screens.length} páginas del inventario revisadas`);

  const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
  const captures = manifest.captures || [];
  const seenCaptures = new Set();
  for (const capture of captures) {
    const label = `${capture.docId}-${capture.suffix}`;
    if (!idSet.has(capture.docId)) {
      fail(`El manifiesto referencia un docId sin inventario: ${capture.docId}`);
      continue;
    }
    if (!capture.suffix || !/^[a-z0-9-]+$/.test(capture.suffix)) {
      fail(`Manifiesto: sufijo inválido en ${label}`);
      continue;
    }
    if (seenCaptures.has(label)) fail(`Manifiesto: captura duplicada ${label}`);
    seenCaptures.add(label);
    if (!capture.route || !capture.route.startsWith('/') || /[:$]/.test(capture.route)) {
      fail(`Manifiesto: ruta no concreta en ${label}: ${capture.route}`);
    }
    const file = path.join(root, 'static/img/screenshots', `${capture.docId}-${capture.suffix}.png`);
    if (!fs.existsSync(file)) {
      fail(`Falta la captura del manifiesto: static/img/screenshots/${capture.docId}-${capture.suffix}.png`);
    }
    if (capture.docId.startsWith('autenticacion/')) {
      if (capture.fill !== undefined && (!Array.isArray(capture.fill)
        || capture.fill.some((field) => !field || typeof field.selector !== 'string' || !field.selector))) {
        fail(`Manifiesto: fill inválido en ${label}`);
      }
      if (capture.respond !== undefined && (!capture.respond
        || typeof capture.respond.url !== 'string' || !capture.respond.url.startsWith('/'))) {
        fail(`Manifiesto: respond inválido en ${label}`);
      }
      for (const key of ['clickText', 'waitForText']) {
        if (capture[key] !== undefined && (typeof capture[key] !== 'string' || !capture[key].trim())) {
          fail(`Manifiesto: ${key} inválido en ${label}`);
        }
      }
    }
    if (capture.docId.startsWith('logistica/')) {
      for (const key of ['clickText', 'waitForText', 'waitFor']) {
        if (capture[key] !== undefined && (typeof capture[key] !== 'string' || !capture[key].trim())) {
          fail(`Manifiesto: ${key} inválido en ${label}`);
        }
      }
      if (capture.scrollY !== undefined && (!Number.isInteger(capture.scrollY) || capture.scrollY < 0)) {
        fail(`Manifiesto: scrollY inválido en ${label}`);
      }
      if (capture.scrollRight !== undefined && typeof capture.scrollRight !== 'boolean') {
        fail(`Manifiesto: scrollRight inválido en ${label}`);
      }
    }
    if (capture.docId.startsWith('administracion/')) {
      for (const key of ['clickText', 'waitForText']) {
        if (capture[key] !== undefined && (typeof capture[key] !== 'string' || !capture[key].trim())) {
          fail(`Manifiesto: ${key} inválido en ${label}`);
        }
      }
      if (capture.scrollY !== undefined && (!Number.isInteger(capture.scrollY) || capture.scrollY < 0)) {
        fail(`Manifiesto: scrollY inválido en ${label}`);
      }
      if (capture.scrollRight !== undefined && typeof capture.scrollRight !== 'boolean') {
        fail(`Manifiesto: scrollRight inválido en ${label}`);
      }
    }
  }
  const adminDocIds = [
    'administracion/index',
    'administracion/usuarios/listado',
    'administracion/usuarios/formulario',
    'administracion/grupos/listado',
    'administracion/grupos/formulario',
    'administracion/asistente-ia',
  ];
  for (const docId of adminDocIds) {
    if (!captures.some((capture) => capture.docId === docId)) {
      fail(`Manifiesto: faltan capturas sufijadas para ${docId}`);
    }
  }
  const logisticaDocIds = [
    'logistica/index',
    'logistica/importacion/dashboard',
    'logistica/importacion/estadisticas',
    'logistica/importacion/mariel',
    'logistica/importacion/santiago',
    'logistica/importacion/no-devueltos',
    'logistica/importacion/extraidos',
    'logistica/importacion/recepcion-puerta',
    'logistica/importacion/logs',
    'logistica/importacion/excluidos',
    'logistica/control-importaciones',
    'logistica/contenedores/inventario-terminal',
    'logistica/contenedores/navegando',
    'logistica/contenedores/retorno',
    'logistica/contenedores/documentos',
    'logistica/contenedores/documentos-formulario',
    'logistica/contenedores/explorador',
    'logistica/contenedores/trazabilidad',
    'logistica/contenedores/extracciones-diarias',
    'logistica/contenedores/extraidos',
    'logistica/entregas/listado',
    'logistica/entregas/formulario',
    'logistica/inbonds/listado',
    'logistica/inbonds/formulario',
    'logistica/solicitudes-extension/listado',
    'logistica/solicitudes-extension/formulario',
    'logistica/desaduanes/listado',
    'logistica/desaduanes/formulario',
    'logistica/especialistas/listado',
    'logistica/especialistas/formulario',
    'logistica/fletes-aereos/listado',
    'logistica/fletes-aereos/formulario',
    'logistica/reportes',
  ];
  for (const docId of logisticaDocIds) {
    if (!captures.some((capture) => capture.docId === docId)) {
      fail(`Manifiesto: faltan capturas sufijadas para ${docId}`);
    }
  }
  summary.push(`manifiesto: ${captures.length} capturas adicionales verificadas`);

  for (const screen of screens) {
    const file = path.join(root, 'docs', `${screen.docId}.md`);
    if (!fs.existsSync(file)) continue;
    const content = fs.readFileSync(file, 'utf8');
    const headings = (content.match(/^## (.+)$/gm) || []).map((line) => line.slice(3));
    const extras = headings.slice(requiredHeadings.length);
    for (const heading of extras) {
      const escaped = heading.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      const section = content.match(new RegExp(`^## ${escaped}\\r?\\n([\\s\\S]*?)(?=^## |(?![\\s\\S]))`, 'm'));
      const body = section ? section[1] : '';
      const images = [...body.matchAll(/!\[[^\]]*\]\(\/img\/screenshots\/([^)]+\.png)\)/g)].map((match) => match[1]);
      if (!images.length) {
        fail(`docs/${screen.docId}.md: la sección "${heading}" no incluye ninguna captura real`);
        continue;
      }
      for (const image of new Set(images)) {
        if (!fs.existsSync(path.join(root, 'static/img/screenshots', image))) {
          fail(`docs/${screen.docId}.md: la sección "${heading}" referencia una imagen inexistente: ${image}`);
        }
      }
      if (screen.docId.startsWith('autenticacion/')) {
        const suffixed = images.filter((image) => image.startsWith(`${screen.docId}-`));
        if (!suffixed.length) {
          fail(`docs/${screen.docId}.md: la sección "${heading}" debe mostrar una captura sufijada del manifiesto`);
        }
        if (screen.docId === 'autenticacion/index' && heading === 'Recorrido del acceso'
          && new Set(suffixed).size < 2) {
          fail(`docs/${screen.docId}.md: "Recorrido del acceso" debe mostrar al menos dos capturas del recorrido`);
        }
      }
      if (screen.docId === 'calidad/index' && heading === 'Interpretación del panel') {
        const dashboardImages = images.filter((image) => /^calidad\/index-.*\.png$/.test(image));
        if (new Set(dashboardImages).size < 2) {
          fail(`docs/${screen.docId}.md: "Interpretación del panel" debe mostrar al menos dos capturas del dashboard`);
        }
      }
      if (screen.docId.startsWith('administracion/')) {
        const suffixed = images.filter((image) => image.startsWith(`${screen.docId}-`));
        if (!suffixed.length) {
          fail(`docs/${screen.docId}.md: la sección "${heading}" debe mostrar una captura sufijada del manifiesto`);
        }
        if (screen.docId === 'administracion/index' && heading === 'Mapa del módulo'
          && new Set(suffixed).size < 2) {
          fail(`docs/${screen.docId}.md: "Mapa del módulo" debe mostrar al menos dos capturas del módulo`);
        }
        if (screen.docId === 'administracion/asistente-ia' && heading === 'Uso del asistente'
          && new Set(suffixed).size < 2) {
          fail(`docs/${screen.docId}.md: "Uso del asistente" debe mostrar al menos dos capturas del chat`);
        }
      }
      if (screen.docId.startsWith('logistica/')) {
        const suffixed = images.filter((image) => image.startsWith(`${screen.docId}-`));
        if (!suffixed.length) {
          fail(`docs/${screen.docId}.md: la sección "${heading}" debe mostrar una captura sufijada del manifiesto`);
        }
        if (screen.docId === 'logistica/index' && heading === 'Mapa del módulo'
          && new Set(suffixed).size < 2) {
          fail(`docs/${screen.docId}.md: "Mapa del módulo" debe mostrar al menos dos capturas del módulo`);
        }
        if (screen.docId === 'logistica/importacion/estadisticas' && heading === 'Interpretación del panel'
          && new Set(suffixed).size < 2) {
          fail(`docs/${screen.docId}.md: "Interpretación del panel" debe mostrar al menos dos capturas de los gráficos`);
        }
        const tabbedForms = [
          'logistica/entregas/formulario', 'logistica/desaduanes/formulario',
          'logistica/fletes-aereos/formulario', 'logistica/contenedores/documentos-formulario',
        ];
        if (tabbedForms.includes(screen.docId) && heading === 'Formulario (alta y edición)'
          && new Set(suffixed).size < 2) {
          fail(`docs/${screen.docId}.md: "Formulario (alta y edición)" debe mostrar al menos dos capturas de las pestañas`);
        }
      }
    }
  }

  let sidebar;
  try {
    sidebar = readSidebar();
  } catch (error) {
    fail(`No se pudo leer sidebars.js: ${error.message}`);
  }
  if (sidebar) {
    if (sidebar.some((entry) => entry.type === 'doc')) {
      fail('sidebars.js contiene documentos sueltos en la raíz (type: doc)');
    }
    sidebar.forEach((entry, index) => {
      if (entry.type !== 'category') {
        fail(`Entrada raíz ${index} de sidebars.js no es una categoría`);
        return;
      }
      if (entry.label !== expectedNavLabels[index]) {
        fail(`Categoría ${index}: "${entry.label}"; se esperaba "${expectedNavLabels[index]}"`);
      }
      const navGroup = (inventory.navigation || [])[index];
      if (navGroup && navGroup.navLabel !== entry.label) {
        fail(`La categoría "${entry.label}" no coincide con el grupo del inventario "${navGroup.navLabel}"`);
      }
      if (navGroup && navGroup.docIds.join('|') !== (entry.items || []).join('|')) {
        fail(`Los ids de la categoría "${entry.label}" no coinciden con el inventario`);
      }
    });
    const sidebarIds = sidebar.flatMap((entry) => entry.items || []);
    if (new Set(sidebarIds).size !== sidebarIds.length) fail('Hay ids duplicados en sidebars.js');
    for (const id of sidebarIds) if (!idSet.has(id)) fail(`sidebars.js referencia un id sin inventario: ${id}`);
    for (const id of docIds) if (!sidebarIds.includes(id)) fail(`Falta en sidebars.js: ${id}`);
    summary.push(`sidebar: ${sidebar.length} categorías, ${sidebarIds.length} documentos`);
  }

  for (const migration of inventory.migrations || []) {
    if (migration.action !== 'stub') continue;
    const file = path.join(root, 'docs', `${migration.from}.md`);
    if (!fs.existsSync(file)) {
      fail(`Falta la página de migración docs/${migration.from}.md`);
      continue;
    }
    const content = fs.readFileSync(file, 'utf8');
    const frontMatter = parseFrontMatter(content);
    if (!frontMatter || frontMatter.unlisted !== 'true') {
      fail(`docs/${migration.from}.md no es una página de migración unlisted`);
    }
    const publicPath = migration.to.endsWith('/index') ? migration.to.slice(0, -'/index'.length) : migration.to;
    if (!content.includes(`/docs/${publicPath}`)) {
      fail(`docs/${migration.from}.md no enlaza con /docs/${publicPath}`);
    }
  }
  summary.push(`migraciones: ${(inventory.migrations || []).filter((m) => m.action === 'stub').length} páginas unlisted`);
}

if (errors.length) {
  console.error('check:docs falló:');
  for (const error of errors) console.error(`  - ${error}`);
  process.exit(1);
}
for (const line of summary) console.log(`check:docs OK — ${line}`);
