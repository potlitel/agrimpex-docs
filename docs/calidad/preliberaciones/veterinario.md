---
sidebar_position: 6
source_route: /calidad/preliberations/veterinary/list
source_component: VeterinaryPreliberationListComponent
status: vigente
---

# Preliberación veterinaria

## Propósito

Gestiona preliberación veterinaria del módulo Calidad.

## Acceso

- **Menú:** Calidad → Preliberación veterinaria
- **Ruta directa:** `/calidad/preliberations/veterinary/list`
- **Componente:** `VeterinaryPreliberationListComponent`

> Pantalla alcanzable también desde `/logistic/preliberations/veterinary/list`; el documento canónico vive en Calidad.

## Captura

![veterinario — captura real](/img/screenshots/calidad/preliberaciones/veterinario.png)

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
| Crear | Añadir | Administrador, Especialista, Logístico o Calidad | `/calidad/preliberations/veterinary/add` |
| Editar | Editar | Administrador, Especialista, Logístico o Calidad | `/calidad/preliberations/veterinary/edit/:id` |
| Guardar | Guardar | Administrador, Especialista, Logístico o Calidad | `Formulario actual` |
| Cancelar | Cancelar | Administrador, Especialista, Logístico o Calidad | `Listado del módulo` |


## Filtros del listado

El listado de preliberaciones veterinarias ofrece el panel lateral **Filtrar**, píldoras de estado y selector de año. Los filtros se combinan y se aplican de forma reactiva.

| Filtro | Control | Valores admitidos | Efecto |
|--------|---------|-------------------|--------|
| No. Permiso (`permitNo`) | Campo de texto | Texto libre | Localiza la preliberación por número de permiso. |
| Buque/Vuelo (`shipName`) | Campo de texto | Texto libre | Busca por motonave, buque o vuelo. |
| BL (`blNo`) | Campo de texto | Texto libre | Filtra por número de conocimiento de embarque. |
| Estado (`status`) | Píldoras y selector del panel | Todos, En proceso, Enviada, Pendiente, Aprobado, Rechazado | Muestra solo las preliberaciones en el estado indicado. |
| Año (`year`) | Selector desplegable | Todos los años y los seis últimos ejercicios | Limita la consulta al ejercicio elegido. |

![Preliberación veterinaria — panel de filtros del listado](/img/screenshots/calidad/preliberaciones/veterinario-filtros.png)

*Captura tomada del backoffice Agrimpex con el panel «Filtrar» abierto.*

## Operaciones y documentos

| Operación | Botón | Rol | Ruta o condición |
|-----------|-------|-----|------------------|
| Alta | **Añadir** | Administrador, Especialista o Logístico | `/calidad/preliberations/veterinary/add` |
| Edición | Icono lápiz de la fila | Administrador, Especialista o Logístico | `/calidad/preliberations/veterinary/edit/:id` |
| Eliminación | Icono papelera de la fila | Administrador, Especialista o Logístico | Desde el listado, previa confirmación. |
| Detalles | Fila / **Ver Detalles** | Roles con acceso de consulta al módulo | Abre el modal con el resumen de la preliberación. |
| Vista previa y descarga | **Elaborar Modelo** → **Vista Previa del Documento** → **Descargar PDF** | Roles con acceso de consulta al módulo | Genera el modelo PDF de la preliberación veterinaria. |
| Exportación | **Generar Excel (.xlsx)** | Roles con acceso de consulta al módulo | Abre un diálogo de selección de campos. |

La ruta alternativa `/logistic/preliberations/veterinary/...` carga el mismo componente; el documento canónico permanece en Calidad.

![Preliberación veterinaria — fila del listado con las acciones disponibles](/img/screenshots/calidad/preliberaciones/veterinario-operaciones.png)

*Captura tomada del backoffice Agrimpex con la columna de acciones a la vista.*

## Formulario (alta y edición)

Las rutas `/calidad/preliberations/veterinary/add` y `/calidad/preliberations/veterinary/edit/:id` comparten el formulario, distribuido en tres pestañas (Datos Generales, Productos y Cliente) con la terminal Mariel o Santiago en la cabecera.

### Pestaña Datos Generales

| Campo | Control | Obligatorio | Observaciones |
|-------|---------|-------------|---------------|
| Tipo de servicio (`serviceType`) | Selector | Sí | Define el tipo de preliberación. |
| Fecha (`requestDate`) | Fecha | Sí | Campo obligatorio. |
| Motonave (Buque) (`shipId`) | Selector | Sí | Embarcación del trámite. |
| País de Procedencia (`countryId`) | Selector | Sí | País de origen declarado. |
| BL (`manifestNo`) | Selector de BL | Sí | «Debe seleccionar un BL»; de él dependen contenedores y clientes. |
| Consignado por (`consignedBy`) | Texto | No | Placeholder: «Escriba el consignatario». |
| Portado por (`carriedBy`) | Texto | No | Placeholder: «Escriba el porteador». |
| No. Permiso (`permitNo`) | Texto | No | Número asignado a la preliberación. |
| Solicita (`solicitanteId`) | Selector | No | Solicitante del trámite. |
| Estado (`status`) | Selector | No | Estado de la preliberación. |
| Contenedores del BL (`containerIds`) | Selección múltiple | Sí | «Debe seleccionar al menos un contenedor»; se cargan al elegir el BL. |
| Permiso de Importación (`importPermitNo`) | Texto | No | Se muestra junto a su vigencia y productos autorizados. |

También se registran los **Certificados Veterinarios** y **Certificados de Calidad** (al menos uno de cada tipo), mediante **Adicionar Certificado Veterinario** y **Adicionar Certificado de Calidad**.

### Pestaña Productos

Tabla #2 de productos con **Adicionar Producto**: Producto, UM, Unidades, Peso (KG), Proveedor, Productor / No. Establecimiento, Condado y Estado. Las cantidades y el peso neto deben ser mayores que 0.

### Pestaña Cliente

Los clientes y sus direcciones de descarga se cargan desde el BL. Incluye la Tabla #1 de **Formas de gestión** (**Adicionar Forma de Gestión**, con nombre del negocio, entidad o responsable comercial) y la Tabla #2 de **Licencias** (**Adicionar Licencia**, con Vencimiento Licencia, Dirección descarga, Actividad y Teléfono). Es obligatorio seleccionar al menos un cliente (`clientId`).

**Botones:** **Regresar** vuelve al listado, **Preview** / **Vista Previa del Documento** muestra el modelo, **Descargar PDF** obtiene el archivo y **Guardar** persiste el formulario (en edición, **Actualizar**).

![Preliberación veterinaria — pestaña Datos Generales del formulario](/img/screenshots/calidad/preliberaciones/veterinario-formulario-general.png)

![Preliberación veterinaria — pestaña Productos del formulario](/img/screenshots/calidad/preliberaciones/veterinario-formulario-productos.png)

![Preliberación veterinaria — pestaña Cliente del formulario](/img/screenshots/calidad/preliberaciones/veterinario-formulario-cliente.png)

*Capturas tomadas del backoffice Agrimpex en la ruta de alta, una por pestaña.*
