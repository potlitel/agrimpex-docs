---
sidebar_position: 2
---

# Áreas 🏢

## Descripción

El catálogo de Áreas permite gestionar las áreas geográficas o departamentos utilizados en el sistema para clasificar ubicaciones, plantas y otros elementos geográficos. Es la primera jerarquía en la estructura territorial del sistema.

## Acceso

1. Menú: **Nomenclaturas** → **Áreas**
2. Ruta directa: `/management/nomenclatures/area`

## User Stories Asociadas

| HU | Nombre | Descripción |
|----|--------|-------------|
| HU-18 | Adicionar Área | Crear nuevas áreas |
| HU-19 | Editar Área | Modificar áreas existentes |
| HU-20 | Listar Área | Ver todas las áreas activas |
| HU-21 | Filtar Área | Buscar y filtrar áreas |

## Interfaz

### Listado de Áreas

![Listado de Áreas](/img/nomenclaturas/area-listado.png)

## Campos

| Campo | Obligatorio | Descripción | Validaciones |
|-------|-------------|-------------|--------------|
| Área | Sí | Nombre del área | Solo caracteres alfabéticos, único |
| Activo | Sí | Estado del área | Toggle (por defecto: Activo) |

## Operaciones CRUD

### HU-18: Adicionar Área

1. Accede al módulo de Áreas
2. Haz clic en **"+ Adicionar Área"**
3. Ingresa el nombre del área
4. Verifica que esté activa
5. Guarda el registro

### HU-19: Editar Área

1. Busca el área en la tabla
2. Haz clic en el botón de edición
3. Modifica el nombre del área
4. Puedes activar/desactivar con el toggle
5. Guarda los cambios

### HU-20: Listar Áreas

- Muestra todas las áreas con estado Activo
- Ordenado alfabéticamente por nombre
- Mensaje "No existen áreas activas registradas" si está vacío

### HU-21: Filtar Áreas

| Filtro | Tipo |
|--------|------|
| Área | Búsqueda parcial |
| Estado | Filter: Activo/Inactivo |

---

## Reglas de Negocio

- El nombre del área debe ser único
- Se crea con estado Activo por defecto
- Solo las áreas Activas aparecen en los listados
- No se puede eliminar un área asociada a plantas

:::danger ADVERTENCIA
No puedes eliminar un área que esté asociada a plantas u otros registros.
:::

---

**Volver a**: [Nomenclaturas - Introducción](/docs/nomenclaturas/intro)
