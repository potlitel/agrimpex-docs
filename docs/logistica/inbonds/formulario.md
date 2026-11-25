---
sidebar_position: 24
source_route: /logistic/inbond-goods/add
source_component: InbondFormComponent
status: vigente
---

# Formulario de inbonds

## Propósito

Crea o edita una solicitud inbond con el mismo formulario.

## Acceso

- **Menú:** Logística → Formulario de inbonds
- **Ruta directa:** `/logistic/inbond-goods/add`
- **Componente:** `InbondFormComponent`

## Captura

![formulario — captura real](/img/screenshots/logistica/inbonds/formulario.png)

*Captura tomada del backoffice Agrimpex.*

## Campos

| Campo | Descripción | Obligatorio |
|-------|-------------|-------------|
| No. solicitud | Dato del formulario. | Sí |
| Proveedor | Dato del formulario. | Sí |
| Fecha Solicitud | Dato del formulario. | Sí |
| Estado | Dato del formulario. | Sí |
| Observaciones | Dato del formulario. | Sí |

## Acciones

| Acción | Botón | Rol | Ruta |
|--------|-------|-----|------|
| Crear | Añadir | Administrador, Especialista, Logístico o Calidad | `/logistic/inbond-goods/add` |
| Editar | Editar | Administrador, Especialista, Logístico o Calidad | `/logistic/inbond-goods/edit` |
| Guardar | Guardar | Administrador, Especialista, Logístico o Calidad | `Formulario actual` |
| Cancelar | Cancelar | Administrador, Especialista, Logístico o Calidad | `Listado del módulo` |
