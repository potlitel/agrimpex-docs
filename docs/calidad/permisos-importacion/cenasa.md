---
sidebar_position: 2
source_route: /calidad/import-permits/cenasa/list
source_component: CenasaListComponent
status: vigente
---

# Permisos CENASA

## Propósito

Gestiona permisos cenasa del módulo Calidad.

## Acceso

- **Menú:** Calidad → Permisos CENASA
- **Ruta directa:** `/calidad/import-permits/cenasa/list`
- **Componente:** `CenasaListComponent`

> Pantalla alcanzable también desde `/logistic/import-permits/cenasa/list`; el documento canónico vive en Calidad.

## Captura

![cenasa — captura real](/img/screenshots/calidad/permisos-importacion/cenasa.png)

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
| Crear | Añadir | Administrador, Especialista, Logístico o Calidad | `/calidad/import-permits/cenasa/add` |
| Editar | Editar | Administrador, Especialista, Logístico o Calidad | `/calidad/import-permits/cenasa/edit/:id` |
| Guardar | Guardar | Administrador, Especialista, Logístico o Calidad | `Formulario actual` |
| Cancelar | Cancelar | Administrador, Especialista, Logístico o Calidad | `Listado del módulo` |
