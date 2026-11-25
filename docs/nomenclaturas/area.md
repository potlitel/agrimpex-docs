---
sidebar_position: 5
source_route: /management/nomenclatures/area/list
source_component: AreaListComponent
status: vigente
---

# Área

## Propósito

Gestiona el nomenclador área del sistema.

## Acceso

- **Menú:** Nomenclaturas → Área
- **Ruta directa:** `/management/nomenclatures/area/list`
- **Componente:** `AreaListComponent`

> Las rutas `/management/nomenclatures/area/add` y `/management/nomenclatures/area/edit` comparten el formulario del nomenclador.

## Captura

![area — captura real](/img/screenshots/nomenclaturas/area.png)

*Captura tomada del backoffice Agrimpex.*

## Campos

| Campo | Descripción | Obligatorio |
|-------|-------------|-------------|
| Buscar | Filtro de texto para localizar registros. | No |
| Filtrar | Aplica los filtros seleccionados al listado. | No |
| Nombre | Nombre del elemento de área. | Sí |

## Acciones

| Acción | Botón | Rol | Ruta |
|--------|-------|-----|------|
| Buscar | Buscar | Administrador o Especialista | `/management/nomenclatures/area/list` |
| Recargar | Recargar | Administrador o Especialista | `/management/nomenclatures/area/list` |
| Añadir | Añadir | Administrador, Especialista, Logístico o Calidad | `/management/nomenclatures/area/list/add` |
| Eliminar | Eliminar | Administrador, Especialista, Logístico o Calidad | `/management/nomenclatures/area/list` |

## Filtros del listado

El panel **Filtrar** contiene únicamente **Nombre**, un cuadro de texto para localizar áreas. El modelo de filtros también declara `description`, pero esa columna está comentada y no hay campo visible para ella. El panel se abre con el botón **Filtrar** y se cierra con **Limpiar**; no hay botón **Aplicar**, porque los cambios se reflejan al escribir. Junto al panel están la búsqueda genérica **Buscar**, el botón **Recargar** y, cuando el componente lo declara, la exportación **Generar Excel (.xlsx)** y el indicador de sincronización con Recomplus.

![Área — panel de filtros](/img/screenshots/nomenclaturas/area-filtros.png)

*Captura tomada del backoffice Agrimpex: panel **Filtrar** abierto en `/management/nomenclatures/area/list`.*

## Operaciones y estados

**Columnas visibles:** **Nombre** y **Acciones**.

Las tres operaciones de escritura están presentes: **Añadir**, el lápiz de edición y el icono de eliminación. Alta y edición se gatean con `canAdd`/`canEdit` sobre `Area`; **Eliminar** exige además `canDelete`. La edición lleva el `id` por parámetro de consulta en `/area/edit?id=<id>`.

| Acción | Botón | Rol | Ruta |
|--------|-------|-----|------|
| Añadir área | Añadir | Administrador | `/management/nomenclatures/area/add` |
| Editar área | Editar (lápiz) | Administrador; Especialista con permiso de actualización | `/management/nomenclatures/area/edit?id=<id>` |
| Eliminar área | Eliminar (papelera) | Administrador | `/management/nomenclatures/area/list` |
| Exportar | Generar Excel (.xlsx) | Administrador o Especialista (botón sin control de rol) | `/management/nomenclatures/area/list` |



![Área — tabla y acciones del listado](/img/screenshots/nomenclaturas/area-operaciones.png)

*Captura tomada del backoffice Agrimpex: listado `/management/nomenclatures/area/list` con sus columnas y acciones.*

## Formulario (alta y edición)

`AreaFormComponent` se usa en `/area/add` y en `/area/edit?id=<id>`, con el identificador recibido como parámetro de consulta.

| Campo | Control | Obligatorio | Validación y mensaje |
|-------|---------|-------------|----------------------|
| Nombre | Campo de texto | Sí | `required` y patrón sin dígitos; «Campo obligatorio.» o «No se permiten caracteres numéricos (0-9) en este campo.». |

**Regresar** al listado y **Guardar**. 

![Área — formulario compartido](/img/screenshots/nomenclaturas/area-formulario.png)

*Captura tomada del backoffice Agrimpex: formulario de alta en `/management/nomenclatures/area/add`.*
