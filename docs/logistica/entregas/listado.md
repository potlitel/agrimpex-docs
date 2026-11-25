---
sidebar_position: 21
source_route: /logistic/delivery-orders/list
source_component: DeliveryOrderListComponent
status: vigente
---

# Listado de entregas

## Propósito

Busca y administra las órdenes de entrega de contenedores.

## Acceso

- **Menú:** Logística → Listado de entregas
- **Ruta directa:** `/logistic/delivery-orders/list`
- **Componente:** `DeliveryOrderListComponent`

## Captura

![listado — captura real](/img/screenshots/logistica/entregas/listado.png)

*Captura tomada del backoffice Agrimpex.*

## Campos

| Campo | Descripción | Obligatorio |
|-------|-------------|-------------|
| Buscar | Filtro de texto para localizar registros. | No |
| Filtrar | Aplica los filtros seleccionados al listado. | No |
| No Orden | Número de orden de entrega. | No |
| Proveedor | Proveedor del BL. | No |
| Especialista | Especialista asignado. | No |
| Estado | Estado de la orden. | No |
| Productos | Productos declarados. | No |
| Cliente | Cliente del producto. | No |
| Contenedor | Contenedor asociado. | No |
| No. BL | Conocimiento de embarque. | No |

## Acciones

| Acción | Botón | Rol | Ruta |
|--------|-------|-----|------|
| Buscar | Buscar | Administrador, Especialista, Consultor o Logístico | `/logistic/delivery-orders/list` |
| Recargar | Recargar | Administrador, Especialista, Consultor o Logístico | `/logistic/delivery-orders/list` |
| Añadir | Añadir | Administrador, Especialista, Logístico o Calidad | `/logistic/delivery-orders/list/add` |
| Eliminar | Eliminar | Administrador, Especialista, Logístico o Calidad | `/logistic/delivery-orders/list` |
| Exportar | Exportar Excel | Administrador, Especialista, Consultor o Logístico | `/logistic/delivery-orders/list` |

## Filtros del listado

`/logistic/delivery-orders/list` ofrece un conmutador **Mariel / Santiago** que cambia el repositorio y muestra el logotipo de la terminal. El panel **Filtrar** combina **No Orden**, **Proveedor**, **Especialista**, **Estado** —`En proceso`, `Enviada`, `Tramitada`—, **Productos**, un rango de **Fecha**, **Cliente**, **Contenedor** y **No. BL**. Los rangos parciales se ignoran y los campos vacíos se descartan; hay búsqueda y recarga genéricas y **Generar Excel (.xlsx)**.

![Entregas — panel de filtros](/img/screenshots/logistica/entregas/listado-filtros.png)

*Captura tomada del backoffice Agrimpex: filtros del listado de entregas.*

## Operaciones y estados

La tabla muestra **#**, **No. Orden P.**, **Fecha**, **Proveedor**, **Estado de completación**, **Contenedor**, **No. BL**, **Especialista**, **No. Solicitud**, **Cliente**, **Productos** y **Acciones**. «Estado de completación» resume con distintivos ✅/⏳ si la oferta y el embarque están completos. Las acciones son: ojo para la ficha, **Vista Previa PDF**, edición con lápiz —solo para Administrador, Especialista o Logístico— que abre `/logistic/delivery-orders/edit?id=<id>&port=<terminal>`, y eliminación con el mismo rol. Los estados del trámite son **En proceso**, **Enviada** y **Tramitada**.

![Entregas — acciones de la tabla](/img/screenshots/logistica/entregas/listado-operaciones.png)

*Captura tomada del backoffice Agrimpex: columna Acciones y estado de completación.*

## Formulario (alta y edición)

La edición usa `edit?id=<id>` por parámetro de consulta, con el puerto también en la consulta, y el alta usa `/logistic/delivery-orders/add`. El formulario comparte campo de número de orden con la edición y organiza los datos en las pestañas **Datos de la Oferta** y **Datos del Embarque**; ambas se marcan con punto verde o rojo según estén completas.

![Entregas — acceso al formulario desde el listado](/img/screenshots/logistica/entregas/listado-operaciones.png)

*Captura tomada del backoffice Agrimpex: botón de edición que abre el formulario con `id` por parámetro de consulta.*
