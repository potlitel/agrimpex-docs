---
sidebar_position: 28
source_route: /logistic/desaduanes/add
source_component: CustomClearanceFormComponent
status: vigente
---

# Formulario de desaduane

## Propósito

Registra o edita un despacho aduanero con el mismo formulario.

## Acceso

- **Menú:** Logística → Formulario de desaduane
- **Ruta directa:** `/logistic/desaduanes/add`
- **Componente:** `CustomClearanceFormComponent`

## Captura

![formulario — captura real](/img/screenshots/logistica/desaduanes/formulario.png)

*Captura tomada del backoffice Agrimpex.*

## Campos

| Campo | Descripción | Obligatorio |
|-------|-------------|-------------|
| No. Desaduane | Dato del formulario. | Sí |
| No. DM | Dato del formulario. | Sí |
| Fecha DM | Dato del formulario. | Sí |
| Contenedor | Dato del formulario. | Sí |
| Observaciones | Dato del formulario. | Sí |

## Acciones

| Acción | Botón | Rol | Ruta |
|--------|-------|-----|------|
| Crear | Añadir | Administrador, Especialista, Logístico o Calidad | `/logistic/desaduanes/add` |
| Editar | Editar | Administrador, Especialista, Logístico o Calidad | `/logistic/desaduanes/edit/:id` |
| Guardar | Guardar | Administrador, Especialista, Logístico o Calidad | `Formulario actual` |
| Cancelar | Cancelar | Administrador, Especialista, Logístico o Calidad | `Listado del módulo` |
