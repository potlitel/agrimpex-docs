---
sidebar_position: 16
source_route: /management/nomenclatures/contract/list
source_component: ContractListComponent
status: vigente
---

# Contrato

## Propósito

Gestiona el nomenclador contrato del sistema.

## Acceso

- **Menú:** Nomenclaturas → Contrato
- **Ruta directa:** `/management/nomenclatures/contract/list`
- **Componente:** `ContractListComponent`

> El frontend expone únicamente el listado de este nomenclador.

## Captura

![contract — captura real](/img/screenshots/nomenclaturas/contract.png)

*Captura tomada del backoffice Agrimpex.*

## Campos

| Campo | Descripción | Obligatorio |
|-------|-------------|-------------|
| Buscar | Filtro de texto para localizar registros. | No |
| Filtrar | Aplica los filtros seleccionados al listado. | No |
| Nombre | Nombre del elemento de contrato. | Sí |

## Acciones

| Acción | Botón | Rol | Ruta |
|--------|-------|-----|------|
| Buscar | Buscar | Administrador o Especialista | `/management/nomenclatures/contract/list` |
| Recargar | Recargar | Administrador o Especialista | `/management/nomenclatures/contract/list` |
