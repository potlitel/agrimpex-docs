---
sidebar_position: 14
source_route: /logistic/return-cycle
source_component: CycleReturnListComponent
status: vigente
---

# Ciclo de retorno

## Propósito

Consulta el ciclo de devolución de contenedores y sus demoras.

## Acceso

- **Menú:** Logística → Ciclo de retorno
- **Ruta directa:** `/logistic/return-cycle`
- **Componente:** `CycleReturnListComponent`

## Captura

![retorno — captura real](/img/screenshots/logistica/contenedores/retorno.png)

*Captura tomada del backoffice Agrimpex.*

## Campos

| Campo | Descripción | Obligatorio |
|-------|-------------|-------------|
| Contenedor | Identificador del contenedor. | No |
| Devolución | Fecha de devolución. | No |
| Días | Días transcurridos. | No |

## Acciones

| Acción | Botón | Rol | Ruta |
|--------|-------|-----|------|
| Buscar | Buscar | Administrador, Especialista, Consultor o Logístico | `/logistic/return-cycle` |
| Recargar | Recargar | Administrador, Especialista, Consultor o Logístico | `/logistic/return-cycle` |
