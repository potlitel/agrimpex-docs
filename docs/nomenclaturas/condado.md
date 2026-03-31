---
sidebar_position: 5
---

# Condados / Municipios

## Descripción

El catálogo de **Condados** (o municipios) representa el nivel más detallado de división territorial. Se utiliza para especificar ubicaciones precisas de clientes, plantas y operaciones logísticas.

## Acceso

- **Menú**: Nomenclaturas → Condados
- **Ruta directa**: `/management/nomenclatures/county`

## Interfaz

### Listado de Condados

![Listado de Condados](/img/nomenclaturas/county-listado.png)

## Propósito

Este catálogo se utiliza en:
- Dirección exacta de clientes
- Ubicación de plantas
- Puntos de entrega
- Zonas de cobertura

## Relación Jerárquica

```
País → Estados → Condados
```

Cada Condado debe estar asociado a un Estado.

## Campos

| Campo | Tipo | Descripción |
|-------|------|-------------|
| Código | Texto | Código identificador del condado |
| Nombre | Texto | Nombre del municipio o condado |
| Estado | Relación | Estado al que pertenece |
| Tipo | Texto | Tipo (urbano, rural, especial) |
| Activo | Booleano | Si el condado está disponible |

## Crear Condado

1. Accede al módulo de Condados
2. Haz clic en **"+ Agregar Condado"**
3. Completa los campos:
   - Ingresa el código
   - Ingresa el nombre
   - Selecciona el estado padre
   - Selecciona el tipo de zona
4. Activa el toggle "Activo"
5. Haz clic en **"Guardar"**

## Eliminar Condado

:::danger ADVERTENCIA
No puedes eliminar un condado que tenga clientes, plantas u otras entidades asociadas.
:::

## Ejemplo de Jerarquía

| País | Estado | Condado |
|------|--------|--------|
| Cuba | La Habana | Plaza de la Revolución |
| Cuba | La Habana | Centro Habana |
| Cuba | Matanzas | Cárdenas |

---

**Volver a**: [Nomenclaturas - Introducción](/docs/nomenclaturas/intro)
