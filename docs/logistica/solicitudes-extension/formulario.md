---
sidebar_position: 26
source_route: /logistic/extensions-requests/add
source_component: ExtensionRequestFormComponent
status: vigente
---

# Formulario de solicitudes de extensión

## Propósito

Crea o edita una solicitud de prórroga con el mismo formulario.

## Acceso

- **Menú:** Logística → Formulario de solicitudes de extensión
- **Ruta directa:** `/logistic/extensions-requests/add`
- **Componente:** `ExtensionRequestFormComponent`

## Captura

![formulario — captura real](/img/screenshots/logistica/solicitudes-extension/formulario.png)

*Captura tomada del backoffice Agrimpex.*

## Campos

| Campo | Descripción | Obligatorio |
|-------|-------------|-------------|
| Contenedor | Dato del formulario. | Sí |
| Tipo de Prórroga | Dato del formulario. | Sí |
| Observaciones | Dato del formulario. | Sí |

## Acciones

| Acción | Botón | Rol | Ruta |
|--------|-------|-----|------|
| Crear | Añadir | Administrador, Especialista, Logístico o Calidad | `/logistic/extensions-requests/add` |
| Editar | Editar | Administrador, Especialista, Logístico o Calidad | `/logistic/extensions-requests/edit/:id` |
| Guardar | Guardar | Administrador, Especialista, Logístico o Calidad | `Formulario actual` |
| Cancelar | Cancelar | Administrador, Especialista, Logístico o Calidad | `Listado del módulo` |
