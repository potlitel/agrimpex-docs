# Tasks

## 1. Infraestructura de capturas

- [x] 1.1 Verificar que el API local (`127.0.0.1:8990`) y el frontend (`https://localhost:5000`) responden, que un bearer con rol de administrador es válido y que `/management/user/list`, `/management/group/list` y `/ai-assistant` cargan con la sesión inyectada.
- [x] 1.2 Añadir a `scripts/docs-captures.json` las capturas de los seis `docId` de Administración con sufijo, ruta concreta y `clickText`/`scrollY`/`scrollRight` según corresponda; verificar que el JSON parsea, que los `docId` existen en `scripts/docs-inventory.json`, que ninguna ruta contiene `:` o `$`, que no hay duplicados y que las entradas previas no cambiaron.
- [x] 1.3 Ejecutar `scripts/capture-screenshots.js` en modo `extra` acotado a Administración y verificar que aparecen las PNG sufijadas nuevas, que el panel de filtros y la columna de acciones son visibles en las capturas correspondientes y que las seis PNG originales conservan su hash. El script no se modifica.
- [x] 1.4 Ampliar `scripts/check-doc-coverage.mjs` con los encabezados nuevos `Mapa del módulo`, `Operaciones y estados` y `Uso del asistente`, y con la validación de las entradas nuevas del manifiesto; verificar que `npm run check:docs` falla al renombrar temporalmente una PNG del manifiesto y vuelve a pasar al restaurarla.

## 2. Mapa del módulo

- [x] 2.1 Enriquecer `docs/administracion/index.md` con `## Mapa del módulo`, derivado de los enrutadores de usuario, grupo y asistente; verificar que se describen los seis destinos con ruta y rol, que se explica la redirección de `/management/group` al listado y que la página muestra al menos dos capturas reales con leyenda de backoffice.

## 3. Usuarios

- [x] 3.1 Añadir `## Filtros del listado` a `docs/administracion/usuarios/listado.md` desde `user-list.component.html/.ts`; verificar que se documentan Género, Rol, rango de Último acceso y Activo, su control y efecto, con captura real del panel abierto.
- [x] 3.2 Añadir `## Operaciones y estados` a `docs/administracion/usuarios/listado.md`; verificar que se documentan alta, edición con `id` por parámetro de consulta, envío de correo, activación y desactivación, los roles y la restricción para el usuario actual y las cuentas de administrador, con captura real de la tabla y sus acciones.
- [x] 3.3 Añadir `## Formulario (alta y edición)` a `docs/administracion/usuarios/formulario.md`; verificar que se documentan los campos compartidos, su obligatoriedad y validaciones (email y DNI únicos, longitud/validez del carné, complejidad de contraseña, autogeneración, cargo, área, grupos, roles y género) y el aviso de validación de CI, con captura real.

## 4. Grupos

- [x] 4.1 Añadir `## Filtros del listado` a `docs/administracion/grupos/listado.md`; verificar que se documenta explícitamente la ausencia de panel de filtros y la presencia de búsqueda y recarga genéricas, con captura real del listado.
- [x] 4.2 Añadir `## Operaciones y estados` a `docs/administracion/grupos/listado.md`; verificar que se documentan alta, edición por `edit/:id`, activación/desactivación, eliminación y la restricción del grupo por defecto, con captura real de la tabla y sus acciones.
- [x] 4.3 Añadir `## Formulario (alta y edición)` a `docs/administracion/grupos/formulario.md`; verificar que se documentan Nombre, Activo y Roles con su obligatoriedad y control, la selección de roles disponibles y la exclusión del grupo por defecto, con captura real.

## 5. Asistente IA

- [x] 5.1 Añadir `## Uso del asistente` a `docs/administracion/asistente-ia.md` desde `ai-assistant.page.ts` y `chat-panel.component.ts`; verificar que se documentan el estado vacío, las sugerencias, el campo de consulta, el envío, los mensajes y resultados, el historial y la limpieza, el rol y la ruta, y que la sección muestra más de una captura real.

## 6. Verificación final

- [x] 6.1 Comprobar el carácter aditivo en las seis páginas; verificar que el front matter, el H1 y las secciones Propósito, Acceso, Captura, Campos y Acciones son idénticos a los del commit anterior, que las secciones nuevas aparecen después de `## Acciones` y que las dos páginas `unlisted` no cambiaron.
- [x] 6.2 Ejecutar `npm run check:docs` y `npm run build`; verificar que el inventario sigue teniendo 113 pantallas, que todas las imágenes referenciadas existen y que Docusaurus genera el sitio sin enlaces rotos.
- [x] 6.3 Revisar el sitio en `http://localhost:3003/docs/administracion/`; verificar visualmente el mapa con más de una captura legible y una página de formulario o asistente con las secciones nuevas renderizadas.

## Workflow follow-up

- Archive the change after the project's review requirements are satisfied.
- Verify the archived result.
