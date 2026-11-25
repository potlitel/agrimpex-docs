---
sidebar_position: 29
source_route: /logistic/specialist-suppliers/list
source_component: SpecialistListComponent
status: vigente
---

# Listado de especialistas

## Propósito

Consulta los especialistas disponibles para asignar a importaciones.

## Acceso

- **Menú:** Logística → Listado de especialistas
- **Ruta directa:** `/logistic/specialist-suppliers/list`
- **Componente:** `SpecialistListComponent`

## Captura

![listado — captura real](/img/screenshots/logistica/especialistas/listado.png)

*Captura tomada del backoffice Agrimpex.*

## Campos

| Campo | Descripción | Obligatorio |
|-------|-------------|-------------|
| Buscar | Filtro de texto para localizar registros. | No |
| Filtrar | Aplica los filtros seleccionados al listado. | No |
| Nombre | Nombre del especialista. | No |
| Teléfono | Teléfono de contacto. | No |
| Activo | Disponibilidad del especialista. | No |

## Acciones

| Acción | Botón | Rol | Ruta |
|--------|-------|-----|------|
| Buscar | Buscar | Administrador, Especialista, Logístico o Calidad | `/logistic/specialist-suppliers/list` |
| Recargar | Recargar | Administrador, Especialista, Logístico o Calidad | `/logistic/specialist-suppliers/list` |
| Añadir | Añadir | Administrador, Especialista, Logístico o Calidad | `/logistic/specialist-suppliers/list/add` |
| Eliminar | Eliminar | Administrador, Especialista, Logístico o Calidad | `/logistic/specialist-suppliers/list` |

## Filtros del listado

`/logistic/specialist-suppliers/list` carece de conmutador de terminal. El panel **Filtrar** ofrece **Nombre**, **Email** y el interruptor **Activo**; los criterios se aplican con breve retardo. El listado incluye búsqueda, recarga, **Generar Excel (.xlsx)** con selección de campos y el botón **Añadir** para los roles con permiso de escritura.

![Especialistas — panel de filtros](/img/screenshots/logistica/especialistas/listado-filtros.png)

*Captura tomada del backoffice Agrimpex: filtros del listado de especialistas.*

## Operaciones y estados

Las columnas son **Nombre**, **Email**, **Teléfono** —con `-` cuando falta—, **Proveedores asignados**, **Activo** y **Acciones**. El interruptor de activo solo se puede cambiar con permiso de edición; al desactivar un especialista con proveedores asignados se pregunta «¿Inhabilitar Especialista?» e informa del número de proveedores que quedarían sin supervisión, con botones **Sí, inhabilitar** y **Cancelar**. El lápiz abre `/logistic/specialist-suppliers/edit?id=<id>` —identificador por parámetro de consulta— y no hay eliminación. Los estados se limitan a activo e inactivo.

![Especialistas — acciones de la tabla](/img/screenshots/logistica/especialistas/listado-operaciones.png)

*Captura tomada del backoffice Agrimpex: proveedores asignados, interruptor de activo y edición.*

## Formulario (alta y edición)

El alta usa `/logistic/specialist-suppliers/add` y la edición `edit?id=<id>`; también existe la ruta `edit/:id`, que carga el mismo componente compartido. El formulario no tiene panel de filtros. Al guardar se muestra «Operación completada correctamente» y se regresa al listado.

![Especialistas — acceso al formulario](/img/screenshots/logistica/especialistas/listado-operaciones.png)

*Captura tomada del backoffice Agrimpex: edición con `id` por parámetro de consulta.*
