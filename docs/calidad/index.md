---
sidebar_position: 1
source_route: /calidad/import-permits/dashboard
source_component: ImportPermitsDashboardComponent
status: vigente
---

# Calidad

## Propósito

Panel canónico de permisos de importación y preliberaciones de calidad.

## Acceso

- **Menú:** Calidad → Calidad
- **Ruta directa:** `/calidad/import-permits/dashboard`
- **Componente:** `ImportPermitsDashboardComponent`

> Logística enlaza a este módulo; no mantiene copias de estas pantallas.

## Captura

![index — captura real](/img/screenshots/calidad/index.png)

*Captura tomada del backoffice Agrimpex.*

## Campos

| Campo | Descripción | Obligatorio |
|-------|-------------|-------------|
| Contenedor | Identificador del contenedor. | No |
| Estado | Estado del permiso o preliberación. | No |

## Acciones

| Acción | Botón | Rol | Ruta |
|--------|-------|-----|------|
| Ir a permisos | Acceder | Administrador, Especialista, Calidad o Consultor | `/calidad/import-permits/cenasa/list` |
| Ir a preliberaciones | Acceder | Administrador, Especialista, Calidad o Consultor | `/calidad/preliberations/health/list` |


## Interpretación del panel

El panel de permisos de importación (`/calidad/import-permits/dashboard`) reúne en una sola vista los indicadores necesarios para priorizar la atención de los trámites de Calidad. Los datos se consultan por puerto y se actualizan al cargar la vista; las cifras que se muestran a continuación corresponden a la sesión capturada.

### Indicadores principales

La cabecera muestra el **total de registros** y cuatro tarjetas con el desglose por tipo de permiso: **CENASA**, **INHEM**, **Fito** y **Total**. Cada tarjeta incluye su porcentaje sobre el conjunto, lo que permite ver de un vistazo qué tramitación concentra el volumen de trabajo. En la captura de referencia hay 131 permisos: 31 CENASA (24 %), 14 INHEM (11 %) y 86 Fito (66 %). Un cambio brusco en estas proporciones indica un cambio en el perfil de las importaciones y orienta dónde reforzar la revisión.

![Calidad — cabecera del dashboard con los KPIs y las primeras gráficas](/img/screenshots/calidad/index-panel-kpis.png)

*Captura tomada del backoffice Agrimpex: KPIs totales y comienzo de las gráficas.*

### Rutas de origen, productos y tendencia

- **Países de Origen Principales:** barras con los países desde los que se emiten más solicitudes; identifican las rutas de importación más activas.
- **Distribución por Producto:** gráfico de anillo con la proporción de solicitudes por producto y su participación porcentual; señala los bienes con mayor demanda.
- **Línea de Tiempo Mensual:** evolución mensual por entidad (CENASA, INHEM y Fito). Los picos indican periodos de mayor carga y permiten anticipar recursos.
- **Distribución por Estado:** desglose de permisos en curso, aprobados, rechazados o vencidos; un peso elevado de trámites pendientes sugiere revisar la capacidad de tramitación.

La combinación de estas cuatro vistas responde a las preguntas de origen, qué se importa, cuándo se concentra la actividad y en qué estado se encuentra cada trámite.

![Calidad — serie temporal mensual, distribución por estado y resúmenes por entidad](/img/screenshots/calidad/index-panel-graficos.png)

*Captura tomada del backoffice Agrimpex tras desplazar el panel hacia las gráficas centrales.*

### Resumen por entidad y mapas de calor

- **Entidades Principales (INHEM):** entidades con más permisos tramitados según su país de origen registrado.
- **Solicitantes Principales (Fito):** solicitantes ordenados por volumen, útiles para detectar quién concentra más trámites.
- **Países por Tipo de Permiso:** barras apiladas que comparan la actividad de CENASA, INHEM y Fito por país y revelan el perfil de cada origen.
- **Productos Principales (CENASA):** productos más solicitados agrupados por país de origen.
- **Distribución Trimestral:** visión consolidada por trimestre y año de la carga de trabajo a mediano plazo.
- **Mapa de Calendario:** mapa de calor de la intensidad diaria de solicitudes; las celdas más oscuras marcan los días de mayor actividad.
- **Resumen por Entidad:** total de permisos, países y productos gestionados por cada entidad, con su participación porcentual.

Estos indicadores permiten pasar de la observación a la decisión: concentrar la revisión en las entidades o solicitantes con mayor volumen, ajustar turnos en los picos del mapa de calor y dar seguimiento a los estados que se acumulan en la distribución trimestral.

![Calidad — distribución trimestral y mapa de calor del calendario](/img/screenshots/calidad/index-panel-resumen.png)

*Captura tomada del backoffice Agrimpex con la sección inferior del dashboard.*
