---
sidebar_position: 3
source_route: /management/user/add
source_component: UserFormComponent
status: vigente
---

# Formulario de usuarios

## Propósito

Crea un usuario nuevo o modifica los datos de uno existente con el mismo formulario.

## Acceso

- **Menú:** Administración → Formulario de usuarios
- **Ruta directa:** `/management/user/add`
- **Componente:** `UserFormComponent`

> Las rutas `add` y `edit` comparten `UserFormComponent`; la edición precarga el usuario seleccionado.

## Captura

![formulario — captura real](/img/screenshots/administracion/usuarios/formulario.png)

*Captura tomada del backoffice Agrimpex.*

## Campos

| Campo | Descripción | Obligatorio |
|-------|-------------|-------------|
| Nombre | Dato del formulario. | Sí |
| Usuario | Dato del formulario. | Sí |
| Email | Dato del formulario. | Sí |
| Género | Dato del formulario. | Sí |
| Activo | Dato del formulario. | Sí |
| Apellido | Dato del formulario. | Sí |
| Contraseña | Dato del formulario. | Sí |
| Teléfono | Dato del formulario. | Sí |
| Rol | Dato del formulario. | Sí |
| Dni | Dato del formulario. | Sí |
| Grupos | Dato del formulario. | Sí |
| Fecha de nacimiento | Dato del formulario. | Sí |

## Acciones

| Acción | Botón | Rol | Ruta |
|--------|-------|-----|------|
| Crear | Añadir | Administrador | `/management/user/add` |
| Editar | Editar | Administrador | `/management/user/edit` |
| Guardar | Guardar | Administrador | `Formulario actual` |
| Cancelar | Cancelar | Administrador | `Listado del módulo` |
