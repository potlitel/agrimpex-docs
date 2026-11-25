---
sidebar_position: 22
source_route: /management/nomenclatures/product-origin/list
source_component: ProductOriginListComponent
status: vigente
---

# Origen de producto

## Propósito

Gestiona el nomenclador origen de producto del sistema.

## Acceso

- **Menú:** Nomenclaturas → Origen de producto
- **Ruta directa:** `/management/nomenclatures/product-origin/list`
- **Componente:** `ProductOriginListComponent`

> Las rutas `/management/nomenclatures/product-origin/add` y `/management/nomenclatures/product-origin/edit` comparten el formulario del nomenclador.

## Captura

![product-origin — captura real](/img/screenshots/nomenclaturas/product-origin.png)

*Captura tomada del backoffice Agrimpex.*

## Campos

| Campo | Descripción | Obligatorio |
|-------|-------------|-------------|
| Buscar | Filtro de texto para localizar registros. | No |
| Filtrar | Aplica los filtros seleccionados al listado. | No |
| Nombre | Nombre del elemento de origen de producto. | Sí |

## Acciones

| Acción | Botón | Rol | Ruta |
|--------|-------|-----|------|
| Buscar | Buscar | Administrador o Especialista | `/management/nomenclatures/product-origin/list` |
| Recargar | Recargar | Administrador o Especialista | `/management/nomenclatures/product-origin/list` |
| Añadir | Añadir | Administrador, Especialista, Logístico o Calidad | `/management/nomenclatures/product-origin/list/add` |
| Eliminar | Eliminar | Administrador, Especialista, Logístico o Calidad | `/management/nomenclatures/product-origin/list` |
