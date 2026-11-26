---
sidebar_position: 8
source_route: /dashboard
source_component: TemplateSidebarComponent
status: vigente
---

# Componentes de plantilla

## Propósito

Referencia técnica de los componentes de plantilla reutilizados en el backoffice.

## Acceso

- **Menú:** Acerca del Sistema → Componentes de plantilla
- **Ruta directa:** `/dashboard`
- **Componente:** `TemplateSidebarComponent`

## Captura

![template — captura real](/img/screenshots/core/template.png)

*Captura tomada del backoffice Agrimpex.*

## Campos

| Campo | Descripción | Obligatorio |
|-------|-------------|-------------|
| Componente | Componente compartido de la plantilla. | No |

## Acciones

| Acción | Botón | Rol | Ruta |
|--------|-------|-----|------|
| Ver ejemplo | Acceder | Todo usuario autenticado | `/dashboard` |


## Estructura de la plantilla

`TemplateSidebarComponent` y `TemplateTopbarComponent` son las dos carcasas reutilizables de `LayoutPage`. La variante de barra lateral —la activa por defecto— ensambla `app-aside-menu`, `app-breadcrumb`, el `<router-outlet>`, `app-footer`, el buscador de la paleta de comandos, `app-theme-selector`, `app-notification-bell` y `app-user-menu`. La variante de barra superior sustituye el menú lateral por `app-top-menu` y mantiene el resto de componentes. Ninguno de estos componentes constituye una página navegable: aparecen repetidos en cada ruta autenticada.

| Componente | Común a ambas variantes | Varía según |
|------------|-------------------------|-------------|
| `app-aside-menu` / `app-top-menu` | No: cada plantilla usa uno. | Roles declarados en `NAVIGATION_CONFIG` a través de la directiva `isGranted`. |
| `app-breadcrumb` | Sí | Ruta activa (`Inicio › Dashboard`, `Inicio › Acerca de`, etc.). |
| `app-footer` | Sí | Entrada `showLinks`: las páginas autenticadas muestran los cuatro enlaces legales; la verificación pública los oculta. |
| `app-theme-selector` | Sí | Color y modo (`ThemeService`): automático, claro u oscuro. |
| `app-notification-bell` y `app-user-menu` | Sí | Datos de la sesión y rol del usuario. |
| Paleta de comandos (`Buscar secciones, acciones…`) | Sí | Atajo `Ctrl` + `K` y catálogo de destinos permitidos. |

Los componentes comunes no cambian de naturaleza entre módulos; lo que varía es su visibilidad y contenido. La directiva `isGranted` oculta entradas del menú reservadas a `ROLE_ADMIN` —como «Administración» o el acceso a `/verification`—, mientras que el selector de tema modifica colores y modo sin alterar la estructura. El menú lateral adopta además los estados `open`, `condensed` y `closed` según el ancho de la ventana. Por eso `intro`, `core/layout` y esta página comparten `/dashboard`: las tres se apoyan en la misma plantilla y se diferencian por el panel visible y el desplazamiento de la captura, no por ser páginas distintas del backoffice.

![Componentes de plantilla — paneles documentales en `/dashboard`](/img/screenshots/core/template-componentes.png)

*Captura tomada del backoffice Agrimpex: `/dashboard` desplazado hasta «Gestión documental» y «Alertas de contenedores».*
