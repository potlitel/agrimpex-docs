---
sidebar_position: 30
source_route: /logistic/specialist-suppliers/add
source_component: SpecialistFormComponent
status: vigente
---

# Formulario de especialistas

## Propósito

Crea o edita un especialista con el mismo formulario.

## Acceso

- **Menú:** Logística → Formulario de especialistas
- **Ruta directa:** `/logistic/specialist-suppliers/add`
- **Componente:** `SpecialistFormComponent`

## Captura

![formulario — captura real](/img/screenshots/logistica/especialistas/formulario.png)

*Captura tomada del backoffice Agrimpex.*

## Campos

| Campo | Descripción | Obligatorio |
|-------|-------------|-------------|
| Nombre | Dato del formulario. | Sí |
| Teléfono | Dato del formulario. | Sí |
| Correo electrónico | Dato del formulario. | Sí |
| Activo | Dato del formulario. | Sí |

## Acciones

| Acción | Botón | Rol | Ruta |
|--------|-------|-----|------|
| Crear | Añadir | Administrador, Especialista, Logístico o Calidad | `/logistic/specialist-suppliers/add` |
| Editar | Editar | Administrador, Especialista, Logístico o Calidad | `/logistic/specialist-suppliers/edit` |
| Guardar | Guardar | Administrador, Especialista, Logístico o Calidad | `Formulario actual` |
| Cancelar | Cancelar | Administrador, Especialista, Logístico o Calidad | `Listado del módulo` |

## Filtros del listado

El formulario de especialista no incluye el panel **Filtrar**: se abre desde `/logistic/specialist-suppliers/add` o desde el lápiz del listado con `edit?id=<id>`. El selector **Especialista** funciona como búsqueda entre los usuarios habilitados: en alta solo se ofrecen quienes no tienen proveedores asignados y, si no hay ninguno, aparecen los avisos «No existen especialistas dados de alta en el sistema.» o «Todos los especialistas tienen actualmente proveedores asignados…». El selector de **Proveedores asignados** muestra los disponibles en alta y todos en edición.

![Especialistas — datos del formulario](/img/screenshots/logistica/especialistas/formulario-formulario-general.png)

*Captura tomada del backoffice Agrimpex: selector de especialista e interruptor de activo.*

## Operaciones y estados

El interruptor **Activo** está activado por defecto. Asignar proveedores es obligatorio, con un mínimo de uno y el mensaje «Campo obligatorio.» si falta. Si el formulario guarda un estado previo sin confirmar, aparece «Estado previo» con «Continuar» o «Descartar». **Regresar** vuelve al listado con aviso de cambios sin guardar y **Guardar** confirma la operación. No hay botón de eliminación.

![Especialistas — proveedores asignados](/img/screenshots/logistica/especialistas/formulario-formulario-proveedores.png)

*Captura tomada del backoffice Agrimpex: selector múltiple de proveedores.*

## Formulario (alta y edición)

Las rutas `add`, `edit` y `edit/:id` montan el mismo `SpecialistFormComponent`. En alta se elige un especialista sin proveedores y se le asignan los disponibles; en edición el selector de especialista se deshabilita después de cargar el registro y se actualizan únicamente los proveedores y el estado activo. La descripción del formulario indica «Seleccione un especialista sin proveedores asignados y asígnele proveedores.» en alta y «Actualice los proveedores asignados al especialista seleccionado.» en edición.

![Especialistas — formulario compartido por add y edit](/img/screenshots/logistica/especialistas/formulario-formulario-general.png)

*Captura tomada del backoffice Agrimpex: formulario reutilizado por las tres rutas de edición.*
