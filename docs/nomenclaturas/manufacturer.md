---
sidebar_position: 30
source_route: /management/nomenclatures/manufacturer/list
source_component: ManufacturerListComponent
status: vigente
---

# Fabricante

## Propósito

Gestiona el nomenclador fabricante del sistema.

## Acceso

- **Menú:** Nomenclaturas → Fabricante
- **Ruta directa:** `/management/nomenclatures/manufacturer/list`
- **Componente:** `ManufacturerListComponent`

> Las rutas `/management/nomenclatures/manufacturer/add` y `/management/nomenclatures/manufacturer/edit` comparten el formulario del nomenclador.

## Captura

![manufacturer — captura real](/img/screenshots/nomenclaturas/manufacturer.png)

*Captura tomada del backoffice Agrimpex.*

## Campos

| Campo | Descripción | Obligatorio |
|-------|-------------|-------------|
| Buscar | Filtro de texto para localizar registros. | No |
| Filtrar | Aplica los filtros seleccionados al listado. | No |
| Nombre | Nombre del elemento de fabricante. | Sí |

## Acciones

| Acción | Botón | Rol | Ruta |
|--------|-------|-----|------|
| Buscar | Buscar | Administrador o Especialista | `/management/nomenclatures/manufacturer/list` |
| Recargar | Recargar | Administrador o Especialista | `/management/nomenclatures/manufacturer/list` |
| Añadir | Añadir | Administrador, Especialista, Logístico o Calidad | `/management/nomenclatures/manufacturer/list/add` |
| Eliminar | Eliminar | Administrador, Especialista, Logístico o Calidad | `/management/nomenclatures/manufacturer/list` |

## Filtros del listado

El panel **Filtrar** ofrece **Nombre**, **Código** y **País**, todos campos de texto. El panel se abre con el botón **Filtrar** y se cierra con **Limpiar**; no hay botón **Aplicar**, porque los cambios se reflejan al escribir. Junto al panel están la búsqueda genérica **Buscar**, el botón **Recargar** y, cuando el componente lo declara, la exportación **Generar Excel (.xlsx)** y el indicador de sincronización con Recomplus.

![Fabricante — panel de filtros](/img/screenshots/nomenclaturas/manufacturer-filtros.png)

*Captura tomada del backoffice Agrimpex: panel **Filtrar** abierto en `/management/nomenclatures/manufacturer/list`.*

## Operaciones y estados

**Columnas visibles:** **Código**, **Nombre**, **País**, **Activo** y **Acciones**.

**Añadir** se comprueba con `canAdd` sobre `Fabricante`. A diferencia de la mayoría, la edición usa un segmento de ruta: `/manufacturer/edit/<id>`. La papelera pide confirmación con «¿Eliminar Fabricante?» y el conmutador de **Activo** requiere `canEdit`; cuando no hay permiso se muestra **Sí** o **No**.

| Acción | Botón | Rol | Ruta |
|--------|-------|-----|------|
| Añadir fabricante | Añadir | Administrador | `/management/nomenclatures/manufacturer/add` |
| Editar fabricante | Editar (lápiz) | Administrador o Especialista (botón sin control de rol) | `/management/nomenclatures/manufacturer/edit/<id>` |
| Cambiar estado | Conmutador Activo | Administrador; Especialista con permiso de actualización | `/management/nomenclatures/manufacturer/list` |
| Eliminar fabricante | Eliminar (papelera) | Administrador o Especialista (botón sin control de rol) | `/management/nomenclatures/manufacturer/list` |
| Exportar | Generar Excel (.xlsx) | Administrador o Especialista (botón sin control de rol) | `/management/nomenclatures/manufacturer/list` |



![Fabricante — tabla y acciones del listado](/img/screenshots/nomenclaturas/manufacturer-operaciones.png)

*Captura tomada del backoffice Agrimpex: listado `/management/nomenclatures/manufacturer/list` con sus columnas y acciones.*

## Formulario (alta y edición)

`ManufacturerFormComponent` es el formulario de `/manufacturer/add` y `/manufacturer/edit/<id>`; aquí el identificador viaja como segmento de la ruta, no como parámetro de consulta.

| Campo | Control | Obligatorio | Validación y mensaje |
|-------|---------|-------------|----------------------|
| Código | Campo de texto | Sí | `required` y longitud máxima 10; «Campo obligatorio.». |
| Nombre | Campo de texto | Sí | `required` y longitud máxima 100; «Campo obligatorio.». |
| Descripción | Área de texto | No | Longitud máxima 500. |
| País | Selector de países | No | Se enlaza por nombre. |
| Activo | Conmutador | No | Representa el estado del fabricante. |

**Regresar** y **Guardar**; el botón de guardado mantiene la misma etiqueta en alta y en edición. 

![Fabricante — formulario compartido](/img/screenshots/nomenclaturas/manufacturer-formulario.png)

*Captura tomada del backoffice Agrimpex: formulario de alta en `/management/nomenclatures/manufacturer/add`.*
