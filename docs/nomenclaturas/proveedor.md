---
sidebar_position: 16
---

# Proveedores 🏭

## Descripción

El catálogo de **Proveedores** registra la información de todos los proveedores internacionales de mercancías. Es esencial para la gestión de compras, trazabilidad de origen y control de calidad.

## Acceso

- **Menú**: Nomenclaturas → Proveedores
- **Ruta directa**: `/management/nomenclatures/supplier`

## User Stories Associadas

El catálogo de Proveedores sigue el patrón CRUD estándar.

## Interfaz

### Listado de Proveedores

![Listado de Proveedores](/img/nomenclaturas/supplier-listado.png)

## Propósito

Este catálogo se utiliza en:
- Registro de importaciones
- Órdenes de compra
- Trazabilidad de origen
- Evaluación de proveedores

## Campos

| Campo | Obligatorio | Descripción |
|-------|-------------|-------------|
| No. MINCEX | Sí | Número de identificación MINCEX |
| Nombre de la compañía | Sí | Nombre del proveedor |
| País | Sí | País de origen |

## Datos de Ejemplo

| No. MINCEX | Nombre de la compañía | País |
|------------|----------------------|------|
| 8788999453333 | Will Supply | Alemania |
| 5475566666688 | COMERCIALIZADORA DIEGO | EUA |
| 6455445666666 | NIXIA LATINO TRADING | EUA |
| 5656566777777 | CARIBBEAN LOGISTIC | EUA |
| 8878889989899 | PTG Trading | ITALIA |
| 8889054445555 | AGRENFRUT | FRANCIA |
| 3344567833578 | DALIAN PEREZ | TURKIA |

---

## Tipos de Proveedor

| Código | Tipo | Descripción |
|--------|------|-------------|
| FABRICA | Fabricante | Produce directamente |
| DISTRIBUIDOR | Distribuidor | Revende productos |
| AGENTE | Agente | Representante comercial |
| COMISIONISTA | Comisionista | Intermediario |

---

## Reglas de Negocio

- El número MINCEX debe ser único
- El país es requerido
- Solo proveedores Activos aparecen en los listados

---

**Volver a**: [Nomenclaturas - Introducción](/docs/nomenclaturas/intro)
