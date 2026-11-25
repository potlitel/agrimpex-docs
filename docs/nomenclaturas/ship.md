---
sidebar_position: 27
source_route: /management/nomenclatures/ship/list
source_component: ShipListComponent
status: vigente
---

# Buque

## Propósito

Gestiona el nomenclador buque del sistema.

## Acceso

- **Menú:** Nomenclaturas → Buque
- **Ruta directa:** `/management/nomenclatures/ship/list`
- **Componente:** `ShipListComponent`

> Las rutas `/management/nomenclatures/ship/add` y `/management/nomenclatures/ship/edit` comparten el formulario del nomenclador.

## Captura

![ship — captura real](/img/screenshots/nomenclaturas/ship.png)

*Captura tomada del backoffice Agrimpex.*

## Campos

| Campo | Descripción | Obligatorio |
|-------|-------------|-------------|
| Buscar | Filtro de texto para localizar registros. | No |
| Filtrar | Aplica los filtros seleccionados al listado. | No |
| Nombre | Nombre del elemento de buque. | Sí |

## Acciones

| Acción | Botón | Rol | Ruta |
|--------|-------|-----|------|
| Buscar | Buscar | Administrador o Especialista | `/management/nomenclatures/ship/list` |
| Recargar | Recargar | Administrador o Especialista | `/management/nomenclatures/ship/list` |
| Añadir | Añadir | Administrador, Especialista, Logístico o Calidad | `/management/nomenclatures/ship/list/add` |
| Eliminar | Eliminar | Administrador, Especialista, Logístico o Calidad | `/management/nomenclatures/ship/list` |

## Filtros del listado

El panel **Filtrar** ofrece **Nombre**, **No. IMO** y **Bandera**; la búsqueda genérica se aplica a esos tres campos. El panel se abre con el botón **Filtrar** y se cierra con **Limpiar**; no hay botón **Aplicar**, porque los cambios se reflejan al escribir. Junto al panel están la búsqueda genérica **Buscar**, el botón **Recargar** y, cuando el componente lo declara, la exportación **Generar Excel (.xlsx)** y el indicador de sincronización con Recomplus.

![Buque — panel de filtros](/img/screenshots/nomenclaturas/ship-filtros.png)

*Captura tomada del backoffice Agrimpex: panel **Filtrar** abierto en `/management/nomenclatures/ship/list`.*

## Operaciones y estados

**Columnas visibles:** **Nombre**, **No. IMO**, **Bandera**, **Operador**, **Estado** y **Acciones**.

**Añadir** depende de `canAdd` sobre `Buque`, la edición usa `/ship/edit?id=<id>` sin control de rol en el lápiz, el conmutador de **Estado** exige `canEdit` y la papelera aparece solo con `canDelete`.

| Acción | Botón | Rol | Ruta |
|--------|-------|-----|------|
| Añadir buque | Añadir | Administrador | `/management/nomenclatures/ship/add` |
| Editar buque | Editar (lápiz) | Administrador o Especialista (botón sin control de rol) | `/management/nomenclatures/ship/edit?id=<id>` |
| Cambiar estado | Conmutador Estado | Administrador; Especialista con permiso de actualización | `/management/nomenclatures/ship/list` |
| Eliminar buque | Eliminar (papelera) | Administrador | `/management/nomenclatures/ship/list` |
| Exportar | Generar Excel (.xlsx) | Administrador o Especialista (botón sin control de rol) | `/management/nomenclatures/ship/list` |



![Buque — tabla y acciones del listado](/img/screenshots/nomenclaturas/ship-operaciones.png)

*Captura tomada del backoffice Agrimpex: listado `/management/nomenclatures/ship/list` con sus columnas y acciones.*

## Formulario (alta y edición)

`ShipFormComponent` se usa en `/ship/add` y `/ship/edit?id=<id>`; el `id` de edición viaja por parámetro de consulta.

| Campo | Control | Obligatorio | Validación y mensaje |
|-------|---------|-------------|----------------------|
| Nombre | Campo de texto | Sí | `required` y longitud máxima 255; «Campo obligatorio.». |
| No. IMO | Campo de texto | No | Longitud máxima 20; errores de la API. |
| Bandera | Campo de texto | No | Longitud máxima 100. |
| Tipo | Campo de texto | No | Longitud máxima 50. |
| Operador | Selector | No | Opciones cargadas desde el backend. |
| Activo | Conmutador | No | Enlazado a `status`. |

**Regresar** y **Guardar** en alta; **Actualizar** en edición. 

![Buque — formulario compartido](/img/screenshots/nomenclaturas/ship-formulario.png)

*Captura tomada del backoffice Agrimpex: formulario de alta en `/management/nomenclatures/ship/add`.*
