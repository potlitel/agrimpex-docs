---
sidebar_position: 1
source_route: /management/group
source_component: GroupManagementPage
status: vigente
---

# Administración

## Propósito

Punto de entrada a la gestión de usuarios, grupos y herramientas de apoyo.

## Acceso

- **Menú:** Administración → Administración
- **Ruta directa:** `/management/group`
- **Componente:** `GroupManagementPage`

## Captura

![index — captura real](/img/screenshots/administracion/index.png)

*Captura tomada del backoffice Agrimpex.*

## Campos

| Campo | Descripción | Obligatorio |
|-------|-------------|-------------|
| Nombre | Nombre del recurso. | No |
| Activo | Estado del recurso. | No |

## Acciones

| Acción | Botón | Rol | Ruta |
|--------|-------|-----|------|
| Ir a usuarios | Buscar | Administrador | `/management/user/list` |
| Ir a grupos | Buscar | Administrador | `/management/group/list` |
| Ir al asistente | Acceder | Todo usuario autenticado | `/ai-assistant` |


## Mapa del módulo

`GroupManagementPage` y `UserManagementPage` son contenedores con un único `router-outlet`: no tienen controles propios. El enrutador monta bajo `/management` las ramas `group` y `user`, mientras que `/ai-assistant` es una rama independiente. La ruta vacía y la ruta comodín de cada contenedor redirigen a `list`: en particular, al abrir `/management/group` se muestra el listado de grupos en `/management/group/list`.

| Destino | Ruta | Rol | Contenido |
|---------|------|-----|-----------|
| Inicio de Administración | `/management/group` → `/management/group/list` | Administrador | Contenedor de grupos; la ruta vacía redirige al listado. |
| Listado de usuarios | `/management/user/list` | Administrador | Tabla de cuentas con búsqueda, panel **Filtrar** y acciones por fila. |
| Formulario de usuarios | `/management/user/add` y `/management/user/edit?id=<id>` | Administrador | Alta y edición comparten `UserFormComponent`; el identificador viaja por parámetro de consulta. |
| Listado de grupos | `/management/group/list` | Administrador | Tabla de grupos con búsqueda, recarga y acciones por fila. |
| Formulario de grupos | `/management/group/add` y `/management/group/edit/:id` | Administrador | Alta y edición comparten `GroupFormComponent`; el identificador viaja por segmento de ruta. |
| Asistente IA | `/ai-assistant` | Todo usuario autenticado | Panel de chat con sugerencias, consultas e historial. |

El guard `AccessGuardCanMatchFn` restringe los segmentos raíz `group` y `user` a `ROLE_ADMIN`; la rama `ai-assistant` no declara guard de rol y está disponible para cualquier usuario con sesión válida. Las rutas `add` y `edit` de usuarios también registran `AccessGuardCanDeactivateFn`, que avisa si hay cambios sin guardar.

![Administración — listado de usuarios del mapa del módulo](/img/screenshots/administracion/index-mapa-usuarios.png)

*Captura tomada del backoffice Agrimpex: destino `/management/user/list`.*

![Administración — listado de grupos del mapa del módulo](/img/screenshots/administracion/index-mapa-grupos.png)

*Captura tomada del backoffice Agrimpex: `/management/group` redirige a `/management/group/list`.*

![Administración — asistente IA del mapa del módulo](/img/screenshots/administracion/index-mapa-asistente.png)

*Captura tomada del backoffice Agrimpex: destino `/ai-assistant`.*
