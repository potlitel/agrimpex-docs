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
