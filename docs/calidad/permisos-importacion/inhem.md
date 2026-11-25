---
sidebar_position: 4
source_route: /calidad/import-permits/inhem/list
source_component: InhemListComponent
status: vigente
---

# Permisos INHEM

## Propósito

Gestiona permisos inhem del módulo Calidad.

## Acceso

- **Menú:** Calidad → Permisos INHEM
- **Ruta directa:** `/calidad/import-permits/inhem/list`
- **Componente:** `InhemListComponent`

> Pantalla alcanzable también desde `/logistic/import-permits/inhem/list`; el documento canónico vive en Calidad.

## Captura

![inhem — captura real](/img/screenshots/calidad/permisos-importacion/inhem.png)

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
| Crear | Añadir | Administrador, Especialista, Logístico o Calidad | `/calidad/import-permits/inhem/add` |
| Editar | Editar | Administrador, Especialista, Logístico o Calidad | `/calidad/import-permits/inhem/edit/:id` |
| Guardar | Guardar | Administrador, Especialista, Logístico o Calidad | `Formulario actual` |
| Cancelar | Cancelar | Administrador, Especialista, Logístico o Calidad | `Listado del módulo` |
