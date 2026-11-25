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

## Detalle de la notificación

La ruta se documenta con valores concretos de ejemplo: **`/logistic/notification/BL/BL-1`** (`entityType=BL`, `entityId=BL-1`) en lugar del patrón `/logistic/notification/:entityType/:entityId`. Opcionalmente admite los parámetros de consulta `nid` (identificador de la notificación) y `traceId` (correlación de la traza). El mismo patrón con otros valores, como `Contenedor` o `Prorroga`, abre el detalle de esas entidades.

La cabecera muestra el tipo de entidad y su referencia, junto con **Volver**, que regresa al historial o a `/logistic`. Debajo se muestran tres indicadores: la **severidad** —Informativa, Éxito, Advertencia o Crítica—, el **estado de lectura** —Leída o No leída— y, cuando se resuelve correctamente, *Con traza asociada*.

| Dato | Origen y presentación |
|------|-----------------------|
| Tipo | Etiqueta traducida del tipo de notificación. |
| Referencia | `entityId` de la ruta, por ejemplo `BL-1`. |
| Recibida | Fecha de creación expresada de forma relativa en español, por ejemplo «hace 2 horas». |
| Severidad | Valor `severity` de la notificación, con el color del indicador. |
| Título | Texto breve de la notificación. |
| Mensaje | Texto descriptivo; solo aparece si la notificación lo trae. |
| ¿Qué significa? | Descripción asociada al tipo, cuando existe. |

Si no hay ninguna notificación vinculada a la entidad, la página muestra *No se encontró la notificación asociada a esta entidad.* y conserva la referencia y el acceso a la traza.

En el pie se ofrecen **Marcar como leída** —solo mientras la notificación esté sin leer—, **Ver traza asociada** —abre el diálogo de diferencias de la traza identificada por `traceId` o por la correlación de la notificación; se deshabilita si no hay traza o si la consulta falló— e **Ir a la vista completa**, que navega a la pantalla correspondiente al tipo (para un BL, el control de importaciones) con los parámetros de la entidad.

![Detalle de notificación — entidad BL-1 en el backoffice Agrimpex](/img/screenshots/seguridad/notificaciones-detalle.png)

*Captura tomada del backoffice Agrimpex con la ruta concreta `/logistic/notification/BL/BL-1`.*
