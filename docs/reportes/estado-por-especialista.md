---
sidebar_position: 5
source_route: /reports/status-by-specialist
source_component: ReportsListComponent
status: vigente
---

# Reporte estado por especialista

## Propósito

Presenta una matriz de contenedores por especialista y estado operativo.

## Acceso

- **Menú:** Reportes → Reporte estado por especialista
- **Ruta directa:** `/reports/status-by-specialist`
- **Componente:** `ReportsListComponent`

## Captura

![estado-por-especialista — captura real](/img/screenshots/reportes/estado-por-especialista.png)

*Captura tomada del backoffice Agrimpex.*

## Campos

| Campo | Descripción | Obligatorio |
|-------|-------------|-------------|
| Buscar | Filtro de texto para localizar registros. | No |
| Filtrar | Aplica los filtros seleccionados al listado. | No |
| Especialista | Especialista responsable. | No |
| Estado | Estado operativo. | No |
| Total | Total de la combinación. | No |

## Acciones

| Acción | Botón | Rol | Ruta |
|--------|-------|-----|------|
| Generar | Generar | Administrador, Especialista, Calidad, Consultor o Logístico | `/reports/status-by-specialist` |
| Exportar Excel | Exportar Excel | Administrador, Especialista, Calidad, Consultor o Logístico | `/reports/status-by-specialist` |

## Filtros del listado

Este reporte comparte `ReportsListComponent` con los otros tres reportes de listado, pero tiene una particularidad: el panel de botones de opción **Tipo de Reporte** no se muestra en esta variante, por lo que la única selección previa son las pestañas del encabezado.

| Filtro | Control | Valores admitidos | Efecto |
|--------|---------|-------------------|--------|
| Tipo de reporte | Pestañas del encabezado | **Rango de Días**, **Conteo por Estado**, **Resumen por Especialista**, **Estado por Especialista** | Fija `reportType` en `STATUS_BY_SPECIALIST` y muestra esta matriz en `/reports/status-by-specialist`; al cambiar de pestaña se limpia la tabla. |
| Tipo de Reporte | No disponible en esta variante | — | La plantilla oculta el panel **Resumen General** / **Refrigerados (RH)** cuando el reporte es `STATUS_BY_SPECIALIST`. |

La tabla resultante tiene una columna **Especialista**, una columna por cada estado operativo presente en los datos generados y una columna final **Total**. Las columnas de estado se derivan de las propias filas, de modo que la matriz se mantiene alineada con los resultados; los valores dependen del entorno y no se garantizan.

![Estado por especialista — panel de filtros en el backoffice Agrimpex](/img/screenshots/reportes/estado-por-especialista-filtros.png)

*Captura tomada del backoffice Agrimpex con el selector de tipo de reporte visible.*

## Operaciones y estados

Las acciones son compartidas por `ReportsListComponent` y están disponibles para **Administrador, Especialista, Calidad, Consultor o Logístico** en `/reports/status-by-specialist`.

| Operación | Control | Condición y efecto |
|-----------|---------|--------------------|
| Generar | Botón **Generar** | Consulta el repositorio y construye la matriz de especialistas por estado; muestra el total agregado al terminar. |
| Cancelar | Botón **Cancelar** | Aparece después de generar y devuelve la pantalla al estado de configuración. |
| Exportar Excel | Botón **Exportar Excel** | Se habilita tras generar. Abre el diálogo con **Especialista** y **Total** como campos obligatorios y las columnas de estado como opcionales; el libro usa las columnas elegidas y un nombre base derivado del tipo de reporte. |

Antes de generar se muestra **Configuración de reporte** con la instrucción de seleccionar parámetros; durante la consulta aparece el estado de carga y sin datos se indica **Sin resultados**.

![Estado por especialista — operaciones en el backoffice Agrimpex](/img/screenshots/reportes/estado-por-especialista-operaciones.png)

*Captura tomada del backoffice Agrimpex con el botón «Generar» y el área de resultados.*
