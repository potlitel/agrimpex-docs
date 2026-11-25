---
sidebar_position: 31
source_route: /management/nomenclatures/brand/list
source_component: BrandListComponent
status: vigente
---

# Marca

## Propósito

Gestiona el nomenclador marca del sistema.

## Acceso

- **Menú:** Nomenclaturas → Marca
- **Ruta directa:** `/management/nomenclatures/brand/list`
- **Componente:** `BrandListComponent`

> Las rutas `/management/nomenclatures/brand/add` y `/management/nomenclatures/brand/edit` comparten el formulario del nomenclador.

## Captura

![brand — captura real](/img/screenshots/nomenclaturas/brand.png)

*Captura tomada del backoffice Agrimpex.*

## Campos

| Campo | Descripción | Obligatorio |
|-------|-------------|-------------|
| Buscar | Filtro de texto para localizar registros. | No |
| Filtrar | Aplica los filtros seleccionados al listado. | No |
| Nombre | Nombre del elemento de marca. | Sí |

## Acciones

| Acción | Botón | Rol | Ruta |
|--------|-------|-----|------|
| Buscar | Buscar | Administrador o Especialista | `/management/nomenclatures/brand/list` |
| Recargar | Recargar | Administrador o Especialista | `/management/nomenclatures/brand/list` |
| Añadir | Añadir | Administrador, Especialista, Logístico o Calidad | `/management/nomenclatures/brand/list/add` |
| Eliminar | Eliminar | Administrador, Especialista, Logístico o Calidad | `/management/nomenclatures/brand/list` |

## Filtros del listado

El panel **Filtrar** incluye **Nombre** y **Descripción**, dos campos de texto. El panel se abre con el botón **Filtrar** y se cierra con **Limpiar**; no hay botón **Aplicar**, porque los cambios se reflejan al escribir. Junto al panel están la búsqueda genérica **Buscar**, el botón **Recargar** y, cuando el componente lo declara, la exportación **Generar Excel (.xlsx)** y el indicador de sincronización con Recomplus.

![Marca — panel de filtros](/img/screenshots/nomenclaturas/brand-filtros.png)

*Captura tomada del backoffice Agrimpex: panel **Filtrar** abierto en `/management/nomenclatures/brand/list`.*

## Operaciones y estados

**Columnas visibles:** **Nombre**, **Descripción**, **Activo** y **Acciones**; la celda de **Activo** muestra **Sí** o **No** y no es un conmutador..

**Añadir** depende de `canAdd` sobre `Marca`. La edición navega a `/brand/edit/<id>` por segmento de ruta y la papelera elimina la marca; no hay conmutador de estado en la tabla.

| Acción | Botón | Rol | Ruta |
|--------|-------|-----|------|
| Añadir marca | Añadir | Administrador | `/management/nomenclatures/brand/add` |
| Editar marca | Editar (lápiz) | Administrador o Especialista (botón sin control de rol) | `/management/nomenclatures/brand/edit/<id>` |
| Eliminar marca | Eliminar (papelera) | Administrador o Especialista (botón sin control de rol) | `/management/nomenclatures/brand/list` |
| Exportar | Generar Excel (.xlsx) | Administrador o Especialista (botón sin control de rol) | `/management/nomenclatures/brand/list` |



![Marca — tabla y acciones del listado](/img/screenshots/nomenclaturas/brand-operaciones.png)

*Captura tomada del backoffice Agrimpex: listado `/management/nomenclatures/brand/list` con sus columnas y acciones.*

## Formulario (alta y edición)

`BrandFormComponent` sirve para `/brand/add` y `/brand/edit/<id>`; el `id` se toma del segmento de la ruta.

| Campo | Control | Obligatorio | Validación y mensaje |
|-------|---------|-------------|----------------------|
| Nombre | Campo de texto | Sí | `required` y longitud máxima 100; «Campo obligatorio.». |
| Descripción | Área de texto | No | Longitud máxima 500. |
| Activo | Conmutador | No | Representa el estado de la marca. |

**Regresar** y **Guardar** en los dos modos. En este nomenclador la edición se resuelve con datos de prueba (`MOCK_BRANDS`) y el envío muestra una confirmación, sin mutación GraphQL.

![Marca — formulario compartido](/img/screenshots/nomenclaturas/brand-formulario.png)

*Captura tomada del backoffice Agrimpex: formulario de alta en `/management/nomenclatures/brand/add`.*
