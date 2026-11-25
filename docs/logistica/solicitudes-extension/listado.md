---
sidebar_position: 25
source_route: /logistic/extensions-requests/list
source_component: ExtensionRequestListComponent
status: vigente
---

# Listado de solicitudes de extensión

## Propósito

Consulta las prórrogas solicitadas para contenedores.

## Acceso

- **Menú:** Logística → Listado de solicitudes de extensión
- **Ruta directa:** `/logistic/extensions-requests/list`
- **Componente:** `ExtensionRequestListComponent`

## Captura

![listado — captura real](/img/screenshots/logistica/solicitudes-extension/listado.png)

*Captura tomada del backoffice Agrimpex.*

## Campos

| Campo | Descripción | Obligatorio |
|-------|-------------|-------------|
| Buscar | Filtro de texto para localizar registros. | No |
| Filtrar | Aplica los filtros seleccionados al listado. | No |
| Contenedor | Contenedor asociado. | No |
| Tipo de Prórroga | Tipo de extensión solicitada. | No |
| Estado | Estado de la solicitud. | No |

## Acciones

| Acción | Botón | Rol | Ruta |
|--------|-------|-----|------|
| Buscar | Buscar | Administrador, Especialista, Consultor o Logístico | `/logistic/extensions-requests/list` |
| Recargar | Recargar | Administrador, Especialista, Consultor o Logístico | `/logistic/extensions-requests/list` |
| Añadir | Añadir | Administrador, Especialista, Logístico o Calidad | `/logistic/extensions-requests/list/add` |
| Eliminar | Eliminar | Administrador, Especialista, Logístico o Calidad | `/logistic/extensions-requests/list` |
