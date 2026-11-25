---
sidebar_position: 3
source_route: /calidad/import-permits/phytosanitary/list
source_component: PhytosanitaryListComponent
status: vigente
---

# Permisos fitosanitarios

## Propósito

Gestiona permisos fitosanitarios del módulo Calidad.

## Acceso

- **Menú:** Calidad → Permisos fitosanitarios
- **Ruta directa:** `/calidad/import-permits/phytosanitary/list`
- **Componente:** `PhytosanitaryListComponent`

> Pantalla alcanzable también desde `/logistic/import-permits/phytosanitary/list`; el documento canónico vive en Calidad.

## Captura

![fitosanitario — captura real](/img/screenshots/calidad/permisos-importacion/fitosanitario.png)

*Captura tomada del backoffice Agrimpex.*

## Campos

| Campo | Descripción | Obligatorio |
|-------|-------------|-------------|
| Buscar | Filtro de texto para localizar registros. | No |
| Filtrar | Aplica los filtros seleccionados al listado. | No |
| Contenedor | Contenedor evaluado. | No |
| No. BL | Conocimiento de embarque. | No |
| Estado | Estado del trámite. | No |

## Acciones

| Acción | Botón | Rol | Ruta |
|--------|-------|-----|------|
| Crear | Añadir | Administrador, Especialista, Logístico o Calidad | `/calidad/import-permits/phytosanitary/add` |
| Editar | Editar | Administrador, Especialista, Logístico o Calidad | `/calidad/import-permits/phytosanitary/edit/:id` |
| Guardar | Guardar | Administrador, Especialista, Logístico o Calidad | `Formulario actual` |
| Cancelar | Cancelar | Administrador, Especialista, Logístico o Calidad | `Listado del módulo` |


## Filtros del listado

El listado dispone de un panel lateral **Filtrar** con los campos de búsqueda y, sobre la tabla, píldoras de estado y selector de año. Los filtros se aplican de forma reactiva y se pueden limpiar desde el propio panel.

| Filtro | Control | Valores admitidos | Efecto |
|--------|---------|-------------------|--------|
| No. Autorización (`authorizationNo`) | Campo de texto | Texto libre | Localiza el permiso por número de autorización. |
| País de Origen (`originCountry`) | Selector | Países del nomenclador | Restringe los resultados por país de origen. |
| País de Procedencia (`departureCountry`) | Selector | Países del nomenclador | Restringe los resultados por país de procedencia. |
| Estado (`status`) | Píldoras y selector del panel | Todos, En proceso, Terminada, Enviada, Autorizada, Denegada | Muestra solo los permisos en el estado seleccionado. |
| Vigencia (`vigencia`) | Selector | Todas, Vigente, Vencido | Complementa el estado y separa los permisos vigentes de los vencidos. |
| Año (`year`) | Selector desplegable | Todos los años y los seis últimos ejercicios | Limita la consulta al ejercicio elegido. |

![Permisos fitosanitarios — panel de filtros del listado](/img/screenshots/calidad/permisos-importacion/fitosanitario-filtros.png)

*Captura tomada del backoffice Agrimpex con el panel «Filtrar» abierto.*

## Operaciones y documentos

| Operación | Botón | Rol | Ruta o condición |
|-----------|-------|-----|------------------|
| Alta | **Añadir** | Administrador, Especialista o Logístico | `/calidad/import-permits/phytosanitary/add` |
| Edición | Icono lápiz de la fila | Administrador, Especialista o Logístico | `/calidad/import-permits/phytosanitary/edit/:id` |
| Eliminación | Icono papelera de la fila | Administrador, Especialista o Logístico | Desde el listado, previa confirmación. |
| Vista previa y descarga | Icono de documento → **Vista Previa del Documento** → **Descargar PDF** | Roles con acceso de consulta al módulo | Genera el modelo PDF del permiso fitosanitario. |
| Duplicado | Icono copiar de la fila | Administrador, Especialista o Logístico | Solo para permisos `autorizada`; abre el diálogo de duplicado y enlaza con `edit/:id`. |
| Exportación | **Generar Excel (.xlsx)** | Roles con acceso de consulta al módulo | Abre un diálogo de selección de campos. |

La ruta alternativa `/logistic/import-permits/phytosanitary/...` carga el mismo componente; el documento canónico permanece en Calidad.

![Permisos fitosanitarios — fila del listado con las acciones disponibles](/img/screenshots/calidad/permisos-importacion/fitosanitario-operaciones.png)

*Captura tomada del backoffice Agrimpex con la columna de acciones a la vista.*

## Formulario (alta y edición)

Las rutas `/calidad/import-permits/phytosanitary/add` y `/calidad/import-permits/phytosanitary/edit/:id` comparten el formulario; la segunda precarga el registro. Si no existen productos asignados a líneas que requieran permiso, aparece el aviso **No hay productos disponibles** y se bloquea la edición hasta configurar la matriz de permisos.

| Campo | Control | Obligatorio | Observaciones |
|-------|---------|-------------|---------------|
| Solicitud de Permiso Fitosanitario de (`permitType`) | Selector | Sí | Determina el tipo de solicitud. |
| Fecha Solicitud (`requestDate`) | Fecha | No | Fecha de radicación. |
| Fecha Desde (`dateFrom`) | Fecha | No | Inicio del período solicitado. |
| Fecha Hasta (`dateTo`) | Fecha | No | Debe ser posterior a **Fecha Desde**; si no, se muestra «La fecha Hasta debe ser posterior a la fecha Desde». |
| País de Origen (`originCountryId`) | Selector | No | Origen declarado de la mercancía. |
| País de Procedencia (`departureCountryId`) | Selector | No | Procedencia declarada. |
| Destino del Producto (`destinationPorts`) | Selector múltiple de puertos | No | Puertos de destino. |
| Lugar de Arribo (`arrivalPorts`) | Selector múltiple de puertos | No | Puertos de arribo. |
| Uso del producto (`finalUse`) | Texto | No | Uso final declarado. |
| Observaciones (`observations`) | Área de texto | No | Notas adicionales del trámite. |
| Número de permiso anterior (`previousPermitNo`) | Texto | No | Referencia a un permiso previo. |
| Solicitante (`responsible`) | Texto | No | Solicitante del permiso. |
| Especialista (`requestedBy`) | Selector de especialista | No | Especialista responsable. |
| Estado (`status`) | Selector | No | Estado del tramite. |
| No. Autorización (`authorizationNo`) | Texto | No | Se asigna al autorizar la solicitud. |

**Datos de Contrato (Solo Lectura):** No. Contrato, No. Licencia Cámara de Comercio y No. Resolución MINCEX se muestran como información precargada y no se editan en este formulario.

**Productos:** se incorporan con **Agregar Producto**. Cada línea registra Producto, Peso Neto (KG) y Peso Bruto (KG). Es obligatorio agregar al menos un producto: «Debe agregar al menos un producto.»

**Botones:** **Regresar** vuelve al listado, **Preview** muestra el modelo del documento, **Descargar PDF** obtiene el archivo y **Guardar** persiste el formulario (en edición, **Actualizar**).

![Permisos fitosanitarios — formulario de alta](/img/screenshots/calidad/permisos-importacion/fitosanitario-formulario.png)

*Captura tomada del backoffice Agrimpex en la ruta de alta.*
