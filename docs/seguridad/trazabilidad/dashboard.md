---
sidebar_position: 4
source_route: /security/trace/dashboard
source_component: TraceDashboardComponent
status: vigente
---

# Dashboard de trazabilidad

## Propósito

Presenta indicadores agregados de los eventos de trazabilidad.

## Acceso

- **Menú:** Seguridad → Dashboard de trazabilidad
- **Ruta directa:** `/security/trace/dashboard`
- **Componente:** `TraceDashboardComponent`

## Captura

![dashboard — captura real](/img/screenshots/seguridad/trazabilidad/dashboard.png)

*Captura tomada del backoffice Agrimpex.*

## Campos

| Campo | Descripción | Obligatorio |
|-------|-------------|-------------|
| Total | Cantidad total de eventos. | No |
| Estado | Estado agrupado. | No |
| Especialista | Especialista responsable. | No |

## Acciones

| Acción | Botón | Rol | Ruta |
|--------|-------|-----|------|
| Buscar | Buscar | Administrador o Especialista | `/security/trace/dashboard` |
| Recargar | Recargar | Administrador o Especialista | `/security/trace/dashboard` |
