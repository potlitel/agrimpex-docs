---
sidebar_position: 29
source_route: /management/nomenclatures/solicitud-compra/list
source_component: SolicitudCompraListComponent
status: vigente
---

# Solicitud de Importación

## Propósito

Gestiona el nomenclador solicitud de importación del sistema.

## Acceso

- **Menú:** Nomenclaturas → Solicitud de Importación
- **Ruta directa:** `/management/nomenclatures/solicitud-compra/list`
- **Componente:** `SolicitudCompraListComponent`

> El frontend expone únicamente el listado de este nomenclador.

## Captura

![solicitud-compra — captura real](/img/screenshots/nomenclaturas/solicitud-compra.png)

*Captura tomada del backoffice Agrimpex.*

## Campos

| Campo | Descripción | Obligatorio |
|-------|-------------|-------------|
| Buscar | Filtro de texto para localizar registros. | No |
| Filtrar | Aplica los filtros seleccionados al listado. | No |
| Nombre | Nombre del elemento de solicitud de importación. | Sí |

## Acciones

| Acción | Botón | Rol | Ruta |
|--------|-------|-----|------|
| Buscar | Buscar | Administrador o Especialista | `/management/nomenclatures/solicitud-compra/list` |
| Recargar | Recargar | Administrador o Especialista | `/management/nomenclatures/solicitud-compra/list` |

## Filtros del listado

El panel **Filtrar** tiene diez controles: **No. Solicitud**, **Cliente**, **Proveedor**, **Estado**, **Clasificación**, **Fecha de solicitud (desde)** y **(hasta)** (fechas), **Importe total (mín)** y **(máx)** (números) y **Solicitado por**. Los cambios se aplican sin botón de confirmación. La barra incluye el indicador de sincronización con Recomplus. El panel se abre con el botón **Filtrar** y se cierra con **Limpiar**; no hay botón **Aplicar**, porque los cambios se reflejan al escribir. Junto al panel están la búsqueda genérica **Buscar**, el botón **Recargar** y, cuando el componente lo declara, la exportación **Generar Excel (.xlsx)** y el indicador de sincronización con Recomplus.

![Solicitud de Importación — panel de filtros](/img/screenshots/nomenclaturas/solicitud-compra-filtros.png)

*Captura tomada del backoffice Agrimpex: panel **Filtrar** abierto en `/management/nomenclatures/solicitud-compra/list`.*

## Operaciones y estados

**Columnas visibles:** **No. Solicitud**, **Cliente**, **Proveedor**, **Fecha de solicitud**, **Estado**, **Importe total**, **Moneda**, **Sync** y **Acciones**; la columna **Sync** muestra «Sincronizado» o «Sin sincronizar»..

El número de solicitud y el icono de ojo abren una hoja lateral con el detalle. No hay botones **Añadir**, **Editar** ni **Eliminar**; las únicas acciones de barra son la sincronización y **Generar Excel (.xlsx)**. El indicador está sujeto a `canSync` sobre `SolicitudCompra`.

| Acción | Botón | Rol | Ruta |
|--------|-------|-----|------|
| Consultar detalle | Ver (ojo) | Administrador o Especialista (botón sin control de rol) | `/management/nomenclatures/solicitud-compra/list` |
| Sincronizar | Indicador de sincronización | Administrador; Especialista con permiso de actualización | `/management/nomenclatures/solicitud-compra/list` |
| Exportar | Generar Excel (.xlsx) | Administrador o Especialista (botón sin control de rol) | `/management/nomenclatures/solicitud-compra/list` |



![Solicitud de Importación — tabla y acciones del listado](/img/screenshots/nomenclaturas/solicitud-compra-operaciones.png)

*Captura tomada del backoffice Agrimpex: listado `/management/nomenclatures/solicitud-compra/list` con sus columnas y acciones.*

## Excepciones del nomenclador

Este nomenclador expone únicamente el listado: `/management/nomenclatures/solicitud-compra/list` y la redirección de la raíz. El enrutador no declara rutas `add` ni `edit` y no existe componente de formulario, por lo que no se atribuyen al componente altas, ediciones ni borrados. Es la excepción de solo lectura del módulo.

![Solicitud de Importación — listado sin operaciones de escritura](/img/screenshots/nomenclaturas/solicitud-compra-operaciones.png)

*Captura tomada del backoffice Agrimpex: `/management/nomenclatures/solicitud-compra/list`, único estado disponible en el frontend.*
