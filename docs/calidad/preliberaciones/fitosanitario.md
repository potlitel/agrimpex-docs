---
sidebar_position: 7
source_route: /calidad/preliberations/phytosanitary/list
source_component: PrelibPhytosanitaryListComponent
status: vigente
---

# Preliberación fitosanitaria

## Propósito

Gestiona preliberación fitosanitaria del módulo Calidad.

## Acceso

- **Menú:** Calidad → Preliberación fitosanitaria
- **Ruta directa:** `/calidad/preliberations/phytosanitary/list`
- **Componente:** `PrelibPhytosanitaryListComponent`

> Pantalla alcanzable también desde `/logistic/preliberations/phytosanitary/list`; el documento canónico vive en Calidad.

## Captura

![fitosanitario — captura real](/img/screenshots/calidad/preliberaciones/fitosanitario.png)

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
| Crear | Añadir | Administrador, Especialista, Logístico o Calidad | `/calidad/preliberations/phytosanitary/add` |
| Editar | Editar | Administrador, Especialista, Logístico o Calidad | `/calidad/preliberations/phytosanitary/edit/:id` |
| Guardar | Guardar | Administrador, Especialista, Logístico o Calidad | `Formulario actual` |
| Cancelar | Cancelar | Administrador, Especialista, Logístico o Calidad | `Listado del módulo` |
