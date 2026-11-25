---
sidebar_position: 3
source_route: /management/nomenclatures/permit-type/list
source_component: PermitTypeListComponent
status: vigente
---

# Tipo de permiso

## Propósito

Gestiona el nomenclador tipo de permiso del sistema.

## Acceso

- **Menú:** Nomenclaturas → Tipo de permiso
- **Ruta directa:** `/management/nomenclatures/permit-type/list`
- **Componente:** `PermitTypeListComponent`

> Las rutas `/management/nomenclatures/permit-type/add` y `/management/nomenclatures/permit-type/edit` comparten el formulario del nomenclador.

## Captura

![permiso — captura real](/img/screenshots/nomenclaturas/permiso.png)

*Captura tomada del backoffice Agrimpex.*

## Campos

| Campo | Descripción | Obligatorio |
|-------|-------------|-------------|
| Buscar | Filtro de texto para localizar registros. | No |
| Filtrar | Aplica los filtros seleccionados al listado. | No |
| Nombre | Nombre del elemento de tipo de permiso. | Sí |

## Acciones

| Acción | Botón | Rol | Ruta |
|--------|-------|-----|------|
| Buscar | Buscar | Administrador o Especialista | `/management/nomenclatures/permit-type/list` |
| Recargar | Recargar | Administrador o Especialista | `/management/nomenclatures/permit-type/list` |
| Añadir | Añadir | Administrador, Especialista, Logístico o Calidad | `/management/nomenclatures/permit-type/list/add` |
| Eliminar | Eliminar | Administrador, Especialista, Logístico o Calidad | `/management/nomenclatures/permit-type/list` |
