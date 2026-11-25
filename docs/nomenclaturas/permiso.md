---
sidebar_position: 3
source_route: /management/nomenclatures/permit-type/list
source_component: PermitTypeListComponent
status: vigente
---

# Tipo de permiso

## Propósito

Gestiona el nomenclador tipo de permiso del sistema.

## Acceso

- **Menú:** Nomenclaturas → Tipo de permiso
- **Ruta directa:** `/management/nomenclatures/permit-type/list`
- **Componente:** `PermitTypeListComponent`

> Las rutas `/management/nomenclatures/permit-type/add` y `/management/nomenclatures/permit-type/edit` comparten el formulario del nomenclador.

## Captura

![permiso — captura real](/img/screenshots/nomenclaturas/permiso.png)

*Captura tomada del backoffice Agrimpex.*

## Campos

| Campo | Descripción | Obligatorio |
|-------|-------------|-------------|
| Buscar | Filtro de texto para localizar registros. | No |
| Filtrar | Aplica los filtros seleccionados al listado. | No |
| Nombre | Nombre del elemento de tipo de permiso. | Sí |

## Acciones

| Acción | Botón | Rol | Ruta |
|--------|-------|-----|------|
| Buscar | Buscar | Administrador o Especialista | `/management/nomenclatures/permit-type/list` |
| Recargar | Recargar | Administrador o Especialista | `/management/nomenclatures/permit-type/list` |
| Añadir | Añadir | Administrador, Especialista, Logístico o Calidad | `/management/nomenclatures/permit-type/list/add` |
| Eliminar | Eliminar | Administrador, Especialista, Logístico o Calidad | `/management/nomenclatures/permit-type/list` |

## Filtros del listado

El panel **Filtrar** tiene **Nombre**, de texto, y **Activo**, un conmutador: el texto busca por nombre y el conmutador restringe la tabla a los tipos activos o inactivos. El panel se abre con el botón **Filtrar** y se cierra con **Limpiar**; no hay botón **Aplicar**, porque los cambios se reflejan al escribir. Junto al panel están la búsqueda genérica **Buscar**, el botón **Recargar** y, cuando el componente lo declara, la exportación **Generar Excel (.xlsx)** y el indicador de sincronización con Recomplus.

![Tipo de permiso — panel de filtros](/img/screenshots/nomenclaturas/permiso-filtros.png)

*Captura tomada del backoffice Agrimpex: panel **Filtrar** abierto en `/management/nomenclatures/permit-type/list`.*

## Operaciones y estados

**Columnas visibles:** **Nombre**, **Activo** y **Acciones**.

La celda **Activo** es un conmutador cuando `canEdit` está activo; en caso contrario muestra la etiqueta **Activo** o **Inactivo** sin permitir cambios. **Añadir** y la edición están sujetos a `canAdd` y `canEdit` sobre el recurso `TipoPermiso`; la edición abre `/permit-type/edit?id=<id>`.

| Acción | Botón | Rol | Ruta |
|--------|-------|-----|------|
| Añadir tipo | Añadir | Administrador | `/management/nomenclatures/permit-type/add` |
| Editar tipo | Editar (lápiz) | Administrador; Especialista con permiso de actualización | `/management/nomenclatures/permit-type/edit?id=<id>` |
| Cambiar estado | Conmutador Activo | Administrador; Especialista con permiso de actualización | `/management/nomenclatures/permit-type/list` |
| Exportar | Generar Excel (.xlsx) | Administrador o Especialista (botón sin control de rol) | `/management/nomenclatures/permit-type/list` |

El componente define `delete()`, pero la plantilla no incluye botón **Eliminar**.

![Tipo de permiso — tabla y acciones del listado](/img/screenshots/nomenclaturas/permiso-operaciones.png)

*Captura tomada del backoffice Agrimpex: listado `/management/nomenclatures/permit-type/list` con sus columnas y acciones.*

## Formulario (alta y edición)

`PermitTypeFormComponent` atiende tanto `/permit-type/add` como `/permit-type/edit?id=<id>`; edición recibe el `id` por parámetro de consulta.

| Campo | Control | Obligatorio | Validación y mensaje |
|-------|---------|-------------|----------------------|
| Nombre | Campo de texto | Sí | `required` y patrón `^[^0-9]*$`; muestra «Campo obligatorio.» o «No se permiten caracteres numéricos (0-9) en este campo.». |
| Activo | Conmutador | No | Se inicializa en `true`; representa el estado del tipo de permiso. |

**Regresar** vuelve al listado; **Guardar** conserva el registro. 

![Tipo de permiso — formulario compartido](/img/screenshots/nomenclaturas/permiso-formulario.png)

*Captura tomada del backoffice Agrimpex: formulario de alta en `/management/nomenclatures/permit-type/add`.*
