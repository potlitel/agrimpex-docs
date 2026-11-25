---
sidebar_position: 33
source_route: /logistic/reports
source_component: ImportReportsComponent
status: vigente
---

# Reportes de importación

## Propósito

Genera reportes operativos específicos del módulo logístico.

## Acceso

- **Menú:** Logística → Reportes de importación
- **Ruta directa:** `/logistic/reports`
- **Componente:** `ImportReportsComponent`

## Captura

![reportes — captura real](/img/screenshots/logistica/reportes.png)

*Captura tomada del backoffice Agrimpex.*

## Campos

| Campo | Descripción | Obligatorio |
|-------|-------------|-------------|
| Buscar | Filtro de texto para localizar registros. | No |
| Filtrar | Aplica los filtros seleccionados al listado. | No |
| Tipo de Reporte | Reporte logístico a generar. | No |
| Rango de fechas de arribo | Período de consulta. | No |

## Acciones

| Acción | Botón | Rol | Ruta |
|--------|-------|-----|------|
| Generar | Generar | Administrador, Especialista, Consultor o Logístico | `/logistic/reports` |
| Exportar Excel | Exportar Excel | Administrador, Especialista, Consultor o Logístico | `/logistic/reports` |

## Generación y exportación

`/logistic/reports` está disponible para los roles con acceso al módulo —Administrador, Especialista, Consultor o Logístico—; la pantalla no restringe la generación por rol adicional. El panel «Configuración del Reporte» permite elegir el **Tipo de Reporte** entre **Resumen General**, **Conteo por Estado**, **Resumen de Refrigerados (RH)**, **Conteo por Estado (RH)**, **Conteo por Especialistas (RH)**, **Resumen por Especialistas (General)** y **Conteo por Estado por Especialista**. El interruptor **Solo Refrigerados (RH)** se activa automáticamente al elegir un tipo de refrigerados, y el deslizador **Días mínimos** admite de 0 a 60 días. La interfaz no ofrece un control de rango de fechas de arribo: los filtros disponibles son el tipo, el indicador de refrigerados y los días mínimos. La vista previa muestra las tarjetas **Total Contenedores**, **Críticos (>30 días)**, **Refrigerados** y **Promedio Días**, y una tabla con **Contenedor**, **Estado**, **Días mínimos** y **Especialista**.

![Reportes logísticos — configuración del reporte](/img/screenshots/logistica/reportes-configuracion.png)

*Captura tomada del backoffice Agrimpex: selección de tipo, refrigerados y días mínimos.*

**Generar Excel (.xlsx)** produce un libro con una hoja «Reporte Logística» y columnas de contenedor, estado, días y especialista; mientras se genera muestra «Generando reporte...». **Exportar PDF** genera un documento de reporte de logística. Ambos botones registran la exportación y descargan el archivo con un nombre que incluye la marca de tiempo; el contenido depende de los datos disponibles en el momento de la generación, por lo que no se garantiza un archivo ni un resultado concreto.

![Reportes logísticos — acciones de exportación](/img/screenshots/logistica/reportes-exportacion.png)

*Captura tomada del backoffice Agrimpex: vista previa y botones de exportación a Excel y PDF.*

Nota de entorno: en el backoffice local, `/logistic/reports` muestra un error `NG0201` («No provider found for TraceGraphqlRepository») y no renderiza el panel; la captura refleja ese estado observable. La descripción de tipos, controles y exportación se deriva del componente `ImportReportsComponent` y de su plantilla, y no constituye una garantía de que la generación esté operativa en este entorno.
