# Proposal

## Why

Las seis páginas canónicas de Administración muestran una sola captura y tablas genéricas: no explican los filtros reales de usuarios, las restricciones de activación de cuentas y grupos, las validaciones de DNI/email/contraseña, el rol de cada acción ni el uso del asistente IA. Después de enriquecer Calidad y planificar Autenticación con el mismo patrón, Administración es la sección con más operaciones de gestión sin cobertura documental suficiente.

## What Changes

- Enriquecer de forma **adicional** las seis páginas vigentes de `docs/administracion/`: conservar literalmente el front matter, el H1 y las secciones Propósito, Acceso, Captura, Campos y Acciones ya publicadas, y añadir secciones nuevas sin reescribir ni eliminar las actuales. Las dos páginas `unlisted` de migración (`administracion/usuarios.md` y `administracion/grupos.md`) no se modifican.
- Documentar en `administracion/index.md` el mapa del módulo —usuarios, grupos y asistente IA— con sus rutas y roles, usando más de una captura real como contrapartida de los paneles de Calidad y Autenticación.
- Documentar en `administracion/usuarios/listado.md` los filtros del panel (Género, Rol, rango de Último acceso y interruptor Activo), las columnas de la tabla y las operaciones: alta, edición con `id` por parámetro de consulta, activación/desactivación —con restricción para el propio usuario y los administradores— y envío de correo desde la dirección del listado.
- Documentar en `administracion/usuarios/formulario.md` los campos compartidos por `add` y `edit`, sus validaciones (obligatorios, formato de email, unicidad asíncrona de email y DNI, longitud y validez del carné, complejidad de contraseña y contraseña autogenerada), los selectores de cargo, área y grupos, y el aviso de validación de CI.
- Documentar en `administracion/grupos/listado.md` la ausencia de panel de filtros, las columnas (nombre, activo, roles) y las operaciones: alta, edición por `edit/:id`, activación/desactivación y eliminación, con la restricción del grupo por defecto del sistema.
- Documentar en `administracion/grupos/formulario.md` los tres campos compartidos por `add` y `edit/:id`, los roles disponibles y el efecto del grupo por defecto.
- Documentar en `administracion/asistente-ia.md` el panel de chat: estado vacío, sugerencias, campo de consulta, envío, historial, limpieza y respuestas con resultados.
- Incorporar al menos una captura real en cada sección nueva y más de una cuando la sección lo amerite (mapa del módulo, listados con panel de filtros, asistente con estado vacío y respuesta).
- Ampliar el manifiesto `scripts/docs-captures.json` con las entradas de Administración y extender `scripts/check-doc-coverage.mjs` para aceptar los encabezados nuevos y validar sus capturas. `scripts/capture-screenshots.js` se reutiliza sin cambios de comportamiento: sus capacidades actuales (clics por texto, desplazamiento vertical y horizontal) bastan para estos estados.
- Mantener `scripts/docs-inventory.json` como fuente de verdad: las 113 pantallas y sus `docId` no cambian.

## Capabilities

### New Capabilities

- `administracion-reference`: cobertura documental del módulo Administración —usuarios, grupos, asistente IA y mapa del módulo— con capturas reales por sección y ediciones estrictamente aditivas.

### Modified Capabilities

- Ninguna. Las capabilities `calidad-reference` y `autenticacion-reference` no cambian sus requisitos; este change solo crea una capability nueva.

## Impact

- `docs/administracion/` (6 páginas canónicas, solo adiciones) y `static/img/screenshots/administracion/` (nuevas capturas sufijadas).
- `scripts/docs-captures.json` y `scripts/check-doc-coverage.mjs`: nuevas entradas y encabezados permitidos; `scripts/capture-screenshots.js` sin cambios.
- `scripts/docs-inventory.json`: solo metadata derivada si hace falta; el número de pantallas y los `docId` se conservan.
- Repo vecino `../agrimpex-backoffice` se usa únicamente como fuente de lectura de rutas, componentes, validaciones e i18n; no se modifica.
