---
sidebar_position: 1
source_route: /reports
source_component: ReportsManagementPage
status: vigente
---

# Reportes

## Propósito

Panel de entrada a los reportes operativos y de exportación.

## Acceso

- **Menú:** Reportes → Reportes
- **Ruta directa:** `/reports`
- **Componente:** `ReportsManagementPage`

## Captura

![index — captura real](/img/screenshots/reportes/index.png)

*Captura tomada del backoffice Agrimpex.*

## Campos

| Campo | Descripción | Obligatorio |
|-------|-------------|-------------|
| Tipo de Reporte | Reporte seleccionado. | No |
| Rango de fechas de arribo | Período del reporte. | No |

## Acciones

| Acción | Botón | Rol | Ruta |
|--------|-------|-----|------|
| Generar | Generar | Administrador, Especialista, Calidad, Consultor o Logístico | `/reports/days-range` |
| Exportar Excel | Exportar Excel | Administrador, Especialista, Calidad, Consultor o Logístico | `/reports/arrived-enabled` |

## Mapa del módulo

Reportes no es una pantalla con controles propios: `/reports` carga `ReportsManagementPage`, un contenedor con `router-outlet` que solo delega en sus rutas hijas. El enrutador declara la ruta vacía (`''`, con `pathMatch: 'full'`) con `redirectTo: 'days-range'`, por lo que abrir `/reports` muestra `/reports/days-range`. El segmento `reports` está concedido por la ACL a Administrador, Especialista, Calidad, Consultor y Logístico; prioridades aduaneras añade además un guard `canMatch` más estricto.

| Grupo | Ruta | Rol requerido | Qué muestra |
|-------|------|---------------|-------------|
| Reportes de listado | `/reports/days-range`, `/reports/count-by-status`, `/reports/summary-by-specialist`, `/reports/status-by-specialist` | Administrador, Especialista, Calidad, Consultor o Logístico | `ReportsListComponent`: pestañas de tipo de reporte, filtro **Resumen General** / **Refrigerados (RH)**, **Generar** y **Exportar Excel**. |
| Monitorización | `/reports/monitoring` | Administrador, Especialista, Calidad, Consultor o Logístico | `MonitoringReportsComponent`: siete condiciones operativas en el panel lateral, indicadores de tiempo por contenedor, **Actualizar** y **Exportar Excel**. |
| Prioridades aduaneras | `/reports/customs-priorities` | Administrador, Especialista, Logístico o Consultor | `CustomsPrioritiesReportComponent`: cargas en trámite de aduana con filtros, cálculo de estadía, detalle y exportación. El guard `canMatch` excluye a Calidad aunque el ACL del módulo la incluya. |
| Exportación | `/reports/arrived-enabled` y las variantes de arribos, precios, tendencias y alertas | Administrador, Especialista, Calidad, Consultor o Logístico | `ExportReportsComponent`: una sola pantalla para todas las variantes, con rango de fechas en arribos, selección de columnas y exportación a Excel. |

![Reportes de listado — backoffice Agrimpex](/img/screenshots/reportes/index-mapa-listados.png)

*Captura tomada del backoffice Agrimpex con el reporte por rango de días.*

![Monitorización — backoffice Agrimpex](/img/screenshots/reportes/index-mapa-monitorizacion.png)

*Captura tomada del backoffice Agrimpex con el panel de monitorización.*

El panel de **Monitoreo de Contenedores** (`/reports/monitoring`, `MonitoringReportsComponent`) no es una única tabla: el lateral ofrece siete condiciones operativas. Cada una tiene su propio criterio, su indicador de tiempo —**Horas** o **Días** según el reporte—, umbrales de color y una captura propia. Se abren pulsando el botón correspondiente; **24h sin Especialista** queda seleccionada al entrar. Las siete comparten las acciones **Actualizar** y **Exportar Excel** y están disponibles para los roles del segmento `reports`.

| Reporte del panel | Qué sigue | Detalle y captura |
|-------------------|-----------|-------------------|
| 24h sin Especialista | Contenedores con más de 24 horas sin asignación de especialista; se mide en horas. | [Ver sección](/docs/reportes/monitorizacion#24h-sin-especialista) |
| 48h en Trámite Aduana | Contenedores en trámite de aduana por más de 48 horas; se mide en horas. | [Ver sección](/docs/reportes/monitorizacion#48h-en-trámite-aduana) |
| 25 días sin extraer | Contenedores sin extraer hace más de 25 días; se mide en días. | [Ver sección](/docs/reportes/monitorizacion#25-días-sin-extraer) |
| Demora en Devolución (15 días) | Contenedores con demora en devolución mayor a 15 días; se mide en días. | [Ver sección](/docs/reportes/monitorizacion#demora-en-devolución-15-días) |
| Habilitados no liberados | Contenedores habilitados pero no liberados; se mide en días. | [Ver sección](/docs/reportes/monitorizacion#habilitados-no-liberados) |
| Almacenaje en Terminal | Contenedores en almacenaje en terminal (Mariel/SCU); se mide en días. | [Ver sección](/docs/reportes/monitorizacion#almacenaje-en-terminal) |
| Habilitados sin extraer 72h | Contenedores habilitados sin extraer en 72 horas; se mide en horas. | [Ver sección](/docs/reportes/monitorizacion#habilitados-sin-extraer-72h) |

Los totales y los valores de cada tabla dependen de los datos del entorno y no se presentan como garantizados.

![Prioridades aduaneras — backoffice Agrimpex](/img/screenshots/reportes/index-mapa-prioridades.png)

*Captura tomada del backoffice Agrimpex con el listado de prioridades de aduana.*

![Exportación — backoffice Agrimpex](/img/screenshots/reportes/index-mapa-exportacion.png)

*Captura tomada del backoffice Agrimpex con la exportación de arribos habilitados.*
