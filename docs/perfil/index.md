---
sidebar_position: 1
source_route: /profile
source_component: UserProfilePage
status: vigente
---

# Perfil

## Propósito

Muestra los datos del usuario autenticado y enlaza sus preferencias y clave.

## Acceso

- **Menú:** Perfil → Perfil
- **Ruta directa:** `/profile`
- **Componente:** `UserProfilePage`

## Captura

![index — captura real](/img/screenshots/perfil/index.png)

*Captura tomada del backoffice Agrimpex.*

## Campos

| Campo | Descripción | Obligatorio |
|-------|-------------|-------------|
| Nombre | Nombre del usuario. | No |
| Usuario | Nombre de usuario. | No |
| Email | Correo electrónico. | No |
| Rol | Rol asignado. | No |
| Último acceso | Fecha del último ingreso. | No |

## Acciones

| Acción | Botón | Rol | Ruta |
|--------|-------|-----|------|
| Ir a preferencias | Acceder | Todo usuario autenticado | `/profile/preferences` |
| Cambiar contraseña | Acceder | Todo usuario autenticado | `/profile/change-password` |
