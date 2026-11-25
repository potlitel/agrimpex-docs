---
sidebar_position: 32
source_route: /logistic/airs-freights/add
source_component: AirFreightFormComponent
status: vigente
---

# Formulario de fletes aéreos

## Propósito

Crea o edita un flete aéreo con el mismo formulario.

## Acceso

- **Menú:** Logística → Formulario de fletes aéreos
- **Ruta directa:** `/logistic/airs-freights/add`
- **Componente:** `AirFreightFormComponent`

## Captura

![formulario — captura real](/img/screenshots/logistica/fletes-aereos/formulario.png)

*Captura tomada del backoffice Agrimpex.*

## Campos

| Campo | Descripción | Obligatorio |
|-------|-------------|-------------|
| No. Factura | Dato del formulario. | Sí |
| Naviera | Dato del formulario. | Sí |
| Productos | Dato del formulario. | Sí |
| Estado | Dato del formulario. | Sí |

## Acciones

| Acción | Botón | Rol | Ruta |
|--------|-------|-----|------|
| Crear | Añadir | Administrador, Especialista, Logístico o Calidad | `/logistic/airs-freights/add` |
| Editar | Editar | Administrador, Especialista, Logístico o Calidad | `/logistic/airs-freights/edit` |
| Guardar | Guardar | Administrador, Especialista, Logístico o Calidad | `Formulario actual` |
| Cancelar | Cancelar | Administrador, Especialista, Logístico o Calidad | `Listado del módulo` |

## Filtros del listado

El formulario de carga aérea no presenta el panel **Filtrar**: se accede desde `/logistic/airs-freights/add` o desde `edit?id=<id>`. Los selectores de **Embarcador**, **Aerolínea**, **Especialista**, **Aeropuerto Salida**, **Aeropuerto Llegada** y **Solicitud de desaduane** funcionan como búsquedas de apoyo; el contrato del proveedor y del cliente se completa automáticamente. Al guardar se regresa al listado.

![Fletes aéreos — pestaña AWB](/img/screenshots/logistica/fletes-aereos/formulario-formulario-awb.png)

*Captura tomada del backoffice Agrimpex: campos del AWB y selectores de aeropuertos.*

## Operaciones y estados

El estado se elige entre **Habilitado**, **Preliberación** y **Permisología**, mientras el listado utiliza **Cartera**, **Aduana** y **Habilitado**. La fecha de arribo debe ser posterior a la de salida («La fecha de arribo debe ser posterior a la fecha de salida») y los aeropuertos de salida y llegada no pueden coincidir («El aeropuerto de salida y llegada no pueden ser iguales»); la salida se selecciona entre aeropuertos extranjeros y la llegada entre nacionales. En alta los campos de desaduane aparecen deshabilitados y vacíos; en edición son opcionales y la fecha se auto-completa. **Regresar** avisa si hay cambios sin guardar y **Guardar** muestra «Carga aérea guardada».

![Fletes aéreos — pestaña Factura](/img/screenshots/logistica/fletes-aereos/formulario-formulario-factura.png)

*Captura tomada del backoffice Agrimpex: facturas, productos y totales de la carga aérea.*

## Formulario (alta y edición)

La pestaña **AWB** exige número de AWB —hasta 20 caracteres—, embarcador, estado, aerolínea, operador —`aerovaradero` por defecto—, fechas de salida y arribo y aeropuertos; el número de manifiesto es opcional y el contrato del proveedor es de solo lectura. «Documento AWB» acepta PDF, imágenes y Word. La pestaña **Factura** permite añadir facturas con número, fecha y cliente obligatorios y productos con bultos, cantidad, pesos bruto y neto, unidad y precio; el peso bruto no puede ser menor que el neto. Los totales calculan FCA y CPT y dejan editables **Flete Marítimo** y **Seguro** para obtener CIP. Las rutas `add` y `edit?id=<id>` comparten el componente.

![Fletes aéreos — pestaña Factura del formulario compartido](/img/screenshots/logistica/fletes-aereos/formulario-formulario-factura.png)

*Captura tomada del backoffice Agrimpex: segunda pestaña del mismo formulario.*

![Fletes aéreos — alta y edición compartidas](/img/screenshots/logistica/fletes-aereos/formulario-formulario-awb.png)

*Captura tomada del backoffice Agrimpex: formulario compartido por ambas rutas.*
