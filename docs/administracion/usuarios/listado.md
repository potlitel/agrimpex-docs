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
