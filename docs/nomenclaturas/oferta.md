---
sidebar_position: 17
source_route: /management/nomenclatures/oferta/list
source_component: OfertaListComponent
status: vigente
---

# Oferta

## Propósito

Gestiona el nomenclador oferta del sistema.

## Acceso

- **Menú:** Nomenclaturas → Oferta
- **Ruta directa:** `/management/nomenclatures/oferta/list`
- **Componente:** `OfertaListComponent`

> El frontend expone únicamente el listado de este nomenclador.

## Captura

![oferta — captura real](/img/screenshots/nomenclaturas/oferta.png)

*Captura tomada del backoffice Agrimpex.*

## Campos

| Campo | Descripción | Obligatorio |
|-------|-------------|-------------|
| Buscar | Filtro de texto para localizar registros. | No |
| Filtrar | Aplica los filtros seleccionados al listado. | No |
| Nombre | Nombre del elemento de oferta. | Sí |

## Acciones

| Acción | Botón | Rol | Ruta |
|--------|-------|-----|------|
| Buscar | Buscar | Administrador o Especialista | `/management/nomenclatures/oferta/list` |
| Recargar | Recargar | Administrador o Especialista | `/management/nomenclatures/oferta/list` |
