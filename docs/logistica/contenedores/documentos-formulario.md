---
sidebar_position: 16
source_route: /logistic/shipping-documents/add
source_component: ShippingDocumentsFormComponent
status: vigente
---

# Formulario de documentos de embarque

## Propósito

Crea o edita un documento de embarque con el mismo formulario.

## Acceso

- **Menú:** Logística → Formulario de documentos de embarque
- **Ruta directa:** `/logistic/shipping-documents/add`
- **Componente:** `ShippingDocumentsFormComponent`

## Captura

![documentos-formulario — captura real](/img/screenshots/logistica/contenedores/documentos-formulario.png)

*Captura tomada del backoffice Agrimpex.*

## Campos

| Campo | Descripción | Obligatorio |
|-------|-------------|-------------|
| No. BL | Dato del formulario. | Sí |
| No. Manifiesto | Dato del formulario. | Sí |
| No. Factura | Dato del formulario. | Sí |
| Naviera | Dato del formulario. | Sí |
| Productos | Dato del formulario. | Sí |

## Acciones

| Acción | Botón | Rol | Ruta |
|--------|-------|-----|------|
| Crear | Añadir | Administrador, Especialista, Logístico o Calidad | `/logistic/shipping-documents/add` |
| Editar | Editar | Administrador, Especialista, Logístico o Calidad | `/logistic/shipping-documents/edit/:id` |
| Guardar | Guardar | Administrador, Especialista, Logístico o Calidad | `Formulario actual` |
| Cancelar | Cancelar | Administrador, Especialista, Logístico o Calidad | `Listado del módulo` |
