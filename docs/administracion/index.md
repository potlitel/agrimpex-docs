---
sidebar_position: 1
source_route: /management/group
source_component: GroupManagementPage
status: vigente
---

# Administración

## Propósito

Punto de entrada a la gestión de usuarios, grupos y herramientas de apoyo.

## Acceso

- **Menú:** Administración → Administración
- **Ruta directa:** `/management/group`
- **Componente:** `GroupManagementPage`

## Captura

![index — captura real](/img/screenshots/administracion/index.png)

*Captura tomada del backoffice Agrimpex.*

## Campos

| Campo | Descripción | Obligatorio |
|-------|-------------|-------------|
| Nombre | Nombre del recurso. | No |
| Activo | Estado del recurso. | No |

## Acciones

| Acción | Botón | Rol | Ruta |
|--------|-------|-----|------|
| Ir a usuarios | Buscar | Administrador | `/management/user/list` |
| Ir a grupos | Buscar | Administrador | `/management/group/list` |
| Ir al asistente | Acceder | Todo usuario autenticado | `/ai-assistant` |
