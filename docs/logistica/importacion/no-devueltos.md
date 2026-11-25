---
sidebar_position: 5
source_route: /logistic/import/no-devueltos
source_component: ImportNotReturnedComponent
status: vigente
---

# Contenedores no devueltos

## Propósito

Lista los contenedores que aún no han completado su ciclo de devolución.

## Acceso

- **Menú:** Logística → Contenedores no devueltos
- **Ruta directa:** `/logistic/import/no-devueltos`
- **Componente:** `ImportNotReturnedComponent`

## Captura

![no-devueltos — captura real](/img/screenshots/logistica/importacion/no-devueltos.png)

*Captura tomada del backoffice Agrimpex.*

## Campos

| Campo | Descripción | Obligatorio |
|-------|-------------|-------------|
| Contenedor | Identificador del contenedor. | No |
| Devolución | Estado de la devolución. | No |
| Días | Días transcurridos. | No |

## Acciones

| Acción | Botón | Rol | Ruta |
|--------|-------|-----|------|
| Buscar | Buscar | Administrador, Especialista, Consultor o Logístico | `/logistic/import/no-devueltos` |
| Recargar | Recargar | Administrador, Especialista, Consultor o Logístico | `/logistic/import/no-devueltos` |

## Filtros del listado

La vista no es un listado y, por tanto, no muestra panel **Filtrar**, búsqueda global ni **Recargar**. El control disponible es el selector de fichero `.csv` con «Seleccionar archivo CSV» y «Suelte el archivo aquí o haga clic para buscar», de obligatoriedad validada con «Es obligatorio seleccionar un archivo.». La ayuda indica que el fichero debe incluir los 18 campos requeridos y que se validará la existencia previa del BL y del contenedor. El patrón admitido es `Contenedores no Devueltos (DD-MM-YYYY).csv`, con variante de formato nuevo; los chips «Formato inicial» y «Formato nuevo» aparecen cuando hay configuración. «Importar ahora» Permanece deshabilitado hasta seleccionar un fichero válido y «Regresar» vuelve a `/logistic/import`. El filtro interno «Filtrar productos seleccionados» del panel de auditoría actúa solo sobre las filas ya procesadas.

![Contenedores no devueltos — panel de carga](/img/screenshots/logistica/importacion/no-devueltos-panel-carga.png)

*Captura tomada del backoffice Agrimpex: selector de fichero y ayuda de la importación.*

![Contenedores no devueltos — formatos admitidos](/img/screenshots/logistica/importacion/no-devueltos-panel-formatos.png)

*Captura tomada del backoffice Agrimpex: chips de formato y patrón de nombre.*

## Columnas y resultados

El panel de auditoría describe la validación del nombre del fichero, la integridad de 18 columnas, la estructura correcta, el recuento de registros y la transferencia de datos. Las columnas esperadas son Contenedor, Días en Puerto, Días Extraído, Total Días, Fecha Entrada, Fecha Salida, Provincia, Importador, Organismo, Manifiesto, No Bl, Transportista, Camión, Longitud, Tipo, Conductor, Naviera y Dirección; en el formato nuevo algunos nombres cambian a «Fecha de Salida» y «No. BL». La vista puede añadir los pasos «Incidencias encontradas en el proceso», «Resultados de proceso de importación» y «Registros filtrados por fecha», este último con el detalle de los contenedores excluidos por fecha y el mensaje de cuántos registros se filtraron.

La tabla de resultados muestra **CONTENEDOR**, **ESTADO** y **HABILITADO**, con el estado «Sin identificar» en ámbar y «Si» en verde; las incidencias se listan con el contenedor y el error observado. **DESCARGAR LOG** guarda el detalle en `audit_log_YYYYMMDD_HHmm.log`. Solo se informa del resultado: no se editan contenedores desde esta pantalla.

![Contenedores no devueltos — resultado de la auditoría](/img/screenshots/logistica/importacion/no-devueltos-panel-formatos.png)

*Captura tomada del backoffice Agrimpex: panel de auditoría con pasos y resultados.*
