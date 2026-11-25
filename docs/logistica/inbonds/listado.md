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
