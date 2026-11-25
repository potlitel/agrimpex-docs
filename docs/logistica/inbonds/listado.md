---
sidebar_position: 23
source_route: /logistic/inbond-goods/list
source_component: InbondGoodsListComponent
status: vigente
---

# Listado de inbonds

## Propósito

Consulta las mercancías en tránsito bajo régimen inbond.

## Acceso

- **Menú:** Logística → Listado de inbonds
- **Ruta directa:** `/logistic/inbond-goods/list`
- **Componente:** `InbondGoodsListComponent`

## Captura

![listado — captura real](/img/screenshots/logistica/inbonds/listado.png)

*Captura tomada del backoffice Agrimpex.*

## Campos

| Campo | Descripción | Obligatorio |
|-------|-------------|-------------|
| Buscar | Filtro de texto para localizar registros. | No |
| Filtrar | Aplica los filtros seleccionados al listado. | No |
| No. solicitud | Identificador de la solicitud. | No |
| Proveedor | Proveedor declarado. | No |
| Estado | Estado de la solicitud. | No |
| Fecha Solicitud | Fecha de creación. | No |

## Acciones

| Acción | Botón | Rol | Ruta |
|--------|-------|-----|------|
| Buscar | Buscar | Administrador, Especialista, Consultor o Logístico | `/logistic/inbond-goods/list` |
| Recargar | Recargar | Administrador, Especialista, Consultor o Logístico | `/logistic/inbond-goods/list` |
| Añadir | Añadir | Administrador, Especialista, Logístico o Calidad | `/logistic/inbond-goods/list/add` |
| Eliminar | Eliminar | Administrador, Especialista, Logístico o Calidad | `/logistic/inbond-goods/list` |

## Filtros del listado

`/logistic/inbond-goods/list` presenta el panel **Filtrar** con **No. Factura**, un rango de **Fecha factura**, **Estado** —`Aduana`, `Trámites` y `PIE`—, **Proveedor**, **Especialista** y **Solicitud de desaduane**. Los rangos incompletos no se aplican y hay búsqueda, recarga y exportación a **Generar Excel (.xlsx)** con selección de campos.

![Inbonds — panel de filtros](/img/screenshots/logistica/inbonds/listado-filtros.png)

*Captura tomada del backoffice Agrimpex: filtros del listado de mercancías Inbond.*

## Operaciones y estados

Las columnas son **No. Factura**, **Fecha factura**, **Estado**, **Proveedor**, **Especialista**, **Solicitud de desaduane** y **Acciones**. La celda de especialista se puede editar en línea con un selector y los iconos de guardar y cancelar solo si el usuario es Especialista o Administrador; el borrador se conserva localmente hasta confirmarlo. El lápiz abre `/logistic/inbond-goods/edit?id=<id>` —identificador por parámetro de consulta— para Administrador, Especialista o Logístico; el ojo abre la ficha y la papelera elimina el registro previa confirmación «¿Está seguro de eliminar la factura…?». Los estados son **Aduana**, **Trámites** y **PIE**.

![Inbonds — acciones de la tabla](/img/screenshots/logistica/inbonds/listado-operaciones.png)

*Captura tomada del backoffice Agrimpex: edición en línea del especialista y acciones por fila.*

## Formulario (alta y edición)

El alta usa `/logistic/inbond-goods/add` y la edición `edit?id=<id>`. El formulario no tiene panel de filtros; en la edición se pueden completar la solicitud de desaduane y su fecha, mientras que en el alta ambos campos aparecen deshabilitados y en blanco porque la solicitud se asigna después. El formulario se documenta en detalle en la página de formulario de inbonds.

![Inbonds — acceso al formulario](/img/screenshots/logistica/inbonds/listado-operaciones.png)

*Captura tomada del backoffice Agrimpex: botón de edición que abre el formulario compartido.*
