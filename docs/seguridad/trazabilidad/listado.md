---
sidebar_position: 3
source_route: /security/trace/list
source_component: TraceListComponent
status: vigente
---

# Listado de trazabilidad

## Propósito

Consulta los eventos de trazabilidad registrados en el sistema.

## Acceso

- **Menú:** Seguridad → Listado de trazabilidad
- **Ruta directa:** `/security/trace/list`
- **Componente:** `TraceListComponent`

## Captura

![listado — captura real](/img/screenshots/seguridad/trazabilidad/listado.png)

*Captura tomada del backoffice Agrimpex.*

## Campos

| Campo | Descripción | Obligatorio |
|-------|-------------|-------------|
| Buscar | Filtro de texto para localizar registros. | No |
| Filtrar | Aplica los filtros seleccionados al listado. | No |
| Contenedor | Identificador del contenedor. | No |
| No. BL | Conocimiento de embarque. | No |
| Estado | Estado del evento. | No |

## Acciones

| Acción | Botón | Rol | Ruta |
|--------|-------|-----|------|
| Buscar | Buscar | Administrador o Especialista | `/security/trace/list` |
| Recargar | Recargar | Administrador o Especialista | `/security/trace/list` |
