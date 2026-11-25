---
sidebar_position: 3
source_route: /settings/recomplus-sync
source_component: RecomplusSyncLogListComponent
status: vigente
---

# Sincronización Recomplus

## Propósito

Consulta el historial de sincronización con Recomplus.

## Acceso

- **Menú:** Configuración → Sincronización Recomplus
- **Ruta directa:** `/settings/recomplus-sync`
- **Componente:** `RecomplusSyncLogListComponent`

> Subruta exclusiva de administrador según `canMatch`.

## Captura

![recomplus-sync — captura real](/img/screenshots/configuracion/recomplus-sync.png)

*Captura tomada del backoffice Agrimpex.*

## Campos

| Campo | Descripción | Obligatorio |
|-------|-------------|-------------|
| Buscar | Filtro de texto para localizar registros. | No |
| Filtrar | Aplica los filtros seleccionados al listado. | No |
| Recurso | Nomenclador sincronizado. | No |
| Fase | Fase del proceso. | No |
| Última sincronización | Fecha del último intento. | No |

## Acciones

| Acción | Botón | Rol | Ruta |
|--------|-------|-----|------|
| Buscar | Buscar | Administrador | `/settings/recomplus-sync` |
| Recargar | Recargar | Administrador | `/settings/recomplus-sync` |
