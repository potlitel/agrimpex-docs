---
sidebar_position: 16
---

# Proveedores

## Descripción

El catálogo de **Proveedores** registra la información de todos los proveedores internacionales de mercancías. Es esencial para la gestión de compras, trazabilidad de origen y control de calidad.

## Acceso

- **Menú**: Nomenclaturas → Proveedores
- **Ruta directa**: `/management/nomenclatures/supplier`

## Interfaz

### Listado de Proveedores

![Listado de Proveedores](/img/nomenclaturas/supplier-listado.png)

## Propósito

Este catálogo se utiliza en:
- Registro de importaciones
- Órdenes de compra
- Trazabilidad de origen
- Evaluación de proveedores

## Tipos de Proveedor

| Código | Tipo | Descripción |
|--------|------|-------------|
| FABRICA | Fabricante | Produce directamente |
| DISTRIBUIDOR | Distribuidor | Revende productos |
| AGENTE | Agente | Representante comercial |
| COMISIONISTA | Comisionista | Intermediario |

## Campos

### Identificación

| Campo | Tipo | Descripción |
|-------|------|-------------|
| Código | Texto | Identificador único |
| Nombre | Texto | Nombre del proveedor |
| Nombre Local | Texto | Nombre en idioma local |
| País | Relación | País de origen |
| Estado | Relación | Estado/Provincia |
| Condado | Relación | Ciudad/Municipio |

### Información Legal

| Campo | Tipo | Descripción |
|-------|------|-------------|
| RUC / Tax ID | Texto | Identificador fiscal |
| Tipo Identificación | Texto | Tipo de ID fiscal |

### Dirección

| Campo | Tipo | Descripción |
|-------|------|-------------|
| Dirección | Texto | Dirección completa |
| Código Postal | Texto | Código postal |
| Ciudad | Texto | Ciudad |

### Contacto

| Campo | Tipo | Descripción |
|-------|------|-------------|
| Contacto Principal | Texto | Persona de contacto |
| Cargo | Texto | Cargo del contacto |
| Teléfono | Texto | Teléfono |
| Email | Texto | Correo electrónico |
| Web | Texto | Sitio web |

### Información Comercial

| Campo | Tipo | Descripción |
|-------|------|-------------|
| Productos | Lista | Productos que surte |
| Tiempo Entrega | Número | Días de entrega típico |
| Condiciones Pago | Texto | Términos de pago |
| Moneda | Relación | Moneda de transacción |
| Descuento | Número | Descuento estándar (%) |
| Calificación | Texto | Evaluación (A, B, C) |

## Crear Proveedor

1. Accede al módulo de Proveedores
2. Haz clic en **"+ Agregar Proveedor"**
3. Completa identificación:
   - Código y nombre
   - Tipo de proveedor
   - Identificación fiscal
4. Define ubicación:
   - País, estado, condado
   - Dirección completa
5. Agrega información de contacto
6. Configura comercialmente:
   - Productos que surte
   - Condiciones de pago
   - Moneda de transacción
7. Activa el toggle "Activo"
8. Haz clic en **"Guardar"**

## Evaluar Proveedor

:::info NOTA
Mantén actualizada la calificación del proveedor basada en el desempeño: calidad, tiempos de entrega, cumplimiento de especificaciones.
:::

---

**Volver a**: [Nomenclaturas - Introducción](/docs/nomenclaturas/intro)
