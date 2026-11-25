# Proposal

## Why

Las siete páginas actuales de Calidad muestran una sola captura por pantalla y no describen los filtros de los listados, los campos de los formularios ni las operaciones CRUD disponibles. El panel `/docs/calidad/` es un dashboard para la toma de decisiones, pero hoy queda representado por una única imagen sin explicación de sus KPIs, gráficos ni tablas.

## What Changes

- Enriquecer de forma **adicional** las siete páginas existentes de `docs/calidad/`: conservar literalmente el front matter, el H1 y las secciones Propósito, Acceso, Captura, Campos y Acciones ya publicadas, y añadir secciones nuevas sin reescribir ni eliminar las actuales.
- Documentar, para cada una de las seis entidades (permisos Cenasa, Fitosanitario e Inhem; preliberaciones de Salud, Veterinario y Fitosanitario):
  - los filtros del listado, incluidos controles de texto, selectores, pills de estado y selector de año,
  - las operaciones CRUD y de documento (alta, edición, eliminación, exportación, vista previa y descarga) con roles y rutas de origen,
  - todos los campos de los formularios, sus pestañas, validaciones y botones; `add` y `edit/:id` comparten componente y se documentan juntos.
- Enriquecer `docs/calidad/index.md`, renderizado en `http://localhost:3003/docs/calidad/`, con la interpretación de los KPIs, series temporales, distribución por estado, mapas de calor y resúmenes por entidad, usando **más de una captura real**.
- Incorporar al menos una captura real en cada sección nueva, y varias cuando la sección lo amerite (panel de decisión, formularios con pestañas, listados con filtros).
- Ampliar `scripts/capture-screenshots.js` para admitir múltiples capturas por documento y `scripts/check-doc-coverage.mjs` para verificar que toda sección nueva referencia una imagen existente.
- Mantener `scripts/docs-inventory.json` como fuente de verdad; el inventario de pantallas no cambia, solo se enriquece la documentación derivada.

## Capabilities

### New Capabilities

- `calidad-reference`: cobertura documental del módulo Calidad —filtros, formularios, operaciones CRUD y dashboard de toma de decisiones— con capturas reales por sección y ediciones estrictamente aditivas.

### Modified Capabilities

- Ninguna. `openspec list --specs` no reporta capabilities en `openspec/specs/`.

## Impact

- `docs/calidad/` (7 páginas, solo adiciones) y `static/img/screenshots/calidad/` (nuevas capturas).
- `scripts/capture-screenshots.js` y `scripts/check-doc-coverage.mjs`: soporte y validación de múltiples capturas por página.
- `scripts/docs-inventory.json`: solo si hace falta metadata adicional; no cambia el número de pantallas ni de `docId`.
- Sitio Docusaurus servido en `http://localhost:3003/docs/calidad/`.
- Repo vecino `../agrimpex-backoffice` se usa únicamente como fuente de lectura de rutas, componentes e i18n; no se modifica.
