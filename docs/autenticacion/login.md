---
sidebar_position: 2
source_route: /auth/login
source_component: LoginComponent
status: vigente
---

# Inicio de sesión

## Propósito

Permite ingresar al backoffice con un correo electrónico y una contraseña vigentes.

## Acceso

- **Menú:** Autenticación → Inicio de sesión
- **Ruta directa:** `/auth/login`
- **Componente:** `LoginComponent`

## Captura

![login — captura real](/img/screenshots/autenticacion/login.png)

*Captura tomada del backoffice Agrimpex.*

## Campos

| Campo | Descripción | Obligatorio |
|-------|-------------|-------------|
| Correo electrónico | Correo registrado en el sistema. | Sí |
| Contraseña | Contraseña de la cuenta. | Sí |

## Acciones

| Acción | Botón | Rol | Ruta |
|--------|-------|-----|------|
| Iniciar sesión | Iniciar | Público (sin autenticación) | `/auth/login` |
| Recuperar clave | Recuperala aquí | Público (sin autenticación) | `/auth/forgot-password` |


## Formulario de inicio de sesión

El formulario aparece bajo el título «Iniciar sesión en su cuenta» y usa dos controles de texto:

| Campo | Control | Obligatorio | Validación |
|-------|---------|-------------|------------|
| Correo electrónico | Campo de texto de tipo email, sin autocompletado. | Sí | Debe estar presente y tener formato de correo válido. |
| Contraseña | Campo de texto de tipo contraseña, sin autocompletado. | Sí | Debe estar presente. |

En el entorno local se precargan las credenciales por defecto del despliegue para agilizar las pruebas; en los entornos de desarrollo, preproducción y producción ambos campos se muestran vacíos. El envío se realiza con el botón **Iniciar**, que entra en estado de carga mientras la petición está en curso y lo abandona al terminar, tanto en acierto como en error. Al iniciar un nuevo intento se limpia cualquier aviso anterior.

Bajo el botón, el texto «¿Olvidaste tu contraseña?» incluye el enlace «Recuperala aquí» hacia `/auth/forgot-password`.

![Autenticación — formulario de inicio de sesión vacío](/img/screenshots/autenticacion/login-login-formulario-vacio.png)

*Captura tomada del backoffice Agrimpex: formulario vacío de `/auth/login`.*


## Sesión, errores y redirecciones

Si las credenciales no son válidas, la petición no devuelve una sesión y el formulario muestra el aviso «Credenciales inválidas.» en una alerta de error. Cuando la autenticación se concede pero el rol del usuario tiene denegado el acceso, el formulario muestra el aviso de error y cierra la sesión recién iniciada, de modo que no queda un token activo en el navegador.

El destino posterior al acceso se decide antes de enviar el formulario: el parámetro `redirectUrl` de la consulta se emplea como ruta de regreso siempre que no apunte a una ruta de autenticación; si no se indica, el destino es el inicio (`/`). Si al abrir `/auth/login` ya existe una sesión activa, la página salta directamente a ese destino sin mostrar el formulario. Al cerrar sesión desde una pantalla protegida, el backoffice incorpora la ruta actual como `redirectUrl`, de forma que el siguiente acceso regresa al punto de partida.

![Autenticación — aviso de credenciales inválidas](/img/screenshots/autenticacion/login-login-error-credenciales.png)

*Captura tomada del backoffice Agrimpex: estado de error de `/auth/login` con el aviso «Credenciales inválidas.».*
