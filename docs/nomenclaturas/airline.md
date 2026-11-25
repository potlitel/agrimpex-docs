---
sidebar_position: 25
source_route: /management/nomenclatures/airline/list
source_component: AirlineListComponent
status: vigente
---

# Aerolínea

## Propósito

Gestiona el nomenclador aerolínea del sistema.

## Acceso

- **Menú:** Nomenclaturas → Aerolínea
- **Ruta directa:** `/management/nomenclatures/airline/list`
- **Componente:** `AirlineListComponent`

> Las rutas `/management/nomenclatures/airline/add` y `/management/nomenclatures/airline/edit` comparten el formulario del nomenclador.

## Captura

![airline — captura real](/img/screenshots/nomenclaturas/airline.png)

*Captura tomada del backoffice Agrimpex.*

## Campos

| Campo | Descripción | Obligatorio |
|-------|-------------|-------------|
| Buscar | Filtro de texto para localizar registros. | No |
| Filtrar | Aplica los filtros seleccionados al listado. | No |
| Nombre | Nombre del elemento de aerolínea. | Sí |

## Acciones

| Acción | Botón | Rol | Ruta |
|--------|-------|-----|------|
| Buscar | Buscar | Administrador o Especialista | `/management/nomenclatures/airline/list` |
| Recargar | Recargar | Administrador o Especialista | `/management/nomenclatures/airline/list` |
| Añadir | Añadir | Administrador, Especialista, Logístico o Calidad | `/management/nomenclatures/airline/list/add` |
| Eliminar | Eliminar | Administrador, Especialista, Logístico o Calidad | `/management/nomenclatures/airline/list` |

## Filtros del listado

El panel **Filtrar** ofrece **Código** (control `iataCode`) y **Nombre**, ambos de texto. La barra incluye el indicador de sincronización sobre `Aerolinea` y la exportación. El panel se abre con el botón **Filtrar** y se cierra con **Limpiar**; no hay botón **Aplicar**, porque los cambios se reflejan al escribir. Junto al panel están la búsqueda genérica **Buscar**, el botón **Recargar** y, cuando el componente lo declara, la exportación **Generar Excel (.xlsx)** y el indicador de sincronización con Recomplus.

![Aerolínea — panel de filtros](/img/screenshots/nomenclaturas/airline-filtros.png)

*Captura tomada del backoffice Agrimpex: panel **Filtrar** abierto en `/management/nomenclatures/airline/list`.*

## Operaciones y estados

**Columnas visibles:** **Código**, **Nombre**, **País**, **Activo**, **Sync** y **Acciones**.

**Añadir**, el lápiz, la papelera y el conmutador de **Activo** dependen de `canAdd`, `canEdit`, `canDelete` y `canSync` sobre `Aerolinea`; la edición abre `/airline/edit?id=<id>`. La columna **Sync** indica si la aerolínea está sincronizada.

| Acción | Botón | Rol | Ruta |
|--------|-------|-----|------|
| Añadir aerolínea | Añadir | Administrador | `/management/nomenclatures/airline/add` |
| Editar aerolínea | Editar (lápiz) | Administrador; Especialista con permiso de actualización | `/management/nomenclatures/airline/edit?id=<id>` |
| Eliminar aerolínea | Eliminar (papelera) | Administrador | `/management/nomenclatures/airline/list` |
| Cambiar estado | Conmutador Activo | Administrador; Especialista con permiso de actualización | `/management/nomenclatures/airline/list` |
| Exportar | Generar Excel (.xlsx) | Administrador o Especialista (botón sin control de rol) | `/management/nomenclatures/airline/list` |



![Aerolínea — tabla y acciones del listado](/img/screenshots/nomenclaturas/airline-operaciones.png)

*Captura tomada del backoffice Agrimpex: listado `/management/nomenclatures/airline/list` con sus columnas y acciones.*

## Formulario (alta y edición)

`AirlineFormComponent` se comparte entre `/airline/add` y `/airline/edit?id=<id>`; los países se cargan al iniciar y el estado se traduce a `ACTIVE`/`INACTIVE`.

| Campo | Control | Obligatorio | Validación y mensaje |
|-------|---------|-------------|----------------------|
| Código | Campo de texto (`iataCode`) | Sí | `required` y longitud máxima 5; «Campo obligatorio.». |
| Nombre | Campo de texto | Sí | `required` y longitud máxima 150; «Campo obligatorio.». |
| País | Selector de países | Sí | Obligatorio; opciones cargadas al inicializar. |
| Activo | Conmutador | No | Se enlaza con `status`. |
| Logotipo | Zona de carga de imagen | No | Muestra «Seleccione el fichero de imagen o logotipo correspondiente» y el botón **Seleccionar archivo imagen**. |

**Regresar** y **Guardar**. 

![Aerolínea — formulario compartido](/img/screenshots/nomenclaturas/airline-formulario.png)

*Captura tomada del backoffice Agrimpex: formulario de alta en `/management/nomenclatures/airline/add`.*
