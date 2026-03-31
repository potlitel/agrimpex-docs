// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docsSidebar: [
    {
      type: 'doc',
      id: 'intro',
      label: 'Introducción',
    },
    {
      type: 'category',
      label: 'Autenticación',
      collapsed: false,
      items: [
        'auth/login',
      ],
    },
    {
      type: 'category',
      label: 'Administración',
      items: [
        'administracion/usuarios',
        'administracion/grupos',
      ],
    },
    {
      type: 'category',
      label: 'Logística',
      items: [
        'logistica/dashboard',
        'logistica/imports',
        'logistica/contenedores',
        'logistica/desaduane',
        'logistica/entregas',
      ],
    },
    {
      type: 'category',
      label: 'Nomenclaturas',
      items: [
        'nomenclaturas/intro',
        'nomenclaturas/area',
        'nomenclaturas/pais',
        'nomenclaturas/estado',
        'nomenclaturas/condado',
        'nomenclaturas/contenedor-estado',
        'nomenclaturas/contenedor-tipo',
        'nomenclaturas/permiso',
        'nomenclaturas/carga',
        'nomenclaturas/moneda',
        'nomenclaturas/producto',
        'nomenclaturas/operador',
        'nomenclaturas/planta',
        'nomenclaturas/sap',
        'nomenclaturas/cliente',
        'nomenclaturas/proveedor',
        'nomenclaturas/gestion',
      ],
    },
    {
      type: 'category',
      label: 'Seguridad',
      items: [
        'seguridad/trazabilidad',
      ],
    },
  ],
};

export default sidebars;
