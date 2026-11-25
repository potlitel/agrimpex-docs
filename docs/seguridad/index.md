---
sidebar_position: 1
source_route: /security/trace
source_component: TracePage
status: vigente
---

# Seguridad

## Propósito

Centro de control de trazabilidad, verificación documental y notificaciones.

## Acceso

- **Menú:** Seguridad → Seguridad
- **Ruta directa:** `/security/trace`
- **Componente:** `TracePage`

## Captura

![index — captura real](/img/screenshots/seguridad/index.png)

*Captura tomada del backoffice Agrimpex.*

## Campos

| Campo | Descripción | Obligatorio |
|-------|-------------|-------------|
| Contenedor | Identificador del contenedor. | No |
| Estado | Estado del evento. | No |

## Acciones

| Acción | Botón | Rol | Ruta |
|--------|-------|-----|------|
| Ir a trazabilidad | Acceder | Administrador o Especialista | `/security/trace/list` |
| Ir a verificación | Acceder | Todo usuario autenticado | `/verification` |
| Ver notificaciones | Acceder | Todo usuario autenticado | `/logistic/notification/:entityType/:entityId` |
