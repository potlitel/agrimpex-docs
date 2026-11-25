---
sidebar_position: 1
source_route: /reports
source_component: ReportsManagementPage
status: vigente
---

# Reportes

## Propósito

Panel de entrada a los reportes operativos y de exportación.

## Acceso

- **Menú:** Reportes → Reportes
- **Ruta directa:** `/reports`
- **Componente:** `ReportsManagementPage`

## Captura

![index — captura real](/img/screenshots/reportes/index.png)

*Captura tomada del backoffice Agrimpex.*

## Campos

| Campo | Descripción | Obligatorio |
|-------|-------------|-------------|
| Tipo de Reporte | Reporte seleccionado. | No |
| Rango de fechas de arribo | Período del reporte. | No |

## Acciones

| Acción | Botón | Rol | Ruta |
|--------|-------|-----|------|
| Generar | Generar | Administrador, Especialista, Calidad, Consultor o Logístico | `/reports/days-range` |
| Exportar Excel | Exportar Excel | Administrador, Especialista, Calidad, Consultor o Logístico | `/reports/arrived-enabled` |
