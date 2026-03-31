---
sidebar_position: 11
---

# Productos

## Descripción

El catálogo de **Productos** contiene el inventario de todos los productos que pueden ser importados a través del sistema. Cada producto tiene características específicas que determinan los requisitos de importación.

## Acceso

- **Menú**: Nomenclaturas → Productos
- **Ruta directa**: `/management/nomenclatures/product`

## Interfaz

### Listado de Productos

![Listado de Productos](/img/nomenclaturas/product-listado.png)

## Propósito

Este catálogo se utiliza en:
- Registro de importaciones
- Clasificación arancelaria
- Control de inventario
- Reporting de importaciones

## Categorías de Productos

| Código | Categoría | Ejemplos |
|--------|-----------|----------|
| ALI | Alimentos | Conservas, especias, bebidas |
| MED | Medicamentos | Fármacos, vacunas |
| ELE | Electrónica | Equipos, componentes |
| TXT | Textiles | Ropa, telas |
| MAQ | Maquinaria | Equipos industriales |
| QUI | Químicos | Insumos, reactivos |
| AGR | Agrícolas | Semillas, fertilizantes |
| COM | Combustibles | Petróleo, gas |

## Campos

| Campo | Tipo | Descripción |
|-------|------|-------------|
| Código | Texto | Identificador único del producto |
| Nombre | Texto | Nombre comercial |
| Descripción | Texto | Descripción detallada |
| Categoría | Relación | Categoría del producto |
| Unidad Medida | Texto | Unidad de comercialización |
| Peso Unitario | Número | Peso por unidad (kg) |
| Volumen Unitario | Número | Volumen por unidad (m³) |
| Partida Arancelaria | Texto | Código arancelario (HS) |
| Requiere Permiso | Booleano | Si requiere permiso especial |
| Tipo Permiso | Relación | Tipo de permiso requerido |
| Activo | Booleano | Si está disponible |

## Información Adicional

| Campo | Tipo | Descripción |
|-------|------|-------------|
| Marca | Texto | Marca comercial |
| Modelo | Texto | Modelo o referencia |
| Origen Preferente | Relación | País de origen preferido |
| Vida Útil | Número | Tiempo de conservación (días) |
| Condiciones Almacenamiento | Texto | Requisitos de almacenaje |

## Crear Producto

1. Accede al módulo de Productos
2. Haz clic in **"+ Agregar Producto"**
3. Completa los datos básicos:
   - Código identificador
   - Nombre comercial
   - Descripción detallada
4. Selecciona la categoría
5. Define la unidad de medida
6. Especifica peso y volumen unitario
7. Ingresa la partida arancelaria (HS)
8. Si requiere permiso:
   - Activa "Requiere Permiso"
   - Selecciona el tipo de permiso
9. Configura condiciones especiales si aplica
10. Activa el toggle "Activo"
11. Haz clic en **"Guardar"**

## Buscar Productos

Usa los filtros para encontrar productos:
- Por código o nombre
- Por categoría
- Por partida arancelaria
- Por estado (activo/inactivo)

---

**Volver a**: [Nomenclaturas - Introducción](/docs/nomenclaturas/intro)
