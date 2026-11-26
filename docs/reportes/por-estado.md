---
sidebar_position: 3
source_route: /reports/count-by-status
source_component: ReportsListComponent
status: vigente
---

# Reporte por estado

## Propósito

Agrupa contenedores por estado operativo.

## Acceso

- **Menú:** Reportes → Reporte por estado
- **Ruta directa:** `/reports/count-by-status`
- **Componente:** `ReportsListComponent`

## Captura

![por-estado — captura real](/img/screenshots/reportes/por-estado.png)

*Captura tomada del backoffice Agrimpex.*

## Campos

| Campo | Descripción | Obligatorio |
|-------|-------------|-------------|
| Buscar | Filtro de texto para localizar registros. | No |
| Filtrar | Aplica los filtros seleccionados al listado. | No |
| Tipo de Reporte | Tipo de reporte a generar. | Sí |
| Estado | Estado operativo. | No |
| Cantidad de Contenedores | Total del grupo. | No |

## Acciones

| Acción | Botón | Rol | Ruta |
|--------|-------|-----|------|
| Generar | Generar | Administrador, Especialista, Calidad, Consultor o Logístico | `/reports/count-by-status` |
| Exportar Excel | Exportar Excel | Administrador, Especialista, Calidad, Consultor o Logístico | `/reports/count-by-status` |

## Filtros del listado

`ReportsListComponent` ofrece dos niveles de selección antes de generar. Las pestañas del encabezado cambian el tipo de reporte y descartan los resultados anteriores; el panel **Tipo de Reporte** elige entre **Resumen General** y **Refrigerados (RH)** y envía ese valor al procesamiento de los contenedores.

| Filtro | Control | Valores admitidos | Efecto |
|--------|---------|-------------------|--------|
| Tipo de reporte | Pestañas del encabezado | **Rango de Días**, **Conteo por Estado**, **Resumen por Especialista**, **Estado por Especialista** | Selecciona el reporte (`reportType`), resalta la pestaña activa y limpia la tabla ya generada. Cada pestaña corresponde a una ruta: `/reports/days-range`, `/reports/count-by-status`, `/reports/summary-by-specialist` y `/reports/status-by-specialist`. |
| Tipo de Reporte | Botones de opción del panel | **Resumen General** (`general`) o **Refrigerados (RH)** (`refrigerated`) | Pasa `filterType` a la generación y determina qué contenedores se agrupan por estado. |

La tabla resultante muestra las columnas **Estado** y **Cantidad de Contenedores**, agrupando los contenedores por su estado operativo, y un pie con el total. Los valores dependen de los datos del entorno, por lo que no se presentan cifras garantizadas.

![Reporte por estado — panel de filtros en el backoffice Agrimpex](/img/screenshots/reportes/por-estado-filtros.png)

*Captura tomada del backoffice Agrimpex con el panel de filtros visible.*

## Operaciones y estados

Las operaciones son de consulta y están disponibles para **Administrador, Especialista, Calidad, Consultor o Logístico** en `/reports/count-by-status`.

| Operación | Control | Condición y efecto |
|-----------|---------|--------------------|
| Generar | Botón **Generar** | Consulta el repositorio de contenedores, agrupa los resultados por estado con el filtro activo y muestra la tabla. Durante la consulta el botón indica «Generando...». |
| Cancelar | Botón **Cancelar** | Aparece después de generar y devuelve la pantalla al estado de configuración, sin resultados. |
| Exportar Excel | Botón **Exportar Excel** | Se habilita una vez generado el reporte. Abre el diálogo de exportación con **Estado** y **Cantidad** como campos obligatorios; el libro resultante usa esas columnas y un nombre base derivado del tipo de reporte. |

Antes de generar, el área central indica **Configuración de reporte** y pide seleccionar los parámetros; si no hay contenedores disponibles muestra **Sin resultados**. Los totales dependen del entorno y no se garantizan.

![Reporte por estado — operaciones en el backoffice Agrimpex](/img/screenshots/reportes/por-estado-operaciones.png)

*Captura tomada del backoffice Agrimpex con el botón «Generar» y el área de resultados.*
