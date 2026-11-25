---
sidebar_position: 27
source_route: /management/nomenclatures/ship/list
source_component: ShipListComponent
status: vigente
---

# Buque

## Propósito

Gestiona el nomenclador buque del sistema.

## Acceso

- **Menú:** Nomenclaturas → Buque
- **Ruta directa:** `/management/nomenclatures/ship/list`
- **Componente:** `ShipListComponent`

> Las rutas `/management/nomenclatures/ship/add` y `/management/nomenclatures/ship/edit` comparten el formulario del nomenclador.

## Captura

![ship — captura real](/img/screenshots/nomenclaturas/ship.png)

*Captura tomada del backoffice Agrimpex.*

## Campos

| Campo | Descripción | Obligatorio |
|-------|-------------|-------------|
| Buscar | Filtro de texto para localizar registros. | No |
| Filtrar | Aplica los filtros seleccionados al listado. | No |
| Nombre | Nombre del elemento de buque. | Sí |

## Acciones

| Acción | Botón | Rol | Ruta |
|--------|-------|-----|------|
| Buscar | Buscar | Administrador o Especialista | `/management/nomenclatures/ship/list` |
| Recargar | Recargar | Administrador o Especialista | `/management/nomenclatures/ship/list` |
| Añadir | Añadir | Administrador, Especialista, Logístico o Calidad | `/management/nomenclatures/ship/list/add` |
| Eliminar | Eliminar | Administrador, Especialista, Logístico o Calidad | `/management/nomenclatures/ship/list` |
