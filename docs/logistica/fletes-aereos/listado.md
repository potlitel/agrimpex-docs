---
sidebar_position: 31
source_route: /logistic/airs-freights/list
source_component: AirFreightListComponent
status: vigente
---

# Listado de fletes aéreos

## Propósito

Consulta los fletes aéreos registrados y su estado.

## Acceso

- **Menú:** Logística → Listado de fletes aéreos
- **Ruta directa:** `/logistic/airs-freights/list`
- **Componente:** `AirFreightListComponent`

## Captura

![listado — captura real](/img/screenshots/logistica/fletes-aereos/listado.png)

*Captura tomada del backoffice Agrimpex.*

## Campos

| Campo | Descripción | Obligatorio |
|-------|-------------|-------------|
| Buscar | Filtro de texto para localizar registros. | No |
| Filtrar | Aplica los filtros seleccionados al listado. | No |
| No. Factura | Número de factura. | No |
| Naviera | Compañía transportista. | No |
| Estado | Estado del flete. | No |

## Acciones

| Acción | Botón | Rol | Ruta |
|--------|-------|-----|------|
| Buscar | Buscar | Administrador, Especialista, Logístico o Calidad | `/logistic/airs-freights/list` |
| Recargar | Recargar | Administrador, Especialista, Logístico o Calidad | `/logistic/airs-freights/list` |
| Añadir | Añadir | Administrador, Especialista, Logístico o Calidad | `/logistic/airs-freights/list/add` |
| Eliminar | Eliminar | Administrador, Especialista, Logístico o Calidad | `/logistic/airs-freights/list` |
