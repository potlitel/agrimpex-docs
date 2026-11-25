---
sidebar_position: 12
source_route: /management/nomenclatures/loads-type/list
source_component: LoadTypeListComponent
status: vigente
---

# Tipo de carga

## Propósito

Gestiona el nomenclador tipo de carga del sistema.

## Acceso

- **Menú:** Nomenclaturas → Tipo de carga
- **Ruta directa:** `/management/nomenclatures/loads-type/list`
- **Componente:** `LoadTypeListComponent`

> Las rutas `/management/nomenclatures/loads-type/add` y `/management/nomenclatures/loads-type/edit` comparten el formulario del nomenclador.

## Captura

![carga — captura real](/img/screenshots/nomenclaturas/carga.png)

*Captura tomada del backoffice Agrimpex.*

## Campos

| Campo | Descripción | Obligatorio |
|-------|-------------|-------------|
| Buscar | Filtro de texto para localizar registros. | No |
| Filtrar | Aplica los filtros seleccionados al listado. | No |
| Nombre | Nombre del elemento de tipo de carga. | Sí |

## Acciones

| Acción | Botón | Rol | Ruta |
|--------|-------|-----|------|
| Buscar | Buscar | Administrador o Especialista | `/management/nomenclatures/loads-type/list` |
| Recargar | Recargar | Administrador o Especialista | `/management/nomenclatures/loads-type/list` |
| Añadir | Añadir | Administrador, Especialista, Logístico o Calidad | `/management/nomenclatures/loads-type/list/add` |
| Eliminar | Eliminar | Administrador, Especialista, Logístico o Calidad | `/management/nomenclatures/loads-type/list` |

## Filtros del listado

El panel **Filtrar** consta de **Nombre**, texto de búsqueda, y **Activo**, conmutador para filtrar por el estado del tipo de carga. El panel se abre con el botón **Filtrar** y se cierra con **Limpiar**; no hay botón **Aplicar**, porque los cambios se reflejan al escribir. Junto al panel están la búsqueda genérica **Buscar**, el botón **Recargar** y, cuando el componente lo declara, la exportación **Generar Excel (.xlsx)** y el indicador de sincronización con Recomplus.

![Tipo de carga — panel de filtros](/img/screenshots/nomenclaturas/carga-filtros.png)

*Captura tomada del backoffice Agrimpex: panel **Filtrar** abierto en `/management/nomenclatures/loads-type/list`.*

## Operaciones y estados

**Columnas visibles:** **Nombre**, **Activo** y **Acciones**.

El listado ofrece alta, edición y eliminación. **Añadir** y el lápiz dependen de `canAdd`/`canEdit` sobre `TipoCarga`; **Eliminar** requiere además `canDelete`. La edición abre `/loads-type/edit?id=<id>`.

| Acción | Botón | Rol | Ruta |
|--------|-------|-----|------|
| Añadir tipo | Añadir | Administrador | `/management/nomenclatures/loads-type/add` |
| Editar tipo | Editar (lápiz) | Administrador; Especialista con permiso de actualización | `/management/nomenclatures/loads-type/edit?id=<id>` |
| Eliminar tipo | Eliminar (papelera) | Administrador | `/management/nomenclatures/loads-type/list` |
| Exportar | Generar Excel (.xlsx) | Administrador o Especialista (botón sin control de rol) | `/management/nomenclatures/loads-type/list` |



![Tipo de carga — tabla y acciones del listado](/img/screenshots/nomenclaturas/carga-operaciones.png)

*Captura tomada del backoffice Agrimpex: listado `/management/nomenclatures/loads-type/list` con sus columnas y acciones.*

## Formulario (alta y edición)

`LoadTypeFormComponent` es el formulario único para `/loads-type/add` y `/loads-type/edit?id=<id>`.

| Campo | Control | Obligatorio | Validación y mensaje |
|-------|---------|-------------|----------------------|
| Nombre | Campo de texto | Sí | `required` y patrón sin números: «Campo obligatorio.» o «No se permiten caracteres numéricos (0-9) en este campo.». |
| Activo | Conmutador | No | Inicializado en `true`. |

**Regresar** y **Guardar**. 

![Tipo de carga — formulario compartido](/img/screenshots/nomenclaturas/carga-formulario.png)

*Captura tomada del backoffice Agrimpex: formulario de alta en `/management/nomenclatures/loads-type/add`.*
