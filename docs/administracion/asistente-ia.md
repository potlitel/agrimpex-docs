---
sidebar_position: 6
source_route: /ai-assistant
source_component: AIAssistantPageComponent
status: vigente
---

# Asistente IA

## Propósito

Ofrece un chat de apoyo para consultas sobre el uso del sistema.

## Acceso

- **Menú:** Administración → Asistente IA
- **Ruta directa:** `/ai-assistant`
- **Componente:** `AIAssistantPageComponent`

## Captura

![asistente-ia — captura real](/img/screenshots/administracion/asistente-ia.png)

*Captura tomada del backoffice Agrimpex.*

## Campos

| Campo | Descripción | Obligatorio |
|-------|-------------|-------------|
| Escribe tu consulta... | Campo de texto del mensaje. | Sí |
| Respuesta | Mensaje devuelto por el asistente. | No |

## Acciones

| Acción | Botón | Rol | Ruta |
|--------|-------|-----|------|
| Enviar | Enviar | Todo usuario autenticado | `/ai-assistant` |
