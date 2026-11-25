---
sidebar_position: 4
source_route: /management/nomenclatures/container-type/list
source_component: ContainerTypeListComponent
status: vigente
---

# Tipo de contenedor

## Propósito

Gestiona el nomenclador tipo de contenedor del sistema.

## Acceso

- **Menú:** Nomenclaturas → Tipo de contenedor
- **Ruta directa:** `/management/nomenclatures/container-type/list`
- **Componente:** `ContainerTypeListComponent`

> Las rutas `/management/nomenclatures/container-type/add` y `/management/nomenclatures/container-type/edit` comparten el formulario del nomenclador.

## Captura

![contenedor-tipo — captura real](/img/screenshots/nomenclaturas/contenedor-tipo.png)

*Captura tomada del backoffice Agrimpex.*

## Campos

| Campo | Descripción | Obligatorio |
|-------|-------------|-------------|
| Buscar | Filtro de texto para localizar registros. | No |
| Filtrar | Aplica los filtros seleccionados al listado. | No |
| Nombre | Nombre del elemento de tipo de contenedor. | Sí |

## Acciones

| Acción | Botón | Rol | Ruta |
|--------|-------|-----|------|
| Buscar | Buscar | Administrador o Especialista | `/management/nomenclatures/container-type/list` |
| Recargar | Recargar | Administrador o Especialista | `/management/nomenclatures/container-type/list` |
| Añadir | Añadir | Administrador, Especialista, Logístico o Calidad | `/management/nomenclatures/container-type/list/add` |
| Eliminar | Eliminar | Administrador, Especialista, Logístico o Calidad | `/management/nomenclatures/container-type/list` |

## Filtros del listado

El panel **Filtrar** expone **Código** y **Nombre** como campos de texto y **Activo** como conmutador; las tres condiciones se combinan sobre el listado. El panel se abre con el botón **Filtrar** y se cierra con **Limpiar**; no hay botón **Aplicar**, porque los cambios se reflejan al escribir. Junto al panel están la búsqueda genérica **Buscar**, el botón **Recargar** y, cuando el componente lo declara, la exportación **Generar Excel (.xlsx)** y el indicador de sincronización con Recomplus.

![Tipo de contenedor — panel de filtros](/img/screenshots/nomenclaturas/contenedor-tipo-filtros.png)

*Captura tomada del backoffice Agrimpex: panel **Filtrar** abierto en `/management/nomenclatures/container-type/list`.*

## Operaciones y estados

**Columnas visibles:** **Código**, **Nombre**, **Activo** y **Acciones**.

**Añadir** y el lápiz de edición aparecen solo cuando `canAdd`/`canEdit` lo permiten sobre `TipoContenedor`. El conmutador de **Activo** cambia el estado del registro y la edición usa `/container-type/edit?id=<id>`. No hay botón **Eliminar** en la tabla.

| Acción | Botón | Rol | Ruta |
|--------|-------|-----|------|
| Añadir tipo | Añadir | Administrador | `/management/nomenclatures/container-type/add` |
| Editar tipo | Editar (lápiz) | Administrador; Especialista con permiso de actualización | `/management/nomenclatures/container-type/edit?id=<id>` |
| Cambiar estado | Conmutador Activo | Administrador; Especialista con permiso de actualización | `/management/nomenclatures/container-type/list` |
| Exportar | Generar Excel (.xlsx) | Administrador o Especialista (botón sin control de rol) | `/management/nomenclatures/container-type/list` |



![Tipo de contenedor — tabla y acciones del listado](/img/screenshots/nomenclaturas/contenedor-tipo-operaciones.png)

*Captura tomada del backoffice Agrimpex: listado `/management/nomenclatures/container-type/list` con sus columnas y acciones.*

## Formulario (alta y edición)

`ContainerTypeFormComponent` es el formulario único de `/container-type/add` y `/container-type/edit?id=<id>`.

| Campo | Control | Obligatorio | Validación y mensaje |
|-------|---------|-------------|----------------------|
| Código | Campo de texto | Sí | `required`, `minLength(2)`, `maxLength(2)`, patrón sin números y validador asíncrono de unicidad; mensajes «Este valor es demasiado corto…», «Este valor es demasiado largo…», «No se permiten caracteres numéricos (0-9) en este campo.» y «⚠️ Este código ya está registrado en el sistema.». |
| Nombre | Campo de texto | No | El control no declara validadores en TypeScript; el elemento lleva `pattern`, pero el bloque de mensaje está comentado. |
| Activo | Conmutador | No | Valor inicial `true`; determina si el tipo está disponible. |

**Regresar** y **Guardar**. 

![Tipo de contenedor — formulario compartido](/img/screenshots/nomenclaturas/contenedor-tipo-formulario.png)

*Captura tomada del backoffice Agrimpex: formulario de alta en `/management/nomenclatures/container-type/add`.*
