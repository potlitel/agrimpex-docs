---
sidebar_position: 18
source_route: /management/nomenclatures/client/list
source_component: ClientListComponent
status: vigente
---

# Cliente

## Propósito

Gestiona el nomenclador cliente del sistema.

## Acceso

- **Menú:** Nomenclaturas → Cliente
- **Ruta directa:** `/management/nomenclatures/client/list`
- **Componente:** `ClientListComponent`

> El frontend expone únicamente el listado de este nomenclador.

## Captura

![cliente — captura real](/img/screenshots/nomenclaturas/cliente.png)

*Captura tomada del backoffice Agrimpex.*

## Campos

| Campo | Descripción | Obligatorio |
|-------|-------------|-------------|
| Buscar | Filtro de texto para localizar registros. | No |
| Filtrar | Aplica los filtros seleccionados al listado. | No |
| Nombre | Nombre del elemento de cliente. | Sí |

## Acciones

| Acción | Botón | Rol | Ruta |
|--------|-------|-----|------|
| Buscar | Buscar | Administrador o Especialista | `/management/nomenclatures/client/list` |
| Recargar | Recargar | Administrador o Especialista | `/management/nomenclatures/client/list` |
