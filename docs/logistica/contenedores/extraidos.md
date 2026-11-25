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
