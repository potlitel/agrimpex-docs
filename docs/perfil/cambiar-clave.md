---
sidebar_position: 3
source_route: /profile/change-password
source_component: ChangePasswordComponent
status: vigente
---

# Cambiar contraseña

## Propósito

Actualiza la contraseña del usuario autenticado.

## Acceso

- **Menú:** Perfil → Cambiar contraseña
- **Ruta directa:** `/profile/change-password`
- **Componente:** `ChangePasswordComponent`

## Captura

![cambiar-clave — captura real](/img/screenshots/perfil/cambiar-clave.png)

*Captura tomada del backoffice Agrimpex.*

## Campos

| Campo | Descripción | Obligatorio |
|-------|-------------|-------------|
| Contraseña anterior | Contraseña vigente. | Sí |
| Nueva contraseña | Contraseña nueva. | Sí |
| Confirmar contraseña | Repetición de la contraseña nueva. | Sí |
| Reglas de seguridad | Al menos 10 caracteres, minúscula, mayúscula, número y carácter especial. | Sí |

## Acciones

| Acción | Botón | Rol | Ruta |
|--------|-------|-----|------|
| Guardar | Guardar | Todo usuario autenticado | `/profile/change-password` |
| Cancelar | Cancelar | Todo usuario autenticado | `/profile` |

## Cambio de contraseña

La vista `/profile/change-password` está disponible para cualquier usuario autenticado; no exige un rol adicional. La tabla **Campos** anterior menciona «Contraseña anterior» y «Confirmar contraseña», pero la pantalla real solo pide **Contraseña actual \*** y **Contraseña nueva \***: no hay campo de confirmación. De igual forma, la tabla **Acciones** anterior habla de **Guardar**; en la vista el envío se hace con **Aceptar** y **Cancelar** restablece el formulario sin salir de la página.

Ambos campos son obligatorios y admiten mostrar u ocultar el valor. El panel **Fortaleza de la contraseña** evalúa la contraseña nueva con cinco reglas y clasifica el resultado como **Débil**, **Media** o **Fuerte**:

- Al menos 10 caracteres.
- Una letra minúscula.
- Una letra mayúscula.
- Un número.
- Un carácter especial (- ! @ # $ % & * .).

El botón **Aceptar** permanece deshabilitado mientras el formulario sea inválido. Al enviarlo, la aplicación cifra la contraseña actual y la nueva antes de llamar al repositorio de autenticación; si la respuesta es correcta, muestra un aviso de éxito y registra la fecha y hora en la tarjeta **Último cambio** de ese dispositivo. Si la API indica `INCORRECT_OLD_PASSWORD`, el error aparece debajo de **Contraseña actual** con el texto «La contraseña actual no coincide.»; cualquier otro error se informa con un aviso general. **Cancelar** limpia ambos campos y vuelve a dejar el indicador en **Débil**.

La columna lateral muestra las tarjetas **Consejos de seguridad** —usar una contraseña única, combinar tipos de caracteres y evitar datos personales— y **Último cambio**, que indica «Sin registro» hasta que se complete un cambio en este dispositivo. Las capturas siguientes muestran el formulario vacío: no se introdujo ni envió ninguna contraseña real.

![Cambiar contraseña — formulario vacío con los dos campos](/img/screenshots/perfil/cambiar-clave-formulario.png)

*Captura tomada del backoffice Agrimpex: formulario sin rellenar en `/profile/change-password`.*

![Cambiar contraseña — panel de fortaleza y botones](/img/screenshots/perfil/cambiar-clave-reglas.png)

*Captura tomada del backoffice Agrimpex: reglas de complejidad, Aceptar y Cancelar.*
