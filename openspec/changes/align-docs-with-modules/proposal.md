# Proposal

## Why

El sidebar actual de `agrimpex-docs` no coincide con los módulos del backoffice: "Notificaciones", "Asistente IA", "Reportes", "Calidad", "Configuración" y "Perfil" aparecen como documentos sueltos en la raíz, "Seguridad" solo contiene trazabilidad, y varias pantallas documentadas no se corresponden con las rutas reales de `../agrimpex-backoffice/src/app/`. El manual resulta difícil de recorrer y describe pantallas que el sistema ya no muestra.

Auditoría observada (fuentes: `sidebars.js`, `docs/`, `app.routes.ts` y los `routes.ts` de cada módulo):

- El frontend expone `auth`, `management` (group, user, nomenclatures), `logistic`, `security` (trace), `calidad`, `reports`, `settings`, `profile`, `verification` y `ai-assistant`.
- `logistic/routes.ts` ya incluye `import-permits` (cenasa, phytosanitary, inhem) y `preliberations` (health, veterinary, phytosanitary), mientras que `calidad/routes.ts` define rutas equivalentes bajo `/calidad`. Hoy la documentación duplica y reparte esas pantallas entre "Logística" y "Calidad" sin indicar cuál es la fuente vigente.
- `docs/notification/index.md` y `docs/ai-assistant/index.md` existen como ítems de primer nivel; el módulo `notification` del frontend es transversal (campana + entidad de notificación, con la ruta `logistic/notification/:entityType/:entityId`).
- `auth/routes.ts` incluye `new-password`, ausente en `docs/auth/`, y `docs/logistica/imports.md` describe un formulario "Nueva Importación" que no aparece en las rutas actuales de logística.

## What Changes

- Auditar `../agrimpex-backoffice/src/app/app.routes.ts` y los `routes.ts` de los módulos para producir un inventario de módulos → pantallas principales (listados, formularios, dashboards) con su ruta y componente de origen.
- Reorganizar `docs/` en nueve carpetas de módulo: `autenticacion/`, `administracion/`, `logistica/`, `nomenclaturas/`, `seguridad/`, `reportes/`, `calidad/`, `configuracion/`, `perfil/`. Se conservan las secciones de soporte `core/` (Acerca del Sistema) y `shared/` fuera de la navegación principal.
- Reescribir `sidebars.js` con exactamente esas nueve categorías. **Notificaciones** se ubica dentro de **Seguridad**; **Asistente IA** dentro de **Administración**. Cada pantalla queda bajo un solo módulo y con un único `id` de documento.
- Redactar/actualizar una página por pantalla principal con: propósito, ruta de acceso, captura real del backoffice (con placeholder de respaldo), tabla de campos y tabla de acciones (botones). Las variantes `add`/`edit` que comparten componente se documentan en una sola página con ambas acciones; no se crea una página por parámetro de ruta.
- Corregir el contenido que no coincide con el frontend: `new-password` en Autenticación, permisos/preliberaciones según su módulo vigente, y retirar o marcar como obsoleto `docs/logistica/under-construction.md`.
- Normalizar encabezados (un H1 por pantalla y H2 para Propósito, Acceso, Campos, Acciones y Captura) y `sidebar_position` para que la jerarquía visual sea idéntica en todo el manual.
- **BREAKING**: cambian los `id` de los documentos que se reubican (p. ej. `notification/index` → `seguridad/notificaciones`, `ai-assistant/index` → `administracion/asistente-ia`). Los enlaces internos y las rutas `/docs/*` publicadas dejarán de resolver; se incluye un mapeo de redirecciones en la propuesta de implementación.

Supuestos registrados: la fuente de verdad es `../agrimpex-backoffice` (el repo de docs no contiene el frontend); se documentan pantallas principales, no cada combinación de ruta CRUD; las capturas se toman desde el entorno local autenticado y el placeholder solo se usa como respaldo.

## Capabilities

### New Capabilities

- `docs-module-navigation`: la navegación del manual refleja los nueve módulos del producto, ubica cada pantalla bajo un único módulo y mantiene una jerarquía y rotulación consistentes, incluidas las reubicaciones acordadas de Notificaciones y Asistente IA.
- `docs-screen-reference`: cada pantalla principal documentada expone propósito, ruta real de origen, campo(s), acción(es) y una captura real del backoffice, con cobertura verificable frente a los `routes.ts` del frontend.

### Modified Capabilities

- Ninguna. No existen specs previas en el proyecto (`openspec list --specs` → "No specs found").

## Impact

- `sidebars.js` (cambio estructural principal) y `docusaurus.config.js` solo si se requieren redirecciones.
- `docs/`: reubicación, renombrado y nueva redacción de archivos `.md`/`.mdx`; capturas reales y placeholder de respaldo en `static/img/screenshots/`.
- Enlaces internos existentes (`/docs/logistica/...`, `/docs/notification/index`, etc.) y cualquier enlace externo publicado a esas rutas.
- Repo vecino `../agrimpex-backoffice` se usa solo como fuente de lectura; este cambio **no modifica** código del frontend.
