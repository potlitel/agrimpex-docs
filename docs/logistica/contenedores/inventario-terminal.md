---
sidebar_position: 12
source_route: /logistic/terminal-inventory
source_component: TerminalInventoryShellComponent
status: vigente
---

# Inventario en terminal

## Propósito

Consulta el inventario de contenedores disponible en la terminal activa.

## Acceso

- **Menú:** Logística → Inventario en terminal
- **Ruta directa:** `/logistic/terminal-inventory`
- **Componente:** `TerminalInventoryShellComponent`

## Captura

![inventario-terminal — captura real](/img/screenshots/logistica/contenedores/inventario-terminal.png)

*Captura tomada del backoffice Agrimpex.*

## Campos

| Campo | Descripción | Obligatorio |
|-------|-------------|-------------|
| Contenedor | Identificador del contenedor. | No |
| Puerto | Terminal donde se encuentra. | No |
| Estado | Estado logístico actual. | No |

## Acciones

| Acción | Botón | Rol | Ruta |
|--------|-------|-----|------|
| Buscar | Buscar | Administrador, Especialista, Consultor o Logístico | `/logistic/terminal-inventory` |
| Recargar | Recargar | Administrador, Especialista, Consultor o Logístico | `/logistic/terminal-inventory` |

## Control y trazabilidad

`/logistic/terminal-inventory` muestra los equipos presentes en el último parte de la terminal activa: los repositorios aplican `presenteEnUltimoParte: true` y no contrastan la lista con contenedores extraídos. El conmutador **Mariel / Santiago** cambia la fuente; los enlaces del dashboard añaden parámetros `puerto` y `filtro` (`todos`, `retraso`, `sin-dm`, `reefer`) que ajustan el título y los criterios iniciales. La forma «compacta» y la «detallada» comparten repositorio; la detallada es la predeterminada.

El panel **Filtrar** reúne **Contenedor**, **No. BL**, **Estado**, **Tipo de Contenedor**, **Naviera**, **No. Manifiesto**, **Longitud**, **Habilitado**, **BL House Liberado**, **Especialista**, **Proveedor**, **No. Solicitudes de clientes**, los rangos **Días (Min - Max)** y **Días sin DM (Min - Max)** y los rangos de fechas **Fecha de Arribo**, **Fecha Entrega Aduana**, **Fecha DM** y **Fecha Transferencia / Precita**. Los rangos incompletos se ignoran. La tabla agrupa las columnas en «Parte Diario Mariel», «Documentos de Embarque» y «Desaduane/DM», con la primera y la última columna fijas; las celdas de estado, especialista y fechas se pueden editar en línea cuando el usuario tiene rol Especialista o Administrador. Al guardar se exige la fecha de entrega a Aduana si el estado es Aduana y la fecha de transferencia/precita si el estado es Transferencia o Precita, siempre posteriores al arribo; hay botones **Usar la fecha de hoy**, **Guardar cambios** y **Cancelar edición** y un indicador de cambios sin guardar. Seleccionar «BL endosado» u «Otra Importadora» pide confirmar la exclusión.

El enlace del número de BL abre `/logistic/shipping-documents/edit/:blId?fromNavigating=false`; el botón de ojo muestra la «Ver sábana logística» con los mismos grupos y **Guardar Actualizaciones**. La barra de herramientas ofrece **Generar Excel (.xlsx)** y un cintillo de estadísticas; la lista vacía indica «No hay contenedores para mostrar» y sugiere ajustar filtros o cambiar de puerto.

![Inventario en terminal — panel de filtros](/img/screenshots/logistica/contenedores/inventario-terminal-filtros.png)

*Captura tomada del backoffice Agrimpex: filtros del inventario de equipos en terminal.*

![Inventario en terminal — detalle de la sábana](/img/screenshots/logistica/contenedores/inventario-terminal-detalle.png)

*Captura tomada del backoffice Agrimpex: columnas agrupadas y navegación al BL.*
