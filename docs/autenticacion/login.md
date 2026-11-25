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
