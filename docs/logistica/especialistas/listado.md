---
sidebar_position: 29
source_route: /logistic/specialist-suppliers/list
source_component: SpecialistListComponent
status: vigente
---

# Listado de especialistas

## Propósito

Consulta los especialistas disponibles para asignar a importaciones.

## Acceso

- **Menú:** Logística → Listado de especialistas
- **Ruta directa:** `/logistic/specialist-suppliers/list`
- **Componente:** `SpecialistListComponent`

## Captura

![listado — captura real](/img/screenshots/logistica/especialistas/listado.png)

*Captura tomada del backoffice Agrimpex.*

## Campos

| Campo | Descripción | Obligatorio |
|-------|-------------|-------------|
| Buscar | Filtro de texto para localizar registros. | No |
| Filtrar | Aplica los filtros seleccionados al listado. | No |
| Nombre | Nombre del especialista. | No |
| Teléfono | Teléfono de contacto. | No |
| Activo | Disponibilidad del especialista. | No |

## Acciones

| Acción | Botón | Rol | Ruta |
|--------|-------|-----|------|
| Buscar | Buscar | Administrador, Especialista, Logístico o Calidad | `/logistic/specialist-suppliers/list` |
| Recargar | Recargar | Administrador, Especialista, Logístico o Calidad | `/logistic/specialist-suppliers/list` |
| Añadir | Añadir | Administrador, Especialista, Logístico o Calidad | `/logistic/specialist-suppliers/list/add` |
| Eliminar | Eliminar | Administrador, Especialista, Logístico o Calidad | `/logistic/specialist-suppliers/list` |
