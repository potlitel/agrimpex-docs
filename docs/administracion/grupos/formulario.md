---
sidebar_position: 5
source_route: /management/group/add
source_component: GroupFormComponent
status: vigente
---

# Formulario de grupos

## Propósito

Crea un grupo nuevo o edita uno existente con el mismo formulario.

## Acceso

- **Menú:** Administración → Formulario de grupos
- **Ruta directa:** `/management/group/add`
- **Componente:** `GroupFormComponent`

> Las rutas `add` y `edit/:id` comparten `GroupFormComponent`.

## Captura

![formulario — captura real](/img/screenshots/administracion/grupos/formulario.png)

*Captura tomada del backoffice Agrimpex.*

## Campos

| Campo | Descripción | Obligatorio |
|-------|-------------|-------------|
| Nombre | Dato del formulario. | Sí |
| Activo | Dato del formulario. | Sí |
| Roles | Dato del formulario. | Sí |

## Acciones

| Acción | Botón | Rol | Ruta |
|--------|-------|-----|------|
| Crear | Añadir | Administrador | `/management/group/add` |
| Editar | Editar | Administrador | `/management/group/edit/:id` |
| Guardar | Guardar | Administrador | `Formulario actual` |
| Cancelar | Cancelar | Administrador | `Listado del módulo` |
