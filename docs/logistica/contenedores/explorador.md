---
sidebar_position: 17
source_route: /logistic/documents/explorer
source_component: ExplorerPageComponent
status: vigente
---

# Explorador de documentos

## Propósito

Explora los expedientes documentales de BL y AWB.

## Acceso

- **Menú:** Logística → Explorador de documentos
- **Ruta directa:** `/logistic/documents/explorer`
- **Componente:** `ExplorerPageComponent`

> Ruta restringida a Administrador, Especialista, Especialista Principal y Gerente Comex.

## Captura

![explorador — captura real](/img/screenshots/logistica/contenedores/explorador.png)

*Captura tomada del backoffice Agrimpex.*

## Campos

| Campo | Descripción | Obligatorio |
|-------|-------------|-------------|
| No. BL | Número de conocimiento de embarque. | No |
| No. Manifiesto | Número de manifiesto. | No |
| Contenedor | Contenedor vinculado. | No |

## Acciones

| Acción | Botón | Rol | Ruta |
|--------|-------|-----|------|
| Buscar | Buscar | Administrador, Especialista, Logístico o Consultor | `/logistic/documents/explorer` |
| Seleccionar | Seleccionar | Administrador, Especialista, Logístico o Consultor | `/logistic/documents/explorer` |
