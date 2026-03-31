---
sidebar_position: 6
---

# Estados de Contenedor

## Descripción

El catálogo de **Estados de Contenedor** define los estados físicos y operativos en los que puede encontrarse un contenedor durante su ciclo de vida. Es fundamental para el seguimiento y control del inventario de contenedores.

## Acceso

- **Menú**: Nomenclaturas → Estados de Contenedor
- **Ruta directa**: `/management/nomenclatures/containers-state`

## Interfaz

### Listado de Estados de Contenedor

![Listado de Estados de Contenedor](/img/nomenclaturas/containers-state-listado.png)

## Propósito

Este catálogo se utiliza en:
- Seguimiento de contenedores
- Inventario de terminal
- Control de calidad
- Reporting operativo

## Estados Estándar

| Código | Nombre | Descripción |
|--------|--------|-------------|
| VACÍO | Vacío | Contenedor sin carga |
| LLENO | Lleno | Contenedor con carga |
| DAÑADO | Dañado | Contenedor con daños físicos |
| EN_REPARACIÓN | En Reparación | Contenedor en mantenimiento |
| RETIRADO | Retirado | Retirado de circulación |
| EN_DEPÓSITO | En Depósito | En depósito temporal |

## Campos

| Campo | Tipo | Descripción |
|-------|------|-------------|
| Código | Texto | Identificador único del estado |
| Nombre | Texto | Nombre descriptivo |
| Descripción | Texto | Detalles del estado |
| Categoría | Texto | Categoría (físico, operativo, servicio) |
| Color | Color | Color para visualización en UI |
| Activo | Booleano | Si el estado está disponible |

## Crear Estado de Contenedor

1. Accede al módulo de Estados de Contenedor
2. Haz clic en **"+ Agregar Estado"**
3. Completa los campos:
   - Código identificador
   - Nombre descriptivo
   - Descripción opcional
   - Selecciona la categoría
4. Asigna un color para identificación visual
5. Activa el toggle "Activo"
6. Haz clic en **"Guardar"**

## Eliminar Estado

:::danger ADVERTENCIA
No puedes eliminar un estado que esté asociado a contenedores en el sistema. Debes reasignar los contenedores primero.
:::

---

**Volver a**: [Nomenclaturas - Introducción](/docs/nomenclaturas/intro)
