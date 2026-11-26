# Spec Delta

## Purpose

Define la cobertura documental del módulo Reportes —reportes de listado, monitorización, prioridades aduaneras y exportación— con capturas reales por sección y sin alterar lo ya publicado.

## ADDED Requirements

### Requirement: Enriquecimiento estrictamente aditivo

Las páginas existentes de Reportes SHALL conservar sin cambios su front matter, encabezado H1 y secciones Propósito, Acceso, Captura, Campos y Acciones. Toda sección nueva SHALL añadirse sin reescribir, reordenar ni eliminar contenido previamente publicado.

#### Scenario: Se enriquece una página vigente

- **WHEN** se añade una sección de filtros a una página de Reportes ya publicada
- **THEN** el contenido anterior permanece byte a byte idéntico
- **AND** la sección nueva aparece después de las secciones existentes

### Requirement: Cobertura del mapa del módulo

La página renderizada en `/docs/reportes/` SHALL explicar los cuatro grupos del módulo —reportes de listado, monitorización, prioridades aduaneras y exportación— indicando ruta y rol requerido, y SHALL mostrar más de una captura real. SHALL explicar también que `/reports` redirige a `/reports/days-range`.

#### Scenario: Se consulta el inicio de Reportes

- **WHEN** un usuario abre `http://localhost:3003/docs/reportes/`
- **THEN** encuentra descritos los grupos del módulo y sus rutas
- **AND** la página muestra al menos dos capturas reales de Reportes

### Requirement: Cobertura de filtros y columnas de reportes

La documentación SHALL enumerar en cada reporte de listado los filtros disponibles, con su control, valores y efecto, y SHALL describir las columnas que realmente muestra la tabla sin afirmar resultados garantizados.

#### Scenario: Se documenta un reporte de listado

- **WHEN** se consulta un reporte de rango de días, estado o especialista
- **THEN** se enumeran sus filtros y columnas con control y efecto
- **AND** no se presentan cifras dependientes de los datos del entorno como garantizadas

### Requirement: Operaciones de generación y exportación

La documentación SHALL incluir las acciones **Generar**, **Actualizar** y **Exportar Excel** cuando el componente las ofrezca, indicando botón, rol y ruta, y SHALL distinguir los formatos disponibles sin prometer un archivo concreto.

#### Scenario: Se genera un reporte

- **WHEN** un usuario ejecuta la acción de generación desde un reporte
- **THEN** la documentación identifica el botón, su rol y la ruta implicada
- **AND** explica qué produce la exportación sin garantizar su contenido

### Requirement: Cobertura de la monitorización

La documentación SHALL explicar las condiciones operativas seguidas en `/reports/monitoring`, sus indicadores y las acciones disponibles, derivadas del componente y del i18n español, sin suponer series que no estén declaradas.

#### Scenario: Se consulta la monitorización

- **WHEN** se documenta la página de monitorización
- **THEN** se describen las condiciones seguidas y sus indicadores
- **AND** se indican las acciones **Generar** y **Actualizar** con su rol

### Requirement: Cobertura de prioridades aduaneras

La documentación SHALL explicar los filtros de `/reports/customs-priorities`, el cálculo de estadía y la restricción de acceso por el guard de roles, identificando qué roles pueden abrir la ruta.

#### Scenario: Se consultan las prioridades aduaneras

- **WHEN** un usuario abre la ruta de prioridades aduaneras
- **THEN** la documentación describe sus filtros y el significado de la estadía
- **AND** identifica los roles autorizados por el guard

### Requirement: Cobertura de variantes de exportación

La documentación SHALL explicar que las variantes de arribos, precios, tendencias y alertas comparten `ExportReportsComponent` y no se documentan como páginas independientes, indicando el rango de fechas, la selección de columnas y los formatos disponibles.

#### Scenario: Se elige una variante de exportación

- **WHEN** un usuario selecciona una variante desde `/reports/arrived-enabled`
- **THEN** la documentación explica qué cambia y qué permanece común entre variantes
- **AND** enumera formatos, rango de fechas y columnas sin prometer un archivo concreto

### Requirement: Captura real por sección añadida

Cada sección nueva SHALL incluir al menos una captura real del backoffice Agrimpex referenciada desde `static/img/screenshots/`. Cuando una sección contenga varias vistas relevantes —mapa del módulo o panel de filtros— SHALL incluir más de una captura. Ninguna sección nueva SHALL usar el placeholder compartido.

#### Scenario: Se incorpora una sección con capturas

- **WHEN** se añade una sección nueva a una página de Reportes
- **THEN** la sección referencia al menos una imagen PNG existente
- **AND** la leyenda identifica la imagen como captura del backoffice

### Requirement: Cobertura individual de las condiciones de monitorización

La documentación SHALL incluir una subsección `###` por cada una de las siete condiciones operativas de `/reports/monitoring` —24h sin Especialista, 48h en Trámite Aduana, 25 días sin extraer, Demora en Devolución (15 días), Habilitados no liberados, Almacenaje en Terminal y Habilitados sin extraer 72h—, cada una con su criterio, su unidad de tiempo y al menos una captura real de esa condición.

#### Scenario: Se documenta una condición de monitorización

- **WHEN** se consulta la subsección de una condición en `docs/reportes/monitorizacion.md`
- **THEN** se describe el criterio seguido y la columna de tiempo correspondiente
- **AND** la subsección referencia una PNG sufijada existente del manifiesto

### Requirement: Cobertura individual de las variantes de exportación

La documentación SHALL incluir una subsección `###` por cada una de las quince variantes declaradas en el enrutador de reportes, dentro de `docs/reportes/exportacion.md`, indicando su ruta concreta, sus columnas, si exige rango de fechas y una captura real de esa variante. Las subsecciones SHALL presentarse como opciones de `ExportReportsComponent`, no como páginas independientes.

#### Scenario: Se documenta una variante de exportación

- **WHEN** se consulta la subsección de una variante en `docs/reportes/exportacion.md`
- **THEN** se identifican su ruta, sus columnas y su requerimiento de fechas
- **AND** la subsección referencia una PNG sufijada existente del manifiesto

### Requirement: Verificación exhaustiva de subsecciones

`npm run check:docs` SHALL comprobar que `docs/reportes/monitorizacion.md` tiene siete subsecciones `###` y `docs/reportes/exportacion.md` quince, y que cada una incluye al menos una captura del manifiesto que existe en `static/img/screenshots/`.

#### Scenario: Se valida la cobertura por sección

- **WHEN** se ejecuta `npm run check:docs` tras la ampliación
- **THEN** la validación termina sin errores si todas las subsecciones tienen captura
- **AND** falla si falta una subsección o si alguna referencia una imagen inexistente

### Requirement: Verificación sin cambiar el inventario

La validación `npm run check:docs` SHALL comprobar que las secciones nuevas referencian imágenes existentes y que el inventario conserva sus 113 `docId`. El enriquecimiento SHALL NOT añadir ni eliminar pantallas del inventario.

#### Scenario: Se valida el manual enriquecido

- **WHEN** se ejecuta `npm run check:docs` después del enriquecimiento
- **THEN** la validación termina sin errores
- **AND** el número de pantallas del inventario sigue siendo 113
