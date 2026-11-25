# Design

## Context

Ver `proposal.md` para la motivación y `specs/seguridad-reference/spec.md` para los requisitos. Restricciones observadas en el repositorio:

- `docs/seguridad/` tiene cinco páginas canónicas con front matter, H1 y las secciones Propósito, Acceso, Captura, Campos y Acciones, más una captura `<docId>.png` por página. Ninguna tiene secciones adicionales. La página `unlisted` de migración solo redirige y no debe modificarse.
- `/security/trace` carga `TracePage`, un contenedor con `router-outlet` e hijas `list` y `dashboard`; la ruta vacía y la comodín redirigen a `list`.
- `/verification` es la versión autenticada de la verificación documental; comparte contrato con la ruta pública `/verify/:code`, que no exige sesión. El resultado se construye desde un registro de entidades y ofrece copiar, descargar, imprimir y contactar.
- `/logistic/notification/:entityType/:entityId` muestra el detalle de una notificación y enlaza con su traza y su vista completa. El directorio `index` de Seguridad lo referencia con parámetros, pero el manifiesto de capturas exige rutas concretas.
- El componente de listado de trazabilidad declara un panel **Filtrar** con usuario, rol, rango de fechas, módulo, acción, clase e identificador de entidad y correlación, además de un diálogo de comparación de cambios.
- `scripts/docs-captures.json`, `scripts/capture-screenshots.js` (modo `extra`) y `scripts/check-doc-coverage.mjs` ya existen y cubren clics por texto, desplazamiento vertical y horizontal y validación de manifiestos. El validador ya permite `Filtros del listado`, `Operaciones y estados` e `Interpretación del panel`; el script ya tiene una ruta concreta de ejemplo para notificaciones.

## Goals / Non-Goals

**Goals:**

- Añadir secciones nuevas a las cinco páginas sin tocar una sola línea del contenido ya publicado ni la página de migración.
- Derivar filtros, indicadores, acciones y roles de los componentes, el enrutador y el i18n español del frontend.
- Capturar los estados relevantes de cada sección con las capacidades existentes del script de capturas.
- Reutilizar el manifiesto y el validador, ampliando únicamente la lista de encabezados permitidos y las entradas nuevas.

**Non-Goals:**

- Modificar el frontend, sus rutas ni su internacionalización.
- Cambiar el número de pantallas, los `docId`, el sidebar ni la página `unlisted`.
- Redactar las secciones existentes ni reemplazar las capturas actuales.
- Documentar resultados de verificación concretos o cifras de dashboard dependientes de los datos del entorno.

## Decisions

### 1. Edición aditiva por bloque

Cada página se modifica únicamente insertando bloques nuevos después de `## Acciones`. El prefijo original se compara con `git show HEAD:<archivo>` antes y después para garantizar que no cambió; la página `unlisted` queda fuera del alcance.

- **Alternativa descartada**: regenerar páginas desde el inventario → contraviene la restricción de no modificar lo documentado y borraría las capturas publicadas.

### 2. Secciones nuevas con nombres fijos

| Página | Encabezados nuevos |
|--------|--------------------|
| Índice | `Mapa del módulo` |
| Listado de trazabilidad | `Filtros del listado`, `Operaciones y estados` |
| Dashboard de trazabilidad | `Interpretación del panel` |
| Verificación de documentos | `Uso de la verificación` |
| Notificaciones | `Detalle de la notificación` |

De estos, `Mapa del módulo`, `Uso de la verificación` y `Detalle de la notificación` son nombres nuevos para `check-doc-coverage.mjs`; los demás ya están permitidos desde changes anteriores.

- **Alternativa descartada**: documentar los filtros dentro de la tabla Campos existente → mezclaría contenido nuevo con el publicado y rompería la verificación aditiva.

### 3. Fuente de verdad del frontend

Se leen únicamente los módulos `trace`, `verification` y `notification`, sus rutas, plantillas, componentes y archivos `i18n`, además de los vocablos globales. Las rutas documentadas SHALL ser las declaradas en los enrutadores. Los roles se derivan del ACL del segmento raíz y de los guards declarados.

- **Alternativa descartada**: usar el inventario → no refleja los ocho filtros de trazabilidad ni la distinción entre verificación interna y pública.

### 4. Capturas sufijadas y rutas concretas

Se añaden entradas a `scripts/docs-captures.json` con `docId`, `suffix`, ruta concreta y, cuando haga falta, `clickText`, `scrollY` o `scrollRight`. El archivo resultante es `static/img/screenshots/<docId>-<sufijo>.png`; la PNG original nunca se sustituye. Para notificaciones se usa `/logistic/notification/BL/BL-1`, ya presente como ruta de ejemplo en el script. Las entradas de otros módulos no se modifican.

- **Alternativa descartada**: reutilizar las cinco imágenes existentes → incumple el requisito de captura real por sección nueva y no muestra el panel de filtros.

### 5. Estados capturables sin extensiones de script

El panel de filtros se abre pulsando **Filtrar** (`clickText`) y la columna de acciones se revela con `scrollRight` o `scrollY` según la tabla. La verificación se captura en su estado inicial sin introducir un código válido, porque el resultado depende de datos del entorno. Ninguna ruta del manifiesto contiene `:` ni `$`, por lo que `capture-screenshots.js` no cambia.

- **Alternativa descartada**: capturar `/verify/:code` o `/logistic/notification/:entityType/:entityId` con parámetros → el script omite rutas paramétricas y la imagen no sería reproducible.

### 6. Validación extendida sin cambiar el inventario

`npm run check:docs` seguirá comprobando inventario, docs, sidebar y capturas; se ampliará con los tres encabezados nuevos, con la validación de las entradas nuevas del manifiesto y con el requisito de más de una captura en el mapa del módulo. El número de pantallas permanece en 113.

### 7. Sesión de captura

Se reutiliza la base HTTPS `https://localhost:5000`, el bearer con rol de administrador y el Chrome de la caché de Playwright. Las rutas de trazabilidad requieren sesión; `/verification` también se captura autenticado para mostrar la versión interna. El volumen es reducido, por lo que no hace falta particionar por lotes.

## Risks / Trade-offs

- [El resultado de verificación depende de un CSV válido] → capturar solo el estado inicial y no documentar respuestas concretas como garantizadas.
- [El dashboard puede no mostrar gráficos en todos los entornos] → describir los indicadores declarados por el componente sin suponer series adicionales.
- [La tabla de trazabilidad puede no tener desplazamiento horizontal] → usar `scrollY` en ese caso y documentar solo las acciones visibles.
- [La ruta de notificaciones es paramétrica en el inventario] → usar siempre la ruta concreta de ejemplo en el manifiesto y en la documentación nueva.
- [Cambio accidental de texto publicado] → verificar el prefijo inmutable de cada archivo antes de aceptar el enriquecimiento.

## Migration Plan

No hay migración de datos ni de rutas. La implementación consiste en añadir secciones a cinco archivos Markdown, nuevas PNG y entradas al manifiesto, y ampliar la lista de encabezados del validador. La reversión se logra revertiendo el commit; las capturas antiguas permanecen intactas.

## Open Questions

Ninguna. El alcance, los nombres de sección y los estados a capturar quedan fijados.
