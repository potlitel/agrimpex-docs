# Proposal

## Why

La pestaña **Notificaciones** de `/settings/form` concentra dos subvistas con un desplazamiento largo: «Mis Preferencias» y «Configuración de Roles». Hoy el manual reduce ambas a un párrafo y dos capturas superiores, sin documentar los diez tipos, los ocho roles, los umbrales, los tipos obligatorios ni los estados de bloqueo. El lector no puede saber qué guarda cada botón ni qué efecto tiene cada control.

## What Changes

- Ampliar únicamente `### 9. Notificaciones` en `docs/configuracion/formulario.md`, conservando byte a byte el prefijo ya publicado del documento.
- Documentar la tarjeta **Preferencias de notificaciones**, la barra interna «Vistas de notificaciones» y el comportamiento del deep link `?tab=notifications` para administradores y no administradores.
- Detallar «Mis Preferencias»: ayuda, rejilla de dos columnas, diez tipos con código/label/descripción, cuatro motivos de bloqueo con su precedencia, estados de carga/error/vacío y el guardado de overrides por usuario.
- Detallar «Configuración de Roles» en sus cuatro fieldsets —**Tipos de notificación**, **Roles destinatarios por tipo**, **Umbrales de alerta** y **Tipos obligatorios**— con roles, defaults, validaciones, conversiones y reglas de obligatoriedad.
- Distinguir explícitamente los dos botones «Guardar preferencias»: el del usuario guarda solo booleanos por tipo; el del administrador guarda la configuración global y no recarga la respuesta tras guardar.
- Añadir doce capturas reales con desplazamiento por sección, manteniendo las dos capturas actuales. El total de capturas de pestañas pasa de once a veintitrés y el manifiesto de 280 a 292 entradas.
- Actualizar `scripts/check-doc-coverage.mjs` para exigir las veintitrés capturas de pestañas y los nuevos nombres de sección, sin modificar `scripts/docs-inventory.json` ni `scripts/capture-screenshots.js`.

## Capabilities

### New Capabilities

- Ninguna.

### Modified Capabilities

- `configuracion-reference`: amplía la cobertura de preferencias de notificación, sustituye la exigencia de dos capturas para Notificaciones por doce adicionales por sección y actualiza la verificación de inventario a veintitrés capturas de pestañas.

## Impact

- Documentación: `docs/configuracion/formulario.md`, sección `### 9. Notificaciones`.
- Capturas: doce PNG nuevos bajo `static/img/screenshots/configuracion/` con prefijo `formulario-preferencias-`.
- Validación: `scripts/docs-captures.json` y `scripts/check-doc-coverage.mjs`.
- Sin cambios en `scripts/docs-inventory.json`, `scripts/capture-screenshots.js`, rutas de la aplicación ni en las 113 pantallas del inventario.
