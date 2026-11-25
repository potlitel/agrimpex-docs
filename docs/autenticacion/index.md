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
