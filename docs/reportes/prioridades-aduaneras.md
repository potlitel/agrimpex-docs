---
sidebar_position: 7
source_route: /reports/customs-priorities
source_component: CustomsPrioritiesReportComponent
status: vigente
---

# Prioridades aduaneras

## Propósito

Lista cargas en trámite de aduana con cálculo de estadía.

## Acceso

- **Menú:** Reportes → Prioridades aduaneras
- **Ruta directa:** `/reports/customs-priorities`
- **Componente:** `CustomsPrioritiesReportComponent`

> Ruta restringida por `canMatch` a Administrador, Especialista, Logístico y Consultor.

## Captura

![prioridades-aduaneras — captura real](/img/screenshots/reportes/prioridades-aduaneras.png)

*Captura tomada del backoffice Agrimpex.*

## Campos

| Campo | Descripción | Obligatorio |
|-------|-------------|-------------|
| Buscar | Filtro de texto para localizar registros. | No |
| Filtrar | Aplica los filtros seleccionados al listado. | No |
| Contenedor | Identificador del contenedor. | No |
| Estado | Estado aduanero. | No |
| Días | Días en trámite. | No |

## Acciones

| Acción | Botón | Rol | Ruta |
|--------|-------|-----|------|
| Generar | Generar | Administrador, Especialista, Logístico o Consultor | `/reports/customs-priorities` |
| Exportar Excel | Exportar Excel | Administrador, Especialista, Logístico o Consultor | `/reports/customs-priorities` |

## Filtros del listado

`CustomsPrioritiesReportComponent` muestra el panel de filtros siempre visible encima de la tabla. Los cambios de los selectores se aplican al momento; el campo de texto requiere **Buscar** o la tecla Intro, y **Limpiar** restablece los criterios.

| Filtro | Control | Valores admitidos | Efecto |
|--------|---------|-------------------|--------|
| Buscar | Campo de texto | Contenedor o número de BL/AWB/Factura (placeholder «Contenedor o BL/AWB/Factura»). | Localiza cargas por identificador; se aplica con **Buscar** o Intro. |
| Tipo de carga | Selector | **Todos**, **Contenedor**, **Mercancía INBOND** o **Carga aérea**. | Restringe el listado al tipo de documento elegido. |
| Especialista, Cliente, Proveedor, Naviera | Selectores buscables (`ng-select`), con opción de vaciar | Catálogos del entorno; placeholder de selección genérico. | Limitan las cargas al especialista, cliente, proveedor u operador naviero seleccionado. |
| Días desde / Días hasta | Campos numéricos (`min="0"`) | Enteros no negativos. | Acotan el rango de días en trámite de aduana. |

La tabla completa incluye **Contenedor**, **BL / AWB / Factura**, **Días**, **No. Manifiesto**, **Tipo**, **Naviera**, **Especialista**, **Cliente**, **Proveedor**, **Producto**, **No. de Desaduane**, **Fecha de entrega a la aduana**, **Estadía** y **Acción**; en pantallas estrechas se reduce a contenedor, documento, días, cliente, estadía y acción. La **Estadía** se calcula como `Días − parámetro «Cantidad días de entrega de la mercancía»`, con valor 0 para el parámetro cuando falta o no es numérico: verde si es negativa, amarilla si es 0 y roja si es positiva. El pie permite elegir registros por página; la paginación no cuenta como filtro.

El acceso está restringido por un guard `canMatch` a **Administrador, Especialista, Logístico y Consultor**. Calidad, que sí figura en la ACL general del módulo Reportes, no puede abrir esta ruta.

![Prioridades aduaneras — panel de filtros en el backoffice Agrimpex](/img/screenshots/reportes/prioridades-aduaneras-filtros.png)

*Captura tomada del backoffice Agrimpex con el panel de filtros visible.*

## Operaciones y estados

Las acciones de consulta y exportación están disponibles para los cuatro roles autorizados por el guard en `/reports/customs-priorities`.

| Operación | Control | Condición y efecto |
|-----------|---------|--------------------|
| Recargar | Botón **Recargar** | Vuelve a consultar el listado con los filtros vigentes; se deshabilita durante la carga. |
| Exportar | Botón **Exportar** y apartado **Exportar prioridades de aduana** | Se habilita con filas. El apartado desplegable permite elegir campos y la exportación genera el archivo con la selección; si no hay campos marcados se muestra un aviso. |
| Buscar / Limpiar | Botones del panel | Aplican o restablecen los criterios de filtro. |
| Ver detalle | Icono de ojo de la columna **Acción** | Abre la hoja **Detalle de la carga** con identificación, tiempos y aduana, e información comercial; se cierra con **Volver al listado**. |
| Ir al documento / desaduane | Enlaces de **BL / AWB / Factura** y **No. de Desaduane** | Abren la edición de la entidad correspondiente cuando el registro dispone de identificador. |

Si no hay cargas, el componente muestra **No existen cargas en trámite de aduana**; si los filtros no coinciden, **No existen cargas que coincidan con los criterios seleccionados**. Los días y la estadía de cada fila dependen del entorno y no se presentan como garantizados.

![Prioridades aduaneras — columna de acciones en el backoffice Agrimpex](/img/screenshots/reportes/prioridades-aduaneras-operaciones.png)

*Captura tomada del backoffice Agrimpex con la columna «Acción» y la estadía visibles.*
