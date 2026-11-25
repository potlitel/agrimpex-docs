# Design

## Context

Ver `proposal.md` para la motivación y `specs/administracion-reference/spec.md` para los requisitos. Restricciones observadas en el repositorio:

- `docs/administracion/` tiene seis páginas vigentes con front matter, H1 y las secciones Propósito, Acceso, Captura, Campos y Acciones, más una captura `<docId>.png` por página. También contiene dos páginas `unlisted` (`usuarios.md`, `grupos.md`) que solo redirigen y no deben modificarse.
- `GroupManagementPage` y `UserManagementPage` son contenedores con un único `router-outlet`; las rutas vacías redirigen a `list`. Por ello la página de índice se documenta como un mapa de destinos y no como una pantalla con controles propios.
- `modules/user/` y `modules/group/` contienen listados y formularios con rutas `list`, `add` y `edit` (con `id` por parámetro de consulta en usuarios y por segmento en grupos). Los textos visibles están en sus archivos `i18n/locale.ts` y en los vocablos globales españoles.
- El listado de usuarios ofrece un panel **Filtrar** con Género, Rol, rango de Último acceso y Activo; el de grupos no declara filtros reactivos y solo muestra búsqueda/recarga del componente genérico.
- El formulario de usuarios valida correo y DNI de forma asíncrona, longitud y validez del carné, complejidad de contraseña y selección de grupos; el de grupos solo nombre, activo y roles. El grupo por defecto no se puede editar, desactivar ni eliminar; en usuarios, el propio usuario y las cuentas de administrador no se pueden desactivar desde la tabla.
- `modules/ai-assistant/` renderiza un panel de chat con estado vacío, sugerencias, campo «Escribe tu consulta...», botón **Enviar**, historial y limpieza de conversación.
- `scripts/docs-captures.json`, `scripts/capture-screenshots.js` (modo `extra`) y `scripts/check-doc-coverage.mjs` ya existen y cubren clics por texto, desplazamiento vertical y horizontal y validación de manifiestos.

## Goals / Non-Goals

**Goals:**

- Añadir secciones nuevas a las seis páginas sin tocar una sola línea del contenido ya publicado ni las páginas de migración.
- Derivar filtros, campos, validaciones y restricciones de los componentes, el enrutador y el i18n español del frontend.
- Capturar los estados relevantes de cada sección con las capacidades existentes del script de capturas.
- Reutilizar el manifiesto y el validador, ampliando únicamente la lista de encabezados permitidos y las entradas nuevas.

**Non-Goals:**

- Modificar el frontend, sus rutas ni su internacionalización.
- Cambiar el número de pantallas, los `docId`, el sidebar ni las páginas `unlisted`.
- Redactar las secciones existentes ni reemplazar las capturas actuales.
- Depender de las capacidades de relleno de campos o intercepción de respuestas propuestas en el change de Autenticación, que aún no están aplicadas.

## Decisions

### 1. Edición aditiva por bloque

Cada página se modifica únicamente insertando bloques nuevos después de `## Acciones`. El prefijo original se compara antes y después para garantizar que no cambió; las dos páginas `unlisted` quedan fuera del alcance.

- **Alternativa descartada**: regenerar páginas desde el inventario → contraviene la restricción de no modificar lo documentado y borraría las capturas publicadas.

### 2. Secciones nuevas con nombres fijos

Bloques previstos: `## Mapa del módulo` en `index.md`; `## Filtros del listado` y `## Operaciones y estados` en ambos listados; `## Formulario (alta y edición)` en ambos formularios; `## Uso del asistente` en `asistente-ia.md`. De estos, solo `Mapa del módulo`, `Operaciones y estados` y `Uso del asistente` son nombres nuevos para `check-doc-coverage.mjs`; los otros dos ya están permitidos desde el change de Calidad.

- **Alternativa descartada**: documentar los filtros dentro de la tabla Campos existente → mezclaría contenido nuevo con el publicado y rompería la verificación aditiva.

### 3. Fuente de verdad del frontend

Se leen únicamente los módulos `user`, `group` y `ai-assistant` del frontend, sus rutas, plantillas, componentes y archivos `i18n/locale.ts` en español, además de los vocablos globales. Las rutas documentadas SHALL ser las declaradas en los enrutadores. Los nombres internos de servicios se traducen a comportamientos observables.

- **Alternativa descartada**: usar el inventario → no refleja validaciones asíncronas, restricciones de estado ni el rango de fechas.

### 4. Capturas sufijadas sobre el manifiesto existente

Se añaden entradas a `scripts/docs-captures.json` con `docId`, `suffix`, ruta concreta y, cuando haga falta, `clickText`, `scrollY` y `scrollRight`. El archivo resultante es `static/img/screenshots/<docId>-<sufijo>.png`; la PNG original nunca se sustituye. Las entradas de Calidad y las de Autenticación (si se aplican antes) no se modifican.

- **Alternativa descartada**: reutilizar las seis imágenes existentes → incumple el requisito de captura real por sección nueva y no muestra paneles de filtros ni estados del chat.

### 5. Estados capturables sin extensiones de script

El panel de filtros se abre pulsando **Filtrar** (`clickText`); la columna de acciones del listado se revela con `scrollRight`; el asistente se captura vacío y tras pulsar una sugerencia (`clickText`). No se requiere rellenar campos ni simular respuestas de API, por lo que `capture-screenshots.js` no cambia.

- **Alternativa descartada**: reutilizar las capacidades propuestas en Autenticación → este change quedaría bloqueado hasta que aquel se aplique.

### 6. Validación extendida sin cambiar el inventario

`npm run check:docs` seguirá comprobando inventario, docs, sidebar y capturas; se ampliará con tres encabezados permitidos y con la validación de las entradas nuevas del manifiesto. El número de pantallas permanece en 113.

### 7. Sesión de captura

Se reutiliza la base HTTPS `https://localhost:5000`, el bearer con rol de administrador y el Chrome de la caché de Playwright. Las rutas de Administración requieren sesión, por lo que se conserva la inyección de token del script; `/ai-assistant` es accesible para cualquier usuario autenticado.

## Risks / Trade-offs

- [El panel de filtros puede no abrirse si el botón cambia de texto] → verificar el estado capturado y ajustar `clickText` a la etiqueta real del i18n.
- [La tabla de usuarios puede no mostrar acciones de eliminación] → documentar solo las acciones visibles y no afirmar una operación deshabilitada en el componente.
- [El asistente depende de un servicio externo para responder] → capturar el estado vacío y, como máximo, una sugerencia local; no documentar respuestas concretas como garantizadas.
- [Crecimiento del repositorio por nuevas PNG] → limitar las capturas a los estados documentados.
- [Cambio accidental de texto publicado] → verificar el prefijo inmutable de cada archivo antes de aceptar el enriquecimiento.

## Migration Plan

No hay migración de datos ni de rutas. La implementación consiste en añadir secciones a seis archivos Markdown, nuevas PNG y entradas al manifiesto, y ampliar la lista de encabezados del validador. La reversión se logra revertiendo el commit; las capturas antiguas permanecen intactas.

## Open Questions

Ninguna. El alcance, los nombres de sección y los estados a capturar quedan fijados, por lo que no afectan a la descomposición en tareas.
