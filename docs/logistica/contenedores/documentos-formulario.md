---
sidebar_position: 16
source_route: /logistic/shipping-documents/add
source_component: ShippingDocumentsFormComponent
status: vigente
---

# Formulario de documentos de embarque

## Propósito

Crea o edita un documento de embarque con el mismo formulario.

## Acceso

- **Menú:** Logística → Formulario de documentos de embarque
- **Ruta directa:** `/logistic/shipping-documents/add`
- **Componente:** `ShippingDocumentsFormComponent`

## Captura

![documentos-formulario — captura real](/img/screenshots/logistica/contenedores/documentos-formulario.png)

*Captura tomada del backoffice Agrimpex.*

## Campos

| Campo | Descripción | Obligatorio |
|-------|-------------|-------------|
| No. BL | Dato del formulario. | Sí |
| No. Manifiesto | Dato del formulario. | Sí |
| No. Factura | Dato del formulario. | Sí |
| Naviera | Dato del formulario. | Sí |
| Productos | Dato del formulario. | Sí |

## Acciones

| Acción | Botón | Rol | Ruta |
|--------|-------|-----|------|
| Crear | Añadir | Administrador, Especialista, Logístico o Calidad | `/logistic/shipping-documents/add` |
| Editar | Editar | Administrador, Especialista, Logístico o Calidad | `/logistic/shipping-documents/edit/:id` |
| Guardar | Guardar | Administrador, Especialista, Logístico o Calidad | `Formulario actual` |
| Cancelar | Cancelar | Administrador, Especialista, Logístico o Calidad | `Listado del módulo` |

## Filtros del listado

El formulario se alcanza desde `/logistic/shipping-documents/list` mediante **Añadir** o el lápiz de una fila, y desde `navegando-containers` mediante **Documentos Embarque**. No tiene panel **Filtrar**: los controles de búsqueda son los selectores de catálogo —Naviera, Puertos, Países, Productos, Unidades de Medida, Buques, Proveedores, Tipos de Contenedor y Clientes— y, en modo navegación, el campo de números de contenedor con formato ISO 6346. Al guardar, la aplicación vuelve al listado del que se partió. La edición exige permisos de escritura; la consulta del registro se hace desde el listado y su panel lateral.

![Formulario de documentos de embarque — pestaña Bill of Lading](/img/screenshots/logistica/contenedores/documentos-formulario-formulario-bl.png)

*Captura tomada del backoffice Agrimpex: datos generales y selectores del formulario.*

## Formulario (alta y edición)

Un mismo componente atiende `/logistic/shipping-documents/add`, `/logistic/shipping-documents/edit/:id` y las rutas `add-shipping-documents` y `edit-shipping-documents` de `navegando-containers`; en alta se crea un BL, en edición se precarga el identificador y los campos **No. BL** y **No. Manifiesto** quedan de solo lectura. El formulario tiene dos pestañas: **Bill of Lading** y **Factura / Packing List**.

En **Bill of Lading**, el bloque «Datos del BL» pide No. BL, No. Manifiesto, Puerto de Destino, Naviera, Estado del BL y Estado de la carga —de solo lectura, derivados—, Fecha de Arribo, Nombre del Buque, Fecha Salida, Proveedor, No. O. Entrega, País de Origen y País de Procedencia; los obligatorios se marcan con `Validators.required` y la fecha de arribo no puede ser anterior a la de salida («La fecha de arribo debe ser posterior a la fecha de salida»). «Contenedores» exige al menos un contenedor, con longitud y tipo obligatorios en los contenedores nuevos, y «Documento BL» acepta PDF, imágenes y Word. La pestaña **Factura / Packing List** admite plantillas Excel, facturas repetibles con No. Factura, Fecha Factura y Cliente obligatorios, y productos con contenedor, producto, bultos, cantidad, pesos bruto y neto, UM, precio e importe calculado; el peso bruto no puede ser menor que el neto. Los totales calculan EXWORK, FOB, CFR y CIF a partir de inspección, gastos internos, flete y seguro. El asistente «Subir expediente y extraer» pre-carga datos de los PDF y avisa de los campos sin valor. **Regresar** pide confirmación si hay cambios sin guardar y **Guardar** muestra «Documento de embarque guardado correctamente» o el error correspondiente.

![Formulario de documentos de embarque — pestaña Bill of Lading](/img/screenshots/logistica/contenedores/documentos-formulario-formulario-bl.png)

*Captura tomada del backoffice Agrimpex: campos obligatorios y estado derivado de la carga.*

![Formulario de documentos de embarque — pestaña Factura / Packing List](/img/screenshots/logistica/contenedores/documentos-formulario-formulario-factura.png)

*Captura tomada del backoffice Agrimpex: facturas, productos y totales del formulario.*
