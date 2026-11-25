---
sidebar_position: 21
source_route: /management/nomenclatures/product-line/list
source_component: ProductLineListComponent
status: vigente
---

# Línea de productos

## Propósito

Gestiona el nomenclador línea de productos del sistema.

## Acceso

- **Menú:** Nomenclaturas → Línea de productos
- **Ruta directa:** `/management/nomenclatures/product-line/list`
- **Componente:** `ProductLineListComponent`

> El frontend expone únicamente el listado de este nomenclador.

## Captura

![product-line — captura real](/img/screenshots/nomenclaturas/product-line.png)

*Captura tomada del backoffice Agrimpex.*

## Campos

| Campo | Descripción | Obligatorio |
|-------|-------------|-------------|
| Buscar | Filtro de texto para localizar registros. | No |
| Filtrar | Aplica los filtros seleccionados al listado. | No |
| Nombre | Nombre del elemento de línea de productos. | Sí |

## Acciones

| Acción | Botón | Rol | Ruta |
|--------|-------|-----|------|
| Buscar | Buscar | Administrador o Especialista | `/management/nomenclatures/product-line/list` |
| Recargar | Recargar | Administrador o Especialista | `/management/nomenclatures/product-line/list` |

## Filtros del listado

El panel **Filtrar** ofrece **Código** y **Nombre**, ambos campos de texto, acompañados del indicador de sincronización y de la exportación. El panel se abre con el botón **Filtrar** y se cierra con **Limpiar**; no hay botón **Aplicar**, porque los cambios se reflejan al escribir. Junto al panel están la búsqueda genérica **Buscar**, el botón **Recargar** y, cuando el componente lo declara, la exportación **Generar Excel (.xlsx)** y el indicador de sincronización con Recomplus.

![Línea de productos — panel de filtros](/img/screenshots/nomenclaturas/product-line-filtros.png)

*Captura tomada del backoffice Agrimpex: panel **Filtrar** abierto en `/management/nomenclatures/product-line/list`.*

## Operaciones y estados

**Columnas visibles:** **Código**, **Nombre**, **Descripción**, **Sync** y **Activo**.

El botón **Añadir** y las rutas `add`/`edit` están comentados en el código, por lo que no se muestran en pantalla. La única acción por fila es el conmutador de **Activo**, condicionado a `canEdit` sobre `LineaProducto`; no hay lápiz de edición ni papelera.

| Acción | Botón | Rol | Ruta |
|--------|-------|-----|------|
| Cambiar estado | Conmutador Activo | Administrador; Especialista con permiso de actualización | `/management/nomenclatures/product-line/list` |
| Exportar | Generar Excel (.xlsx) | Administrador o Especialista (botón sin control de rol) | `/management/nomenclatures/product-line/list` |

El formulario `ProductLineFormComponent` existe en el proyecto pero no es alcanzable: sus rutas están comentadas y el botón de alta no se renderiza.

![Línea de productos — tabla y acciones del listado](/img/screenshots/nomenclaturas/product-line-operaciones.png)

*Captura tomada del backoffice Agrimpex: listado `/management/nomenclatures/product-line/list` con sus columnas y acciones.*

## Excepciones del nomenclador

Las rutas `/product-line/add` y `/product-line/edit` están comentadas en `routes.ts` y el botón **Añadir** aparece dentro de un bloque HTML comentado. Aunque el componente de formulario existe y prevé **Código**, **Nombre**, **Descripción** y **Activo**, el frontend no lo expone: solo se puede consultar el listado, filtrar, cambiar el estado y exportar.

![Línea de productos — listado sin operaciones de escritura](/img/screenshots/nomenclaturas/product-line-operaciones.png)

*Captura tomada del backoffice Agrimpex: `/management/nomenclatures/product-line/list`, único estado disponible en el frontend.*
