# Proposal

## Why

Las tres páginas canónicas de Perfil muestran una sola captura y tablas genéricas: no explican la redirección de `/profile` a `overview`, los widgets que aparecen según el rol, los grupos de preferencias de visualización ni las reglas del cambio de contraseña. Es el último módulo del manual sin el patrón de enriquecimiento aplicado a Calidad, Autenticación, Administración, Logística, Nomenclaturas, Seguridad, Reportes y Configuración.

## What Changes

- Enriquecer de forma **adicional** las tres páginas vigentes de `docs/perfil/`: conservar literalmente el front matter, el H1 y las secciones Propósito, Acceso, Captura, Campos y Acciones ya publicadas, y añadir secciones nuevas sin reescribir ni eliminar las actuales.
- Documentar en `perfil/index.md` el mapa del módulo —detalles, preferencias y cambio de contraseña— con sus rutas y roles, aclarando que `/profile` redirige a `/profile/overview` y que ciertos widgets solo se muestran según el rol del usuario, con más de una captura real.
- Detallar explícitamente los seis widgets comunes visibles en `/profile/overview` —Indicadores personales, Actividad y trazabilidad, Gráfico de contribución, Notificaciones, Configuración efectiva y Documentos y sellos— con sus campos, filtros, enlaces y estados, derivados de los componentes y del i18n español.
- Documentar en `perfil/preferencias.md` los tres grupos de ajustes —preferencias de visualización, control de importaciones y prioridades aduaneras— con sus seis opciones, efecto y guardado inmediato por selección, sin botones **Guardar** ni **Cancelar**.
- Documentar en `perfil/cambiar-clave.md` los campos reales de contraseña actual y nueva, las cinco reglas de complejidad, el panel de fortaleza y el error de contraseña actual incorrecta, aclarando que no hay campo de confirmación y que el envío se hace con **Aceptar**, sin ejecutar el cambio en las capturas.
- Incorporar al menos una captura real en cada sección nueva y más de una cuando la sección lo amerite (mapa del módulo y preferencias con varios grupos).
- Ampliar el manifiesto `scripts/docs-captures.json` con las entradas de Perfil y extender `scripts/check-doc-coverage.mjs` para aceptar los encabezados nuevos y validar sus capturas. `scripts/capture-screenshots.js` se reutiliza sin cambios de comportamiento.
- Mantener `scripts/docs-inventory.json` como fuente de verdad: las 113 pantallas y sus `docId` no cambian.

## Capabilities

### New Capabilities

- `perfil-reference`: cobertura documental del módulo Perfil —detalles del usuario, preferencias y cambio de contraseña— con capturas reales por sección y ediciones estrictamente aditivas.

### Modified Capabilities

- Ninguna. Las capabilities ya publicadas no cambian sus requisitos; este change solo crea una capability nueva.

## Impact

- `docs/perfil/` (tres páginas canónicas, solo adiciones) y `static/img/screenshots/perfil/` (nuevas capturas sufijadas).
- `scripts/docs-captures.json` y `scripts/check-doc-coverage.mjs`: nuevas entradas y encabezados permitidos; `scripts/capture-screenshots.js` sin cambios.
- `scripts/docs-inventory.json`: sin cambios; el número de pantallas y los `docId` se conservan.
- Repo vecino `../agrimpex-backoffice` se usa únicamente como fuente de lectura de rutas, componentes e i18n; no se modifica.
