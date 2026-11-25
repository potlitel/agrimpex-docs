---
sidebar_position: 5
source_route: /calidad/preliberations/health/list
source_component: HealthPreliberationListComponent
status: vigente
---

# Preliberación de salud

## Propósito

Gestiona preliberación de salud del módulo Calidad.

## Acceso

- **Menú:** Calidad → Preliberación de salud
- **Ruta directa:** `/calidad/preliberations/health/list`
- **Componente:** `HealthPreliberationListComponent`

> Pantalla alcanzable también desde `/logistic/preliberations/health/list`; el documento canónico vive en Calidad.

## Captura

![salud — captura real](/img/screenshots/calidad/preliberaciones/salud.png)

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
| Crear | Añadir | Administrador, Especialista, Logístico o Calidad | `/calidad/preliberations/health/add` |
| Editar | Editar | Administrador, Especialista, Logístico o Calidad | `/calidad/preliberations/health/edit/:id` |
| Guardar | Guardar | Administrador, Especialista, Logístico o Calidad | `Formulario actual` |
| Cancelar | Cancelar | Administrador, Especialista, Logístico o Calidad | `Listado del módulo` |


## Filtros del listado

El listado de preliberaciones de salud reúne el panel lateral **Filtrar**, las píldoras de estado y el selector de año. Los criterios se combinan entre sí y se aplican de forma reactiva.

| Filtro | Control | Valores admitidos | Efecto |
|--------|---------|-------------------|--------|
| No. Permiso (`permitNo`) | Campo de texto | Texto libre | Localiza la preliberación por número de permiso. |
| Moto/Nave (`shipName`) | Campo de texto | Texto libre | Busca por el nombre de la moto o nave. |
| BL (`blNo`) | Campo de texto | Texto libre | Filtra por número de conocimiento de embarque. |
| Estado (`status`) | Píldoras y selector del panel | Todos, En proceso, Enviada, Aprobada, Rechazada | Muestra solo las preliberaciones en el estado indicado. |
| Año (`year`) | Selector desplegable | Todos los años y los seis últimos ejercicios | Limita la consulta al ejercicio elegido. |

![Preliberación de salud — panel de filtros del listado](/img/screenshots/calidad/preliberaciones/salud-filtros.png)

*Captura tomada del backoffice Agrimpex con el panel «Filtrar» abierto.*

## Operaciones y documentos

| Operación | Botón | Rol | Ruta o condición |
|-----------|-------|-----|------------------|
| Alta | **Añadir** | Administrador, Especialista o Logístico | `/calidad/preliberations/health/add` |
| Edición | Icono lápiz de la fila | Administrador, Especialista o Logístico | `/calidad/preliberations/health/edit/:id` |
| Eliminación | Icono papelera de la fila | Administrador, Especialista o Logístico | Desde el listado, previa confirmación. |
| Detalles | Fila / **Ver Detalles** | Roles con acceso de consulta al módulo | Abre el modal con el resumen de la preliberación. |
| Vista previa y descarga | **Elaborar Modelo** → **Vista Previa del Documento** → **Descargar PDF** | Roles con acceso de consulta al módulo | Genera el modelo PDF de la preliberación. |
| Exportación | **Generar Excel (.xlsx)** | Roles con acceso de consulta al módulo | Abre un diálogo de selección de campos. |

La ruta alternativa `/logistic/preliberations/health/...` carga el mismo componente; el documento canónico permanece en Calidad.

![Preliberación de salud — fila del listado con las acciones disponibles](/img/screenshots/calidad/preliberaciones/salud-operaciones.png)

*Captura tomada del backoffice Agrimpex con la columna de acciones a la vista.*

## Formulario (alta y edición)

Las rutas `/calidad/preliberations/health/add` y `/calidad/preliberations/health/edit/:id` comparten el formulario. La cabecera muestra la terminal correspondiente (Mariel o Santiago) y el formulario se reparte en dos pestañas.

### Pestaña Datos Generales

| Campo | Control | Obligatorio | Observaciones |
|-------|---------|-------------|---------------|
| Fecha Solicitud (`requestDate`) | Fecha | Sí | Campo obligatorio. |
| Moto/Nave (`shipId`) | Selector | Sí | Se elige la moto o nave del trámite. |
| Fecha de Salida (`departureDate`) | Fecha | No | No puede ser posterior a la fecha de llegada. |
| Fecha de Arribo (`arrivalDate`) | Fecha | No | «La fecha de llegada no puede ser anterior a la fecha de salida». |
| Proveedor (`supplierId`) | Selector | No | Proveedor de la mercancía. |
| Estado (`status`) | Selector | No | En proceso, Enviada, Aprobada o Rechazada. |
| BL (`manifestNo`) | Selector de BL | Sí | «Debe seleccionar un BL»; de él se derivan manifiesto, contenedores y cliente. |
| Registro Sanitario (`sanitaryRegistryId`) | Selector | No | Registro sanitario declarado. |
| Clientes (`clientIds`) | Selección múltiple | No | Clientes asociados al BL. |

Dentro de esta pestaña se organizan además las secciones **Productos** (con **Adicionar Producto**; columnas Producto, Marca, Bultos, Peso Neto, País y Acción), **Certificados** y **Cliente**, este último cargado automáticamente desde el BL (Nombre, Contacto, Teléfono, Dirección, Lugar de Destino, Actividad) y la pestaña **Clientes** de precalificación, que avisa «No hay cliente seleccionado en Datos Generales» cuando no hay uno asignado.

### Pestaña Direcciones de Descarga

Requiere al menos una dirección (**Agregar Dirección**) con Licencia y su Vencimiento, Dirección descarga, Contacto Nombre, Contacto CI y Contacto Teléfono. La licencia seleccionada debe estar vigente («La licencia seleccionada no está vigente»).

**Validaciones adicionales:** debe seleccionarse al menos un contenedor («Debe seleccionar al menos un contenedor»), al menos un producto y al menos una dirección de descarga.

**Botones:** **Regresar** vuelve al listado, **Preview** / **Vista Previa del Documento** muestra el modelo, **Descargar PDF** obtiene el archivo y **Guardar** persiste el formulario (en edición, **Actualizar**).

![Preliberación de salud — pestaña Datos Generales del formulario](/img/screenshots/calidad/preliberaciones/salud-formulario-general.png)

![Preliberación de salud — pestaña Direcciones de Descarga del formulario](/img/screenshots/calidad/preliberaciones/salud-formulario-direcciones.png)

*Capturas tomadas del backoffice Agrimpex en la ruta de alta, una por pestaña.*
