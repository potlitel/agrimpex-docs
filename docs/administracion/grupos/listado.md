---
sidebar_position: 4
source_route: /management/group/list
source_component: GroupListComponent
status: vigente
---

# Listado de grupos

## Propósito

Consulta los grupos y sus roles asignados.

## Acceso

- **Menú:** Administración → Listado de grupos
- **Ruta directa:** `/management/group/list`
- **Componente:** `GroupListComponent`

> El grupo por defecto del sistema no se puede modificar ni eliminar.

## Captura

![listado — captura real](/img/screenshots/administracion/grupos/listado.png)

*Captura tomada del backoffice Agrimpex.*

## Campos

| Campo | Descripción | Obligatorio |
|-------|-------------|-------------|
| Buscar | Filtro de texto para localizar registros. | No |
| Filtrar | Aplica los filtros seleccionados al listado. | No |
| Nombre | Nombre del grupo. | No |
| Activo | Estado del grupo. | No |
| Roles | Roles del grupo. | No |

## Acciones

| Acción | Botón | Rol | Ruta |
|--------|-------|-----|------|
| Buscar | Buscar | Administrador | `/management/group/list` |
| Recargar | Recargar | Administrador | `/management/group/list` |
| Añadir | Añadir | Administrador, Especialista, Logístico o Calidad | `/management/group/list/add` |
| Eliminar | Eliminar | Administrador, Especialista, Logístico o Calidad | `/management/group/list` |
