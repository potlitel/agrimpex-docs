# Design

## Context

Ver `proposal.md` para la motivación. `docs/configuracion/formulario.md` ya documenta las diez pestañas, pero el bloque de Notificaciones se resume en dos párrafos y dos capturas superiores. La pantalla real tiene dos subvistas y un desplazamiento largo: diez tipos, ocho roles por tipo, umbrales, obligatorias y dos guardados distintos. El inventario `scripts/docs-inventory.json` debe seguir en 113 pantallas y `scripts/capture-screenshots.js` no se modifica.

## Goals / Non-Goals

**Goals:**

- Convertir `### 9. Notificaciones` en una guía completa, con subsecciones `####` por subvista y `#####` por bloque.
- Mantener byte a byte el prefijo ya publicado del documento (front matter, H1 y secciones hasta `## Acciones`).
- Aportar capturas reales por desplazamiento para cada bloque largo, sin placeholders.
- Ajustar la validación para que el nuevo recuento sea verificable y no silencioso.

**Non-Goals:**

- No crear una nueva página de documentación ni añadir entradas al inventario.
- No cambiar la aplicación, GraphQL, estilos ni textos del backoffice.
- No corregir los comportamientos del backend que se documentan como vigentes.
- No fabricar capturas de estados de carga, error, vacío o bloqueo que no se puedan reproducir con datos reales.

## Decisions

1. **Expandir in situ.** La nueva información vive dentro de `### 9. Notificaciones`, con `####` para «Mis Preferencias», «Configuración de Roles» y sus bloques. Alternativa descartada: una página nueva, porque rompería el inventario de 113 documentos y el contrato aditivo del manual.
2. **Conservar las dos capturas actuales.** `formulario-notificaciones.png` y `formulario-preferencias-roles.png` siguen como vistas superiores históricas; se añaden doce PNG con prefijo `formulario-preferencias-`:
   - `mine-top`, `mine-types-1`, `mine-types-2`, `mine-save`
   - `roles-types-2`, `roles-recipients-1`, `roles-recipients-2`, `roles-role-dropdown`, `roles-thresholds`, `roles-mandatory-1`, `roles-mandatory-2`, `roles-save`
3. **Capturas por ancla DOM, no por píxel fijo.** Cada entrada del manifiesto indicará el texto de espera y, cuando aplique, el clic explícito (`#notif-tab-mine`, primer `ng-select`, primera casilla de obligatoria). El desplazamiento se calcula con `element.getBoundingClientRect().top + window.scrollY - 24` para tolerar cambios de cabecera.
4. **Distinguir ambos guardados.** La prosa separa el payload de usuario —solo booleanos por tipo desbloqueado— del payload global —tipos activos, umbrales, destinatarios y obligatorias— y nombra los mensajes de éxito/error. Alternativa descartada: un único párrafo común, que es justamente la ambigüedad actual.
5. **Documentar el comportamiento observado.** Se indican como notas los casos en que el valor enviado no se aplica hoy: `pollingSeconds`, `emailByType` y la etiqueta fija «> 72h». No se presentan como funcionabilidad activa ni se corrigen en este cambio.
6. **Actualizar el validador en el mismo cambio.** `check-doc-coverage.mjs` pasa de once a veintitrés capturas de pestañas y verifica los nuevos sufijos, junto con el manifiesto. Alternativa descartada: dejar el conteo antiguo y perder el control sobre las nuevas imágenes.

## Risks / Trade-offs

- [Los desplazamientos pueden cambiar con el viewport] → Usar `waitForText` y anclas DOM; revisar las imágenes resultantes con `naturalWidth`/`naturalHeight` y DOM, no solo por coordenadas.
- [Los motivos de bloqueo requieren un usuario con roles concretos] → Documentar los cuatro textos y su precedencia; capturarlos solo si se puede reproducir con un bearer real, nunca con datos simulados.
- [El desplegable de roles se renderiza en `body`] → La captura debe esperar la opción «Especialista Principal» y verificar que el overlay está visible antes de disparar el screenshot.
- [El conteo de capturas puede quedar desincronizado] → Modificar manifiesto y validador en la misma tarea y ejecutar `npm run check:docs` antes de cerrar el cambio.
- [Documentar limitaciones del backend puede leerse como defecto] → Redactarlas como «comportamiento vigente» con su efecto observable, sin prometer corrección futura.

## Migration Plan

No hay migración de aplicación. La secuencia es: capturar las doce imágenes, ampliar la prosa, actualizar el manifiesto y el validador, ejecutar `npm run check:docs` y revisar el DOM renderizado. La reversión consiste en revertir los archivos del cambio; el inventario y el script de captura no se tocan.

## Open Questions

Ninguna. El alcance, el número de capturas y el tratamiento de los estados no reproducibles quedaron confirmados antes de crear el cambio.
