---
sidebar_position: 7
source_route: /reports/customs-priorities
source_component: CustomsPrioritiesReportComponent
status: vigente
---

# Prioridades aduaneras

## Propósito

Lista cargas en trámite de aduana con cálculo de estadía.

## Acceso

- **Menú:** Reportes → Prioridades aduaneras
- **Ruta directa:** `/reports/customs-priorities`
- **Componente:** `CustomsPrioritiesReportComponent`

> Ruta restringida por `canMatch` a Administrador, Especialista, Logístico y Consultor.

## Captura

![prioridades-aduaneras — captura real](/img/screenshots/reportes/prioridades-aduaneras.png)

*Captura tomada del backoffice Agrimpex.*

## Campos

| Campo | Descripción | Obligatorio |
|-------|-------------|-------------|
| Buscar | Filtro de texto para localizar registros. | No |
| Filtrar | Aplica los filtros seleccionados al listado. | No |
| Contenedor | Identificador del contenedor. | No |
| Estado | Estado aduanero. | No |
| Días | Días en trámite. | No |

## Acciones

| Acción | Botón | Rol | Ruta |
|--------|-------|-----|------|
| Generar | Generar | Administrador, Especialista, Logístico o Consultor | `/reports/customs-priorities` |
| Exportar Excel | Exportar Excel | Administrador, Especialista, Logístico o Consultor | `/reports/customs-priorities` |
