---
sidebar_position: 2
---

# Recuperación de Contraseña

## Descripción

El módulo de autenticación incluye flujos de recuperación de contraseña para que los usuarios puedan reestablecer sus credenciales cuando las olvidan. Incluye:

- **Olvidé Contraseña:** solicitud de restablecimiento mediante el correo electrónico registrado
- **Código de Verificación:** validación del código de restablecimiento enviado por correo
- **Restablecer Contraseña:** ingreso de una nueva contraseña

## Acceso

1. Desde la página de login (`/auth/login`), ingresa tu correo electrónico y haz clic en **"Olvidé Contraseña"**
2. O directamente a la ruta: `/auth/login/recovery`

## Flujo de Recuperación

1. Ingresa el correo electrónico asociado a la cuenta en el formulario de solicitud
2. Se envía un código de verificación al correo registrado
3. Ingresa el código en el formulario de validación
4. Define una nueva contraseña y confírmala
5. El sistema confirma el restablecimiento con un mensaje de éxito

## Validación del Código de Verificación

El código enviado al correo tiene una vigencia limitada y debe ser ingresado antes de expirar. Si el código es inválido o expirado, el sistema muestra un mensaje indicando que se debe solicitar un nuevo código.

## Restablecimiento de Contraseña

Tras validar el código, se muestra un formulario para ingresar la nueva contraseña. La contraseña nueva debe cumplir los requisitos de complejidad del sistema (según lo indicado en el formulario).

:::warning NOTA DE SEGURIDAD
El código de restablecimiento es temporal. La contraseña debe ser cambiada de inmediato y nunca compartida con otros usuarios.
:::
