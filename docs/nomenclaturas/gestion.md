---
sidebar_position: 17
---

# Tipos de Gestión

## Descripción

El catálogo de **Tipos de Gestión** define las diferentes modalidades de gestión o administración de las importaciones y procesos logísticos. Clasifica cómo se maneja cada operación dentro del sistema.

## Acceso

- **Menú**: Nomenclaturas → Tipos de Gestión
- **Ruta directa**: `/management/nomenclatures/management-type`

## Interfaz

### Listado de Tipos de Gestión

![Listado de Tipos de Gestión](/img/nomenclaturas/management-type-listado.png)

## Propósito

Este catálogo se utiliza en:
- Clasificación de importaciones
- Determinación de procedimientos
- Reporting operativo
- Control de procesos

## Tipos de Gestión

| Código | Nombre | Descripción |
|--------|--------|-------------|
| PROPIA | Gestión Propia | Importación directa por la empresa |
| TERCERO | Tercerizado | Gestionado por agente aduanero |
| CONSIGNACION | Consignación | Bajo régimen de consignación |
| TRANSITO | Tránsito | En tránsito aduanero |
| DEPOSITO | Depósito | En depósito temporal |

## Descripción Detallada

### Gestión Propia
La empresa realiza directamente todos los trámites de importación, desde la negociación hasta la entrega final.

### Tercerizado
La gestión es realizada por un agente aduanero o empresa第三方 (third-party) especializada.

### Consignación
La mercancía llega consignada y se paga al proveedor según se van realizando las ventas o entregas.

### Tránsito
Mercancía en tránsito aduanero hacia otro destino final (transshipment).

### Depósito
Mercancía almacenada en depósito aduanero esperando trámites o mejores condiciones.

## Campos

| Campo | Tipo | Descripción |
|-------|------|-------------|
| Código | Texto | Identificador único |
| Nombre | Texto | Nombre descriptivo |
| Descripción | Texto | Detalles del tipo de gestión |
| Categoría | Texto | Categoría principal |
| Requiere Garantía | Booleano | Si requiere garantía bancaria |
| Tiempo Máximo | Número | Tiempo máximo en días |
| Coste | Número | Coste estimado |

## Configuración de Proceso

| Campo | Tipo | Descripción |
|-------|------|-------------|
| Documentos Requeridos | Lista | Documentación necesaria |
| Pasos Proceso | Lista | Pasos del workflow |
| Estados Asociados | Lista | Estados posibles |
| Activo | Booleano | Si está disponible |

## Crear Tipo de Gestión

1. Accede al módulo de Tipos de Gestión
2. Haz clic in **"+ Agregar Tipo"**
3. Completa los datos:
   - Código identificador
   - Nombre descriptivo
   - Descripción
   - Categoría
4. Configura el proceso:
   - Tiempo máximo estimado
   - Si requiere garantía
   - Coste estimado
5. Especifica documentos requeridos
6. Define los pasos del proceso
7. Activa el toggle "Activo"
8. Guarda el registro

---

**Volver a**: [Nomenclaturas - Introducción](/docs/nomenclaturas/intro)
