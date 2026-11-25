# Spec Delta

## Purpose

Define la cobertura documental del módulo Calidad: filtros, formularios, operaciones CRUD y dashboard de decisión, con capturas reales por sección y sin alterar lo ya publicado.

## ADDED Requirements

### Requirement: Enriquecimiento estrictamente aditivo

Las páginas existentes de Calidad SHALL conservar sin cambios su front matter, encabezado H1 y secciones Propósito, Acceso, Captura, Campos y Acciones. Toda sección nueva SHALL añadirse sin reescribir, reordenar ni eliminar contenido previamente publicado.

#### Scenario: Se enriquece una página vigente

- **WHEN** se añade una sección de filtros a una página de Calidad ya publicada
- **THEN** el contenido anterior permanece byte a byte idéntico
- **AND** la sección nueva aparece después de las secciones existentes

### Requirement: Cobertura de filtros de listado

Cada listado del módulo Calidad SHALL documentar la totalidad de sus filtros disponibles, indicando el control utilizado, los valores admitidos y el efecto de cada uno sobre los resultados. Los filtros de estado, año y rango de fechas SHALL describirse explícitamente cuando existan.

#### Scenario: Se documenta un listado con filtros múltiples

- **WHEN** un listado ofrezca campos de texto, selectores, pills de estado y selector de año
- **THEN** la sección de filtros enumera cada uno con su control y valores
- **AND** se explica el efecto de los pills de estado y del selector de año

### Requirement: Cobertura de formularios y validaciones

Cada formulario SHALL documentar todos sus campos, pestañas, tipo de control, obligatoriedad y validaciones vigentes. Las rutas `add` y `edit/:id` SHALL compartir una única sección de formulario cuando utilicen el mismo componente.

#### Scenario: Se documenta un formulario con pestañas

- **WHEN** un formulario distribuya sus campos en varias pestañas
- **THEN** la sección nombra cada pestaña y detalla los campos que contiene
- **AND** indica qué campos son obligatorios y qué validaciones se aplican

### Requirement: Operaciones CRUD y de documento

Cada entidad SHALL documentar las operaciones de alta, edición, eliminación, exportación, vista previa y descarga de documento que estén disponibles, con el botón, el rol autorizado y la ruta de origen correspondientes.

#### Scenario: Se documentan las acciones de una entidad

- **WHEN** una entidad permita crear, editar, eliminar y exportar registros
- **THEN** la tabla de acciones incluye cada operación con botón, rol y ruta
- **AND** las operaciones de documento se documentan cuando el componente las exponga

### Requirement: Captura real por sección añadida

Cada sección nueva SHALL incluir al menos una captura real del backoffice Agrimpex, referenciada desde `static/img/screenshots/`. Cuando una sección contenga varias vistas relevantes, SHALL incluir más de una captura. Ninguna sección nueva SHALL usar el placeholder compartido.

#### Scenario: Se añade una sección de formulario

- **WHEN** se incorpora una sección que documenta un formulario con pestañas
- **THEN** la sección referencia al menos una imagen PNG existente
- **AND** la leyenda identifica la imagen como captura del backoffice

### Requirement: Dashboard de decisión con múltiples capturas

La página renderizada en `/docs/calidad/` SHALL explicar los indicadores, gráficos y tablas del panel de permisos de importación y SHALL mostrar más de una captura real del dashboard. La explicación SHALL cubrir KPIs, series temporales, distribución por estado, mapas de calor y resumen por entidad.

#### Scenario: Se consulta el panel de Calidad

- **WHEN** un usuario abre `http://localhost:3003/docs/calidad/`
- **THEN** encuentra descritos los KPIs, las tendencias, la distribución por estado y los resúmenes por entidad
- **AND** la página muestra al menos dos capturas reales del dashboard

### Requirement: Verificación sin cambiar el inventario

La validación `npm run check:docs` SHALL comprobar que las secciones nuevas referencian imágenes existentes y que el inventario de pantallas conserva sus 113 `docId` originales. El enriquecimiento SHALL NOT añadir ni eliminar pantallas del inventario.

#### Scenario: Se valida el manual enriquecido

- **WHEN** se ejecuta `npm run check:docs` después del enriquecimiento
- **THEN** la validación termina sin errores
- **AND** el número de pantallas del inventario sigue siendo 113
