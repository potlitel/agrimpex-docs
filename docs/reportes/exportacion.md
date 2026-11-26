---
sidebar_position: 8
source_route: /reports/arrived-enabled
source_component: ExportReportsComponent
status: vigente
---

# Exportación de reportes

## Propósito

Genera y exporta las variantes de reportes de arribos, precios, alertas y tendencias.

## Acceso

- **Menú:** Reportes → Exportación de reportes
- **Ruta directa:** `/reports/arrived-enabled`
- **Componente:** `ExportReportsComponent`

> Todas las variantes comparten `ExportReportsComponent`; no se documentan como páginas independientes.

## Captura

![exportacion — captura real](/img/screenshots/reportes/exportacion.png)

*Captura tomada del backoffice Agrimpex.*

## Campos

| Campo | Descripción | Obligatorio |
|-------|-------------|-------------|
| Buscar | Filtro de texto para localizar registros. | No |
| Filtrar | Aplica los filtros seleccionados al listado. | No |
| Tipo de Reporte | Variante de exportación seleccionada. | Sí |
| Desde | Fecha inicial del período. | No |
| Hasta | Fecha final del período. | No |
| Columnas | Columnas incluidas en la exportación. | No |

## Acciones

| Acción | Botón | Rol | Ruta |
|--------|-------|-----|------|
| Generar | Generar | Administrador, Especialista, Calidad, Consultor o Logístico | `/reports/arrived-enabled` |
| Exportar Excel | Exportar Excel | Administrador, Especialista, Calidad, Consultor o Logístico | `/reports/arrived-enabled` |
| Exportar PDF | Exportar PDF | Administrador, Especialista, Calidad, Consultor o Logístico | `/reports/arrived-enabled` |
| Arribos Habilitados | Generar | Administrador, Especialista, Calidad, Consultor o Logístico | `/reports/arrived-enabled` |
| Arribos por Clientes | Generar | Administrador, Especialista, Calidad, Consultor o Logístico | `/reports/arrived-clients` |
| Arribos por Proveedores | Generar | Administrador, Especialista, Calidad, Consultor o Logístico | `/reports/arrived-suppliers` |
| Arribos por Producto | Generar | Administrador, Especialista, Calidad, Consultor o Logístico | `/reports/arrived-product` |
| Arribos por Tipo de Contenedor | Generar | Administrador, Especialista, Calidad, Consultor o Logístico | `/reports/arrived-container-type` |
| Precios por Tipo de Producto | Generar | Administrador, Especialista, Calidad, Consultor o Logístico | `/reports/price-product-type` |
| Precios por Origen | Generar | Administrador, Especialista, Calidad, Consultor o Logístico | `/reports/price-origin` |
| Precios por Proveedor | Generar | Administrador, Especialista, Calidad, Consultor o Logístico | `/reports/price-supplier` |
| Tendencias de Precios | Generar | Administrador, Especialista, Calidad, Consultor o Logístico | `/reports/price-trends` |
| Exportar a Excel precita | Generar | Administrador, Especialista, Calidad, Consultor o Logístico | `/reports/precita` |
| Alerta 24h sin identificación | Generar | Administrador, Especialista, Calidad, Consultor o Logístico | `/reports/alert-24h-no-id` |
| Alerta 24h post arribo | Generar | Administrador, Especialista, Calidad, Consultor o Logístico | `/reports/alert-24h-post-arrival` |
| Productos más importados | Generar | Administrador, Especialista, Calidad, Consultor o Logístico | `/reports/trends-top-products` |
| Tendencias por Origen | Generar | Administrador, Especialista, Calidad, Consultor o Logístico | `/reports/trends-origin` |
| Tendencias por Proveedor | Generar | Administrador, Especialista, Calidad, Consultor o Logístico | `/reports/trends-supplier` |

## Variantes de exportación

Las variantes no son páginas independientes: cada ruta declarada en el enrutador de Reportes carga el mismo `ExportReportsComponent`, que toma la variante del último segmento de la URL. La navegación lateral permite pasar de unas a otras —**Arribos**, **Precios**, **Tendencias** y las alertas— sin cambiar de componente. Todas están disponibles para **Administrador, Especialista, Calidad, Consultor o Logístico** según la ACL del segmento `reports`.

| Familia | Variantes y rutas | Columnas de la tabla | Rango de fechas |
|---------|-------------------|----------------------|-----------------|
| Arribos | Arribos Habilitados (`/reports/arrived-enabled`), por Clientes (`/reports/arrived-clients`), por Proveedores (`/reports/arrived-suppliers`), por Producto (`/reports/arrived-product`) y por Tipo de Contenedor (`/reports/arrived-container-type`) | Dimensión elegida (Fecha de arribo, Cliente, Proveedor, Producto o Tipo de contenedor) y **Cantidad**. | Obligatorio: **Desde** y **Hasta**; si falta alguna o `Desde` es posterior a `Hasta`, el componente muestra un aviso y no genera. |
| Precios | Precios por Tipo de Producto (`/reports/price-product-type`), por Origen (`/reports/price-origin`), por Proveedor (`/reports/price-supplier`) y Tendencias de Precios (`/reports/price-trends`) | Dimensión (Tipo de producto, Origen, Proveedor o Período), **Cantidad de ítems**, **Precio promedio** y **Total** (opcional). | No se exige. |
| Precita | Exportar a Excel precita (`/reports/precita`) | **Contenedor**, **BL**, **No. Manifiesto** (opcional) y **Días**. | No se exige. |
| Alertas | Alerta 24h sin identificación (`/reports/alert-24h-no-id`) y Alerta 24h post arribo (`/reports/alert-24h-post-arrival`) | **Contenedor**, **BL**, **No. Manifiesto** (opcional) y **Días**; en la alerta post arribo también **Horas**. | No se exige. |
| Tendencias | Productos más importados (`/reports/trends-top-products`), Tendencias por Origen (`/reports/trends-origin`) y Tendencias por Proveedor (`/reports/trends-supplier`) | **Posición**, dimensión (Producto, Origen o Proveedor) y valor (**Cantidad importada** o **Cantidad**). | No se exige. |

El botón **Generar** consulta los contenedores y calcula la variante activa; una vez generada aparece **Cancelar** y se habilita **Exportar Excel**, que abre el diálogo **Exportar Reporte**. En ese diálogo se eligen las columnas: los campos marcados como obligatorios (`*`) no se pueden desmarcar y se requieren al menos dos. El formato producido por el componente es Excel (XLSX), con las columnas seleccionadas y un nombre base derivado de la variante; la tabla de acciones publicada registra además **Exportar PDF**, pero en la pantalla vigente el único botón de exportación del componente es **Exportar Excel**. No se garantiza un archivo ni un contenido concreto: las filas y los totales dependen de los datos del entorno.

![Exportación — rango de fechas de arribo en el backoffice Agrimpex](/img/screenshots/reportes/exportacion-rango-fechas.png)

*Captura tomada del backoffice Agrimpex con el panel **Rango de fechas de arribo** de una variante de arribos.*

![Exportación — variantes compartidas en el backoffice Agrimpex](/img/screenshots/reportes/exportacion-variantes.png)

*Captura tomada del backoffice Agrimpex con la variante de arribos habilitados cargada en `ExportReportsComponent`.*

### Arribos Habilitados

Ruta `/reports/arrived-enabled`. Familia **Arribos**: contenedores arribados en el período con estado habilitado. Columnas: **Fecha de arribo** y **Cantidad**, ambas obligatorias en el diálogo de exportación. Exige **Desde** y **Hasta**; si falta alguna fecha o `Desde` es mayor que `Hasta`, se muestra un aviso. El botón **Generar** consulta los datos y, con resultados, se habilita **Exportar Excel**.

![Arribos Habilitados — backoffice Agrimpex](/img/screenshots/reportes/exportacion-variante-arribos-habilitados.png)

*Captura tomada del backoffice Agrimpex con la variante «Arribos Habilitados».*

### Arribos por Clientes

Ruta `/reports/arrived-clients`. Agrupa los arribados por cliente exclusivo del producto. Columnas: **Cliente** y **Cantidad**. Requiere el rango **Desde**/**Hasta** y comparte el panel de fechas, el botón **Generar** y el diálogo de columnas con las demás variantes de arribos.

![Arribos por Clientes — backoffice Agrimpex](/img/screenshots/reportes/exportacion-variante-arribos-clientes.png)

*Captura tomada del backoffice Agrimpex con la variante «Arribos por Clientes».*

### Arribos por Proveedores

Ruta `/reports/arrived-suppliers`. Agrupa los arribados por proveedor del BL. Columnas: **Proveedor** y **Cantidad**, con rango de fechas obligatorio y el mismo flujo de generación y exportación.

![Arribos por Proveedores — backoffice Agrimpex](/img/screenshots/reportes/exportacion-variante-arribos-proveedores.png)

*Captura tomada del backoffice Agrimpex con la variante «Arribos por Proveedores».*

### Arribos por Producto

Ruta `/reports/arrived-product`. Agrupa los arribados por producto. Columnas: **Producto** y **Cantidad**; exige **Desde** y **Hasta** antes de generar.

![Arribos por Producto — backoffice Agrimpex](/img/screenshots/reportes/exportacion-variante-arribos-producto.png)

*Captura tomada del backoffice Agrimpex con la variante «Arribos por Producto».*

### Arribos por Tipo de Contenedor

Ruta `/reports/arrived-container-type`. Agrupa los arribados por tipo de contenedor. Columnas: **Tipo de contenedor** y **Cantidad**, con rango de fechas obligatorio.

![Arribos por Tipo de Contenedor — backoffice Agrimpex](/img/screenshots/reportes/exportacion-variante-arribos-tipo-contenedor.png)

*Captura tomada del backoffice Agrimpex con la variante «Arribos por Tipo de Contenedor».*

### Precios por Tipo de Producto

Ruta `/reports/price-product-type`. Familia **Precios**: precios agrupados por tipo de producto. Columnas: **Tipo de producto**, **Cantidad de ítems**, **Precio promedio** y **Total** (opcional). No pide rango de fechas; **Generar** procesa directamente los datos disponibles.

![Precios por Tipo de Producto — backoffice Agrimpex](/img/screenshots/reportes/exportacion-variante-precios-tipo-producto.png)

*Captura tomada del backoffice Agrimpex con la variante «Precios por Tipo de Producto».*

### Precios por Origen

Ruta `/reports/price-origin`. Agrupa los precios por origen del BL. Columnas: **Origen**, **Cantidad de ítems**, **Precio promedio** y **Total** (opcional), sin rango de fechas.

![Precios por Origen — backoffice Agrimpex](/img/screenshots/reportes/exportacion-variante-precios-origen.png)

*Captura tomada del backoffice Agrimpex con la variante «Precios por Origen».*

### Precios por Proveedor

Ruta `/reports/price-supplier`. Agrupa los precios por proveedor del BL. Columnas: **Proveedor**, **Cantidad de ítems**, **Precio promedio** y **Total** (opcional), sin rango de fechas.

![Precios por Proveedor — backoffice Agrimpex](/img/screenshots/reportes/exportacion-variante-precios-proveedor.png)

*Captura tomada del backoffice Agrimpex con la variante «Precios por Proveedor».*

### Tendencias de Precios

Ruta `/reports/price-trends`. Serie temporal del precio promedio según fecha de arribo. Columnas: **Período**, **Cantidad de ítems**, **Precio promedio** y **Total** (opcional). No exige fechas: la agrupación por período ya viene definida en la configuración de la variante.

![Tendencias de Precios — backoffice Agrimpex](/img/screenshots/reportes/exportacion-variante-precios-tendencias.png)

*Captura tomada del backoffice Agrimpex con la variante «Tendencias de Precios».*

### Exportar a Excel precita

Ruta `/reports/precita`. Familia **Precita**: contenedores en estado Precita o Transferencia. Columnas: **Contenedor**, **BL**, **No. Manifiesto** (opcional) y **Días**. No pide rango de fechas y usa el mismo diálogo de exportación por columnas.

![Exportar a Excel precita — backoffice Agrimpex](/img/screenshots/reportes/exportacion-variante-precita.png)

*Captura tomada del backoffice Agrimpex con la variante «Exportar a Excel precita».*

### Alerta 24h sin identificación

Ruta `/reports/alert-24h-no-id`. Familia **Alertas**: contenedores con un día o más sin identificación aduanal. Columnas: **Contenedor**, **BL**, **No. Manifiesto** (opcional) y **Días sin identificación**. Sin rango de fechas.

![Alerta 24h sin identificación — backoffice Agrimpex](/img/screenshots/reportes/exportacion-variante-alerta-24h-no-id.png)

*Captura tomada del backoffice Agrimpex con la variante «Alerta 24h sin identificación».*

### Alerta 24h post arribo

Ruta `/reports/alert-24h-post-arrival`. Contenedores con 24 horas o más desde su arribo. Columnas: **Contenedor**, **BL**, **No. Manifiesto** (opcional), **Días** y **Horas**; es la única variante de alerta que añade la columna de horas.

![Alerta 24h post arribo — backoffice Agrimpex](/img/screenshots/reportes/exportacion-variante-alerta-24h-post-arribo.png)

*Captura tomada del backoffice Agrimpex con la variante «Alerta 24h post arribo».*

### Productos más importados

Ruta `/reports/trends-top-products`. Familia **Tendencias**: ranking descendente de productos por cantidad importada. Columnas: **Posición**, **Producto** y **Cantidad importada**. Sin rango de fechas.

![Productos más importados — backoffice Agrimpex](/img/screenshots/reportes/exportacion-variante-tendencias-top-productos.png)

*Captura tomada del backoffice Agrimpex con la variante «Productos más importados».*

### Tendencias por Origen

Ruta `/reports/trends-origin`. Ranking descendente de orígenes por cantidad de contenedores. Columnas: **Posición**, **Origen** y **Cantidad**.

![Tendencias por Origen — backoffice Agrimpex](/img/screenshots/reportes/exportacion-variante-tendencias-origen.png)

*Captura tomada del backoffice Agrimpex con la variante «Tendencias por Origen».*

### Tendencias por Proveedor

Ruta `/reports/trends-supplier`. Ranking descendente de proveedores por cantidad de contenedores. Columnas: **Posición**, **Proveedor** y **Cantidad**. Cierra el conjunto de variantes que comparten `ExportReportsComponent`.

![Tendencias por Proveedor — backoffice Agrimpex](/img/screenshots/reportes/exportacion-variante-tendencias-proveedor.png)

*Captura tomada del backoffice Agrimpex con la variante «Tendencias por Proveedor».*
