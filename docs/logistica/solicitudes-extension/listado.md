---
sidebar_position: 25
source_route: /logistic/extensions-requests/list
source_component: ExtensionRequestListComponent
status: vigente
---

# Listado de solicitudes de extensión

## Propósito

Consulta las prórrogas solicitadas para contenedores.

## Acceso

- **Menú:** Logística → Listado de solicitudes de extensión
- **Ruta directa:** `/logistic/extensions-requests/list`
- **Componente:** `ExtensionRequestListComponent`

## Captura

![listado — captura real](/img/screenshots/logistica/solicitudes-extension/listado.png)

*Captura tomada del backoffice Agrimpex.*

## Campos

| Campo | Descripción | Obligatorio |
|-------|-------------|-------------|
| Buscar | Filtro de texto para localizar registros. | No |
| Filtrar | Aplica los filtros seleccionados al listado. | No |
| Contenedor | Contenedor asociado. | No |
| Tipo de Prórroga | Tipo de extensión solicitada. | No |
| Estado | Estado de la solicitud. | No |

## Acciones

| Acción | Botón | Rol | Ruta |
|--------|-------|-----|------|
| Buscar | Buscar | Administrador, Especialista, Consultor o Logístico | `/logistic/extensions-requests/list` |
| Recargar | Recargar | Administrador, Especialista, Consultor o Logístico | `/logistic/extensions-requests/list` |
| Añadir | Añadir | Administrador, Especialista, Logístico o Calidad | `/logistic/extensions-requests/list/add` |
| Eliminar | Eliminar | Administrador, Especialista, Logístico o Calidad | `/logistic/extensions-requests/list` |

## Filtros del listado

`/logistic/extensions-requests/list` incluye el conmutador **Mariel / Santiago** y el panel **Filtrar** con **No. solicitud**, **Contenedor**, **Proveedor**, **Estado** —`En Proceso`, `Terminada`, `Enviada`, `Denegada`—, **Tipo de Prórroga** —`1ra Prórroga` o `2da Prórroga`—, **No. Manifiesto**, **DM**, los campos numéricos **Días (desde)** y **Días (hasta)** y el rango de **Fecha Solicitud**. Los rangos incompletos se descartan; la tabla ofrece búsqueda, recarga y exportación a Excel.

![Solicitudes de extensión — panel de filtros](/img/screenshots/logistica/solicitudes-extension/listado-filtros.png)

*Captura tomada del backoffice Agrimpex: filtros del listado de solicitudes de prórroga.*

## Operaciones y estados

Las columnas son **No. solicitud** —con distintivo de tipo—, **Fecha Solicitud**, **Cant. Contenedores**, **Estado**, **Días** y **Acciones**. El ojo abre la ficha con los contenedores y sus días, manifiesto, BL, DM, productos y observaciones, además de los clientes. El icono de PDF ofrece **Vista Previsualizar PDF** y **Descargar PDF**. El lápiz edita en `/logistic/extensions-requests/edit/:id`, con el identificador por segmento de ruta, pero aparece deshabilitado y con el aviso «Esta solicitud no puede ser modificada» cuando el estado es **Enviada** o **Denegada**. No hay eliminación.

![Solicitudes de extensión — acciones y restricción por estado](/img/screenshots/logistica/solicitudes-extension/listado-operaciones.png)

*Captura tomada del backoffice Agrimpex: estados del trámite y edición restringida.*

## Formulario (alta y edición)

El alta se abre en `/logistic/extensions-requests/add` y la edición en `edit/:id`. El formulario usa el estado `Enviada` o `Denegada` para impedir cambios posteriores. La ficha de edición se documenta en la página de formulario de solicitudes de extensión.

![Solicitudes de extensión — acceso al formulario](/img/screenshots/logistica/solicitudes-extension/listado-operaciones.png)

*Captura tomada del backoffice Agrimpex: enlace de edición con `id` por segmento de ruta.*
