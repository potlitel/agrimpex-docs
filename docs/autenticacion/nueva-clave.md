---
sidebar_position: 4
source_route: /auth/new-password
source_component: ResetCodeComponent
status: vigente
---

# Nueva contraseña

## Propósito

Valida el código recibido por correo y guarda una contraseña nueva.

## Acceso

- **Menú:** Autenticación → Nueva contraseña
- **Ruta directa:** `/auth/new-password`
- **Componente:** `ResetCodeComponent`

## Captura

![nueva-clave — captura real](/img/screenshots/autenticacion/nueva-clave.png)

*Captura tomada del backoffice Agrimpex.*

## Campos

| Campo | Descripción | Obligatorio |
|-------|-------------|-------------|
| Código | Código de verificación recibido por correo. | Sí |
| Nueva contraseña | Contraseña nueva de la cuenta. | Sí |
| Confirmar contraseña | Repetición de la contraseña nueva. | Sí |

## Acciones

| Acción | Botón | Rol | Ruta |
|--------|-------|-----|------|
| Guardar contraseña | Aceptar | Público (sin autenticación) | `/auth/new-password` |
| Volver | Volver | Público (sin autenticación) | `/auth/forgot-password` |
