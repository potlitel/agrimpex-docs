---
sidebar_position: 12
source_route: /logistic/terminal-inventory
source_component: TerminalInventoryShellComponent
status: vigente
---

# Inventario en terminal

## Propósito

Consulta el inventario de contenedores disponible en la terminal activa.

## Acceso

- **Menú:** Logística → Inventario en terminal
- **Ruta directa:** `/logistic/terminal-inventory`
- **Componente:** `TerminalInventoryShellComponent`

## Captura

![inventario-terminal — captura real](/img/screenshots/logistica/contenedores/inventario-terminal.png)

*Captura tomada del backoffice Agrimpex.*

## Campos

| Campo | Descripción | Obligatorio |
|-------|-------------|-------------|
| Contenedor | Identificador del contenedor. | No |
| Puerto | Terminal donde se encuentra. | No |
| Estado | Estado logístico actual. | No |

## Acciones

| Acción | Botón | Rol | Ruta |
|--------|-------|-----|------|
| Buscar | Buscar | Administrador, Especialista, Consultor o Logístico | `/logistic/terminal-inventory` |
| Recargar | Recargar | Administrador, Especialista, Consultor o Logístico | `/logistic/terminal-inventory` |
