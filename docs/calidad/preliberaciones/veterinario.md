---
sidebar_position: 6
source_route: /calidad/preliberations/veterinary/list
source_component: VeterinaryPreliberationListComponent
status: vigente
---

# Preliberación veterinaria

## Propósito

Gestiona preliberación veterinaria del módulo Calidad.

## Acceso

- **Menú:** Calidad → Preliberación veterinaria
- **Ruta directa:** `/calidad/preliberations/veterinary/list`
- **Componente:** `VeterinaryPreliberationListComponent`

> Pantalla alcanzable también desde `/logistic/preliberations/veterinary/list`; el documento canónico vive en Calidad.

## Captura

![veterinario — captura real](/img/screenshots/calidad/preliberaciones/veterinario.png)

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
| Crear | Añadir | Administrador, Especialista, Logístico o Calidad | `/calidad/preliberations/veterinary/add` |
| Editar | Editar | Administrador, Especialista, Logístico o Calidad | `/calidad/preliberations/veterinary/edit/:id` |
| Guardar | Guardar | Administrador, Especialista, Logístico o Calidad | `Formulario actual` |
| Cancelar | Cancelar | Administrador, Especialista, Logístico o Calidad | `Listado del módulo` |
