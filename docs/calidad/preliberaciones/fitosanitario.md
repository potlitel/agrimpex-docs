---
sidebar_position: 7
source_route: /calidad/preliberations/phytosanitary/list
source_component: PrelibPhytosanitaryListComponent
status: vigente
---

# Preliberación fitosanitaria

## Propósito

Gestiona preliberación fitosanitaria del módulo Calidad.

## Acceso

- **Menú:** Calidad → Preliberación fitosanitaria
- **Ruta directa:** `/calidad/preliberations/phytosanitary/list`
- **Componente:** `PrelibPhytosanitaryListComponent`

> Pantalla alcanzable también desde `/logistic/preliberations/phytosanitary/list`; el documento canónico vive en Calidad.

## Captura

![fitosanitario — captura real](/img/screenshots/calidad/preliberaciones/fitosanitario.png)

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
| Crear | Añadir | Administrador, Especialista, Logístico o Calidad | `/calidad/preliberations/phytosanitary/add` |
| Editar | Editar | Administrador, Especialista, Logístico o Calidad | `/calidad/preliberations/phytosanitary/edit/:id` |
| Guardar | Guardar | Administrador, Especialista, Logístico o Calidad | `Formulario actual` |
| Cancelar | Cancelar | Administrador, Especialista, Logístico o Calidad | `Listado del módulo` |


## Filtros del listado

El listado de preliberaciones fitosanitarias reúne el panel lateral **Filtrar**, píldoras de estado, selector de año y las acciones de actualización y exportación PDF sobre la tabla.

| Filtro | Control | Valores admitidos | Efecto |
|--------|---------|-------------------|--------|
| No. Permiso (`permitNo`) | Campo de texto | Texto libre | Localiza la preliberación por número de permiso fitosanitario. |
| Buque/Vuelo (`shipName`) | Campo de texto | Texto libre | Busca por buque o vuelo declarado. |
| BL/AWB (`blNo`) | Campo de texto | Texto libre | Filtra por conocimiento de embarque o guía aérea. |
| Estado (`status`) | Píldoras y selector del panel | Todos, En proceso, Aprobado, Rechazado | Muestra solo las preliberaciones en el estado elegido. |
| Año (`year`) | Selector desplegable | Todos los años y los seis últimos ejercicios | Limita la consulta al ejercicio indicado. |

Si el servidor no responde, el listado muestra «No se pudo conectar con el servidor. Verifique su conexión e intente nuevamente».

![Preliberación fitosanitaria — panel de filtros del listado](/img/screenshots/calidad/preliberaciones/fitosanitario-filtros.png)

*Captura tomada del backoffice Agrimpex con el panel «Filtrar» abierto.*

## Operaciones y documentos

| Operación | Botón | Rol | Ruta o condición |
|-----------|-------|-----|------------------|
| Actualizar | **Actualizar** | Roles con acceso al módulo | Recarga los datos del repositorio del listado. |
| Exportación PDF | **Exportar PDF** | Roles con acceso al módulo | Genera el PDF del listado filtrado. |
| Alta | **Añadir** | Administrador, Especialista o Logístico | `/calidad/preliberations/phytosanitary/add` |
| Edición | Icono lápiz de la fila | Administrador, Especialista o Logístico | `/calidad/preliberations/phytosanitary/edit/:id` |
| Eliminación | Icono papelera de la fila | Administrador, Especialista o Logístico | Desde el listado, previa confirmación. |
| Detalles | Fila / **Ver Detalles** | Roles con acceso de consulta al módulo | Abre el modal con el resumen de la preliberación. |
| Vista previa y descarga | **Elaborar Modelo** → **Vista Previa del Documento** → **Descargar PDF** | Roles con acceso de consulta al módulo | Genera el modelo PDF de la preliberación. |

La ruta alternativa `/logistic/preliberations/phytosanitary/...` carga el mismo componente; el documento canónico permanece en Calidad.

![Preliberación fitosanitaria — fila del listado con las acciones disponibles](/img/screenshots/calidad/preliberaciones/fitosanitario-operaciones.png)

*Captura tomada del backoffice Agrimpex con la columna de acciones a la vista.*

## Formulario (alta y edición)

Las rutas `/calidad/preliberations/phytosanitary/add` y `/calidad/preliberations/phytosanitary/edit/:id` comparten el formulario. Tiene dos pestañas —**Datos Generales** y **Productos**— y dentro de la primera se despliegan las secciones **Datos Marítimos**, **Datos Aéreos** y **Recibido Por** según el tipo de transporte (Marítimo o Aéreo). La cabecera identifica la terminal Mariel o Santiago.

| Campo | Control | Obligatorio | Observaciones |
|-------|---------|-------------|---------------|
| No. Permiso Fitosanitario (`permitNo`) | Texto | No | Número asignado a la preliberación. |
| Tipo de Transporte (`transportType`) | Selector | Sí | Valores Marítimo o Aéreo; por defecto Marítimo. |
| Fecha Solicitud (`requestDate`) | Fecha | Sí | Fecha de radicación. |
| No. Vuelo/Buque (`shipName`) | Texto | No | Identificador del medio de transporte. |
| País de Origen (`originCountry`) | Selector | No | Origen declarado de la mercancía. |
| Certificado Fitosanitario (`certificateId`) | Selector | Sí | «Este campo es obligatorio». |
| Cliente (`clientId`) | Selector | Sí | Muestra Contacto, Teléfono, Destino, Dirección y Actividad del cliente. |
| Puerto de Ingreso (`portId`) | Selector | Sí | Obligatorio en transporte marítimo. |
| No. Manifiesto (`manifestNo`) | Texto | No | Datos Marítimos; se completa desde el BL. |
| BL (`blNo`) | Texto | No | Datos Marítimos; permite cargar contenedores. |
| Air Way Bill (AWB) (`airWayBillId`) | Texto | No | Datos Aéreos. |
| Aeropuerto (`airportId`) | Selector | No | Datos Aéreos. |
| Recibido Por (`receivedById`) | Selector | No | Datos de la sección «Recibido Por». |
| Nombre (`receivedByName`) | Texto | No | Contacto que recibe la mercancía. |
| Teléfono (`receivedByPhone`) | Texto | No | Teléfono del receptor. |
| Correo (`receivedByEmail`) | Texto | No | Correo del receptor. |
| No. Contenedor (`containerNo`) | Texto | No | Se usa en la tabla de productos. |
| Partida/Subpartida (`partidaSubpartida`) | Texto | No | Se usa en la tabla de productos. |
| Peso Neto (kg) (`netWeight`) | Numérico | Sí | Obligatorio y mayor que 0 en cada producto; se totaliza como «Total Peso Neto». |

La pestaña **Productos** usa **Agregar Producto** y muestra el mensaje «Seleccione un BL en Datos Generales o agregue un producto para comenzar» cuando está vacía. El arreglo `products` exige al menos una línea.

**Botones:** **Volver** regresa al listado, **Crear**/**Guardar** persiste el formulario, **Vista Previa** muestra el modelo del documento y **Descargar PDF** obtiene el archivo.

![Preliberación fitosanitaria — pestaña Datos Generales del formulario](/img/screenshots/calidad/preliberaciones/fitosanitario-formulario-general.png)

![Preliberación fitosanitaria — pestaña Productos del formulario](/img/screenshots/calidad/preliberaciones/fitosanitario-formulario-productos.png)

*Capturas tomadas del backoffice Agrimpex en la ruta de alta, una por pestaña.*
