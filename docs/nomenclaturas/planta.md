---
sidebar_position: 13
---

# Plantas 🏭

## Descripción

El catálogo de **Plantas** registra las instalaciones industriales, almacenes, depósitos y centros de almacenamiento utilizados en el proceso de importación. Cada planta tiene capacidades y características específicas.

## Acceso

- **Menú**: Nomenclaturas → Plantas
- **Ruta directa**: `/management/nomenclatures/plant`

## User Stories Asociadas

| HU | Nombre | Descripción |
|----|--------|-------------|
| HU-22 | Adicionar Planta | Crear nuevas plantas |
| HU-23 | Editar Planta | Modificar plantas existentes |
| HU-24 | Listar Planta | Ver todas las plantas activas |
| HU-25 | Filtar Planta | Buscar y filtrar plantas |

## Interfaz

### Listado de Plantas

![Listado de Plantas](/img/nomenclaturas/plant-listado.png)

## Propósito

Este catálogo se utiliza en:
- Asignación de destinos de entrega
- Control de capacidad
- Planificación de almacenamiento
- Reporting operativo

## Campos

| Campo | Obligatorio | Descripción |
|-------|-------------|-------------|
| Código | No | Código de 8 caracteres alfanuméricos |
| Nombre | Sí | Nombre de la instalación (30 caracteres) |
| Productos asociados | Sí | Productos que procesa (mínimo 1) |
| Dirección | Sí | Dirección completa |
| País | Sí | País donde se ubica |
| Estado | Sí | Estado/provincia (dependiente del país) |
| Condado | No | Municipio |
| Activo | Sí | Toggle (por defecto: Activo) |

## Operaciones CRUD

### HU-22: Adicionar Planta

1. Accede al módulo de Plantas
2. Haz clic en **"+ Adicionar Planta"**
3. Ingresa el código (opcional)
4. Ingresa el nombre
5. Selecciona los productos asociados (mínimo 1)
6. Ingresa la dirección
7. Selecciona el país
8. Selecciona el estado (se filtra por país)
9. Selecciona el condado (opcional)
10. Verifica que esté activa
11. Haz clic en **"Guardar"**

### HU-23: Editar Planta

1. Busca la planta en la tabla
2. Haz clic en editar
3. Modifica los campos
4. Puedes activar/desactivar
5. Guarda los cambios

### HU-24: Listar Planta

- Muestra todas las plantas activas
- Ordenado alfabéticamente por nombre
- Muestra: Nombre, Código, Productos, País, Estado, Condado

### HU-25: Filtar Planta

| Filtro | Tipo |
|--------|------|
| Código | Búsqueda parcial |
| Nombre | Búsqueda partial |
| Producto | Dropdown |
| País | Dropdown |
| Condado | Dropdown |
| Estado | Dropdown |

---

## Tipos de Instalaciones

| Código | Tipo | Descripción |
|--------|------|-------------|
| ALM | Almacén | Depósito general |
| DEP | Depósito | Depósito aduanero |
| PLA | Planta | Planta procesadora |
| TER | Terminal | Terminal de contenedores |
| FRÍO | Refrigerado | Almacén refrigerado |
| ZFR | Zona Franca | Zona franca industrial |

---

## Reglas de Negocio

- El nombre de la planta debe ser único
- El código es opcional (8 caracteres alfanuméricos)
- Se requiere seleccionar al menos un producto
- El estado depende del país seleccionado (dropdown dependent)
- Se crea con estado Activo por defecto

:::danger ADVERTENCIA
No puedes eliminar una planta que tenga registros asociados.
:::

---

**Volver a**: [Nomenclaturas - Introducción](/docs/nomenclaturas/intro)
