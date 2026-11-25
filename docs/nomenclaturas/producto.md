---
sidebar_position: 14
source_route: /management/nomenclatures/product/list
source_component: ProductListComponent
status: vigente
---

# Producto

## Propósito

Gestiona el nomenclador producto del sistema.

## Acceso

- **Menú:** Nomenclaturas → Producto
- **Ruta directa:** `/management/nomenclatures/product/list`
- **Componente:** `ProductListComponent`

> Las rutas `/management/nomenclatures/product/add` y `/management/nomenclatures/product/edit` comparten el formulario del nomenclador.

## Captura

![producto — captura real](/img/screenshots/nomenclaturas/producto.png)

*Captura tomada del backoffice Agrimpex.*

## Campos

| Campo | Descripción | Obligatorio |
|-------|-------------|-------------|
| Buscar | Filtro de texto para localizar registros. | No |
| Filtrar | Aplica los filtros seleccionados al listado. | No |
| Nombre | Nombre del elemento de producto. | Sí |

## Acciones

| Acción | Botón | Rol | Ruta |
|--------|-------|-----|------|
| Buscar | Buscar | Administrador o Especialista | `/management/nomenclatures/product/list` |
| Recargar | Recargar | Administrador o Especialista | `/management/nomenclatures/product/list` |
| Añadir | Añadir | Administrador, Especialista, Logístico o Calidad | `/management/nomenclatures/product/list/add` |
| Eliminar | Eliminar | Administrador, Especialista, Logístico o Calidad | `/management/nomenclatures/product/list` |

## Filtros del listado

El panel **Filtrar** reúne **Nombre**, **Código**, **Descripción** y **Codigo de Catalogo** como campos de texto, además de **Linea de Producto** y **Tipo de Producto** como selectores cargados desde consultas comunes. El indicador de Recomplus y el botón de exportación completan la barra de herramientas. El panel se abre con el botón **Filtrar** y se cierra con **Limpiar**; no hay botón **Aplicar**, porque los cambios se reflejan al escribir. Junto al panel están la búsqueda genérica **Buscar**, el botón **Recargar** y, cuando el componente lo declara, la exportación **Generar Excel (.xlsx)** y el indicador de sincronización con Recomplus.

![Producto — panel de filtros](/img/screenshots/nomenclaturas/producto-filtros.png)

*Captura tomada del backoffice Agrimpex: panel **Filtrar** abierto en `/management/nomenclatures/product/list`.*

## Operaciones y estados

**Columnas visibles:** **Código**, **Nombre**, **Descripción**, **Linea de Producto**, **Unidad de Medida**, **Sync** y **Acciones**.

Las filas solo ofrecen el botón de detalle (ojo), que abre una hoja lateral con las secciones «Informacion General», «Clasificacion Arancelaria», «Descripciones» y «Otros» y un botón **Cerrar**. El componente no dibuja botones **Añadir**, **Editar** ni **Eliminar**, aunque el enrutador sí registra `/product/add` y `/product/edit`; el único control de permiso del listado es `canSync` sobre `Productos`.

| Acción | Botón | Rol | Ruta |
|--------|-------|-----|------|
| Consultar detalle | Ver (ojo) | Administrador o Especialista (botón sin control de rol) | `/management/nomenclatures/product/list` |
| Exportar | Generar Excel (.xlsx) | Administrador o Especialista (botón sin control de rol) | `/management/nomenclatures/product/list` |

Las acciones de escritura no están accesibles desde este listado: el alta y la edición solo pueden alcanzarse escribiendo la ruta directamente.

![Producto — tabla y acciones del listado](/img/screenshots/nomenclaturas/producto-operaciones.png)

*Captura tomada del backoffice Agrimpex: listado `/management/nomenclatures/product/list` con sus columnas y acciones.*

## Formulario (alta y edición)

Aunque la tabla no ofrece accesos, `/product/add` y `/product/edit?id=<id>` cargan `ProductFormComponent`; el identificador se recibe como parámetro de consulta.

| Campo | Control | Obligatorio | Validación y mensaje |
|-------|---------|-------------|----------------------|
| Nombre | Campo de texto | Sí | `required` y validación sin números: «Campo obligatorio.» o «No se permiten caracteres numéricos (0-9) en este campo.». |
| Código | Campo de texto | No | Sin validadores declarados. |
| Descripción | Área de texto | No | Sin validadores declarados. |

**Regresar** y **Guardar**; tras guardar vuelve a `/management/nomenclatures/product`. 

![Producto — formulario compartido](/img/screenshots/nomenclaturas/producto-formulario.png)

*Captura tomada del backoffice Agrimpex: formulario de alta en `/management/nomenclatures/product/add`.*
