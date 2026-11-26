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

La sección del formulario SHALL dedicar una subsección `###` a cada una de las diez pestañas, con explicación extendida de controles, efecto y guardado, y SHALL referenciar al menos una captura real por pestaña. La pestaña Notificaciones SHALL dividirse en subsecciones `####` para «Mis Preferencias» y «Configuración de Roles», conservar sus dos capturas superiores y añadir doce capturas reales por bloque. El prefijo publicado del documento SHALL permanecer idéntico.

#### Scenario: Se consulta la guía de pestañas

- **WHEN** un usuario abre la sección `Pestañas y preferencias` de `/docs/configuracion/formulario`
- **THEN** encuentra diez subsecciones con etiqueta, rol, controles, efecto, guardado y leyenda de captura
- **AND** la sección referencia veintitrés PNG existentes, dos de ellas para las vistas superiores de Notificaciones y doce para sus bloques internos

#### Scenario: Se consulta la guía de preferencias

- **WHEN** un usuario abre la subsección de Notificaciones de `/docs/configuracion/formulario`
- **THEN** encuentra apartados separados para «Mis Preferencias» y «Configuración de Roles»
- **AND** cada bloque largo incluye una captura real del estado reproducible correspondiente

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

La validación `npm run check:docs` SHALL comprobar que las secciones nuevas referencian imágenes existentes, que el formulario referencia veintitrés capturas de pestañas —las dos originales de Notificaciones más doce nuevas— y que el inventario conserva sus 113 `docId`. El enriquecimiento SHALL NOT añadir ni eliminar pantallas del inventario.

#### Scenario: Se valida el manual enriquecido

- **WHEN** se ejecuta `npm run check:docs` después del enriquecimiento
- **THEN** la validación termina sin errores
- **AND** el número de pantallas del inventario sigue siendo 113 y las veintitrés capturas de pestañas existen

### Requirement: Cobertura detallada de Mis Preferencias

La documentación SHALL explicar la tarjeta **Preferencias de notificaciones**, la barra «Vistas de notificaciones» y la subvista «Mis Preferencias» con su ayuda, su rejilla de dos columnas y los diez tipos de notificación con código, etiqueta y descripción. SHALL enumerar los cuatro motivos de bloqueo con su precedencia y los estados de carga, error y vacío.

#### Scenario: Se revisan los tipos disponibles

- **WHEN** un usuario abre `/settings/form?tab=notifications` y selecciona «Mis Preferencias»
- **THEN** la documentación enumera los diez tipos con su código interno, etiqueta visible y descripción
- **AND** explica que cada fila es una casilla local hasta que se pulsa «Guardar preferencias»

#### Scenario: Se revisan los bloqueos

- **WHEN** un tipo no es applicable, está deshabilitado por el administrador o es obligatorio para el rol
- **THEN** la documentación indica el motivo exacto y el orden en que se muestra
- **AND** distingue las filas atenuadas de las obligatorias, que permanecen activas

### Requirement: Cobertura detallada de la configuración global de notificaciones

La documentación SHALL describir «Configuración de Roles» en sus cuatro fieldsets, en orden: **Tipos de notificación**, **Roles destinatarios por tipo**, **Umbrales de alerta** y **Tipos obligatorios**. SHALL listar los ocho roles, sus nombres visibles, los roles por defecto por tipo, el efecto de «Seleccionar todos», las cuatro opciones de umbral con sus mínimos y valores iniciales, y las reglas de prellenado de tipos obligatorios.

#### Scenario: Se revisan los destinatarios por tipo

- **WHEN** un administrador abre «Configuración de Roles»
- **THEN** la documentación muestra los ocho roles y el rol por defecto de cada tipo, incluido «Parte diario procesado» sin rol por defecto
- **AND** explica que dejar la selección vacía vuelve al rol por defecto y que «Seleccionar todos» puede revertirse

#### Scenario: Se revisan umbrales y obligatorias

- **WHEN** un administrador consulta los fieldsets inferiores
- **THEN** la documentación detalla los cuatro campos numéricos, sus mínimos, valores iniciales y qué evento controlan
- **AND** explica el distintivo «Obligatoria», el prellenado de roles y los dos avisos contextuales

### Requirement: Distinción entre los guardados de preferencias

La documentación SHALL distinguir los dos botones denominados «Guardar preferencias». El de «Mis Preferencias» SHALL describirse como el guardado de overrides booleanos del usuario actual, sin umbrales, roles ni sondeo. El de «Configuración de Roles» SHALL describirse como el guardado de la configuración global, con los tipos activos, umbrales, destinatarios y obligatorias, sin recargar la respuesta después de guardar.

#### Scenario: Guarda un usuario sin rol de administrador

- **WHEN** un usuario pulsa «Guardar preferencias» en «Mis Preferencias»
- **THEN** la documentación explica que solo se persisten los tipos desbloqueados para ese usuario
- **AND** identifica el mensaje de éxito y el mensaje de error esperados

#### Scenario: Guarda un administrador

- **WHEN** un administrador pulsa «Guardar preferencias» en «Configuración de Roles»
- **THEN** la documentación explica que se persiste la configuración global y que los tipos obligatorios ignoran el valor del usuario
- **AND** aclara que este guardado no es la matriz de permisos de importación ni el guardado individual

### Requirement: Observaciones de efecto real de los parámetros

La documentación SHALL señalar que «Frecuencia de sondeo (segundos)» y «Enviar también por correo» se envían en la configuración global pero no se aplican en el comportamiento vigente, y que la etiqueta «Retraso de extracción (> 72h)» permanece fija aunque el umbral sea configurable. SHALL explicar la conversión de días a horas del umbral de extracción y el mínimo de diez segundos del sondeo.

#### Scenario: Se consulta el efecto de los umbrales

- **WHEN** un administrador ajusta «Días de retraso para alerta de extracción»
- **THEN** la documentación indica que el valor se convierte a horas para la alerta
- **AND** advierte que el texto «> 72h» de la etiqueta no cambia con el valor configurado

#### Scenario: Se consulta el sondeo y el correo

- **WHEN** un administrador modifica la frecuencia de sondeo o marca «Enviar también por correo»
- **THEN** la documentación explica que el campo se envía pero hoy no altera la campana ni el envío
- **AND** no presenta esos controles como si hubieran surtido efecto
