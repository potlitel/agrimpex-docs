---
sidebar_position: 18
source_route: /management/nomenclatures/client/list
source_component: ClientListComponent
status: vigente
---

# Cliente

## Propósito

Gestiona el nomenclador cliente del sistema.

## Acceso

- **Menú:** Nomenclaturas → Cliente
- **Ruta directa:** `/management/nomenclatures/client/list`
- **Componente:** `ClientListComponent`

> El frontend expone únicamente el listado de este nomenclador.

## Captura

![cliente — captura real](/img/screenshots/nomenclaturas/cliente.png)

*Captura tomada del backoffice Agrimpex.*

## Campos

| Campo | Descripción | Obligatorio |
|-------|-------------|-------------|
| Buscar | Filtro de texto para localizar registros. | No |
| Filtrar | Aplica los filtros seleccionados al listado. | No |
| Nombre | Nombre del elemento de cliente. | Sí |

## Acciones

| Acción | Botón | Rol | Ruta |
|--------|-------|-----|------|
| Buscar | Buscar | Administrador o Especialista | `/management/nomenclatures/client/list` |
| Recargar | Recargar | Administrador o Especialista | `/management/nomenclatures/client/list` |

## Filtros del listado

El panel **Filtrar** muestra nueve criterios: **Nombre**, **NIT**, **Codigo Cliente**, **Pais**, **Tipo de Cliente**, **Categoria del Cliente**, **Nacionalidad**, **Termino Societario** y **Tipo de forma gestión**; los selectores de país y forma de gestión cargan sus opciones al inicializarse. Los campos `manager` y `email` existen en el modelo pero no se renderizan. El panel se abre con el botón **Filtrar** y se cierra con **Limpiar**; no hay botón **Aplicar**, porque los cambios se reflejan al escribir. Junto al panel están la búsqueda genérica **Buscar**, el botón **Recargar** y, cuando el componente lo declara, la exportación **Generar Excel (.xlsx)** y el indicador de sincronización con Recomplus.

![Cliente — panel de filtros](/img/screenshots/nomenclaturas/cliente-filtros.png)

*Captura tomada del backoffice Agrimpex: panel **Filtrar** abierto en `/management/nomenclatures/client/list`.*

## Operaciones y estados

**Columnas visibles:** **NIT**, **Nombre**, **Codigo Cliente**, **Pais**, **Categoria del Cliente**, **Tipo de forma gestión**, **Sync** y **Acciones**.

El botón de ojo abre la ficha del cliente y, desde ella, **Asociar direcciones** abre un modal con el selector múltiple «Seleccionar direcciones de descarga» y los botones **Cancelar** y **Guardar**. No hay alta, edición ni eliminación de clientes en el listado; la barra ofrece sincronización y exportación.

| Acción | Botón | Rol | Ruta |
|--------|-------|-----|------|
| Consultar ficha | Ver (ojo) | Administrador o Especialista (botón sin control de rol) | `/management/nomenclatures/client/list` |
| Asociar direcciones de descarga | Asociar direcciones | Administrador | `/management/nomenclatures/client/list` |
| Exportar | Generar Excel (.xlsx) | Administrador o Especialista (botón sin control de rol) | `/management/nomenclatures/client/list` |



![Cliente — tabla y acciones del listado](/img/screenshots/nomenclaturas/cliente-operaciones.png)

*Captura tomada del backoffice Agrimpex: listado `/management/nomenclatures/client/list` con sus columnas y acciones.*

## Excepciones del nomenclador

La ruta `/management/nomenclatures/client` está marcada como pendiente del backend y solo registra `list`. El único formulario observable es el modal de asociación de direcciones dentro de la ficha; no existe formulario de alta ni de edición de clientes.

![Cliente — listado sin operaciones de escritura](/img/screenshots/nomenclaturas/cliente-operaciones.png)

*Captura tomada del backoffice Agrimpex: `/management/nomenclatures/client/list`, único estado disponible en el frontend.*
