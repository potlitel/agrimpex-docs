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
