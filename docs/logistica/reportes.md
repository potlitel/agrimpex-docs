---
sidebar_position: 33
source_route: /logistic/reports
source_component: ImportReportsComponent
status: vigente
---

# Reportes de importación

## Propósito

Genera reportes operativos específicos del módulo logístico.

## Acceso

- **Menú:** Logística → Reportes de importación
- **Ruta directa:** `/logistic/reports`
- **Componente:** `ImportReportsComponent`

## Captura

![reportes — captura real](/img/screenshots/logistica/reportes.png)

*Captura tomada del backoffice Agrimpex.*

## Campos

| Campo | Descripción | Obligatorio |
|-------|-------------|-------------|
| Buscar | Filtro de texto para localizar registros. | No |
| Filtrar | Aplica los filtros seleccionados al listado. | No |
| Tipo de Reporte | Reporte logístico a generar. | No |
| Rango de fechas de arribo | Período de consulta. | No |

## Acciones

| Acción | Botón | Rol | Ruta |
|--------|-------|-----|------|
| Generar | Generar | Administrador, Especialista, Consultor o Logístico | `/logistic/reports` |
| Exportar Excel | Exportar Excel | Administrador, Especialista, Consultor o Logístico | `/logistic/reports` |
