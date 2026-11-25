---
sidebar_position: 30
source_route: /logistic/specialist-suppliers/add
source_component: SpecialistFormComponent
status: vigente
---

# Formulario de especialistas

## Propósito

Crea o edita un especialista con el mismo formulario.

## Acceso

- **Menú:** Logística → Formulario de especialistas
- **Ruta directa:** `/logistic/specialist-suppliers/add`
- **Componente:** `SpecialistFormComponent`

## Captura

![formulario — captura real](/img/screenshots/logistica/especialistas/formulario.png)

*Captura tomada del backoffice Agrimpex.*

## Campos

| Campo | Descripción | Obligatorio |
|-------|-------------|-------------|
| Nombre | Dato del formulario. | Sí |
| Teléfono | Dato del formulario. | Sí |
| Correo electrónico | Dato del formulario. | Sí |
| Activo | Dato del formulario. | Sí |

## Acciones

| Acción | Botón | Rol | Ruta |
|--------|-------|-----|------|
| Crear | Añadir | Administrador, Especialista, Logístico o Calidad | `/logistic/specialist-suppliers/add` |
| Editar | Editar | Administrador, Especialista, Logístico o Calidad | `/logistic/specialist-suppliers/edit` |
| Guardar | Guardar | Administrador, Especialista, Logístico o Calidad | `Formulario actual` |
| Cancelar | Cancelar | Administrador, Especialista, Logístico o Calidad | `Listado del módulo` |
