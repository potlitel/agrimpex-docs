import fs from 'node:fs';
import path from 'node:path';

const CATEGORY_BY_PREFIX = {
  autenticacion: 'Autenticación',
  administracion: 'Administración',
  logistica: 'Logística',
  nomenclaturas: 'Nomenclaturas',
  seguridad: 'Seguridad',
  reportes: 'Reportes',
  calidad: 'Calidad',
  configuracion: 'Configuración',
  perfil: 'Perfil',
  core: 'Acerca del Sistema',
};

function normalize(value) {
  return value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[`*_>#|]/g, '')
    .trim();
}

function getCategory(doc) {
  if (doc.id === 'intro') {
    return 'Acerca del Sistema';
  }
  const prefix = doc.id.split('/')[0];
  return CATEGORY_BY_PREFIX[prefix] ?? 'General';
}

function getHeadings(content) {
  return [...content.matchAll(/^#{1,6}\s+(.+)$/gm)].map((match) =>
    match[1].replace(/[`*_]/g, '').trim(),
  );
}

function getText(content, headings) {
  const withoutFrontMatter = content.replace(/^---\r?\n[\s\S]*?\r?\n---\r?\n/, '');
  const withoutCode = withoutFrontMatter.replace(/```[\s\S]*?```/g, ' ');
  const withoutHeadings = headings.reduce(
    (text, heading) => text.replace(heading, ' '),
    withoutCode,
  );
  return normalize(
    withoutHeadings
      .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
      .replace(/<[^>]+>/g, ' ')
      .replace(/[^\p{L}\p{N}\s/-]/gu, ' '),
  );
}

function collectDocs(allContent) {
  const docs = [];
  for (const pluginContent of Object.values(allContent ?? {})) {
    for (const pluginInstance of Object.values(pluginContent ?? {})) {
      for (const version of pluginInstance?.loadedVersions ?? []) {
        if (Array.isArray(version.docs)) {
          docs.push(...version.docs);
        }
      }
    }
  }
  return docs;
}

export default function localSearchIndex(context) {
  return {
    name: 'local-search-index',
    allContentLoaded({allContent, actions}) {
      const entries = collectDocs(allContent)
        .filter((doc) => !doc.unlisted && !doc.draft)
        .map((doc) => {
          const sourcePath = doc.source?.startsWith('@site/')
            ? path.join(context.siteDir, doc.source.slice('@site/'.length))
            : doc.source;
          const content =
            sourcePath && fs.existsSync(sourcePath)
              ? fs.readFileSync(sourcePath, 'utf8')
              : (doc.description ?? '');
          const headings = getHeadings(content);
          return {
            title: doc.title,
            category: getCategory(doc),
            permalink: doc.permalink,
            headings,
            text: getText(content, headings),
          };
        });

      actions.setGlobalData({entries});
    },
  };
}
