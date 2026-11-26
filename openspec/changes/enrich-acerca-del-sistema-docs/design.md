# Design

## Context

Ver `proposal.md` para la motivación y `specs/acerca-del-sistema-reference/spec.md` para los requisitos. Restricciones observadas en el repositorio:

- La sección reúne nueve páginas canónicas: `intro` (en la raíz de `docs/`, con captura `intro.png`) y ocho páginas bajo `docs/core/`. Todas tienen front matter, H1 y las secciones Propósito, Acceso, Captura, Campos y Acciones, sin secciones adicionales y sin páginas `unlisted`.
- `/verify` y `/verify/:code` se declaran fuera del layout autenticado y sin guards. `/error` es un contenedor con hijas `404` y `500`; la ruta vacía y la comodín redirigen a `404`.
- `/about`, `/contact`, `/privacy` y `/terms` se declaran dentro del layout autenticado, aunque la documentación publicada las describe como acceso público. La captura se hará con la sesión disponible y la verificación de acceso queda incluida en la infraestructura; la documentación nueva describirá el contenido y la ruta sin contradecir el texto publicado.
- `intro`, `core/layout` y `core/template` comparten `source_route: /dashboard`; las capturas sufijadas deberán distinguirse por sufijo y por `scrollY` o `clickText`, sin sustituir las imágenes originales.
- `scripts/docs-captures.json`, `scripts/capture-screenshots.js` (modo `extra`) y `scripts/check-doc-coverage.mjs` ya existen. El script contiene una ruta concreta de ejemplo para `core/verify` (`/verify/DEMO-CODE`) y omite rutas con `:` o `$`.

## Goals / Non-Goals

**Goals:**

- Añadir secciones nuevas a las nueve páginas sin tocar una sola línea del contenido ya publicado.
- Derivar rutas, contenido y estados de los enrutadores, componentes e i18n del frontend.
- Capturar los estados relevantes de cada sección con las capacidades existentes del script de capturas.
- Reutilizar el manifiesto y el validador, ampliando únicamente la lista de encabezados permitidos y las entradas nuevas.

**Non-Goals:**

- Modificar el frontend, sus rutas ni su internacionalización.
- Cambiar el número de pantallas, los `docId`, el sidebar ni las páginas `unlisted` (no hay en esta sección).
- Redactar las secciones existentes ni reemplazar las capturas actuales.
- Resolver la discrepancia de acceso de las páginas informativas cambiando el frontend o el texto publicado.

## Decisions

### 1. Edición aditiva por bloque

Cada página se modifica únicamente insertando bloques nuevos después de `## Acciones`. El prefijo original se compara con `git show HEAD:<archivo>` antes y después para garantizar que no cambió.

- **Alternativa descartada**: regenerar páginas desde el inventario → contraviene la restricción de no modificar lo documentado y borraría las capturas publicadas.

### 2. Secciones nuevas con nombres fijos

| Páginas | Encabezado nuevo |
|---------|------------------|
| `intro` | `Mapa del manual` |
| `core/about`, `core/contact`, `core/privacy`, `core/terms` | `Contenido y acceso` |
| `core/errors` | `Códigos y recuperación` |
| `core/layout`, `core/template` | `Estructura de la plantilla` |
| `core/verify` | `Verificación pública` |

Los cinco nombres son nuevos para `check-doc-coverage.mjs`.

- **Alternativa descartada**: documentar el contenido dentro de la tabla Campos existente → mezclaría contenido nuevo con el publicado y rompería la verificación aditiva.

### 3. Fuente de verdad del frontend

Se leen únicamente los enrutadores y las páginas `core` del frontend, sus plantillas y archivos `i18n`, además de los vocablos globales. Las rutas documentadas SHALL ser las declaradas en los enrutadores. Cuando la documentación publicada y el enrutador difieran en el acceso, se conserva el texto publicado y se documenta el contenido observable sin inventar permisos.

- **Alternativa descartada**: usar el inventario → no distingue las rutas públicas de las autenticadas ni las dos variantes de error.

### 4. Capturas sufijadas y rutas concretas

Se añaden entradas a `scripts/docs-captures.json` con `docId`, `suffix`, ruta concreta y, cuando haga falta, `clickText`, `scrollY` o `waitFor`. El archivo resultante es `static/img/screenshots/<docId>-<sufijo>.png`; la PNG original nunca se sustituye. Para `core/verify` se usa `/verify/DEMO-CODE` en lugar de `/verify/:code`. Las entradas de otros módulos no se modifican.

- **Alternativa descartada**: capturar `/verify/:code` con parámetros → el script omite rutas paramétricas y la imagen no sería reproducible.

### 5. Vistas que comparten ruta

`intro`, `core/layout` y `core/template` apuntan a `/dashboard`. Para evitar tres imágenes idénticas, las entradas del manifiesto combinan sufijos distintos con desplazamiento vertical o clics sobre los elementos de la plantilla. Si una vista no ofrece un estado diferenciable, se documenta con una sola captura y se explica la relación entre las páginas.

- **Alternativa descartada**: reutilizar una única captura para las tres páginas → incumple el requisito de captura real por sección nueva.

### 6. Validación extendida sin cambiar el inventario

`npm run check:docs` seguirá comprobando inventario, docs, sidebar y capturas; se ampliará con los cinco encabezados nuevos, con la validación de las entradas nuevas del manifiesto y con el requisito de más de una captura en el mapa, los errores y la verificación pública. El número de pantallas permanece en 113.

### 7. Sesión de captura

Se reutiliza la base HTTPS `https://localhost:5000`, el bearer con rol de administrador y el Chrome de la caché de Playwright. Las rutas públicas no exigen sesión, pero el script inyecta el token de forma condicional, por lo que funciona con la misma ejecución que el resto del manual.

## Risks / Trade-offs

- [Las páginas informativas pueden pedir sesión en el entorno local] → verificar el acceso en la fase de infraestructura y dokumentar la ruta observada sin cambiar el texto publicado.
- [Tres páginas comparten `/dashboard`] → distinguir las capturas por sufijo y desplazamiento, y verificar que muestran elementos distintos.
- [La verificación pública depende de un código válido] → usar el código de ejemplo y no prometer un resultado concreto.
- [Las etiquetas del pie pueden variar por i18n] → ajustar `clickText` a la etiqueta real sin modificar el script.
- [Cambio accidental de texto publicado] → verificar el prefijo inmutable de cada archivo antes de aceptar el enriquecimiento.

## Migration Plan

No hay migración de datos ni de rutas. La implementación consiste en añadir secciones a nueve archivos Markdown, nuevas PNG y entradas al manifiesto, y ampliar la lista de encabezados del validador. La reversión se logra revertiendo el commit; las capturas antiguas permanecen intactas.

## Open Questions

Ninguna. El alcance, los nombres de sección y los estados a capturar quedan fijados; la discrepancia de acceso de las páginas informativas se trata como riesgo verificable, no como decisión pendiente.
