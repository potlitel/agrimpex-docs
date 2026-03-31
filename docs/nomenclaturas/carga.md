---
sidebar_position: 9
---

# Tipos de Carga

## Descripción

El catálogo de **Tipos de Carga** clasifica las mercancías según sus características físicas, requisitos de manipulación y condiciones de transporte. Es fundamental para la planificación logística y el cumplimiento normativo.

## Acceso

- **Menú**: Nomenclaturas → Tipos de Carga
- **Ruta directa**: `/management/nomenclatures/loads-type`

## Interfaz

### Listado de Tipos de Carga

![Listado de Tipos de Carga](/img/nomenclaturas/loads-type-listado.png)

## Propósito

Este catálogo se utiliza en:
- Clasificación de importaciones
- Determinación de requisitos de transporte
- Cálculo de tarifas
- Control de seguridad

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

## Clases de Peligro (IMO)

| Clase | Descripción |
|-------|-------------|
| 1 | Explosivos |
| 2 | Gases |
| 3 | Líquidos inflamables |
| 4 | Sólidos inflamables |
| 5 | Oxidantes |
| 6 | Tóxicos |
| 7 | Radioactivos |
| 8 | Corrosivos |
| 9 | Misceláneos |

## Campos

| Campo | Tipo | Descripción |
|-------|------|-------------|
| Código | Texto | Identificador único |
| Nombre | Texto | Nombre descriptivo |
| Descripción | Texto | Detalles de la carga |
| Categoría | Texto | Clasificación principal |
| Requiere Temperatura | Booleano | Si requiere control térmico |
| Temperatura Min | Número | Temperatura mínima (°C) |
| Temperatura Max | Número | Temperatura máxima (°C) |
| Es Peligrosa | Booleano | Si es mercancía peligrosa |
| Clase IMO | Texto | Clase de peligro (si aplica) |
| Activo | Booleano | Si está disponible |

## Crear Tipo de Carga

1. Accede al módulo de Tipos de Carga
2. Haz clic en **"+ Agregar Tipo"**
3. Completa los campos:
   - Código y nombre
   - Descripción
   - Selecciona la categoría
4. Si requiere temperatura:
   - Activa "Requiere Temperatura"
   - Especifica rango (mín/máx)
5. Si es peligrosa:
   - Activa "Es Peligrosa"
   - Especifica clase IMO
6. Guarda el registro

---

**Volver a**: [Nomenclaturas - Introducción](/docs/nomenclaturas/intro)
