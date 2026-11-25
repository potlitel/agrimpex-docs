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
