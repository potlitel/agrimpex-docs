---
sidebar_position: 26
source_route: /management/nomenclatures/airport/list
source_component: AirportListComponent
status: vigente
---

# Aeropuerto

## Propósito

Gestiona el nomenclador aeropuerto del sistema.

## Acceso

- **Menú:** Nomenclaturas → Aeropuerto
- **Ruta directa:** `/management/nomenclatures/airport/list`
- **Componente:** `AirportListComponent`

> Las rutas `/management/nomenclatures/airport/add` y `/management/nomenclatures/airport/edit` comparten el formulario del nomenclador.

## Captura

![airport — captura real](/img/screenshots/nomenclaturas/airport.png)

*Captura tomada del backoffice Agrimpex.*

## Campos

| Campo | Descripción | Obligatorio |
|-------|-------------|-------------|
| Buscar | Filtro de texto para localizar registros. | No |
| Filtrar | Aplica los filtros seleccionados al listado. | No |
| Nombre | Nombre del elemento de aeropuerto. | Sí |

## Acciones

| Acción | Botón | Rol | Ruta |
|--------|-------|-----|------|
| Buscar | Buscar | Administrador o Especialista | `/management/nomenclatures/airport/list` |
| Recargar | Recargar | Administrador o Especialista | `/management/nomenclatures/airport/list` |
| Añadir | Añadir | Administrador, Especialista, Logístico o Calidad | `/management/nomenclatures/airport/list/add` |
| Eliminar | Eliminar | Administrador, Especialista, Logístico o Calidad | `/management/nomenclatures/airport/list` |

## Filtros del listado

El panel **Filtrar** reúne **Código**, **Nombre** y **Ciudad**, tres campos de texto; la búsqueda genérica se aplica sobre nombre, código y ciudad. El panel se abre con el botón **Filtrar** y se cierra con **Limpiar**; no hay botón **Aplicar**, porque los cambios se reflejan al escribir. Junto al panel están la búsqueda genérica **Buscar**, el botón **Recargar** y, cuando el componente lo declara, la exportación **Generar Excel (.xlsx)** y el indicador de sincronización con Recomplus.

![Aeropuerto — panel de filtros](/img/screenshots/nomenclaturas/airport-filtros.png)

*Captura tomada del backoffice Agrimpex: panel **Filtrar** abierto en `/management/nomenclatures/airport/list`.*

## Operaciones y estados

**Columnas visibles:** **Código**, **Nombre**, **Ciudad**, **País**, **Activo** y **Acciones**.

**Añadir** está sujeto a `canAdd` sobre `Aeropuerto`; el lápiz de edición no lleva control de rol y abre `/airport/edit?id=<id>`. El conmutador de **Activo** exige `canEdit`; no hay botón **Eliminar** en la tabla.

| Acción | Botón | Rol | Ruta |
|--------|-------|-----|------|
| Añadir aeropuerto | Añadir | Administrador | `/management/nomenclatures/airport/add` |
| Editar aeropuerto | Editar (lápiz) | Administrador o Especialista (botón sin control de rol) | `/management/nomenclatures/airport/edit?id=<id>` |
| Cambiar estado | Conmutador Activo | Administrador; Especialista con permiso de actualización | `/management/nomenclatures/airport/list` |
| Exportar | Generar Excel (.xlsx) | Administrador o Especialista (botón sin control de rol) | `/management/nomenclatures/airport/list` |



![Aeropuerto — tabla y acciones del listado](/img/screenshots/nomenclaturas/airport-operaciones.png)

*Captura tomada del backoffice Agrimpex: listado `/management/nomenclatures/airport/list` con sus columnas y acciones.*

## Formulario (alta y edición)

`AirportFormComponent` da servicio a `/airport/add` y `/airport/edit?id=<id>`; el identificador de edición se recibe por parámetro de consulta.

| Campo | Control | Obligatorio | Validación y mensaje |
|-------|---------|-------------|----------------------|
| Código | Campo de texto | Sí | `required` y longitud máxima 10; «Campo obligatorio.». |
| Nombre | Campo de texto | Sí | `required` y longitud máxima 150; «Campo obligatorio.». |
| País | Selector de países | Sí | `required` → «Campo obligatorio.». |
| Ciudad | Campo de texto | No | Sin validadores declarados. |
| Activo | Conmutador | No | Representa el estado del aeropuerto. |

**Regresar** al listado; **Guardar** en alta y **Actualizar** en edición. 

![Aeropuerto — formulario compartido](/img/screenshots/nomenclaturas/airport-formulario.png)

*Captura tomada del backoffice Agrimpex: formulario de alta en `/management/nomenclatures/airport/add`.*
