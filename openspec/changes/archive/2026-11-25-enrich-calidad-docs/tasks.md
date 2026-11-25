# Tasks

## 1. Infraestructura de capturas múltiples

- [x] 1.1 Levantar el API local (`php -S 127.0.0.1:8990 -t public public/index.php`) y el frontend (`npm start -- --configuration local --port 5000`), obtener un bearer válido y verificar que `curl -H "Authorization: Bearer …" http://127.0.0.1:8990/api/authenticated_user` devuelve 200 y `curl http://localhost:5000/dashboard` devuelve 200.
- [x] 1.2 Definir el manifiesto de capturas adicionales por `docId` con sufijo, ruta y desplazamiento; verificar que el JSON parsea, que todos los `docId` existen en `scripts/docs-inventory.json` y que ninguna ruta sin sustituir contiene `:` o `$`.
- [x] 1.3 Ampliar `scripts/capture-screenshots.js` para generar `static/img/screenshots/<docId>-<sufijo>.png` sin sobrescribir `<docId>.png`; verificar con una ejecución acotada a dos `docId` que aparecen al menos dos PNG sufijadas nuevas y que las originales conservan su hash.
- [x] 1.4 Ampliar `scripts/check-doc-coverage.mjs` para validar el manifiesto y las referencias de las secciones nuevas; verificar que `npm run check:docs` falla al renombrar temporalmente una PNG del manifiesto y vuelve a pasar al restaurarla.

## 2. Filtros y operaciones de los listados

- [x] 2.1 Enriquecer `docs/calidad/permisos-importacion/cenasa.md` con `## Filtros del listado` y `## Operaciones y documentos` derivados de `cenasa-list.component.html` y su i18n; verificar que se documentan `authorizationNo`, `originCountry`, `departureCountry`, `requestedBy`, `status`, pills de estado, selector de año, alta, edición, eliminación, exportación Excel, vista previa y descarga, cada una con una captura real sufijada.
- [x] 2.2 Enriquecer `docs/calidad/permisos-importacion/fitosanitario.md` desde `phytosanitary-list.component.html`; verificar que se documentan los cinco filtros (`authorizationNo`, `originCountry`, `departureCountry`, `status`, `vigencia`) y todas las acciones con botón, rol y ruta, con captura real de la sección.
- [x] 2.3 Enriquecer `docs/calidad/permisos-importacion/inhem.md` desde `inhem-list.component.html`; verificar que se documentan `authorizationNo`, `entity_name`, `status`, el selector de año y las acciones de exportación y descarga PDF, con captura real de la sección.
- [x] 2.4 Enriquecer `docs/calidad/preliberaciones/salud.md` desde `health-preliberation-list.component.html`; verificar que se documentan `permitNo`, `shipName`, `blNo`, `status`, alta, exportación, vista previa y descarga PDF, con captura real de la sección.
- [x] 2.5 Enriquecer `docs/calidad/preliberaciones/veterinario.md` desde `veterinary-preliberation-list.component.html`; verificar que se documentan los cuatro filtros y las acciones de vista previa y descarga Word, con captura real de la sección.
- [x] 2.6 Enriquecer `docs/calidad/preliberaciones/fitosanitario.md` desde `prelib-phytosanitary-list.component.html`; verificar que se documentan `permitNo`, `shipName`, `blNo`, `status`, actualización, exportación PDF, edición y eliminación, con captura real de la sección.

## 3. Formularios de alta y edición

- [x] 3.1 Añadir `## Formulario (alta y edición)` a `cenasa.md` desde `cenasa-form.component.html`; verificar que se documentan las tres pestañas, los ocho controles, la alerta de productos bloqueados y los botones Guardar/Actualizar, con al menos una captura real de cada pestaña relevante.
- [x] 3.2 Añadir la sección de formulario a `fitosanitario.md` desde `phytosanitary-form.component.html`; verificar que se documentan los quince controles, los datos de contrato y los botones de vista previa y descarga, con captura real.
- [x] 3.3 Añadir la sección de formulario a `inhem.md` desde `inhem-form.component.html`; verificar que se documentan los ocho controles, el rango de vigencia, el especialista de calidad y la generación de PDF, con captura real.
- [x] 3.4 Añadir la sección de formulario a `salud.md` desde `health-preliberation-form.component.html`; verificar que se documentan las pestañas, los nueve controles, las validaciones de fechas y los botones de guardado, con captura real de cada pestaña relevante.
- [x] 3.5 Añadir la sección de formulario a `veterinario.md` desde `veterinary-preliberation-form.component.html`; verificar que se documentan los trece controles, las pestañas y las acciones de certificados, licencias y guardado, con captura real de cada pestaña relevante.
- [x] 3.6 Añadir la sección de formulario a `fitosanitario.md` desde `prelib-phytosanitary-form.component.html`; verificar que se documentan los diecinueve controles, transporte, certificado, aeropuerto y peso neto, con captura real.

## 4. Dashboard de decisión y verificación final

- [x] 4.1 Enriquecer `docs/calidad/index.md` con `## Interpretación del panel` derivada de `import-permits-dashboard.component.ts`; verificar que se describen KPIs, tendencias mensuales, distribución por estado, mapas de calor calendar/anual, top de países/productos/entidades/solicitantes y resumen por entidad, y que la página muestra al menos dos capturas reales del dashboard.
- [x] 4.2 Comprobar el carácter aditivo en las siete páginas; verificar que el front matter, el H1 y las secciones Propósito, Acceso, Captura, Campos y Acciones son idénticos a los del commit anterior y que las secciones nuevas aparecen después de `## Acciones`.
- [x] 4.3 Ejecutar `npm run check:docs` y `npm run build`; verificar que el inventario sigue teniendo 113 pantallas, que todas las imágenes referenciadas existen y que Docusaurus genera el sitio sin enlaces rotos.
- [x] 4.4 Revisar el sitio construido en `http://localhost:3003/docs/calidad/`; verificar visualmente el dashboard con más de una captura legible y una página de formulario con filtros y secciones nuevas renderizadas.

## Workflow follow-up

- Archive the change after the project's review requirements are satisfied.
- Verify the archived result.
