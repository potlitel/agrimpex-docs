---
sidebar_position: 27
source_route: /logistic/desaduanes/list
source_component: CustomClearanceListComponent
status: vigente
---

# Listado de desaduane

## Propósito

Consulta el estado del despacho aduanero de los contenedores.

## Acceso

- **Menú:** Logística → Listado de desaduane
- **Ruta directa:** `/logistic/desaduanes/list`
- **Componente:** `CustomClearanceListComponent`

## Captura

![listado — captura real](/img/screenshots/logistica/desaduanes/listado.png)

*Captura tomada del backoffice Agrimpex.*

## Campos

| Campo | Descripción | Obligatorio |
|-------|-------------|-------------|
| Buscar | Filtro de texto para localizar registros. | No |
| Filtrar | Aplica los filtros seleccionados al listado. | No |
| No. Desaduane | Identificador del desaduane. | No |
| No. DM | Declaración de mercancías. | No |
| Contenedor | Contenedor asociado. | No |
| Estado | Estado del trámite. | No |

## Acciones

| Acción | Botón | Rol | Ruta |
|--------|-------|-----|------|
| Buscar | Buscar | Administrador, Especialista, Logístico o Calidad | `/logistic/desaduanes/list` |
| Recargar | Recargar | Administrador, Especialista, Logístico o Calidad | `/logistic/desaduanes/list` |
| Añadir | Añadir | Administrador, Especialista, Logístico o Calidad | `/logistic/desaduanes/list/add` |
| Eliminar | Eliminar | Administrador, Especialista, Logístico o Calidad | `/logistic/desaduanes/list` |
