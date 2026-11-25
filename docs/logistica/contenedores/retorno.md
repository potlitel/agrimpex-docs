---
sidebar_position: 14
source_route: /logistic/return-cycle
source_component: CycleReturnListComponent
status: vigente
---

# Ciclo de retorno

## Propósito

Consulta el ciclo de devolución de contenedores y sus demoras.

## Acceso

- **Menú:** Logística → Ciclo de retorno
- **Ruta directa:** `/logistic/return-cycle`
- **Componente:** `CycleReturnListComponent`

## Captura

![retorno — captura real](/img/screenshots/logistica/contenedores/retorno.png)

*Captura tomada del backoffice Agrimpex.*

## Campos

| Campo | Descripción | Obligatorio |
|-------|-------------|-------------|
| Contenedor | Identificador del contenedor. | No |
| Devolución | Fecha de devolución. | No |
| Días | Días transcurridos. | No |

## Acciones

| Acción | Botón | Rol | Ruta |
|--------|-------|-----|------|
| Buscar | Buscar | Administrador, Especialista, Consultor o Logístico | `/logistic/return-cycle` |
| Recargar | Recargar | Administrador, Especialista, Consultor o Logístico | `/logistic/return-cycle` |

## Control y trazabilidad

`/logistic/return-cycle` consulta únicamente los contenedores de Mariel pendientes de devolución: la consulta `GetNotReturnedContainers` mapea la fecha de salida, los días fuera de la terminal y la fecha de devolución, y deriva el estado `RETURNED` cuando existe devolución o `PENDING` en caso contrario. No hay conmutador de terminal. El único filtro visible es **Contenedor**, que busca por número con breve retardo; se complementa con la búsqueda y recarga genéricas.

La tabla muestra **Contenedor**, **Extracción Diaria**, **Días mínimos** —días transcurridos fuera—, **Recepción Puerta**, **Estado** y **Acciones**. Los valores superiores a 20 días se resaltan en rojo y, si el contenedor sigue pendiente, se añade un indicador parpadeante. El estado aparece como **PROCESADO** en verde para devueltos y **VERIFICANDO** en ámbar para pendientes. El menú de puntos ofrece **Panel de Auditoría de Datos** y **Recepción Puerta**; la vista no edita registros ni enlaza directamente con el formulario de recepción.

![Ciclo de retorno — panel de consulta](/img/screenshots/logistica/contenedores/retorno-panel.png)

*Captura tomada del backoffice Agrimpex: listado de contenedores pendientes de devolución.*

![Ciclo de retorno — estados de la tabla](/img/screenshots/logistica/contenedores/retorno-estados.png)

*Captura tomada del backoffice Agrimpex: días fuera, estados y acciones del ciclo.*
