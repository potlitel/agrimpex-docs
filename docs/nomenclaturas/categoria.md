---
sidebar_position: 33
source_route: /management/nomenclatures/categoria/list
source_component: CategoriaListComponent
status: vigente
---

# Categoría

## Propósito

Gestiona el nomenclador categoría del sistema.

## Acceso

- **Menú:** Nomenclaturas → Categoría
- **Ruta directa:** `/management/nomenclatures/categoria/list`
- **Componente:** `CategoriaListComponent`

> Las rutas `/management/nomenclatures/categoria/add` y `/management/nomenclatures/categoria/edit` comparten el formulario del nomenclador.

## Captura

![categoria — captura real](/img/screenshots/nomenclaturas/categoria.png)

*Captura tomada del backoffice Agrimpex.*

## Campos

| Campo | Descripción | Obligatorio |
|-------|-------------|-------------|
| Buscar | Filtro de texto para localizar registros. | No |
| Filtrar | Aplica los filtros seleccionados al listado. | No |
| Nombre | Nombre del elemento de categoría. | Sí |

## Acciones

| Acción | Botón | Rol | Ruta |
|--------|-------|-----|------|
| Buscar | Buscar | Administrador o Especialista | `/management/nomenclatures/categoria/list` |
| Recargar | Recargar | Administrador o Especialista | `/management/nomenclatures/categoria/list` |
| Añadir | Añadir | Administrador, Especialista, Logístico o Calidad | `/management/nomenclatures/categoria/list/add` |
| Eliminar | Eliminar | Administrador, Especialista, Logístico o Calidad | `/management/nomenclatures/categoria/list` |

## Filtros del listado

El panel **Filtrar** ofrece **Código** y **Nombre**, ambos campos de texto; la búsqueda genérica se aplica a esos dos campos. El panel se abre con el botón **Filtrar** y se cierra con **Limpiar**; no hay botón **Aplicar**, porque los cambios se reflejan al escribir. Junto al panel están la búsqueda genérica **Buscar**, el botón **Recargar** y, cuando el componente lo declara, la exportación **Generar Excel (.xlsx)** y el indicador de sincronización con Recomplus.

![Categoría — panel de filtros](/img/screenshots/nomenclaturas/categoria-filtros.png)

*Captura tomada del backoffice Agrimpex: panel **Filtrar** abierto en `/management/nomenclatures/categoria/list`.*

## Operaciones y estados

**Columnas visibles:** **Código**, **Nombre** y **Acciones**.

**Añadir** se comprueba con `canAdd` sobre `Categoria`; la edición abre `/categoria/edit/<id>` como segmento de ruta y la papelera elimina la categoría.

| Acción | Botón | Rol | Ruta |
|--------|-------|-----|------|
| Añadir categoría | Añadir | Administrador | `/management/nomenclatures/categoria/add` |
| Editar categoría | Editar (lápiz) | Administrador o Especialista (botón sin control de rol) | `/management/nomenclatures/categoria/edit/<id>` |
| Eliminar categoría | Eliminar (papelera) | Administrador o Especialista (botón sin control de rol) | `/management/nomenclatures/categoria/list` |
| Exportar | Generar Excel (.xlsx) | Administrador o Especialista (botón sin control de rol) | `/management/nomenclatures/categoria/list` |



![Categoría — tabla y acciones del listado](/img/screenshots/nomenclaturas/categoria-operaciones.png)

*Captura tomada del backoffice Agrimpex: listado `/management/nomenclatures/categoria/list` con sus columnas y acciones.*

## Formulario (alta y edición)

`CategoriaFormComponent` se usa en `/categoria/add` y `/categoria/edit/<id>`; el identificador forma parte de la ruta.

| Campo | Control | Obligatorio | Validación y mensaje |
|-------|---------|-------------|----------------------|
| Código | Campo de texto | Sí | `required` con `maxlength="2"`; «Campo obligatorio.» o «Este valor es demasiado largo…». |
| Nombre | Campo de texto | Sí | `required` y longitud máxima 200; «Campo obligatorio.». |

**Regresar** y **Guardar** en ambos modos. 

![Categoría — formulario compartido](/img/screenshots/nomenclaturas/categoria-formulario.png)

*Captura tomada del backoffice Agrimpex: formulario de alta en `/management/nomenclatures/categoria/add`.*
