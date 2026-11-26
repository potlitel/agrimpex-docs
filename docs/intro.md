---
sidebar_position: 1
source_route: /dashboard
source_component: DashboardPage
status: vigente
---

# Introducción

## Propósito

Presentación general del manual y del ciclo operativo cubierto por el backoffice.

## Acceso

- **Menú:** Acerca del Sistema → Introducción
- **Ruta directa:** `/dashboard`
- **Componente:** `DashboardPage`

## Captura

![intro — captura real](/img/screenshots/intro.png)

*Captura tomada del backoffice Agrimpex.*

## Campos

| Campo | Descripción | Obligatorio |
|-------|-------------|-------------|
| Módulos | Nueve áreas funcionales del manual. | No |
| Pantallas | Listados, formularios y dashboards documentados. | No |

## Acciones

| Acción | Botón | Rol | Ruta |
|--------|-------|-----|------|
| Comenzar | Acceder | Todo usuario autenticado | `/docs/autenticacion/index` |


## Mapa del manual

El manual documenta 113 pantallas del backoffice Agrimpex repartidas en diez categorías del menú lateral. Nueve son áreas funcionales del ciclo operativo —Autenticación (4 pantallas), Administración (6), Logística (33), Nomenclaturas (34), Seguridad (5), Reportes (8), Calidad (7), Configuración (4) y Perfil (3)— y la décima, Acerca del Sistema (9), reúne las páginas transversales a las que pertenece esta introducción.

El recorrido de lectura sugerido comienza en el acceso y avanza hacia los módulos operativos, dejando las referencias transversales para el final:

| Orden | Área | Aportación al recorrido |
|-------|------|-------------------------|
| 1 | Autenticación | Inicio de sesión, recuperación de clave y nueva contraseña; puerta de entrada al sistema. |
| 2 | Perfil | Resultado de la sesión: indicadores, preferencias de visualización y cambio de clave. |
| 3 | Administración | Usuarios, grupos y asistente IA; base de identidades y permisos. |
| 4 | Nomenclaturas | Catálogos de apoyo (moneda, cliente, producto, puertos, aerolíneas y otros) que alimentan los formularios operativos. |
| 5 | Logística | Importación, inventario de contenedores, entregas, inbonds, desaduanes y reportes operativos. |
| 6 | Calidad | Permisos de importación y preliberaciones CENASA, fitosanitario e INHEM. |
| 7 | Seguridad | Trazabilidad, verificación de documentos y notificaciones. |
| 8 | Reportes | Consultas por fecha, estado y especialista, monitorización y exportaciones. |
| 9 | Configuración | Parámetros generales, secuencias, preferencias de notificación y sincronización Recomplus. |

Después de ese recorrido, Acerca del Sistema cierra el manual con la plantilla de navegación, los componentes compartidos, las páginas informativas del pie, los estados de error y la verificación pública. `intro`, `core/layout` y `core/template` comparten la ruta `/dashboard`: las capturas de esta sección se distinguen por desplazamiento vertical y muestran distintos paneles del mismo escritorio.

![Introducción — indicadores de inventario en el mapa del manual](/img/screenshots/intro-mapa-modulos.png)

*Captura tomada del backoffice Agrimpex: `/dashboard`, indicadores de inventario en terminal.*

![Introducción — paneles documentales en el mapa del manual](/img/screenshots/intro-mapa-recorrido.png)

*Captura tomada del backoffice Agrimpex: `/dashboard`, salud documental y gestión documental.*
