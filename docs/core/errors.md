---
sidebar_position: 6
source_route: /error/404
source_component: Error404Component
status: vigente
---

# Páginas de error

## Propósito

Explica las páginas de error 404 y 500 del backoffice.

## Acceso

- **Menú:** Acerca del Sistema → Páginas de error
- **Ruta directa:** `/error/404`
- **Componente:** `Error404Component`

## Captura

![errors — captura real](/img/screenshots/core/errors.png)

*Captura tomada del backoffice Agrimpex.*

## Campos

| Campo | Descripción | Obligatorio |
|-------|-------------|-------------|
| Código | 404 o 500. | No |
| Mensaje | Detalle del error. | No |

## Acciones

| Acción | Botón | Rol | Ruta |
|--------|-------|-----|------|
| Regresar | Regresar | Público (sin autenticación) | `/dashboard` |
