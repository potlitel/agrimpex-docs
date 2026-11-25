---
sidebar_position: 20
source_route: /management/nomenclatures/management-type/list
source_component: ManagementTypeListComponent
status: vigente
---

# Tipo de forma de gestión

## Propósito

Gestiona el nomenclador tipo de forma de gestión del sistema.

## Acceso

- **Menú:** Nomenclaturas → Tipo de forma de gestión
- **Ruta directa:** `/management/nomenclatures/management-type/list`
- **Componente:** `ManagementTypeListComponent`

> El frontend expone únicamente el listado de este nomenclador.

## Captura

![gestion — captura real](/img/screenshots/nomenclaturas/gestion.png)

*Captura tomada del backoffice Agrimpex.*

## Campos

| Campo | Descripción | Obligatorio |
|-------|-------------|-------------|
| Buscar | Filtro de texto para localizar registros. | No |
| Filtrar | Aplica los filtros seleccionados al listado. | No |
| Nombre | Nombre del elemento de tipo de forma de gestión. | Sí |

## Acciones

| Acción | Botón | Rol | Ruta |
|--------|-------|-----|------|
| Buscar | Buscar | Administrador o Especialista | `/management/nomenclatures/management-type/list` |
| Recargar | Recargar | Administrador o Especialista | `/management/nomenclatures/management-type/list` |
