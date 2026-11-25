---
sidebar_position: 6
source_route: /management/nomenclatures/cargo/list
source_component: CargoListComponent
status: vigente
---

# Cargo

## Propósito

Gestiona el nomenclador cargo del sistema.

## Acceso

- **Menú:** Nomenclaturas → Cargo
- **Ruta directa:** `/management/nomenclatures/cargo/list`
- **Componente:** `CargoListComponent`

> Las rutas `/management/nomenclatures/cargo/add` y `/management/nomenclatures/cargo/edit` comparten el formulario del nomenclador.

## Captura

![cargo — captura real](/img/screenshots/nomenclaturas/cargo.png)

*Captura tomada del backoffice Agrimpex.*

## Campos

| Campo | Descripción | Obligatorio |
|-------|-------------|-------------|
| Buscar | Filtro de texto para localizar registros. | No |
| Filtrar | Aplica los filtros seleccionados al listado. | No |
| Nombre | Nombre del elemento de cargo. | Sí |

## Acciones

| Acción | Botón | Rol | Ruta |
|--------|-------|-----|------|
| Buscar | Buscar | Administrador o Especialista | `/management/nomenclatures/cargo/list` |
| Recargar | Recargar | Administrador o Especialista | `/management/nomenclatures/cargo/list` |
| Añadir | Añadir | Administrador, Especialista, Logístico o Calidad | `/management/nomenclatures/cargo/list/add` |
| Eliminar | Eliminar | Administrador, Especialista, Logístico o Calidad | `/management/nomenclatures/cargo/list` |

## Filtros del listado

El panel **Filtrar** ofrece **Nombre**, un campo de texto que filtra los cargos por su denominación; no hay otros criterios visibles. El panel se abre con el botón **Filtrar** y se cierra con **Limpiar**; no hay botón **Aplicar**, porque los cambios se reflejan al escribir. Junto al panel están la búsqueda genérica **Buscar**, el botón **Recargar** y, cuando el componente lo declara, la exportación **Generar Excel (.xlsx)** y el indicador de sincronización con Recomplus.

![Cargo — panel de filtros](/img/screenshots/nomenclaturas/cargo-filtros.png)

*Captura tomada del backoffice Agrimpex: panel **Filtrar** abierto en `/management/nomenclatures/cargo/list`.*

## Operaciones y estados

**Columnas visibles:** **Nombre** y **Acciones**.

El listado permite crear, editar y eliminar cargos. **Añadir** y la edición dependen de `canAdd`/`canEdit` sobre `Cargo`, y **Eliminar** exige `canDelete` además de `canEdit`. Para editar se navega a `/cargo/edit?id=<id>`, con el identificador en la consulta.

| Acción | Botón | Rol | Ruta |
|--------|-------|-----|------|
| Añadir cargo | Añadir | Administrador | `/management/nomenclatures/cargo/add` |
| Editar cargo | Editar (lápiz) | Administrador; Especialista con permiso de actualización | `/management/nomenclatures/cargo/edit?id=<id>` |
| Eliminar cargo | Eliminar (papelera) | Administrador | `/management/nomenclatures/cargo/list` |
| Exportar | Generar Excel (.xlsx) | Administrador o Especialista (botón sin control de rol) | `/management/nomenclatures/cargo/list` |



![Cargo — tabla y acciones del listado](/img/screenshots/nomenclaturas/cargo-operaciones.png)

*Captura tomada del backoffice Agrimpex: listado `/management/nomenclatures/cargo/list` con sus columnas y acciones.*

## Formulario (alta y edición)

`/cargo/add` y `/cargo/edit?id=<id>` comparten `CargoFormComponent`; la edición toma el registro del parámetro `id`.

| Campo | Control | Obligatorio | Validación y mensaje |
|-------|---------|-------------|----------------------|
| Nombre | Campo de texto | Sí | `required` y patrón que prohíbe números; mensajes «Campo obligatorio.» y «No se permiten caracteres numéricos (0-9) en este campo.». |

**Regresar** y **Guardar**. 

![Cargo — formulario compartido](/img/screenshots/nomenclaturas/cargo-formulario.png)

*Captura tomada del backoffice Agrimpex: formulario de alta en `/management/nomenclatures/cargo/add`.*
