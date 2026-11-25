# nomenclaturas-reference Specification

## Purpose

Define la cobertura documental del módulo Nomenclaturas —nomencladores, listados, formularios compartidos y excepciones— con capturas reales por sección y sin alterar lo ya publicado.

## Requirements

### Requirement: Enriquecimiento estrictamente aditivo

Las páginas existentes de Nomenclaturas SHALL conservar sin cambios su front matter, encabezado H1 y secciones Propósito, Acceso, Captura, Campos y Acciones. Toda sección nueva SHALL añadirse sin reescribir, reordenar ni eliminar contenido previamente publicado. Las páginas de migración `unlisted` SHALL permanecer intactas.

#### Scenario: Se enriquece una página vigente

- **WHEN** se añade una sección de filtros a una página de Nomenclaturas ya publicada
- **THEN** el contenido anterior permanece byte a byte idéntico
- **AND** la sección nueva aparece después de las secciones existentes

### Requirement: Cobertura del mapa del módulo

La página renderizada en `/docs/nomenclaturas/` SHALL explicar los grupos de nomencladores —básicos, logísticos, comerciales y de apoyo— indicando ruta y rol requerido, y SHALL mostrar más de una captura real del módulo. SHALL explicar también que las rutas raíz de cada nomenclador redirigen a `list`.

#### Scenario: Se consulta el inicio de Nomenclaturas

- **WHEN** un usuario abre `http://localhost:3003/docs/nomenclaturas/`
- **THEN** encuentra descritos los grupos de nomencladores y sus rutas
- **AND** la página muestra al menos dos capturas reales de Nomenclaturas

### Requirement: Cobertura de filtros y columnas de nomencladores

La documentación SHALL enumerar en cada listado los filtros disponibles, con su control, valores y efecto, y SHALL declarar explícitamente cuando un listado carezca de panel de filtros, indicando entonces la búsqueda y la recarga genéricas. Las columnas SHALL reflejar los campos realmente visibles en la tabla.

#### Scenario: Se documenta un listado de nomencladores

- **WHEN** se consulta una página de listado de Nomenclaturas
- **THEN** se describen sus filtros y columnas con control y efecto
- **AND** se indica si existe o no el panel **Filtrar**

### Requirement: Operaciones de listado y roles

La documentación SHALL incluir alta, edición y eliminación cuando existan, con botón, rol y ruta, y SHALL indicar que la edición usa `id` por parámetro de consulta en los nomencladores que comparten formulario. SHALL identificar las restricciones observables por rol o por estado del registro.

#### Scenario: Se gestiona un nomenclador desde el listado

- **WHEN** un usuario consulta un listado del módulo
- **THEN** la documentación identifica cada acción, su rol y su ruta
- **AND** distingue la edición por parámetro de consulta de otros mecanismos de edición

### Requirement: Formularios compartidos y validaciones

La documentación SHALL detallar los campos de los formularios compartidos por `add` y `edit`, indicando obligatoriedad, control y validaciones vigentes, y SHALL distinguir el formulario genérico de los formularios con campos propios. SHALL explicar el efecto de los botones de guardado y regreso.

#### Scenario: Se crea o edita un nomenclador

- **WHEN** se documenta un formulario del módulo
- **THEN** cada campo aparece con su obligatoriedad y control
- **AND** se indican las validaciones y los mensajes que el usuario puede ver

### Requirement: Cobertura de excepciones y solo lectura

La documentación SHALL señalar explícitamente los nomencladores que exponen únicamente listado, las rutas que redirigen a `list` y cualquier diferencia observable respecto del patrón genérico de gestión, sin afirmar operaciones que el frontend no ofrece.

#### Scenario: Se documenta una excepción del módulo

- **WHEN** un nomenclador no ofrece formulario de alta o edición
- **THEN** la documentación lo declara expresamente
- **AND** no atribuye al componente acciones que no están presentes

### Requirement: Captura real por sección añadida

Cada sección nueva SHALL incluir al menos una captura real del backoffice Agrimpex referenciada desde `static/img/screenshots/`. Cuando una sección contenga varias vistas relevantes —mapa del módulo o listados con panel de filtros— SHALL incluir más de una captura. Ninguna sección nueva SHALL usar el placeholder compartido.

#### Scenario: Se incorpora una sección con capturas

- **WHEN** se añade una sección nueva a una página de Nomenclaturas
- **THEN** la sección referencia al menos una imagen PNG existente
- **AND** la leyenda identifica la imagen como captura del backoffice

### Requirement: Verificación sin cambiar el inventario

La validación `npm run check:docs` SHALL comprobar que las secciones nuevas referencian imágenes existentes y que el inventario conserva sus 113 `docId`. El enriquecimiento SHALL NOT añadir ni eliminar pantallas del inventario ni modificar las páginas `unlisted` de migración.

#### Scenario: Se valida el manual enriquecido

- **WHEN** se ejecuta `npm run check:docs` después del enriquecimiento
- **THEN** la validación termina sin errores
- **AND** el número de pantallas del inventario sigue siendo 113
