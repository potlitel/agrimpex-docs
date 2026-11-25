---
sidebar_position: 23
source_route: /management/nomenclatures/port/list
source_component: PortListComponent
status: vigente
---

# Puerto

## Propósito

Gestiona el nomenclador puerto del sistema.

## Acceso

- **Menú:** Nomenclaturas → Puerto
- **Ruta directa:** `/management/nomenclatures/port/list`
- **Componente:** `PortListComponent`

> Las rutas `/management/nomenclatures/port/add` y `/management/nomenclatures/port/edit` comparten el formulario del nomenclador.

## Captura

![port — captura real](/img/screenshots/nomenclaturas/port.png)

*Captura tomada del backoffice Agrimpex.*

## Campos

| Campo | Descripción | Obligatorio |
|-------|-------------|-------------|
| Buscar | Filtro de texto para localizar registros. | No |
| Filtrar | Aplica los filtros seleccionados al listado. | No |
| Nombre | Nombre del elemento de puerto. | Sí |

## Acciones

| Acción | Botón | Rol | Ruta |
|--------|-------|-----|------|
| Buscar | Buscar | Administrador o Especialista | `/management/nomenclatures/port/list` |
| Recargar | Recargar | Administrador o Especialista | `/management/nomenclatures/port/list` |
| Añadir | Añadir | Administrador, Especialista, Logístico o Calidad | `/management/nomenclatures/port/list/add` |
| Eliminar | Eliminar | Administrador, Especialista, Logístico o Calidad | `/management/nomenclatures/port/list` |

## Filtros del listado

El panel **Filtrar** ofrece **Código** y **Nombre** como campos de texto. La barra también incluye el indicador de sincronización, condicionado a `canSync` sobre `Puerto`, y la exportación. El panel se abre con el botón **Filtrar** y se cierra con **Limpiar**; no hay botón **Aplicar**, porque los cambios se reflejan al escribir. Junto al panel están la búsqueda genérica **Buscar**, el botón **Recargar** y, cuando el componente lo declara, la exportación **Generar Excel (.xlsx)** y el indicador de sincronización con Recomplus.

![Puerto — panel de filtros](/img/screenshots/nomenclaturas/port-filtros.png)

*Captura tomada del backoffice Agrimpex: panel **Filtrar** abierto en `/management/nomenclatures/port/list`.*

## Operaciones y estados

**Columnas visibles:** **Código**, **Nombre**, **País**, **Ciudad**, **Estado**, **Sync** y **Acciones**.

**Añadir**, el lápiz, la papelera y el conmutador de estado se comprueban con `canAdd`, `canEdit`, `canDelete` y `canSync` sobre `Puerto`. La edición abre `/port/edit?id=<id>` y el conmutador de **Estado** muestra **Activo** o **Inactivo**. La columna **Sync** refleja la sincronización con Recomplus.

| Acción | Botón | Rol | Ruta |
|--------|-------|-----|------|
| Añadir puerto | Añadir | Administrador | `/management/nomenclatures/port/add` |
| Editar puerto | Editar (lápiz) | Administrador; Especialista con permiso de actualización | `/management/nomenclatures/port/edit?id=<id>` |
| Eliminar puerto | Eliminar (papelera) | Administrador | `/management/nomenclatures/port/list` |
| Cambiar estado | Conmutador Estado | Administrador; Especialista con permiso de actualización | `/management/nomenclatures/port/list` |
| Exportar | Generar Excel (.xlsx) | Administrador o Especialista (botón sin control de rol) | `/management/nomenclatures/port/list` |



![Puerto — tabla y acciones del listado](/img/screenshots/nomenclaturas/port-operaciones.png)

*Captura tomada del backoffice Agrimpex: listado `/management/nomenclatures/port/list` con sus columnas y acciones.*

## Formulario (alta y edición)

`PortFormComponent` es el formulario de `/port/add` y `/port/edit?id=<id>`; los países se cargan al inicializar el formulario y el componente distingue el caso de Estados Unidos para ajustar el destino.

| Campo | Control | Obligatorio | Validación y mensaje |
|-------|---------|-------------|----------------------|
| Código | Campo de texto | Sí | Marcado como obligatorio. |
| Nombre | Campo de texto | Sí | Marcado como obligatorio. |
| País | Selector de países | Sí | Obligatorio; las opciones se cargan con `fetchAllCountries()` y enlazan por identificador. |
| Ciudad | Campo de texto | No | Sin validadores declarados. |
| Activo | Conmutador | No | Representa el estado del puerto. |

**Regresar** vuelve al listado; **Guardar** en alta y **Actualizar** en edición. El formulario no muestra mensajes de validación propios junto a los campos; solo los asteriscos de obligatoriedad.

![Puerto — formulario compartido](/img/screenshots/nomenclaturas/port-formulario.png)

*Captura tomada del backoffice Agrimpex: formulario de alta en `/management/nomenclatures/port/add`.*
