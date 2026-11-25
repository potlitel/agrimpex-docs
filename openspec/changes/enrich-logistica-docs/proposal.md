# Proposal

## Why

Las 33 páginas canónicas de Logística muestran una sola captura y tablas genéricas: no explican los filtros reales de los listados, las operaciones y restricciones por rol, los formularios compartidos ni qué muestran los dashboards y las vistas de contenedores. Después de enriquecer Calidad, Autenticación y Administración con el mismo patrón, Logística queda como la sección con más pantallas y menos cobertura documental suficiente.

## What Changes

- Enriquecer de forma **adicional** las 33 páginas vigentes de `docs/logistica/`: conservar literalmente el front matter, el H1 y las secciones Propósito, Acceso, Captura, Campos y Acciones ya publicadas, y añadir secciones nuevas sin reescribir ni eliminar las actuales. Las 12 páginas `unlisted` de migración no se modifican.
- Documentar en `logistica/index.md` el mapa del módulo —importación, contenedores, operaciones CRUD y reportes— con sus rutas y roles, usando más de una captura real como contrapartida de las secciones ya enriquecidas.
- Documentar el grupo de importación (nueve páginas: dashboard, Mariel, Santiago, no devueltos, extraídos, recepción en puerta, logs, estadísticas y excluidos) con la interpretación de sus paneles, columnas, filtros y operaciones observables.
- Documentar el grupo de control y contenedores (diez páginas: control de importaciones, inventario en terminal, tránsito, retorno, documentos de embarque y su formulario, explorador, trazabilidad, extracciones diarias y extraídos) con sus filtros, estados, navegación y formularios compartidos.
- Documentar los seis pares listado/formulario (entregas, inbonds, solicitudes de extensión, desaduane, especialistas y fletes aéreos) con filtros, operaciones, roles, rutas de edición y validaciones de los campos.
- Documentar `logistica/reportes.md` con la generación, el rango de fechas y la exportación disponibles.
- Incorporar al menos una captura real en cada sección nueva y más de una cuando la sección lo amerite (mapa del módulo, paneles con filtros, formularios con varias vistas y dashboards con gráficos).
- Ampliar el manifiesto `scripts/docs-captures.json` con las entradas de Logística y extender `scripts/check-doc-coverage.mjs` para aceptar los encabezados nuevos y validar sus capturas. `scripts/capture-screenshots.js` se reutiliza sin cambios de comportamiento.
- Mantener `scripts/docs-inventory.json` como fuente de verdad: las 113 pantallas y sus `docId` no cambian.

## Capabilities

### New Capabilities

- `logistica-reference`: cobertura documental del módulo Logística —importación, contenedores, operaciones CRUD y reportes— con capturas reales por sección y ediciones estrictamente aditivas.

### Modified Capabilities

- Ninguna. Las capabilities `calidad-reference` y `administracion-reference` no cambian sus requisitos; este change solo crea una capability nueva.

## Impact

- `docs/logistica/` (33 páginas canónicas, solo adiciones) y `static/img/screenshots/logistica/` (nuevas capturas sufijadas).
- `scripts/docs-captures.json` y `scripts/check-doc-coverage.mjs`: nuevas entradas y encabezados permitidos; `scripts/capture-screenshots.js` sin cambios.
- `scripts/docs-inventory.json`: sin cambios; el número de pantallas y los `docId` se conservan.
- Repo vecino `../agrimpex-backoffice` se usa únicamente como fuente de lectura de rutas, componentes, validaciones e i18n; no se modifica.
