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
