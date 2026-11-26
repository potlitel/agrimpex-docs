# Design

## Context

Ver `proposal.md` para la motivación y `specs/reportes-reference/spec.md` para los requisitos. Restricciones observadas en el repositorio:

- `docs/reportes/` tiene ocho páginas canónicas con front matter, H1 y las secciones Propósito, Acceso, Captura, Campos y Acciones, más una captura `<docId>.png` por página. Ninguna tiene secciones adicionales ni páginas `unlisted` de migración.
- `/reports` carga `ReportsManagementPage`, un contenedor con `router-outlet`; la ruta vacía redirige a `days-range`, por lo que la página de índice se documenta como un mapa de destinos y no como una pantalla con controles propios.
- Los reportes `days-range`, `count-by-status`, `summary-by-specialist` y `status-by-specialist` comparten `ReportsListComponent`. `monitoring` usa `MonitoringReportsComponent`, `customs-priorities` usa `CustomsPrioritiesReportComponent` con un guard `canMatch` de roles, y todas las variantes de exportación comparten `ExportReportsComponent`.
- El ACL concede el segmento `reports` a Administrador, Especialista, Calidad, Consultor y Logístico; `customs-priorities` restringe además a Administrador, Especialista, Logístico y Consultor.
- Los textos visibles están en el i18n del módulo y en los vocablos globales españoles. Los resultados dependen de los datos del entorno, por lo que no se documentan cifras concretas.
- `scripts/docs-captures.json`, `scripts/capture-screenshots.js` (modo `extra`) y `scripts/check-doc-coverage.mjs` ya existen y cubren clics por texto, desplazamiento vertical y horizontal y validación de manifiestos. El validador ya permite `Filtros del listado`, `Operaciones y estados` e `Interpretación del panel`.

## Goals / Non-Goals

**Goals:**

- Añadir secciones nuevas a las ocho páginas sin tocar una sola línea del contenido ya publicado.
- Derivar filtros, columnas, acciones, roles y variantes de exportación de los componentes, el enrutador y el i18n español del frontend.
- Capturar los estados relevantes de cada sección con las capacidades existentes del script de capturas.
- Reutilizar el manifiesto y el validador, ampliando únicamente la lista de encabezados permitidos y las entradas nuevas.
- Dar cobertura individual a las siete condiciones de monitorización y a las quince variantes de exportación mediante subsecciones `###` con captura propia, sin crear páginas nuevas ni alterar el inventario.

**Non-Goals:**

- Modificar el frontend, sus rutas ni su internacionalización.
- Cambiar el número de pantallas, los `docId`, el sidebar ni las páginas `unlisted` (no hay en este módulo).
- Redactar las secciones existentes ni reemplazar las capturas actuales.
- Documentar las variantes de exportación como páginas independientes ni prometer archivos o cifras concretas.

## Decisions

### 1. Edición aditiva por bloque

Cada página se modifica únicamente insertando bloques nuevos después de `## Acciones`. El prefijo original se compara con `git show HEAD:<archivo>` antes y después para garantizar que no cambió.

- **Alternativa descartada**: regenerar páginas desde el inventario → contraviene la restricción de no modificar lo documentado y borraría las capturas publicadas.

### 2. Secciones nuevas con nombres fijos

| Página | Encabezados nuevos |
|--------|--------------------|
| Índice | `Mapa del módulo` |
| Cuatro reportes de listado | `Filtros del listado`, `Operaciones y estados` |
| Monitorización | `Interpretación del panel` |
| Prioridades aduaneras | `Filtros del listado`, `Operaciones y estados` |
| Exportación | `Variantes de exportación` |

De estos, `Mapa del módulo` y `Variantes de exportación` son nombres nuevos para `check-doc-coverage.mjs`; los demás ya están permitidos desde changes anteriores.

- **Alternativa descartada**: documentar los filtros dentro de la tabla Campos existente → mezclaría contenido nuevo con el publicado y rompería la verificación aditiva.

### 3. Fuente de verdad del frontend

Se leen únicamente el módulo `reports`, el componente de prioridades aduaneras, sus rutas, plantillas y archivos `i18n`, además de los vocablos globales. Las rutas documentadas SHALL ser las declaradas en los enrutadores. Los roles se derivan del ACL del segmento `reports` y del guard `canMatch` de prioridades.

- **Alternativa descartada**: usar el inventario → lista las acciones pero no distingue componentes compartidos ni restricciones de rol.

### 4. Capturas sufijadas sobre el manifiesto existente

Se añaden entradas a `scripts/docs-captures.json` con `docId`, `suffix`, ruta concreta y, cuando haga falta, `clickText`, `scrollY` o `scrollRight`. El archivo resultante es `static/img/screenshots/<docId>-<sufijo>.png`; la PNG original nunca se sustituye. Las entradas de otros módulos no se modifican.

- **Alternativa descartada**: reutilizar las ocho imágenes existentes → incumple el requisito de captura real por sección nueva y no muestra los paneles de filtros.

### 5. Estados capturables sin extensiones de script

El panel de filtros se abre pulsando **Filtrar** (`clickText`) y la columna de acciones se revela con `scrollRight` o `scrollY` según la tabla. No se rellenan fechas ni se simulan respuestas de exportación, porque los resultados dependen de los datos del entorno. Ninguna ruta del manifiesto contiene `:` ni `$`, por lo que `capture-screenshots.js` no cambia.

- **Alternativa descartada**: capturar resultados de reportes con valores concretos → la imagen dependería de datos volátiles y no sería reproducible.

### 6. Validación extendida sin cambiar el inventario

`npm run check:docs` seguirá comprobando inventario, docs, sidebar y capturas; se ampliará con los dos encabezados nuevos, con la validación de las entradas nuevas del manifiesto y con el requisito de más de una captura en el mapa del módulo. El número de pantallas permanece en 113.

### 7. Sesión de captura

Se reutiliza la base HTTPS `https://localhost:5000`, el bearer con rol de administrador y el Chrome de la caché de Playwright. Todas las rutas de Reportes requieren sesión, por lo que se conserva la inyección de token del script. El volumen es reducido, por lo que no hace falta particionar por lotes.

### 8. Cobertura granular sin nuevas páginas

La auditoría del backoffice muestra 21 pantallas de reportes: cuatro listados, monitorización con siete condiciones, prioridades aduaneras y quince variantes de exportación. El manual solo tiene ocho páginas canónicas. Para que cada sección quede documentada con captura propia sin romper la restricción de 113 pantallas, se insertan subsecciones `###` dentro de `## Interpretación del panel` y `## Variantes de exportación`: siete subsecciones de condición y quince de variante, cada una con una PNG sufijada del manifiesto. El validador comprueba el número de subsecciones y la existencia de sus imágenes.

- **Alternativa descartada**: crear una página canónica por variante → cambiaría el inventario, el sidebar y el número de pantallas, contraviniendo la spec.

## Risks / Trade-offs

- [Los resultados de los reportes dependen de los datos del entorno] → capturar los estados iniciales y no documentar cifras concretas como garantizadas.
- [Las variantes de exportación comparten componente] → documentarlas en una sola sección como variantes, no como páginas independientes.
- [La tabla de reportes puede no tener desplazamiento horizontal] → usar `scrollY` en ese caso y documentar solo las acciones visibles.
- [El guard de prioridades excluye a Calidad] → respetar la lista de roles del enrutador y no generalizar el ACL del módulo.
- [Cambio accidental de texto publicado] → verificar el prefijo inmutable de cada archivo antes de aceptar el enriquecimiento.

## Migration Plan

No hay migración de datos ni de rutas. La implementación consiste en añadir secciones a ocho archivos Markdown, nuevas PNG y entradas al manifiesto, y ampliar la lista de encabezados del validador. La reversión se logra revertiendo el commit; las capturas antiguas permanecen intactas.

## Open Questions

Ninguna. El alcance, los nombres de sección y los estados a capturar quedan fijados.
