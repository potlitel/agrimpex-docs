---
sidebar_position: 19
source_route: /management/nomenclatures/supplier/list
source_component: SupplierListComponent
status: vigente
---

# Proveedor

## Propósito

Gestiona el nomenclador proveedor del sistema.

## Acceso

- **Menú:** Nomenclaturas → Proveedor
- **Ruta directa:** `/management/nomenclatures/supplier/list`
- **Componente:** `SupplierListComponent`

> El frontend expone únicamente el listado de este nomenclador.

## Captura

![proveedor — captura real](/img/screenshots/nomenclaturas/proveedor.png)

*Captura tomada del backoffice Agrimpex.*

## Campos

| Campo | Descripción | Obligatorio |
|-------|-------------|-------------|
| Buscar | Filtro de texto para localizar registros. | No |
| Filtrar | Aplica los filtros seleccionados al listado. | No |
| Nombre | Nombre del elemento de proveedor. | Sí |

## Acciones

| Acción | Botón | Rol | Ruta |
|--------|-------|-----|------|
| Buscar | Buscar | Administrador o Especialista | `/management/nomenclatures/supplier/list` |
| Recargar | Recargar | Administrador o Especialista | `/management/nomenclatures/supplier/list` |
