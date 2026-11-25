---
sidebar_position: 21
source_route: /management/nomenclatures/product-line/list
source_component: ProductLineListComponent
status: vigente
---

# Línea de productos

## Propósito

Gestiona el nomenclador línea de productos del sistema.

## Acceso

- **Menú:** Nomenclaturas → Línea de productos
- **Ruta directa:** `/management/nomenclatures/product-line/list`
- **Componente:** `ProductLineListComponent`

> El frontend expone únicamente el listado de este nomenclador.

## Captura

![product-line — captura real](/img/screenshots/nomenclaturas/product-line.png)

*Captura tomada del backoffice Agrimpex.*

## Campos

| Campo | Descripción | Obligatorio |
|-------|-------------|-------------|
| Buscar | Filtro de texto para localizar registros. | No |
| Filtrar | Aplica los filtros seleccionados al listado. | No |
| Nombre | Nombre del elemento de línea de productos. | Sí |

## Acciones

| Acción | Botón | Rol | Ruta |
|--------|-------|-----|------|
| Buscar | Buscar | Administrador o Especialista | `/management/nomenclatures/product-line/list` |
| Recargar | Recargar | Administrador o Especialista | `/management/nomenclatures/product-line/list` |
