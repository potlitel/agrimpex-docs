---
sidebar_position: 19
source_route: /logistic/daily-extractions
source_component: DailyExtractionListComponent
status: vigente
---

# Extracciones diarias

## Propósito

Consulta las extracciones registradas en el ciclo diario.

## Acceso

- **Menú:** Logística → Extracciones diarias
- **Ruta directa:** `/logistic/daily-extractions`
- **Componente:** `DailyExtractionListComponent`

## Captura

![extracciones-diarias — captura real](/img/screenshots/logistica/contenedores/extracciones-diarias.png)

*Captura tomada del backoffice Agrimpex.*

## Campos

| Campo | Descripción | Obligatorio |
|-------|-------------|-------------|
| Contenedor | Identificador del contenedor. | No |
| Extracción | Fecha de extracción. | No |
| Estado | Estado del registro. | No |

## Acciones

| Acción | Botón | Rol | Ruta |
|--------|-------|-----|------|
| Buscar | Buscar | Administrador, Especialista, Consultor o Logístico | `/logistic/daily-extractions` |
| Recargar | Recargar | Administrador, Especialista, Consultor o Logístico | `/logistic/daily-extractions` |

## Filtros del listado

`/logistic/daily-extractions` muestra las extracciones registradas durante la jornada para Mariel. En la interfaz actual no se presenta un panel **Filtrar**: solo están disponibles la búsqueda global **Buscar** y el botón **Recargar** de la tabla. El componente declara internamente un criterio de contenedor, pero no se ofrece como control visible, por lo que la búsqueda y la recarga genéricas son los únicos medios de acotar la consulta. La tabla se actualiza con los datos del parte diario del día en curso.

![Extracciones diarias — tabla y controles genéricos](/img/screenshots/logistica/contenedores/extracciones-diarias-filtros.png)

*Captura tomada del backoffice Agrimpex: búsqueda, recarga y listado de extracciones del día.*

## Operaciones y estados

Las columnas son **Contenedor**, **Extracción Diaria**, **Transportista** y **Acciones**. Las filas creadas automáticamente al faltar el movimiento en el último parte se distinguen con el badge **Sintética**: el lápiz abre «Editar extracción sintética», donde se pueden completar **Transportista**, **Camión**, **Provincia** y **Fecha de salida** y pulsar **Guardar** o **Cancelar**; el guardado muestra «Extracción actualizada correctamente». En esas filas el menú de puntos ofrece **Exportar PDF** y el transportista ausente se representa como `N/A`. No hay alta, borrado ni edición de las extracciones normales desde esta vista.

![Extracciones diarias — acciones por fila](/img/screenshots/logistica/contenedores/extracciones-diarias-operaciones.png)

*Captura tomada del backoffice Agrimpex: badge de extracción sintética y acciones.*
