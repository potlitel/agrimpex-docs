---
sidebar_position: 13
source_route: /management/nomenclatures/plant/list
source_component: PlantListComponent
status: vigente
---

# Planta

## Propósito

Gestiona el nomenclador planta del sistema.

## Acceso

- **Menú:** Nomenclaturas → Planta
- **Ruta directa:** `/management/nomenclatures/plant/list`
- **Componente:** `PlantListComponent`

> Las rutas `/management/nomenclatures/plant/add` y `/management/nomenclatures/plant/edit` comparten el formulario del nomenclador.

## Captura

![planta — captura real](/img/screenshots/nomenclaturas/planta.png)

*Captura tomada del backoffice Agrimpex.*

## Campos

| Campo | Descripción | Obligatorio |
|-------|-------------|-------------|
| Buscar | Filtro de texto para localizar registros. | No |
| Filtrar | Aplica los filtros seleccionados al listado. | No |
| Nombre | Nombre del elemento de planta. | Sí |

## Acciones

| Acción | Botón | Rol | Ruta |
|--------|-------|-----|------|
| Buscar | Buscar | Administrador o Especialista | `/management/nomenclatures/plant/list` |
| Recargar | Recargar | Administrador o Especialista | `/management/nomenclatures/plant/list` |
| Añadir | Añadir | Administrador, Especialista, Logístico o Calidad | `/management/nomenclatures/plant/list/add` |
| Eliminar | Eliminar | Administrador, Especialista, Logístico o Calidad | `/management/nomenclatures/plant/list` |

## Filtros del listado

El panel **Filtrar** incluye **Código** (texto), **Producto** y **País** (selectores con placeholder «Seleccionar opción»), **Estado** (solo cuando el país es Estados Unidos) y **Condado** (cuando el país es USA y los condados están habilitados, con los avisos «Cargando condados de …» y «No hay condados disponibles para el estado seleccionado»). El modelo declara `name` sin control visible. El panel se abre con el botón **Filtrar** y se cierra con **Limpiar**; no hay botón **Aplicar**, porque los cambios se reflejan al escribir. Junto al panel están la búsqueda genérica **Buscar**, el botón **Recargar** y, cuando el componente lo declara, la exportación **Generar Excel (.xlsx)** y el indicador de sincronización con Recomplus.

![Planta — panel de filtros](/img/screenshots/nomenclaturas/planta-filtros.png)

*Captura tomada del backoffice Agrimpex: panel **Filtrar** abierto en `/management/nomenclatures/plant/list`.*

## Operaciones y estados

**Columnas visibles:** **Nombre**, **Código**, **Productos**, **País**, **Estado**, **Condado**, **Activo** y **Acciones**.

**Añadir** y la edición se comprueban con `canAdd`/`canEdit` sobre `Plantas`; no hay botón **Eliminar** y la edición usa `/plant/edit?id=<id>`. Las rutas de alta y edición llevan `canDeactivate` para conservar el borrador. El conmutador de **Activo** cambia el estado de la planta.

| Acción | Botón | Rol | Ruta |
|--------|-------|-----|------|
| Añadir planta | Añadir | Administrador | `/management/nomenclatures/plant/add` |
| Editar planta | Editar (lápiz) | Administrador; Especialista con permiso de actualización | `/management/nomenclatures/plant/edit?id=<id>` |
| Cambiar estado | Conmutador Activo | Administrador; Especialista con permiso de actualización | `/management/nomenclatures/plant/list` |
| Exportar | Generar Excel (.xlsx) | Administrador o Especialista (botón sin control de rol) | `/management/nomenclatures/plant/list` |



![Planta — tabla y acciones del listado](/img/screenshots/nomenclaturas/planta-operaciones.png)

*Captura tomada del backoffice Agrimpex: listado `/management/nomenclatures/plant/list` con sus columnas y acciones.*

## Formulario (alta y edición)

`PlantFormComponent` se usa en `/plant/add` y `/plant/edit?id=<id>`. El selector de productos admite varios elementos y muestra «Modo de selección única (compatibilidad)» cuando trabaja en modo simple.

| Campo | Control | Obligatorio | Validación y mensaje |
|-------|---------|-------------|----------------------|
| Nombre | Campo de texto | Sí | `required` → «Campo obligatorio.». |
| Código | Campo de texto | No | Sin validador obligatorio. |
| Dirección | Campo de texto | Sí | `required` → «Campo obligatorio.». |
| Activo | Conmutador | Sí | `required`, con valor inicial `true`. |
| Productos | Selector múltiple | Sí | `required` y `minLength(1)`: «Campo obligatorio.», «Debe seleccionar al menos `{count}` producto» y «No se permiten productos duplicados». |
| País | Selector | Sí | `required` → «Campo obligatorio.». |
| Estado | Selector | Condicional | Obligatorio cuando el país es USA. |
| Condado | Selector | Condicional | Obligatorio cuando el país es USA y hay condados; **Guardar** se deshabilita si faltan. |

**Regresar** y **Guardar**. El formulario conserva el borrador y avisa al abandonar la ruta.

![Planta — formulario compartido](/img/screenshots/nomenclaturas/planta-formulario.png)

*Captura tomada del backoffice Agrimpex: formulario de alta en `/management/nomenclatures/plant/add`.*
