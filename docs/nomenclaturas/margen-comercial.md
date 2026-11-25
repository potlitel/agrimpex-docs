---
sidebar_position: 34
source_route: /management/nomenclatures/margen-comercial/list
source_component: MargenComercialListComponent
status: vigente
---

# Margen comercial

## Propósito

Gestiona el nomenclador margen comercial del sistema.

## Acceso

- **Menú:** Nomenclaturas → Margen comercial
- **Ruta directa:** `/management/nomenclatures/margen-comercial/list`
- **Componente:** `MargenComercialListComponent`

> Las rutas `/management/nomenclatures/margen-comercial/add` y `/management/nomenclatures/margen-comercial/edit` comparten el formulario del nomenclador.

## Captura

![margen-comercial — captura real](/img/screenshots/nomenclaturas/margen-comercial.png)

*Captura tomada del backoffice Agrimpex.*

## Campos

| Campo | Descripción | Obligatorio |
|-------|-------------|-------------|
| Buscar | Filtro de texto para localizar registros. | No |
| Filtrar | Aplica los filtros seleccionados al listado. | No |
| Nombre | Nombre del elemento de margen comercial. | Sí |

## Acciones

| Acción | Botón | Rol | Ruta |
|--------|-------|-----|------|
| Buscar | Buscar | Administrador o Especialista | `/management/nomenclatures/margen-comercial/list` |
| Recargar | Recargar | Administrador o Especialista | `/management/nomenclatures/margen-comercial/list` |
| Añadir | Añadir | Administrador, Especialista, Logístico o Calidad | `/management/nomenclatures/margen-comercial/list/add` |
| Eliminar | Eliminar | Administrador, Especialista, Logístico o Calidad | `/management/nomenclatures/margen-comercial/list` |
