---
sidebar_position: 10
source_route: /logistic/excludes-containers
source_component: NonMarielListComponent
status: vigente
---

# Contenedores excluidos

## Propósito

Lista los contenedores que no corresponden al circuito Mariel.

## Acceso

- **Menú:** Logística → Contenedores excluidos
- **Ruta directa:** `/logistic/excludes-containers`
- **Componente:** `NonMarielListComponent`

## Captura

![excluidos — captura real](/img/screenshots/logistica/importacion/excluidos.png)

*Captura tomada del backoffice Agrimpex.*

## Campos

| Campo | Descripción | Obligatorio |
|-------|-------------|-------------|
| Contenedor | Identificador del contenedor. | No |
| No. BL | Número de conocimiento de embarque. | No |
| Estado | Estado logístico actual. | No |

## Acciones

| Acción | Botón | Rol | Ruta |
|--------|-------|-----|------|
| Buscar | Buscar | Administrador, Especialista, Consultor o Logístico | `/logistic/excludes-containers` |
| Recargar | Recargar | Administrador, Especialista, Consultor o Logístico | `/logistic/excludes-containers` |

## Filtros del listado

`/logistic/excludes-containers` muestra los contenedores transferidos o endosados a otra importadora. El conmutador de terminal **Mariel / Santiago** cambia el repositorio consultado y el logotipo de la terminal; al cambiar se reinicia el formulario de filtros. El panel **Filtrar** ofrece **Contenedor** (texto), **Estado** (desplegable con `BL-ENDOSADO` y `OTRA IMPORTADORA`), **Días** (valor numérico exacto), **No. BL** (campo de texto enlazado al manifiesto en Santiago) y **Tipo de Contenedor** (selector con los tipos del catálogo). Los filtros se aplican con breve retardo y los vacíos se ignoran; **Limpiar** restablece el formulario. Junto al panel están la búsqueda y recarga genéricas y el botón **Generar Excel (.xlsx)**, cuyo diálogo permite elegir campos y marca como obligatorios Contenedor y No. BL.

![Otra importadora — panel de filtros](/img/screenshots/logistica/importacion/excluidos-filtros.png)

*Captura tomada del backoffice Agrimpex: panel Filtrar de contenedores de otra importadora.*

## Columnas y resultados

La tabla muestra siete columnas: **Contenedor** —con el número de BL en una línea secundaria—, **Estado** —`BL_Endosado` en morado u `Otra Importadora` en ámbar—, **Días**, **Días sin DM** —en rojo cuando es mayor que cero—, **No. BL**, **No. Manifiesto** y **Naviera**. Las celdas sin dato se muestran con `-`. La lista no ofrece acciones por fila: no hay alta, edición ni eliminación; solo consulta, filtrado y exportación. Si la exportación supera el límite de seguridad se avisa de que el archivo puede haberse truncado.

![Otra importadora — tabla de resultados](/img/screenshots/logistica/importacion/excluidos-columnas.png)

*Captura tomada del backoffice Agrimpex: tabla de contenedores endosados y de otra importadora.*
