---
sidebar_position: 11
source_route: /management/nomenclatures/operator/list
source_component: OperatorListComponent
status: vigente
---

# Operador

## Propósito

Gestiona el nomenclador operador del sistema.

## Acceso

- **Menú:** Nomenclaturas → Operador
- **Ruta directa:** `/management/nomenclatures/operator/list`
- **Componente:** `OperatorListComponent`

> Las rutas `/management/nomenclatures/operator/add` y `/management/nomenclatures/operator/edit` comparten el formulario del nomenclador.

## Captura

![operador — captura real](/img/screenshots/nomenclaturas/operador.png)

*Captura tomada del backoffice Agrimpex.*

## Campos

| Campo | Descripción | Obligatorio |
|-------|-------------|-------------|
| Buscar | Filtro de texto para localizar registros. | No |
| Filtrar | Aplica los filtros seleccionados al listado. | No |
| Nombre | Nombre del elemento de operador. | Sí |

## Acciones

| Acción | Botón | Rol | Ruta |
|--------|-------|-----|------|
| Buscar | Buscar | Administrador o Especialista | `/management/nomenclatures/operator/list` |
| Recargar | Recargar | Administrador o Especialista | `/management/nomenclatures/operator/list` |
| Añadir | Añadir | Administrador, Especialista, Logístico o Calidad | `/management/nomenclatures/operator/list/add` |
| Eliminar | Eliminar | Administrador, Especialista, Logístico o Calidad | `/management/nomenclatures/operator/list` |
