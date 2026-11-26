# Proposal

## Why

El manual ya cubre los módulos de Agrimpex, pero su capa visual sigue siendo la de un tema Docusaurus casi sin personalizar: barra opaca, sidebar plano, sin búsqueda global y un footer de dos columnas. Esto obliga al usuario a escanear sin jerarquía y rompe la coherencia con el backoffice, donde la interfaz usa iconos Lucide y patrones modernos. Elevar la presentación ahora, sin tocar el contenido publicado, mejora la orientación y la percepción de calidad del sistema.

## What Changes

- Rediseñar el header con glassmorphism al hacer scroll, logo más prominente y un botón «Volver al sistema» a la derecha, junto al selector de tema; la URL destino se define por variable de entorno `AGRIMPEX_BACKOFFICE_URL` con valor por defecto `https://agrimpex.eicma.cu`.
- Reorganizar el sidebar: jerarquía tipográfica y espaciados, iconos SVG inline de trazo Lucide para las diez secciones principales, y estado activo con borde izquierdo de color primario y fondo sutil.
- Crear un Command Palette global activado con `Ctrl+K`/`Cmd+K`: fondo difuminado, input amplio, teclas `kbd` visibles, resultados categorizados del índice local de documentación y navegación por teclado. No usa Algolia (hoy `algolia: false`) ni servicios externos.
- Rediseñar el footer en múltiples columnas con logo, enlaces rápidos, copyright y enlaces a GitLab y EICMA Soft.
- Dar interactividad al contenido: animaciones de entrada `fade-in`/`slide-up` al hacer scroll, transiciones suaves de ~200 ms en botones, enlaces y hovers del sidebar, y mayor contraste en bloques de código y tablas.
- Mantener `package.json` intacto: los efectos se logran con CSS sobre variables `--ifm-*` y SVG inline con geometría Lucide, sin añadir Tailwind CSS, `lucide-react` ni plugins de búsqueda.
- No modificar el contenido Markdown ni las capturas existentes; los cambios se limitan a configuración, componentes y estilos de la interfaz.

## Capabilities

### New Capabilities

- `docs-shell`: chrome de navegación del manual (header, sidebar y footer), sus estados y el acceso configurable al backoffice.
- `global-search`: descubrimiento de documentación mediante palette de comandos con índice local, atajos y resultados categorizados.
- `content-presentation`: presentación y feedback visual del contenido —animaciones, transiciones y legibilidad de código y tablas—.

### Modified Capabilities

- Ninguna: las especificaciones `*-reference` describen cobertura documental y no cambian.

## Impact

- `docusaurus.config.js`: `customFields` con la URL del backoffice y ajustes de navbar/footer; `algolia` permanece desactivado.
- `sidebars.js`: metadatos de iconos por categoría sin alterar ids ni rutas de documentos.
- `src/css/custom.css`: tokens de glassmorphism, superficies, sombras, animaciones y estados de foco; nueva hoja para el palette.
- Componentes React nuevos bajo `src/components/` y un contenedor global (p. ej. `src/theme/Root.js`) para el modal y las animaciones; posible wrapper de `Navbar`/`Footer` según el punto de extensión elegido.
- Índice de búsqueda generado en build desde los docs, sin dependencias ni llamadas de red externas.
- Sin cambios en contenido, rutas, APIs ni dependencias; requiere verificación de build, teclado, responsive y contraste en modo claro/oscuro.
