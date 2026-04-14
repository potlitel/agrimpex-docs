---
sidebar_position: 4
---

# Estados / Provincias 🗺️

## Descripción

El catálogo de **Estados** (también llamados provincias o estados federados) permite gestionar la división territorial de primer nivel dentro de cada país. Se utiliza para especificar ubicaciones más precisas que el país solo.

## Acceso

- **Menú**: Nomenclaturas → Estados
- **Ruta directa**: `/management/nomenclatures/state`

## User Stories Asociadas

| HU | Nombre | Descripción |
|----|--------|-------------|
| HU-46 | Adicionar Estado del país | Crear nuevos estados |
| HU-47 | Editar Estado del país | Modificar estados existentes |
| HU-48 | Listar Estados del país | Ver todos los estados activos |
| HU-49 | Filtar Estados del país | Buscar y filtrar estados |

## Interfaz

### Listado de Estados

![Listado de Estados](/img/nomenclaturas/state-listado.png)

## Propósito

Este catálogo se utiliza en:
- Dirección de plantas y almacenes
- Ubicación de proveedores
- Destino de importaciones
- Reporting geográfico

## Relación Jerárquica

```
País → Estados → Condados
```

Cada Estado debe estar asociado a un País.

## Campos

| Campo | Obligatorio | Descripción |
|-------|-------------|-------------|
| Nombre del estado | Sí | Nombre del estado o provincia |
| País | Sí | País al que pertenece |
| Activo | Sí | Estado (toggle) |

## Operaciones CRUD

### HU-46: Adicionar Estado del país

1. Accede al módulo de Estados
2. Haz clic en **"+ Adicionar Estado"**
3. Ingresa el nombre del estado
4. Selecciona el país de la lista desplegable
5. Verifica que esté activo
6. Haz clic en **"Guardar"**

### HU-47: Editar Estado del país

1. Busca el estado en la tabla
2. Haz clic en editar
3. Modifica los valores
4. Puedes activar/desactivar
5. Guarda los cambios

### HU-48: Listar Estados

- Muestra todos los estados activos
- Ordenado alfabéticamente
- Solo estados con País asociado

### HU-49: Filtar Estados del país

| Filtro | Tipo |
|--------|------|
| Estado | Búsqueda parcial |
| País | Dropdown |
| Estado filter | Activo/Inactivo |

---

## Reglas de Negocio

- El nombre del estado debe ser único dentro del país
- Depende del catálogo de Países
- Solo estados Activos aparecen en los listados

:::danger ADVERTENCIA
No puedes eliminar un estado que tenga condados asociados. Primero debes eliminar o reasignar los condados.
:::

---

**Volver a**: [Nomenclaturas - Introducción](/docs/nomenclaturas/intro)
