# Proposal

## Why

Las cinco páginas canónicas de Seguridad muestran una sola captura y tablas genéricas: no explican los filtros de trazabilidad, la diferencia entre la verificación interna y la pública, los indicadores del dashboard ni cómo se navega desde una notificación a su traza. Después de enriquecer Calidad, Autenticación, Administración, Logística y Nomenclaturas con el mismo patrón, Seguridad queda como la sección de control con menos cobertura documental.

## What Changes

- Enriquecer de forma **adicional** las cinco páginas vigentes de `docs/seguridad/`: conservar literalmente el front matter, el H1 y las secciones Propósito, Acceso, Captura, Campos y Acciones ya publicadas, y añadir secciones nuevas sin reescribir ni eliminar las actuales. La página `unlisted` de migración no se modifica.
- Documentar en `seguridad/index.md` el mapa del módulo —trazabilidad, verificación de documentos y notificaciones— con sus rutas y roles, aclarando que `/security/trace` redirige al listado y usando más de una captura real.
- Documentar en `seguridad/trazabilidad/listado.md` los filtros del panel (usuario, rol, rango de fechas, módulo, acción, clase e identificador de entidad y correlación), las columnas y la apertura del diálogo de diferencias.
- Documentar en `seguridad/trazabilidad/dashboard.md` los indicadores agregados y su significado, sin prometer valores concretos.
- Documentar en `seguridad/verificar-documento.md` el flujo de verificación por código CSV, el resultado, las acciones de copiar, descargar, imprimir y contactar, y la distinción con la ruta pública `/verify/:code`.
- Documentar en `seguridad/notificaciones.md` el detalle de la notificación —severidad, estado de lectura, fecha relativa y tipo—, el acceso a la traza asociada y a la vista completa, usando una ruta concreta con `entityType` y `entityId` de ejemplo en lugar del patrón con parámetros.
- Incorporar al menos una captura real en cada sección nueva y más de una cuando la sección lo amerite (mapa del módulo y panel de filtros).
- Ampliar el manifiesto `scripts/docs-captures.json` con las entradas de Seguridad y extender `scripts/check-doc-coverage.mjs` para aceptar los encabezados nuevos y validar sus capturas. `scripts/capture-screenshots.js` se reutiliza sin cambios de comportamiento.
- Mantener `scripts/docs-inventory.json` como fuente de verdad: las 113 pantallas y sus `docId` no cambian.

## Capabilities

### New Capabilities

- `seguridad-reference`: cobertura documental del módulo Seguridad —trazabilidad, verificación documental y notificaciones— con capturas reales por sección y ediciones estrictamente aditivas.

### Modified Capabilities

- Ninguna. Las capabilities ya publicadas no cambian sus requisitos; este change solo crea una capability nueva.

## Impact

- `docs/seguridad/` (cinco páginas canónicas, solo adiciones) y `static/img/screenshots/seguridad/` (nuevas capturas sufijadas).
- `scripts/docs-captures.json` y `scripts/check-doc-coverage.mjs`: nuevas entradas y encabezados permitidos; `scripts/capture-screenshots.js` sin cambios.
- `scripts/docs-inventory.json`: sin cambios; el número de pantallas y los `docId` se conservan.
- Repo vecino `../agrimpex-backoffice` se usa únicamente como fuente de lectura de rutas, componentes e i18n; no se modifica.
