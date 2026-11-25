---
sidebar_position: 5
source_route: /management/nomenclatures/area/list
source_component: AreaListComponent
status: vigente
---

# Área

## Propósito

Gestiona el nomenclador área del sistema.

## Acceso

- **Menú:** Nomenclaturas → Área
- **Ruta directa:** `/management/nomenclatures/area/list`
- **Componente:** `AreaListComponent`

> Las rutas `/management/nomenclatures/area/add` y `/management/nomenclatures/area/edit` comparten el formulario del nomenclador.

## Captura

![area — captura real](/img/screenshots/nomenclaturas/area.png)

*Captura tomada del backoffice Agrimpex.*

## Campos

| Campo | Descripción | Obligatorio |
|-------|-------------|-------------|
| Buscar | Filtro de texto para localizar registros. | No |
| Filtrar | Aplica los filtros seleccionados al listado. | No |
| Nombre | Nombre del elemento de área. | Sí |

## Acciones

| Acción | Botón | Rol | Ruta |
|--------|-------|-----|------|
| Buscar | Buscar | Administrador o Especialista | `/management/nomenclatures/area/list` |
| Recargar | Recargar | Administrador o Especialista | `/management/nomenclatures/area/list` |
| Añadir | Añadir | Administrador, Especialista, Logístico o Calidad | `/management/nomenclatures/area/list/add` |
| Eliminar | Eliminar | Administrador, Especialista, Logístico o Calidad | `/management/nomenclatures/area/list` |
