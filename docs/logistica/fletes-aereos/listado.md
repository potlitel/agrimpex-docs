---
sidebar_position: 31
source_route: /logistic/airs-freights/list
source_component: AirFreightListComponent
status: vigente
---

# Listado de fletes aéreos

## Propósito

Consulta los fletes aéreos registrados y su estado.

## Acceso

- **Menú:** Logística → Listado de fletes aéreos
- **Ruta directa:** `/logistic/airs-freights/list`
- **Componente:** `AirFreightListComponent`

## Captura

![listado — captura real](/img/screenshots/logistica/fletes-aereos/listado.png)

*Captura tomada del backoffice Agrimpex.*

## Campos

| Campo | Descripción | Obligatorio |
|-------|-------------|-------------|
| Buscar | Filtro de texto para localizar registros. | No |
| Filtrar | Aplica los filtros seleccionados al listado. | No |
| No. Factura | Número de factura. | No |
| Naviera | Compañía transportista. | No |
| Estado | Estado del flete. | No |

## Acciones

| Acción | Botón | Rol | Ruta |
|--------|-------|-----|------|
| Buscar | Buscar | Administrador, Especialista, Logístico o Calidad | `/logistic/airs-freights/list` |
| Recargar | Recargar | Administrador, Especialista, Logístico o Calidad | `/logistic/airs-freights/list` |
| Añadir | Añadir | Administrador, Especialista, Logístico o Calidad | `/logistic/airs-freights/list/add` |
| Eliminar | Eliminar | Administrador, Especialista, Logístico o Calidad | `/logistic/airs-freights/list` |

## Filtros del listado

`/logistic/airs-freights/list` ofrece el panel **Filtrar** con **No. de AWB**, **Estado** —`Cartera`, `Aduana` y `Habilitado`—, **Embarcador**, **Especialista**, **Aerolínea**, el rango de **Fecha Salida** y **Cliente**. La barra de herramientas añade **Generar Excel (.xlsx)**, **Explorador de documentos** para los roles autorizados y **Añadir** para los roles con permiso de escritura.

![Fletes aéreos — panel de filtros](/img/screenshots/logistica/fletes-aereos/listado-filtros.png)

*Captura tomada del backoffice Agrimpex: filtros del listado de cargas aéreas.*

## Operaciones y estados

Las columnas son **No. de AWB**, **Estado**, **Embarcador**, **Especialista**, **Aerolínea**, **Fecha Salida**, **Cliente** y **Acciones**. La celda de especialista admite edición en línea con guardar y cancelar solo para Especialista o Administrador y conserva el borrador hasta confirmarlo. El lápiz abre `/logistic/airs-freights/edit?id=<id>` —identificador por parámetro de consulta—, el ojo abre la ficha de AWB con documentos, facturas, packing lists y totales FCA, CPT y CIP, y la papelera elimina el registro previa confirmación «¿Eliminar Carga Aérea?»; el resultado es «Carga aérea eliminada correctamente.». Los estados del listado son **Cartera**, **Aduana** y **Habilitado**.

![Fletes aéreos — acciones de la tabla](/img/screenshots/logistica/fletes-aereos/listado-operaciones.png)

*Captura tomada del backoffice Agrimpex: edición en línea, ficha y acciones por fila.*

## Formulario (alta y edición)

El alta se abre en `/logistic/airs-freights/add` y la edición en `edit?id=<id>`; el formulario se documenta en la página de formulario de fletes aéreos y organiza sus campos en las pestañas **AWB** y **Factura**.

![Fletes aéreos — acceso al formulario](/img/screenshots/logistica/fletes-aereos/listado-operaciones.png)

*Captura tomada del backoffice Agrimpex: enlace de edición al formulario con `id` por consulta.*
