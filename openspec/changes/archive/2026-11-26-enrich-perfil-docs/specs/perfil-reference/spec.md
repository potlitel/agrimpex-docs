# Spec Delta

## Purpose

Define la cobertura documental del módulo Perfil —detalles del usuario, preferencias de visualización y cambio de contraseña— con capturas reales por sección y sin alterar lo ya publicado.

## ADDED Requirements

### Requirement: Enriquecimiento estrictamente aditivo

Las páginas existentes de Perfil SHALL conservar sin cambios su front matter, encabezado H1 y secciones Propósito, Acceso, Captura, Campos y Acciones. Toda sección nueva SHALL añadirse sin reescribir, reordenar ni eliminar contenido previamente publicado.

#### Scenario: Se enriquece una página vigente

- **WHEN** se añade una sección de preferencias a una página de Perfil ya publicada
- **THEN** el contenido anterior permanece byte a byte idéntico
- **AND** la sección nueva aparece después de las secciones existentes

### Requirement: Cobertura del mapa del módulo

La página renderizada en `/docs/perfil/` SHALL explicar los tres destinos del módulo —detalles, preferencias y cambio de contraseña— indicando ruta y rol requerido, y SHALL mostrar más de una captura real. SHALL explicar también que `/profile` redirige a `/profile/overview`.

#### Scenario: Se consulta el inicio de Perfil

- **WHEN** un usuario abre `http://localhost:3003/docs/perfil/`
- **THEN** encuentra descritos los destinos del módulo y sus rutas
- **AND** la página muestra al menos dos capturas reales de Perfil

### Requirement: Cobertura de la vista de perfil y widgets por rol

La documentación SHALL describir la información de identidad del usuario autenticado y SHALL indicar qué widgets adicionales —especialización, permisos de calidad y embudo logístico— se muestran solo para determinados roles, sin afirmar que todos los usuarios los ven.

#### Scenario: Se abre la vista de detalles del perfil

- **WHEN** un usuario abre `/profile/overview`
- **THEN** la documentación describe los datos de identidad visibles
- **AND** identifica los widgets condicionados por el rol del usuario

### Requirement: Detalle de los widgets comunes del perfil

La documentación SHALL explicar los seis widgets comunes de `/profile/overview` —Indicadores personales, Actividad y trazabilidad, Gráfico de contribución, Notificaciones, Configuración efectiva y Documentos y sellos— con sus campos, filtros, enlaces y estados.

#### Scenario: Se consultan los widgets comunes

- **WHEN** un usuario abre la sección `Vista de perfil y widgets` del manual
- **THEN** cada uno de los seis widgets queda descrito con sus etiquetas reales
- **AND** se aclaran sus estados vacíos y de carga sin inventar datos

### Requirement: Cobertura de preferencias de visualización

La documentación SHALL enumerar los tres grupos de ajustes —preferencias de visualización, control de importaciones y prioridades aduaneras— con sus seis opciones, su control y efecto observable, y SHALL explicar que cada selección se guarda de inmediato con su propia mutación y el aviso «Preferencia guardada», sin botones **Guardar** ni **Cancelar**.

#### Scenario: Se ajustan las preferencias

- **WHEN** un usuario abre `/profile/preferences`
- **THEN** se enumeran los grupos de ajustes, sus opciones y su efecto
- **AND** se explica que no hay cambios pendientes ni descarte y que cada elección persiste de inmediato

### Requirement: Cobertura del cambio de contraseña

La documentación SHALL detallar los campos de contraseña actual y nueva, las cinco reglas de complejidad, el panel de fortaleza y el error «La contraseña actual no coincide.», indicando que cualquier usuario autenticado puede abrir la vista y sin afirmar que una contraseña concreta será aceptada. SHALL aclarar que no existe campo de confirmación, que el envío se hace con **Aceptar** y que **Cancelar** restablece el formulario.

#### Scenario: Se cambia la contraseña

- **WHEN** un usuario abre `/profile/change-password`
- **THEN** la documentación describe los campos reales y las reglas que deben cumplirse
- **AND** explica el resultado de enviar con **Aceptar** sin exponer una clave real

### Requirement: Captura real por sección añadida

Cada sección nueva SHALL incluir al menos una captura real del backoffice Agrimpex referenciada desde `static/img/screenshots/`. Cuando una sección contenga varias vistas relevantes —mapa del módulo o preferencias con varios grupos— SHALL incluir más de una captura. Ninguna sección nueva SHALL usar el placeholder compartido.

#### Scenario: Se incorpora una sección con capturas

- **WHEN** se añade una sección nueva a una página de Perfil
- **THEN** la sección referencia al menos una imagen PNG existente
- **AND** la leyenda identifica la imagen como captura del backoffice

### Requirement: Verificación sin cambiar el inventario

La validación `npm run check:docs` SHALL comprobar que las secciones nuevas referencian imágenes existentes y que el inventario conserva sus 113 `docId`. El enriquecimiento SHALL NOT añadir ni eliminar pantallas del inventario.

#### Scenario: Se valida el manual enriquecido

- **WHEN** se ejecuta `npm run check:docs` después del enriquecimiento
- **THEN** la validación termina sin errores
- **AND** el número de pantallas del inventario sigue siendo 113
