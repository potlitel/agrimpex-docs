---
sidebar_position: 25
source_route: /management/nomenclatures/airline/list
source_component: AirlineListComponent
status: vigente
---

# Aerolínea

## Propósito

Gestiona el nomenclador aerolínea del sistema.

## Acceso

- **Menú:** Nomenclaturas → Aerolínea
- **Ruta directa:** `/management/nomenclatures/airline/list`
- **Componente:** `AirlineListComponent`

> Las rutas `/management/nomenclatures/airline/add` y `/management/nomenclatures/airline/edit` comparten el formulario del nomenclador.

## Captura

![airline — captura real](/img/screenshots/nomenclaturas/airline.png)

*Captura tomada del backoffice Agrimpex.*

## Campos

| Campo | Descripción | Obligatorio |
|-------|-------------|-------------|
| Buscar | Filtro de texto para localizar registros. | No |
| Filtrar | Aplica los filtros seleccionados al listado. | No |
| Nombre | Nombre del elemento de aerolínea. | Sí |

## Acciones

| Acción | Botón | Rol | Ruta |
|--------|-------|-----|------|
| Buscar | Buscar | Administrador o Especialista | `/management/nomenclatures/airline/list` |
| Recargar | Recargar | Administrador o Especialista | `/management/nomenclatures/airline/list` |
| Añadir | Añadir | Administrador, Especialista, Logístico o Calidad | `/management/nomenclatures/airline/list/add` |
| Eliminar | Eliminar | Administrador, Especialista, Logístico o Calidad | `/management/nomenclatures/airline/list` |
