# Design

## Context

Ver `proposal.md` para la motivación y `specs/calidad-reference/spec.md` para los requisitos. Restricciones que determinan el enfoque:

- `docs/calidad/` tiene siete páginas vigentes generadas desde `scripts/docs-inventory.json`; cada una ya contiene front matter con `source_route`/`source_component`, H1 y las secciones Propósito, Acceso, Captura, Campos y Acciones, además de una captura `<docId>.png`.
- El módulo Calidad no tiene componentes propios salvo `routes.ts` e i18n; los listados y formularios viven en `../agrimpex-backoffice/src/app/modules/logistic/component/import-permits/**` y `.../preliberations/**`.
- Las seis entidades tienen `list`, `add` y `edit/:id`; `add` y `edit/:id` cargan el mismo componente de formulario.
- `ImportPermitsDashboardComponent` renderiza KPIs y múltiples gráficos ApexCharts en una sola vista extensa, sin subrutas por sección.
- `scripts/capture-screenshots.js` ya captura una imagen por `docId` con sesión bearer; `npm run check:docs` valida inventario, docs, sidebar y capturas.

## Goals / Non-Goals

**Goals:**

- Añadir secciones nuevas a las siete páginas sin tocar una sola línea del contenido ya publicado.
- Derivar filtros, campos y acciones de los componentes y del i18n del frontend, no de suposiciones.
- Soportar varias capturas reales por página, con al menos dos en `/docs/calidad/`.
- Extender la validación para que detecte secciones nuevas sin captura o con capturas rotas.

**Non-Goals:**

- Modificar el frontend, sus rutas ni su internacionalización.
- Cambiar el número de pantallas, los `docId` ni la jerarquía del sidebar.
- Redactar las secciones existentes ni reemplazar las capturas actuales.
- Documentar combinaciones de parámetros CRUD más allá de `add`/`edit/:id` compartidos.

## Decisions

### 1. Edición aditiva por bloque

Cada página se modifica únicamente insertando bloques nuevos después de `## Acciones`. El front matter, el H1 y las cinco secciones originales se conservan byte a byte; antes y después se compara el prefijo del archivo para garantizarlo.

- **Alternativa descartada**: regenerar las páginas desde la plantilla → contraviene la restricción de no modificar lo documentado y destruiría las capturas ya publicadas.

### 2. Secciones nuevas con nombres fijos

Los bloques añadidos siguen un orden predecible: `## Filtros del listado`, `## Formulario (alta y edición)`, `## Operaciones y documentos` y, solo en el índice, `## Interpretación del panel`. Las tablas usan las claves i18n vigentes del componente como fuente de las etiquetas en español.

- **Alternativa descartada**: ampliar la tabla Campos existente → mezclaría contenido nuevo con el publicado y dificultaría la verificación aditiva.

### 3. Fuente de verdad del frontend

Se leen únicamente `modules/calidad/routes.ts`, las plantillas `.html` y los `.ts` de los doce componentes de listado/formulario, y los archivos `i18n/locale.ts` de Calidad y Logística. `add` y `edit/:id` se documentan en una sola sección porque comparten componente. Las rutas documentadas SHALL ser las declaradas en `CALIDAD_ROUTES`.

- **Alternativa descartada**: inferir campos desde el inventario → el inventario solo tiene etiquetas genéricas y no refleja filtros, pestañas ni validaciones.

### 4. Múltiples capturas por documento

Se añade un manifiesto opcional en `scripts/docs-inventory.json` (o un archivo hermano) que mapea `docId` → lista de capturas con sufijo, ruta y posición de scroll. Los archivos se guardan como `static/img/screenshots/<docId>-<sufijo>.png`. La captura original `<docId>.png` no se sustituye, por lo que las secciones publicadas siguen intactas.

- **Alternativa descartada**: una única captura `fullPage` → el dashboard es demasiado alto y los gráficos quedan ilegibles; además no permite ilustrar por separado filtros y pestañas.
- **Alternativa descartada**: reutilizar las PNG existentes → incumple el requisito de captura real por sección nueva.

### 5. Captura del dashboard por desplazamiento

Para `/calidad/import-permits/dashboard` se toman al menos dos capturas del mismo estado de la página en distintos desplazamientos verticales: cabecera/KPIs y gráficos superiores; series, distribución, mapas de calor y resumen por entidad. Se espera a que ApexCharts termine de renderizar antes de cada disparo.

### 6. Validación extendida

`npm run check:docs` recibe el manifiesto de capturas y verifica que cada imagen referenciada por una sección nueva exista, que `$`/`:` no aparezcan en rutas capturadas sin valor concreto y que el inventario siga teniendo 113 pantallas. La comprobación de que el contenido anterior no cambió se apoya en el prefijo inmutable descrito en la Decisión 1.

### 7. Sesión de captura

Las capturas requieren el API local en `127.0.0.1:8990`, el frontend local en `localhost:5000` y un bearer válido pasado por `DOCS_BEARER`. El script ya resuelve Chrome desde la caché de Playwright y reinicia el navegador por lotes; se reutiliza ese mecanismo sin añadir dependencias. Los servidores locales estaban detenidos al redactar este diseño, así que la fase de implementación debe levantarlos de nuevo.

## Risks / Trade-offs

- [Deriva entre i18n español e inglés] → usar siempre `locale.ts` en español y citar la clave exacta en cada fila documentada.
- [Diálogos de vista previa sin datos] → capturar formularios en `add`, que no requiere un registro existente; documentar `edit/:id` como la misma pantalla con datos precargados.
- [Gráficos que renderizan tarde] → esperar a `apx-chart` y a la red inactiva antes de disparar cada captura del dashboard.
- [Crecimiento del repositorio por nuevas PNG] → limitar las capturas adicionales a las secciones que lo requieren y comprimir con la configuración actual de Puppeteer.
- [Cambio accidental de texto publicado] → verificar el prefijo inmutable de cada archivo antes de aceptar el enriquecimiento.

## Migration Plan

No hay migración de datos ni de rutas. La implementación consiste en añadir secciones a siete archivos Markdown, nuevas PNG y extensiones a los scripts. La reversión se logra revertiendo el commit correspondiente; las capturas antiguas permanecen intactas durante todo el proceso.
