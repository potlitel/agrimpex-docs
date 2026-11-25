---
sidebar_position: 22
source_route: /management/nomenclatures/product-origin/list
source_component: ProductOriginListComponent
status: vigente
---

# Origen de producto

## Propósito

Gestiona el nomenclador origen de producto del sistema.

## Acceso

- **Menú:** Nomenclaturas → Origen de producto
- **Ruta directa:** `/management/nomenclatures/product-origin/list`
- **Componente:** `ProductOriginListComponent`

> Las rutas `/management/nomenclatures/product-origin/add` y `/management/nomenclatures/product-origin/edit` comparten el formulario del nomenclador.

## Captura

![product-origin — captura real](/img/screenshots/nomenclaturas/product-origin.png)

*Captura tomada del backoffice Agrimpex.*

## Campos

| Campo | Descripción | Obligatorio |
|-------|-------------|-------------|
| Buscar | Filtro de texto para localizar registros. | No |
| Filtrar | Aplica los filtros seleccionados al listado. | No |
| Nombre | Nombre del elemento de origen de producto. | Sí |

## Acciones

| Acción | Botón | Rol | Ruta |
|--------|-------|-----|------|
| Buscar | Buscar | Administrador o Especialista | `/management/nomenclatures/product-origin/list` |
| Recargar | Recargar | Administrador o Especialista | `/management/nomenclatures/product-origin/list` |
| Añadir | Añadir | Administrador, Especialista, Logístico o Calidad | `/management/nomenclatures/product-origin/list/add` |
| Eliminar | Eliminar | Administrador, Especialista, Logístico o Calidad | `/management/nomenclatures/product-origin/list` |

## Filtros del listado

El panel **Filtrar** incluye **Código** y **Nombre**, dos campos de texto. No hay indicador de sincronización en este listado. El panel se abre con el botón **Filtrar** y se cierra con **Limpiar**; no hay botón **Aplicar**, porque los cambios se reflejan al escribir. Junto al panel están la búsqueda genérica **Buscar**, el botón **Recargar** y, cuando el componente lo declara, la exportación **Generar Excel (.xlsx)** y el indicador de sincronización con Recomplus.

![Origen de producto — panel de filtros](/img/screenshots/nomenclaturas/product-origin-filtros.png)

*Captura tomada del backoffice Agrimpex: panel **Filtrar** abierto en `/management/nomenclatures/product-origin/list`.*

## Operaciones y estados

**Columnas visibles:** **Código**, **Nombre**, **País**, **Activo** y **Acciones**.

**Añadir**, el lápiz y la papelera están sujetos a `canAdd`, `canEdit` y `canDelete` sobre `OrigenProducto`; el conmutador de **Activo** cambia el estado y la edición navega a `/product-origin/edit?id=<id>`. Los datos de este nomenclador provienen de un repositorio de pruebas en el frontend.

| Acción | Botón | Rol | Ruta |
|--------|-------|-----|------|
| Añadir origen | Añadir | Administrador | `/management/nomenclatures/product-origin/add` |
| Editar origen | Editar (lápiz) | Administrador; Especialista con permiso de actualización | `/management/nomenclatures/product-origin/edit?id=<id>` |
| Eliminar origen | Eliminar (papelera) | Administrador | `/management/nomenclatures/product-origin/list` |
| Exportar | Generar Excel (.xlsx) | Administrador o Especialista (botón sin control de rol) | `/management/nomenclatures/product-origin/list` |



![Origen de producto — tabla y acciones del listado](/img/screenshots/nomenclaturas/product-origin-operaciones.png)

*Captura tomada del backoffice Agrimpex: listado `/management/nomenclatures/product-origin/list` con sus columnas y acciones.*

## Formulario (alta y edición)

`ProductOriginFormComponent` se usa tanto en `/product-origin/add` como en `/product-origin/edit?id=<id>`; la edición localiza el registro por el parámetro `id`.

| Campo | Control | Obligatorio | Validación y mensaje |
|-------|---------|-------------|----------------------|
| Código | Campo de texto | Sí | `required` y longitud máxima 5; «Campo obligatorio.». |
| Nombre | Campo de texto | Sí | `required` y longitud máxima 100; «Campo obligatorio.». |
| País | Campo de texto libre | No | Longitud máxima 100: no es un selector, se escribe el nombre del país. |
| Activo | Conmutador | No | Representa el estado del origen. |

**Regresar** y **Guardar**. 

![Origen de producto — formulario compartido](/img/screenshots/nomenclaturas/product-origin-formulario.png)

*Captura tomada del backoffice Agrimpex: formulario de alta en `/management/nomenclatures/product-origin/add`.*
