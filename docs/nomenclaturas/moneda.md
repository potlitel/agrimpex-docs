---
sidebar_position: 2
source_route: /management/nomenclatures/currency/list
source_component: CurrencyListComponent
status: vigente
---

# Moneda

## Propósito

Gestiona el nomenclador moneda del sistema.

## Acceso

- **Menú:** Nomenclaturas → Moneda
- **Ruta directa:** `/management/nomenclatures/currency/list`
- **Componente:** `CurrencyListComponent`

> Las rutas `/management/nomenclatures/currency/add` y `/management/nomenclatures/currency/edit` comparten el formulario del nomenclador.

## Captura

![moneda — captura real](/img/screenshots/nomenclaturas/moneda.png)

*Captura tomada del backoffice Agrimpex.*

## Campos

| Campo | Descripción | Obligatorio |
|-------|-------------|-------------|
| Buscar | Filtro de texto para localizar registros. | No |
| Filtrar | Aplica los filtros seleccionados al listado. | No |
| Nombre | Nombre del elemento de moneda. | Sí |

## Acciones

| Acción | Botón | Rol | Ruta |
|--------|-------|-----|------|
| Buscar | Buscar | Administrador o Especialista | `/management/nomenclatures/currency/list` |
| Recargar | Recargar | Administrador o Especialista | `/management/nomenclatures/currency/list` |
| Añadir | Añadir | Administrador, Especialista, Logístico o Calidad | `/management/nomenclatures/currency/list/add` |
| Eliminar | Eliminar | Administrador, Especialista, Logístico o Calidad | `/management/nomenclatures/currency/list` |

## Filtros del listado

El panel **Filtrar** ofrece solo **Nombre**, un cuadro de texto que estrecha la tabla a las monedas cuyo nombre coincide. El componente declara también un control `code` en el modelo de filtros, pero no lo renderiza: no hay campo visible para filtrar por código. El panel se abre con el botón **Filtrar** y se cierra con **Limpiar**; no hay botón **Aplicar**, porque los cambios se reflejan al escribir. Junto al panel están la búsqueda genérica **Buscar**, el botón **Recargar** y, cuando el componente lo declara, la exportación **Generar Excel (.xlsx)** y el indicador de sincronización con Recomplus. El indicador `resourceKey="moneda"` muestra si la moneda está sincronizada con Recomplus.

![Moneda — panel de filtros](/img/screenshots/nomenclaturas/moneda-filtros.png)

*Captura tomada del backoffice Agrimpex: panel **Filtrar** abierto en `/management/nomenclatures/currency/list`.*

## Operaciones y estados

**Columnas visibles:** **Nombre**, **Código**, **Sync** y **Acciones**.

Cada fila puede abrirse con el botón de detalle (icono de ojo), que despliega una hoja lateral con los datos de la moneda. **Añadir** y el lápiz de edición no tienen `canAdd`/`canEdit` en la plantilla: los ve cualquier usuario que pueda entrar al módulo. La edición abre `/currency/edit?id=<id>`, con el identificador en un parámetro de consulta.

| Acción | Botón | Rol | Ruta |
|--------|-------|-----|------|
| Consultar detalle | Ver (ojo) | Administrador o Especialista (botón sin control de rol) | `/management/nomenclatures/currency/list` |
| Añadir moneda | Añadir | Administrador o Especialista (botón sin control de rol) | `/management/nomenclatures/currency/add` |
| Editar moneda | Editar (lápiz) | Administrador o Especialista (botón sin control de rol) | `/management/nomenclatures/currency/edit?id=<id>` |
| Exportar | Generar Excel (.xlsx) | Administrador o Especialista (botón sin control de rol) | `/management/nomenclatures/currency/list` |

No hay botón **Eliminar** en la tabla, aunque el componente implementa el método `delete()`; desde la interfaz solo se pueden consultar, crear y editar monedas.

![Moneda — tabla y acciones del listado](/img/screenshots/nomenclaturas/moneda-operaciones.png)

*Captura tomada del backoffice Agrimpex: listado `/management/nomenclatures/currency/list` con sus columnas y acciones.*

## Formulario (alta y edición)

Las rutas `/currency/add` y `/currency/edit?id=<id>` comparten `CurrencyFormComponent`: en alta se muestra vacío y en edición se precarga el registro indicado por el parámetro `id`. La tarjeta se titula «Añadir Moneda» o «Editar Moneda».

| Campo | Control | Obligatorio | Validación y mensaje |
|-------|---------|-------------|----------------------|
| Nombre | Campo de texto | Sí | `required` → «Campo obligatorio.»; la rama de error `pattern` está en la plantilla pero el control no lleva ese validador. |
| Código | Campo de texto | Sí | `required` → «Campo obligatorio.». |

El botón **Regresar** vuelve al listado y **Guardar** envía el formulario. 

![Moneda — formulario compartido](/img/screenshots/nomenclaturas/moneda-formulario.png)

*Captura tomada del backoffice Agrimpex: formulario de alta en `/management/nomenclatures/currency/add`.*
