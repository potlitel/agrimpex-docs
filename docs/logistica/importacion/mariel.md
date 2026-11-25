---
sidebar_position: 3
source_route: /logistic/import/tc-mariel
source_component: ImportMarielComponent
status: vigente
---

# Importaciones TC Mariel

## Propósito

Presenta las importaciones asociadas a la terminal TC Mariel.

## Acceso

- **Menú:** Logística → Importaciones TC Mariel
- **Ruta directa:** `/logistic/import/tc-mariel`
- **Componente:** `ImportMarielComponent`

## Captura

![mariel — captura real](/img/screenshots/logistica/importacion/mariel.png)

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
| Buscar | Buscar | Administrador, Especialista, Consultor o Logístico | `/logistic/import/tc-mariel` |
| Recargar | Recargar | Administrador, Especialista, Consultor o Logístico | `/logistic/import/tc-mariel` |

## Filtros del listado

Esta vista no es un listado: no ofrece panel **Filtrar**, búsqueda global ni botón **Recargar**. El control de entrada es el selector de fichero `.csv` con la etiqueta «Seleccionar archivo CSV» y el texto «Suelte el archivo aquí o haga clic para buscar»; el campo es obligatorio y muestra «Es obligatorio seleccionar un archivo.» si falta. La ayuda indica que se requiere un CSV con separador `;` y estructura de bloques y que solo se procesan registros cuyo importador sea AGRIMPEX. El nombre admitido sigue el patrón `Contenedores en TC Mariel (DD-MM-YYYY).csv`, ampliado con el formato nuevo «Contenedores en la Terminal [Diario] (DD-MM-YYYY)». Cuando hay configuración de formato se muestran los chips «Formato inicial» y «Formato nuevo», y al seleccionar el fichero se indica cuál se aplicará. «Importar ahora» permanece deshabilitado hasta que el formulario es válido y «Regresar» vuelve a `/logistic/import`. Dentro del panel de auditoría existe un campo «Filtrar productos seleccionados» que filtra por contenedor o estado; no es un filtro de listado.

![Importación Mariel — panel de carga del fichero](/img/screenshots/logistica/importacion/mariel-panel-carga.png)

*Captura tomada del backoffice Agrimpex: selector de fichero y ayuda de la actualización masiva.*

![Importación Mariel — formatos admitidos](/img/screenshots/logistica/importacion/mariel-panel-formatos.png)

*Captura tomada del backoffice Agrimpex: chips de formato inicial y formato nuevo.*

## Columnas y resultados

Tras procesar el fichero, el panel «Panel de Auditoría de Datos» presenta los pasos «Validando nomenclatura del archivo», «Verificando integridad de columnas (Headers)», «Buscando sección de bloque: AGRIMPEX», «Validando productos declarados», «Validando consistencia de datos y formatos» y «Persistiendo datos en el servidor». Cada paso pasa por pendiente, carga, conformidad, advertencia o error; la cabecera alterna «VERIFICANDO» y «PROCESADO» y puede mostrar el badge «CONFORME». El fichero se valida contra 18 columnas —Contenedor, Días, Origen, Días sin DM, Cabotaje, Patio, No Bl, No Manifiesto, Tipo, Longitud, Naviera, Habilitado, Ubicación, Liberado BL House, Fecha Transferencia, Bloqueado, Peso y Liberado BL Master—, con nombres alternativos en el formato nuevo.

La tabla de resultados del paso «Resultados de proceso de importación» muestra tres columnas: **CONTENEDOR**, **ESTADO** y **HABILITADO**. El estado «Sin identificar» se resalta en ámbar y el valor «Si» de habilitado en verde; sin coincidencias aparece «No se encontraron resultados para su búsqueda…». El botón **DESCARGAR LOG** genera un fichero `audit_log_YYYYMMDD_HHmm.log` con el estado final «REVISIÓN REQUERIDA» o «CONFORME». La vista solo muestra el resultado de la importación: no edita los contenedores desde esta tabla.

![Importación Mariel — resultado de la auditoría](/img/screenshots/logistica/importacion/mariel-panel-formatos.png)

*Captura tomada del backoffice Agrimpex: panel donde se muestran los pasos y el resultado de la importación.*
