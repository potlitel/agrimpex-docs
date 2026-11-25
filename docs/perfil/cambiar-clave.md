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
