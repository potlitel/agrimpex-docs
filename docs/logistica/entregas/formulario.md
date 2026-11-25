---
sidebar_position: 22
source_route: /logistic/delivery-orders/add
source_component: DeliveryOrderFormComponent
status: vigente
---

# Formulario de entregas

## Propósito

Crea una orden de entrega nueva o edita una existente con el mismo formulario.

## Acceso

- **Menú:** Logística → Formulario de entregas
- **Ruta directa:** `/logistic/delivery-orders/add`
- **Componente:** `DeliveryOrderFormComponent`

## Captura

![formulario — captura real](/img/screenshots/logistica/entregas/formulario.png)

*Captura tomada del backoffice Agrimpex.*

## Campos

| Campo | Descripción | Obligatorio |
|-------|-------------|-------------|
| No Orden | Dato del formulario. | Sí |
| Proveedor | Dato del formulario. | Sí |
| Especialista | Dato del formulario. | Sí |
| Estado | Dato del formulario. | Sí |
| Productos | Dato del formulario. | Sí |
| Cliente | Dato del formulario. | Sí |
| Contenedor | Dato del formulario. | Sí |
| No. BL | Dato del formulario. | Sí |

## Acciones

| Acción | Botón | Rol | Ruta |
|--------|-------|-----|------|
| Crear | Añadir | Administrador, Especialista, Logístico o Calidad | `/logistic/delivery-orders/add` |
| Editar | Editar | Administrador, Especialista, Logístico o Calidad | `/logistic/delivery-orders/edit` |
| Guardar | Guardar | Administrador, Especialista, Logístico o Calidad | `Formulario actual` |
| Cancelar | Cancelar | Administrador, Especialista, Logístico o Calidad | `Listado del módulo` |
