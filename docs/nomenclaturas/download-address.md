---
sidebar_position: 28
source_route: /management/nomenclatures/download-address/list
source_component: DownloadAddressListComponent
status: vigente
---

# Dirección de descarga

## Propósito

Gestiona el nomenclador dirección de descarga del sistema.

## Acceso

- **Menú:** Nomenclaturas → Dirección de descarga
- **Ruta directa:** `/management/nomenclatures/download-address/list`
- **Componente:** `DownloadAddressListComponent`

> Las rutas `/management/nomenclatures/download-address/add` y `/management/nomenclatures/download-address/edit` comparten el formulario del nomenclador.

## Captura

![download-address — captura real](/img/screenshots/nomenclaturas/download-address.png)

*Captura tomada del backoffice Agrimpex.*

## Campos

| Campo | Descripción | Obligatorio |
|-------|-------------|-------------|
| Buscar | Filtro de texto para localizar registros. | No |
| Filtrar | Aplica los filtros seleccionados al listado. | No |
| Nombre | Nombre del elemento de dirección de descarga. | Sí |

## Acciones

| Acción | Botón | Rol | Ruta |
|--------|-------|-----|------|
| Buscar | Buscar | Administrador o Especialista | `/management/nomenclatures/download-address/list` |
| Recargar | Recargar | Administrador o Especialista | `/management/nomenclatures/download-address/list` |
| Añadir | Añadir | Administrador, Especialista, Logístico o Calidad | `/management/nomenclatures/download-address/list/add` |
| Eliminar | Eliminar | Administrador, Especialista, Logístico o Calidad | `/management/nomenclatures/download-address/list` |

## Filtros del listado

El panel **Filtrar** muestra **Licencia Sanitaria**, **Dirección** y **Actividad**, tres campos de texto que se combinan para estrechar el listado. El panel se abre con el botón **Filtrar** y se cierra con **Limpiar**; no hay botón **Aplicar**, porque los cambios se reflejan al escribir. Junto al panel están la búsqueda genérica **Buscar**, el botón **Recargar** y, cuando el componente lo declara, la exportación **Generar Excel (.xlsx)** y el indicador de sincronización con Recomplus.

![Dirección de descarga — panel de filtros](/img/screenshots/nomenclaturas/download-address-filtros.png)

*Captura tomada del backoffice Agrimpex: panel **Filtrar** abierto en `/management/nomenclatures/download-address/list`.*

## Operaciones y estados

**Columnas visibles:** **Licencia Sanitaria**, **Fecha de vencimiento**, **Dirección**, **Actividad**, **Estado** y **Acciones**; las fechas se muestran en formato `dd/MM/yyyy`..

**Añadir** está sujeto a `canAdd` sobre `DireccionDescarga`. El ojo abre una hoja de detalle con el botón **Salir**; el lápiz edita en `/download-address/edit?id=<id>`, el conmutador de **Estado** exige `canEdit` y la papelera `canDelete`.

| Acción | Botón | Rol | Ruta |
|--------|-------|-----|------|
| Añadir dirección | Añadir | Administrador | `/management/nomenclatures/download-address/add` |
| Consultar detalle | Ver (ojo) | Administrador o Especialista (botón sin control de rol) | `/management/nomenclatures/download-address/list` |
| Editar dirección | Editar (lápiz) | Administrador o Especialista (botón sin control de rol) | `/management/nomenclatures/download-address/edit?id=<id>` |
| Cambiar estado | Conmutador Estado | Administrador; Especialista con permiso de actualización | `/management/nomenclatures/download-address/list` |
| Eliminar dirección | Eliminar (papelera) | Administrador | `/management/nomenclatures/download-address/list` |
| Exportar | Generar Excel (.xlsx) | Administrador o Especialista (botón sin control de rol) | `/management/nomenclatures/download-address/list` |



![Dirección de descarga — tabla y acciones del listado](/img/screenshots/nomenclaturas/download-address-operaciones.png)

*Captura tomada del backoffice Agrimpex: listado `/management/nomenclatures/download-address/list` con sus columnas y acciones.*

## Formulario (alta y edición)

`DownloadAddressFormComponent` atiende `/download-address/add` y `/download-address/edit?id=<id>`, con el identificador en la consulta.

| Campo | Control | Obligatorio | Validación y mensaje |
|-------|---------|-------------|----------------------|
| Licencia Sanitaria | Campo de texto | Sí | `required` y longitud máxima 50; «Campo obligatorio.». |
| Fecha de vencimiento | Selector de fecha | Sí | `required` → «Campo obligatorio.». |
| Dirección | Área de texto | Sí | `required` y longitud máxima 500. |
| Actividad | Área de texto | Sí | `required` y longitud máxima 500. |
| Clientes | Selector múltiple | No | Placeholder «Seleccionar clientes...». |
| Activo | Conmutador | No | Enlazado a `status`. |

**Regresar** y **Guardar** en alta; **Actualizar** en edición. 

![Dirección de descarga — formulario compartido](/img/screenshots/nomenclaturas/download-address-formulario.png)

*Captura tomada del backoffice Agrimpex: formulario de alta en `/management/nomenclatures/download-address/add`.*
