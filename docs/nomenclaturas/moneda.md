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
