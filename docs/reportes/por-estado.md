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
