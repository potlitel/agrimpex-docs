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
