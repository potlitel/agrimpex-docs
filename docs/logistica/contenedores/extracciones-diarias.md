---
sidebar_position: 19
source_route: /logistic/daily-extractions
source_component: DailyExtractionListComponent
status: vigente
---

# Extracciones diarias

## Propósito

Consulta las extracciones registradas en el ciclo diario.

## Acceso

- **Menú:** Logística → Extracciones diarias
- **Ruta directa:** `/logistic/daily-extractions`
- **Componente:** `DailyExtractionListComponent`

## Captura

![extracciones-diarias — captura real](/img/screenshots/logistica/contenedores/extracciones-diarias.png)

*Captura tomada del backoffice Agrimpex.*

## Campos

| Campo | Descripción | Obligatorio |
|-------|-------------|-------------|
| Contenedor | Identificador del contenedor. | No |
| Extracción | Fecha de extracción. | No |
| Estado | Estado del registro. | No |

## Acciones

| Acción | Botón | Rol | Ruta |
|--------|-------|-----|------|
| Buscar | Buscar | Administrador, Especialista, Consultor o Logístico | `/logistic/daily-extractions` |
| Recargar | Recargar | Administrador, Especialista, Consultor o Logístico | `/logistic/daily-extractions` |
