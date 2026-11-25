---
sidebar_position: 6
source_route: /reports/monitoring
source_component: MonitoringReportsComponent
status: vigente
---

# Monitorización

## Propósito

Da seguimiento a contenedores en diferentes condiciones operativas.

## Acceso

- **Menú:** Reportes → Monitorización
- **Ruta directa:** `/reports/monitoring`
- **Componente:** `MonitoringReportsComponent`

## Captura

![monitorizacion — captura real](/img/screenshots/reportes/monitorizacion.png)

*Captura tomada del backoffice Agrimpex.*

## Campos

| Campo | Descripción | Obligatorio |
|-------|-------------|-------------|
| Buscar | Filtro de texto para localizar registros. | No |
| Filtrar | Aplica los filtros seleccionados al listado. | No |
| Contenedor | Identificador del contenedor. | No |
| Días | Días transcurridos. | No |
| Horas | Horas transcurridas. | No |

## Acciones

| Acción | Botón | Rol | Ruta |
|--------|-------|-----|------|
| Generar | Generar | Administrador, Especialista, Calidad, Consultor o Logístico | `/reports/monitoring` |
| Actualizar | Actualizar | Administrador, Especialista, Calidad, Consultor o Logístico | `/reports/monitoring` |
