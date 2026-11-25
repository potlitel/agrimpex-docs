---
sidebar_position: 31
source_route: /management/nomenclatures/brand/list
source_component: BrandListComponent
status: vigente
---

# Marca

## Propósito

Gestiona el nomenclador marca del sistema.

## Acceso

- **Menú:** Nomenclaturas → Marca
- **Ruta directa:** `/management/nomenclatures/brand/list`
- **Componente:** `BrandListComponent`

> Las rutas `/management/nomenclatures/brand/add` y `/management/nomenclatures/brand/edit` comparten el formulario del nomenclador.

## Captura

![brand — captura real](/img/screenshots/nomenclaturas/brand.png)

*Captura tomada del backoffice Agrimpex.*

## Campos

| Campo | Descripción | Obligatorio |
|-------|-------------|-------------|
| Buscar | Filtro de texto para localizar registros. | No |
| Filtrar | Aplica los filtros seleccionados al listado. | No |
| Nombre | Nombre del elemento de marca. | Sí |

## Acciones

| Acción | Botón | Rol | Ruta |
|--------|-------|-----|------|
| Buscar | Buscar | Administrador o Especialista | `/management/nomenclatures/brand/list` |
| Recargar | Recargar | Administrador o Especialista | `/management/nomenclatures/brand/list` |
| Añadir | Añadir | Administrador, Especialista, Logístico o Calidad | `/management/nomenclatures/brand/list/add` |
| Eliminar | Eliminar | Administrador, Especialista, Logístico o Calidad | `/management/nomenclatures/brand/list` |
