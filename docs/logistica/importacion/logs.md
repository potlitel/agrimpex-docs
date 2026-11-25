---
sidebar_position: 8
source_route: /logistic/import/logs
source_component: ImportLogsListComponent
status: vigente
---

# Logs de importación

## Propósito

Muestra el historial de eventos registrados durante la gestión de importaciones.

## Acceso

- **Menú:** Logística → Logs de importación
- **Ruta directa:** `/logistic/import/logs`
- **Componente:** `ImportLogsListComponent`

## Captura

![logs — captura real](/img/screenshots/logistica/importacion/logs.png)

*Captura tomada del backoffice Agrimpex.*

## Campos

| Campo | Descripción | Obligatorio |
|-------|-------------|-------------|
| Contenedor | Identificador del contenedor. | No |
| Fecha | Fecha del evento. | No |
| Descripción | Detalle del evento. | No |

## Acciones

| Acción | Botón | Rol | Ruta |
|--------|-------|-----|------|
| Buscar | Buscar | Administrador, Especialista, Consultor o Logístico | `/logistic/import/logs` |
| Recargar | Recargar | Administrador, Especialista, Consultor o Logístico | `/logistic/import/logs` |

## Operaciones y estados

`/logistic/import/logs` es el historial de las importaciones realizadas y no permite alta, edición ni eliminación. El panel **Filtrar** combina **Tipo de Importación** (TC Mariel, No Devueltos, Extracción o Recepción Puerta), **Nombre del Fichero**, **Estado** y **Importado por**; **Limpiar** restablece los criterios. La tabla se ordena por defecto por «Importado el» descendente y ofrece búsqueda y recarga genéricas.

Las columnas son **Tipo de Importación**, **Nombre del Fichero**, **Fecha del Fichero**, **Estado**, **Importado el**, **Importado por** y **Acciones**. El estado se muestra como **Éxito**, **Parcial** o **Error** con distintivo verde, ámbar o rojo. El botón de ojo de la columna Acciones abre el panel lateral «Detalle de Importación», con «Información del Fichero» —tipo, nombre, fecha y tamaño en KB—, «Estado y Estadísticas» —estado, total de filas, filas importadas, filas con errores y filas filtradas— y «Auditoría» —importado el, importado por, duración en milisegundos, versión del servidor y endpoint—. Los paneles desplegables «Mensajes de Error» y «Mensajes de Advertencia» muestran el detalle recibido del proceso; **Volver al Listado** cierra el panel.

![Registro de importaciones — panel de filtros](/img/screenshots/logistica/importacion/logs-filtros.png)

*Captura tomada del backoffice Agrimpex: filtros del historial de importaciones.*

![Registro de importaciones — acciones de la tabla](/img/screenshots/logistica/importacion/logs-operaciones.png)

*Captura tomada del backoffice Agrimpex: columna Acciones y estados del historial.*
