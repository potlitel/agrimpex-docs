# Design

## Context

Ver `proposal.md` para la motivación y `specs/perfil-reference/spec.md` para los requisitos. Restricciones observadas en el repositorio:

- `docs/perfil/` tiene tres páginas canónicas con front matter, H1 y las secciones Propósito, Acceso, Captura, Campos y Acciones, más una captura `<docId>.png` por página. Ninguna tiene secciones adicionales ni páginas `unlisted` de migración.
- `/profile` carga `UserProfilePage`, un contenedor con `router-outlet` e hijas `overview`, `preferences` y `change-password`. La ruta vacía y la comodín redirigen a `overview`, no a `list`; por eso la página de índice se documenta como un mapa de destinos.
- La vista `overview` muestra identidad y seis widgets comunes —Indicadores personales, Actividad y trazabilidad, Gráfico de contribución, Notificaciones, Configuración efectiva y Documentos y sellos— más tres widgets —especialización, permisos de calidad y embudo logístico— condicionados por el rol mediante `isProfileWidgetVisible`. El segmento `profile` es de acceso común para todo usuario autenticado. Los seis comunes se documentan con sus etiquetas y estados exactos, reutilizando las dos capturas de la sección.
- `preferences` reúne tres grupos de ajustes con seis opciones: preferencias de visualización, control de importaciones y prioridades aduaneras. Cada opción guarda de inmediato y avisa «Preferencia guardada»; no hay botones **Guardar** ni **Cancelar**. `change-password` pide contraseña actual y nueva, sin campo de confirmación, y aplica cinco reglas de complejidad; envía con **Aceptar** y restablece con **Cancelar**.
- `scripts/docs-captures.json`, `scripts/capture-screenshots.js` (modo `extra`) y `scripts/check-doc-coverage.mjs` ya existen y cubren clics por texto, desplazamiento vertical y horizontal y validación de manifiestos. Ninguno de los encabezados previstos está permitido todavía excepto por herencia de otros módulos para `Mapa del módulo`.

## Goals / Non-Goals

**Goals:**

- Añadir secciones nuevas a las tres páginas sin tocar una sola línea del contenido ya publicado.
- Derivar destinos, widgets, ajustes y reglas de los componentes, el enrutador y el i18n español del frontend.
- Capturar los estados relevantes de cada sección con las capacidades existentes del script de capturas.
- Reutilizar el manifiesto y el validador, ampliando únicamente la lista de encabezados permitidos y las entradas nuevas.

**Non-Goals:**

- Modificar el frontend, sus rutas ni su internacionalización.
- Cambiar el número de pantallas, los `docId`, el sidebar ni las páginas `unlisted` (no hay en este módulo).
- Redactar las secciones existentes ni reemplazar las capturas actuales.
- Ejecutar un cambio de contraseña real ni modificar preferencias del usuario durante las capturas.

## Decisions

### 1. Edición aditiva por bloque

Cada página se modifica únicamente insertando bloques nuevos después de `## Acciones`. El prefijo original se compara con `git show HEAD:<archivo>` antes y después para garantizar que no cambió.

- **Alternativa descartada**: regenerar páginas desde el inventario → contraviene la restricción de no modificar lo documentado y borraría las capturas publicadas.

### 2. Secciones nuevas con nombres fijos

| Página | Encabezados nuevos |
|--------|--------------------|
| Índice | `Mapa del módulo` |
| Índice | `Vista de perfil y widgets` |
| Preferencias | `Preferencias de visualización` |
| Cambiar contraseña | `Cambio de contraseña` |

`Mapa del módulo` ya está permitido desde changes anteriores; los otros tres son nombres nuevos para `check-doc-coverage.mjs`.

- **Alternativa descartada**: documentar los widgets dentro de la tabla Campos existente → mezclaría contenido nuevo con el publicado y rompería la verificación aditiva.

### 3. Fuente de verdad del frontend

Se leen únicamente el contenedor `pages/user-profile`, sus rutas, plantillas, componentes y archivos `i18n`, además de los vocablos globales. Las rutas documentadas SHALL ser las declaradas en los enrutadores. Los widgets se documentan como condicionados por rol según `isProfileWidgetVisible`, sin afirmar que estén siempre presentes.

- **Alternativa descartada**: usar el inventario → no refleja la redirección a `overview` ni la visibilidad condicional de los widgets.

### 4. Capturas sufijadas sobre el manifiesto existente

Se añaden entradas a `scripts/docs-captures.json` con `docId`, `suffix`, ruta concreta y, cuando haga falta, `scrollY` o `clickText`. El archivo resultante es `static/img/screenshots/<docId>-<sufijo>.png`; la PNG original nunca se sustituye. Las entradas de otros módulos no se modifican.

- **Alternativa descartada**: reutilizar las tres imágenes existentes → incumple el requisito de captura real por sección nueva y no muestra los destinos ni los grupos de preferencias.

### 5. Estados capturables sin extensiones de script

El formulario de cambio de contraseña se captura vacío, sin rellenar campos ni enviar la mutación. Las preferencias se capturan en su estado inicial y con desplazamiento vertical para mostrar los grupos inferiores, sin pulsar opciones para no alterar la cuenta. Todas las rutas son concretas y no contienen `:` ni `$`, por lo que `capture-screenshots.js` no cambia.

- **Alternativa descartada**: capturar el formulario con valores de ejemplo → introduciría una contraseña falsa en el entorno y la imagen no sería reproducible.

### 6. Validación extendida sin cambiar el inventario

`npm run check:docs` seguirá comprobando inventario, docs, sidebar y capturas; se ampliará con los tres encabezados nuevos, con la validación de las entradas nuevas del manifiesto y con el requisito de más de una captura en el mapa del módulo. El número de pantallas permanece en 113.

### 7. Sesión de captura

Se reutiliza la base HTTPS `https://localhost:5000`, el bearer con rol de administrador y el Chrome de la caché de Playwright. El segmento `profile` es accesible para todo usuario autenticado, por lo que la sesión de administrador basta; la documentación aclara que los widgets condicionados por rol pueden variar para otros usuarios.

## Risks / Trade-offs

- [Los widgets de `overview` dependen del rol] → capturar con la sesión disponible y documentar explícitamente qué widgets son condicionales.
- [El formulario de contraseña no debe enviarse] → capturar solo el estado vacío y no documentar una clave concreta como válida.
- [Los grupos de preferencias pueden quedar fuera del viewport] → usar `scrollY` para mostrar los inferiores y verificar la captura.
- [Cambio accidental de texto publicado] → verificar el prefijo inmutable de cada archivo antes de aceptar el enriquecimiento.

## Migration Plan

No hay migración de datos ni de rutas. La implementación consiste en añadir secciones a tres archivos Markdown, nuevas PNG y entradas al manifiesto, y ampliar la lista de encabezados del validador. La reversión se logra revertiendo el commit; las capturas antiguas permanecen intactas.

## Open Questions

Ninguna. El alcance, los nombres de sección y los estados a capturar quedan fijados.
