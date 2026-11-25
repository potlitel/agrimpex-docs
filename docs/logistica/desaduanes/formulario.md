---
sidebar_position: 28
source_route: /logistic/desaduanes/add
source_component: CustomClearanceFormComponent
status: vigente
---

# Formulario de desaduane

## Propósito

Registra o edita un despacho aduanero con el mismo formulario.

## Acceso

- **Menú:** Logística → Formulario de desaduane
- **Ruta directa:** `/logistic/desaduanes/add`
- **Componente:** `CustomClearanceFormComponent`

## Captura

![formulario — captura real](/img/screenshots/logistica/desaduanes/formulario.png)

*Captura tomada del backoffice Agrimpex.*

## Campos

| Campo | Descripción | Obligatorio |
|-------|-------------|-------------|
| No. Desaduane | Dato del formulario. | Sí |
| No. DM | Dato del formulario. | Sí |
| Fecha DM | Dato del formulario. | Sí |
| Contenedor | Dato del formulario. | Sí |
| Observaciones | Dato del formulario. | Sí |

## Acciones

| Acción | Botón | Rol | Ruta |
|--------|-------|-----|------|
| Crear | Añadir | Administrador, Especialista, Logístico o Calidad | `/logistic/desaduanes/add` |
| Editar | Editar | Administrador, Especialista, Logístico o Calidad | `/logistic/desaduanes/edit/:id` |
| Guardar | Guardar | Administrador, Especialista, Logístico o Calidad | `Formulario actual` |
| Cancelar | Cancelar | Administrador, Especialista, Logístico o Calidad | `Listado del módulo` |

## Filtros del listado

Este formulario no contiene el panel **Filtrar**: se abre desde `/logistic/desaduanes/list` mediante el alta o el lápiz de una fila, con el identificador por segmento en `edit/:id`. Las búsquedas internas son los selectores de **Proveedor**, documento de transporte —**BL**, **Guía Aérea** o **Mercancía Inbond**—, **Cliente**, **No. Solicitud de Importación** y **Licencias Sanitarias**; estos últimos solo se habilitan después de elegir el cliente. Al guardar se vuelve al listado.

![Desaduane — pestaña Datos Generales](/img/screenshots/logistica/desaduanes/formulario-formulario-general.png)

*Captura tomada del backoffice Agrimpex: proveedor, documento de transporte y estado del formulario.*

## Operaciones y estados

El estado se elige entre **En proceso**, **Enviada** y **Tramitada**; el listado también puede mostrar **Terminada**. La modalidad **Importación** o **Consignación** determina los controles: con importación se elige submodalidad **Marítimo**, **Aéreo** o **Inbond**. La fecha ETA debe ser posterior a la fecha de solicitud («La fecha ETA debe ser posterior a la fecha de solicitud.»). Los datos de aceptación —**No. DM**, **Fecha DM**, **Valor Estadístico**, **Fecha Entrega en Facturación** y **Fecha Recibido en Facturación**— son de solo lectura en alta y se validan en edición: la fecha DM posterior a la solicitud, la entrega y el recibido posteriores a la DM y el recibido posterior a la entrega. **Regresar**, **Vista Previa PDF** y **Descargar PDF** —estos dos solo si se puede generar el documento— y **Guardar** completan las acciones; el guardado muestra «Solicitud de desaduane guardada correctamente».

![Desaduane — pestaña Clientes](/img/screenshots/logistica/desaduanes/formulario-formulario-clientes.png)

*Captura tomada del backoffice Agrimpex: clientes, licencias sanitarias, factura y productos.*

## Formulario (alta y edición)

La pestaña **Datos Generales** exige No. Solicitud, fecha, proveedor y estado; si no hay proveedores aparece «No hay proveedores disponibles. No se puede guardar la solicitud.». En marítimo se selecciona el BL y se muestran manifiesto, buque y naviera; en aéreo la guía aérea y su manifiesto; en inbond se auto-completan cliente, RUT/NIT, fecha y número de factura. La pestaña **Clientes** añade bloques con cliente, solicitud de importación, licencias sanitarias, factura y productos con cantidad, pesos, unidad, precio, importe y márgenes; exige inspección, gastos FOB, flete marítimo, seguro y márgenes. La pestaña **Contrato** registra los documentos entregados, la fuente de financiamiento y los importes CVI, suplemento y CVN, con **Solicitado Por** y **Aprobado Por** obligatorios. Si faltan campos, el aviso identifica la pestaña con errores.

![Desaduane — pestaña Datos Generales](/img/screenshots/logistica/desaduanes/formulario-formulario-general.png)

*Captura tomada del backoffice Agrimpex: primera pestaña del formulario compartido.*

![Desaduane — pestaña Clientes](/img/screenshots/logistica/desaduanes/formulario-formulario-clientes.png)

*Captura tomada del backoffice Agrimpex: segunda pestaña del formulario compartido.*

![Desaduane — pestaña Contrato](/img/screenshots/logistica/desaduanes/formulario-formulario-contrato.png)

*Captura tomada del backoffice Agrimpex: documentos entregados, financiamiento y contrato.*
