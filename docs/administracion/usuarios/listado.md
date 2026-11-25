---
sidebar_position: 2
source_route: /management/user/list
source_component: UserListComponent
status: vigente
---

# Listado de usuarios

## Propósito

Consulta, filtra y administra las cuentas de usuario del sistema.

## Acceso

- **Menú:** Administración → Listado de usuarios
- **Ruta directa:** `/management/user/list`
- **Componente:** `UserListComponent`

## Captura

![listado — captura real](/img/screenshots/administracion/usuarios/listado.png)

*Captura tomada del backoffice Agrimpex.*

## Campos

| Campo | Descripción | Obligatorio |
|-------|-------------|-------------|
| Buscar | Filtro de texto para localizar registros. | No |
| Filtrar | Aplica los filtros seleccionados al listado. | No |
| Nombre | Nombre del usuario. | No |
| Usuario | Nombre de usuario. | No |
| Email | Correo electrónico. | No |
| Activo | Estado de la cuenta. | No |
| Rol | Rol asignado. | No |
| Grupos | Grupos asociados. | No |

## Acciones

| Acción | Botón | Rol | Ruta |
|--------|-------|-----|------|
| Buscar | Buscar | Administrador | `/management/user/list` |
| Recargar | Recargar | Administrador | `/management/user/list` |
| Añadir | Añadir | Administrador, Especialista, Logístico o Calidad | `/management/user/list/add` |
| Eliminar | Eliminar | Administrador, Especialista, Logístico o Calidad | `/management/user/list` |


## Filtros del listado

El botón **Filtrar** de la barra de herramientas abre un panel lateral (`ui-table-filter-sheet`) con cuatro criterios. Los cambios se aplican de forma reactiva tras 650 ms de inactividad y se descartan los valores vacíos antes de enviarlos a la tabla. El rango de fechas solo se aplica cuando se han elegido las dos fechas; si falta alguna, se ignora.

| Filtro | Control | Valores admitidos | Efecto |
|--------|---------|-------------------|--------|
| Género | Selector (`ui-select`, control `gender`) | Los valores de `AVAILABLE_GENDERS`; placeholder «Seleccionar». | Muestra solo las cuentas del género elegido. |
| Rol | Selector (`ui-select`, control `groups_roles`) | Los roles disponibles en el sistema (`AVAILABLE_ROLES`); placeholder «Seleccionar». | Reduce la tabla a los usuarios con ese rol. |
| Último acceso | Campo de texto con selector de rango (`mwlFlatpickr`, `mode="range"`) | Dos fechas, desde y hasta. | Envía `after` con el inicio del día elegido y `before` con el final del día elegido, de modo que incluye jornadas completas. |
| Activo | Interruptor (`hlm-switch`, control `enabled`) | Sin valor, activo o inactivo. | Filtra por estado de la cuenta; sin marcar no restringe los resultados. |

Además del panel, el campo **Buscar** de la tabla realiza una búsqueda rápida sobre correo electrónico y nombre completo (`email`, `fullName`). El pie del panel ofrece **Limpiar**, habilitado solo cuando hay filtros activos: restablece los cuatro criterios y la ordenación de las columnas.

![Usuarios — panel de filtros abierto sobre el listado](/img/screenshots/administracion/usuarios/listado-filtros.png)

*Captura tomada del backoffice Agrimpex con el panel «Filtrar» abierto.*


## Operaciones y estados

Las filas muestran Nombre, Email, Rol, Área, Último acceso, Activo y la columna de acciones alineada a la derecha; el correo es un enlace `mailto:` y el estado se manipula con un interruptor. La tabla pagina los resultados y permite ordenar por nombre, email y estado.

| Operación | Botón | Rol | Ruta o condición |
|-----------|-------|-----|------------------|
| Alta | **Añadir**, en la barra de herramientas | Administrador | `/management/user/add` |
| Edición | Icono lápiz de la fila | Administrador | `/management/user/edit/?id=<id>`; el `id` se envía como parámetro de consulta. |
| Envío de correo | Enlace sobre la dirección de la columna Email | Administrador | Abre el cliente de correo con `mailto:`; no navega dentro del backoffice. |
| Activación y desactivación | Interruptor de la columna Activo | Administrador | `toggleUser` → `toggleState(id, valor)`; si la API falla, el interruptor vuelve a su estado anterior y se muestra un aviso de error. |
| Eliminación | — | — | El componente conserva `deleteUser()` con confirmación, pero el botón de papelera está comentado en la plantilla: no hay eliminación visible desde este listado. |

El interruptor está deshabilitado para la propia cuenta (`authIsCurrentUserId` sobre el IRI) y para cualquier usuario con `ROLE_ADMIN` (`isAdminUser`), de modo que un administrador no puede desactivarse a sí mismo ni desactivar a otro administrador desde la tabla. El guard de la rama `user` (`AccessGuardCanMatchFn`) restringe el segmento a `ROLE_ADMIN`, por lo que, aunque el inventario declara también otros roles para **Añadir** y **Eliminar**, en la aplicación solo un administrador alcanza estas pantallas.

![Usuarios — tabla del listado con la columna de acciones a la vista](/img/screenshots/administracion/usuarios/listado-operaciones.png)

*Captura tomada del backoffice Agrimpex con la columna de acciones visible.*
