---
sidebar_position: 20
source_route: /logistic/extracted-containers
source_component: ExtractedContainersListComponent
status: vigente
---

# Contenedores extraídos

## Propósito

Consulta los contenedores extraídos de terminal y su fecha de salida.

## Acceso

- **Menú:** Logística → Contenedores extraídos
- **Ruta directa:** `/logistic/extracted-containers`
- **Componente:** `ExtractedContainersListComponent`

## Captura

![extraidos — captura real](/img/screenshots/logistica/contenedores/extraidos.png)

*Captura tomada del backoffice Agrimpex.*

## Campos

| Campo | Descripción | Obligatorio |
|-------|-------------|-------------|
| Contenedor | Identificador del contenedor. | No |
| Entrada | Fecha de ingreso. | No |
| Salida | Fecha de extracción. | No |
| Días | Días en terminal. | No |

## Acciones

| Acción | Botón | Rol | Ruta |
|--------|-------|-----|------|
| Buscar | Buscar | Administrador, Especialista, Consultor o Logístico | `/logistic/extracted-containers` |
| Recargar | Recargar | Administrador, Especialista, Consultor o Logístico | `/logistic/extracted-containers` |

## Filtros del listado

`/logistic/extracted-containers` reúne las salidas de Mariel y Santiago —estas últimas con el conmutador de terminal—. El panel **Filtrar** ofrece **Contenedor**, **No. BL**, **Transportista**, **Camión**, **Provincia** y **Tipo de Contenedor**, además de dos campos numéricos **Días (Mín / Máx)** con validación de rango; cuando el máximo es menor que el mínimo no se emiten filtros. La búsqueda, la recarga y **Generar Excel (.xlsx)** completan la barra de herramientas. El rango de fechas no se ofrece como control en esta vista: la fecha de salida se consulta en la columna correspondiente y se edita solo en las filas sintéticas.

![Contenedores extraídos — panel de filtros](/img/screenshots/logistica/contenedores/extraidos-filtros.png)

*Captura tomada del backoffice Agrimpex: filtros de contenedores extraídos.*

## Operaciones y estados

La tabla muestra **Contenedor** —con el badge **Sintética** y el enlace al BL—, **Tipo de Contenedor** y longitud, **Transportista** con camión y conductor, **Cliente**, **Provincia**, **Salida** —con entrada, arribo y fecha de salida—, **Días** —con días extraídos y totales— y **Acciones**. Los valores de días superiores a 15 se resaltan en rojo. El enlace del BL abre `/logistic/shipping-documents/edit/:blId?fromNavigating=false`; en las filas sintéticas, el lápiz abre el formulario de extracción con transportista, camión, provincia y fecha de salida, y **Guardar** confirma «Extracción actualizada correctamente». No hay alta ni borrado en esta pantalla; la exportación a Excel usa un diálogo de selección de campos.

![Contenedores extraídos — acciones y estados](/img/screenshots/logistica/contenedores/extraidos-operaciones.png)

*Captura tomada del backoffice Agrimpex: tabla de extraídos, badges y acciones por fila.*
