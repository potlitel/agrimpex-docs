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

## Mapa del módulo

Configuración no es una pantalla con controles propios: `/settings` carga `ConfigurationManagementPage`, un contenedor con `router-outlet` que solo delega en sus rutas hijas. El enrutador declara la ruta vacía (`''`, con `pathMatch: 'full'`) y la comodín (`**`) con `redirectTo: 'form'`, por lo que abrir `/settings` —o una subruta no reconocida— muestra `/settings/form`. El segmento `settings` está disponible para todo usuario autenticado; las dos subrutas de administración añaden un guard `canMatch` con `ROLE_ADMIN`.

| Destino | Ruta | Rol requerido | Componente | Qué muestra |
|---------|------|---------------|------------|-------------|
| Formulario general y preferencias | `/settings/form` | Todo usuario autenticado | `ConfigurationFormComponent` | Pestañas de parámetros de empresa, secuencias, operaciones, verificación y notificaciones. |
| Sincronización Recomplus | `/settings/recomplus-sync` | Administrador (`canMatch`) | `RecomplusSyncLogListComponent` | Historial de sincronización con filtros, columnas y panel de detalle. |
| Origen del parte diario | `/settings/origen-parte` | Administrador (`canMatch`) | `OrigenParteConfigComponent` | Ocho secciones plegables para el buzón y el procesamiento del parte. |

![Formulario general — backoffice Agrimpex](/img/screenshots/configuracion/index-mapa-formulario.png)

*Captura tomada del backoffice Agrimpex; `/settings` redirige a esta pantalla.*

![Sincronización Recomplus — backoffice Agrimpex](/img/screenshots/configuracion/index-mapa-recomplus.png)

*Captura tomada del backoffice Agrimpex con el historial de sincronización.*

![Origen del parte — backoffice Agrimpex](/img/screenshots/configuracion/index-mapa-origen-parte.png)

*Captura tomada del backoffice Agrimpex con la configuración del origen del parte.*
