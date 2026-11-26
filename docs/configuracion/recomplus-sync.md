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

## Filtros del listado

La ruta `/settings/recomplus-sync` exige `ROLE_ADMIN` mediante `canMatch`. El botón **Filtrar** abre el panel con tres criterios:

| Filtro | Control | Efecto |
|--------|---------|--------|
| Recurso | Campo de texto | Localiza el nomenclador sincronizado por su nombre. |
| Estado | Lista desplegable | Reduce el historial al estado de sincronización seleccionado. |
| Disparado por | Campo de texto | Busca el usuario que originó la ejecución. |

**Limpiar** retira los criterios activos y **Close** cierra el panel; **Recargar** vuelve a consultar el historial. Los recursos, estados y recuentos mostrados dependen de los datos del entorno.

![Panel de filtros — backoffice Agrimpex](/img/screenshots/configuracion/recomplus-sync-filtros.png)

*Captura tomada del backoffice Agrimpex con el panel de filtros abierto.*

## Operaciones y estados

El historial de `RecomplusSyncLogListComponent` muestra las columnas **Recurso**, **Estado** (insignia con el resultado), **Fecha**, **Disparado por**, **Total**, **Fallidos** y **Acciones**. El buscador general de la tabla filtra filas, **Recargar** vuelve a consultar el historial y el selector de tamaño de página decide cuántas filas se muestran.

En **Acciones**, el botón de ojo abre un panel lateral de detalle con **Información General** (recurso, estado, inicio, fin, disparado por y creado), **Resultados** (creados, actualizados, total, fallidos y duración) y, cuando existen, **Errores** y **Mensaje Fatal**. **Cerrar** cierra el panel. No se prometen estados ni recuentos concretos: dependen de cada ejecución.

![Historial de sincronización — backoffice Agrimpex](/img/screenshots/configuracion/recomplus-sync-operaciones.png)

*Captura tomada del backoffice Agrimpex con el historial de sincronización.*
