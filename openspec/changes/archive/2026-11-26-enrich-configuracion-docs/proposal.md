# Proposal

## Why

Las cuatro páginas canónicas de Configuración muestran una sola captura y tablas genéricas: no explican las pestañas del formulario ni cuáles son exclusivas de administrador, los filtros del historial de sincronización Recomplus, las secciones del origen de parte ni la redirección de la raíz del módulo. Después de enriquecer Calidad, Autenticación, Administración, Logística, Nomenclaturas, Seguridad y Reportes con el mismo patrón, Configuración queda como el último área de ajustes sin cobertura documental suficiente. La revisión del componente detectó que `/settings/form` expone diez pestañas y solo cinco estaban documentadas.

## What Changes

- Enriquecer de forma **adicional** las cuatro páginas vigentes de `docs/configuracion/`: conservar literalmente el front matter, el H1 y las secciones Propósito, Acceso, Captura, Campos y Acciones ya publicadas, y añadir secciones nuevas sin reescribir ni eliminar las actuales.
- Documentar en `configuracion/index.md` el mapa del módulo —formulario general y preferencias, sincronización Recomplus y origen de parte— con sus rutas y roles, aclarando que `/settings` redirige a `/settings/form` y que las dos subrutas de administración están restringidas por `canMatch`.
- Documentar en `configuracion/formulario.md`, en subsecciones añadidas después de `## Acciones`, las diez pestañas reales de `ConfigurationFormComponent` en su orden (`general`, `sequences`, `operations`, `recomplus`, `import_permits`, `model_signatures`, `permission_matrix`, `verification`, `notifications`, `report_parameters`), con etiqueta visible, enlace profundo `?tab=` cuando aplica, rol, controles, efecto y forma de guardado. Distinguir la pestaña Recomplus del formulario de la ruta `/settings/recomplus-sync`.
- Documentar en `configuracion/recomplus-sync.md` los filtros del historial (recurso, estado de sincronización y usuario que lo disparó), las columnas y la apertura del panel de detalle, con el rol de administrador que exige la ruta.
- Documentar en `configuracion/origen-parte.md` las ocho secciones de configuración del parte diario —conexión, filtrado, adjuntos, límites, frecuencia, notificaciones, logging y reintentos—, sus opciones y la prueba de conexión, con el rol de administrador que exige la ruta.
- Explicar cada pestaña con texto extendido —no solo una fila de tabla— e incluir una captura real por pestaña: once en el formulario, porque Notificaciones muestra «Mis Preferencias» y «Configuración de Roles». Corregir la captura de «Mis Preferencias» para seleccionar explícitamente esa subvista. Incorporar al menos una captura real en las demás secciones nuevas y más de una en el mapa del módulo, sin usar el placeholder compartido.
- Ampliar el manifiesto `scripts/docs-captures.json` con las entradas de Configuración —incluidas las cinco pestañas nuevas y la corrección de Notificaciones— y extender `scripts/check-doc-coverage.mjs` para aceptar los encabezados nuevos, validar sus capturas y exigir once imágenes de pestañas en el formulario. `scripts/capture-screenshots.js` se reutiliza sin cambios de comportamiento.
- Mantener `scripts/docs-inventory.json` como fuente de verdad: las 113 pantallas y sus `docId` no cambian.

## Capabilities

### New Capabilities

- `configuracion-reference`: cobertura documental del módulo Configuración —parámetros generales, preferencias, sincronización Recomplus y origen de parte— con capturas reales por sección y ediciones estrictamente aditivas.

### Modified Capabilities

- Ninguna. Las capabilities ya publicadas no cambian sus requisitos; este change solo crea una capability nueva.

## Impact

- `docs/configuracion/` (cuatro páginas canónicas, solo adiciones; `formulario.md` pasa a detallar diez pestañas) y `static/img/screenshots/configuracion/` (cinco PNG nuevas y una recapturada en `formulario`, además de las capturas previas del change).
- `scripts/docs-captures.json` y `scripts/check-doc-coverage.mjs`: nuevas entradas y encabezados permitidos; `scripts/capture-screenshots.js` sin cambios.
- `scripts/docs-inventory.json`: sin cambios; el número de pantallas y los `docId` se conservan.
- Repo vecino `../agrimpex-backoffice` se usa únicamente como fuente de lectura de rutas, componentes e i18n; no se modifica.
