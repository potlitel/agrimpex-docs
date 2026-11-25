---
sidebar_position: 1
source_route: /logistic
source_component: LogisticPage
status: vigente
---

# Logística

## Propósito

Panel principal del módulo logístico y acceso a sus procesos; los permisos y preliberaciones se consultan en Calidad.

## Acceso

- **Menú:** Logística → Logística
- **Ruta directa:** `/logistic`
- **Componente:** `LogisticPage`

## Captura

![index — captura real](/img/screenshots/logistica/index.png)

*Captura tomada del backoffice Agrimpex.*

## Campos

| Campo | Descripción | Obligatorio |
|-------|-------------|-------------|
| Puerto | Terminal activa seleccionada. | No |
| Contenedor | Referencia del contenedor. | No |

## Acciones

| Acción | Botón | Rol | Ruta |
|--------|-------|-----|------|
| Ir al dashboard | Acceder | Administrador, Especialista, Consultor o Logístico | `/logistic/import` |
| Ir a Calidad | Acceder | Administrador, Especialista, Consultor o Logístico | `/docs/calidad` |
