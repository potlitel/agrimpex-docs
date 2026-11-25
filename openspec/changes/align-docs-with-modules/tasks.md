# Tasks

## 1. Auditoría del frontend e inventario

- [x] 1.1 Recorrer `../agrimpex-backoffice/src/app/app.routes.ts` y los `routes.ts` de auth, group, user, nomenclatures, logistic, trace, calidad, reports, configuration, verification, notification, ai-assistant y user-profile; generar `scripts/docs-inventory.json` con módulo, `docId`, etiqueta, `sourceRoute` y `sourceComponent` por pantalla principal; verificar que cada entrada apunta a un `loadComponent` o `component` existente.
- [x] 1.2 Marcar en el inventario el módulo canónico de `import-permits` y `preliberations` como Calidad según `design.md`, y listar los enlaces cruzados que Logística publicará; verificar que ninguna pantalla aparece dos veces como `canonical: true`.
- [x] 1.3 Añadir `scripts/check-doc-coverage.mjs` y el script `npm run check:docs` que compruebe unicidad de `docId`, existencia del archivo y presencia de `source_route`/`source_component` en el front matter; verificar con una entrada duplicada temporal que el script falla y con el inventario real que pasa.

## 2. Estructura de carpetas y compatibilidad

- [x] 2.1 Crear `autenticacion/`, `administracion/`, `logistica/`, `nomenclaturas/`, `seguridad/`, `reportes/`, `calidad/`, `configuracion/` y `perfil/` bajo `docs/` y reubicar los archivos existentes con `git mv` según `design.md`; verificar con `find docs -maxdepth 1 -type d` que las nueve carpetas existen y que `git status` muestra solo movimientos.
- [x] 2.2 Crear un archivo de migración `unlisted: true` en cada ruta antigua (`notification/index`, `ai-assistant/index`, `reports/index`, `verification/index`, `calidad/index`, `configuration/index`, `user-profile/index`, `shared/index` y rutas de logística renombradas) con enlace al nuevo documento; verificar que cada archivo contiene el `id` de destino y que `npm run build` no reporta enlaces rotos.
- [x] 2.3 Crear `static/img/screenshots/placeholder.svg` reutilizable; verificar que la ruta `/img/screenshots/placeholder.svg` resuelve en el build y que el SVG incluye texto "Captura pendiente".

## 3. Contenido de Autenticación, Administración y Perfil

- [x] 3.1 Redactar `autenticacion/` (panel, login, recuperar contraseña y nueva contraseña desde `/auth/new-password`) con la plantilla oficial; verificar que cada archivo tiene un H1, las cinco secciones H2 y `source_route` acorde con `auth/routes.ts`.
- [x] 3.2 Redactar `administracion/` (índice, listado y formulario de usuarios y grupos, y `asistente-ia` reubicado) contrastando etiquetas con `user/i18n/locale.ts`, `group/i18n/locale.ts` y `ai-assistant/`; verificar que los formularios documentan alta y edición en una sola página y que el asistente no queda como ítem raíz.
- [x] 3.3 Redactar `perfil/` (índice, preferencias y cambiar contraseña) desde `pages/user-profile/routes.ts`; verificar que las tres rutas del módulo tienen documento y que la etiqueta del sidebar coincide con cada H1.

## 4. Contenido de Logística, Nomenclaturas, Seguridad, Reportes, Calidad y Configuración

- [x] 4.1 Redactar el árbol `logistica/` (dashboard de importación, importaciones por terminal, control de importaciones, inventario/navegación/retorno/extractores de contenedores, documentos de embarque, entregas, inbonds, solicitudes de extensión, reportes e índice con enlaces a Calidad) desde `logistic/routes.ts`; verificar que las rutas `import/:child`, `delivery-orders`, `inbond-goods` y `extensions-requests` tienen documento y que no se documenta la acción inexistente "Nueva Importación".
- [x] 4.2 Redactar `nomenclaturas/` con un archivo por nomenclador activo en `NomenclaturesRoutes` y un `index.md`; verificar con `npm run check:docs` que el número de documentos coincide con el número de rutas activas y que los nomencladores solo declarados en TODO no aparecen como vigentes.
- [x] 4.3 Redactar `seguridad/` (índice, verificación de documentos, listado y dashboard de trazabilidad, y `notificaciones` reubicado) desde `trace/routes.ts`, `verification.page.ts` y el módulo `notification`; verificar que las rutas restringidas por rol se indican en la tabla Acciones y que Notificaciones cuelga de Seguridad.
- [x] 4.4 Redactar `reportes/` (índice, rangos de fechas, por estado, por especialista, monitorización, prioridades aduaneras y exportación agrupando las variantes `arrived-*`/`price-*`/`trends-*`) desde `reports/routes.ts`; verificar que cada breadcrumb del módulo está representado por una fila o una página y que se nombran los roles con acceso.
- [x] 4.5 Redactar `calidad/` (índice, cenasa, fitosanitario e inhem bajo permisos; salud, veterinario y fitosanitario bajo preliberaciones) desde `calidad/routes.ts`; verificar que el módulo canónico declarado en el inventario coincide con estas páginas y que Logística solo enlaza.
- [x] 4.6 Redactar `configuracion/` (índice, formulario, sincronización Recomplus y origen de parte) desde `configuration/routes.ts`; verificar que las dos subrutas restringidas a administrador indican ese requisito en la tabla Acciones.

## 5. Sidebar, enlaces y verificación final

- [x] 5.1 Reescribir `sidebars.js` con las nueve categorías del orden acordado, las reubicaciones de Notificaciones y Asistente IA, y "Acerca del Sistema" como sección de soporte final; verificar que no queda ningún `type: 'doc'` en la raíz y que todos los `id` existen en `scripts/docs-inventory.json`.
- [x] 5.2 Sustituir los enlaces internos `/docs/*` que apuntan a rutas antiguas dentro de `docs/`; verificar con `grep -R "/docs/" docs/` que no queda destino sin documento vigente o página de migración.
- [x] 5.3 Ejecutar `npm run check:docs`; verificar que termina sin errores y que informa de cero duplicados y cero páginas sin `source_route`.
- [x] 5.4 Ejecutar `npm run build`; verificar que el sitio genera sin errores y que las páginas de migración tienen `noindex`.
- [x] 5.5 Revisar el manual construido: nueve módulos en el sidebar, Notificaciones en Seguridad, Asistente IA en Administración y misma jerarquía de encabezados en todas las páginas; verificar visualmente dos páginas de módulos distintos y anotar cualquier desviación antes de dar el cambio por terminado.
- [x] 5.6 Ampliar `scripts/capture-screenshots.js` a todo el inventario con sesión local autenticada, ejecutarlo y sustituir los placeholders por capturas reales en las 113 páginas; verificar que existen 113 PNG, que no queda ninguna leyenda de pendiente y que `npm run check:docs` y `npm run build` siguen pasando.
