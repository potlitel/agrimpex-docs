---
sidebar_position: 2
source_route: /profile/preferences
source_component: PreferencesComponent
status: vigente
---

# Preferencias

## Propósito

Ajusta la visualización del inventario, el control de importaciones y las prioridades aduaneras.

## Acceso

- **Menú:** Perfil → Preferencias
- **Ruta directa:** `/profile/preferences`
- **Componente:** `PreferencesComponent`

## Captura

![preferencias — captura real](/img/screenshots/perfil/preferencias.png)

*Captura tomada del backoffice Agrimpex.*

## Campos

| Campo | Descripción | Obligatorio |
|-------|-------------|-------------|
| Preferencias de Visualización | Edición inline, columnas y detalle de contenedores. | No |
| Control de Importaciones | Nivel de detalle del listado de importaciones. | No |
| Prioridades Aduana | Vista completa o compacta de prioridades. | No |

## Acciones

| Acción | Botón | Rol | Ruta |
|--------|-------|-----|------|
| Guardar | Guardar | Todo usuario autenticado | `/profile/preferences` |
| Cancelar | Cancelar | Todo usuario autenticado | `/profile/preferences` |
