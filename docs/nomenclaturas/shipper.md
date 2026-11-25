---
sidebar_position: 24
source_route: /management/nomenclatures/shipper/list
source_component: ShipperListComponent
status: vigente
---

# Embarcador

## Propósito

Gestiona el nomenclador embarcador del sistema.

## Acceso

- **Menú:** Nomenclaturas → Embarcador
- **Ruta directa:** `/management/nomenclatures/shipper/list`
- **Componente:** `ShipperListComponent`

> Las rutas `/management/nomenclatures/shipper/add` y `/management/nomenclatures/shipper/edit` comparten el formulario del nomenclador.

## Captura

![shipper — captura real](/img/screenshots/nomenclaturas/shipper.png)

*Captura tomada del backoffice Agrimpex.*

## Campos

| Campo | Descripción | Obligatorio |
|-------|-------------|-------------|
| Buscar | Filtro de texto para localizar registros. | No |
| Filtrar | Aplica los filtros seleccionados al listado. | No |
| Nombre | Nombre del elemento de embarcador. | Sí |

## Acciones

| Acción | Botón | Rol | Ruta |
|--------|-------|-----|------|
| Buscar | Buscar | Administrador o Especialista | `/management/nomenclatures/shipper/list` |
| Recargar | Recargar | Administrador o Especialista | `/management/nomenclatures/shipper/list` |
| Añadir | Añadir | Administrador, Especialista, Logístico o Calidad | `/management/nomenclatures/shipper/list/add` |
| Eliminar | Eliminar | Administrador, Especialista, Logístico o Calidad | `/management/nomenclatures/shipper/list` |
