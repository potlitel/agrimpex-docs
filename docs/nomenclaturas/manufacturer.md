---
sidebar_position: 30
source_route: /management/nomenclatures/manufacturer/list
source_component: ManufacturerListComponent
status: vigente
---

# Fabricante

## Propósito

Gestiona el nomenclador fabricante del sistema.

## Acceso

- **Menú:** Nomenclaturas → Fabricante
- **Ruta directa:** `/management/nomenclatures/manufacturer/list`
- **Componente:** `ManufacturerListComponent`

> Las rutas `/management/nomenclatures/manufacturer/add` y `/management/nomenclatures/manufacturer/edit` comparten el formulario del nomenclador.

## Captura

![manufacturer — captura real](/img/screenshots/nomenclaturas/manufacturer.png)

*Captura tomada del backoffice Agrimpex.*

## Campos

| Campo | Descripción | Obligatorio |
|-------|-------------|-------------|
| Buscar | Filtro de texto para localizar registros. | No |
| Filtrar | Aplica los filtros seleccionados al listado. | No |
| Nombre | Nombre del elemento de fabricante. | Sí |

## Acciones

| Acción | Botón | Rol | Ruta |
|--------|-------|-----|------|
| Buscar | Buscar | Administrador o Especialista | `/management/nomenclatures/manufacturer/list` |
| Recargar | Recargar | Administrador o Especialista | `/management/nomenclatures/manufacturer/list` |
| Añadir | Añadir | Administrador, Especialista, Logístico o Calidad | `/management/nomenclatures/manufacturer/list/add` |
| Eliminar | Eliminar | Administrador, Especialista, Logístico o Calidad | `/management/nomenclatures/manufacturer/list` |
