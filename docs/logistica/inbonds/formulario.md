---
sidebar_position: 24
source_route: /logistic/inbond-goods/add
source_component: InbondFormComponent
status: vigente
---

# Formulario de inbonds

## Propósito

Crea o edita una solicitud inbond con el mismo formulario.

## Acceso

- **Menú:** Logística → Formulario de inbonds
- **Ruta directa:** `/logistic/inbond-goods/add`
- **Componente:** `InbondFormComponent`

## Captura

![formulario — captura real](/img/screenshots/logistica/inbonds/formulario.png)

*Captura tomada del backoffice Agrimpex.*

## Campos

| Campo | Descripción | Obligatorio |
|-------|-------------|-------------|
| No. solicitud | Dato del formulario. | Sí |
| Proveedor | Dato del formulario. | Sí |
| Fecha Solicitud | Dato del formulario. | Sí |
| Estado | Dato del formulario. | Sí |
| Observaciones | Dato del formulario. | Sí |

## Acciones

| Acción | Botón | Rol | Ruta |
|--------|-------|-----|------|
| Crear | Añadir | Administrador, Especialista, Logístico o Calidad | `/logistic/inbond-goods/add` |
| Editar | Editar | Administrador, Especialista, Logístico o Calidad | `/logistic/inbond-goods/edit` |
| Guardar | Guardar | Administrador, Especialista, Logístico o Calidad | `Formulario actual` |
| Cancelar | Cancelar | Administrador, Especialista, Logístico o Calidad | `Listado del módulo` |

## Filtros del listado

El formulario de mercancía INBOND carece de panel **Filtrar**: se accede desde `/logistic/inbond-goods/list` mediante **Añadir** o el lápiz de una fila con `edit?id=<id>`. Los selectores de **Proveedor**, **Cliente** y **Solicitud de desaduane** funcionan como búsquedas de apoyo y auto-completan el contrato CVI, el contrato CVN, el número de solicitud y la fecha de desaduane. Al guardar o regresar se vuelve al listado.

![Inbonds — datos generales del formulario](/img/screenshots/logistica/inbonds/formulario-formulario-general.png)

*Captura tomada del backoffice Agrimpex: campos generales y selectores dependientes.*

## Operaciones y estados

El estado es obligatorio y se elige entre **Aduana**, **Trámites** y **PIE**. En alta, los campos «Solicitud de desaduane» y «Fecha Desaduane» aparecen deshabilitados y vacíos; en edición son opcionales y la fecha se completa automáticamente al elegir la solicitud. Si no hay contrato para el proveedor o el cliente se muestra una advertencia. **Regresar** pide confirmación si hay cambios sin guardar y **Guardar** muestra «Operación completada con éxito»; la ficha también permite eliminar el registro desde el listado.

![Inbonds — detalle de productos](/img/screenshots/logistica/inbonds/formulario-formulario-productos.png)

*Captura tomada del backoffice Agrimpex: productos, pesos y totales del formulario.*

## Formulario (alta y edición)

**No. Factura** es obligatorio, admite hasta 50 caracteres y sugiere `Ej: 0023`; la fecha factura es opcional. Proveedor, estado y especialista son obligatorios. «Datos de desaduane»本届 solo se completan en edición. «Detalle de Productos» permite elegir varios productos y exige peso bruto, peso neto, cantidad, unidad de medida y precio en cada fila, con la validación «Peso Bruto no puede ser menor que Peso Neto»; el importe se calcula y el pie muestra los totales. Quitar una fila con datos pide confirmación.

![Inbonds — alta y edición compartidas](/img/screenshots/logistica/inbonds/formulario-formulario-general.png)

*Captura tomada del backoffice Agrimpex: formulario compartido por `/add` y `/edit?id=<id>`.*
