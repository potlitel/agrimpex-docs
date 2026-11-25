---
sidebar_position: 4
source_route: /management/nomenclatures/container-type/list
source_component: ContainerTypeListComponent
status: vigente
---

# Tipo de contenedor

## Propósito

Gestiona el nomenclador tipo de contenedor del sistema.

## Acceso

- **Menú:** Nomenclaturas → Tipo de contenedor
- **Ruta directa:** `/management/nomenclatures/container-type/list`
- **Componente:** `ContainerTypeListComponent`

> Las rutas `/management/nomenclatures/container-type/add` y `/management/nomenclatures/container-type/edit` comparten el formulario del nomenclador.

## Captura

![contenedor-tipo — captura real](/img/screenshots/nomenclaturas/contenedor-tipo.png)

*Captura tomada del backoffice Agrimpex.*

## Campos

| Campo | Descripción | Obligatorio |
|-------|-------------|-------------|
| Buscar | Filtro de texto para localizar registros. | No |
| Filtrar | Aplica los filtros seleccionados al listado. | No |
| Nombre | Nombre del elemento de tipo de contenedor. | Sí |

## Acciones

| Acción | Botón | Rol | Ruta |
|--------|-------|-----|------|
| Buscar | Buscar | Administrador o Especialista | `/management/nomenclatures/container-type/list` |
| Recargar | Recargar | Administrador o Especialista | `/management/nomenclatures/container-type/list` |
| Añadir | Añadir | Administrador, Especialista, Logístico o Calidad | `/management/nomenclatures/container-type/list/add` |
| Eliminar | Eliminar | Administrador, Especialista, Logístico o Calidad | `/management/nomenclatures/container-type/list` |
