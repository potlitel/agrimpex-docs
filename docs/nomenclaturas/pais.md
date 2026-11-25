---
sidebar_position: 7
source_route: /management/nomenclatures/country/list
source_component: CountryListComponent
status: vigente
---

# País

## Propósito

Gestiona el nomenclador país del sistema.

## Acceso

- **Menú:** Nomenclaturas → País
- **Ruta directa:** `/management/nomenclatures/country/list`
- **Componente:** `CountryListComponent`

> Las rutas `/management/nomenclatures/country/add` y `/management/nomenclatures/country/edit` comparten el formulario del nomenclador.

## Captura

![pais — captura real](/img/screenshots/nomenclaturas/pais.png)

*Captura tomada del backoffice Agrimpex.*

## Campos

| Campo | Descripción | Obligatorio |
|-------|-------------|-------------|
| Buscar | Filtro de texto para localizar registros. | No |
| Filtrar | Aplica los filtros seleccionados al listado. | No |
| Nombre | Nombre del elemento de país. | Sí |

## Acciones

| Acción | Botón | Rol | Ruta |
|--------|-------|-----|------|
| Buscar | Buscar | Administrador o Especialista | `/management/nomenclatures/country/list` |
| Recargar | Recargar | Administrador o Especialista | `/management/nomenclatures/country/list` |
| Añadir | Añadir | Administrador, Especialista, Logístico o Calidad | `/management/nomenclatures/country/list/add` |
| Eliminar | Eliminar | Administrador, Especialista, Logístico o Calidad | `/management/nomenclatures/country/list` |

## Filtros del listado

El panel **Filtrar** permite buscar por **Nombre** y por **Código**, ambos campos de texto. El indicador Recomplus con `resourceKey="pais"` informa del estado de sincronización de cada fila. El panel se abre con el botón **Filtrar** y se cierra con **Limpiar**; no hay botón **Aplicar**, porque los cambios se reflejan al escribir. Junto al panel están la búsqueda genérica **Buscar**, el botón **Recargar** y, cuando el componente lo declara, la exportación **Generar Excel (.xlsx)** y el indicador de sincronización con Recomplus.

![País — panel de filtros](/img/screenshots/nomenclaturas/pais-filtros.png)

*Captura tomada del backoffice Agrimpex: panel **Filtrar** abierto en `/management/nomenclatures/country/list`.*

## Operaciones y estados

**Columnas visibles:** **Nombre**, **Código**, **Sync** y **Acciones**.

**Añadir**, editar y eliminar están sujetos a `canAdd`, `canEdit` y `canDelete` sobre el recurso `Pais`; la edición abre `/country/edit?id=<id>`. La columna **Sync** muestra el resultado de la sincronización con Recomplus.

| Acción | Botón | Rol | Ruta |
|--------|-------|-----|------|
| Añadir país | Añadir | Administrador | `/management/nomenclatures/country/add` |
| Editar país | Editar (lápiz) | Administrador; Especialista con permiso de actualización | `/management/nomenclatures/country/edit?id=<id>` |
| Eliminar país | Eliminar (papelera) | Administrador | `/management/nomenclatures/country/list` |
| Exportar | Generar Excel (.xlsx) | Administrador o Especialista (botón sin control de rol) | `/management/nomenclatures/country/list` |



![País — tabla y acciones del listado](/img/screenshots/nomenclaturas/pais-operaciones.png)

*Captura tomada del backoffice Agrimpex: listado `/management/nomenclatures/country/list` con sus columnas y acciones.*

## Formulario (alta y edición)

`CountryFormComponent` es compartido por `/country/add` y `/country/edit?id=<id>`.

| Campo | Control | Obligatorio | Validación y mensaje |
|-------|---------|-------------|----------------------|
| Nombre | Campo de texto | Sí | `required` con patrón sin números: «Campo obligatorio.» o «No se permiten caracteres numéricos (0-9) en este campo.». |
| Código | Campo de texto | Sí | `required` → «Campo obligatorio.» |

**Regresar** al listado y **Guardar**. 

![País — formulario compartido](/img/screenshots/nomenclaturas/pais-formulario.png)

*Captura tomada del backoffice Agrimpex: formulario de alta en `/management/nomenclatures/country/add`.*
