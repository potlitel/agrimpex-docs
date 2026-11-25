---
sidebar_position: 15
source_route: /logistic/shipping-documents/list
source_component: ShippingDocumentsListComponent
status: vigente
---

# Documentos de embarque

## Propósito

Lista los documentos de embarque asociados a contenedores y expedientes BL/AWB.

## Acceso

- **Menú:** Logística → Documentos de embarque
- **Ruta directa:** `/logistic/shipping-documents/list`
- **Componente:** `ShippingDocumentsListComponent`

## Captura

![documentos — captura real](/img/screenshots/logistica/contenedores/documentos.png)

*Captura tomada del backoffice Agrimpex.*

## Campos

| Campo | Descripción | Obligatorio |
|-------|-------------|-------------|
| No. BL | Número de conocimiento de embarque. | No |
| No. Manifiesto | Número de manifiesto. | No |
| No. DM | Número de declaración de mercancías. | No |

## Acciones

| Acción | Botón | Rol | Ruta |
|--------|-------|-----|------|
| Buscar | Buscar | Administrador, Especialista, Consultor o Logístico | `/logistic/shipping-documents/list` |
| Recargar | Recargar | Administrador, Especialista, Consultor o Logístico | `/logistic/shipping-documents/list` |
| Añadir | Añadir | Administrador, Especialista, Logístico o Calidad | `/logistic/shipping-documents/list/add` |
