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


## Uso del asistente

La ruta `/ai-assistant` no declara guard de rol: cualquier usuario con sesión válida puede abrirla. `AIAssistantPageComponent` ocupa el alto disponible con `ChatPanelComponent`, cuyo encabezado muestra «Asistente IA» y el subtítulo «Consulta inteligentemente los datos del sistema».

**Estado vacío y sugerencias.** Sin mensajes, el panel muestra «Prueba estas consultas:» con tres grupos de botones que envían la consulta al pulsarlos: *Consultas Básicas* (Todos los contenedores Mariel, Todos los BLs del sistema, Lista de proveedores, Plantas registradas), *Por Identificador* (contenedor GLDU9680888, bl MBESSZFE224378, contenedor HLBU3455116) y *Análisis y Estadísticas* (Estadísticas del sistema, Contenedores por estado, Top proveedores). Debajo hay acciones rápidas —**Mariel**, **BLs**, **Plantas**, **Proveedores** y **Stats**— que lanzan búsquedas o el panel de estadísticas.

**Envío y resultados.** El campo «Escribe tu consulta...» ofrece autocompletado a partir de dos caracteres (hasta seis coincidencias), navegable con las flechas y confirmable con **Enter** o **Escape**. El botón **Enviar** permanece deshabilitado mientras el campo esté vacío o la consulta esté en curso; durante la espera se muestran tres puntos animados. Los mensajes del usuario se alinean a la derecha y las respuestas a la izquierda, con la hora `HH:mm` al pie. Cuando hay resultados, la respuesta indica «N resultado(s) - Clic para ver detalles», muestra una tarjeta por registro con sus campos y un enlace **Ver** que navega a la ficha de contenedor, BL, proveedor o planta; el botón **Copiar** vuelca los resultados al portapapeles.

**Historial y limpieza.** Los mensajes se guardan en `localStorage` bajo la clave `ai-assistant-history` y se restauran al volver a abrir el panel. Cuando hay mensajes aparecen **CSV**, que exporta los resultados con fecha, hora, consulta, tipo, identificador y campos (o avisa «No hay datos para exportar» si no hay resultados), y **Limpiar**, que vacía la conversación y elimina el historial almacenado. Las respuestas dependen del servicio de IA y del estado de los datos del sistema, por lo que su contenido concreto no está garantizado.

![Asistente IA — panel vacío con las consultas sugeridas](/img/screenshots/administracion/asistente-ia-chat-vacio.png)

*Captura tomada del backoffice Agrimpex en `/ai-assistant` antes de enviar consultas.*

![Asistente IA — conversación con una consulta y su respuesta](/img/screenshots/administracion/asistente-ia-chat-consulta.png)

*Captura tomada del backoffice Agrimpex tras pulsar la sugerencia «Estadísticas del sistema».*
