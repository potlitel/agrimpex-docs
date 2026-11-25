---
sidebar_position: 7
source_route: /logistic/import/recepcion-puerta
source_component: ImportDoorReceiptComponent
status: vigente
---

# Recepción en puerta

## Propósito

Registra y consulta la recepción de contenedores en la puerta de la terminal.

## Acceso

- **Menú:** Logística → Recepción en puerta
- **Ruta directa:** `/logistic/import/recepcion-puerta`
- **Componente:** `ImportDoorReceiptComponent`

## Captura

![recepcion-puerta — captura real](/img/screenshots/logistica/importacion/recepcion-puerta.png)

*Captura tomada del backoffice Agrimpex.*

## Campos

| Campo | Descripción | Obligatorio |
|-------|-------------|-------------|
| Contenedor | Identificador del contenedor. | No |
| No. Orden | Orden de entrega asociada. | No |
| Estado | Estado de recepción. | No |

## Acciones

| Acción | Botón | Rol | Ruta |
|--------|-------|-----|------|
| Buscar | Buscar | Administrador, Especialista, Logístico o Calidad | `/logistic/import/recepcion-puerta` |
| Recargar | Recargar | Administrador, Especialista, Consultor o Logístico | `/logistic/import/recepcion-puerta` |

## Operaciones y estados

`/logistic/import/recepcion-puerta` registra la recepción por puerta de equipos devueltos y concilia los totales de la terminal. No hay altas, ediciones ni borrados: la operación consiste en seleccionar un fichero y pulsar **Importar ahora**; **Regresar** vuelve a `/logistic/import`. El nombre admitido es `Recepcion por Puerta y Totales (DD-MM-YYYY).csv` y, cuando la configuración lo permite, se muestran los chips «Formato inicial» y «Formato nuevo». En el formato nuevo se validan 9 columnas —Contenedor, Tipo, Longitud, Lleno/Vacio, Fecha Entrada, Transportista, Importador, Organismo y Propietario—; en el inicial la comprobación de estructura no se aplica y el panel indica igualmente «Headers verificados (9 columnas)».

El panel de auditoría pasa por la validación del nombre, la localización del bloque de AGRIMPEX, el recuento de contenedores y la transferencia de datos; la cabecera alterna «VERIFICANDO» y «PROCESADO» y el badge «CONFORME» aparece cuando todo es correcto. Los resultados se muestran en la tabla **CONTENEDOR / ESTADO / HABILITADO**, con el estado «Sin identificar» en ámbar, y pueden acompañarse de los pasos «Incidencias encontradas en el proceso» y «Resultados de proceso de importación». **DESCARGAR LOG** exporta el detalle. Tras una importación correcta se actualizan las notificaciones, pero la vista no navega automáticamente; corresponde al usuario volver al dashboard.

![Recepción en puerta — panel de carga](/img/screenshots/logistica/importacion/recepcion-puerta-panel-carga.png)

*Captura tomada del backoffice Agrimpex: selector de fichero y patrón de recepción por puerta.*

![Recepción en puerta — formatos y auditoría](/img/screenshots/logistica/importacion/recepcion-puerta-panel-formatos.png)

*Captura tomada del backoffice Agrimpex: formatos admitidos y pasos de auditoría.*
