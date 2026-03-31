---
sidebar_position: 12
---

# Operadores Navieros 🚢

## Descripción

El catálogo de **Operadores** (navieras) contiene información de las compañías de transporte marítimo que operan los contenedores. Es esencial para el seguimiento de rutas, tiempos de tránsito, cálculo de costos y coordinación logística.

## Acceso

- **Menú**: Nomenclaturas → Operadores
- **Ruta directa**: `/management/nomenclatures/operator`

## User Stories Asociadas

| HU | Nombre | Descripción |
|----|--------|-------------|
| HU-30 | Adicionar Operador | Crear nuevos operadores |
| HU-31 | Editar Operador | Modificar operadores existentes |
| HU-32 | Listar Operador | Ver todos los operadores activos |
| HU-33 | Filtar Operador | Buscar y filtrar operadores |

## Interfaz

### Listado de Operadores

![Listado de Operadores](/img/nomenclaturas/operator-listado.png)

## Propósito

Este catálogo se utiliza en:
- Registro de contenedores
- Seguimiento de rutas
- Cálculo de tiempos de tránsito
- Facturación de fletes
- Cálculo de demoras y días libres

## Campos

| Campo | Obligatorio | Descripción |
|-------|-------------|-------------|
| Nombre del operador | Sí | Nombre de la naviera (único) |
| Moneda | Sí | Moneda para cálculos |
| Trámites documentarios | No | Costo de trámites |
| Emisión del BL | No | Costo de emisión de BL |
| Demora devolución - Contenedor seco | No | Costo por día de demora |
| Demora devolución - Contenedor refrigerado | No | Costo por día de demora |
| Días libres - Contenedor seco | No | Días libres incluidos |
| Días libres - Contenedor refrigerado | No | Días libres incluidos |
| Activo | Sí | Toggle (por defecto: Activo) |

## Operaciones CRUD

### HU-30: Adicionar Operador

1. Accede al módulo de Operadores
2. Haz clic en **"+ Adicionar Operador"**
3. Ingresa el nombre del operador
4. Selecciona la moneda
5. Ingresa los costos y días libres (opcional)
6. Verifica que esté activo
7. Haz clic en **"Guardar"**

### HU-31: Editar Operador

1. Busca el operador en la tabla
2. Haz clic en editar
3. Modifica los campos
4. Puedes activar/desactivar
5. Guarda los cambios

### HU-32: Listar Operador

- Muestra todos los operadores activos
- Ordenado alfabéticamente por nombre

### HU-33: Filtar Operador

| Filtro | Tipo |
|--------|------|
| Operador | Búsqueda parcial |
| Moneda | Dropdown |
| Estado filter | Activo/Inactivo |

---

## Principales Navieras

| Código | Nombre | Siglas |
|--------|--------|--------|
| MSC | Mediterranean Shipping Company | MSC |
| CMA | CMA CGM Group | CMA CGM |
| MAE | Maersk Line | MAERSK |
| COS | COSCO Shipping | COSCO |
| OOL | Ocean Network Express | ONE |
| HAP | Hapag-Lloyd | HAPAG |
| YML | Yang Ming Marine | YML |
| EVE | Evergreen Marine | EVERGREEN |

---

## Cálculos de Costos

El catálogo de operadores permite calcular:

| Concepto | Descripción |
|----------|-------------|
| **Trámites documentarios** | Costo por gestión de documentos |
| **Emisión del BL** | Costo por emitir Bill of Lading |
| **Demora contenedor seco** | Costo por día después de vencer días libres |
| **Demora refrigerado** | Costo por día para contenedores reefers |
| **Días libres seco** | Días sin cargo incluidos |
| **Días libres refrigerado** | Días sin cargo incluidos para reefers |

---

## Reglas de Negocio

- El nombre del operador debe ser único
- Se crea con estado Activo por defecto
- Solo operadores Activos aparecen en los listados

---

**Volver a**: [Nomenclaturas - Introducción](/docs/nomenclaturas/intro)
