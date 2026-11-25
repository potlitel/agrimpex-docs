---
sidebar_position: 2
source_route: /settings/form
source_component: ConfigurationFormComponent
status: vigente
---

# Formulario de configuración

## Propósito

Configura los parámetros generales y las preferencias de notificación del usuario.

## Acceso

- **Menú:** Configuración → Formulario de configuración
- **Ruta directa:** `/settings/form`
- **Componente:** `ConfigurationFormComponent`

> La pestaña de notificaciones muestra "Mis Preferencias" a todos los usuarios y "Configuración de Roles" solo a administradores.

## Captura

![formulario — captura real](/img/screenshots/configuracion/formulario.png)

*Captura tomada del backoffice Agrimpex.*

## Campos

| Campo | Descripción | Obligatorio |
|-------|-------------|-------------|
| Buscar | Filtro de texto para localizar registros. | No |
| Filtrar | Aplica los filtros seleccionados al listado. | No |
| Código NIT | Identificador fiscal de la empresa. | No |
| Nombre | Nombre de la empresa. | No |
| Dirección | Dirección de la empresa. | No |
| Cuenta MN | Cuenta bancaria en moneda nacional. | No |
| Cuenta MLC | Cuenta bancaria en MLC. | No |
| Tasa de conversión MLC | Tasa aplicada a conversiones. | No |
| Logotipo | Imagen corporativa. | No |
| Preferencias de notificaciones | Tipos, umbrales y frecuencia de sondeo. | No |

## Acciones

| Acción | Botón | Rol | Ruta |
|--------|-------|-----|------|
| Guardar | Guardar | Todo usuario autenticado | `/settings/form` |
| Guardar preferencias | Guardar preferencias | Todo usuario autenticado | `/settings/form?tab=notifications` |
| Cancelar | Cancelar | Todo usuario autenticado | `/settings/form` |
