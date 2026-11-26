# Spec Delta

## MODIFIED Requirements

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

### Requirement: Verificación sin cambiar el inventario

La validación `npm run check:docs` SHALL comprobar que las secciones nuevas referencian imágenes existentes, que el formulario referencia veintitrés capturas de pestañas —las dos originales de Notificaciones más doce nuevas— y que el inventario conserva sus 113 `docId`. El enriquecimiento SHALL NOT añadir ni eliminar pantallas del inventario.

#### Scenario: Se valida el manual enriquecido

- **WHEN** se ejecuta `npm run check:docs` después del enriquecimiento
- **THEN** la validación termina sin errores
- **AND** el número de pantallas del inventario sigue siendo 113 y las veintitrés capturas de pestañas existen

## ADDED Requirements

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
