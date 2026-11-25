# Design

## Context

Ver `proposal.md` para la motivación y `specs/nomenclaturas-reference/spec.md` para los requisitos. Restricciones observadas en el repositorio:

- `docs/nomenclaturas/` tiene 34 páginas canónicas con front matter, H1 y las secciones Propósito, Acceso, Captura, Campos y Acciones, más una captura `<docId>.png` por página. Ninguna tiene secciones adicionales. También contiene siete páginas `unlisted` de migración que solo redirigen y no deben modificarse.
- El inventario declara 34 `docId` para Nomenclaturas. La página de índice usa `/management/nomenclatures`; los 33 restantes siguen el patrón `/management/nomenclatures/<slug>/list`, con `add` y `edit` que comparten formulario. El `id` de edición viaja por parámetro de consulta, salvo excepciones. `solicitud-compra` solo expone listado.
- La mayoría de los nomencladores usan el formulario genérico `BasicNomFormComponent`; otros declaran formularios propios (operador, planta, cliente, proveedor, buque, aerolínea, dirección de descarga, municipio, consejo popular, entre otros). Los textos visibles están en el i18n del módulo y en los vocablos globales españoles.
- El ACL concede el segmento `nomenclatures` a `ROLE_ADMIN` y `ROLE_ESPECIALISTA`; las acciones de escritura se documentan con esos roles, sin inventar permisos adicionales.
- `scripts/docs-captures.json`, `scripts/capture-screenshots.js` (modo `extra`) y `scripts/check-doc-coverage.mjs` ya existen y cubren clics por texto, desplazamiento vertical y horizontal y validación de manifiestos. El validador ya permite `Filtros del listado`, `Formulario (alta y edición)` y `Operaciones y estados`.
- El alcance es el módulo completo (34 páginas), por analogía con el change de referencia `enrich-logistica-docs`. Esta es la suposición registrada; si se desea un subconjunto, se debe revisar este artefacto antes de aplicar.

## Goals / Non-Goals

**Goals:**

- Añadir secciones nuevas a las 34 páginas sin tocar una sola línea del contenido ya publicado ni las páginas de migración.
- Derivar filtros, columnas, operaciones, formularios y excepciones de los componentes, el enrutador y el i18n español del frontend, evitando texto genérico repetido.
- Capturar los estados relevantes de cada sección con las capacidades existentes del script de capturas.
- Reutilizar el manifiesto y el validador, ampliando únicamente la lista de encabezados permitidos y las entradas nuevas.

**Non-Goals:**

- Modificar el frontend, sus rutas ni su internacionalización.
- Cambiar el número de pantallas, los `docId`, el sidebar ni las páginas `unlisted`.
- Redactar las secciones existentes ni reemplazar las capturas actuales.
- Documentar formularios o acciones que el frontend no expone, aunque el inventario los sugiera.

## Decisions

### 1. Edición aditiva por bloque

Cada página se modifica únicamente insertando bloques nuevos después de `## Acciones`. El prefijo original se compara con `git show HEAD:<archivo>` antes y después para garantizar que no cambió; las siete páginas `unlisted` quedan fuera del alcance.

- **Alternativa descartada**: regenerar páginas desde el inventario → contraviene la restricción de no modificar lo documentado y borraría las capturas publicadas.

### 2. Secciones nuevas con nombres fijos

| Página | Encabezados nuevos |
|--------|--------------------|
| Índice | `Mapa del módulo` |
| 33 listados | `Filtros del listado`, `Operaciones y estados` |
| Páginas con formulario propio | `Formulario (alta y edición)` |
| Excepciones | `Excepciones del nomenclador` |

De estos, `Mapa del módulo` y `Excepciones del nomenclador` son nombres nuevos para `check-doc-coverage.mjs`; los demás ya están permitidos desde los changes de Calidad y Administración.

- **Alternativa descartada**: documentar los filtros dentro de la tabla Campos existente → mezclaría contenido nuevo con el publicado y rompería la verificación aditiva.

### 3. Fuente de verdad del frontend

Se leen únicamente el módulo `nomenclatures` del frontend, sus rutas, plantillas, componentes y archivos `i18n`, además de los vocablos globales. Las rutas documentadas SHALL ser las declaradas en los enrutadores. Cuando el inventario anuncia un formulario que el enrutador no declara, prevalece el enrutador y se documenta la excepción.

- **Alternativa descartada**: usar el inventario → produciría descripciones idénticas para los 33 nomencladores y afirmaría acciones inexistentes.

### 4. Capturas sufijadas sobre el manifiesto existente

Se añaden entradas a `scripts/docs-captures.json` con `docId`, `suffix`, ruta concreta y, cuando haga falta, `clickText`, `scrollY` o `scrollRight`. El archivo resultante es `static/img/screenshots/<docId>-<sufijo>.png`; la PNG original nunca se sustituye. Las entradas de Calidad, Autenticación, Administración y Logística no se modifican.

- **Alternativa descartada**: reutilizar las 34 imágenes existentes → incumple el requisito de captura real por sección nueva y no muestra los paneles de filtros.

### 5. Estados capturables sin extensiones de script

El panel de filtros se abre pulsando **Filtrar** (`clickText`) y la columna de acciones se revela con `scrollRight` o `scrollY` según la tabla. Las rutas de edición con `id` se sustituyen por la ruta de alta en las capturas, porque el script omite rutas con parámetros. No se requiere rellenar campos ni simular respuestas, por lo que `capture-screenshots.js` no cambia.

### 6. Validación extendida sin cambiar el inventario

`npm run check:docs` seguirá comprobando inventario, docs, sidebar y capturas; se ampliará con los dos encabezados nuevos, con la validación de las entradas nuevas del manifiesto y con el requisito de más de una captura en el mapa del módulo. El número de pantallas permanece en 113.

### 7. Sesión y ejecución por lotes

Se reutiliza la base HTTPS `https://localhost:5000`, el bearer con rol de administrador y el Chrome de la caché de Playwright. Con unas ochenta entradas, la captura se ejecuta por grupos con `DOCS_CAPTURE_ONLY`, `DOCS_CAPTURE_SUFFIX` y `DOCS_CAPTURE_SKIP_EXISTING=1` para poder reanudar sin sobrescribir lo ya generado; el script reinicia el navegador cada 12 capturas.

## Risks / Trade-offs

- [Los 33 nomencladores son visualmente similares] → derivar el texto de cada componente e i18n en lugar de repetir una plantilla genérica.
- [Algunos listados no tienen panel de filtros] → declarar explícitamente su ausencia y documentar solo búsqueda y recarga.
- [Los formularios genéricos pueden ocultar particularidades] → documentar campos propios solo donde el componente los declara.
- [Las rutas de edición llevan `id` por parámetro de consulta] → capturar la ruta de alta para mostrar el formulario sin depender de un identificador concreto.
- [Crecimiento del repositorio por nuevas PNG] → limitar las capturas a los estados documentados y no duplicar vistas equivalentes.
- [Cambio accidental de texto publicado al editar 34 archivos] → verificar el prefijo inmutable de cada archivo antes de aceptar el enriquecimiento.

## Migration Plan

No hay migración de datos ni de rutas. La implementación consiste en añadir secciones a 34 archivos Markdown, nuevas PNG y entradas al manifiesto, y ampliar la lista de encabezados del validador. La reversión se logra revertiendo el commit; las capturas antiguas permanecen intactas.

## Open Questions

Ninguna. El alcance, los nombres de sección y los estados a capturar quedan fijados.
