---
sidebar_position: 12
source_route: /management/nomenclatures/loads-type/list
source_component: LoadTypeListComponent
status: vigente
---

# Tipo de carga

## Propósito

Gestiona el nomenclador tipo de carga del sistema.

## Acceso

- **Menú:** Nomenclaturas → Tipo de carga
- **Ruta directa:** `/management/nomenclatures/loads-type/list`
- **Componente:** `LoadTypeListComponent`

> Las rutas `/management/nomenclatures/loads-type/add` y `/management/nomenclatures/loads-type/edit` comparten el formulario del nomenclador.

## Captura

![carga — captura real](/img/screenshots/nomenclaturas/carga.png)

*Captura tomada del backoffice Agrimpex.*

## Campos

| Campo | Descripción | Obligatorio |
|-------|-------------|-------------|
| Buscar | Filtro de texto para localizar registros. | No |
| Filtrar | Aplica los filtros seleccionados al listado. | No |
| Nombre | Nombre del elemento de tipo de carga. | Sí |

## Acciones

| Acción | Botón | Rol | Ruta |
|--------|-------|-----|------|
| Buscar | Buscar | Administrador o Especialista | `/management/nomenclatures/loads-type/list` |
| Recargar | Recargar | Administrador o Especialista | `/management/nomenclatures/loads-type/list` |
| Añadir | Añadir | Administrador, Especialista, Logístico o Calidad | `/management/nomenclatures/loads-type/list/add` |
| Eliminar | Eliminar | Administrador, Especialista, Logístico o Calidad | `/management/nomenclatures/loads-type/list` |
