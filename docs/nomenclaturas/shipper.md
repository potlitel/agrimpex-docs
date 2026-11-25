---
sidebar_position: 24
source_route: /management/nomenclatures/shipper/list
source_component: ShipperListComponent
status: vigente
---

# Embarcador

## Propósito

Gestiona el nomenclador embarcador del sistema.

## Acceso

- **Menú:** Nomenclaturas → Embarcador
- **Ruta directa:** `/management/nomenclatures/shipper/list`
- **Componente:** `ShipperListComponent`

> Las rutas `/management/nomenclatures/shipper/add` y `/management/nomenclatures/shipper/edit` comparten el formulario del nomenclador.

## Captura

![shipper — captura real](/img/screenshots/nomenclaturas/shipper.png)

*Captura tomada del backoffice Agrimpex.*

## Campos

| Campo | Descripción | Obligatorio |
|-------|-------------|-------------|
| Buscar | Filtro de texto para localizar registros. | No |
| Filtrar | Aplica los filtros seleccionados al listado. | No |
| Nombre | Nombre del elemento de embarcador. | Sí |

## Acciones

| Acción | Botón | Rol | Ruta |
|--------|-------|-----|------|
| Buscar | Buscar | Administrador o Especialista | `/management/nomenclatures/shipper/list` |
| Recargar | Recargar | Administrador o Especialista | `/management/nomenclatures/shipper/list` |
| Añadir | Añadir | Administrador, Especialista, Logístico o Calidad | `/management/nomenclatures/shipper/list/add` |
| Eliminar | Eliminar | Administrador, Especialista, Logístico o Calidad | `/management/nomenclatures/shipper/list` |

## Filtros del listado

El panel **Filtrar** tiene **NIT** y **Nombre**, dos campos de texto; no hay indicador de sincronización en la barra. El panel se abre con el botón **Filtrar** y se cierra con **Limpiar**; no hay botón **Aplicar**, porque los cambios se reflejan al escribir. Junto al panel están la búsqueda genérica **Buscar**, el botón **Recargar** y, cuando el componente lo declara, la exportación **Generar Excel (.xlsx)** y el indicador de sincronización con Recomplus.

![Embarcador — panel de filtros](/img/screenshots/nomenclaturas/shipper-filtros.png)

*Captura tomada del backoffice Agrimpex: panel **Filtrar** abierto en `/management/nomenclatures/shipper/list`.*

## Operaciones y estados

**Columnas visibles:** **NIT**, **Nombre**, **País**, **Contacto**, **Teléfono** y **Acciones** (las filas incluyen una celda final con lápiz y papelera).

**Añadir**, editar y eliminar están sujetos a `canAdd`, `canEdit` y `canDelete` sobre `Embarcador`; el conmutador cambia el estado y la edición usa `/shipper/edit?id=<id>`.

| Acción | Botón | Rol | Ruta |
|--------|-------|-----|------|
| Añadir embarcador | Añadir | Administrador | `/management/nomenclatures/shipper/add` |
| Editar embarcador | Editar (lápiz) | Administrador; Especialista con permiso de actualización | `/management/nomenclatures/shipper/edit?id=<id>` |
| Eliminar embarcador | Eliminar (papelera) | Administrador | `/management/nomenclatures/shipper/list` |
| Exportar | Generar Excel (.xlsx) | Administrador o Especialista (botón sin control de rol) | `/management/nomenclatures/shipper/list` |



![Embarcador — tabla y acciones del listado](/img/screenshots/nomenclaturas/shipper-operaciones.png)

*Captura tomada del backoffice Agrimpex: listado `/management/nomenclatures/shipper/list` con sus columnas y acciones.*

## Formulario (alta y edición)

`ShipperFormComponent` atiende `/shipper/add` y `/shipper/edit?id=<id>`; el selector de países se rellena con las opciones cargadas al iniciar.

| Campo | Control | Obligatorio | Validación y mensaje |
|-------|---------|-------------|----------------------|
| NIT | Campo de texto | Sí | `required` → «Campo obligatorio.». |
| Nombre | Campo de texto | Sí | `required` y longitud máxima 200. |
| País | Selector de países | No | Opciones cargadas al inicializar; placeholder «Seleccionar opción». |
| Contacto | Campo de texto | No | Sin validadores declarados. |
| Teléfono | Campo de texto | No | Sin validadores declarados. |
| Email | Campo de texto | No | Sin validadores declarados. |
| Activo | Conmutador | No | Representa el estado del embarcador. |

**Regresar** y **Guardar**. 

![Embarcador — formulario compartido](/img/screenshots/nomenclaturas/shipper-formulario.png)

*Captura tomada del backoffice Agrimpex: formulario de alta en `/management/nomenclatures/shipper/add`.*
