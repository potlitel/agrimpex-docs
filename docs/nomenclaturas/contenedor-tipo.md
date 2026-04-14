---
sidebar_position: 7
---

# Tipos de Contenedor 📦

## Descripción

El catálogo de **Tipos de Contenedor** define las diferentes especificaciones y tamaños de contenedores marítimos utilizados en las importaciones. Cada tipo tiene características específicas de capacidad y uso.

## Acceso

- **Menú**: Nomenclaturas → Tipos de Contenedor
- **Ruta directa**: `/management/nomenclatures/container-type`

## User Stories Asociadas

| HU | Nombre | Descripción |
|----|--------|-------------|
| HU-42 | Adicionar Tipo de contenedor | Crear nuevos tipos |
| HU-43 | Editar Tipo de contenedor | Modificar tipos existentes |
| HU-44 | Listar Tipo de contenedor | Ver todos los tipos activos |
| HU-45 | Filtar Tipo de contenedor | Buscar y filtrar tipos |

## Interfaz

### Listado de Tipos de Contenedor

![Listado de Tipos de Contenedor](/img/nomenclaturas/container-type-listado.png)

## Propósito

Este catálogo se utiliza en:
- Registro de contenedores
- Cálculo de capacidad
- Planificación de carga
- Reporting de flete

## Campos

| Campo | Obligatorio | Descripción |
|-------|-------------|-------------|
| Código | Sí | Código de 2 caracteres (ej: GP, HC, RH, OT) |
| Nombre | Sí | Nombre descriptivo (hasta 30 caracteres) |
| Activo | Sí | Toggle (por defecto: Activo) |

## Operaciones CRUD

### HU-42: Adicionar Tipo de contenedor

1. Accede al módulo de Tipos de Contenedor
2. Haz clic en **"+ Adicionar Tipo"**
3. Ingresa el código (2 caracteres alfabéticos)
4. Ingresa el nombre
5. Verifica que esté activo
6. Haz clic en **"Guardar"**

### HU-43: Editar Tipo de contenedor

1. Busca el tipo en la tabla
2. Haz clic en editar
3. Modifica el código o nombre
4. Puedes activar/desactivar
5. Guarda los cambios

### HU-44: Listar Tipo de contenedor

- Muestra todos los tipos activos
- Ordenado alfabéticamente por código

### HU-45: Filtar Tipo de contenedor

| Filtro | Tipo |
|--------|------|
| Código | Búsqueda parcial |
| Nombre | Búsqueda parcial |
| Estado filter | Activo/Inactivo |

---

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

---

## Reglas de Negocio

- El código debe ser único y de 2 caracteres
- El nombre debe ser único (hasta 30 caracteres)
- Se crea con estado Activo por defecto
- Solo tipos Activos aparecen en los listados

---

**Volver a**: [Nomenclaturas - Introducción](/docs/nomenclaturas/intro)
