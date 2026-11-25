---
sidebar_position: 14
source_route: /management/nomenclatures/product/list
source_component: ProductListComponent
status: vigente
---

# Producto

## Propósito

Gestiona el nomenclador producto del sistema.

## Acceso

- **Menú:** Nomenclaturas → Producto
- **Ruta directa:** `/management/nomenclatures/product/list`
- **Componente:** `ProductListComponent`

> Las rutas `/management/nomenclatures/product/add` y `/management/nomenclatures/product/edit` comparten el formulario del nomenclador.

## Captura

![producto — captura real](/img/screenshots/nomenclaturas/producto.png)

*Captura tomada del backoffice Agrimpex.*

## Campos

| Campo | Descripción | Obligatorio |
|-------|-------------|-------------|
| Buscar | Filtro de texto para localizar registros. | No |
| Filtrar | Aplica los filtros seleccionados al listado. | No |
| Nombre | Nombre del elemento de producto. | Sí |

## Acciones

| Acción | Botón | Rol | Ruta |
|--------|-------|-----|------|
| Buscar | Buscar | Administrador o Especialista | `/management/nomenclatures/product/list` |
| Recargar | Recargar | Administrador o Especialista | `/management/nomenclatures/product/list` |
| Añadir | Añadir | Administrador, Especialista, Logístico o Calidad | `/management/nomenclatures/product/list/add` |
| Eliminar | Eliminar | Administrador, Especialista, Logístico o Calidad | `/management/nomenclatures/product/list` |
