# Spec Delta

## Purpose

Define la cobertura documental del módulo Seguridad —trazabilidad, verificación documental y notificaciones— con capturas reales por sección y sin alterar lo ya publicado.

## ADDED Requirements

### Requirement: Enriquecimiento estrictamente aditivo

Las páginas existentes de Seguridad SHALL conservar sin cambios su front matter, encabezado H1 y secciones Propósito, Acceso, Captura, Campos y Acciones. Toda sección nueva SHALL añadirse sin reescribir, reordenar ni eliminar contenido previamente publicado. La página de migración `unlisted` SHALL permanecer intacta.

#### Scenario: Se enriquece una página vigente

- **WHEN** se añade una sección de filtros a una página de Seguridad ya publicada
- **THEN** el contenido anterior permanece byte a byte idéntico
- **AND** la sección nueva aparece después de las secciones existentes

### Requirement: Cobertura del mapa del módulo

La página renderizada en `/docs/seguridad/` SHALL explicar los tres destinos del módulo —listado y dashboard de trazabilidad, verificación de documentos y detalle de notificaciones— indicando ruta y rol requerido, y SHALL mostrar más de una captura real. SHALL explicar también que `/security/trace` redirige al listado y que la ruta de notificaciones se documenta con valores concretos de ejemplo.

#### Scenario: Se consulta el inicio de Seguridad

- **WHEN** un usuario abre `http://localhost:3003/docs/seguridad/`
- **THEN** encuentra descritos los destinos del módulo y sus rutas
- **AND** la página muestra al menos dos capturas reales de Seguridad

### Requirement: Cobertura de filtros y columnas de trazabilidad

La documentación SHALL enumerar todos los filtros del panel de trazabilidad, con su control, valores y efecto: usuario, rol, rango de fechas, módulo, acción, clase e identificador de entidad y correlación. SHALL describir las columnas visibles y la búsqueda rápida sin afirmar resultados garantizados.

#### Scenario: Se documentan los filtros de trazabilidad

- **WHEN** se consulta la página de listado de trazabilidad
- **THEN** se enumeran los filtros con su control y efecto
- **AND** se describen las columnas y el mecanismo de búsqueda

### Requirement: Operaciones de trazabilidad y diferencias

La documentación SHALL incluir la consulta del listado, la recarga y la apertura del diálogo de comparación de cambios, indicando botón, rol y condición, sin atribuir a la tabla operaciones de escritura que el componente no ofrece.

#### Scenario: Se consulta un evento de trazabilidad

- **WHEN** un usuario abre un registro del listado de trazabilidad
- **THEN** la documentación identifica las acciones disponibles y su rol
- **AND** explica qué muestra el diálogo de diferencias y cuándo se abre

### Requirement: Cobertura del dashboard de trazabilidad

La documentación SHALL explicar los indicadores agregados del dashboard de trazabilidad y su significado —totales, estados y responsables— sin prometer valores concretos ni suponer series que el componente no muestra.

#### Scenario: Se consulta el dashboard de trazabilidad

- **WHEN** se documenta el panel agregado de trazabilidad
- **THEN** se describen los indicadores visibles y su interpretación
- **AND** no se afirman cifras dependientes de los datos del entorno

### Requirement: Cobertura de la verificación documental

La documentación SHALL explicar la verificación interna por código CSV —entrada, búsqueda, resultado y acciones de copiar, descargar, imprimir y contactar— y SHALL distinguirla de la ruta pública `/verify/:code`, indicando en cada caso el rol requerido y el origen del código.

#### Scenario: Se verifica un documento desde el backoffice

- **WHEN** un usuario introduce un código CSV en `/verification`
- **THEN** la documentación describe cómo se muestra el resultado y sus acciones
- **AND** aclara que la verificación pública no exige autenticación

### Requirement: Cobertura del detalle de notificaciones

La documentación SHALL explicar el detalle de una notificación —severidad, estado de lectura, fecha relativa, tipo y mensaje— y los accesos a la traza asociada y a la vista completa, usando una ruta concreta con `entityType` y `entityId` de ejemplo en lugar de un patrón con parámetros.

#### Scenario: Se abre el detalle de una notificación

- **WHEN** un usuario abre una notificación desde su ruta concreta de ejemplo
- **THEN** la documentación describe la información mostrada y sus acciones
- **AND** explica cómo se accede a la traza y a la vista completa

### Requirement: Captura real por sección añadida

Cada sección nueva SHALL incluir al menos una captura real del backoffice Agrimpex referenciada desde `static/img/screenshots/`. Cuando una sección contenga varias vistas relevantes —mapa del módulo o panel de filtros— SHALL incluir más de una captura. Ninguna sección nueva SHALL usar el placeholder compartido y ninguna ruta del manifiesto SHALL contener parámetros `:` o `$`.

#### Scenario: Se incorpora una sección con capturas

- **WHEN** se añade una sección nueva a una página de Seguridad
- **THEN** la sección referencia al menos una imagen PNG existente
- **AND** la leyenda identifica la imagen como captura del backoffice

### Requirement: Verificación sin cambiar el inventario

La validación `npm run check:docs` SHALL comprobar que las secciones nuevas referencian imágenes existentes y que el inventario conserva sus 113 `docId`. El enriquecimiento SHALL NOT añadir ni eliminar pantallas del inventario ni modificar la página `unlisted` de migración.

#### Scenario: Se valida el manual enriquecido

- **WHEN** se ejecuta `npm run check:docs` después del enriquecimiento
- **THEN** la validación termina sin errores
- **AND** el número de pantallas del inventario sigue siendo 113
