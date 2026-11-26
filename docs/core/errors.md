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


## Códigos y recuperación

El backoffice usa dos estados de error fuera del layout autenticado. `/error/404` muestra el encabezado «Página no encontrada» y el mensaje «¡La página que buscas no se encontró! Revisa si la dirección es la correcta o contacta con los administradores si crees que es un error.». `/error/500` muestra «Error del sistema» y el mensaje «¡Algo salió mal! Por favor, inténtelo de nuevo más tarde.», para fallos del servidor.

| Ruta | Estado | Mensaje observado |
|------|--------|-------------------|
| `/error` | Redirección | La ruta vacía redirige a `/error/404`. |
| `/error/404` | 404 | «Página no encontrada» — explica que la dirección puede ser incorrecta. |
| `/error/500` | 500 | «Error del sistema» — pide reintentar más tarde. |
| `/error/<otro>` y rutas no encontradas | Redirección | La ruta comodín del contenedor y la ruta comodín global llevan a `/error/404`. |

La recuperación se hace con el botón «Ir a la página de inicio» del contenedor de errores, que materializa la acción **Regresar** documentada más arriba: con una sesión válida vuelve al inicio (`/dashboard`); sin sesión, cierra la sesión pendiente. Ambas pantallas son públicas y no exigen autenticación para visualizarse.

![Errores — estado 404](/img/screenshots/core/errors-404.png)

*Captura tomada del backoffice Agrimpex: `/error/404`, mensaje de página no encontrada.*

![Errores — estado 500](/img/screenshots/core/errors-500.png)

*Captura tomada del backoffice Agrimpex: `/error/500`, mensaje de error del sistema.*
