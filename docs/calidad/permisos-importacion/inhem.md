---
sidebar_position: 4
source_route: /calidad/import-permits/inhem/list
source_component: InhemListComponent
status: vigente
---

# Permisos INHEM

## Propósito

Gestiona permisos inhem del módulo Calidad.

## Acceso

- **Menú:** Calidad → Permisos INHEM
- **Ruta directa:** `/calidad/import-permits/inhem/list`
- **Componente:** `InhemListComponent`

> Pantalla alcanzable también desde `/logistic/import-permits/inhem/list`; el documento canónico vive en Calidad.

## Captura

![inhem — captura real](/img/screenshots/calidad/permisos-importacion/inhem.png)

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
| Crear | Añadir | Administrador, Especialista, Logístico o Calidad | `/calidad/import-permits/inhem/add` |
| Editar | Editar | Administrador, Especialista, Logístico o Calidad | `/calidad/import-permits/inhem/edit/:id` |
| Guardar | Guardar | Administrador, Especialista, Logístico o Calidad | `Formulario actual` |
| Cancelar | Cancelar | Administrador, Especialista, Logístico o Calidad | `Listado del módulo` |


## Filtros del listado

El listado de permisos INHEM ofrece el panel lateral **Filtrar**, píldoras de estado y selector de año. Los filtros se aplican de forma reactiva y se limpian con **Limpiar**.

| Filtro | Control | Valores admitidos | Efecto |
|--------|---------|-------------------|--------|
| No. Autorización (`authorizationNo`) | Campo de texto | Texto libre | Localiza el permiso por su número de autorización. |
| Entidad (`entity_name`) | Campo de texto | Texto libre | Busca por el nombre de la entidad registrada. |
| Estado (`status`) | Píldoras y selector del panel | Todos, En Proceso, Aprobado, Rechazado, Vencido | Muestra únicamente los permisos en el estado elegido. |
| Año (`year`) | Selector desplegable | Todos los años y los seis últimos ejercicios | Limita los resultados al ejercicio seleccionado. |

Además, al pulsar el número de autorización de una fila se abre **Ver Detalles** con la información resumida del permiso.

![Permisos INHEM — panel de filtros del listado](/img/screenshots/calidad/permisos-importacion/inhem-filtros.png)

*Captura tomada del backoffice Agrimpex con el panel «Filtrar» abierto.*

## Operaciones y documentos

| Operación | Botón | Rol | Ruta o condición |
|-----------|-------|-----|------------------|
| Alta | **Añadir** | Administrador, Especialista o Logístico | `/calidad/import-permits/inhem/add` |
| Edición | Icono lápiz de la fila | Administrador, Especialista o Logístico | `/calidad/import-permits/inhem/edit/:id` |
| Eliminación | Icono papelera de la fila | Administrador, Especialista o Logístico | Desde el listado, previa confirmación. |
| Detalles | Número de autorización (enlace) | Roles con acceso de consulta al módulo | Abre el modal **Ver Detalles**. |
| Vista previa y descarga | Icono de documento → **Vista Previa del Documento** → **Descargar PDF** | Roles con acceso de consulta al módulo | Genera el modelo PDF del permiso INHEM. |
| Exportación | **Generar Excel (.xlsx)** | Roles con acceso de consulta al módulo | Abre un diálogo de selección de campos. |

La ruta alternativa `/logistic/import-permits/inhem/...` carga el mismo componente; el documento canónico permanece en Calidad.

![Permisos INHEM — fila del listado con las acciones disponibles](/img/screenshots/calidad/permisos-importacion/inhem-operaciones.png)

*Captura tomada del backoffice Agrimpex con la tabla de resultados y sus acciones.*

## Formulario (alta y edición)

Las rutas `/calidad/import-permits/inhem/add` y `/calidad/import-permits/inhem/edit/:id` comparten el formulario. Si no hay productos asignados a líneas que requieran este permiso, se presenta el aviso **No hay productos disponibles** y el bloque de captura queda inhabilitado hasta ajustar la matriz de permisos.

| Campo | Control | Obligatorio | Observaciones |
|-------|---------|-------------|---------------|
| Registro Entidades (`entityId`) | Selector | Sí | Placeholder: «Seleccione entidad». |
| Fecha de Solicitud (`requestDate`) | Fecha | Sí | Debe ser anterior a la fecha de vigencia inicial. |
| Vigencia — Desde (`dateFrom`) | Fecha | Sí | Inicio de la vigencia. |
| Vigencia — Hasta (`dateTo`) | Fecha | Sí | Fin de la vigencia. |
| Estado (`status`) | Selector | No | Placeholder: «Seleccione estado». |
| Especialista Calidad (`qualitySpecialist`) | Selector | No | Placeholder: «Seleccione especialista». |
| No. Autorización (`authorizationNo`) | Texto | No | Placeholder: «Número de autorización». |
| País Origen (`originCountry`) | Selector | No | Placeholder: «Seleccione país». |

**Validación de fechas:** «La Fecha de Solicitud debe ser anterior a la Fecha de Vigencia (Desde)». Los campos obligatorios se marcan con el indicador de validación correspondiente.

**Categorías / Marcas / Fabricantes:** sección de tabla con **+ Agregar**. Cada fila admite Categoría (texto libre, p. ej. «Cremas» o «LICORES»), Marca y Fabricante (selectores), así como la asignación de **Productos de:** la categoría. El estado vacío indica «No hay categorías agregadas. Haga clic en "+ Agregar" para comenzar».

**Botones:** **Regresar** vuelve al listado, **Preview** abre la vista previa, **Generar PDF** y **Descargar PDF** producen el documento, y **Guardar** persiste el formulario (en edición, **Actualizar**).

![Permisos INHEM — formulario de alta](/img/screenshots/calidad/permisos-importacion/inhem-formulario.png)

*Captura tomada del backoffice Agrimpex en la ruta de alta.*
