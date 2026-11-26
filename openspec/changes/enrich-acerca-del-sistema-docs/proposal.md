# Proposal

## Why

Las nueve páginas canónicas de Acerca del Sistema muestran una sola captura y contenido muy breve: no explican el recorrido del manual, qué ofrecen las páginas informativas del pie, cómo se recupera de los errores 404 y 500, qué elementos compone la plantilla ni cómo funciona la verificación pública por código. Es la última sección del manual sin el patrón de enriquecimiento ya aplicado a los demás módulos.

## What Changes

- Enriquecer de forma **adicional** las nueve páginas vigentes de `docs/intro.md` y `docs/core/`: conservar literalmente el front matter, el H1 y las secciones Propósito, Acceso, Captura, Campos y Acciones ya publicadas, y añadir secciones nuevas sin reescribir ni eliminar las actuales.
- Documentar en `intro.md` el mapa del manual —nueve áreas funcionales y 113 pantallas— con el recorrido sugerido y más de una captura real.
- Documentar en `core/about.md`, `core/contact.md`, `core/privacy.md` y `core/terms.md` el contenido informativo de cada página, su acceso según la ruta declarada y los enlaces del pie que las conectan, con captura real por página.
- Documentar en `core/errors.md` los códigos 404 y 500, la redirección de `/error` a `/error/404` y la acción de regreso, con captura real de ambos estados.
- Documentar en `core/layout.md` y `core/template.md` la estructura de la plantilla —menú lateral, barra superior y componentes compartidos— y la visibilidad condicional de algunos elementos, con captura real.
- Documentar en `core/verify.md` la verificación pública por código CSV, su ruta concreta de ejemplo `/verify/DEMO-CODE`, el resultado y la distinción con la verificación interna `/verification`, con más de una captura real.
- Incorporar al menos una captura real en cada sección nueva y más de una cuando la sección lo amerite (mapa del manual, errores y verificación pública).
- Ampliar el manifiesto `scripts/docs-captures.json` con las entradas de Acerca del Sistema y extender `scripts/check-doc-coverage.mjs` para aceptar los encabezados nuevos y validar sus capturas. `scripts/capture-screenshots.js` se reutiliza sin cambios de comportamiento.
- Mantener `scripts/docs-inventory.json` como fuente de verdad: las 113 pantallas y sus `docId` no cambian.

## Capabilities

### New Capabilities

- `acerca-del-sistema-reference`: cobertura documental de las páginas transversales del manual —introducción, información institucional, errores, plantilla y verificación pública— con capturas reales por sección y ediciones estrictamente aditivas.

### Modified Capabilities

- Ninguna. Las capabilities ya publicadas no cambian sus requisitos; este change solo crea una capability nueva.

## Impact

- `docs/intro.md` y `docs/core/` (nueve páginas canónicas, solo adiciones) y `static/img/screenshots/` (nuevas capturas sufijadas, incluida `intro-<sufijo>.png`).
- `scripts/docs-captures.json` y `scripts/check-doc-coverage.mjs`: nuevas entradas y encabezados permitidos; `scripts/capture-screenshots.js` sin cambios.
- `scripts/docs-inventory.json`: sin cambios; el número de pantallas y los `docId` se conservan.
- Repo vecino `../agrimpex-backoffice` se usa únicamente como fuente de lectura de rutas, componentes e i18n; no se modifica.
