---
sidebar_position: 34
source_route: /management/nomenclatures/margen-comercial/list
source_component: MargenComercialListComponent
status: vigente
---

# Margen comercial

## Propósito

Gestiona el nomenclador margen comercial del sistema.

## Acceso

- **Menú:** Nomenclaturas → Margen comercial
- **Ruta directa:** `/management/nomenclatures/margen-comercial/list`
- **Componente:** `MargenComercialListComponent`

> Las rutas `/management/nomenclatures/margen-comercial/add` y `/management/nomenclatures/margen-comercial/edit` comparten el formulario del nomenclador.

## Captura

![margen-comercial — captura real](/img/screenshots/nomenclaturas/margen-comercial.png)

*Captura tomada del backoffice Agrimpex.*

## Campos

| Campo | Descripción | Obligatorio |
|-------|-------------|-------------|
| Buscar | Filtro de texto para localizar registros. | No |
| Filtrar | Aplica los filtros seleccionados al listado. | No |
| Nombre | Nombre del elemento de margen comercial. | Sí |

## Acciones

| Acción | Botón | Rol | Ruta |
|--------|-------|-----|------|
| Buscar | Buscar | Administrador o Especialista | `/management/nomenclatures/margen-comercial/list` |
| Recargar | Recargar | Administrador o Especialista | `/management/nomenclatures/margen-comercial/list` |
| Añadir | Añadir | Administrador, Especialista, Logístico o Calidad | `/management/nomenclatures/margen-comercial/list/add` |
| Eliminar | Eliminar | Administrador, Especialista, Logístico o Calidad | `/management/nomenclatures/margen-comercial/list` |

## Filtros del listado

El panel **Filtrar** dispone en dos columnas **Nombre**, **Tasa Agrimpex**, **Valor mínimo**, **Valor máximo** y **Categoría**; la búsqueda genérica actúa sobre el nombre. El panel se abre con el botón **Filtrar** y se cierra con **Limpiar**; no hay botón **Aplicar**, porque los cambios se reflejan al escribir. Junto al panel están la búsqueda genérica **Buscar**, el botón **Recargar** y, cuando el componente lo declara, la exportación **Generar Excel (.xlsx)** y el indicador de sincronización con Recomplus.

![Margen comercial — panel de filtros](/img/screenshots/nomenclaturas/margen-comercial-filtros.png)

*Captura tomada del backoffice Agrimpex: panel **Filtrar** abierto en `/management/nomenclatures/margen-comercial/list`.*

## Operaciones y estados

**Columnas visibles:** **Nombre**, **Categoría**, **Unidad de medida**, **TMC**, **Tasa Agrimpex**, **Valor mínimo**, **Valor máximo** y **Acciones**; la celda de categoría muestra `codigo -) nombre`..

**Añadir** exige `canAdd` sobre `Margen Comercial`; la edición abre `/margen-comercial/edit/<id>` por segmento de ruta y la papelera elimina el margen. Las etiquetas de este grupo usan el vocablo `MARGEN_COMERCIAL`, no `NOMENCLATURES`.

| Acción | Botón | Rol | Ruta |
|--------|-------|-----|------|
| Añadir margen | Añadir | Administrador | `/management/nomenclatures/margen-comercial/add` |
| Editar margen | Editar (lápiz) | Administrador o Especialista (botón sin control de rol) | `/management/nomenclatures/margen-comercial/edit/<id>` |
| Eliminar margen | Eliminar (papelera) | Administrador o Especialista (botón sin control de rol) | `/management/nomenclatures/margen-comercial/list` |
| Exportar | Generar Excel (.xlsx) | Administrador o Especialista (botón sin control de rol) | `/management/nomenclatures/margen-comercial/list` |



![Margen comercial — tabla y acciones del listado](/img/screenshots/nomenclaturas/margen-comercial-operaciones.png)

*Captura tomada del backoffice Agrimpex: listado `/management/nomenclatures/margen-comercial/list` con sus columnas y acciones.*

## Formulario (alta y edición)

`MargenComercialFormComponent` se comparte entre `/margen-comercial/add` y `/margen-comercial/edit/<id>`; el identificador viaja como segmento de ruta.

| Campo | Control | Obligatorio | Validación y mensaje |
|-------|---------|-------------|----------------------|
| Nombre | Campo de texto | Sí | `required` y longitud máxima 200; «Campo obligatorio.». |
| Categoría | Selector | Sí | Obligatorio, con placeholder «Seleccionar categoría»; «Campo obligatorio.». |
| Unidad de medida | Selector | No | Placeholder «Seleccionar unidad de medida». |
| Valor mínimo | Campo numérico | No | Paso 0.0001, valor por defecto 0. |
| Valor máximo | Campo numérico | No | Paso 0.0001, valor por defecto 0. |
| TMC | Campo numérico | No | Sin validadores declarados. |
| Tasa Agrimpex | Campo de texto | No | Longitud máxima 50; se valida al perder el foco. |

**Regresar** y **Guardar**; el envío pasa por `onSubmit()`, que muestra avisos como «Si valor mínimo y valor máximo son mayores que 0, la Tasa Agrimpex no puede ser 0» o «La tasa Agrimpex (…) debe ser mayor o igual al valor mínimo (…)». 

![Margen comercial — formulario compartido](/img/screenshots/nomenclaturas/margen-comercial-formulario.png)

*Captura tomada del backoffice Agrimpex: formulario de alta en `/management/nomenclatures/margen-comercial/add`.*
