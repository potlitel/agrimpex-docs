---
sidebar_position: 3
source_route: /security/trace/list
source_component: TraceListComponent
status: vigente
---

# Listado de trazabilidad

## Propósito

Consulta los eventos de trazabilidad registrados en el sistema.

## Acceso

- **Menú:** Seguridad → Listado de trazabilidad
- **Ruta directa:** `/security/trace/list`
- **Componente:** `TraceListComponent`

## Captura

![listado — captura real](/img/screenshots/seguridad/trazabilidad/listado.png)

*Captura tomada del backoffice Agrimpex.*

## Campos

| Campo | Descripción | Obligatorio |
|-------|-------------|-------------|
| Buscar | Filtro de texto para localizar registros. | No |
| Filtrar | Aplica los filtros seleccionados al listado. | No |
| Contenedor | Identificador del contenedor. | No |
| No. BL | Conocimiento de embarque. | No |
| Estado | Estado del evento. | No |

## Acciones

| Acción | Botón | Rol | Ruta |
|--------|-------|-----|------|
| Buscar | Buscar | Administrador o Especialista | `/security/trace/list` |
| Recargar | Recargar | Administrador o Especialista | `/security/trace/list` |

## Filtros del listado

El botón **Filtrar** de la barra de herramientas abre un panel lateral (`ui-table-filter-sheet`) con ocho criterios declarados en `formFilter`. Los cambios se aplican de forma reactiva tras 650 ms de inactividad, se descartan los valores vacíos y el botón **Limpiar** restablece los criterios y la ordenación.

| Filtro | Control | Valores admitidos | Efecto |
|--------|---------|-------------------|--------|
| Usuario | Campo de texto (`userIdentifier`) | Texto libre; coincide con el identificador de usuario. | Reduce la tabla a las trazas de ese usuario; es también el campo de búsqueda rápida (`USER_IDENTIFIER`). |
| Rol | Selector (`ui-select`, control `userRole`) | Los roles disponibles (`AVAILABLE_ROLES`); placeholder «Seleccionar». | Muestra solo los eventos realizados con el rol elegido. |
| Fecha de Creación | Campo de texto con selector de rango (`mwlFlatpickr`, `mode="range"`) | Dos fechas, desde y hasta; placeholder «Seleccionar». | Envía `after` con el inicio del día elegido y `before` con el final del día elegido. Si falta alguna fecha, el rango se ignora. |
| Modulo | Selector (`ui-select`, control `module`) precedido de un campo **Buscar** que filtra las opciones | `AVAILABLE_MODULES` más los módulos que lleguen por parámetro de URL. | Limita los eventos al módulo seleccionado; el campo de búsqueda solo filtra la lista de opciones. |
| Acción | Selector (`ui-select`, control `action`) | `CREATE`, `UPDATE` y `DELETE`. | Muestra únicamente las trazas con esa acción. |
| Entidad | Campo de texto (`entityClass`), ejemplo `App\Entity\Client` | Nombre de clase, completo o abreviado. | Se normaliza al nombre corto tras la última `\` porque el backend aplica `LIKE` sobre `entityClass`. |
| ID Entidad | Campo de texto (`entityId`) | Identificador de la entidad auditada. | Aísla los eventos de un registro concreto. |
| ID Correlación | Campo de texto (`correlationId`) | Identificador de correlación de la traza. | Permite localizar la traza asociada a una notificación; se precarga desde el parámetro `traceId` de la URL. |

Además del panel, la tabla muestra las columnas Usuario, Rol, Fecha de Creación, Modulo, Acción, Entidad, ID Entidad y Cambios, y ofrece un campo **Buscar** para localizar registros por identificador de usuario. Las columnas y los filtros son de solo lectura: no hay altas, ediciones ni borrados desde este listado.

![Listado de trazabilidad — panel de filtros abierto en el backoffice Agrimpex](/img/screenshots/seguridad/trazabilidad/listado-filtros.png)

*Captura tomada del backoffice Agrimpex con el panel «Filtrar» abierto.*

## Operaciones y estados

Solo están disponibles las operaciones de consulta, para **Administrador o Especialista**:

| Operación | Control | Condición y efecto |
|-----------|---------|--------------------|
| Búsqueda rápida | Campo **Buscar** de la tabla | Filtra sobre `USER_IDENTIFIER`, el único campo declarado como searchable por el repositorio de trazas. Se combina con los filtros del panel. |
| Recarga | Botón **Recargar** | Vuelve a consultar el listado con el filtro y la ordenación vigentes. |
| Diferencias | Botón **1 cambio** / **N cambios** de la columna **Cambios** | Se muestra solo cuando la traza tiene `oldValues` o `newValues`; si no hay cambios, la celda muestra «-». Abre el diálogo de comparación. |

El diálogo de diferencias presenta una tabla **Campo | Antes | Después** construida desde los valores antiguos y nuevos de la traza. Los campos que ya no existen se marcan como «eliminado»; los valores que son referencias a entidades se resuelven a etiquetas legibles cuando el catálogo está disponible. El pie del diálogo muestra usuario, rol, acción, fecha, IP e ID de correlación. Se cierra con el botón **X** de la cabecera.

No hay operaciones de escritura: el componente no ofrece altas, ediciones, borrados ni cambios de estado, y las acciones de la tabla se limitan a consultar el evento y sus diferencias.

![Listado de trazabilidad — columna de cambios y acciones en el backoffice Agrimpex](/img/screenshots/seguridad/trazabilidad/listado-operaciones.png)

*Captura tomada del backoffice Agrimpex con la columna «Cambios» visible al desplazar la tabla.*
