---
sidebar_position: 19
source_route: /management/nomenclatures/supplier/list
source_component: SupplierListComponent
status: vigente
---

# Proveedor

## Propósito

Gestiona el nomenclador proveedor del sistema.

## Acceso

- **Menú:** Nomenclaturas → Proveedor
- **Ruta directa:** `/management/nomenclatures/supplier/list`
- **Componente:** `SupplierListComponent`

> El frontend expone únicamente el listado de este nomenclador.

## Captura

![proveedor — captura real](/img/screenshots/nomenclaturas/proveedor.png)

*Captura tomada del backoffice Agrimpex.*

## Campos

| Campo | Descripción | Obligatorio |
|-------|-------------|-------------|
| Buscar | Filtro de texto para localizar registros. | No |
| Filtrar | Aplica los filtros seleccionados al listado. | No |
| Nombre | Nombre del elemento de proveedor. | Sí |

## Acciones

| Acción | Botón | Rol | Ruta |
|--------|-------|-----|------|
| Buscar | Buscar | Administrador o Especialista | `/management/nomenclatures/supplier/list` |
| Recargar | Recargar | Administrador o Especialista | `/management/nomenclatures/supplier/list` |

## Filtros del listado

El panel **Filtrar** tiene nueve campos: **Nombre de la compañía**, **No. MINCEX**, **Denominacion**, **Codigo Proveedor**, **Pais**, **Tipo de Proveedor**, **Categoria del Proveedor**, **Nacionalidad** y **Termino Societario**. Los selectores cargan sus opciones al abrirse. El panel se abre con el botón **Filtrar** y se cierra con **Limpiar**; no hay botón **Aplicar**, porque los cambios se reflejan al escribir. Junto al panel están la búsqueda genérica **Buscar**, el botón **Recargar** y, cuando el componente lo declara, la exportación **Generar Excel (.xlsx)** y el indicador de sincronización con Recomplus.

![Proveedor — panel de filtros](/img/screenshots/nomenclaturas/proveedor-filtros.png)

*Captura tomada del backoffice Agrimpex: panel **Filtrar** abierto en `/management/nomenclatures/supplier/list`.*

## Operaciones y estados

**Columnas visibles:** **No. MINCEX**, **Nombre de la compañía**, **Codigo Proveedor**, **Categoria del Proveedor**, **País**, **Sync** y **Acciones**.

Las filas se abren en una hoja lateral de consulta con **Cerrar**. No aparecen botones **Añadir**, **Editar** ni **Eliminar**: el enrutador solo declara la ruta `list` y el módulo está pendiente de backend. Están disponibles el indicador de sincronización y la exportación.

| Acción | Botón | Rol | Ruta |
|--------|-------|-----|------|
| Consultar detalle | Ver (ojo) | Administrador o Especialista (botón sin control de rol) | `/management/nomenclatures/supplier/list` |
| Exportar | Generar Excel (.xlsx) | Administrador o Especialista (botón sin control de rol) | `/management/nomenclatures/supplier/list` |



![Proveedor — tabla y acciones del listado](/img/screenshots/nomenclaturas/proveedor-operaciones.png)

*Captura tomada del backoffice Agrimpex: listado `/management/nomenclatures/supplier/list` con sus columnas y acciones.*

## Excepciones del nomenclador

`/management/nomenclatures/supplier/list` es la única ruta registrada. Los proveedores pueden consultarse y exportarse, pero el frontend no ofrece formulario de alta ni de edición.

![Proveedor — listado sin operaciones de escritura](/img/screenshots/nomenclaturas/proveedor-operaciones.png)

*Captura tomada del backoffice Agrimpex: `/management/nomenclatures/supplier/list`, único estado disponible en el frontend.*
