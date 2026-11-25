---
sidebar_position: 17
source_route: /management/nomenclatures/oferta/list
source_component: OfertaListComponent
status: vigente
---

# Oferta

## Propósito

Gestiona el nomenclador oferta del sistema.

## Acceso

- **Menú:** Nomenclaturas → Oferta
- **Ruta directa:** `/management/nomenclatures/oferta/list`
- **Componente:** `OfertaListComponent`

> El frontend expone únicamente el listado de este nomenclador.

## Captura

![oferta — captura real](/img/screenshots/nomenclaturas/oferta.png)

*Captura tomada del backoffice Agrimpex.*

## Campos

| Campo | Descripción | Obligatorio |
|-------|-------------|-------------|
| Buscar | Filtro de texto para localizar registros. | No |
| Filtrar | Aplica los filtros seleccionados al listado. | No |
| Nombre | Nombre del elemento de oferta. | Sí |

## Acciones

| Acción | Botón | Rol | Ruta |
|--------|-------|-----|------|
| Buscar | Buscar | Administrador o Especialista | `/management/nomenclatures/oferta/list` |
| Recargar | Recargar | Administrador o Especialista | `/management/nomenclatures/oferta/list` |

## Filtros del listado

El panel **Filtrar** ofrece siete criterios: **No. Oferta**, **No. Compra**, **Proveedor**, **Estado**, **Clasificación de Compra**, **Comercial** y **Combinada En**. **Estado** es un selector con Registrado, Pendiente de Revision, Aprobado, En Proceso y Reofertado. El panel se abre con el botón **Filtrar** y se cierra con **Limpiar**; no hay botón **Aplicar**, porque los cambios se reflejan al escribir. Junto al panel están la búsqueda genérica **Buscar**, el botón **Recargar** y, cuando el componente lo declara, la exportación **Generar Excel (.xlsx)** y el indicador de sincronización con Recomplus.

![Oferta — panel de filtros](/img/screenshots/nomenclaturas/oferta-filtros.png)

*Captura tomada del backoffice Agrimpex: panel **Filtrar** abierto en `/management/nomenclatures/oferta/list`.*

## Operaciones y estados

**Columnas visibles:** **No. Oferta**, **Estado**, **Proveedor**, **Moneda**, **Fecha de Oferta**, **Creado por**, **Sync** y **Acciones**.

La única acción por fila es el ojo, que despliega el detalle en una hoja lateral con **Cerrar**; también están el indicador de sincronización y **Generar Excel (.xlsx)**. El enrutador no registra formularios: `/oferta/list` es el único destino posible.

| Acción | Botón | Rol | Ruta |
|--------|-------|-----|------|
| Consultar detalle | Ver (ojo) | Administrador o Especialista (botón sin control de rol) | `/management/nomenclatures/oferta/list` |
| Exportar | Generar Excel (.xlsx) | Administrador o Especialista (botón sin control de rol) | `/management/nomenclatures/oferta/list` |



![Oferta — tabla y acciones del listado](/img/screenshots/nomenclaturas/oferta-operaciones.png)

*Captura tomada del backoffice Agrimpex: listado `/management/nomenclatures/oferta/list` con sus columnas y acciones.*

## Excepciones del nomenclador

No hay rutas `add` ni `edit` ni componente de formulario para ofertas. La edición y el alta no están disponibles en el frontend; solo se pueden filtrar, consultar y exportar las ofertas existentes.

![Oferta — listado sin operaciones de escritura](/img/screenshots/nomenclaturas/oferta-operaciones.png)

*Captura tomada del backoffice Agrimpex: `/management/nomenclatures/oferta/list`, único estado disponible en el frontend.*
