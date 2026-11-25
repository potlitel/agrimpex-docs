# Spec Delta

## Purpose

Define la cobertura documental del módulo Autenticación: formularios, validaciones, estados de error, sesión, recuperación de clave y recorrido público, con capturas reales por sección y sin alterar lo ya publicado.

## ADDED Requirements

### Requirement: Enriquecimiento estrictamente aditivo

Las páginas existentes de Autenticación SHALL conservar sin cambios su front matter, encabezado H1 y secciones Propósito, Acceso, Captura, Campos y Acciones. Toda sección nueva SHALL añadirse sin reescribir, reordenar ni eliminar contenido previamente publicado.

#### Scenario: Se enriquece una página vigente

- **WHEN** se añade una sección de validaciones a una página de Autenticación ya publicada
- **THEN** el contenido anterior permanece byte a byte idéntico
- **AND** la sección nueva aparece después de las secciones existentes

### Requirement: Cobertura del recorrido público

La página renderizada en `/docs/autenticacion/` SHALL explicar el recorrido completo entre inicio de sesión, recuperación de clave, nueva contraseña y consulta de los términos legales, y SHALL mostrar más de una captura real del módulo. La explicación SHALL identificar cada pantalla por su ruta pública y por el rol requerido, que es público en todos los casos.

#### Scenario: Se consulta el panel de acceso

- **WHEN** un usuario abre `http://localhost:3003/docs/autenticacion/`
- **THEN** encuentra descritas las cuatro vistas del recorrido y sus transiciones
- **AND** la página muestra al menos dos capturas reales del módulo Autenticación

### Requirement: Cobertura del formulario de inicio de sesión

La documentación del inicio de sesión SHALL enumerar todos sus campos, tipo de control, obligatoriedad y validaciones vigentes, además del estado de carga, las credenciales precargadas exclusivamente del entorno local y el enlace de recuperación.

#### Scenario: Se documenta el acceso

- **WHEN** se consulte la página `autenticacion/login`
- **THEN** se indique que correo y contraseña son obligatorios y que el correo debe tener formato válido
- **AND** se indique que las credenciales por defecto solo aparecen en el entorno local
- **AND** se describan el botón de inicio, su estado de carga y el enlace «Recuperala aquí»

### Requirement: Sesión, errores y redirecciones

La documentación SHALL explicar los resultados observables del inicio de sesión: mensaje de credenciales inválidas, denegación por rol, redirección a la ruta solicitada mediante el parámetro `redirectUrl` y salto al inicio cuando ya existe una sesión activa. Las rutas SHALL ser las declaradas en el enrutador público del módulo.

#### Scenario: Fallo o redirección tras iniciar sesión

- **WHEN** las credenciales no son válidas o el rol del usuario tiene denegado el acceso
- **THEN** la documentación describe el aviso mostrado y, si procede, el cierre de sesión
- **WHEN** la sesión ya está activa o la visita llegó con `redirectUrl`
- **THEN** la documentación indica la ruta de destino resultante

### Requirement: Cobertura de la recuperación de clave

La documentación de recuperación SHALL describir el campo de correo y su validación, las acciones **Enviar** y **Cancelar**, el mensaje informativo posterior al envío y el botón **Continuar** hacia la nueva contraseña, sin afirmar que el correo fue entregado.

#### Scenario: Se solicita un código de restablecimiento

- **WHEN** se documenta el envío del código desde `/auth/forgot-password`
- **THEN** se indican la validación del correo y el mensaje «Si el correo está registrado, recibirá un código…»
- **AND** se describen la continuación a `/auth/new-password` y el regreso a `/auth/login`

### Requirement: Cobertura de nueva contraseña y código OTP

La documentación de nueva contraseña SHALL describir el código de cuatro posiciones numéricas con avance automático del foco, los requisitos de complejidad de la contraseña, la confirmación entre contraseñas, los mensajes de error por código inválido o expirado y por formatos no válidos, la confirmación de éxito y el retorno a `/auth/login`.

#### Scenario: Se restablece la contraseña

- **WHEN** un usuario introduce un código incompleto, una contraseña débil o una confirmación distinta
- **THEN** la documentación identifica cada validación y su mensaje observable
- **WHEN** el código y las contraseñas son válidos
- **THEN** la documentación describe la confirmación de éxito y la navegación al inicio de sesión

### Requirement: Cobertura del contenedor compartido y del modal legal

La documentación del contenedor SHALL explicar la distribución pública de la página —ilustración, área del formulario y pie de página— y el modal de términos accesible desde el pie, incluida su apertura, cierre y botón de cierre. El contenedor SHALL documentarse como accesible sin autenticación.

#### Scenario: Se consultan los términos legales

- **WHEN** un usuario abre el enlace legal del pie en una pantalla de autenticación
- **THEN** la documentación describe el modal con los términos y la acción para cerrarlo
- **AND** no exige ningún rol ni sesión para consultarlo

### Requirement: Captura real por sección añadida

Cada sección nueva SHALL incluir al menos una captura real del backoffice Agrimpex referenciada desde `static/img/screenshots/`. Cuando una sección contenga estados relevantes distintos —formulario vacío, error, código enviado o modal legal— SHALL incluir más de una captura. Ninguna sección nueva SHALL usar el placeholder compartido.

#### Scenario: Se documenta un estado de error

- **WHEN** se incorpora una sección que describe credenciales inválidas o un código expirado
- **THEN** la sección referencia al menos una imagen PNG existente
- **AND** la leyenda identifica la imagen como captura del backoffice

### Requirement: Verificación sin cambiar el inventario

La validación `npm run check:docs` SHALL comprobar que las secciones nuevas referencian imágenes existentes y que el inventario de pantallas conserva sus 113 `docId` originales. El enriquecimiento SHALL NOT añadir ni eliminar pantallas del inventario.

#### Scenario: Se valida el manual enriquecido

- **WHEN** se ejecuta `npm run check:docs` después del enriquecimiento
- **THEN** la validación termina sin errores
- **AND** el número de pantallas del inventario sigue siendo 113
