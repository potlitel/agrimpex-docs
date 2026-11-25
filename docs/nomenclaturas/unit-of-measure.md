---
sidebar_position: 32
source_route: /management/nomenclatures/unit-of-measure/list
source_component: UnitOfMeasureListComponent
status: vigente
---

# Unidad de medida

## Propósito

Gestiona el nomenclador unidad de medida del sistema.

## Acceso

- **Menú:** Nomenclaturas → Unidad de medida
- **Ruta directa:** `/management/nomenclatures/unit-of-measure/list`
- **Componente:** `UnitOfMeasureListComponent`

> Las rutas `/management/nomenclatures/unit-of-measure/add` y `/management/nomenclatures/unit-of-measure/edit` comparten el formulario del nomenclador.

## Captura

![unit-of-measure — captura real](/img/screenshots/nomenclaturas/unit-of-measure.png)

*Captura tomada del backoffice Agrimpex.*

## Campos

| Campo | Descripción | Obligatorio |
|-------|-------------|-------------|
| Buscar | Filtro de texto para localizar registros. | No |
| Filtrar | Aplica los filtros seleccionados al listado. | No |
| Nombre | Nombre del elemento de unidad de medida. | Sí |

## Acciones

| Acción | Botón | Rol | Ruta |
|--------|-------|-----|------|
| Buscar | Buscar | Administrador o Especialista | `/management/nomenclatures/unit-of-measure/list` |
| Recargar | Recargar | Administrador o Especialista | `/management/nomenclatures/unit-of-measure/list` |
| Añadir | Añadir | Administrador, Especialista, Logístico o Calidad | `/management/nomenclatures/unit-of-measure/list/add` |
| Eliminar | Eliminar | Administrador, Especialista, Logístico o Calidad | `/management/nomenclatures/unit-of-measure/list` |

## Filtros del listado

El panel **Filtrar** tiene **Nombre**, **Código**, **Tipo** y **Estado**. La barra incluye el indicador de sincronización (`canSync` sobre `UnitOfMeasure`); la edición y la eliminación están sujetas a permisos. El panel se abre con el botón **Filtrar** y se cierra con **Limpiar**; no hay botón **Aplicar**, porque los cambios se reflejan al escribir. Junto al panel están la búsqueda genérica **Buscar**, el botón **Recargar** y, cuando el componente lo declara, la exportación **Generar Excel (.xlsx)** y el indicador de sincronización con Recomplus.

![Unidad de medida — panel de filtros](/img/screenshots/nomenclaturas/unit-of-measure-filtros.png)

*Captura tomada del backoffice Agrimpex: panel **Filtrar** abierto en `/management/nomenclatures/unit-of-measure/list`.*

## Operaciones y estados

**Columnas visibles:** **Nombre**, **Código**, **Símbolo**, **Tipo**, **Factor de conversión**, **Estado**, **Sync** y **Acciones**.

**Añadir** exige `canAdd` sobre `UnitOfMeasure`; el lápiz abre `/unit-of-measure/edit?id=<id>` solo con `canEdit`. La papelera requiere `canDelete` y `canEdit`; si no se puede editar, la celda muestra `--`. El conmutador de estado también depende de `canEdit`.

| Acción | Botón | Rol | Ruta |
|--------|-------|-----|------|
| Añadir unidad | Añadir | Administrador | `/management/nomenclatures/unit-of-measure/add` |
| Editar unidad | Editar (lápiz) | Administrador; Especialista con permiso de actualización | `/management/nomenclatures/unit-of-measure/edit?id=<id>` |
| Cambiar estado | Conmutador Estado | Administrador; Especialista con permiso de actualización | `/management/nomenclatures/unit-of-measure/list` |
| Eliminar unidad | Eliminar (papelera) | Administrador | `/management/nomenclatures/unit-of-measure/list` |
| Exportar | Generar Excel (.xlsx) | Administrador o Especialista (botón sin control de rol) | `/management/nomenclatures/unit-of-measure/list` |



![Unidad de medida — tabla y acciones del listado](/img/screenshots/nomenclaturas/unit-of-measure-operaciones.png)

*Captura tomada del backoffice Agrimpex: listado `/management/nomenclatures/unit-of-measure/list` con sus columnas y acciones.*

## Formulario (alta y edición)

`UnitOfMeasureFormComponent` atiende `/unit-of-measure/add` y `/unit-of-measure/edit?id=<id>`, con el `id` por parámetro de consulta.

| Campo | Control | Obligatorio | Validación y mensaje |
|-------|---------|-------------|----------------------|
| Nombre | Campo de texto | Sí | Marcado con asterisco; el formulario no renderiza mensajes de error junto al campo. |
| Código | Campo de texto | Sí | Marcado con asterisco; sin mensaje visible. |
| Símbolo | Campo de texto | Sí | Marcado con asterisco; sin mensaje visible. |
| Tipo | Selector | Sí | Opciones: Peso, Volumen, Unidad y Longitud. |
| Factor de conversión | Campo numérico | No | Paso 0.01. |
| Activo | Conmutador | No | Representa el estado de la unidad. |

**Regresar** y **Guardar** en alta; **Actualizar** en edición. 

![Unidad de medida — formulario compartido](/img/screenshots/nomenclaturas/unit-of-measure-formulario.png)

*Captura tomada del backoffice Agrimpex: formulario de alta en `/management/nomenclatures/unit-of-measure/add`.*
