---
sidebar_position: 33
source_route: /management/nomenclatures/categoria/list
source_component: CategoriaListComponent
status: vigente
---

# Categoría

## Propósito

Gestiona el nomenclador categoría del sistema.

## Acceso

- **Menú:** Nomenclaturas → Categoría
- **Ruta directa:** `/management/nomenclatures/categoria/list`
- **Componente:** `CategoriaListComponent`

> Las rutas `/management/nomenclatures/categoria/add` y `/management/nomenclatures/categoria/edit` comparten el formulario del nomenclador.

## Captura

![categoria — captura real](/img/screenshots/nomenclaturas/categoria.png)

*Captura tomada del backoffice Agrimpex.*

## Campos

| Campo | Descripción | Obligatorio |
|-------|-------------|-------------|
| Buscar | Filtro de texto para localizar registros. | No |
| Filtrar | Aplica los filtros seleccionados al listado. | No |
| Nombre | Nombre del elemento de categoría. | Sí |

## Acciones

| Acción | Botón | Rol | Ruta |
|--------|-------|-----|------|
| Buscar | Buscar | Administrador o Especialista | `/management/nomenclatures/categoria/list` |
| Recargar | Recargar | Administrador o Especialista | `/management/nomenclatures/categoria/list` |
| Añadir | Añadir | Administrador, Especialista, Logístico o Calidad | `/management/nomenclatures/categoria/list/add` |
| Eliminar | Eliminar | Administrador, Especialista, Logístico o Calidad | `/management/nomenclatures/categoria/list` |
