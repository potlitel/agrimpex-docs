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
