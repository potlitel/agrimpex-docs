---
sidebar_position: 18
source_route: /logistic/container-control
source_component: ContainerHistoryComponent
status: vigente
---

# Trazabilidad de contenedores

## Propósito

Muestra el historial de estados y movimientos de un contenedor.

## Acceso

- **Menú:** Logística → Trazabilidad de contenedores
- **Ruta directa:** `/logistic/container-control`
- **Componente:** `ContainerHistoryComponent`

## Captura

![trazabilidad — captura real](/img/screenshots/logistica/contenedores/trazabilidad.png)

*Captura tomada del backoffice Agrimpex.*

## Campos

| Campo | Descripción | Obligatorio |
|-------|-------------|-------------|
| Contenedor | Identificador del contenedor. | No |
| Arribo | Fecha de arribo. | No |
| Extracción | Fecha de extracción. | No |

## Acciones

| Acción | Botón | Rol | Ruta |
|--------|-------|-----|------|
| Buscar | Buscar | Administrador, Especialista, Consultor o Logístico | `/logistic/container-control` |
| Recargar | Recargar | Administrador, Especialista, Consultor o Logístico | `/logistic/container-control` |
