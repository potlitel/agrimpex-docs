---
sidebar_position: 4
---

# Desaduanaje

## Descripción

El módulo de Desaduanaje permite gestionar todos los trámites y documentación necesaria para el despacho aduanero de las importaciones. Facilita el seguimiento del proceso y mantiene un registro de todos los documentos requeridos.

## Acceso al Módulo

1. Inicia sesión en el sistema
2. En el menú lateral, navega a **Logística** → **Desaduanaje**
3. También puedes acceder directamente desde `/logistic/desaduanes`

## Proceso de Desaduanaje

### Fases del Proceso

| Fase | Descripción |
|------|-------------|
| **1. Recepción de Documentos** | Recepción de BL, factura, lista de empaque |
| **2. Revisión Documental** | Verificación de completitud |
| **3. Declaración Aduanera** | Elaboración de declaración |
| **4. Pago de Aranceles** | Liquidación de impuestos |
| **5. Levante** | Autorización de retiro |
| **6. Retiro de Mercancía** | Extracción del terminal |

## Documentos Requeridos

### Documentos Básicos

| Documento | Descripción |
|-----------|-------------|
| **Bill of Lading (BL)** | Documento de transporte marítimo |
| **Factura Comercial** | Factura del proveedor |
| **Lista de Empaque** | Detalle de mercancía |
| **Packing List** | Peso y dimensiones |
| **Certificado de Origen** | Certificado del país de origen |

### Documentos Específicos

| Documento | Cuando se Requiere |
|-----------|-------------------|
| Certificado fitosanitario | Productos vegetales |
| Certificado sanitario | Productos alimentos |
| Licencia de importación | Productos restringidos |
| Certificación ambiental | Productos controlados |

## Gestionar Desaduanaje

### Paso 1: Crear Expediente

1. Accede al módulo de desaduanaje
2. Haz clic en **"+ Nuevo Expediente"**
3. Selecciona la importación asociada
4. Sistema crea el expediente automáticamente

### Paso 2: Adjuntar Documentos

1. En el expediente, navega a **Documentos**
2. Adjunta cada documento requerido
3. Sistema valida automáticamente completitud

### Paso 3: Seguimiento

1. Actualiza el estado del expediente
2. Registra fechas de presentación
3. Registra fechas de aprobación/pago

## Estados del Expediente

| Estado | Descripción |
|--------|-------------|
| **Pendiente** | Esperando documentos |
| **En Revisión** | Documentos en análisis |
| **En Pago** | Esperando liquidación |
| **Levantado** | Aprobado por aduana |
| **Retirado** | Mercancía extraída |
| **Observado** | Requiere correcciones |

## Errores Comunes

| Error | Solución |
|-------|----------|
| Documentos incompletos | Adjuntar documentos faltantes |
| Discrepancia de valores | Verificar factura y declaración |
| Falta de licencia | Obtener licencia previa |
| Aranceles no pagados | Realizar pago pendiente |

:::warning IMPORTANTE
El sistema no permite avanzar a la siguiente fase si no se han completado los requisitos de la fase actual.
:::

---

**Siguiente**: [Órdenes de Entrega](/docs/logistica/entregas) - Aprende a gestionar las órdenes de entrega.
