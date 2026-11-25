---
sidebar_position: 15
source_route: /logistic/shipping-documents/list
source_component: ShippingDocumentsListComponent
status: vigente
---

# Documentos de embarque

## Propósito

Lista los documentos de embarque asociados a contenedores y expedientes BL/AWB.

## Acceso

- **Menú:** Logística → Documentos de embarque
- **Ruta directa:** `/logistic/shipping-documents/list`
- **Componente:** `ShippingDocumentsListComponent`

## Captura

![documentos — captura real](/img/screenshots/logistica/contenedores/documentos.png)

*Captura tomada del backoffice Agrimpex.*

## Campos

| Campo | Descripción | Obligatorio |
|-------|-------------|-------------|
| No. BL | Número de conocimiento de embarque. | No |
| No. Manifiesto | Número de manifiesto. | No |
| No. DM | Número de declaración de mercancías. | No |

## Acciones

| Acción | Botón | Rol | Ruta |
|--------|-------|-----|------|
| Buscar | Buscar | Administrador, Especialista, Consultor o Logístico | `/logistic/shipping-documents/list` |
| Recargar | Recargar | Administrador, Especialista, Consultor o Logístico | `/logistic/shipping-documents/list` |
| Añadir | Añadir | Administrador, Especialista, Logístico o Calidad | `/logistic/shipping-documents/list/add` |

## Filtros del listado

`/logistic/shipping-documents/list` consulta los Bill of Lading y ofrece un panel **Filtrar** con doce criterios: **No. BL**, **No. Manifiesto**, **Estado** —`in_yard` «En patio», `sailing` «Tránsito», `partially_extracted` «Parcialmente extraído», `extracted` «Extraído»—, **No. Orden de Entrega**, **Naviera**, **Proveedor**, **Buque**, **País de Origen**, **País de Procedencia**, **Producto** y los rangos de fechas **Fecha de Arribo** y **Fecha Salida**. Los rangos incompletos se ignoran y los criterios vacíos se descartan; están disponibles la búsqueda y recarga genéricas. La barra de herramientas añade **Generar Excel (.xlsx)**, **Añadir** —solo con permisos de escritura— y **Explorador de documentos**, visible para Administrador, Especialista, Especialista Principal o Gerente Comex.

![Documentos de embarque — panel de filtros](/img/screenshots/logistica/contenedores/documentos-filtros.png)

*Captura tomada del backoffice Agrimpex: panel Filtrar del listado de documentos de embarque.*

## Columnas y resultados

La tabla muestra **No. BL** —con el distintivo de estado y el recuento de contenedores en patio, extraídos y no devueltos—, **No. Manifiesto**, **Proveedor**, **Fecha Salida**, **Fecha de Arribo**, **No. Factura** y **Acciones**. Pulsar el número de BL o el botón de ojo abre el panel lateral del BL con facturas, listas de empaque y documentos, donde cada archivo ofrece **Vista previa** y **Descargar**; si la carga falla se muestra «No se pudieron cargar los detalles del BL». El lápiz abre `/logistic/shipping-documents/edit/:id`, con el identificador por segmento de ruta. El estado mostrado se deriva de los contenedores y puede diferir del valor guardado en el filtro.

![Documentos de embarque — acciones de la tabla](/img/screenshots/logistica/contenedores/documentos-operaciones.png)

*Captura tomada del backoffice Agrimpex: columna Acciones y estados de los BL.*
