---
sidebar_position: 10
source_route: /logistic/excludes-containers
source_component: NonMarielListComponent
status: vigente
---

# Contenedores excluidos

## Propósito

Lista los contenedores que no corresponden al circuito Mariel.

## Acceso

- **Menú:** Logística → Contenedores excluidos
- **Ruta directa:** `/logistic/excludes-containers`
- **Componente:** `NonMarielListComponent`

## Captura

![excluidos — captura real](/img/screenshots/logistica/importacion/excluidos.png)

*Captura tomada del backoffice Agrimpex.*

## Campos

| Campo | Descripción | Obligatorio |
|-------|-------------|-------------|
| Contenedor | Identificador del contenedor. | No |
| No. BL | Número de conocimiento de embarque. | No |
| Estado | Estado logístico actual. | No |

## Acciones

| Acción | Botón | Rol | Ruta |
|--------|-------|-----|------|
| Buscar | Buscar | Administrador, Especialista, Consultor o Logístico | `/logistic/excludes-containers` |
| Recargar | Recargar | Administrador, Especialista, Consultor o Logístico | `/logistic/excludes-containers` |
