---
sidebar_position: 23
source_route: /management/nomenclatures/port/list
source_component: PortListComponent
status: vigente
---

# Puerto

## Propósito

Gestiona el nomenclador puerto del sistema.

## Acceso

- **Menú:** Nomenclaturas → Puerto
- **Ruta directa:** `/management/nomenclatures/port/list`
- **Componente:** `PortListComponent`

> Las rutas `/management/nomenclatures/port/add` y `/management/nomenclatures/port/edit` comparten el formulario del nomenclador.

## Captura

![port — captura real](/img/screenshots/nomenclaturas/port.png)

*Captura tomada del backoffice Agrimpex.*

## Campos

| Campo | Descripción | Obligatorio |
|-------|-------------|-------------|
| Buscar | Filtro de texto para localizar registros. | No |
| Filtrar | Aplica los filtros seleccionados al listado. | No |
| Nombre | Nombre del elemento de puerto. | Sí |

## Acciones

| Acción | Botón | Rol | Ruta |
|--------|-------|-----|------|
| Buscar | Buscar | Administrador o Especialista | `/management/nomenclatures/port/list` |
| Recargar | Recargar | Administrador o Especialista | `/management/nomenclatures/port/list` |
| Añadir | Añadir | Administrador, Especialista, Logístico o Calidad | `/management/nomenclatures/port/list/add` |
| Eliminar | Eliminar | Administrador, Especialista, Logístico o Calidad | `/management/nomenclatures/port/list` |
