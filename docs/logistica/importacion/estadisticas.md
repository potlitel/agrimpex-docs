---
sidebar_position: 9
source_route: /logistic/import/stats
source_component: ImportStatsDashboardComponent
status: vigente
---

# Estadísticas de importación

## Propósito

Dashboard con indicadores agregados del proceso de importación.

## Acceso

- **Menú:** Logística → Estadísticas de importación
- **Ruta directa:** `/logistic/import/stats`
- **Componente:** `ImportStatsDashboardComponent`

## Captura

![estadisticas — captura real](/img/screenshots/logistica/importacion/estadisticas.png)

*Captura tomada del backoffice Agrimpex.*

## Campos

| Campo | Descripción | Obligatorio |
|-------|-------------|-------------|
| Cant. Contenedores | Total de contenedores considerados. | No |
| Estado | Estado logístico agrupado. | No |
| Días | Rango de días analizado. | No |

## Acciones

| Acción | Botón | Rol | Ruta |
|--------|-------|-----|------|
| Buscar | Buscar | Administrador, Especialista, Consultor o Logístico | `/logistic/import/stats` |
| Recargar | Recargar | Administrador, Especialista, Consultor o Logístico | `/logistic/import/stats` |

## Interpretación del panel

`/logistic/import/stats` es una vista de solo lectura sin controles de filtro. El resumen muestra cuatro tarjetas — TC Mariel, No Devueltos, Extracción y Recepción Puerta — con un puntaje de salud sobre 100, la tasa de éxito con su barra de progreso, los recuentos de importaciones correctas, parciales y fallidas, y el último fichero con su estado y hora. El puntaje combina tasa de éxito, duración y volumen, y la tendencia compara los últimos siete días con los siete anteriores; cuando no hay ficheros, la tarjeta indica «Sin importaciones registradas».

La sección «Gráficas Operativas» reúne cuatro visualizaciones: «Importaciones x Día (7d)», barras apiladas por día con las series `Success`, `Partial` y `Error`; «Tasa de Error por Tipo», barras horizontales con el porcentaje de errores para cada uno de los cuatro tipos; «Duración Promedio (ms)», una línea con el tiempo de procesamiento de las últimas importaciones; y «Health Score por Tipo», barras con el puntaje 0–100 por tipo. Las leyendas permiten centrarse en una serie y consultar los ficheros asociados. Estas gráficas describen la actividad registrada: no anticipan valores ni resultados de importaciones futuras.

«Alertas & Anomalías» enumera avisos sobre ficheros sin registros, importaciones fallidas, duraciones anómalas y tasas de error elevadas; si no hay incidencias muestra «Sin anomalías detectadas», y sin datos muestra «Sin datos de importaciones disponibles».

![Estadísticas — resumen por tipo de importación](/img/screenshots/logistica/importacion/estadisticas-panel-kpis.png)

*Captura tomada del backoffice Agrimpex: tarjetas de resumen y puntaje de salud por tipo.*

![Estadísticas — gráficas operativas](/img/screenshots/logistica/importacion/estadisticas-panel-graficos.png)

*Captura tomada del backoffice Agrimpex: gráficas de duración, puntaje de salud y alertas.*
