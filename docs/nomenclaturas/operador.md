---
sidebar_position: 11
source_route: /management/nomenclatures/operator/list
source_component: OperatorListComponent
status: vigente
---

# Operador

## Propósito

Gestiona el nomenclador operador del sistema.

## Acceso

- **Menú:** Nomenclaturas → Operador
- **Ruta directa:** `/management/nomenclatures/operator/list`
- **Componente:** `OperatorListComponent`

> Las rutas `/management/nomenclatures/operator/add` y `/management/nomenclatures/operator/edit` comparten el formulario del nomenclador.

## Captura

![operador — captura real](/img/screenshots/nomenclaturas/operador.png)

*Captura tomada del backoffice Agrimpex.*

## Campos

| Campo | Descripción | Obligatorio |
|-------|-------------|-------------|
| Buscar | Filtro de texto para localizar registros. | No |
| Filtrar | Aplica los filtros seleccionados al listado. | No |
| Nombre | Nombre del elemento de operador. | Sí |

## Acciones

| Acción | Botón | Rol | Ruta |
|--------|-------|-----|------|
| Buscar | Buscar | Administrador o Especialista | `/management/nomenclatures/operator/list` |
| Recargar | Recargar | Administrador o Especialista | `/management/nomenclatures/operator/list` |
| Añadir | Añadir | Administrador, Especialista, Logístico o Calidad | `/management/nomenclatures/operator/list/add` |
| Eliminar | Eliminar | Administrador, Especialista, Logístico o Calidad | `/management/nomenclatures/operator/list` |

## Filtros del listado

El panel **Filtrar** tiene siete controles: **Nombre** (texto), **Trámites documentarios**, **Emisión del BL (Bill of Lading)**, **Demora en devolución Contenedor seco**, **Demora en devolución contenedor refrigerado**, **Días libres contenedor seco** y **Días libres contenedor refrigerado** (los seis últimos, campos numéricos). No hay filtro por estado. El indicador `resourceKey="transporte"` resume la sincronización con Recomplus. El panel se abre con el botón **Filtrar** y se cierra con **Limpiar**; no hay botón **Aplicar**, porque los cambios se reflejan al escribir. Junto al panel están la búsqueda genérica **Buscar**, el botón **Recargar** y, cuando el componente lo declara, la exportación **Generar Excel (.xlsx)** y el indicador de sincronización con Recomplus.

![Operador — panel de filtros](/img/screenshots/nomenclaturas/operador-filtros.png)

*Captura tomada del backoffice Agrimpex: panel **Filtrar** abierto en `/management/nomenclatures/operator/list`.*

## Operaciones y estados

**Columnas visibles:** **Nombre**, **Moneda**, **Trámites documentarios**, **Emisión del BL (Bill of Lading)**, **Demora en devolución Contenedor seco**, **Demora en devolución contenedor refrigerado**, **Días libres contenedor seco**, **Días libres contenedor refrigerado**, **Estado**, **Sync** y **Acciones**.

La tabla es más ancha que la zona visible y se desplaza horizontalmente para alcanzar **Acciones**. **Añadir** y el lápiz se muestran según `canAdd`/`canEdit` sobre `Operador`; la edición abre `/operator/edit?id=<id>`. Las rutas de alta y edición llevan `canDeactivate`, que avisa de los cambios sin guardar. No hay botón **Eliminar**.

| Acción | Botón | Rol | Ruta |
|--------|-------|-----|------|
| Añadir operador | Añadir | Administrador | `/management/nomenclatures/operator/add` |
| Editar operador | Editar (lápiz) | Administrador; Especialista con permiso de actualización | `/management/nomenclatures/operator/edit?id=<id>` |
| Exportar | Generar Excel (.xlsx) | Administrador o Especialista (botón sin control de rol) | `/management/nomenclatures/operator/list` |



![Operador — tabla y acciones del listado](/img/screenshots/nomenclaturas/operador-operaciones.png)

*Captura tomada del backoffice Agrimpex: listado `/management/nomenclatures/operator/list` con sus columnas y acciones.*

## Formulario (alta y edición)

`OperatorFormComponent` se comparte entre `/operator/add` y `/operator/edit?id=<id>` y reúne nueve campos. El guardián `canDeactivate` conserva el borrador y pregunta si se descartan los cambios al salir.

| Campo | Control | Obligatorio | Validación y mensaje |
|-------|---------|-------------|----------------------|
| Nombre | Campo de texto | Sí | `required` → «Campo obligatorio.»; el bloque de error comprueba por error la clave `currency`. |
| Moneda | Selector de monedas | Sí | `required` → «Campo obligatorio.». |
| Trámites documentarios | Campo numérico | Sí | `required`, mínimo 0.01, patrón con hasta dos decimales; «Ingrese un número válido con hasta 2 decimales». |
| Emisión del BL (Bill of Lading) | Campo numérico | Sí | Mismas reglas que Trámites documentarios. |
| Demora en devolución Contenedor seco | Campo numérico | Sí | `required`, mínimo 0.01 y hasta dos decimales. |
| Demora en devolución contenedor refrigerado | Campo numérico | Sí | `required`, mínimo 0.01 y hasta dos decimales. |
| Días libres contenedor seco | Campo numérico | Sí | `required`, mínimo 1, solo enteros; «Ingrese un número entero válido». |
| Días libres contenedor refrigerado | Campo numérico | Sí | `required`, mínimo 1, solo enteros. |
| Activo | Conmutador | No | Representa el estado del operador. |

**Regresar** y **Guardar**. Si hay cambios sin guardar aparece el diálogo «Estado previo» / «Cambios sin guardar».

![Operador — formulario compartido](/img/screenshots/nomenclaturas/operador-formulario.png)

*Captura tomada del backoffice Agrimpex: formulario de alta en `/management/nomenclatures/operator/add`.*
