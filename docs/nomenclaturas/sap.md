---
sidebar_position: 15
source_route: /management/nomenclatures/sap/list
source_component: SAPListComponent
status: vigente
---

# Estado de solicitud de importación

## Propósito

Gestiona el nomenclador estado de solicitud de importación del sistema.

## Acceso

- **Menú:** Nomenclaturas → Estado de solicitud de importación
- **Ruta directa:** `/management/nomenclatures/sap/list`
- **Componente:** `SAPListComponent`

> Las rutas `/management/nomenclatures/sap/add` y `/management/nomenclatures/sap/edit` comparten el formulario del nomenclador.

## Captura

![sap — captura real](/img/screenshots/nomenclaturas/sap.png)

*Captura tomada del backoffice Agrimpex.*

## Campos

| Campo | Descripción | Obligatorio |
|-------|-------------|-------------|
| Buscar | Filtro de texto para localizar registros. | No |
| Filtrar | Aplica los filtros seleccionados al listado. | No |
| Nombre | Nombre del elemento de estado de solicitud de importación. | Sí |

## Acciones

| Acción | Botón | Rol | Ruta |
|--------|-------|-----|------|
| Buscar | Buscar | Administrador o Especialista | `/management/nomenclatures/sap/list` |
| Recargar | Recargar | Administrador o Especialista | `/management/nomenclatures/sap/list` |
| Añadir | Añadir | Administrador, Especialista, Logístico o Calidad | `/management/nomenclatures/sap/list/add` |
| Eliminar | Eliminar | Administrador, Especialista, Logístico o Calidad | `/management/nomenclatures/sap/list` |

## Filtros del listado

El panel **Filtrar** tiene **Nombre**, campo de texto, y **Activo**, selector con las opciones **Todas**, **Activo** e **Inactivo**. El panel se abre con el botón **Filtrar** y se cierra con **Limpiar**; no hay botón **Aplicar**, porque los cambios se reflejan al escribir. Junto al panel están la búsqueda genérica **Buscar**, el botón **Recargar** y, cuando el componente lo declara, la exportación **Generar Excel (.xlsx)** y el indicador de sincronización con Recomplus.

![Estado de solicitud de importación — panel de filtros](/img/screenshots/nomenclaturas/sap-filtros.png)

*Captura tomada del backoffice Agrimpex: panel **Filtrar** abierto en `/management/nomenclatures/sap/list`.*

## Operaciones y estados

**Columnas visibles:** **Nombre**, **Activo** y **Acciones**.

**Añadir** abre el alta y el lápiz edita con `/sap/edit?id=<id>`; las rutas no llevan `canAdd`/`canEdit`, así que los botones son visibles para quien tenga acceso al módulo. La columna **Activo** funciona como conmutador. El componente posee un método `delete()`, pero no hay botón **Eliminar** en la plantilla.

| Acción | Botón | Rol | Ruta |
|--------|-------|-----|------|
| Añadir estado | Añadir | Administrador o Especialista (botón sin control de rol) | `/management/nomenclatures/sap/add` |
| Editar estado | Editar (lápiz) | Administrador o Especialista (botón sin control de rol) | `/management/nomenclatures/sap/edit?id=<id>` |
| Cambiar estado | Conmutador Activo | Administrador o Especialista (botón sin control de rol) | `/management/nomenclatures/sap/list` |
| Exportar | Generar Excel (.xlsx) | Administrador o Especialista (botón sin control de rol) | `/management/nomenclatures/sap/list` |



![Estado de solicitud de importación — tabla y acciones del listado](/img/screenshots/nomenclaturas/sap-operaciones.png)

*Captura tomada del backoffice Agrimpex: listado `/management/nomenclatures/sap/list` con sus columnas y acciones.*

## Formulario (alta y edición)

`SAPFormComponent` se comparte entre `/sap/add` y `/sap/edit?id=<id>`; en edición toma el `id` del parámetro de consulta.

| Campo | Control | Obligatorio | Validación y mensaje |
|-------|---------|-------------|----------------------|
| Nombre | Campo de texto | Sí | `required` y patrón sin números: «Campo obligatorio.» o «No se permiten caracteres numéricos (0-9) en este campo.». |
| Activo | Conmutador | No | Determina si el estado está vigente. |

**Regresar** y **Guardar**. 

![Estado de solicitud de importación — formulario compartido](/img/screenshots/nomenclaturas/sap-formulario.png)

*Captura tomada del backoffice Agrimpex: formulario de alta en `/management/nomenclatures/sap/add`.*
