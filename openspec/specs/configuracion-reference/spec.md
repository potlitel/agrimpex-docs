# configuracion-reference Specification

## Purpose

Define la cobertura documental del módulo Configuración —diez pestañas del formulario, parámetros generales, preferencias de notificación, sincronización Recomplus y origen de parte— con capturas reales por sección y sin alterar lo ya publicado.

## Requirements

### Requirement: Enriquecimiento estrictamente aditivo

Las páginas existentes de Configuración SHALL conservar sin cambios su front matter, encabezado H1 y secciones Propósito, Acceso, Captura, Campos y Acciones. Toda sección nueva SHALL añadirse sin reescribir, reordenar ni eliminar contenido previamente publicado.

#### Scenario: Se enriquece una página vigente

- **WHEN** se añade una sección de filtros a una página de Configuración ya publicada
- **THEN** el contenido anterior permanece byte a byte idéntico
- **AND** la sección nueva aparece después de las secciones existentes

### Requirement: Cobertura del mapa del módulo

La página renderizada en `/docs/configuracion/` SHALL explicar los tres destinos del módulo —formulario general y preferencias, sincronización Recomplus y origen de parte— indicando ruta y rol requerido, y SHALL mostrar más de una captura real. SHALL explicar también que `/settings` redirige a `/settings/form` y que las otras dos rutas exigen administrador.

#### Scenario: Se consulta el inicio de Configuración

- **WHEN** un usuario abre `http://localhost:3003/docs/configuracion/`
- **THEN** encuentra descritos los destinos del módulo y sus rutas
- **AND** la página muestra al menos dos capturas reales de Configuración

### Requirement: Cobertura del formulario y las preferencias

La documentación SHALL explicar las diez pestañas de `/settings/form` en orden (`general`, `sequences`, `operations`, `recomplus`, `import_permits`, `model_signatures`, `permission_matrix`, `verification`, `notifications`, `report_parameters`), con etiqueta visible, deep link `?tab=` cuando aplica, rol, controles y guardado. SHALL distinguir «Mis Preferencias» de «Configuración de Roles» y la pestaña Recomplus de la ruta `/settings/recomplus-sync`.

#### Scenario: Se abre el formulario de configuración

- **WHEN** un usuario abre `/settings/form` o `/settings/form?tab=notifications`
- **THEN** la documentación enumera las diez pestañas y los parámetros visibles según su rol
- **AND** identifica qué ajustes son propios del usuario, cuáles son globales y cuáles exigen administrador

### Requirement: Explicación extendida y captura por pestaña

La sección del formulario SHALL dedicar una subsección `###` a cada una de las diez pestañas, con explicación extendida de controles, efecto y guardado, y SHALL referenciar al menos una captura real por pestaña. Notificaciones SHALL mostrar dos capturas, una por subvista, y el prefijo publicado del documento SHALL permanecer idéntico.

#### Scenario: Se consulta la guía de pestañas

- **WHEN** un usuario abre la sección `Pestañas y preferencias` de `/docs/configuracion/formulario`
- **THEN** encuentra diez subsecciones con etiqueta, rol, controles, efecto, guardado y leyenda de captura
- **AND** la sección referencia once PNG existentes, dos de ellas para las subvistas de Notificaciones

### Requirement: Cobertura de filtros y detalle de sincronización

La documentación SHALL enumerar los filtros del historial de Recomplus —recurso, estado de sincronización y usuario que lo disparó— con su control y efecto, describir las columnas y explicar la apertura del panel de detalle, indicando el rol de administrador que exige la ruta.

#### Scenario: Se consulta el historial de Recomplus

- **WHEN** un administrador abre `/settings/recomplus-sync`
- **THEN** se enumeran los filtros y las columnas del historial
- **AND** se explica cómo se abre el detalle de un registro

### Requirement: Cobertura de las secciones del origen de parte

La documentación SHALL enumerar las ocho secciones de configuración del parte diario —conexión, filtrado, adjuntos, límites, frecuencia, notificaciones, logging y reintentos— con sus opciones y efecto, y SHALL explicar la prueba de conexión y el guardado, indicando el rol de administrador que exige la ruta.

#### Scenario: Se configura el origen del parte

- **WHEN** un administrador abre `/settings/origen-parte`
- **THEN** se enumeran las secciones y sus opciones configurables
- **AND** se explica el resultado de la prueba de conexión y del guardado

### Requirement: Captura real por sección añadida

Cada sección nueva SHALL incluir al menos una captura real del backoffice Agrimpex referenciada desde `static/img/screenshots/`. Cuando una sección contenga varias vistas relevantes —mapa del módulo o formulario con pestañas— SHALL incluir más de una captura. Ninguna sección nueva SHALL usar el placeholder compartido.

#### Scenario: Se incorpora una sección con capturas

- **WHEN** se añade una sección nueva a una página de Configuración
- **THEN** la sección referencia al menos una imagen PNG existente
- **AND** la leyenda identifica la imagen como captura del backoffice

### Requirement: Verificación sin cambiar el inventario

La validación `npm run check:docs` SHALL comprobar que las secciones nuevas referencian imágenes existentes, que el formulario referencia once capturas de pestañas y que el inventario conserva sus 113 `docId`. El enriquecimiento SHALL NOT añadir ni eliminar pantallas del inventario.

#### Scenario: Se valida el manual enriquecido

- **WHEN** se ejecuta `npm run check:docs` después del enriquecimiento
- **THEN** la validación termina sin errores
- **AND** el número de pantallas del inventario sigue siendo 113 y las once capturas de pestañas existen
