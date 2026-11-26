# Proposal

## Why

Las ocho páginas canónicas de Reportes muestran una sola captura y tablas genéricas: no explican los filtros de cada reporte, las variantes que comparten un mismo componente de exportación, la restricción de roles de prioridades aduaneras ni la redirección de la raíz del módulo. Después de enriquecer Calidad, Autenticación, Administración, Logística, Nomenclaturas y Seguridad con el mismo patrón, Reportes queda como la sección operativa final sin cobertura documental suficiente.

## What Changes

- Enriquecer de forma **adicional** las ocho páginas vigentes de `docs/reportes/`: conservar literalmente el front matter, el H1 y las secciones Propósito, Acceso, Captura, Campos y Acciones ya publicadas, y añadir secciones nuevas sin reescribir ni eliminar las actuales.
- Documentar en `reportes/index.md` el mapa del módulo —reportes de listado, monitorización, prioridades aduaneras y exportación— con sus rutas y roles, aclarando que `/reports` redirige a `/reports/days-range` y usando más de una captura real.
- Documentar en los cuatro reportes de listado (rango de días, estado, resumen por especialista y estado por especialista) los filtros del panel, las columnas, la generación y la exportación a Excel.
- Documentar en `reportes/monitorizacion.md` las condiciones operativas seguidas, los indicadores y las acciones **Generar** y **Actualizar**, sin prometer valores concretos.
- Documentar en `reportes/prioridades-aduaneras.md` los filtros, el cálculo de estadía y la restricción por roles del guard `canMatch`.
- Documentar en `reportes/exportacion.md` las variantes de exportación —arribos, precios, tendencias y alertas— que comparten `ExportReportsComponent`, los formatos disponibles, el rango de fechas y la selección de columnas, sin presentarlas como páginas independientes.
- Incorporar al menos una captura real en cada sección nueva y más de una cuando la sección lo amerite (mapa del módulo y panel de filtros).
- Ampliar el manifiesto `scripts/docs-captures.json` con las entradas de Reportes y extender `scripts/check-doc-coverage.mjs` para aceptar los encabezados nuevos y validar sus capturas. `scripts/capture-screenshots.js` se reutiliza sin cambios de comportamiento.
- Documentar **cada una de las siete condiciones** de monitorización como subsección `###` propia, con criterio, indicador y captura real de esa condición, sin reducirlas a una tabla genérica.
- Documentar **cada una de las quince variantes** de exportación como subsección `###` propia, con ruta, columnas, rango de fechas y captura real de esa variante, sin presentarlas como páginas independientes.
- Incorporar 22 capturas sufijadas adicionales al manifiesto (7 condiciones + 15 variantes) y ampliar el validador para exigir que toda subsección `###` de esas dos páginas tenga una captura existente del manifiesto.
- Mantener `scripts/docs-inventory.json` como fuente de verdad: las 113 pantallas y sus `docId` no cambian; las subsecciones se insertan dentro de las secciones ya añadidas.

## Capabilities

### New Capabilities

- `reportes-reference`: cobertura documental del módulo Reportes —reportes de listado, monitorización, prioridades aduaneras y exportación— con capturas reales por sección y ediciones estrictamente aditivas.

### Modified Capabilities

- Ninguna. Las capabilities ya publicadas no cambian sus requisitos; este change solo crea una capability nueva.

## Impact

- `docs/reportes/` (ocho páginas canónicas, solo adiciones) y `static/img/screenshots/reportes/` (nuevas capturas sufijadas).
- `scripts/docs-captures.json` y `scripts/check-doc-coverage.mjs`: nuevas entradas y encabezados permitidos; `scripts/capture-screenshots.js` sin cambios.
- `scripts/docs-inventory.json`: sin cambios; el número de pantallas y los `docId` se conservan.
- Repo vecino `../agrimpex-backoffice` se usa únicamente como fuente de lectura de rutas, componentes e i18n; no se modifica.
