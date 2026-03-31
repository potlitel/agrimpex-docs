---
sidebar_position: 3
---

# Gestión de Contenedores

## Descripción

El módulo de contenedores permite gestionar el ciclo de vida de los contenedores desde su salida del proveedor hasta su devolución o retención. Incluye seguimiento en tiempo real, gestión de estados y control de inventario terminal.

## Acceso al Módulo

1. Inicia sesión en el sistema
2. En el menú lateral, navega a **Logística** → **Ciclo de Contenedores**
3. O accede directamente a alguna de las subsecciones:
   - Contenedores en Navegación (`/logistic/navigating-containers`)
   - Inventario Terminal (`/logistic/terminal-inventory`)
   - Extracciones Diarias (`/logistic/daily-extractions`)
   - Ciclo de Devolución (`/logistic/return-cycle`)

## Estados de Contenedor

| Estado | Descripción |
|--------|-------------|
| **En Navegación** | Contenedor en tránsito marítimo |
| **En Puerto** | Contenedor llegado al puerto |
| **En Terminal** | Contenedor en inventario del terminal |
| **En Desaduanaje** | En proceso de despacho aduanero |
| **Retirado** | Contenedor retirado por el cliente |
| **En Depósito** | Contenedor en depósito temporal |
| **Devuelto** | Contenedor devuelto al operador |
| **En Reparación** | Contenedor en mantenimiento |

## Tipos de Contenedor

| Código | Descripción | Capacidad |
|--------|-------------|-----------|
| **HU20** | Contenedor de 20 pies estándar | 33.2 m³ |
| **HU40** | Contenedor de 40 pies estándar | 67.7 m³ |
| **HC40** | Contenedor de 40 pies High Cube | 76.4 m³ |
| **RF** | Contenedor Refrigerado | Temperatura controlada |
| **OT** | Contenedor Open Top | Sin techo |
| **FR** | Contenedor Flat Rack | Carga sobredimensionada |

## Registro de Contenedor

### Paso 1: Agregar Contenedor

1. Navega al módulo de contenedores
2. Haz clic en **"+ Agregar Contenedor"**
3. Completa los datos del contenedor

### Paso 2: Completar Información

| Campo | Obligatorio | Descripción |
|-------|-------------|-------------|
| Número de Contenedor | Sí | Identificador único (11 caracteres) |
| Tipo | Sí | Tipo de contenedor (HU20, HU40, etc.) |
| Operador | Sí | Línea naviera/operador |
| Propietario | No | Empresa dueña del contenedor |
| Estado Físico | Sí | Estado actual del contenedor |
| Fecha de Llegada | Sí | Fecha de ingreso al terminal |

### Paso 3: Asociar a Importación

1. Vincula el contenedor a una importación existente
2. Adjunta el Bill of Lading (BL)
3. Confirma el registro

## Seguimiento en Tiempo Real

### Mapa de Ubicación

1. Accede a **Contenedores en Navegación**
2. Visualiza la posición de cada contenedor en el mapa
3. Consulta ETA (Estimated Time of Arrival)

### Historial de Estados

1. Selecciona un contenedor
2. Ver el historial completo de cambios de estado
3. Consulta fecha, hora y usuario que realizó cada cambio

---

**Siguiente**: [Desaduanaje](/docs/logistica/desaduane) - Aprende sobre el proceso de desaduanaje.
