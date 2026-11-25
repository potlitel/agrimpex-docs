---
sidebar_position: 4
source_route: /auth/new-password
source_component: ResetCodeComponent
status: vigente
---

# Nueva contraseña

## Propósito

Valida el código recibido por correo y guarda una contraseña nueva.

## Acceso

- **Menú:** Autenticación → Nueva contraseña
- **Ruta directa:** `/auth/new-password`
- **Componente:** `ResetCodeComponent`

## Captura

![nueva-clave — captura real](/img/screenshots/autenticacion/nueva-clave.png)

*Captura tomada del backoffice Agrimpex.*

## Campos

| Campo | Descripción | Obligatorio |
|-------|-------------|-------------|
| Código | Código de verificación recibido por correo. | Sí |
| Nueva contraseña | Contraseña nueva de la cuenta. | Sí |
| Confirmar contraseña | Repetición de la contraseña nueva. | Sí |

## Acciones

| Acción | Botón | Rol | Ruta |
|--------|-------|-----|------|
| Guardar contraseña | Aceptar | Público (sin autenticación) | `/auth/new-password` |
| Volver | Volver | Público (sin autenticación) | `/auth/forgot-password` |


## Formulario de nueva contraseña

La vista `/auth/new-password` pide el código recibido y la clave nueva. El código se introduce en cuatro casillas de un solo dígito: solo aceptan números, avanzan el foco automáticamente al completarse y las cuatro son obligatorias. Bajo el título «Crea tu nueva contraseña» se sitúan dos campos de contraseña:

| Campo | Contenido | Obligatorio | Validación |
|-------|-----------|-------------|------------|
| Nueva contraseña | Clave que sustituirá a la anterior. | Sí | Al menos 10 caracteres, con mayúscula, minúscula, número y carácter especial. |
| Confirmar contraseña | Repetición de la clave nueva. | Sí | Misma complejidad y coincidencia exacta con la clave nueva. |

Los mensajes observables son «Campo obligatorio.», «La contraseña debe contener al menos una letra mayúscula, una letra minúscula, un número, un carácter especial y no menos de 10 caracteres.» y «Las contraseñas no coinciden.». El botón **Aceptar** envía el formulario y entra en estado de carga mientras espera la respuesta; la flecha de la cabecera regresa a `/auth/forgot-password`.

![Autenticación — formulario de nueva contraseña con las cuatro casillas del código](/img/screenshots/autenticacion/nueva-clave-nueva-clave-formulario.png)

*Captura tomada del backoffice Agrimpex: formulario de `/auth/new-password`.*


## Validación del código y errores

Antes de enviar se comprueba que las cuatro casillas del código estén completas: si falta alguna, aparece «Debe insertar el código de 4 dígitos enviado a su email». Si las contraseñas no cumplen la complejidad o no coinciden, el formulario no envía la petición y muestra los mensajes de validación indicados. El código se compone con los cuatro dígitos y la contraseña se cifra antes de enviarse, de modo que la clave no viaja en claro.

Si el servicio rechaza el código, la alerta muestra «El código enviado no es correcto o ha expirado.». Otras respuestas pueden indicar «Debe insertar el código de 4 dígitos enviado a su email.» o, ante un error general, «Lo sentimos, parece que se han detectado algunos errores. Vuelve a intentarlo.».

Cuando el cambio se acepta, aparece una confirmación de éxito y la aplicación vuelve a `/auth/login` para que el usuario acceda con la nueva contraseña.

![Autenticación — error de código expirado en nueva contraseña](/img/screenshots/autenticacion/nueva-clave-nueva-clave-error-codigo.png)

*Captura tomada del backoffice Agrimpex: estado de error de `/auth/new-password` con el aviso «El código enviado no es correcto o ha expirado.».*
