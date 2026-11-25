---
sidebar_position: 5
source_route: /logistic/import/no-devueltos
source_component: ImportNotReturnedComponent
status: vigente
---

# Contenedores no devueltos

## Propósito

Lista los contenedores que aún no han completado su ciclo de devolución.

## Acceso

- **Menú:** Logística → Contenedores no devueltos
- **Ruta directa:** `/logistic/import/no-devueltos`
- **Componente:** `ImportNotReturnedComponent`

## Captura

![no-devueltos — captura real](/img/screenshots/logistica/importacion/no-devueltos.png)

*Captura tomada del backoffice Agrimpex.*

## Campos

| Campo | Descripción | Obligatorio |
|-------|-------------|-------------|
| Contenedor | Identificador del contenedor. | No |
| Devolución | Estado de la devolución. | No |
| Días | Días transcurridos. | No |

## Acciones

| Acción | Botón | Rol | Ruta |
|--------|-------|-----|------|
| Buscar | Buscar | Administrador, Especialista, Consultor o Logístico | `/logistic/import/no-devueltos` |
| Recargar | Recargar | Administrador, Especialista, Consultor o Logístico | `/logistic/import/no-devueltos` |
