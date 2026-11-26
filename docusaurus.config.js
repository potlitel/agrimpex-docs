// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

const DEFAULT_BACKOFFICE_URL = 'https://agrimpex.eicma.cu';

function resolveBackofficeUrl() {
  const configured = process.env.AGRIMPEX_BACKOFFICE_URL?.trim();
  if (!configured) {
    return DEFAULT_BACKOFFICE_URL;
  }
  try {
    const parsed = new URL(configured);
    return ['http:', 'https:'].includes(parsed.protocol)
      ? configured
      : DEFAULT_BACKOFFICE_URL;
  } catch {
    return DEFAULT_BACKOFFICE_URL;
  }
}

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Agrimpex - Manual de Usuario',
  tagline: 'Sistema de Gestión de Importaciones',
  favicon: 'img/favicon.ico',

  url: 'https://agrimpex.eicma.cu',
  baseUrl: '/',

  organizationName: 'eicmasoft',
  projectName: 'agrimpex-docs',

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  customFields: {
    backofficeUrl: resolveBackofficeUrl(),
  },

  i18n: {
    defaultLocale: 'es',
    locales: ['es'],
  },

  plugins: ['./plugins/local-search-index.js'],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          editUrl: undefined,
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/agrimpex-social-card.png',
      colorMode: {
        defaultMode: 'light',
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'Agrimpex',
        logo: {
          alt: 'Logo Agrimpex',
          src: 'img/logo.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'docsSidebar',
            position: 'left',
            label: 'Documentación',
          },
          {
            to: '/docs/intro',
            label: 'Inicio',
            position: 'left',
          },
          {
              href: 'https://gitlab.eicma.cu/eicma/agrimpex',
            label: 'GitLab',
            position: 'right',
          },
          {
            type: 'custom-search',
            position: 'right',
          },
          {
            type: 'custom-backoffice',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        logo: {
          alt: 'Logo Agrimpex',
          src: 'img/logo.svg',
          href: '/docs/intro',
        },
        links: [
          {
            title: 'Documentación',
            items: [
              {
                label: 'Introducción',
                to: '/docs/intro',
              },
              {
                label: 'Login',
                to: '/docs/auth/login',
              },
              {
                label: 'Administración',
                to: '/docs/administracion/usuarios',
              },
            ],
          },
          {
            title: 'Proyecto',
            items: [
              {
                label: 'GitLab',
            href: 'https://gitlab.eicma.cu/eicma/agrimpex',
              },
              {
                label: 'EICMA Soft',
                href: 'https://eicma.cu',
              },
            ],
          },
          {
            title: 'Accesos',
            items: [
              {
                label: 'Volver al sistema',
                href: resolveBackofficeUrl(),
              },
              {
                label: 'Buscar en el manual',
                to: '/docs/intro',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} EICMA Soft. Sistema Agrimpex - Gestión de Importaciones.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
      algolia: false,
    }),
};

export default config;
