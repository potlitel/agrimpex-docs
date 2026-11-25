---
sidebar_position: 16
source_route: /management/nomenclatures/contract/list
source_component: ContractListComponent
status: vigente
---

# Contrato

## Propósito

Gestiona el nomenclador contrato del sistema.

## Acceso

- **Menú:** Nomenclaturas → Contrato
- **Ruta directa:** `/management/nomenclatures/contract/list`
- **Componente:** `ContractListComponent`

> El frontend expone únicamente el listado de este nomenclador.

## Captura

![contract — captura real](/img/screenshots/nomenclaturas/contract.png)

*Captura tomada del backoffice Agrimpex.*

## Campos

| Campo | Descripción | Obligatorio |
|-------|-------------|-------------|
| Buscar | Filtro de texto para localizar registros. | No |
| Filtrar | Aplica los filtros seleccionados al listado. | No |
| Nombre | Nombre del elemento de contrato. | Sí |

## Acciones

| Acción | Botón | Rol | Ruta |
|--------|-------|-----|------|
| Buscar | Buscar | Administrador o Especialista | `/management/nomenclatures/contract/list` |
| Recargar | Recargar | Administrador o Especialista | `/management/nomenclatures/contract/list` |

## Filtros del listado

El panel **Filtrar** despliega diez criterios: **No. Contrato**, **Registro Interno**, **Registro Externo**, **Tipo de Contrato**, **Clasificación del Contrato**, **Estado**, **Dirección**, **Departamento**, **Codificación** y **Usuario**. **Estado** es un selector con Borrador, Pendiente Aprobacion, En Proceso, Aprobado y Vigente; el resto son campos de texto. El panel se abre con el botón **Filtrar** y se cierra con **Limpiar**; no hay botón **Aplicar**, porque los cambios se reflejan al escribir. Junto al panel están la búsqueda genérica **Buscar**, el botón **Recargar** y, cuando el componente lo declara, la exportación **Generar Excel (.xlsx)** y el indicador de sincronización con Recomplus.

![Contrato — panel de filtros](/img/screenshots/nomenclaturas/contract-filtros.png)

*Captura tomada del backoffice Agrimpex: panel **Filtrar** abierto en `/management/nomenclatures/contract/list`.*

## Operaciones y estados

**Columnas visibles:** **No. Contrato**, **Estado**, **Tipo de Contrato**, **Valor**, **Fecha de Firma**, **Usuario**, **Sync** y **Acciones**.

Cada fila abre una hoja lateral de detalle con el botón de ojo y **Cerrar**. No hay botones **Añadir**, **Editar** ni **Eliminar**: el enrutador solo registra la ruta `list`. La barra incluye el indicador de sincronización (`canSync` sobre `Contrato`) y la exportación.

| Acción | Botón | Rol | Ruta |
|--------|-------|-----|------|
| Consultar detalle | Ver (ojo) | Administrador o Especialista (botón sin control de rol) | `/management/nomenclatures/contract/list` |
| Exportar | Generar Excel (.xlsx) | Administrador o Especialista (botón sin control de rol) | `/management/nomenclatures/contract/list` |



![Contrato — tabla y acciones del listado](/img/screenshots/nomenclaturas/contract-operaciones.png)

*Captura tomada del backoffice Agrimpex: listado `/management/nomenclatures/contract/list` con sus columnas y acciones.*

## Excepciones del nomenclador

El enrutador declara únicamente `/management/nomenclatures/contract/list` y su redirección raíz; no hay rutas `add` ni `edit` y no existe componente de formulario. El único control con permiso es el indicador de sincronización; no se atribuyen al listado acciones de alta, edición ni borrado que el frontend no ofrece.

![Contrato — listado sin operaciones de escritura](/img/screenshots/nomenclaturas/contract-operaciones.png)

*Captura tomada del backoffice Agrimpex: `/management/nomenclatures/contract/list`, único estado disponible en el frontend.*
