---
sidebar_position: 2
source_route: /logistic/import
source_component: ImportDashboardComponent
status: vigente
---

# Dashboard de importación

## Propósito

Muestra el estado general de las importaciones y abre los listados operativos.

## Acceso

- **Menú:** Logística → Dashboard de importación
- **Ruta directa:** `/logistic/import`
- **Componente:** `ImportDashboardComponent`

## Captura

![dashboard — captura real](/img/screenshots/logistica/importacion/dashboard.png)

*Captura tomada del backoffice Agrimpex.*

## Campos

| Campo | Descripción | Obligatorio |
|-------|-------------|-------------|
| Contenedor | Identificador del contenedor. | No |
| No. BL | Número de conocimiento de embarque. | No |
| Días en puerto | Permanencia del contenedor en terminal. | No |
| Estado | Estado logístico actual. | No |

## Acciones

| Acción | Botón | Rol | Ruta |
|--------|-------|-----|------|
| Buscar | Buscar | Administrador, Especialista, Consultor o Logístico | `/logistic/import` |
| Ver estadísticas | Acceder | Administrador, Especialista, Consultor o Logístico | `/logistic/import/stats` |

## Interpretación del panel

`/logistic/import` abre el panel «Control de Carga» sin filtros: la parte superior calcula un indicador `X/4` con el número de procesos completados hoy y muestra textos de estado — «FALTAN IMPORTACIONES HOY», «IMPORTACIONES EN PROGRESO» o «IMPORTACIONES COMPLETADAS HOY» — junto a cuatro marcadores: Inventario en Terminales, No Devueltos, Extracción Diaria y Recepción Puerta. Los indicadores se actualizan periódicamente y muestran también la hora de la última actualización; reflejan la actividad del día, no un resultado garantizado.

Las cuatro tarjetas enlazan con `tc-mariel`, `no-devueltos`, `extraidos` y `recepcion-puerta` bajo `/logistic/import`. Cada tarjeta describe el proceso, presenta los chips «Formato inicial» y «Formato nuevo» cuando hay configuración de formato y, si existe un fichero reciente, muestra «Último fichero importado» con su nombre, estado `SUCCESS`, `PARTIAL` o `ERROR`, fecha, número de registros, errores y hora. El pie «Continuar proceso» abre el formulario correspondiente. Los botones «Estadísticas» y «Ver Registro de Importaciones» llevan a `/logistic/import/stats` y `/logistic/import/logs`. El panel solo consulta y navega: no edita registros.

![Importación — indicadores de control de carga](/img/screenshots/logistica/importacion/dashboard-panel-estados.png)

*Captura tomada del backoffice Agrimpex: indicador del día y marcadores de los cuatro procesos.*

![Importación — tarjetas de procesos del dashboard](/img/screenshots/logistica/importacion/dashboard-panel-tarjetas.png)

*Captura tomada del backoffice Agrimpex: tarjetas de Mariel, no devueltos, extracción y recepción.*
