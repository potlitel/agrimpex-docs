---
sidebar_position: 9
---

# Tipos de Carga 📋

## Descripción

El catálogo de **Tipos de Carga** clasifica las mercancías según sus características físicas, requisitos de manipulación y condiciones de transporte. Es fundamental para la planificación logística y el cumplimiento normativo.

## Acceso

- **Menú**: Nomenclaturas → Tipos de Carga
- **Ruta directa**: `/management/nomenclatures/loads-type`

## User Stories Asociadas

| HU | Nombre | Descripción |
|----|--------|-------------|
| HU-34 | Adicionar Tipo de carga | Crear nuevos tipos |
| HU-35 | Editar Tipo de carga | Modificar tipos existentes |
| HU-36 | Listar Tipo de carga | Ver todos los tipos activos |
| HU-37 | Filtar Tipo de carga | Buscar y filtrar tipos |

## Interfaz

### Listado de Tipos de Carga

![Listado de Tipos de Carga](/img/nomenclaturas/loads-type-listado.png)

## Propósito

Este catálogo se utiliza en:
- Clasificación de importaciones
- Determinación de requisitos de transporte
- Cálculo de tarifas
- Control de seguridad

## Campos

| Campo | Obligatorio | Descripción |
|-------|-------------|-------------|
| Tipo de carga | Sí | Nombre del tipo (solo alfabético) |
| Activo | Sí | Toggle (por defecto: Activo) |

## Operaciones CRUD

### HU-34: Adicionar Tipo de carga

1. Accede al módulo de Tipos de Carga
2. Haz clic en **"+ Adicionar Tipo"**
3. Ingresa el nombre del tipo de carga
4. Verifica que esté activo
5. Haz clic en **"Guardar"**

### HU-35: Editar Tipo de carga

1. Busca el tipo en la tabla
2. Haz clic en editar
3. Modifica el nombre
4. Puedes activar/desactivar
5. Guarda los cambios

### HU-36: Listar Tipo de carga

- Muestra todos los tipos activos
- Ordenado alfabéticamente

### HU-37: Filtar Tipo de carga

| Filtro | Tipo |
|--------|------|
| Tipo de carga | Búsqueda parcial |
| Estado filter | Activo/Inactivo |

---

## Categorías de Carga

### Por Naturaleza

| Código | Nombre | Descripción |
|--------|--------|-------------|
| GEN | General | Carga seca estándar |
| REF | Refrigerada | Requiere temperatura controlada |
| PEL | Peligrosa | Materiales peligrosos (IMO) |
| ESP | Especial | Carga sobredimensionada |

### Por Embalaje

| Código | Nombre | Descripción |
|--------|--------|-------------|
| BUL | Bulk | A granel |
| PAL | Paletizada | En pallets estándar |
| CON | Contenerizada | En contenedores |
| RORO | Roll-on/Roll-off | Vehículos |

### Por Manipulación

| Código | Nombre | Descripción |
|--------|--------|-------------|
| LIQ | Líquida | Tank containers |
| SOL | Sólida | Granos, minerales |
| PIE | Piezas | Carga unitaria |

---

## Reglas de Negocio

- El nombre del tipo de carga debe ser único
- Solo caracteres alfabéticos
- Se crea con estado Activo por defecto

---

**Volver a**: [Nomenclaturas - Introducción](/docs/nomenclaturas/intro)
