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


## Filtros del listado

A diferencia del listado de usuarios, `GroupListComponent` no declara `reactiveFilters` ni monta el panel `ui-table-filter-sheet`: **no hay panel de filtros** y, por tanto, no hay botón **Filtrar** ni criterios de género, rol, fecha o estado. Aunque la tabla Campos anterior incluye una fila genérica «Filtrar», el componente no la implementa.

| Mecanismo | Control | Efecto |
|-----------|---------|--------|
| Búsqueda | Campo **Buscar** del componente genérico de tabla | Filtra los grupos por nombre (`tableSearchableFields = ['name']`). |
| Recarga | Botón **Recargar** | Vuelve a consultar el listado sin cambiar la búsqueda. |
| Ordenación | Flechas de las columnas Nombre y Roles | Ordena por `name` o por `roles`; la columna Activo no es ordenable. |

Los roles se muestran como etiquetas y, como máximo, las dos primeras (`rolesLimitToShow = 2`); el resto queda resumido en el propio componente de etiquetas.

![Grupos — listado sin panel de filtros, solo búsqueda y recarga](/img/screenshots/administracion/grupos/listado-filtros.png)

*Captura tomada del backoffice Agrimpex en `/management/group/list`.*


## Operaciones y estados

Cada fila muestra Nombre, Activo, Roles y una columna **Acciones** alineada a la derecha; la paginación y la ordenación las gestiona la tabla genérica.

| Operación | Botón | Rol | Ruta o condición |
|-----------|-------|-----|------------------|
| Alta | **Añadir**, en la barra de herramientas | Administrador | `/management/group/add` |
| Edición | Icono lápiz (`title` «Editar grupo») | Administrador | `/management/group/edit/:id`; el identificador numérico se convierte a IRI antes de navegar. |
| Activación y desactivación | Interruptor de la columna Activo | Administrador | `toggleGroupActive` → `toggleState(id, valor)`; si falla, el interruptor se revierte y se muestra un aviso. |
| Eliminación | Icono papelera (`title` «Eliminar grupo») | Administrador | Confirmación previa y recarga del listado; solo para grupos que no sean el predeterminado. |

El grupo por defecto del sistema queda fuera de las tres operaciones de fila: su interruptor aparece deshabilitado con el aviso «Grupo por defecto del sistema (no se puede modificar ni eliminar)» y no se le muestran los botones de edición ni de eliminación (`@if (!item.isDefault)`). En el entorno local las filas proceden de grupos marcados como predeterminados, por lo que la captura muestra la columna **Acciones** vacía; los botones aparecen en cuanto se lista un grupo no predeterminado. El guard de la rama `group` (`AccessGuardCanMatchFn`) limita el segmento a `ROLE_ADMIN`, de modo que solo un administrador puede ejecutar estas acciones.

![Grupos — tabla del listado con la columna de acciones](/img/screenshots/administracion/grupos/listado-operaciones.png)

*Captura tomada del backoffice Agrimpex con la tabla y la columna de acciones a la vista.*
