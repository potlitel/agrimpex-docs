---
sidebar_position: 2
source_route: /reports/days-range
source_component: ReportsListComponent
status: vigente
---

# Reporte por rango de días

## Propósito

Clasifica contenedores según rangos de días en terminal.

## Acceso

- **Menú:** Reportes → Reporte por rango de días
- **Ruta directa:** `/reports/days-range`
- **Componente:** `ReportsListComponent`

## Captura

![por-rango-fechas — captura real](/img/screenshots/reportes/por-rango-fechas.png)

*Captura tomada del backoffice Agrimpex.*

## Campos

| Campo | Descripción | Obligatorio |
|-------|-------------|-------------|
| Buscar | Filtro de texto para localizar registros. | No |
| Filtrar | Aplica los filtros seleccionados al listado. | No |
| Tipo de Reporte | Tipo de reporte a generar. | Sí |
| Rango de Días | Rango seleccionado. | No |
| Rango de fechas de arribo | Desde / Hasta. | No |

## Acciones

| Acción | Botón | Rol | Ruta |
|--------|-------|-----|------|
| Generar | Generar | Administrador, Especialista, Calidad, Consultor o Logístico | `/reports/days-range` |
| Exportar Excel | Exportar Excel | Administrador, Especialista, Calidad, Consultor o Logístico | `/reports/days-range` |

## Filtros del listado

`ReportsListComponent` ofrece dos niveles de selección antes de generar. Las pestañas del encabezado cambian el tipo de reporte y descartan los resultados anteriores; el panel **Tipo de Reporte** elige entre **Resumen General** y **Refrigerados (RH)** y envía ese valor al procesamiento de los contenedores.

| Filtro | Control | Valores admitidos | Efecto |
|--------|---------|-------------------|--------|
| Tipo de reporte | Pestañas del encabezado | **Rango de Días**, **Conteo por Estado**, **Resumen por Especialista**, **Estado por Especialista** | Selecciona el reporte (`reportType`), resalta la pestaña activa y limpia la tabla ya generada. Cada pestaña corresponde a una ruta: `/reports/days-range`, `/reports/count-by-status`, `/reports/summary-by-specialist` y `/reports/status-by-specialist`. |
| Tipo de Reporte | Botones de opción del panel | **Resumen General** (`general`) o **Refrigerados (RH)** (`refrigerated`) | Pasa `filterType` a la generación y determina qué contenedores se agregán en los rangos. |

La tabla resultante muestra las columnas **Rango de Días** (`0-4`, `5-9`, `10-19`, `20-29`, `30-59` y `60+` días) y **Cantidad de Contenedores**, con un pie que resume el total. Los valores se calculan con los datos del entorno, por lo que no se presentan cifras garantizadas.

![Reporte por rango de días — panel de filtros en el backoffice Agrimpex](/img/screenshots/reportes/por-rango-fechas-filtros.png)

*Captura tomada del backoffice Agrimpex con el panel de filtros visible.*

## Operaciones y estados

Las operaciones son de consulta y están disponibles para **Administrador, Especialista, Calidad, Consultor o Logístico** en `/reports/days-range`.

| Operación | Control | Condición y efecto |
|-----------|---------|--------------------|
| Generar | Botón **Generar** | Consulta el repositorio de contenedores, procesa el reporte con la pestaña y el filtro activos y muestra la tabla. Durante la consulta el botón indica «Generando...». |
| Cancelar | Botón **Cancelar** | Aparece después de generar y devuelve la pantalla al estado de configuración, sin resultados. |
| Exportar Excel | Botón **Exportar Excel** | Se habilita una vez generado el reporte. Abre el diálogo de exportación con **Rango de Días** y **Cantidad** como campos obligatorios; el libro resultante usa esas columnas y un nombre base derivado del tipo de reporte. |

Antes de generar, el área central indica **Configuración de reporte** y pide seleccionar los parámetros; si no hay contenedores disponibles muestra **Sin resultados**. Los totales dependen del entorno y no se garantizan.

![Reporte por rango de días — operaciones en el backoffice Agrimpex](/img/screenshots/reportes/por-rango-fechas-operaciones.png)

*Captura tomada del backoffice Agrimpex con el botón «Generar» y el área de resultados.*
