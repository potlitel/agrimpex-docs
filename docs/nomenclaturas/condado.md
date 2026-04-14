---
sidebar_position: 5
---

# Condados / Municipios 🏘️

## Descripción

El catálogo de **Condados** (o municipios) representa el nivel más detallado de división territorial. Se utiliza para especificar ubicaciones precisas de clientes, plantas y operaciones logísticas.

## Acceso

- **Menú**: Nomenclaturas → Condados
- **Ruta directa**: `/management/nomenclatures/county`

## User Stories Asociadas

| HU | Nombre | Descripción |
|----|--------|-------------|
| HU-26 | Adicionar Condado | Crear nuevos condados |
| HU-27 | Editar Condado | Modificar condados existentes |
| HU-28 | Listar Condado | Ver todos los condados activos |
| HU-29 | Filtar Condado | Buscar y filtrar condados |

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

| Campo | Obligatorio | Descripción |
|-------|-------------|-------------|
| Nombre del condado | Sí | Nombre del municipio o condado |
| Estado | Sí | Estado al que pertenece |
| Activo | Sí | Estado (toggle) |

## Operaciones CRUD

### HU-26: Adicionar Condado

1. Accede al módulo de Condados
2. Haz clic en **"+ Adicionar Condado"**
3. Ingresa el nombre del condado
4. Selecciona el estado padre
5. Verifica que esté activo
6. Haz clic en **"Guardar"**

### HU-27: Editar Condado

1. Busca el condado en la tabla
2. Haz clic en editar
3. Modifica el nombre o el estado
4. Puedes activar/desactivar
5. Guarda los cambios

### HU-28: Listar Condado

- Muestra todos los condados activos
- Ordenado alfabéticamente por nombre
- Muestra el estado padre

### HU-29: Filtar Condado

| Filtro | Tipo |
|--------|------|
| Condado | Búsqueda parcial |
| Estado | Dropdown |
| Estado filter | Activo/Inactivo |

---

## Reglas de Negocio

- El nombre del condado debe ser único dentro del estado
- Depende del catálogo de Estados
- Solo condados Activos aparecen en los listados

:::danger ADVERTENCIA
No puedes eliminar un condado que tenga clientes, plantas u otras entidades asociadas.
:::

---

**Volver a**: [Nomenclaturas - Introducción](/docs/nomenclaturas/intro)
