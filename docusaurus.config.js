// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Agrimpex - Manual de Usuario',
  tagline: 'Sistema de Gestión de Importaciones',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://agrimpex.eicma.cu',
  baseUrl: '/',

  organizationName: 'eicmasoft',
  projectName: 'agrimpex-docs',

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'es',
    locales: ['es'],
  },

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
        ],
      },
      footer: {
        style: 'dark',
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
