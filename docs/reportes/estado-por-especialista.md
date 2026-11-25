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
