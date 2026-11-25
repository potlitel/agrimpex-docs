---
sidebar_position: 5
source_route: /logistic/notification/:entityType/:entityId
source_component: NotificationEntityPageComponent
status: vigente
---

# Notificaciones

## Propósito

Muestra el detalle de una notificación y su traza asociada.

## Acceso

- **Menú:** Seguridad → Notificaciones
- **Ruta directa:** `/logistic/notification/:entityType/:entityId`
- **Componente:** `NotificationEntityPageComponent`

## Captura

![notificaciones — captura real](/img/screenshots/seguridad/notificaciones.png)

*Captura tomada del backoffice Agrimpex.*

## Campos

| Campo | Descripción | Obligatorio |
|-------|-------------|-------------|
| Tipo | Tipo de notificación. | No |
| Referencia | Identificador de la entidad. | Sí |
| Recibida | Fecha relativa de recepción. | No |
| Severidad | Informativa, éxito, advertencia o crítica. | No |
| Título | Titulo de la notificación. | No |
| Mensaje | Texto de la notificación. | No |
| ¿Qué significa? | Descripción del evento. | No |

## Acciones

| Acción | Botón | Rol | Ruta |
|--------|-------|-----|------|
| Volver | Volver | Todo usuario autenticado | `Historial de notificaciones` |
| Marcar como leída | Marcar como leída | Todo usuario autenticado | `/logistic/notification/:entityType/:entityId` |
| Ver traza asociada | Ver traza asociada | Todo usuario autenticado | `/security/trace/list` |
| Ir a la vista completa | Ir a la vista completa | Todo usuario autenticado | `/logistic/notification/:entityType/:entityId` |
