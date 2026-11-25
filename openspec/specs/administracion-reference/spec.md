# administracion-reference Specification

## Purpose

Define la cobertura documental del módulo Administración: usuarios, grupos, asistente IA y mapa del módulo, con capturas reales por sección y sin alterar lo ya publicado.

## Requirements

### Requirement: Enriquecimiento estrictamente aditivo

Las páginas existentes de Administración SHALL conservar sin cambios su front matter, encabezado H1 y secciones Propósito, Acceso, Captura, Campos y Acciones. Toda sección nueva SHALL añadirse sin reescribir, reordenar ni eliminar contenido previamente publicado. Las páginas de migración `unlisted` SHALL permanecer intactas.

#### Scenario: Se enriquece una página vigente

- **WHEN** se añade una sección de filtros a una página de Administración ya publicada
- **THEN** el contenido anterior permanece byte a byte idéntico
- **AND** la sección nueva aparece después de las secciones existentes

### Requirement: Cobertura del mapa del módulo

La página renderizada en `/docs/administracion/` SHALL explicar los tres destinos del módulo —listado y formulario de usuarios, listado y formulario de grupos, y asistente IA— indicando ruta y rol requerido, y SHALL mostrar más de una captura real del módulo. SHALL explicar también que la ruta `/management/group` redirige al listado de grupos.

#### Scenario: Se consulta el inicio de Administración

- **WHEN** un usuario abre `http://localhost:3003/docs/administracion/`
- **THEN** encuentra descritos los destinos del módulo y sus rutas
- **AND** la página muestra al menos dos capturas reales de Administración

### Requirement: Cobertura de filtros y columnas de listados

La documentación SHALL enumerar todos los filtros disponibles en cada listado, con su control, valores y efecto, y SHALL declarar explícitamente cuando un listado no ofrezca panel de filtros. Cuando exista un panel de filtros, SHALL describir los controles de texto, selección, rango de fechas e interruptor según corresponda.

#### Scenario: Se documentan los filtros de usuarios y grupos

- **WHEN** se consulten las páginas de listado de usuarios y grupos
- **THEN** se describan para usuarios Género, Rol, rango de Último acceso y Activo
- **AND** se indique que el listado de grupos no dispone de panel de filtros, solo de búsqueda y recarga del listado

### Requirement: Operaciones de listado y restricciones

La documentación SHALL incluir alta, edición, eliminación cuando exista, activación o desactivación y otras acciones disponibles, con botón, rol y ruta, además de las restricciones observables: el usuario actual y las cuentas de administrador no se pueden desactivar desde el listado, y el grupo por defecto del sistema no se puede editar, desactivar ni eliminar.

#### Scenario: Se gestionan usuarios y grupos desde el listado

- **WHEN** un administrador intenta cambiar el estado de una cuenta o del grupo por defecto
- **THEN** la documentación identifica la restricción y el motivo visible
- **WHEN** se documenta la edición
- **THEN** se distingue la ruta de usuarios con `id` por parámetro de consulta de la ruta de grupos con `edit/:id`

### Requirement: Formulario de usuarios y validaciones

La documentación SHALL detallar todos los campos del formulario compartido por alta y edición, indicando obligatoriedad, tipo de control y validaciones vigentes: formato y unicidad del correo, unicidad y longitud del carné de identidad, complejidad de la contraseña, contraseña autogenerada y selección de cargo, área, grupos, roles y género. SHALL explicar el aviso de validación del carné cuando se muestra.

#### Scenario: Se crea o edita un usuario

- **WHEN** se documenta el formulario de usuarios
- **THEN** cada campo aparece con su obligatoriedad y control
- **AND** se explican los mensajes de unicidad, formato y complejidad que el usuario puede ver

### Requirement: Formulario de grupos y roles

La documentación SHALL detallar los campos del formulario compartido por alta y edición de grupos —nombre, activo y roles— y SHALL explicar que los roles se seleccionan de los disponibles en el sistema y que el grupo por defecto queda fuera de la edición.

#### Scenario: Se crea o edita un grupo

- **WHEN** se documenta el formulario de grupos
- **THEN** se enumeran los tres campos con su obligatoriedad y control
- **AND** se describe la restricción del grupo por defecto

### Requirement: Cobertura del asistente IA

La documentación SHALL explicar el uso del panel de chat: estado vacío y sugerencias, campo de consulta, botón de envío, visualización de mensajes y resultados, historial y limpieza de la conversación. SHALL indicar el rol requerido y la ruta pública del panel.

#### Scenario: Se consulta el asistente

- **WHEN** un usuario autenticado abre `/ai-assistant`
- **THEN** la documentación describe cómo enviar una consulta y dónde se muestra la respuesta
- **AND** describe cómo consultar el historial y vaciar la conversación

### Requirement: Captura real por sección añadida

Cada sección nueva SHALL incluir al menos una captura real del backoffice Agrimpex referenciada desde `static/img/screenshots/`. Cuando una sección contenga varias vistas relevantes —mapa del módulo, panel de filtros o asistente vacío y con respuesta— SHALL incluir más de una captura. Ninguna sección nueva SHALL usar el placeholder compartido.

#### Scenario: Se documenta el asistente IA

- **WHEN** se incorpora la sección de uso del asistente
- **THEN** la sección referencia al menos una imagen PNG existente
- **AND** la leyenda identifica la imagen como captura del backoffice

### Requirement: Verificación sin cambiar el inventario

La validación `npm run check:docs` SHALL comprobar que las secciones nuevas referencian imágenes existentes y que el inventario de pantallas conserva sus 113 `docId` originales. El enriquecimiento SHALL NOT añadir ni eliminar pantallas del inventario ni modificar las páginas `unlisted` de migración.

#### Scenario: Se valida el manual enriquecido

- **WHEN** se ejecuta `npm run check:docs` después del enriquecimiento
- **THEN** la validación termina sin errores
- **AND** el número de pantallas del inventario sigue siendo 113
