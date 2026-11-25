---
sidebar_position: 4
source_route: /security/trace/dashboard
source_component: TraceDashboardComponent
status: vigente
---

# Dashboard de trazabilidad

## Propósito

Presenta indicadores agregados de los eventos de trazabilidad.

## Acceso

- **Menú:** Seguridad → Dashboard de trazabilidad
- **Ruta directa:** `/security/trace/dashboard`
- **Componente:** `TraceDashboardComponent`

## Captura

![dashboard — captura real](/img/screenshots/seguridad/trazabilidad/dashboard.png)

*Captura tomada del backoffice Agrimpex.*

## Campos

| Campo | Descripción | Obligatorio |
|-------|-------------|-------------|
| Total | Cantidad total de eventos. | No |
| Estado | Estado agrupado. | No |
| Especialista | Especialista responsable. | No |

## Acciones

| Acción | Botón | Rol | Ruta |
|--------|-------|-----|------|
| Buscar | Buscar | Administrador o Especialista | `/security/trace/dashboard` |
| Recargar | Recargar | Administrador o Especialista | `/security/trace/dashboard` |

## Interpretación del panel

El dashboard resume la actividad registrada; **no muestra cifras fijas**, sino valores calculados al cargar la página con la sesión del usuario (Administrador o Especialista).

| Indicador | Significado |
|-----------|-------------|
| Total de trazas | Total de eventos informado por la paginación de la consulta de trazas. |
| Trazas hoy | Eventos con fecha de creación igual o posterior al inicio del día actual. |
| Trazas esta semana | Eventos con fecha de creación igual o posterior al inicio de la semana (domingo). |
| Usuarios activos | Cantidad de identificadores de usuario distintos presentes en los eventos consultados. |
| Actividad reciente | Barras por día de los últimos 30 días, escaladas respecto al día con más eventos. |
| Por módulo | Los diez módulos con más eventos, ordenados de mayor a menor y con barras relativas al módulo con más trazas. |
| Top usuarios | Los diez usuarios con más eventos en la muestra consultada. |

Los desgloses se calculan sobre los eventos devueltos por la consulta (hasta 1000 registros recientes), mientras que el total procede del contador de paginación; por eso las sumas de las barras no tienen por qué coincidir con el total. El botón **Exportar CSV** descarga el informe de auditoría desde `/api/audit/export/csv`; si la descarga falla, el panel muestra un aviso de error sin modificar los datos.

![Dashboard de auditoría — indicadores agregados en el backoffice Agrimpex](/img/screenshots/seguridad/trazabilidad/dashboard-panel.png)

*Captura tomada del backoffice Agrimpex con los indicadores del panel de trazabilidad.*
