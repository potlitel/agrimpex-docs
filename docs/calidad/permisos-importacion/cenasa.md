---
sidebar_position: 2
source_route: /calidad/import-permits/cenasa/list
source_component: CenasaListComponent
status: vigente
---

# Permisos CENASA

## Propósito

Gestiona permisos cenasa del módulo Calidad.

## Acceso

- **Menú:** Calidad → Permisos CENASA
- **Ruta directa:** `/calidad/import-permits/cenasa/list`
- **Componente:** `CenasaListComponent`

> Pantalla alcanzable también desde `/logistic/import-permits/cenasa/list`; el documento canónico vive en Calidad.

## Captura

![cenasa — captura real](/img/screenshots/calidad/permisos-importacion/cenasa.png)

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
| Crear | Añadir | Administrador, Especialista, Logístico o Calidad | `/calidad/import-permits/cenasa/add` |
| Editar | Editar | Administrador, Especialista, Logístico o Calidad | `/calidad/import-permits/cenasa/edit/:id` |
| Guardar | Guardar | Administrador, Especialista, Logístico o Calidad | `Formulario actual` |
| Cancelar | Cancelar | Administrador, Especialista, Logístico o Calidad | `Listado del módulo` |


## Filtros del listado

El listado combina filtros rápidos sobre la tabla —píldoras de estado y selector de año— con el panel lateral **Filtrar**, que reúne los campos de búsqueda. Los cambios se aplican de forma reactiva tras un breve retardo y pueden descartarse con **Limpiar**.

| Filtro | Control | Valores admitidos | Efecto |
|--------|---------|-------------------|--------|
| No. Autorización (`authorizationNo`) | Campo de texto | Texto libre | Localiza el permiso por su número de autorización. |
| País de Origen (`originCountry`) | Selector | Países del nomenclador | Muestra solo los permisos del país de origen seleccionado. |
| País de Procedencia (`departureCountry`) | Selector | Países del nomenclador | Filtra por el país de procedencia declarado en la solicitud. |
| Solicita (`requestedBy`) | Campo de texto | Texto libre | Busca por especialista o solicitante del permiso. |
| Estado (`status`) | Píldoras y selector del panel | Todos, En proceso, Enviada, Aprobada, Rechazada, Vencida | Reduce la tabla al estado elegido; **Vencida** se traduce internamente a `expired: true`, por lo que también incluye permisos cuyo plazo venció aunque su estado sea otro. |
| Año (`year`) | Selector desplegable | Todos los años y los seis últimos ejercicios | Limita los resultados al ejercicio seleccionado. |

![Permisos CENASA — panel de filtros abierto sobre el listado](/img/screenshots/calidad/permisos-importacion/cenasa-filtros.png)

*Captura tomada del backoffice Agrimpex con el panel «Filtrar» abierto.*

## Operaciones y documentos

| Operación | Botón | Rol | Ruta o condición |
|-----------|-------|-----|------------------|
| Alta | **Añadir** | Administrador, Especialista o Logístico | `/calidad/import-permits/cenasa/add` |
| Edición | Icono lápiz de la fila | Administrador, Especialista o Logístico | `/calidad/import-permits/cenasa/edit/:id`; no disponible cuando el estado es `aprobada`. |
| Eliminación | Icono papelera de la fila | Administrador, Especialista o Logístico | Desde el listado; no disponible en estados `enviada` ni `aprobada`. |
| Vista previa y descarga | Icono de documento → **Vista Previa del Documento** → **Descargar PDF** | Roles con acceso de consulta al módulo | Abre el modelo PDF del permiso y permite guardarlo. |
| Duplicado | Icono copiar de la fila | Administrador, Especialista o Logístico | Solo para permisos `aprobada` y no vencidos; abre un diálogo y enlaza con `edit/:id`. |
| Exportación | **Generar Excel (.xlsx)** | Roles con acceso de consulta al módulo | Abre un diálogo para elegir los campos a exportar. |

El componente también queda enlazado desde `/logistic/import-permits/cenasa/...`; ambas rutas cargan el mismo listado y formulario.

![Permisos CENASA — fila del listado con las acciones de edición, eliminación y documento](/img/screenshots/calidad/permisos-importacion/cenasa-operaciones.png)

*Captura tomada del backoffice Agrimpex con la columna de acciones a la vista.*

## Formulario (alta y edición)

Las rutas `/calidad/import-permits/cenasa/add` y `/calidad/import-permits/cenasa/edit/:id` cargan el mismo componente: en alta se abre vacío y en edición se precarga el registro. El formulario se organiza en tres pestañas. Si no hay productos asignados a líneas que requieran este permiso, se muestra el aviso **No hay productos disponibles** y el bloque de edición queda oculto hasta configurar la matriz de permisos.

### Pestaña Datos Generales

| Campo | Control | Obligatorio | Observaciones |
|-------|---------|-------------|---------------|
| País de Origen (`originCountry`) | Selector | Sí | La etiqueta **Seleccionar** se muestra cuando no hay valor. |
| País de Procedencia (`departureCountry`) | Selector | No | Procedencia declarada de la mercancía. |
| Fecha Solicitud (`requestDate`) | Fecha | No | Fecha en que se radica la solicitud. |
| Fecha Hasta (`dateTo`) | Fecha | No | Límite de vigencia del permiso. |
| Lugar de Ingreso (`entryPlace`) | Selector múltiple de puertos | No | Placeholder: «Seleccionar puertos...». |
| Solicita (`requestedBy`) | Selector de especialista | No | Placeholder: «Seleccione el especialista de calidad...». |
| Responsable (`responsible`) | Texto | No | Responsable del trámite. |
| Estado (`status`) | Selector | No | Estado inicial del permiso. |
| No. Autorización (`authorizationNo`) | Texto | No | Se asigna al tramitar la solicitud. |

### Pestaña Clientes

Tabla de filas con **Agregar Fila**. Cada fila exige **Cliente de Referencia** y **Dirección de Descarga**; las filas incompletas se señalan con el aviso «Fila incompleta: falta cliente o dirección de descarga» y se listan al guardar. Solo se admiten clientes con direcciones en común con el cliente de referencia.

### Pestaña Productos

Permite **Agregar producto con planta**. Cada línea dispone de Producto, Planta, Ítem, Cantidad, UM, Planta / Productor, Estado, Condado, Proveedor y No. Est. El selector de producto y planta es obligatorio para incorporar la línea.

**Botones:** **Regresar** vuelve al listado; **Preview** muestra el modelo del documento; **Generar Documento** y **Descargar PDF** producen el archivo; **Guardar** persiste el formulario (en edición, **Actualizar**).

![CENASA — pestaña Datos Generales del formulario](/img/screenshots/calidad/permisos-importacion/cenasa-formulario-general.png)

![CENASA — pestaña Clientes del formulario](/img/screenshots/calidad/permisos-importacion/cenasa-formulario-clientes.png)

![CENASA — pestaña Productos del formulario](/img/screenshots/calidad/permisos-importacion/cenasa-formulario-productos.png)

*Capturas tomadas del backoffice Agrimpex en la ruta de alta, una por pestaña.*
