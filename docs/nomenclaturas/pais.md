---
sidebar_position: 7
source_route: /management/nomenclatures/country/list
source_component: CountryListComponent
status: vigente
---

# País

## Propósito

Gestiona el nomenclador país del sistema.

## Acceso

- **Menú:** Nomenclaturas → País
- **Ruta directa:** `/management/nomenclatures/country/list`
- **Componente:** `CountryListComponent`

> Las rutas `/management/nomenclatures/country/add` y `/management/nomenclatures/country/edit` comparten el formulario del nomenclador.

## Captura

![pais — captura real](/img/screenshots/nomenclaturas/pais.png)

*Captura tomada del backoffice Agrimpex.*

## Campos

| Campo | Descripción | Obligatorio |
|-------|-------------|-------------|
| Buscar | Filtro de texto para localizar registros. | No |
| Filtrar | Aplica los filtros seleccionados al listado. | No |
| Nombre | Nombre del elemento de país. | Sí |

## Acciones

| Acción | Botón | Rol | Ruta |
|--------|-------|-----|------|
| Buscar | Buscar | Administrador o Especialista | `/management/nomenclatures/country/list` |
| Recargar | Recargar | Administrador o Especialista | `/management/nomenclatures/country/list` |
| Añadir | Añadir | Administrador, Especialista, Logístico o Calidad | `/management/nomenclatures/country/list/add` |
| Eliminar | Eliminar | Administrador, Especialista, Logístico o Calidad | `/management/nomenclatures/country/list` |
