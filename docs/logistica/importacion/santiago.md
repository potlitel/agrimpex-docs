---
sidebar_position: 4
source_route: /logistic/import/puerto-santiago
source_component: ImportSantiagoComponent
status: vigente
---

# Importaciones Santiago

## Propósito

Presenta las importaciones asociadas a la terminal de Santiago de Cuba.

## Acceso

- **Menú:** Logística → Importaciones Santiago
- **Ruta directa:** `/logistic/import/puerto-santiago`
- **Componente:** `ImportSantiagoComponent`

## Captura

![santiago — captura real](/img/screenshots/logistica/importacion/santiago.png)

*Captura tomada del backoffice Agrimpex.*

## Campos

| Campo | Descripción | Obligatorio |
|-------|-------------|-------------|
| Contenedor | Identificador del contenedor. | No |
| No. BL | Número de conocimiento de embarque. | No |
| Estado | Estado logístico actual. | No |

## Acciones

| Acción | Botón | Rol | Ruta |
|--------|-------|-----|------|
| Buscar | Buscar | Administrador, Especialista, Consultor o Logístico | `/logistic/import/puerto-santiago` |
| Recargar | Recargar | Administrador, Especialista, Consultor o Logístico | `/logistic/import/puerto-santiago` |

## Filtros del listado

Esta vista no es un listado: no tiene panel **Filtrar**, búsqueda global ni **Recargar**. Su único control es el selector de fichero CSV/XLSX con «Seleccionar archivo CSV» y «Suelte el archivo aquí o haga clic para buscar», obligatorio y validado con «Es obligatorio seleccionar un archivo.». La ayuda exige el form oficial SCU y el patrón de nombre `Parte en TC SCU (dd-mm-aaaa).csv/xlsx`; el proceso usa el endpoint de contenedores SCU. «Importar ahora» se habilita solo con un fichero seleccionado y «Regresar» vuelve a `/logistic/import`. El panel de auditoría incorpora después un campo «Filtrar productos seleccionados» para filtrar por contenedor o estado, que no sustituye a un panel de filtros de tabla.

![Importación Santiago — panel de carga del parte SCU](/img/screenshots/logistica/importacion/santiago-panel-carga.png)

*Captura tomada del backoffice Agrimpex: selector de fichero y patrón de nombre del parte SCU.*

![Importación Santiago — pasos de validación](/img/screenshots/logistica/importacion/santiago-panel-auditoria.png)

*Captura tomada del backoffice Agrimpex: ayuda y pasos de auditoría del proceso.*

## Columnas y resultados

El panel de auditoría de Santiago recorre los pasos de nombre, estructura, identificación de la entidad, productos, consistencia y persistencia. Los mensajes del proceso informan si el nombre debe ser `Parte en TC SCU (dd-mm-aaaa).csv/xlsx`, si el archivo fue aceptado, si la estructura de columnas es válida, si se identificó AGRIMPEX en el manifiesto, si la consistencia quedó verificada y cuántos registros se validaron. Los errores de formato se muestran con los textos de validación del módulo y, si falla el proceso, aparece «Error crítico en el proceso de Santiago.». Al terminar correctamente se actualizan las notificaciones y se vuelve al dashboard de importación.

El resultado se presenta en la tabla del panel con **CONTENEDOR**, **ESTADO** y **HABILITADO**, con el estado «Sin identificar» en ámbar y el habilitado «Si» en verde; si no hay filas se muestra el mensaje de búsqueda sin resultados. El botón **DESCARGAR LOG** exporta el detalle del procesamiento a un fichero `.log`. No hay edición de registros en esta vista.

![Importación Santiago — resultados del proceso](/img/screenshots/logistica/importacion/santiago-panel-auditoria.png)

*Captura tomada del backoffice Agrimpex: panel de auditoría donde se muestran los resultados.*
