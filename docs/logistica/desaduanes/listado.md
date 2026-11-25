---
sidebar_position: 27
source_route: /logistic/desaduanes/list
source_component: CustomClearanceListComponent
status: vigente
---

# Listado de desaduane

## Propósito

Consulta el estado del despacho aduanero de los contenedores.

## Acceso

- **Menú:** Logística → Listado de desaduane
- **Ruta directa:** `/logistic/desaduanes/list`
- **Componente:** `CustomClearanceListComponent`

## Captura

![listado — captura real](/img/screenshots/logistica/desaduanes/listado.png)

*Captura tomada del backoffice Agrimpex.*

## Campos

| Campo | Descripción | Obligatorio |
|-------|-------------|-------------|
| Buscar | Filtro de texto para localizar registros. | No |
| Filtrar | Aplica los filtros seleccionados al listado. | No |
| No. Desaduane | Identificador del desaduane. | No |
| No. DM | Declaración de mercancías. | No |
| Contenedor | Contenedor asociado. | No |
| Estado | Estado del trámite. | No |

## Acciones

| Acción | Botón | Rol | Ruta |
|--------|-------|-----|------|
| Buscar | Buscar | Administrador, Especialista, Logístico o Calidad | `/logistic/desaduanes/list` |
| Recargar | Recargar | Administrador, Especialista, Logístico o Calidad | `/logistic/desaduanes/list` |
| Añadir | Añadir | Administrador, Especialista, Logístico o Calidad | `/logistic/desaduanes/list/add` |
| Eliminar | Eliminar | Administrador, Especialista, Logístico o Calidad | `/logistic/desaduanes/list` |

## Filtros del listado

`/logistic/desaduanes/list` ofrece el conmutador de terminal y el panel **Filtrar** con **No. Solicitud**, **Proveedor**, **Estado** —`En proceso`, `Terminada`, `Enviada`, `Tramitada`—, **Modalidad** —`Importación` o `Consignación`—, **Submodalidad** —`Marítimo`, `Aéreo` o `Inbond`— y los rangos de **Fecha Solicitud** y **ETA**. Los rangos solo se aplican cuando están completos; hay búsqueda, recarga y exportación a Excel.

![Desaduane — panel de filtros](/img/screenshots/logistica/desaduanes/listado-filtros.png)

*Captura tomada del backoffice Agrimpex: filtros del listado de solicitudes de desaduane.*

## Operaciones y estados

Las columnas son **No. Solicitud**, **Fecha Solicitud**, **Proveedor**, **Estado**, **BL/AWB/INBOND**, **Clientes**, **No. DM** —o «Pendiente»—, **Fecha DM** y **Acciones**. El ojo abre la ficha con información general, aceptación del desaduane, documentos entregados, costos, clientes y productos. **Vista Previa PDF** genera el documento y el lápiz abre `/logistic/desaduanes/edit/:id` —identificador por segmento— para los roles con permiso de edición. No hay eliminación. El estado del trámite es **En proceso**, **Terminada**, **Enviada** o **Tramitada**, y el número de DM puede estar pendiente.

![Desaduane — acciones de la tabla](/img/screenshots/logistica/desaduanes/listado-operaciones.png)

*Captura tomada del backoffice Agrimpex: estados, DM pendiente y acciones por fila.*

## Formulario (alta y edición)

El alta usa `/logistic/desaduanes/add` y la edición `edit/:id`, con el identificador codificado en la ruta. El formulario se organiza en tres pestañas —**Datos Generales**, **Clientes** y **Contrato**— y conserva los mismos campos en alta y edición, salvo los datos de aceptación, que son de solo lectura en alta. La edición no está bloqueada por estado en el listado, a diferencia de las solicitudes de prórroga.

![Desaduane — acceso al formulario](/img/screenshots/logistica/desaduanes/listado-operaciones.png)

*Captura tomada del backoffice Agrimpex: enlace de edición al formulario compartido.*
