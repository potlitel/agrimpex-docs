---
sidebar_position: 3
source_route: /calidad/import-permits/phytosanitary/list
source_component: PhytosanitaryListComponent
status: vigente
---

# Permisos fitosanitarios

## Propósito

Gestiona permisos fitosanitarios del módulo Calidad.

## Acceso

- **Menú:** Calidad → Permisos fitosanitarios
- **Ruta directa:** `/calidad/import-permits/phytosanitary/list`
- **Componente:** `PhytosanitaryListComponent`

> Pantalla alcanzable también desde `/logistic/import-permits/phytosanitary/list`; el documento canónico vive en Calidad.

## Captura

![fitosanitario — captura real](/img/screenshots/calidad/permisos-importacion/fitosanitario.png)

*Captura tomada del backoffice Agrimpex.*

## Campos

| Campo | Descripción | Obligatorio |
|-------|-------------|-------------|
| Buscar | Filtro de texto para localizar registros. | No |
| Filtrar | Aplica los filtros seleccionados al listado. | No |
| Contenedor | Contenedor evaluado. | No |
| No. BL | Conocimiento de embarque. | No |
| Estado | Estado del trámite. | No |

## Acciones

| Acción | Botón | Rol | Ruta |
|--------|-------|-----|------|
| Crear | Añadir | Administrador, Especialista, Logístico o Calidad | `/calidad/import-permits/phytosanitary/add` |
| Editar | Editar | Administrador, Especialista, Logístico o Calidad | `/calidad/import-permits/phytosanitary/edit/:id` |
| Guardar | Guardar | Administrador, Especialista, Logístico o Calidad | `Formulario actual` |
| Cancelar | Cancelar | Administrador, Especialista, Logístico o Calidad | `Listado del módulo` |
