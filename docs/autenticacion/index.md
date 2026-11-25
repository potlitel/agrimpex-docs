---
sidebar_position: 1
source_route: /auth
source_component: AuthPage
status: vigente
---

# Panel de acceso

## Propósito

Contenedor de las pantallas públicas de acceso y recuperación de clave.

## Acceso

- **Menú:** Autenticación → Panel de acceso
- **Ruta directa:** `/auth`
- **Componente:** `AuthPage`

## Captura

![index — captura real](/img/screenshots/autenticacion/index.png)

*Captura tomada del backoffice Agrimpex.*

## Campos

| Campo | Descripción | Obligatorio |
|-------|-------------|-------------|
| Correo electrónico | Dato de acceso al sistema. | No |
| Contraseña | Dato de acceso al sistema. | No |

## Acciones

| Acción | Botón | Rol | Ruta |
|--------|-------|-----|------|
| Acceder | Acceder | Público (sin autenticación) | `/auth/login` |
| Recuperar clave | Continuar | Público (sin autenticación) | `/auth/forgot-password` |


## Recorrido del acceso

El módulo se organiza alrededor de un contenedor público (`/auth`) que envuelve tres formularios. El enrutador declara las rutas `login`, `forgot-password` y `new-password`; tanto la ruta vacía como cualquier dirección no reconocida redirigen a `/auth/login`. Las cuatro vistas son públicas: no piden sesión ni rol para mostrarse.

| Vista | Ruta pública | Función | Transición siguiente |
|-------|--------------|---------|----------------------|
| Contenedor de acceso | `/auth` | Presenta el marco común: ilustración lateral, área del formulario y pie con enlace legal. | Redirige a `/auth/login`. |
| Inicio de sesión | `/auth/login` | Valida correo y contraseña y abre la sesión. | «Recuperala aquí» → `/auth/forgot-password`; con sesión válida, al inicio. |
| Recuperar contraseña | `/auth/forgot-password` | Solicita el código de restablecimiento. | **Continuar** → `/auth/new-password`; **Cancelar** → `/auth/login`. |
| Nueva contraseña | `/auth/new-password` | Valida el código y guarda la clave nueva. | Tras el éxito → `/auth/login`; la flecha → `/auth/forgot-password`. |

![Autenticación — formulario de inicio de sesión del recorrido público](/img/screenshots/autenticacion/index-recorrido-login.png)

*Captura tomada del backoffice Agrimpex: `/auth/login` con los campos vacíos.*

![Autenticación — solicitud del código de recuperación](/img/screenshots/autenticacion/index-recorrido-recuperacion.png)

*Captura tomada del backoffice Agrimpex: `/auth/forgot-password` con el correo vacío.*

![Autenticación — entrada del código y nueva contraseña](/img/screenshots/autenticacion/index-recorrido-nueva-clave.png)

*Captura tomada del backoffice Agrimpex: `/auth/new-password`.*


## Contenedor y modal legal

Todas las vistas de acceso comparten el mismo contenedor, accesible sin autenticación. En pantallas grandes, el lado izquierdo muestra una ilustración de contenedores y buques; el lado derecho aloja el formulario activo, con el logotipo de Agrimpex en su cabecera, y termina en un pie de página con el año y el enlace **Términos de uso**. El pie omite el resto de enlaces del backoffice para no ofrecer navegación autenticada desde una pantalla pública.

El enlace **Términos de uso** del pie abre un modal con el título «Términos de uso», un resumen de las condiciones y una lista numerada de cláusulas (aceptación de los términos, acceso y credenciales, uso permitido, licencia, confidencialidad, propiedad intelectual, entre otras). El contenido se puede desplazar dentro del modal, que ocupa como máximo el 80 % de la altura de la ventana.

El modal se cierra con el botón **Cerrar**, con la «X» de la cabecera, con la tecla Escape o pulsando fuera de la tarjeta. Consultarlo no exige iniciar sesión ni cambia el estado de la sesión: es una ventana informativa disponible en cualquiera de las tres pantallas del recorrido.

![Autenticación — modal de términos legales abierto desde el pie](/img/screenshots/autenticacion/index-modal-legal.png)

*Captura tomada del backoffice Agrimpex: modal legal abierto sobre la pantalla pública de inicio de sesión.*
