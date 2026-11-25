---
sidebar_position: 10
source_route: /management/nomenclatures/containers-state/list
source_component: ContainerStateListComponent
status: vigente
---

# Estados del contenedor

## Propósito

Gestiona el nomenclador estados del contenedor del sistema.

## Acceso

- **Menú:** Nomenclaturas → Estados del contenedor
- **Ruta directa:** `/management/nomenclatures/containers-state/list`
- **Componente:** `ContainerStateListComponent`

> Las rutas `/management/nomenclatures/containers-state/add` y `/management/nomenclatures/containers-state/edit` comparten el formulario del nomenclador.

## Captura

![contenedor-estado — captura real](/img/screenshots/nomenclaturas/contenedor-estado.png)

*Captura tomada del backoffice Agrimpex.*

## Campos

| Campo | Descripción | Obligatorio |
|-------|-------------|-------------|
| Buscar | Filtro de texto para localizar registros. | No |
| Filtrar | Aplica los filtros seleccionados al listado. | No |
| Nombre | Nombre del elemento de estados del contenedor. | Sí |

## Acciones

| Acción | Botón | Rol | Ruta |
|--------|-------|-----|------|
| Buscar | Buscar | Administrador o Especialista | `/management/nomenclatures/containers-state/list` |
| Recargar | Recargar | Administrador o Especialista | `/management/nomenclatures/containers-state/list` |
| Añadir | Añadir | Administrador, Especialista, Logístico o Calidad | `/management/nomenclatures/containers-state/list/add` |
| Eliminar | Eliminar | Administrador, Especialista, Logístico o Calidad | `/management/nomenclatures/containers-state/list` |

## Filtros del listado

El panel **Filtrar** incluye **Nombre**, de texto, y **Activo**, conmutador que separa los estados vigentes de los inactivos. El panel se abre con el botón **Filtrar** y se cierra con **Limpiar**; no hay botón **Aplicar**, porque los cambios se reflejan al escribir. Junto al panel están la búsqueda genérica **Buscar**, el botón **Recargar** y, cuando el componente lo declara, la exportación **Generar Excel (.xlsx)** y el indicador de sincronización con Recomplus.

![Estados del contenedor — panel de filtros](/img/screenshots/nomenclaturas/contenedor-estado-filtros.png)

*Captura tomada del backoffice Agrimpex: panel **Filtrar** abierto en `/management/nomenclatures/containers-state/list`.*

## Operaciones y estados

**Columnas visibles:** **Nombre**, **Activo** y **Acciones**.

Los botones **Añadir** y de edición están condicionados a `canAdd`/`canEdit` sobre `EstadoContenedor`; el conmutador de la columna **Activo** cambia el estado y la edición navega a `/containers-state/edit?id=<id>`. No se ofrece eliminación desde la tabla.

| Acción | Botón | Rol | Ruta |
|--------|-------|-----|------|
| Añadir estado | Añadir | Administrador | `/management/nomenclatures/containers-state/add` |
| Editar estado | Editar (lápiz) | Administrador; Especialista con permiso de actualización | `/management/nomenclatures/containers-state/edit?id=<id>` |
| Cambiar estado | Conmutador Activo | Administrador; Especialista con permiso de actualización | `/management/nomenclatures/containers-state/list` |
| Exportar | Generar Excel (.xlsx) | Administrador o Especialista (botón sin control de rol) | `/management/nomenclatures/containers-state/list` |



![Estados del contenedor — tabla y acciones del listado](/img/screenshots/nomenclaturas/contenedor-estado-operaciones.png)

*Captura tomada del backoffice Agrimpex: listado `/management/nomenclatures/containers-state/list` con sus columnas y acciones.*

## Formulario (alta y edición)

`ContainerStateFormComponent` es el formulario compartido por `/containers-state/add` y `/containers-state/edit?id=<id>`.

| Campo | Control | Obligatorio | Validación y mensaje |
|-------|---------|-------------|----------------------|
| Nombre | Campo de texto | Sí | `required` con patrón sin números: «Campo obligatorio.» o «No se permiten caracteres numéricos (0-9) en este campo.». |
| Activo | Conmutador | No | Inicializado en `true`. |

**Regresar** y **Guardar**. 

![Estados del contenedor — formulario compartido](/img/screenshots/nomenclaturas/contenedor-estado-formulario.png)

*Captura tomada del backoffice Agrimpex: formulario de alta en `/management/nomenclatures/containers-state/add`.*
