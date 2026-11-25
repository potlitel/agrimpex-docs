---
sidebar_position: 26
source_route: /management/nomenclatures/airport/list
source_component: AirportListComponent
status: vigente
---

# Aeropuerto

## Propósito

Gestiona el nomenclador aeropuerto del sistema.

## Acceso

- **Menú:** Nomenclaturas → Aeropuerto
- **Ruta directa:** `/management/nomenclatures/airport/list`
- **Componente:** `AirportListComponent`

> Las rutas `/management/nomenclatures/airport/add` y `/management/nomenclatures/airport/edit` comparten el formulario del nomenclador.

## Captura

![airport — captura real](/img/screenshots/nomenclaturas/airport.png)

*Captura tomada del backoffice Agrimpex.*

## Campos

| Campo | Descripción | Obligatorio |
|-------|-------------|-------------|
| Buscar | Filtro de texto para localizar registros. | No |
| Filtrar | Aplica los filtros seleccionados al listado. | No |
| Nombre | Nombre del elemento de aeropuerto. | Sí |

## Acciones

| Acción | Botón | Rol | Ruta |
|--------|-------|-----|------|
| Buscar | Buscar | Administrador o Especialista | `/management/nomenclatures/airport/list` |
| Recargar | Recargar | Administrador o Especialista | `/management/nomenclatures/airport/list` |
| Añadir | Añadir | Administrador, Especialista, Logístico o Calidad | `/management/nomenclatures/airport/list/add` |
| Eliminar | Eliminar | Administrador, Especialista, Logístico o Calidad | `/management/nomenclatures/airport/list` |
