---
sidebar_position: 11
source_route: /logistic/imports-control
source_component: ImportControlShellComponent
status: vigente
---

# Control de importaciones

## Propósito

Permite seguir y controlar cada solicitud de importación desde su creación.

## Acceso

- **Menú:** Logística → Control de importaciones
- **Ruta directa:** `/logistic/imports-control`
- **Componente:** `ImportControlShellComponent`

## Captura

![control-importaciones — captura real](/img/screenshots/logistica/control-importaciones.png)

*Captura tomada del backoffice Agrimpex.*

## Campos

| Campo | Descripción | Obligatorio |
|-------|-------------|-------------|
| Buscar | Filtro de texto para localizar registros. | No |
| Filtrar | Aplica los filtros seleccionados al listado. | No |
| No. solicitud | Identificador de la solicitud. | No |
| Contenedor | Contenedor asociado. | No |
| Estado | Estado de la solicitud. | No |

## Acciones

| Acción | Botón | Rol | Ruta |
|--------|-------|-----|------|
| Buscar | Buscar | Administrador, Especialista, Logístico o Calidad | `/logistic/imports-control` |
| Recargar | Recargar | Administrador, Especialista, Logístico o Calidad | `/logistic/imports-control` |
| Añadir | Añadir | Administrador, Especialista, Logístico o Calidad | `/logistic/imports-control/add` |

## Control y trazabilidad

`/logistic/imports-control` consulta los contenedores de Mariel o Santiago según el conmutador de terminal, que cambia el repositorio y reinicia los filtros. La vista adopta una de dos formas según la preferencia del usuario: «detallada» por defecto o «compacta». En la compacta, el panel **Filtrar** ofrece **Contenedor**, **No. BL**, **Especialista**, **Estado**, **Días (desde)** y **Días (hasta)**, más **Habilitado**, **Naviera** y **Tipo de Contenedor** en Mariel o **Producto** en Santiago. La detallada sustituye el rango de días por un campo único **Días (Min - Max)** y añade un rango de **Fecha de Arribo** solo en Mariel.

La tabla compacta resume **Contenedor**, **Cliente / Producto**, **Especialista**, **Estado Logístico** —barras de progreso— y **Días Totales** con código de color. La detallada despliega 46-columnas agrupadas en dos bloques —«A LLENAR POR ESPECIALISTA PRINCIPAL IMPORTACIONES» y «A LLENAR POR ESPECIALISTA LOGISTICO»— más columnas de totales de días en aduana, en puerto y totales; las barras desplazables permiten recorrer la sábana. El botón **Ver Detalle** de la vista compacta abre la ficha «Sábana Logística» con los datos de proveedor, puertos, buque, manifiesto, aduana, transporte y trazabilidad de fechas de arribo, extracción y devolución, y ofrece **Descargar Ficha Logística (PDF)** y **Volver al Listado**. La barra de herramientas permite **Generar Excel (.xlsx)** con Campos obligatorios Contenedor y BL/AW. No hay enlaces a otras vistas ni acciones de escritura en esta pantalla.

![Control de importaciones — vista detallada](/img/screenshots/logistica/control-importaciones-panel-control.png)

*Captura tomada del backoffice Agrimpex: sábana de control de importaciones y su navegación horizontal.*

![Control de importaciones — panel de filtros](/img/screenshots/logistica/control-importaciones-filtros.png)

*Captura tomada del backoffice Agrimpex: filtros aplicables a la consulta de contenedores.*
