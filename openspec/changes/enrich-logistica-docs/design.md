# Design

## Context

Ver `proposal.md` para la motivación y `specs/logistica-reference/spec.md` para los requisitos. Restricciones observadas en el repositorio:

- `docs/logistica/` tiene 33 páginas canónicas con front matter, H1 y las secciones Propósito, Acceso, Captura, Campos y Acciones, más una captura `<docId>.png` por página. No tiene ninguna sección adicional actualmente. También contiene 12 páginas `unlisted` de migración que solo redirigen y no deben modificarse.
- El inventario declara 33 `docId` para Logística, agrupados en: índice (1), importación (9), control y contenedores (10), seis pares listado/formulario (12) y reportes (1). El total del inventario es 113 pantallas.
- Las rutas viven bajo `/logistic`: `LogisticPage` es un contenedor con `router-outlet`, `/logistic/import` es otro contenedor con nueve hijas, y los pares listado/formulario usan `list`, `add` y `edit` (con `id` por parámetro de consulta o por segmento según el módulo). El explorador de documentos añade un guard de rol explícito.
- Los textos visibles están en `i18n` del módulo logístico y en los vocablos globales españoles; las tablas y formularios comparten componentes genéricos (`ui-generic-table-page`, `ui-table-filter-sheet`).
- `scripts/docs-captures.json`, `scripts/capture-screenshots.js` (modo `extra`) y `scripts/check-doc-coverage.mjs` ya existen y cubren clics por texto, desplazamiento vertical y horizontal y validación de manifiestos. El validador ya permite `Filtros del listado`, `Formulario (alta y edición)`, `Operaciones y documentos` e `Interpretación del panel`.

## Goals / Non-Goals

**Goals:**

- Añadir secciones nuevas a las 33 páginas sin tocar una sola línea del contenido ya publicado ni las páginas de migración.
- Derivar filtros, columnas, operaciones, validaciones y restricciones de los componentes, el enrutador y el i18n español del frontend.
- Capturar los estados relevantes de cada sección con las capacidades existentes del script de capturas.
- Reutilizar el manifiesto y el validador, ampliando únicamente la lista de encabezados permitidos y las entradas nuevas.

**Non-Goals:**

- Modificar el frontend, sus rutas ni su internacionalización.
- Cambiar el número de pantallas, los `docId`, el sidebar ni las páginas `unlisted`.
- Redactar las secciones existentes ni reemplazar las capturas actuales.
- Depender de capacidades de relleno de campos o intercepción de respuestas que aún no están aplicadas en otros changes.

## Decisions

### 1. Edición aditiva por bloque

Cada página se modifica únicamente insertando bloques nuevos después de `## Acciones`. El prefijo original se compara con `git show HEAD:<archivo>` antes y después para garantizar que no cambió; las 12 páginas `unlisted` quedan fuera del alcance.

- **Alternativa descartada**: regenerar páginas desde el inventario → contraviene la restricción de no modificar lo documentado y borraría las capturas publicadas.

### 2. Secciones nuevas con nombres fijos

Bloques previstos por grupo:

| Grupo | Encabezados nuevos |
|-------|--------------------|
| Índice | `Mapa del módulo` |
| Importación (9) | `Interpretación del panel`, `Filtros del listado`, `Columnas y resultados` |
| Control y contenedores (10) | `Control y trazabilidad`, `Filtros del listado`, `Formulario (alta y edición)` |
| CRUD (12) | `Filtros del listado`, `Operaciones y estados`, `Formulario (alta y edición)` |
| Reportes (1) | `Generación y exportación` |

De estos, `Mapa del módulo`, `Operaciones y estados`, `Control y trazabilidad`, `Columnas y resultados` y `Generación y exportación` son nombres nuevos para `check-doc-coverage.mjs`; los demás ya están permitidos.

- **Alternativa descartada**: documentar los filtros dentro de la tabla Campos existente → mezclaría contenido nuevo con el publicado y rompería la verificación aditiva.

### 3. Fuente de verdad del frontend

Se leen únicamente los módulos `logistic` del frontend, sus rutas, plantillas, componentes y archivos `i18n` en español, además de los vocablos globales. Las rutas documentadas SHALL ser las declaradas en los enrutadores. Los nombres internos de servicios se traducen a comportamientos observables.

- **Alternativa descartada**: usar el inventario → no refleja validaciones, filtros reactivos ni restricciones de estado.

### 4. Capturas sufijadas sobre el manifiesto existente

Se añaden entradas a `scripts/docs-captures.json` con `docId`, `suffix`, ruta concreta y, cuando haga falta, `clickText`, `scrollY`, `scrollRight` o `waitFor` (para gráficos). El archivo resultante es `static/img/screenshots/<docId>-<sufijo>.png`; la PNG original nunca se sustituye. Las entradas de Calidad, Autenticación y Administración no se modifican.

- **Alternativa descartada**: reutilizar las 33 imágenes existentes → incumple el requisito de captura real por sección nueva y no muestra paneles de filtros ni estados de dashboards.

### 5. Estados capturables sin extensiones de script

Los paneles de filtros se abren pulsando **Filtrar** (`clickText`); las acciones de tabla se revelan con `scrollRight` cuando el contenedor se desplaza horizontalmente y con `scrollY` cuando no lo hace; los dashboards esperan al lienzo de gráficos (`waitFor`). Las rutas de edición con `:id` se sustituyen por la ruta de alta en las capturas. No se requiere rellenar campos ni simular respuestas de API, por lo que `capture-screenshots.js` no cambia.

- **Alternativa descartada**: capturar `edit/:id` con un identificador inventado → el script omite rutas con parámetros y la imagen no sería reproducible.

### 6. Validación extendida sin cambiar el inventario

`npm run check:docs` seguirá comprobando inventario, docs, sidebar y capturas; se ampliará con los cinco encabezados nuevos, con la validación de las entradas nuevas del manifiesto y con requisitos de más de una captura para el mapa y los paneles con gráficos. El número de pantallas permanece en 113.

### 7. Sesión y ejecución por lotes

Se reutiliza la base HTTPS `https://localhost:5000`, el bearer con rol de administrador y el Chrome de la caché de Playwright. Las rutas de Logística requieren sesión, por lo que se conserva la inyección de token del script. Con cerca de un centenar de entradas, la captura se ejecuta por grupos con `DOCS_CAPTURE_ONLY`, `DOCS_CAPTURE_SUFFIX` y `DOCS_CAPTURE_SKIP_EXISTING=1` para poder reanudar sin sobrescribir lo ya generado; el script reinicia el navegador cada 12 capturas.

## Risks / Trade-offs

- [Las rutas lazy de Logística pueden renderizar tarde en Chrome headless] → verificar el estado capturado, usar `waitFor` y reintentar el grupo antes de darlo por fallido.
- [Algunas tablas no tienen contenedor con desplazamiento horizontal] → usar `scrollY` en esas entradas y documentar solo las acciones visibles.
- [Los dashboards dependen de bibliotecas de gráficos y datos externos] → esperar el lienzo y no documentar valores concretos como garantizados.
- [Los formularios con estado persistente pueden mostrar un diálogo de recuperación] → capturar solo el estado inicial de cada formulario y evitar dos capturas del mismo formulario en una sola sesión.
- [Crecimiento del repositorio por nuevas PNG] → limitar las capturas a los estados documentados y no duplicar vistas equivalentes.
- [Cambio accidental de texto publicado al editar 33 archivos] → verificar el prefijo inmutable de cada archivo antes de aceptar el enriquecimiento.

## Migration Plan

No hay migración de datos ni de rutas. La implementación consiste en añadir secciones a 33 archivos Markdown, nuevas PNG y entradas al manifiesto, y ampliar la lista de encabezados del validador. La reversión se logra revertiendo el commit; las capturas antiguas permanecen intactas.

## Open Questions

Ninguna. El alcance, los nombres de sección y los estados a capturar quedan fijados.
