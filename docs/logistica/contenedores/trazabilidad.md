---
sidebar_position: 18
source_route: /logistic/container-control
source_component: ContainerHistoryComponent
status: vigente
---

# Trazabilidad de contenedores

## Propósito

Muestra el historial de estados y movimientos de un contenedor.

## Acceso

- **Menú:** Logística → Trazabilidad de contenedores
- **Ruta directa:** `/logistic/container-control`
- **Componente:** `ContainerHistoryComponent`

## Captura

![trazabilidad — captura real](/img/screenshots/logistica/contenedores/trazabilidad.png)

*Captura tomada del backoffice Agrimpex.*

## Campos

| Campo | Descripción | Obligatorio |
|-------|-------------|-------------|
| Contenedor | Identificador del contenedor. | No |
| Arribo | Fecha de arribo. | No |
| Extracción | Fecha de extracción. | No |

## Acciones

| Acción | Botón | Rol | Ruta |
|--------|-------|-----|------|
| Buscar | Buscar | Administrador, Especialista, Consultor o Logístico | `/logistic/container-control` |
| Recargar | Recargar | Administrador, Especialista, Consultor o Logístico | `/logistic/container-control` |

## Filtros del listado

`/logistic/container-control` no muestra el panel **Filtrar** genérico: la consulta se prepara con dos buscadores en vivo, **No. BL** y **Contenedor**, ambos obligatorios. El segundo permanece deshabilitado hasta elegir un BL y ofrece texto de ayuda para seleccionar el Bill of Lading y buscar por número de contenedor. Los parámetros `?bl=…&container=…` precargan ambos campos. **Consultar Historial** recupera la trazabilidad y **Imprimir** genera un PDF de la ficha; no hay altas, ediciones ni borrados en esta vista.

![Trazabilidad de contenedores — búsqueda](/img/screenshots/logistica/contenedores/trazabilidad-busqueda.png)

*Captura tomada del backoffice Agrimpex: buscadores de BL y contenedor.*

## Columnas y resultados

El historial organiza la información en cuatro hitos: **Inventario en Terminales** —Fecha de Arribo, Días en Puerto, Contenedor, No. BL, Días sin DM y Habilitado—, **Extracciones del Día** —Fecha Salida, Días, Transportista, Camión y Provincia—, **Devoluciones** —Días Totales, Provincia, Conductor y Dirección de destino— y **Devolución / Recepción** —Fecha de devolución, Días Totales, Estado de la carga y Organismo—. Cada hito marca si está completado o pendiente. «Documentos del BL» muestra BL, facturas y listas de empaque con vista previa y descarga, y «Trazabilidad de Fechas» alinea arribo, extracción y devolución con los recuentos de días en puerto, sin DM, de extracción y totales. Sin resultados se muestra «No se encontraron resultados» y, para los documentos, «No disponible» o «No hay documentos asociados».

![Trazabilidad de contenedores — detalle del historial](/img/screenshots/logistica/contenedores/trazabilidad-detalle.png)

*Captura tomada del backoffice Agrimpex: hitos, documentos y trazabilidad de fechas.*
