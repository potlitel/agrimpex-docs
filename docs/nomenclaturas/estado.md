---
sidebar_position: 9
source_route: /management/nomenclatures/state/list
source_component: StateListComponent
status: vigente
---

# Estado

## Propósito

Gestiona el nomenclador estado del sistema.

## Acceso

- **Menú:** Nomenclaturas → Estado
- **Ruta directa:** `/management/nomenclatures/state/list`
- **Componente:** `StateListComponent`

> Las rutas `/management/nomenclatures/state/add` y `/management/nomenclatures/state/edit` comparten el formulario del nomenclador.

## Captura

![estado — captura real](/img/screenshots/nomenclaturas/estado.png)

*Captura tomada del backoffice Agrimpex.*

## Campos

| Campo | Descripción | Obligatorio |
|-------|-------------|-------------|
| Buscar | Filtro de texto para localizar registros. | No |
| Filtrar | Aplica los filtros seleccionados al listado. | No |
| Nombre | Nombre del elemento de estado. | Sí |

## Acciones

| Acción | Botón | Rol | Ruta |
|--------|-------|-----|------|
| Buscar | Buscar | Administrador o Especialista | `/management/nomenclatures/state/list` |
| Recargar | Recargar | Administrador o Especialista | `/management/nomenclatures/state/list` |
| Añadir | Añadir | Administrador, Especialista, Logístico o Calidad | `/management/nomenclatures/state/list/add` |
| Eliminar | Eliminar | Administrador, Especialista, Logístico o Calidad | `/management/nomenclatures/state/list` |
