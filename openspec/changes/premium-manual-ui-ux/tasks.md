# Tasks

## 1. Configuración base y tokens

- [x] 1.1 Añadir `customFields.backofficeUrl` en `docusaurus.config.js` leyendo y validando `AGRIMPEX_BACKOFFICE_URL`, con fallback a `https://agrimpex.eicma.cu`; verificar que el valor por defecto y el de la variable aparecen en la configuración compilada.
- [x] 1.2 Registrar el item `custom` del botón del backoffice en `themeConfig.navbar.items` en posición `right`, junto al toggle de tema; verificar su posición en la cabecera renderizada.
- [x] 1.3 Definir tokens `--ag-glass-bg`, `--ag-glass-blur`, `--ag-focus-ring`, `--ag-transition` y `--ag-surface-active` en `src/css/custom.css`, con fallback opaco bajo `@supports not`; verificar que el CSS compila y que claro/oscuro conservan el contraste.
- [x] 1.4 Documentar `AGRIMPEX_BACKOFFICE_URL` en `README.md` indicando que requiere reconstrucción; verificar que el comando de build mostrado funciona con la variable definida.

## 2. Cabecera y sidebar

- [x] 2.1 Crear `src/components/icons/LucideIcon.js` con los diez iconos SVG inline (`LogIn`, `Shield`, `Truck`, `BarChart3`, `BookOpen`, `ClipboardList`, `Boxes`, `Settings2`, `UserRound`, `Info`), `aria-hidden` y `focusable=false`; verificar que se renderizan las diez claves sin dependencias nuevas.
- [x] 2.2 Crear `src/components/Navbar/BackofficeButton.js` leyendo `customFields.backofficeUrl`; verificar enlace por defecto, enlace con variable de entorno y foco visible con teclado.
- [x] 2.3 Añadir en `src/theme/Root.js` el listener que actualiza `data-scrolled` en `<html>` y los estilos `.navbar[data-scrolled='true']` con glassmorphism; verificar activación al superar el umbral, reversión al volver arriba y legibilidad en Chromium y Firefox.
- [x] 2.4 Añadir `customProps.icon` a las diez categorías de `sidebars.js` sin cambiar ids ni rutas; verificar con `npm run check:docs` que la cobertura documental no cambia.
- [x] 2.5 Envolver `@theme/DocSidebarItem/Category` para anteponer el icono y ajustar jerarquía, borde izquierdo activo y fondo sutil en CSS; verificar visualmente los diez iconos, el estado activo y que los iconos no se anuncian en lectores de pantalla.

## 3. Command Palette con índice local

- [x] 3.1 Crear `plugins/local-search-index.js` con `contentLoaded` y `api.setGlobalData`, indexando título, categoría, `permalink`, encabezados y texto; verificar que la salida incluye `login` y se regenera tras editar un doc en desarrollo.
- [x] 3.2 Registrar el plugin local en `docusaurus.config.js` sin activar Algolia; verificar `npm run build` y que no se realizan peticiones a servicios de búsqueda externos.
- [x] 3.3 Crear `src/components/CommandPalette/CommandPalette.js` con fondo difuminado, input destacado, pistas `kbd`, resultados agrupados por categoría y estado vacío; verificar diseño en modo claro, oscuro y ancho estrecho.
- [x] 3.4 Implementar en el palette el atajo `Ctrl/Cmd+K`, foco inicial, flechas, `Enter`, `Escape`, cierre por backdrop, focus trap y retorno de foco; verificar la secuencia completa de teclado en el navegador.
- [x] 3.5 Implementar filtrado normalizado sin tildes y orden por título, encabezado y texto; verificar que una búsqueda con acentos devuelve los mismos resultados que sin ellos.

## 4. Footer y presentación del contenido

- [x] 4.1 Ampliar `themeConfig.footer.links` a tres columnas y añadir `footer.logo` con `static/img/logo.svg`, conservando las rutas de Introducción, Login, Administración, GitLab y EICMA Soft; verificar enlaces, copyright y contraste en ambos temas.
- [x] 4.2 Añadir en `src/theme/Root.js` el `IntersectionObserver` de entrada única sobre bloques del contenido, activo solo con `html.ag-reveal-ready` y desactivado con `prefers-reduced-motion`; verificar que no hay salto de layout y que el contenido permanece visible sin JS o sin observador.
- [x] 4.3 Reforzar contraste de tablas y bloques de código y aplicar transiciones de ~200 ms con `:focus-visible` en botones, enlaces y sidebar; verificar con capturas en claro/oscuro que cabeceras de tabla y tokens de sintaxis se distinguen.

## 5. Verificación de integración

- [x] 5.1 Ejecutar `npm run build` y revisar en el sitio servido la cabecera, el sidebar, el palette, el footer y las animaciones en escritorio y móvil, en ambos temas; verificar que no aparecen errores de consola.
- [x] 5.2 Revisar `git diff` y ejecutar `npm run check:docs`; verificar que no cambiaron archivos Markdown, capturas, rutas ni `package.json`, y marcar cada escenario de los tres spec delta como comprobado.
