---
sidebar_position: 9
source_route: /management/nomenclatures/state/list
source_component: StateListComponent
status: vigente
---

# Estado

## Propósito

Gestiona el nomenclador estado del sistema.

## Acceso

- **Menú:** Nomenclaturas → Estado
- **Ruta directa:** `/management/nomenclatures/state/list`
- **Componente:** `StateListComponent`

> Las rutas `/management/nomenclatures/state/add` y `/management/nomenclatures/state/edit` comparten el formulario del nomenclador.

## Captura

![estado — captura real](/img/screenshots/nomenclaturas/estado.png)

*Captura tomada del backoffice Agrimpex.*

## Campos

| Campo | Descripción | Obligatorio |
|-------|-------------|-------------|
| Buscar | Filtro de texto para localizar registros. | No |
| Filtrar | Aplica los filtros seleccionados al listado. | No |
| Nombre | Nombre del elemento de estado. | Sí |

## Acciones

| Acción | Botón | Rol | Ruta |
|--------|-------|-----|------|
| Buscar | Buscar | Administrador o Especialista | `/management/nomenclatures/state/list` |
| Recargar | Recargar | Administrador o Especialista | `/management/nomenclatures/state/list` |
| Añadir | Añadir | Administrador, Especialista, Logístico o Calidad | `/management/nomenclatures/state/list/add` |
| Eliminar | Eliminar | Administrador, Especialista, Logístico o Calidad | `/management/nomenclatures/state/list` |

## Filtros del listado

El panel **Filtrar** ofrece **Nombre**, campo de texto, y **Activo**, conmutador para separar estados vigentes de inactivos. El panel se abre con el botón **Filtrar** y se cierra con **Limpiar**; no hay botón **Aplicar**, porque los cambios se reflejan al escribir. Junto al panel están la búsqueda genérica **Buscar**, el botón **Recargar** y, cuando el componente lo declara, la exportación **Generar Excel (.xlsx)** y el indicador de sincronización con Recomplus.

![Estado — panel de filtros](/img/screenshots/nomenclaturas/estado-filtros.png)

*Captura tomada del backoffice Agrimpex: panel **Filtrar** abierto en `/management/nomenclatures/state/list`.*

## Operaciones y estados

**Columnas visibles:** **Nombre**, **País**, **Activo** y **Acciones**.

**Añadir** y la edición se comprueban con `canAdd`/`canEdit` sobre `Estado`; no hay botón **Eliminar** y la edición abre `/state/edit?id=<id>`. La regla especial del formulario se refleja en el listado: si Estados Unidos no figura entre los países disponibles, el componente muestra el panel «Error de configuración» con el texto «No se puede proceder: USA no está disponible en la lista de países. Contacte al administrador del sistema.».

| Acción | Botón | Rol | Ruta |
|--------|-------|-----|------|
| Añadir estado | Añadir | Administrador | `/management/nomenclatures/state/add` |
| Editar estado | Editar (lápiz) | Administrador; Especialista con permiso de actualización | `/management/nomenclatures/state/edit?id=<id>` |
| Cambiar estado | Conmutador Activo | Administrador; Especialista con permiso de actualización | `/management/nomenclatures/state/list` |
| Exportar | Generar Excel (.xlsx) | Administrador o Especialista (botón sin control de rol) | `/management/nomenclatures/state/list` |



![Estado — tabla y acciones del listado](/img/screenshots/nomenclaturas/estado-operaciones.png)

*Captura tomada del backoffice Agrimpex: listado `/management/nomenclatures/state/list` con sus columnas y acciones.*

## Formulario (alta y edición)

`StateFormComponent` atiende `/state/add` y `/state/edit?id=<id>`; el `id` viaja como parámetro de consulta.

| Campo | Control | Obligatorio | Validación y mensaje |
|-------|---------|-------------|----------------------|
| Nombre | Campo de texto | Sí | `required` y patrón sin números; mensajes «Campo obligatorio.» y «No se permiten caracteres numéricos (0-9) en este campo.». |
| País | Selector de países | Sí | `required` → «Campo obligatorio.». Si USA está presente, el valor se fuerza a USA y el control queda deshabilitado. |
| Activo | Conmutador | No | Valor inicial `true`. |

**Regresar** y **Guardar**; **Guardar** se deshabilita si no está USA o el formulario es inválido. El panel de error de configuración aparece antes de cualquier guardado cuando falta USA.

![Estado — formulario compartido](/img/screenshots/nomenclaturas/estado-formulario.png)

*Captura tomada del backoffice Agrimpex: formulario de alta en `/management/nomenclatures/state/add`.*
