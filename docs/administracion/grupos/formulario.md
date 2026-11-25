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


## Formulario (alta y edición)

Las rutas `/management/group/add` y `/management/group/edit/:id` comparten `GroupFormComponent`: en alta se abre vacío y en edición se precarga el grupo indicado por el segmento de ruta, que se convierte a IRI antes de consultarse. El grupo por defecto queda excluido de la edición porque el listado oculta su botón de lápiz, de modo que no se puede llegar a `edit/:id` para él.

| Campo | Control | Obligatorio | Observaciones |
|-------|---------|-------------|---------------|
| Nombre (`name`) | Texto (`hlmInput`) | Sí | Marcado con asterisco y validador `required`; muestra los errores devueltos por la API. |
| Activo (`active`) | Interruptor (`hlm-switch`) | No | Valor inicial `true`. En el listado, el grupo por defecto tiene este interruptor deshabilitado. |
| Roles (`roles`) | Selector múltiple `ng-select` | Sí | Marcado con asterisco. Las opciones son los roles disponibles en el sistema (`AVAILABLE_ROLES`: usuario, administrador, especialista, consultor, gerente de comercio exterior, especialista principal, calidad y logístico); cada opción muestra su nombre traducido. Placeholder «Seleccionar». |

La descripción de la tarjeta cambia según la acción: «Ingrese la información requerida para crear un nuevo grupo.» en alta y «Actualice los permisos del grupo seleccionado.» en edición. El pie ofrece **Regresar**, que vuelve a `/management/group`, y **Guardar**; tras guardar se muestra «Operación completada correctamente» y se regresa al listado, mientras que un fallo de validación o de la mutación produce un aviso de error.

![Grupos — formulario compartido por las rutas add y edit/:id](/img/screenshots/administracion/grupos/formulario-formulario-general.png)

*Captura tomada del backoffice Agrimpex en `/management/group/add`.*
