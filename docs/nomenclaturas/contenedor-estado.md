---
sidebar_position: 10
source_route: /management/nomenclatures/containers-state/list
source_component: ContainerStateListComponent
status: vigente
---

# Estados del contenedor

## Propósito

Gestiona el nomenclador estados del contenedor del sistema.

## Acceso

- **Menú:** Nomenclaturas → Estados del contenedor
- **Ruta directa:** `/management/nomenclatures/containers-state/list`
- **Componente:** `ContainerStateListComponent`

> Las rutas `/management/nomenclatures/containers-state/add` y `/management/nomenclatures/containers-state/edit` comparten el formulario del nomenclador.

## Captura

![contenedor-estado — captura real](/img/screenshots/nomenclaturas/contenedor-estado.png)

*Captura tomada del backoffice Agrimpex.*

## Campos

| Campo | Descripción | Obligatorio |
|-------|-------------|-------------|
| Buscar | Filtro de texto para localizar registros. | No |
| Filtrar | Aplica los filtros seleccionados al listado. | No |
| Nombre | Nombre del elemento de estados del contenedor. | Sí |

## Acciones

| Acción | Botón | Rol | Ruta |
|--------|-------|-----|------|
| Buscar | Buscar | Administrador o Especialista | `/management/nomenclatures/containers-state/list` |
| Recargar | Recargar | Administrador o Especialista | `/management/nomenclatures/containers-state/list` |
| Añadir | Añadir | Administrador, Especialista, Logístico o Calidad | `/management/nomenclatures/containers-state/list/add` |
| Eliminar | Eliminar | Administrador, Especialista, Logístico o Calidad | `/management/nomenclatures/containers-state/list` |
