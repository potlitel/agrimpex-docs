---
sidebar_position: 1
source_route: /calidad/import-permits/dashboard
source_component: ImportPermitsDashboardComponent
status: vigente
---

# Calidad

## Propósito

Panel canónico de permisos de importación y preliberaciones de calidad.

## Acceso

- **Menú:** Calidad → Calidad
- **Ruta directa:** `/calidad/import-permits/dashboard`
- **Componente:** `ImportPermitsDashboardComponent`

> Logística enlaza a este módulo; no mantiene copias de estas pantallas.

## Captura

![index — captura real](/img/screenshots/calidad/index.png)

*Captura tomada del backoffice Agrimpex.*

## Campos

| Campo | Descripción | Obligatorio |
|-------|-------------|-------------|
| Contenedor | Identificador del contenedor. | No |
| Estado | Estado del permiso o preliberación. | No |

## Acciones

| Acción | Botón | Rol | Ruta |
|--------|-------|-----|------|
| Ir a permisos | Acceder | Administrador, Especialista, Calidad o Consultor | `/calidad/import-permits/cenasa/list` |
| Ir a preliberaciones | Acceder | Administrador, Especialista, Calidad o Consultor | `/calidad/preliberations/health/list` |
