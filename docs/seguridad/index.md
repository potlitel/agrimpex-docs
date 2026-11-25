---
sidebar_position: 1
source_route: /security/trace
source_component: TracePage
status: vigente
---

# Seguridad

## Propósito

Centro de control de trazabilidad, verificación documental y notificaciones.

## Acceso

- **Menú:** Seguridad → Seguridad
- **Ruta directa:** `/security/trace`
- **Componente:** `TracePage`

## Captura

![index — captura real](/img/screenshots/seguridad/index.png)

*Captura tomada del backoffice Agrimpex.*

## Campos

| Campo | Descripción | Obligatorio |
|-------|-------------|-------------|
| Contenedor | Identificador del contenedor. | No |
| Estado | Estado del evento. | No |

## Acciones

| Acción | Botón | Rol | Ruta |
|--------|-------|-----|------|
| Ir a trazabilidad | Acceder | Administrador o Especialista | `/security/trace/list` |
| Ir a verificación | Acceder | Todo usuario autenticado | `/verification` |
| Ver notificaciones | Acceder | Todo usuario autenticado | `/logistic/notification/:entityType/:entityId` |

## Mapa del módulo

Seguridad no es una pantalla única: `/security/trace` es un contenedor con un `router-outlet` y dos destinos hijos. Los roles se toman de la ACL del segmento raíz (`trace`) y de los guards de las rutas declaradas.

| Destino | Ruta | Rol requerido | Qué muestra |
|---------|------|---------------|-------------|
| Trazabilidad — listado | `/security/trace/list` | Administrador o Especialista | Eventos auditables con panel **Filtrar**, búsqueda rápida y diálogo de diferencias. |
| Trazabilidad — dashboard | `/security/trace/dashboard` | Administrador o Especialista | Indicadores agregados: totales por día, por módulo y usuarios con más trazas, con exportación CSV. |
| Verificación de documentos | `/verification` | Todo usuario autenticado | Versión interna del backoffice: entrada del código CSV, resultado y sus acciones. La ruta pública `/verify/:code` no exige sesión. |
| Detalle de notificaciones | `/logistic/notification/BL/BL-1` | Todo usuario autenticado | Resumen de una notificación, su traza asociada y el enlace a la vista completa de la entidad. |

La ruta `/security/trace` **redirige al listado**: el enrutador declara `'' → list` y la ruta comodín también conduce a `list`, de modo que abrir el contenedor sin sufijo muestra `/security/trace/list`. Para las notificaciones se documenta una ruta concreta de ejemplo, `/logistic/notification/BL/BL-1` (`entityType=BL`, `entityId=BL-1`), en lugar del patrón parametrizado `/logistic/notification/:entityType/:entityId`: el manifiesto de capturas exige rutas sin `:` ni `$`.

![Trazabilidad — listado del backoffice Agrimpex](/img/screenshots/seguridad/index-mapa-trazabilidad.png)

*Captura tomada del backoffice Agrimpex con el listado de trazas.*

![Verificación — versión interna del backoffice Agrimpex](/img/screenshots/seguridad/index-mapa-verificacion.png)

*Captura tomada del backoffice Agrimpex con la verificación de documentos.*

![Notificaciones — detalle de una notificación en el backoffice Agrimpex](/img/screenshots/seguridad/index-mapa-notificaciones.png)

*Captura tomada del backoffice Agrimpex con el detalle de la notificación de ejemplo.*
