# Tasks

## 1. Capturas reales del desplazamiento

- [x] 1.1 Abrir `/settings/form?tab=notifications` con bearer de administrador, confirmar que «Mis Preferencias» y «Configuración de Roles» están presentes en el DOM y que el deep link abre la vista de roles; verificar con `waitForText` sobre «Vistas de notificaciones».
- [x] 1.2 Capturar cuatro PNG de «Mis Preferencias» (`mine-top`, `mine-types-1`, `mine-types-2`, `mine-save`) con anclas DOM y clic explícito en `#notif-tab-mine`; verificar que los cuatro archivos existen y tienen `naturalWidth`/`naturalHeight` mayores que cero.
- [x] 1.3 Capturar ocho PNG de «Configuración de Roles» (`roles-types-2`, `roles-recipients-1`, `roles-recipients-2`, `roles-role-dropdown`, `roles-thresholds`, `roles-mandatory-1`, `roles-mandatory-2`, `roles-save`) forzando el desplegable y la primera casilla de obligatoria; verificar que el overlay con «Especialista Principal» es visible en `roles-role-dropdown`.

## 2. Documentación de Mis Preferencias

- [x] 2.1 Añadir `#### Mis Preferencias` dentro de `### 9. Notificaciones` sin tocar el prefijo publicado; verificar que el contenido desde el inicio del archivo hasta `## Acciones` sigue byte a byte idéntico al de `HEAD`.
- [x] 2.2 Documentar la tarjeta «Preferencias de notificaciones», su descripción, la barra «Vistas de notificaciones» y el efecto del deep link `?tab=notifications` para administradores y no administradores; verificar que aparecen los tres textos exactos.
- [x] 2.3 Enumerar los diez tipos con código interno, etiqueta visible y descripción completa; verificar que hay diez filas y que los códigos `BL_SIN_ESPECIALISTA` y `PARTE_ORIGEN_PROCESADO` están presentes.
- [x] 2.4 Explicar los cuatro motivos de bloqueo, su precedencia y la diferencia visual entre filas atenuadas y obligatorias; verificar que aparecen «Requiere rol:», «No aplicable a su rol.», «Notificación obligatoria para su rol.» y «Deshabilitada por el administrador.».
- [x] 2.5 Documentar carga, error, vacío y guardado del usuario, incluidos los dos mensajes de aviso y la exclusión de umbrales, roles y sondeo; verificar que no se referencia ninguna captura inventada para esos estados.
- [x] 2.6 Insertar las cuatro capturas `mine-*` con leyendas que identifiquen la subvista y el bloque; verificar que las cuatro rutas `/img/screenshots/configuracion/formulario-preferencias-mine-*.png` resuelven a archivos existentes.

## 3. Documentación de Configuración de Roles

- [x] 3.1 Añadir `#### Configuración de Roles` con `#####` para los cuatro fieldsets en orden: «Tipos de notificación», «Roles destinatarios por tipo», «Umbrales de alerta» y «Tipos obligatorios»; verificar el orden en el DOM renderizado.
- [x] 3.2 Documentar el primer fieldset con los diez tipos globales, su ayuda y el efecto de desactivar un tipo para todos los usuarios; verificar que el texto «Active solo los eventos que desea recibir.» aparece en esta sección.
- [x] 3.3 Documentar los ocho roles, sus etiquetas, los roles por defecto por tipo, «Seleccionar todos» y las dos indicaciones de vacío; verificar que aparecen «Rol por defecto:», «Sin rol por defecto: visible para todos los usuarios.» y el caso sin default de «Parte diario procesado».
- [x] 3.4 Documentar los cuatro umbrales con mínimos, valores iniciales, conversión a horas y la nota sobre sondeo/correo; verificar que aparecen 3, 5, 7, 60, `min=10` para el sondeo y la advertencia de que el texto «> 72h» es fijo.
- [x] 3.5 Documentar «Tipos obligatorios» con el distintivo «Obligatoria», el prellenado de roles, los dos avisos contextuales y el guardado global separado del guardado de usuario; verificar que se nombran los dos mensajes «Guardar preferencias» y que se aclara que no es la matriz de permisos de importación.
- [x] 3.6 Insertar las ocho capturas `roles-*` con leyendas por bloque; verificar que las ocho rutas `/img/screenshots/configuracion/formulario-preferencias-roles-*.png` resuelven a archivos existentes y que el total de capturas de pestañas en el documento es veintitrés.

## 4. Validación integral

- [x] 4.1 Actualizar `scripts/docs-captures.json` con las doce entradas nuevas y `scripts/check-doc-coverage.mjs` para exigir veintitrés capturas de pestañas y los nuevos sufijos; verificar que `npm run check:docs` termina sin errores con 113 pantallas, 292 capturas y 23 imágenes de pestañas.
- [x] 4.2 Ejecutar `npm run build` y revisar `/docs/configuracion/formulario` en `http://localhost:3003` a 1366x768; verificar que las veintitrés imágenes cargan sin respuestas fallidas y que los encabezados `####` y `#####` se renderizan.
- [x] 4.3 Confirmar que `scripts/docs-inventory.json` y `scripts/capture-screenshots.js` siguen idénticos a `HEAD` y que no queda ninguna referencia al placeholder compartido; verificar con `git diff` y una búsqueda del nombre del placeholder en el documento.

## Workflow follow-up

- Sincronizar el delta `configuracion-reference` al spec principal y archivar el cambio cuando la revisión esté lista.
- Verificar el cambio archivado y commitear los archivos resultantes.
