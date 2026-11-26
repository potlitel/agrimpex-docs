# Design

## Context

El proyecto es un sitio Docusaurus 3.7 con preset `classic`, React 19 y un único archivo `src/css/custom.css` que ya define tokens `--ifm-*` para claro/oscuro. La cabecera y el pie se configuran en `docusaurus.config.js` (`themeConfig.navbar`/`footer`), el sidebar es un array estático de diez categorías en `sidebars.js` y no existe ningún componente swizzled: `src/` solo contiene la portada y estilos. `algolia: false` y `package.json` no incluye Tailwind, `lucide-react` ni plugins de búsqueda. Las diez categorías son Autenticación, Administración, Logística, Nomenclaturas, Seguridad, Reportes, Calidad, Configuración, Perfil y Acerca del Sistema. Ver `proposal.md` para la motivación y los tres spec delta para el comportamiento exigido.

## Goals / Non-Goals

**Goals:**

- Conseguir el acabado visual sin cambiar dependencias ni el contenido Markdown publicado.
- Centralizar tokens de superficie, blur, sombras, foco y movimiento para que claro/oscuro compartan la misma escala.
- Mantener el punto de extensión mínimo: configuración de Docusaurus + CSS + un pequeño conjunto de componentes.
- Generar el índice de búsqueda desde el propio contenido en cada build, sin servicios externos.

**Non-Goals:**

- No migrar a Tailwind CSS ni instalar `lucide-react` ni Algolia DocSearch.
- No reordenar, renombrar ni eliminar documentos, rutas, categorías ni capturas.
- No rediseñar la portada de Docusaurus ni las páginas Markdown; solo el chrome y la presentación.
- No implementar autenticación en el manual: el botón al backoffice es un enlace, no un flujo de sesión.

## Decisions

### 1. CSS con variables `--ifm-*` en lugar de Tailwind

`custom.css` ya es la fuente de verdad de colores y tipografía; añadir Tailwind exigiría configuración de PostCSS y clases utility conviviendo con estilos Infima. Se definen tokens propios (`--ag-glass-bg`, `--ag-glass-blur`, `--ag-focus-ring`, `--ag-transition`, `--ag-surface-active`) derivados de `--ifm-*` y se usan selectores BEM explícitos (`ag-*`). Alternativa descartada: clases Tailwind en JSX (dependencia nueva y dos sistemas de estilos). Efecto: las peticiones tipo `bg-primary/10` se traducen a fondos `color-mix()` o `rgba()` sobre el token primario; `backdrop-blur` a `backdrop-filter: blur(...)` con fallback opaco bajo `@supports not`.

### 2. Iconos SVG inline con geometría Lucide

Se crea un único componente `src/components/icons/LucideIcon.js` que devuelve `<svg>` con `stroke="currentColor"`, `fill="none"`, `stroke-width="2"` y los `path`/`circle` de los iconos (`LogIn`, `Shield`, `Truck`, `BarChart3`, `BookOpen`, `ClipboardList`, `Boxes`, `Settings2`, `UserRound`, `Info`). Cada icono se marca `aria-hidden="true"` y `focusable="false"`. Alternativa descartada: instalar `lucide-react` (dependencia nueva que el usuario excluyó). Las rutas SVG se mantienen en un mapa versionado para no repetirlas en cada categoría.

### 3. Cabecera: item `custom` + estado global de scroll

El botón «Volver al sistema» se registra en `themeConfig.navbar.items` como `{type: 'custom-backoffice', position: 'right'}`, de modo que quede a la derecha junto al toggle de tema sin swizzlear `Navbar`. Docusaurus 3.7 exige que los items personalizados usen un tipo `custom-*` y que su componente se registre en `@theme/NavbarItem/ComponentTypes`; por eso se añade un wrapper de un solo archivo que extiende el mapa original con `custom-backoffice`. El componente lee `siteConfig.customFields.backofficeUrl`, usa `<a>` para la URL configurada y se abre en la misma pestaña. El efecto glass se activa con un atributo `data-scrolled` en `<html>` y en `.navbar`, gestionado por el contenedor global (decisión 6), y estilos `html[data-scrolled='true'] .navbar` sobre `backdrop-filter`. Alternativa descartada: swizzle completo de `Navbar`, más frágil ante actualizaciones de Docusaurus.

### 4. URL del backoffice configurable en build

`docusaurus.config.js` lee `process.env.AGRIMPEX_BACKOFFICE_URL`, valida el valor con `new URL()` y lo expone en `customFields.backofficeUrl`; si falta o es inválido usa `https://agrimpex.eicma.cu`. Docusaurus genera un sitio estático, por lo que el valor queda horneado en el bundle: cambiarlo exige reconstruir. Alternativa descartada: leer la variable en runtime desde el navegador (expondría variables de build y no funcionaría en estático). No se usa `siteConfig.url` como destino para no confundir docs con backoffice.

### 5. Sidebar: `customProps` + wrapper de una sola categoría

Cada categoría de `sidebars.js` recibe `customProps: {icon: '<clave>'}` sin tocar `label`, `items` ni ids. Se swizzlea solo `@theme/DocSidebarItem/Category` en modo *wrap* para anteponer el SVG correspondiente al encabezado; si `customProps.icon` no llega, se usa un mapa por `label` como respaldo. La jerarquía, el borde izquierdo activo y el fondo sutil se resuelven en CSS con `.theme-doc-sidebar-item-category-level-1` y `.menu__link--active`, reutilizando reglas ya presentes en `custom.css`. Alternativa descartada: inserts `::before` con `content` por etiqueta (frágil ante traducciones y sin control de `aria`).

### 6. Contenedor global para modal, scroll y reveal

Se añade `src/theme/Root.js` (punto de extensión oficial de Docusaurus) como árbol raíz envolvente. Desde ahí se montan: el `CommandPalette`, el listener de scroll que actualiza `data-scrolled` y un `IntersectionObserver` que añade una clase de revelado a los bloques del contenido. El observador se registra solo si `IntersectionObserver` existe y no se activa con `prefers-reduced-motion: reduce`; por defecto el contenido no lleva clases que lo oculten, y la regla que lo oculta solo aplica cuando el contenedor añade `html.ag-reveal-ready`. Así, sin JS o sin observador el contenido sigue visible. Alternativa descartada: inyectar un script en `docusaurus.config.js` (fuera del ciclo de React y difícil de mantener).

### 7. Palette con índice local vía datos globales

Un plugin local en `plugins/local-search-index.js` usa el lifecycle `allContentLoaded` (único que expone `allContent` con los documentos de todos los plugins) para construir entradas `{title, category, permalink, headings, text}` desde los docs cargados y publicarlas con `actions.setGlobalData`. El componente `CommandPalette` consume `@docusaurus/useGlobalData`, filtra por coincidencia normalizada (sin tildes, minúsculas) y ordena por título > encabezado > texto. El modal es un `<div role="dialog" aria-modal="true">` con focus trap mínimo, `Escape` y cierre por backdrop; `Ctrl/Cmd+K` se registra en `window` con `preventDefault()`; además, un item `custom-search` en la cabecera abre el mismo modal emitiendo `ag:open-command-palette`, para que la búsqueda sea visible sin recordar el atajo. Las agrupaciones por `category` y las pistas `kbd` se renderizan desde el mismo array de resultados. Alternativas descartadas: Algolia (requiere credenciales e índice externo) y un plugin de terceros (dependencia nueva y estilos propios difíciles de igualar).

### 8. Pie: configuración + CSS, sin swizzle

Se amplían `themeConfig.footer.links` a tres columnas y se usa el campo `footer.logo` con `static/img/logo.svg` para el logotipo. Los enlaces actuales (Introducción, Login, Administración, GitLab, EICMA Soft) conservan sus rutas y solo se reorganizan. CSS añade una rejilla responsive y separadores sutiles. Alternativa descartada: swizzle de `Footer` para HTML arbitrario (innecesario para columnas y logo).

### 9. Contraste y movimiento

Se redefinen variables de tabla y código (`--ifm-table-border-color`, fondos de celda y tokens de Prism ya configurados con `prismThemes.github`/`dracula`) en ambos temas, con `transition: background-color/color/border-color 200ms` y `:focus-visible` con `--ag-focus-ring`. Los tokens de Prism existentes se conservan; solo se refuerza el fondo del bloque y el borde. En `prefers-reduced-motion: reduce` se anulan animaciones y transiciones.

## Risks / Trade-offs

- [backdrop-filter no soportado en navegadores antiguos] → fallback con fondo opaco vía `@supports not (backdrop-filter: blur(1px))`.
- [Swizzle de `DocSidebarItem/Category` puede requerir ajuste al actualizar Docusaurus] → envolver solo ese componente, documentar la versión 3.9.2 y mantener el mapa por `label` como respaldo.
- [El workaround de `NavbarItem/ComponentTypes` puede cambiar en futuras versiones] → mantener el wrapper de un solo archivo y documentar que Docusaurus 3.7 exige tipos `custom-*`.
- [Índice desactualizado al editar docs en caliente] → el plugin se ejecuta en `allContentLoaded` en build y en dev; verificar recarga tras editar un documento.
- [URL del backoffice horneada en el bundle] → documentar que requiere rebuild y validar el valor en config para evitar enlaces relativos accidentales.
- [Focus trap del modal incompleto] → probar `Tab`, `Shift+Tab`, `Escape`, clic en backdrop y retorno de foco en Chromium y Firefox.
- [Animaciones que oculten contenido] → ocultar solo con `html.ag-reveal-ready` y `unobserve` tras la primera aparición; respetar movimiento reducido.
- [Sin utilidades Tailwind] → los estilos quedan explícitos en CSS con prefijo `ag-`; aceptar algo más de CSS a cambio de cero dependencias.

## Migration Plan

1. Añadir `customFields.backofficeUrl` y el item `custom` de navbar en `docusaurus.config.js`; verificar build sin la variable de entorno y con ella.
2. Incorporar tokens y estados en `src/css/custom.css` y la hoja del palette; comprobar claro/oscuro y `@supports`.
3. Crear `LucideIcon`, el botón del backoffice, `CommandPalette` y `src/theme/Root.js`; registrar el plugin de índice local.
4. Añadir `customProps.icon` a las diez categorías en `sidebars.js` y envolver `DocSidebarItem/Category`.
5. Ampliar columnas y logo del footer en `docusaurus.config.js`.
6. Verificar `npm run build`, búsqueda `Ctrl/Cmd+K`, navegación por teclado, scroll, responsive y contraste; revisar que ningún Markdown ni captura haya cambiado.
7. Rollback: revertir los commits del cambio; no hay migración de datos ni cambios de rutas que revertir.
