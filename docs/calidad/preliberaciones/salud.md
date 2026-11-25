---
sidebar_position: 5
source_route: /calidad/preliberations/health/list
source_component: HealthPreliberationListComponent
status: vigente
---

# Preliberación de salud

## Propósito

Gestiona preliberación de salud del módulo Calidad.

## Acceso

- **Menú:** Calidad → Preliberación de salud
- **Ruta directa:** `/calidad/preliberations/health/list`
- **Componente:** `HealthPreliberationListComponent`

> Pantalla alcanzable también desde `/logistic/preliberations/health/list`; el documento canónico vive en Calidad.

## Captura

![salud — captura real](/img/screenshots/calidad/preliberaciones/salud.png)

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
| Crear | Añadir | Administrador, Especialista, Logístico o Calidad | `/calidad/preliberations/health/add` |
| Editar | Editar | Administrador, Especialista, Logístico o Calidad | `/calidad/preliberations/health/edit/:id` |
| Guardar | Guardar | Administrador, Especialista, Logístico o Calidad | `Formulario actual` |
| Cancelar | Cancelar | Administrador, Especialista, Logístico o Calidad | `Listado del módulo` |
