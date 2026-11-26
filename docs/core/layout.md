---
sidebar_position: 7
source_route: /dashboard
source_component: LayoutPage
status: vigente
---

# Plantilla de navegación

## Propósito

Describe la plantilla de menú lateral y barra superior del backoffice.

## Acceso

- **Menú:** Acerca del Sistema → Plantilla de navegación
- **Ruta directa:** `/dashboard`
- **Componente:** `LayoutPage`

## Captura

![layout — captura real](/img/screenshots/core/layout.png)

*Captura tomada del backoffice Agrimpex.*

## Campos

| Campo | Descripción | Obligatorio |
|-------|-------------|-------------|
| Menú lateral | Navegación principal por módulos. | No |
| Barra superior | Acciones globales del usuario. | No |

## Acciones

| Acción | Botón | Rol | Ruta |
|--------|-------|-----|------|
| Ver ejemplo | Acceder | Todo usuario autenticado | `/dashboard` |


## Estructura de la plantilla

`LayoutPage` es el contenedor de las rutas autenticadas. Según `ThemeService.isSidebarTemplate` elige entre la plantilla de barra lateral —la que se observa por defecto— y la de barra superior; en ambos casos el contenido se compone de un `<router-outlet>` precedido por el breadcrumb y seguido por el pie.

| Zona | Elementos observados | Función |
|------|----------------------|---------|
| Barra superior | Botón de apertura del menú («Open sidebar»), logotipo y nombre «Agrimpex Web Importaciones», buscador «Buscar secciones, acciones…» con atajo `Ctrl` + `K`, selector de tema (color y modo), campana de notificaciones y menú del usuario. | Accesos globales y cambio de apariencia. |
| Menú lateral | `app-aside-menu`, con «Dashboard» y los grupos «ADMINISTRACIÓN», «Grupo», «Usuario», «Nomencladores», «Importaciones», «Reportes», «Calidad», «Seguridad» y «Configuración». | Navegación principal por módulos. |
| Área de contenido | Breadcrumb «Inicio › Dashboard» y el componente enrutado, por ejemplo los paneles de `/dashboard`. | Muestra la pantalla activa sin recargar la plantilla. |
| Menú del usuario | Nombre, correo y distintivo de rol; «Mi perfil» (`Alt` + `P`), «Idioma», «Preferencias» (`Alt` + `S`) y «Salir» (`Alt` + `Q`). | Acciones globales de la sesión. |
| Pie | «Acerca de», «Política de privacidad», «Términos de uso» y «Contacto». | Enlaces informativos.

La visibilidad de las entradas del menú depende del rol: la directiva `isGranted` oculta los destinos declarados con `roles` —por ejemplo «Administración» y «Seguridad» para `ROLE_ADMIN`, y el enlace a `/verification` del menú— sin eliminar la ruta en sí. El ancho de la ventana cambia el estado del menú lateral entre `open`, `condensed` y `closed`, y el selector de tema permite los modos automático, claro y oscuro y varios colores de acento. Estos elementos forman parte de la plantilla común y no son páginas independientes.

![Plantilla de navegación — barra superior y menú lateral en `/dashboard`](/img/screenshots/core/layout-dashboard.png)

*Captura tomada del backoffice Agrimpex: `/dashboard` desplazado hasta el panel de sincronización Recomplus.*
