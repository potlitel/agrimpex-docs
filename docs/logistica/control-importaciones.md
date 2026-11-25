---
sidebar_position: 11
source_route: /logistic/imports-control
source_component: ImportControlShellComponent
status: vigente
---

# Control de importaciones

## Propósito

Permite seguir y controlar cada solicitud de importación desde su creación.

## Acceso

- **Menú:** Logística → Control de importaciones
- **Ruta directa:** `/logistic/imports-control`
- **Componente:** `ImportControlShellComponent`

## Captura

![control-importaciones — captura real](/img/screenshots/logistica/control-importaciones.png)

*Captura tomada del backoffice Agrimpex.*

## Campos

| Campo | Descripción | Obligatorio |
|-------|-------------|-------------|
| Buscar | Filtro de texto para localizar registros. | No |
| Filtrar | Aplica los filtros seleccionados al listado. | No |
| No. solicitud | Identificador de la solicitud. | No |
| Contenedor | Contenedor asociado. | No |
| Estado | Estado de la solicitud. | No |

## Acciones

| Acción | Botón | Rol | Ruta |
|--------|-------|-----|------|
| Buscar | Buscar | Administrador, Especialista, Logístico o Calidad | `/logistic/imports-control` |
| Recargar | Recargar | Administrador, Especialista, Logístico o Calidad | `/logistic/imports-control` |
| Añadir | Añadir | Administrador, Especialista, Logístico o Calidad | `/logistic/imports-control/add` |
