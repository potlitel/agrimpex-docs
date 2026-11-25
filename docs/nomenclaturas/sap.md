---
sidebar_position: 15
source_route: /management/nomenclatures/sap/list
source_component: SAPListComponent
status: vigente
---

# Estado de solicitud de importación

## Propósito

Gestiona el nomenclador estado de solicitud de importación del sistema.

## Acceso

- **Menú:** Nomenclaturas → Estado de solicitud de importación
- **Ruta directa:** `/management/nomenclatures/sap/list`
- **Componente:** `SAPListComponent`

> Las rutas `/management/nomenclatures/sap/add` y `/management/nomenclatures/sap/edit` comparten el formulario del nomenclador.

## Captura

![sap — captura real](/img/screenshots/nomenclaturas/sap.png)

*Captura tomada del backoffice Agrimpex.*

## Campos

| Campo | Descripción | Obligatorio |
|-------|-------------|-------------|
| Buscar | Filtro de texto para localizar registros. | No |
| Filtrar | Aplica los filtros seleccionados al listado. | No |
| Nombre | Nombre del elemento de estado de solicitud de importación. | Sí |

## Acciones

| Acción | Botón | Rol | Ruta |
|--------|-------|-----|------|
| Buscar | Buscar | Administrador o Especialista | `/management/nomenclatures/sap/list` |
| Recargar | Recargar | Administrador o Especialista | `/management/nomenclatures/sap/list` |
| Añadir | Añadir | Administrador, Especialista, Logístico o Calidad | `/management/nomenclatures/sap/list/add` |
| Eliminar | Eliminar | Administrador, Especialista, Logístico o Calidad | `/management/nomenclatures/sap/list` |
