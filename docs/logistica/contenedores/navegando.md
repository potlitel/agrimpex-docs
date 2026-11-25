---
sidebar_position: 13
source_route: /logistic/navigating-containers/list
source_component: ContainerListComponent
status: vigente
---

# Contenedores en tránsito

## Propósito

Lista los contenedores en tránsito y permite gestionar sus documentos de embarque.

## Acceso

- **Menú:** Logística → Contenedores en tránsito
- **Ruta directa:** `/logistic/navigating-containers/list`
- **Componente:** `ContainerListComponent`

## Captura

![navegando — captura real](/img/screenshots/logistica/contenedores/navegando.png)

*Captura tomada del backoffice Agrimpex.*

## Campos

| Campo | Descripción | Obligatorio |
|-------|-------------|-------------|
| Contenedor | Identificador del contenedor. | No |
| No. BL | Número de conocimiento de embarque. | No |
| Estado | Estado de tránsito. | No |

## Acciones

| Acción | Botón | Rol | Ruta |
|--------|-------|-----|------|
| Buscar | Buscar | Administrador, Especialista, Consultor o Logístico | `/logistic/navigating-containers/list` |
| Añadir documento de embarque | Añadir | Administrador, Especialista, Logístico o Calidad | `/logistic/navigating-containers/add-shipping-documents` |
| Editar documento de embarque | Editar | Administrador, Especialista, Logístico o Calidad | `/logistic/navigating-containers/edit-shipping-documents` |
