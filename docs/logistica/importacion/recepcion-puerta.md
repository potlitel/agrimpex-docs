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
