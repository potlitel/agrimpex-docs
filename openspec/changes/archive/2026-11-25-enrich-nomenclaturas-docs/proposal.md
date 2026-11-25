# Proposal

## Why

Las 34 páginas canónicas de Nomenclaturas muestran una sola captura y tablas genéricas: no explican los filtros reales de los listados, las operaciones y roles, los formularios compartidos por `add` y `edit`, ni las excepciones de los nomencladores de solo lectura. Después de enriquecer Calidad, Autenticación, Administración y Logística con el mismo patrón, Nomenclaturas queda como la sección con más páginas homogéneas y menos cobertura documental suficiente.

## What Changes

- Enriquecer de forma **adicional** las 34 páginas vigentes de `docs/nomenclaturas/`: conservar literalmente el front matter, el H1 y las secciones Propósito, Acceso, Captura, Campos y Acciones ya publicadas, y añadir secciones nuevas sin reescribir ni eliminar las actuales. Las siete páginas `unlisted` de migración no se modifican.
- Documentar en `nomenclaturas/index.md` el mapa del módulo —nomencladores básicos, logísticos, comerciales y de apoyo— con sus rutas y roles, usando más de una captura real.
- Documentar en cada uno de los 33 listados los filtros disponibles (búsqueda, panel **Filtrar** cuando exista), las columnas, las operaciones de alta, edición con `id` por parámetro de consulta y eliminación, y los roles que las ejecutan.
- Documentar los formularios compartidos por `add` y `edit`, distinguiendo el formulario genérico de nomencladores de los formularios con campos propios (operador, planta, cliente, proveedor, buque, aerolínea, dirección de descarga, entre otros), con sus campos, obligatoriedad y validaciones.
- Señalar explícitamente las excepciones observables, como el nomenclador que solo expone listado (`solicitud-compra`) y las rutas que redirigen de la raíz del nomenclador a `list`.
- Incorporar al menos una captura real en cada sección nueva y más de una cuando la sección lo amerite (mapa del módulo y listados con panel de filtros).
- Ampliar el manifiesto `scripts/docs-captures.json` con las entradas de Nomenclaturas y extender `scripts/check-doc-coverage.mjs` para aceptar los encabezados nuevos y validar sus capturas. `scripts/capture-screenshots.js` se reutiliza sin cambios de comportamiento.
- Mantener `scripts/docs-inventory.json` como fuente de verdad: las 113 pantallas y sus `docId` no cambian.

## Capabilities

### New Capabilities

- `nomenclaturas-reference`: cobertura documental del módulo Nomenclaturas —nomencladores, listados, formularios compartidos y excepciones— con capturas reales por sección y ediciones estrictamente aditivas.

### Modified Capabilities

- Ninguna. Las capabilities `calidad-reference`, `administracion-reference` y `logistica-reference` no cambian sus requisitos; este change solo crea una capability nueva.

## Impact

- `docs/nomenclaturas/` (34 páginas canónicas, solo adiciones) y `static/img/screenshots/nomenclaturas/` (nuevas capturas sufijadas).
- `scripts/docs-captures.json` y `scripts/check-doc-coverage.mjs`: nuevas entradas y encabezados permitidos; `scripts/capture-screenshots.js` sin cambios.
- `scripts/docs-inventory.json`: sin cambios; el número de pantallas y los `docId` se conservan.
- Repo vecino `../agrimpex-backoffice` se usa únicamente como fuente de lectura de rutas, componentes y validaciones; no se modifica.
