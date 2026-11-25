---
sidebar_position: 28
source_route: /management/nomenclatures/download-address/list
source_component: DownloadAddressListComponent
status: vigente
---

# Dirección de descarga

## Propósito

Gestiona el nomenclador dirección de descarga del sistema.

## Acceso

- **Menú:** Nomenclaturas → Dirección de descarga
- **Ruta directa:** `/management/nomenclatures/download-address/list`
- **Componente:** `DownloadAddressListComponent`

> Las rutas `/management/nomenclatures/download-address/add` y `/management/nomenclatures/download-address/edit` comparten el formulario del nomenclador.

## Captura

![download-address — captura real](/img/screenshots/nomenclaturas/download-address.png)

*Captura tomada del backoffice Agrimpex.*

## Campos

| Campo | Descripción | Obligatorio |
|-------|-------------|-------------|
| Buscar | Filtro de texto para localizar registros. | No |
| Filtrar | Aplica los filtros seleccionados al listado. | No |
| Nombre | Nombre del elemento de dirección de descarga. | Sí |

## Acciones

| Acción | Botón | Rol | Ruta |
|--------|-------|-----|------|
| Buscar | Buscar | Administrador o Especialista | `/management/nomenclatures/download-address/list` |
| Recargar | Recargar | Administrador o Especialista | `/management/nomenclatures/download-address/list` |
| Añadir | Añadir | Administrador, Especialista, Logístico o Calidad | `/management/nomenclatures/download-address/list/add` |
| Eliminar | Eliminar | Administrador, Especialista, Logístico o Calidad | `/management/nomenclatures/download-address/list` |
