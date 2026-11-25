---
sidebar_position: 2
source_route: /logistic/import
source_component: ImportDashboardComponent
status: vigente
---

# Dashboard de importación

## Propósito

Muestra el estado general de las importaciones y abre los listados operativos.

## Acceso

- **Menú:** Logística → Dashboard de importación
- **Ruta directa:** `/logistic/import`
- **Componente:** `ImportDashboardComponent`

## Captura

![dashboard — captura real](/img/screenshots/logistica/importacion/dashboard.png)

*Captura tomada del backoffice Agrimpex.*

## Campos

| Campo | Descripción | Obligatorio |
|-------|-------------|-------------|
| Contenedor | Identificador del contenedor. | No |
| No. BL | Número de conocimiento de embarque. | No |
| Días en puerto | Permanencia del contenedor en terminal. | No |
| Estado | Estado logístico actual. | No |

## Acciones

| Acción | Botón | Rol | Ruta |
|--------|-------|-----|------|
| Buscar | Buscar | Administrador, Especialista, Consultor o Logístico | `/logistic/import` |
| Ver estadísticas | Acceder | Administrador, Especialista, Consultor o Logístico | `/logistic/import/stats` |
