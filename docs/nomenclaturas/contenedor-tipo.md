---
sidebar_position: 7
---

# Tipos de Contenedor

## Descripción

El catálogo de **Tipos de Contenedor** define las diferentes especificaciones y tamaños de contenedores marítimos utilizados en las importaciones. Cada tipo tiene características específicas de capacidad y uso.

## Acceso

- **Menú**: Nomenclaturas → Tipos de Contenedor
- **Ruta directa**: `/management/nomenclatures/container-type`

## Interfaz

### Listado de Tipos de Contenedor

![Listado de Tipos de Contenedor](/img/nomenclaturas/container-type-listado.png)

## Propósito

Este catálogo se utiliza en:
- Registro de contenedores
- Cálculo de capacidad
- Planificación de carga
- Reporting de flete

## Tipos Estándar

| Código | Nombre | Longitud | Capacidad Volumétrica |
|--------|--------|----------|---------------------|
| HU20 | Contenedor 20 pies | 20 pies (6.1m) | 33.2 m³ |
| HU40 | Contenedor 40 pies | 40 pies (12.2m) | 67.7 m³ |
| HC40 | High Cube 40 pies | 40 pies (12.2m) | 76.4 m³ |
| HC45 | High Cube 45 pies | 45 pies (13.7m) | 86.0 m³ |

## Tipos Especiales

| Código | Nombre | Descripción |
|--------|--------|-------------|
| RF | Refrigerado | Temperatura controlada (-25°C a +25°C) |
| OT | Open Top | Sin techo, carga por arriba |
| FR | Flat Rack | Para cargas sobredimensionadas |
| TK | Tank | Para líquidos a granel |
| GM | Garment | Para ropa en perchas |
| BB | Bulk | Para carga a granel |

## Campos

| Campo | Tipo | Descripción |
|-------|------|-------------|
| Código | Texto | Código identificador (HU20, RF, etc.) |
| Nombre | Texto | Nombre descriptivo |
| Descripción | Texto | Detalles del tipo |
| Longitud | Número | Longitud en pies |
| Anchura | Número | Anchura en pies |
| Altura | Número | Altura en pies |
| Capacidad Volumen | Número | Volumen en m³ |
| Capacidad Peso | Número | Peso máximo en kg |
| Es Refrigerado | Booleano | Si requiere temperatura controlada |
| Activo | Booleano | Si está disponible |

## Crear Tipo de Contenedor

1. Accede al módulo de Tipos de Contenedor
2. Haz clic en **"+ Agregar Tipo"**
3. Completa los campos técnicos:
   - Código ISO estándar (recomendado)
   - Nombre descriptivo
   - Dimensiones (largo, ancho, alto)
   - Capacidad en volumen y peso
4. Activa "Es Refrigerado" si aplica
5. Activa el toggle "Activo"
6. Haz clic en **"Guardar"**

---

**Volver a**: [Nomenclaturas - Introducción](/docs/nomenclaturas/intro)
