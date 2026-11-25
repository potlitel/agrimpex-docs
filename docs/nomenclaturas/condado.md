---
sidebar_position: 8
source_route: /management/nomenclatures/county/list
source_component: CountyListComponent
status: vigente
---

# Condado

## Propósito

Gestiona el nomenclador condado del sistema.

## Acceso

- **Menú:** Nomenclaturas → Condado
- **Ruta directa:** `/management/nomenclatures/county/list`
- **Componente:** `CountyListComponent`

> Las rutas `/management/nomenclatures/county/add` y `/management/nomenclatures/county/edit` comparten el formulario del nomenclador.

## Captura

![condado — captura real](/img/screenshots/nomenclaturas/condado.png)

*Captura tomada del backoffice Agrimpex.*

## Campos

| Campo | Descripción | Obligatorio |
|-------|-------------|-------------|
| Buscar | Filtro de texto para localizar registros. | No |
| Filtrar | Aplica los filtros seleccionados al listado. | No |
| Nombre | Nombre del elemento de condado. | Sí |

## Acciones

| Acción | Botón | Rol | Ruta |
|--------|-------|-----|------|
| Buscar | Buscar | Administrador o Especialista | `/management/nomenclatures/county/list` |
| Recargar | Recargar | Administrador o Especialista | `/management/nomenclatures/county/list` |
| Añadir | Añadir | Administrador, Especialista, Logístico o Calidad | `/management/nomenclatures/county/list/add` |
| Eliminar | Eliminar | Administrador, Especialista, Logístico o Calidad | `/management/nomenclatures/county/list` |

## Filtros del listado

El panel **Filtrar** contiene **Estado**, un selector con las opciones cargadas y placeholder «Seleccionar opción», y **Activo**, un conmutador. El control **Nombre** está comentado en la plantilla: no se puede filtrar por nombre desde el panel. El panel se abre con el botón **Filtrar** y se cierra con **Limpiar**; no hay botón **Aplicar**, porque los cambios se reflejan al escribir. Junto al panel están la búsqueda genérica **Buscar**, el botón **Recargar** y, cuando el componente lo declara, la exportación **Generar Excel (.xlsx)** y el indicador de sincronización con Recomplus.

![Condado — panel de filtros](/img/screenshots/nomenclaturas/condado-filtros.png)

*Captura tomada del backoffice Agrimpex: panel **Filtrar** abierto en `/management/nomenclatures/county/list`.*

## Operaciones y estados

**Columnas visibles:** **Nombre**, **Estado**, **Activo** y **Acciones**.

Los estados del selector se obtienen con `fetchAllStates()`. **Añadir** y la edición se rigen por `canAdd`/`canEdit` sobre `Condado`; no hay botón **Eliminar** y la edición usa `/county/edit?id=<id>`.

| Acción | Botón | Rol | Ruta |
|--------|-------|-----|------|
| Añadir condado | Añadir | Administrador | `/management/nomenclatures/county/add` |
| Editar condado | Editar (lápiz) | Administrador; Especialista con permiso de actualización | `/management/nomenclatures/county/edit?id=<id>` |
| Cambiar estado | Conmutador Activo | Administrador; Especialista con permiso de actualización | `/management/nomenclatures/county/list` |
| Exportar | Generar Excel (.xlsx) | Administrador o Especialista (botón sin control de rol) | `/management/nomenclatures/county/list` |



![Condado — tabla y acciones del listado](/img/screenshots/nomenclaturas/condado-operaciones.png)

*Captura tomada del backoffice Agrimpex: listado `/management/nomenclatures/county/list` con sus columnas y acciones.*

## Formulario (alta y edición)

`CountyFormComponent` sirve para `/county/add` y `/county/edit?id=<id>`, con `id` por parámetro de consulta.

| Campo | Control | Obligatorio | Validación y mensaje |
|-------|---------|-------------|----------------------|
| Nombre | Campo de texto | Sí | `required` y patrón sin números: «Campo obligatorio.» o «No se permiten caracteres numéricos (0-9) en este campo.». |
| Estado | Selector de estados | Sí | `required` → «Campo obligatorio.»; las opciones vienen de `fetchAllStates()`. |
| Activo | Conmutador | No | Se inicializa en `true`. |

**Regresar** y **Guardar**. 

![Condado — formulario compartido](/img/screenshots/nomenclaturas/condado-formulario.png)

*Captura tomada del backoffice Agrimpex: formulario de alta en `/management/nomenclatures/county/add`.*
