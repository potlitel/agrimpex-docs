---
sidebar_position: 1
source_route: /settings
source_component: ConfigurationManagementPage
status: vigente
---

# Configuración

## Propósito

Área de parámetros generales, preferencias de notificación y tareas de administración.

## Acceso

- **Menú:** Configuración → Configuración
- **Ruta directa:** `/settings`
- **Componente:** `ConfigurationManagementPage`

## Captura

![index — captura real](/img/screenshots/configuracion/index.png)

*Captura tomada del backoffice Agrimpex.*

## Campos

| Campo | Descripción | Obligatorio |
|-------|-------------|-------------|
| Configuración General | Datos globales de la empresa. | No |
| Preferencias de notificaciones | Ajustes del usuario actual. | No |

## Acciones

| Acción | Botón | Rol | Ruta |
|--------|-------|-----|------|
| Ir al formulario | Acceder | Todo usuario autenticado | `/settings/form` |
| Ir a sincronización | Acceder | Administrador | `/settings/recomplus-sync` |
| Ir a origen de parte | Acceder | Administrador | `/settings/origen-parte` |
