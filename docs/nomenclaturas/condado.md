---
sidebar_position: 8
source_route: /management/nomenclatures/county/list
source_component: CountyListComponent
status: vigente
---

# Condado

## Propósito

Gestiona el nomenclador condado del sistema.

## Acceso

- **Menú:** Nomenclaturas → Condado
- **Ruta directa:** `/management/nomenclatures/county/list`
- **Componente:** `CountyListComponent`

> Las rutas `/management/nomenclatures/county/add` y `/management/nomenclatures/county/edit` comparten el formulario del nomenclador.

## Captura

![condado — captura real](/img/screenshots/nomenclaturas/condado.png)

*Captura tomada del backoffice Agrimpex.*

## Campos

| Campo | Descripción | Obligatorio |
|-------|-------------|-------------|
| Buscar | Filtro de texto para localizar registros. | No |
| Filtrar | Aplica los filtros seleccionados al listado. | No |
| Nombre | Nombre del elemento de condado. | Sí |

## Acciones

| Acción | Botón | Rol | Ruta |
|--------|-------|-----|------|
| Buscar | Buscar | Administrador o Especialista | `/management/nomenclatures/county/list` |
| Recargar | Recargar | Administrador o Especialista | `/management/nomenclatures/county/list` |
| Añadir | Añadir | Administrador, Especialista, Logístico o Calidad | `/management/nomenclatures/county/list/add` |
| Eliminar | Eliminar | Administrador, Especialista, Logístico o Calidad | `/management/nomenclatures/county/list` |
