---
sidebar_position: 8
source_route: /logistic/import/logs
source_component: ImportLogsListComponent
status: vigente
---

# Logs de importación

## Propósito

Muestra el historial de eventos registrados durante la gestión de importaciones.

## Acceso

- **Menú:** Logística → Logs de importación
- **Ruta directa:** `/logistic/import/logs`
- **Componente:** `ImportLogsListComponent`

## Captura

![logs — captura real](/img/screenshots/logistica/importacion/logs.png)

*Captura tomada del backoffice Agrimpex.*

## Campos

| Campo | Descripción | Obligatorio |
|-------|-------------|-------------|
| Contenedor | Identificador del contenedor. | No |
| Fecha | Fecha del evento. | No |
| Descripción | Detalle del evento. | No |

## Acciones

| Acción | Botón | Rol | Ruta |
|--------|-------|-----|------|
| Buscar | Buscar | Administrador, Especialista, Consultor o Logístico | `/logistic/import/logs` |
| Recargar | Recargar | Administrador, Especialista, Consultor o Logístico | `/logistic/import/logs` |
