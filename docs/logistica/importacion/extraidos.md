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
