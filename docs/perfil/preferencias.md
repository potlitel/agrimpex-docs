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

## Preferencias de visualización

La vista `/profile/preferences` organiza los ajustes en tres tarjetas numeradas, con dos opciones seleccionables por tarjeta: seis opciones en total. La tabla **Acciones** anterior resume el propósito con **Guardar** y **Cancelar**, pero esos botones ya no aparecen en la pantalla: no hay cambios pendientes que confirmar ni descartar. Al pulsar una opción distinta de la seleccionada, la vista envía de inmediato una mutación GraphQL `updateUser` con el campo correspondiente. Si la mutación termina bien, la opción queda marcada con una tilde y aparece el aviso «Preferencia guardada»; si falla, aparece «Error al guardar la preferencia» y la selección anterior permanece.

| Grupo | Opciones | Campo que se actualiza |
|-------|----------|------------------------|
| 01 / EXPERIENCIA DE TRABAJO | Vista Detallada, Vista Compacta | `terminalInventoryView` |
| 02 / CONTROL OPERATIVO | Vista Detallada, Vista Compacta | `importsControlView` |
| 03 / OPERACIÓN ADUANERA | Vista Detallada (Scroll Horizontal), Vista Compacta (SideSheet) | `customsPrioritiesView` |

### 01 / EXPERIENCIA DE TRABAJO — Preferencias de Visualización

Define cómo se muestra el inventario de terminal: edición inline, columnas y detalle de cada contenedor.

- **Vista Detallada** (etiqueta «Recomendado»): edición inline en la misma fila, columnas agrupadas por secciones, encabezados fijos con efecto scroll y datos completos del contenedor.
- **Vista Compacta**: edición mediante panel lateral, columnas esenciales solamente, panel lateral con el formulario completo y vista rápida y minimalista.

![Preferencias — grupo 01, Preferencias de Visualización](/img/screenshots/perfil/preferencias-visualizacion.png)

*Captura tomada del backoffice Agrimpex: primer grupo de preferencias.*

### 02 / CONTROL OPERATIVO — Control de Importaciones

Define el nivel de detalle del listado de importaciones, desde la vista completa hasta el acceso rápido por ficha lateral.

- **Vista Detallada**: todas las columnas del reporte, leyenda de colores por estado, edición inline en la misma fila y datos completos del contenedor.
- **Vista Compacta**: columnas esenciales solamente, ficha lateral de detalle, panel lateral con el formulario completo y vista rápida y minimalista.

![Preferencias — grupo 02, Control de Importaciones](/img/screenshots/perfil/preferencias-importaciones.png)

*Captura tomada del backoffice Agrimpex: segundo grupo de preferencias.*

### 03 / OPERACIÓN ADUANERA — Prioridades Aduana

Define cómo se consultan las prioridades de aduana, con todas las columnas o una vista compacta para trabajar más rápido.

- **Vista Detallada (Scroll Horizontal)**: todas las columnas con desplazamiento horizontal, estadía con colores por umbral, filtros por especialista y cliente y exportación XLSX disponible.
- **Vista Compacta (SideSheet)**: columnas esenciales solamente, panel lateral con el formulario completo, cálculo de estadía a la vista y vista rápida y minimalista.

![Preferencias — grupo 03, Prioridades Aduana](/img/screenshots/perfil/preferencias-aduana.png)

*Captura tomada del backoffice Agrimpex: tercer grupo de preferencias.*
