---
sidebar_position: 32
source_route: /management/nomenclatures/unit-of-measure/list
source_component: UnitOfMeasureListComponent
status: vigente
---

# Unidad de medida

## Propósito

Gestiona el nomenclador unidad de medida del sistema.

## Acceso

- **Menú:** Nomenclaturas → Unidad de medida
- **Ruta directa:** `/management/nomenclatures/unit-of-measure/list`
- **Componente:** `UnitOfMeasureListComponent`

> Las rutas `/management/nomenclatures/unit-of-measure/add` y `/management/nomenclatures/unit-of-measure/edit` comparten el formulario del nomenclador.

## Captura

![unit-of-measure — captura real](/img/screenshots/nomenclaturas/unit-of-measure.png)

*Captura tomada del backoffice Agrimpex.*

## Campos

| Campo | Descripción | Obligatorio |
|-------|-------------|-------------|
| Buscar | Filtro de texto para localizar registros. | No |
| Filtrar | Aplica los filtros seleccionados al listado. | No |
| Nombre | Nombre del elemento de unidad de medida. | Sí |

## Acciones

| Acción | Botón | Rol | Ruta |
|--------|-------|-----|------|
| Buscar | Buscar | Administrador o Especialista | `/management/nomenclatures/unit-of-measure/list` |
| Recargar | Recargar | Administrador o Especialista | `/management/nomenclatures/unit-of-measure/list` |
| Añadir | Añadir | Administrador, Especialista, Logístico o Calidad | `/management/nomenclatures/unit-of-measure/list/add` |
| Eliminar | Eliminar | Administrador, Especialista, Logístico o Calidad | `/management/nomenclatures/unit-of-measure/list` |
