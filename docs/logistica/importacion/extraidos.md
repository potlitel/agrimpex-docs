---
sidebar_position: 6
source_route: /logistic/import/extraidos
source_component: ImportExtractedComponent
status: vigente
---

# Contenedores extraídos

## Propósito

Consulta los contenedores que ya fueron extraídos de la terminal.

## Acceso

- **Menú:** Logística → Contenedores extraídos
- **Ruta directa:** `/logistic/import/extraidos`
- **Componente:** `ImportExtractedComponent`

## Captura

![extraidos — captura real](/img/screenshots/logistica/importacion/extraidos.png)

*Captura tomada del backoffice Agrimpex.*

## Campos

| Campo | Descripción | Obligatorio |
|-------|-------------|-------------|
| Contenedor | Identificador del contenedor. | No |
| Extracción | Fecha de extracción. | No |
| Días extraídos | Días desde la extracción. | No |

## Acciones

| Acción | Botón | Rol | Ruta |
|--------|-------|-----|------|
| Buscar | Buscar | Administrador, Especialista, Consultor o Logístico | `/logistic/import/extraidos` |
| Recargar | Recargar | Administrador, Especialista, Consultor o Logístico | `/logistic/import/extraidos` |

## Filtros del listado

La pantalla no es un listado y carece de panel **Filtrar**, búsqueda global y **Recargar**. El único control es el selector de fichero `.csv` con «Seleccionar archivo CSV» y «Suelte el archivo aquí o haga clic para buscar», obligatorio con el mensaje «Es obligatorio seleccionar un archivo.». La ayuda advierte que el fichero debe incluir la columna «Fecha de Salida» y que solo se importan bloques con datos de AGRIMPEX. El patrón de nombre es `Extracción día calendario (DD-MM-YYYY).csv`, con su variante de formato nuevo y los chips «Formato inicial» y «Formato nuevo» cuando la configuración los habilita. «Importar ahora» requiere un fichero válido y «Regresar» vuelve a `/logistic/import`. El campo «Filtrar productos seleccionados» del panel de auditoría filtra las filas ya procesadas por contenedor o estado.

![Extracción diaria — panel de carga](/img/screenshots/logistica/importacion/extraidos-panel-carga.png)

*Captura tomada del backoffice Agrimpex: selector de fichero y patrón de nombre del parte.*

![Extracción diaria — formatos admitidos](/img/screenshots/logistica/importacion/extraidos-panel-formatos.png)

*Captura tomada del backoffice Agrimpex: chips de formato inicial y formato nuevo.*

## Columnas y resultados

El panel de auditoría valida el nombre del fichero, las 10 columnas esperadas —Contenedor, BL, Tipo, Longitud, Entrada, Salida, Días, Transportista, Camion y Provincia—, la sección de AGRIMPEX, el recuento de contenedores validados y la persistencia en el servidor. Puede incorporar además los pasos «Incidencias encontradas en el proceso» y «Resultados de proceso de importación», con el total de registros procesados correctamente y los errores devueltos por el servidor.

La tabla de resultados se organiza en **CONTENEDOR**, **ESTADO** y **HABILITADO**: el estado «Sin identificar» se marca en ámbar, el habilitado «Si» en verde y, si no hay filas, se muestra el mensaje de búsqueda sin resultados. **DESCARGAR LOG** exporta `audit_log_YYYYMMDD_HHmm.log`; esta vista no permite editar los registros importados.

![Extracción diaria — resultado de la auditoría](/img/screenshots/logistica/importacion/extraidos-panel-formatos.png)

*Captura tomada del backoffice Agrimpex: panel de auditoría con pasos y resultados.*
