---
sidebar_position: 32
source_route: /logistic/airs-freights/add
source_component: AirFreightFormComponent
status: vigente
---

# Formulario de fletes aéreos

## Propósito

Crea o edita un flete aéreo con el mismo formulario.

## Acceso

- **Menú:** Logística → Formulario de fletes aéreos
- **Ruta directa:** `/logistic/airs-freights/add`
- **Componente:** `AirFreightFormComponent`

## Captura

![formulario — captura real](/img/screenshots/logistica/fletes-aereos/formulario.png)

*Captura tomada del backoffice Agrimpex.*

## Campos

| Campo | Descripción | Obligatorio |
|-------|-------------|-------------|
| No. Factura | Dato del formulario. | Sí |
| Naviera | Dato del formulario. | Sí |
| Productos | Dato del formulario. | Sí |
| Estado | Dato del formulario. | Sí |

## Acciones

| Acción | Botón | Rol | Ruta |
|--------|-------|-----|------|
| Crear | Añadir | Administrador, Especialista, Logístico o Calidad | `/logistic/airs-freights/add` |
| Editar | Editar | Administrador, Especialista, Logístico o Calidad | `/logistic/airs-freights/edit` |
| Guardar | Guardar | Administrador, Especialista, Logístico o Calidad | `Formulario actual` |
| Cancelar | Cancelar | Administrador, Especialista, Logístico o Calidad | `Listado del módulo` |
