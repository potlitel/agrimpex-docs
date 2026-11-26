---
sidebar_position: 4
source_route: /reports/summary-by-specialist
source_component: ReportsListComponent
status: vigente
---

# Reporte resumen por especialista

## Propósito

Muestra contenedores por especialista clasificados por rangos de días.

## Acceso

- **Menú:** Reportes → Reporte resumen por especialista
- **Ruta directa:** `/reports/summary-by-specialist`
- **Componente:** `ReportsListComponent`

## Captura

![por-especialista — captura real](/img/screenshots/reportes/por-especialista.png)

*Captura tomada del backoffice Agrimpex.*

## Campos

| Campo | Descripción | Obligatorio |
|-------|-------------|-------------|
| Buscar | Filtro de texto para localizar registros. | No |
| Filtrar | Aplica los filtros seleccionados al listado. | No |
| Tipo de Reporte | Tipo de reporte a generar. | Sí |
| Especialista | Especialista responsable. | No |
| Días | Rango de días. | No |

## Acciones

| Acción | Botón | Rol | Ruta |
|--------|-------|-----|------|
| Generar | Generar | Administrador, Especialista, Calidad, Consultor o Logístico | `/reports/summary-by-specialist` |
| Exportar Excel | Exportar Excel | Administrador, Especialista, Calidad, Consultor o Logístico | `/reports/summary-by-specialist` |

## Filtros del listado

Este reporte comparte `ReportsListComponent` con los otros tres reportes de listado. Las pestañas del encabezado seleccionan el tipo de reporte y descartan los resultados anteriores; el panel **Tipo de Reporte** elige entre **Resumen General** y **Refrigerados (RH)**, valor que se aplica al procesar la matriz de especialistas.

| Filtro | Control | Valores admitidos | Efecto |
|--------|---------|-------------------|--------|
| Tipo de reporte | Pestañas del encabezado | **Rango de Días**, **Conteo por Estado**, **Resumen por Especialista**, **Estado por Especialista** | Fija `reportType` en `SUMMARY_BY_SPECIALIST` y muestra esta matriz en `/reports/summary-by-specialist`; al cambiar de pestaña se limpia la tabla. |
| Tipo de Reporte | Botones de opción del panel | **Resumen General** (`general`) o **Refrigerados (RH)** (`refrigerated`) | Pasa `filterType` a la generación y determina cómo se distribuyen los contenedores de cada especialista por rango de días. |

La tabla resultante tiene una columna **Especialista**, una columna por rango (`0-4`, `5-9`, `10-19`, `20-29`, `30-59` y `60+` días) y una columna final **Total**. Los importes y totales se derivan de los datos del entorno y no se presentan como garantizados.

![Resumen por especialista — panel de filtros en el backoffice Agrimpex](/img/screenshots/reportes/por-especialista-filtros.png)

*Captura tomada del backoffice Agrimpex con el panel de filtros visible.*

## Operaciones y estados

Las acciones son compartidas por `ReportsListComponent` y están disponibles para **Administrador, Especialista, Calidad, Consultor o Logístico** en `/reports/summary-by-specialist`.

| Operación | Control | Condición y efecto |
|-----------|---------|--------------------|
| Generar | Botón **Generar** | Consulta el repositorio y construye la matriz de especialistas con la pestaña y el filtro activos; muestra el total agregado al terminar. |
| Cancelar | Botón **Cancelar** | Aparece después de generar y devuelve la pantalla al estado de configuración. |
| Exportar Excel | Botón **Exportar Excel** | Se habilita tras generar. Abre el diálogo con **Especialista** y **Total** como campos obligatorios y los rangos de días como opcionales; el libro usa las columnas elegidas y un nombre base derivado del tipo de reporte. |

Antes de generar se muestra **Configuración de reporte** con la instrucción de seleccionar parámetros; durante la consulta aparece el estado de carga y sin datos se indica **Sin resultados**.

![Resumen por especialista — operaciones en el backoffice Agrimpex](/img/screenshots/reportes/por-especialista-operaciones.png)

*Captura tomada del backoffice Agrimpex con el botón «Generar» y el área de resultados.*
