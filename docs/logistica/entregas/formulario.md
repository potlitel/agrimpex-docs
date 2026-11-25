---
sidebar_position: 22
source_route: /logistic/delivery-orders/add
source_component: DeliveryOrderFormComponent
status: vigente
---

# Formulario de entregas

## Propósito

Crea una orden de entrega nueva o edita una existente con el mismo formulario.

## Acceso

- **Menú:** Logística → Formulario de entregas
- **Ruta directa:** `/logistic/delivery-orders/add`
- **Componente:** `DeliveryOrderFormComponent`

## Captura

![formulario — captura real](/img/screenshots/logistica/entregas/formulario.png)

*Captura tomada del backoffice Agrimpex.*

## Campos

| Campo | Descripción | Obligatorio |
|-------|-------------|-------------|
| No Orden | Dato del formulario. | Sí |
| Proveedor | Dato del formulario. | Sí |
| Especialista | Dato del formulario. | Sí |
| Estado | Dato del formulario. | Sí |
| Productos | Dato del formulario. | Sí |
| Cliente | Dato del formulario. | Sí |
| Contenedor | Dato del formulario. | Sí |
| No. BL | Dato del formulario. | Sí |

## Acciones

| Acción | Botón | Rol | Ruta |
|--------|-------|-----|------|
| Crear | Añadir | Administrador, Especialista, Logístico o Calidad | `/logistic/delivery-orders/add` |
| Editar | Editar | Administrador, Especialista, Logístico o Calidad | `/logistic/delivery-orders/edit` |
| Guardar | Guardar | Administrador, Especialista, Logístico o Calidad | `Formulario actual` |
| Cancelar | Cancelar | Administrador, Especialista, Logístico o Calidad | `Listado del módulo` |

## Filtros del listado

El formulario de entrega no tiene panel **Filtrar**: se abre desde `/logistic/delivery-orders/list` con **Añadir** o con el lápiz de una fila mediante `edit?id=<id>`. Los controles que funcionan como búsqueda son los selectores de **Vendedor**, **BL**, **Contenedor**, **Factura** y **No. DM**, que se habilitan de forma dependiente: el BL solo se puede elegir después del proveedor, los contenedores después del BL y las facturas y los números de DM después de seleccionar BLs. Al guardar o cancelar se vuelve al listado.

![Entregas — datos de la oferta](/img/screenshots/logistica/entregas/formulario-formulario-oferta.png)

*Captura tomada del backoffice Agrimpex: selectores dependientes de la pestaña Datos de la Oferta.*

## Operaciones y estados

El estado se elige entre **En proceso**, **Enviada** y **Tramitada** y se muestra con el mismo distintivo que en el listado. Cada pestaña indica con un punto verde o rojo si está completa. Los botones **Cancelar**, **Vista Previa PDF** y **Descargar PDF** —estos dos habilitados solo cuando ambas pestañas están completas— y **Guardar - Datos de la Oferta** o **Guardar - Datos del Embarque** permiten salir, previsualizar o conservar los cambios; al guardar se muestra «La operación se realizó satisfactoriamente». Si hay cambios sin guardar, **Cancelar** pide confirmación.

![Entregas — datos del embarque](/img/screenshots/logistica/entregas/formulario-formulario-embarque.png)

*Captura tomada del backoffice Agrimpex: pestaña Datos del Embarque y estado de completación.*

## Formulario (alta y edición)

En **Datos de la Oferta** el número de orden se asigna automáticamente y es de solo lectura; son obligatorios la fecha, el vendedor, las filas de **Oferta No. / Fecha** y **No. Solicitud**, y el producto de «Mercancía/Descripción». Opcionales son plazo, lugar de entrega, condiciones de pago, garantía, validez, tipo de transporte —`Marítimo` o `Aéreo`—, Incoterm, año, puertos de embarque y destino —con la validación «El Puerto de Embarque y el Puerto de Destino deben ser diferentes.»— y permisos especiales, cuyo número depende del tipo seleccionado. En **Datos del Embarque** se registran B/L con tipo **Madre** o **Hijo**, contenedores por BL, facturas, declaraciones de mercancías y direcciones de descarga con licencia sanitaria; las tablas permanecen deshabilitadas mientras no haya BLs disponibles. Para Santiago solo se exigen BL y contenedores.

![Entregas — pestaña Datos del Embarque](/img/screenshots/logistica/entregas/formulario-formulario-embarque.png)

*Captura tomada del backoffice Agrimpex: segunda pestaña del formulario compartido.*

![Entregas — pestañas del formulario compartido](/img/screenshots/logistica/entregas/formulario-formulario-oferta.png)

*Captura tomada del backoffice Agrimpex: pestañas compartidas por el alta y la edición.*
