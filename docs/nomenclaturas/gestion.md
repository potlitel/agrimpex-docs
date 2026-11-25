---
sidebar_position: 20
source_route: /management/nomenclatures/management-type/list
source_component: ManagementTypeListComponent
status: vigente
---

# Tipo de forma de gestión

## Propósito

Gestiona el nomenclador tipo de forma de gestión del sistema.

## Acceso

- **Menú:** Nomenclaturas → Tipo de forma de gestión
- **Ruta directa:** `/management/nomenclatures/management-type/list`
- **Componente:** `ManagementTypeListComponent`

> El frontend expone únicamente el listado de este nomenclador.

## Captura

![gestion — captura real](/img/screenshots/nomenclaturas/gestion.png)

*Captura tomada del backoffice Agrimpex.*

## Campos

| Campo | Descripción | Obligatorio |
|-------|-------------|-------------|
| Buscar | Filtro de texto para localizar registros. | No |
| Filtrar | Aplica los filtros seleccionados al listado. | No |
| Nombre | Nombre del elemento de tipo de forma de gestión. | Sí |

## Acciones

| Acción | Botón | Rol | Ruta |
|--------|-------|-----|------|
| Buscar | Buscar | Administrador o Especialista | `/management/nomenclatures/management-type/list` |
| Recargar | Recargar | Administrador o Especialista | `/management/nomenclatures/management-type/list` |

## Filtros del listado

El panel **Filtrar** contiene un solo criterio, **Nombre**, un campo de texto que filtra las formas de gestión por su denominación. El panel se abre con el botón **Filtrar** y se cierra con **Limpiar**; no hay botón **Aplicar**, porque los cambios se reflejan al escribir. Junto al panel están la búsqueda genérica **Buscar**, el botón **Recargar** y, cuando el componente lo declara, la exportación **Generar Excel (.xlsx)** y el indicador de sincronización con Recomplus.

![Tipo de forma de gestión — panel de filtros](/img/screenshots/nomenclaturas/gestion-filtros.png)

*Captura tomada del backoffice Agrimpex: panel **Filtrar** abierto en `/management/nomenclatures/management-type/list`.*

## Operaciones y estados

**Columnas visibles:** **Nombre** y **Sync**.

La tabla no incluye cabecera **Acciones** ni botones por fila: cada celda muestra el nombre y su estado de sincronización con Recomplus. La barra incluye la exportación; no hay alta, edición ni eliminación.

| Acción | Botón | Rol | Ruta |
|--------|-------|-----|------|
| Exportar | Generar Excel (.xlsx) | Administrador o Especialista (botón sin control de rol) | `/management/nomenclatures/management-type/list` |



![Tipo de forma de gestión — tabla y acciones del listado](/img/screenshots/nomenclaturas/gestion-operaciones.png)

*Captura tomada del backoffice Agrimpex: listado `/management/nomenclatures/management-type/list` con sus columnas y acciones.*

## Excepciones del nomenclador

El grupo está pendiente del backend y solo expone `/management/nomenclatures/management-type/list`. No hay rutas de formulario ni acciones de escritura: el listado se limita a consultar y exportar.

![Tipo de forma de gestión — listado sin operaciones de escritura](/img/screenshots/nomenclaturas/gestion-filtros.png)

*Captura tomada del backoffice Agrimpex: `/management/nomenclatures/management-type/list`, único estado disponible en el frontend.*
