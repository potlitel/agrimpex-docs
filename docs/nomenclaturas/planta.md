---
sidebar_position: 13
source_route: /management/nomenclatures/plant/list
source_component: PlantListComponent
status: vigente
---

# Planta

## Propósito

Gestiona el nomenclador planta del sistema.

## Acceso

- **Menú:** Nomenclaturas → Planta
- **Ruta directa:** `/management/nomenclatures/plant/list`
- **Componente:** `PlantListComponent`

> Las rutas `/management/nomenclatures/plant/add` y `/management/nomenclatures/plant/edit` comparten el formulario del nomenclador.

## Captura

![planta — captura real](/img/screenshots/nomenclaturas/planta.png)

*Captura tomada del backoffice Agrimpex.*

## Campos

| Campo | Descripción | Obligatorio |
|-------|-------------|-------------|
| Buscar | Filtro de texto para localizar registros. | No |
| Filtrar | Aplica los filtros seleccionados al listado. | No |
| Nombre | Nombre del elemento de planta. | Sí |

## Acciones

| Acción | Botón | Rol | Ruta |
|--------|-------|-----|------|
| Buscar | Buscar | Administrador o Especialista | `/management/nomenclatures/plant/list` |
| Recargar | Recargar | Administrador o Especialista | `/management/nomenclatures/plant/list` |
| Añadir | Añadir | Administrador, Especialista, Logístico o Calidad | `/management/nomenclatures/plant/list/add` |
| Eliminar | Eliminar | Administrador, Especialista, Logístico o Calidad | `/management/nomenclatures/plant/list` |
