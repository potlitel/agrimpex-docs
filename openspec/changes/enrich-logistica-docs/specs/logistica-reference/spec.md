# Spec Delta

## Purpose

Define la cobertura documental del módulo Logística —importación, contenedores, operaciones CRUD y reportes— con capturas reales por sección y sin alterar lo ya publicado.

## ADDED Requirements

### Requirement: Enriquecimiento estrictamente aditivo

Las páginas existentes de Logística SHALL conservar sin cambios su front matter, encabezado H1 y secciones Propósito, Acceso, Captura, Campos y Acciones. Toda sección nueva SHALL añadirse sin reescribir, reordenar ni eliminar contenido previamente publicado. Las páginas de migración `unlisted` SHALL permanecer intactas.

#### Scenario: Se enriquece una página vigente

- **WHEN** se añade una sección de filtros a una página de Logística ya publicada
- **THEN** el contenido anterior permanece byte a byte idéntico
- **AND** la sección nueva aparece después de las secciones existentes

### Requirement: Cobertura del mapa del módulo

La página renderizada en `/docs/logistica/` SHALL explicar los cuatro grupos del módulo —importación, contenedores, operaciones CRUD y reportes— indicando ruta y rol requerido, y SHALL mostrar más de una captura real del módulo. SHALL explicar también que las rutas vacías de los contenedores redirigen al listado correspondiente.

#### Scenario: Se consulta el inicio de Logística

- **WHEN** un usuario abre `http://localhost:3003/docs/logistica/`
- **THEN** encuentra descritos los grupos del módulo y sus rutas
- **AND** la página muestra al menos dos capturas reales de Logística

### Requirement: Cobertura de paneles de importación

Las páginas del grupo de importación SHALL describir de forma observable qué muestra cada panel, sus columnas, filtros y acciones, derivadas del componente y del i18n español. Los paneles con gráficos SHALL explicar las series y su significado sin prometer valores concretos.

#### Scenario: Se consulta una página de importación

- **WHEN** se documenta una vista del grupo de importación
- **THEN** se enumeran sus columnas y filtros visibles
- **AND** se explica el efecto de cada control sin afirmar resultados garantizados

### Requirement: Cobertura de filtros y columnas de listados logísticos

La documentación SHALL enumerar todos los filtros disponibles en cada listado logístico, con su control, valores y efecto, y SHALL declarar explícitamente cuando un listado no ofrezca panel de filtros, indicando entonces la búsqueda y la recarga genéricas.

#### Scenario: Se documentan los listados operativos

- **WHEN** se consulten las páginas de entregas, inbonds, extensiones, desaduane, especialistas y fletes aéreos
- **THEN** se describan sus filtros y columnas con control y efecto
- **AND** se indique qué listados carecen de panel de filtros

### Requirement: Operaciones de listado y restricciones por rol

La documentación SHALL incluir alta, edición, eliminación cuando exista, activación y acciones propias, con botón, rol y ruta, además de las restricciones observables por rol o estado. SHALL distinguir la edición con `id` por parámetro de consulta de la ruta `edit/:id`.

#### Scenario: Se gestionan registros desde un listado logístico

- **WHEN** un usuario consulta un listado del módulo
- **THEN** la documentación identifica cada acción, su rol y su condición
- **AND** distingue las dos formas de enlazar la edición según el módulo

### Requirement: Formularios compartidos y validaciones

La documentación SHALL detallar los campos de cada formulario compartido por alta y edición, indicando obligatoriedad, control y validaciones vigentes —formatos, fechas, selectores dependientes y complejidad— y el efecto de los botones de guardado y regreso.

#### Scenario: Se crea o edita un registro logístico

- **WHEN** se documenta un formulario del módulo
- **THEN** cada campo aparece con su obligatoriedad y control
- **AND** se explican los mensajes de validación que el usuario puede ver

### Requirement: Cobertura de control y trazabilidad de contenedores

La documentación SHALL explicar las vistas de control de importaciones, inventario en terminal, tránsito, retorno, documentos de embarque, explorador, trazabilidad y extracciones, indicando qué consulta cada una, cómo se navega entre ellas y qué estados muestra.

#### Scenario: Se consultan las vistas de contenedores

- **WHEN** se documenta una vista del grupo de contenedores
- **THEN** se describen su propósito, filtros y navegación
- **AND** se identifica la vista que muestra la trazabilidad de un contenedor

### Requirement: Cobertura de reportes y exportación

La documentación de `/logistic/reports` SHALL explicar los tipos de reporte, el rango de fechas de arribo, la generación y la exportación disponibles, indicando rol y resultado observable sin prometer un archivo concreto.

#### Scenario: Se documenta el generador de reportes

- **WHEN** se consulta la página de reportes logísticos
- **THEN** se enumeran el tipo, el rango y los botones de acción
- **AND** se indica qué produce la exportación sin garantizar su contenido

### Requirement: Captura real por sección añadida

Cada sección nueva SHALL incluir al menos una captura real del backoffice Agrimpex referenciada desde `static/img/screenshots/`. Cuando una sección contenga varias vistas relevantes —mapa del módulo, paneles con filtros, formularios con pestañas o paneles con gráficos— SHALL incluir más de una captura. Ninguna sección nueva SHALL usar el placeholder compartido.

#### Scenario: Se incorpora una sección con capturas

- **WHEN** se añade una sección nueva a una página de Logística
- **THEN** la sección referencia al menos una imagen PNG existente
- **AND** la leyenda identifica la imagen como captura del backoffice

### Requirement: Verificación sin cambiar el inventario

La validación `npm run check:docs` SHALL comprobar que las secciones nuevas referencian imágenes existentes y que el inventario conserva sus 113 `docId`. El enriquecimiento SHALL NOT añadir ni eliminar pantallas del inventario ni modificar las páginas `unlisted` de migración.

#### Scenario: Se valida el manual enriquecido

- **WHEN** se ejecuta `npm run check:docs` después del enriquecimiento
- **THEN** la validación termina sin errores
- **AND** el número de pantallas del inventario sigue siendo 113
