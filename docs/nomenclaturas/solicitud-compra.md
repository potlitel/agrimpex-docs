---
sidebar_position: 29
source_route: /management/nomenclatures/solicitud-compra/list
source_component: SolicitudCompraListComponent
status: vigente
---

# Solicitud de Importación

## Propósito

Gestiona el nomenclador solicitud de importación del sistema.

## Acceso

- **Menú:** Nomenclaturas → Solicitud de Importación
- **Ruta directa:** `/management/nomenclatures/solicitud-compra/list`
- **Componente:** `SolicitudCompraListComponent`

> El frontend expone únicamente el listado de este nomenclador.

## Captura

![solicitud-compra — captura real](/img/screenshots/nomenclaturas/solicitud-compra.png)

*Captura tomada del backoffice Agrimpex.*

## Campos

| Campo | Descripción | Obligatorio |
|-------|-------------|-------------|
| Buscar | Filtro de texto para localizar registros. | No |
| Filtrar | Aplica los filtros seleccionados al listado. | No |
| Nombre | Nombre del elemento de solicitud de importación. | Sí |

## Acciones

| Acción | Botón | Rol | Ruta |
|--------|-------|-----|------|
| Buscar | Buscar | Administrador o Especialista | `/management/nomenclatures/solicitud-compra/list` |
| Recargar | Recargar | Administrador o Especialista | `/management/nomenclatures/solicitud-compra/list` |
