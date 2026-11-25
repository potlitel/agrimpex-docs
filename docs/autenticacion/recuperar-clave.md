---
sidebar_position: 3
source_route: /auth/forgot-password
source_component: ForgotPasswordComponent
status: vigente
---

# Recuperar contraseña

## Propósito

Envía un código de restablecimiento al correo electrónico indicado.

## Acceso

- **Menú:** Autenticación → Recuperar contraseña
- **Ruta directa:** `/auth/forgot-password`
- **Componente:** `ForgotPasswordComponent`

## Captura

![recuperar-clave — captura real](/img/screenshots/autenticacion/recuperar-clave.png)

*Captura tomada del backoffice Agrimpex.*

## Campos

| Campo | Descripción | Obligatorio |
|-------|-------------|-------------|
| Correo electrónico | Correo registrado en el sistema. | Sí |

## Acciones

| Acción | Botón | Rol | Ruta |
|--------|-------|-----|------|
| Enviar código | Enviar | Público (sin autenticación) | `/auth/forgot-password` |
| Continuar a nueva clave | Continuar | Público (sin autenticación) | `/auth/new-password` |
| Cancelar | Cancelar | Público (sin autenticación) | `/auth/login` |


## Formulario de recuperación

La pantalla `/auth/forgot-password` muestra el título «¿Olvidó su contraseña?» y el subtítulo «Ingrese su correo electrónico para restablecer su contraseña.». Su único campo es **Correo electrónico**, un control de texto de tipo email sin autocompletado, obligatorio y con validación de formato de correo. En el entorno local se precarga el correo por defecto; en los demás entornos el campo empieza vacío.

Debajo del campo se sitúan dos botones: **Enviar**, que solicita el código y permanece en estado de carga mientras espera la respuesta, y **Cancelar**, que vuelve a `/auth/login`. La flecha de la cabecera ofrece la misma vuelta al inicio de sesión.

![Autenticación — formulario de recuperación vacío](/img/screenshots/autenticacion/recuperar-clave-recuperacion-formulario.png)

*Captura tomada del backoffice Agrimpex: formulario de `/auth/forgot-password` con el correo vacío.*


## Envío del código

Cuando la solicitud se acepta, el formulario se sustituye por una alerta informativa con el texto «Si el correo está registrado, recibirá un código para restablecer la contraseña.». El aviso es condicional: no confirma que el mensaje haya sido entregado ni revela si la dirección existe en el sistema. La pantalla sigue siendo pública y no inicia ninguna sesión.

A continuación aparece el botón **Continuar**, que abre `/auth/new-password` para introducir el código. Antes del envío, el formulario ofrecía **Cancelar** y la flecha de la cabecera para regresar a `/auth/login`; desde la nueva contraseña, la flecha vuelve a esta pantalla de recuperación.

![Autenticación — aviso condicional y botón Continuar tras el envío](/img/screenshots/autenticacion/recuperar-clave-recuperacion-codigo-enviado.png)

*Captura tomada del backoffice Agrimpex: estado posterior al envío en `/auth/forgot-password`.*
