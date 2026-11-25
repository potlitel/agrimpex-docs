---
sidebar_position: 6
source_route: /management/nomenclatures/cargo/list
source_component: CargoListComponent
status: vigente
---

# Cargo

## Propósito

Gestiona el nomenclador cargo del sistema.

## Acceso

- **Menú:** Nomenclaturas → Cargo
- **Ruta directa:** `/management/nomenclatures/cargo/list`
- **Componente:** `CargoListComponent`

> Las rutas `/management/nomenclatures/cargo/add` y `/management/nomenclatures/cargo/edit` comparten el formulario del nomenclador.

## Captura

![cargo — captura real](/img/screenshots/nomenclaturas/cargo.png)

*Captura tomada del backoffice Agrimpex.*

## Campos

| Campo | Descripción | Obligatorio |
|-------|-------------|-------------|
| Buscar | Filtro de texto para localizar registros. | No |
| Filtrar | Aplica los filtros seleccionados al listado. | No |
| Nombre | Nombre del elemento de cargo. | Sí |

## Acciones

| Acción | Botón | Rol | Ruta |
|--------|-------|-----|------|
| Buscar | Buscar | Administrador o Especialista | `/management/nomenclatures/cargo/list` |
| Recargar | Recargar | Administrador o Especialista | `/management/nomenclatures/cargo/list` |
| Añadir | Añadir | Administrador, Especialista, Logístico o Calidad | `/management/nomenclatures/cargo/list/add` |
| Eliminar | Eliminar | Administrador, Especialista, Logístico o Calidad | `/management/nomenclatures/cargo/list` |
