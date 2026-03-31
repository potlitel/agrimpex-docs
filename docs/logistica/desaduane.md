---
sidebar_position: 4
---

# Desaduanaje 🏛️

## Descripción

El módulo de Desaduanaje permite gestionar todos los trámites y documentación necesaria para el despacho aduanero de las importaciones. Facilita el seguimiento del proceso, desde la recepción de documentos hasta el levante de la mercancía. Este módulo se integra estrechamente con la Gestión de Contenedores para mantener trazabilidad completa.

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

---

## Documentos de Embarque 📄

El sistema permite gestionar los documentos asociados a cada importación. Esta funcionalidad es crítica para el proceso de desaduanaje.

### Bill of Lading (BL)

El Bill of Lading es el documento principal de transporte marítimo.

#### HU-83a: Adicionar BL

Permite registrar un Bill of Lading y asociar los contenedores correspondientes.

##### Datos del BL

| Campo | Obligatorio | Descripción |
|-------|-------------|-------------|
| Número BL | Sí | Número único del Bill of Lading |
| Naviera | Sí | Línea naviera emitente |
| Fecha Emisión | Sí | Fecha de emisión |
| Puerto Origen | Sí | Puerto de carga |
| Puerto Destino | Sí | Puerto de destino |
| Contenedores | Sí | Lista de contenedores asociados |
| Mercancía | No | Descripción de mercancía |
| Peso | No | Peso total |
| Volumen | No | Volumen total |

##### Asociación de Contenedores

1. Ingresa el número de BL
2. El sistema sugiere contenedores relacionados
3. Selecciona los contenedores a asociar
4. Confirma la asociación

:::info NOTA
El BL debe estar registrado antes de poder procesar el desaduanaje de los contenedores asociados.
:::

---

### Factura y Packing List

#### HU-83b: Adicionar Factura-PL

Permite registrar facturas comerciales y packing lists del proveedor.

##### Datos de Factura

| Campo | Obligatorio | Descripción |
|-------|-------------|-------------|
| Número Factura | Sí | Número de factura del proveedor |
| Fecha | Sí | Fecha de emisión |
| Proveedor | Sí | Proveedor/emisor |
| Cliente | Sí | Cliente receptor |
| Importe | Sí | Valor total |
| Moneda | Sí | Moneda de la factura |

##### Datos del Packing List

| Campo | Obligatorio | Descripción |
|-------|-------------|-------------|
| Número PL | Sí | Número de packing list |
| Bultos | Sí | Cantidad de bultos |
| Peso Bruto | Sí | Peso bruto total |
| Peso Neto | Sí | Peso neto total |
| Volumen | No | Volumen |

##### Cálculo Automático

El sistema calcula automáticamente:
- **Importe = Precio × Cantidad** por línea de producto
- Sumatorias de peso y volumen

---

### Documentos Digitales

#### HU-83c: Adicionar Documentos Digitales

Permite cargar documentos digitales (PDF, imágenes) y organizarlos automáticamente en una estructura de carpetas predefinida.

##### Estructura de Carpetas

```
/Documentos_Embarque/
  /Proveedor_<CodProveedor>_<NombreProveedor>/
    /BL_<NroBL>/
      BL_<NroBL>.pdf
    /Cliente_<CodCliente>_<NombreCliente>/
      F_<NroFactura>.pdf
      PL_<NroFactura>.pdf
```

##### Auto-renombrado

Los archivos se renombran automáticamente al subir:
- Bill of Lading: `BL_<NroBL>.pdf`
- Factura: `F_<NroFactura>.pdf`
- Packing List: `PL_<NroFactura>.pdf`
- Documentos adicionales: `<Tipo>_<NroDocumento>_<Fecha>.pdf`

---

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

## Relación con Contenedores

El proceso de desaduanaje está directamente relacionado con el estado de los contenedores:

| Estado Contenedor | Relación con Desaduanaje |
|-------------------|-------------------------|
| Nuevo | Sin información DM |
| Sin identificar | Esperando documentación |
| Habilitado | Listo para desaduanar |
| En Desaduanaje | Proceso activo |
| Extraído | Despachado |

### Actualización de Estado

Cuando el desaduanaje avanza, el estado del contenedor se actualiza automáticamente:
- Al registrar la Declaración de Mercancías (DM): Estado → "En Desaduanaje"
- Al obtener levante: Estado → "Habilitado"
- Al extraer: Estado → "Parcialmente extraído" o "Extraído"

## Errores Comunes

| Error | Solución |
|-------|----------|
| Documentos incompletos | Adjuntar documentos faltantes |
| Discrepancia de valores | Verificar factura y declaración |
| Falta de licencia | Obtener licencia previa |
| Aranceles no pagados | Realizar pago pendiente |
| BL no registrado | Registrar BL primero |
| Contenedor no asociado | Asociar contenedor al BL |

:::warning IMPORTANTE
- El sistema no permite avanzar a la siguiente fase si no se han completado los requisitos de la fase actual
- Todos los cambios quedan registrados en la trazabilidad
- Los documentos digitales deben ser cargados en formato PDF o imagen
:::

---

**Siguiente**: [Órdenes de Entrega](/docs/logistica/entregas) - Aprende a gestionar las órdenes de entrega.
