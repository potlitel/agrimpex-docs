---
sidebar_position: 3
---

# Gestión de Contenedores 🚚

## Descripción

El módulo de contenedores permite gestionar el ciclo de vida de los contenedores desde su llegada al terminal hasta su devolución o transferencia. Este módulo se integra con los sistemas de las Terminales de Contenedores (TC) de Mariel y Santiago de Cuba, permitiendo la importación automática de datos diarios y el seguimiento en tiempo real del inventario terminal.

## Acceso al Módulo

1. Inicia sesión en el sistema
2. En el menú lateral, navega a **Logística** → **Gestión de Contenedores**
3. O accede directamente a alguna de las subsecciones desde `/logistic/containers`

## Terminales Soportadas

| Terminal | Código | Ubicación |
|----------|--------|-----------|
| **TC Mariel** | TCM | Terminal de Contenedores del Mariel |
| **TC SCU** | SCU | Terminal de Contenedores Santiago de Cuba |

---

## Importación de Datos 📥

El sistema permite importar archivos CSV/XLSX diarios generados por las Terminales de Contenedores para mantener actualizado el inventario. Esta es una función crítica para mantener sincronizado el estado de los contenedores.

### HU-58: Importar Contenedores en TC Mariel

Esta funcionalidad permite importar el parte diario provenientes del TC Mariel, actualizando el estado de los contenedores en el sistema.

#### Datos de Entrada

El archivo debe contener las siguientes columnas:

| Campo | Tipo | Descripción |
|-------|------|-------------|
| Contenedor | String | Número de contenedor (11 caracteres) |
| Días | Integer | Días en puerto |
| Días sin DM | Integer | Días sin Declaración de Mercancías |
| No BL | String | Número de Bill of Lading |
| No Manifiesto | String | Número de manifiesto |
| Tipo | String | Tipo de contenedor (GP, HC, RH, OT) |
| Longitud | Integer | Longitud (20, 40, 45 pies) |
| Naviera | String | Línea naviera |
| Habilitado | String | Estado de habilitación (Si, No, DM+30d) |
| Ubicación | String | Ubicación en el terminal |
| Liberado BL House | String | BL House liberado (Si/No) |
| Fecha Transferencia | DateTime | Fecha de transferencia |
| Bloqueado | String | Estado de bloqueo |
| Peso | Decimal | Peso del contenedor |
| Liberado BL Master | String | BL Master liberado |

#### Reglas de Procesamiento

1. **Filtrado**: Solo se procesan registros donde el importador sea "AGRIMPEX"
2. **Inserción/Actualización**: Si el contenedor no existe, se crea con estado "Nuevo". Si existe, se actualizan los campos de días, habilitación y liberación BL
3. **Transiciones de Estado**:
   - Si Estado="Nuevo" y Días > 1: Estado="Sin identificar"
   - Si Habilitado="Si" o "DM+30d" y Liberado BL House="Si": Estado="Habilitado"

#### Errores Comunes

| Error | Causa | Solución |
|-------|-------|----------|
| Formato de archivo inválido | Extensión no permitida | Usar CSV o XLSX |
| Sin datos AGRIMPEX | No hay registros del importador | Verificar el archivo fuente |
| Error de conexión | Problema con la base de datos | Verificar conexión y reintentar |

---

### HU-59: Importar Contenedores No Devueltos

Permite importar el parte de contenedores que han sido extraídos por los clientes pero no han sido devueltos al terminal dentro del plazo establecido.

#### Datos de Entrada

| Campo | Tipo | Descripción |
|-------|------|-------------|
| Contenedor | String | Número de contenedor |
| Días en Puerto | Integer | Días que permaneció en puerto |
| Días Extraido | Integer | Días desde la extracción |
| Total Días | Integer | Total de días |
| Fecha Entrada | Date | Fecha de ingreso al terminal |
| Fecha de Salida | Date | Fecha de extracción |
| Provincia | String | Provincia de destino |
| Importador | String | Nombre del importador |
| Organismo | String | Organismo gubernamental |
| Manifiesto | String | Número de manifiesto |
| No BL | String | Número de Bill of Lading |
| Transportista | String | Empresa de transporte |
| Camión | String | Placa del camión |
| Longitud | Integer | Longitud del contenedor |
| Tipo | String | Tipo de contenedor |
| Conductor | String | Nombre del conductor |
| Naviera | String | Línea naviera |
| Dirección | Dirección de entrega |

#### Uso

1. Navega a **Logística** → **Gestión de Contenedores** → **Importar No Devueltos**
2. Selecciona el archivo CSV del parte diario
3. Haz clic en **"Importar"**
4. El sistema procesará los registros y actualizará el seguimiento

---

### HU-60: Importar Contenedores Extraídos

Permite importar los datos de contenedores extraídos diariamente del terminal.

#### Datos de Entrada

| Campo | Tipo | Descripción |
|-------|------|-------------|
| Contenedor | String | Número de contenedor |
| BL | String | Número de Bill of Lading |
| Tipo | String | Tipo de contenedor |
| Longitud | Integer | Longitud |
| Entrada | DateTime | Fecha y hora de ingreso |
| Salida | DateTime | Fecha y hora de extracción |
| Días | Integer | Días en terminal |
| Transportista | String | Empresa de transporte |
| Camión | String | Placa del camión |
| Provincia | String | Provincia de destino |

#### Filtros Virtuales

Tras la importación, puedes filtrar los contenedores extraídos:
- **Extraídos**: Contenedores con fecha_salida registrada
- **No Devueltos**: fecha_salida != NULL AND fecha_devolución == NULL
- **Devueltos**: fecha_devolución != NULL

---

### HU-61: Importar Recepción por Puerta y Totales

Permite importar los datos de contenedores que han sido devueltos al terminal (recepción por puerta).

#### Datos de Entrada

| Campo | Tipo | Descripción |
|-------|------|-------------|
| Contenedor | String | Número de contenedor |
| Tipo | String | Tipo de contenedor |
| Longitud | Integer | Longitud |
| Lleno/Vacio | String | Estado (Lleno/Vacío) |
| Fecha Entrada | DateTime | Fecha de ingreso |
| Transportista | String | Empresa de transporte |
| Importador | String | Importador |
| Organismo | String | Organismo |
| Propietario | String | Dueño del contenedor (línea naviera) |

---

### HU-62: Importar Contenedores en TC Santiago de Cuba

Permite importar el parte diario desde la Terminal de Contenedores de Santiago de Cuba, con el mismo formato que TC Mariel.

#### Diferencias con TC Mariel

- La ubicación del terminal se marca como "SCU"
- Filtro de importador puede incluir variantes de "AGRIMPEX"

---

## Listado de Contenedores 📋

### HU-66: Listar Contenedores en TC Mariel

Muestra todos los contenedores actualmente inventariados en el Terminal de Contenedores del Mariel.

#### Columnas Mostradas

| Columna | Descripción |
|---------|-------------|
| Contenedor | Número de contenedor |
| Días | Días en puerto |
| Días sin DM | Días sin Declaración de Mercancías |
| No BL | Número de Bill of Lading |
| Tipo | Tipo de contenedor |
| Longitud | Longitud en pies |
| Naviera | Línea naviera |
| Habilitado | Estado de habilitación |
| Ubicación | Ubicación en el terminal |
| Liberado BL House | Estado de liberación |

#### Precondiciones

- Solo muestra contenedores donde fecha_salida = NULL (todavía en terminal)

---

### HU-66 (Filtrar): Filtrar Contenedores en TC Mariel

Permite filtrar los contenedores listados por múltiples criterios.

#### Campos de Filtro

| Campo | Tipo de Búsqueda |
|-------|-----------------|
| Contenedor | Parcial, sin distinción de mayúsculas |
| No BL | Parcial, sin distinción de mayúsculas |
| Naviera | Parcial, sin distinción de mayúsculas |
| Tipo | Exacta |
| Longitud | Exacta |
| Habilitado | Exacta |
| Provincia | Parcial |

#### Comportamiento

1. Los filtros son opcionales y se combinan con lógica AND
2. La búsqueda es parcial (contiene) para campos de texto
3. Al aplicar filtros, la tabla se actualiza automáticamente
4. Botón "Limpiar Filtros" para restablecer valores
5. Mensaje "Sin resultados" cuando no hay coincidencias

---

### HU-155: Exportar Contenedores en TC Mariel

Permite exportar los datos de contenedores a un archivo para reportes.

#### Opciones de Exportación

1. **Selección de Columnas**: El usuario puede elegir qué columnas incluir
2. **Campo Obligatorio**: "Contenedor" siempre se incluye
3. **Filtros Aplicados**: Se respectan los filtros actuales de la vista
4. **Formato de Salida**: Excel (.xlsx) o CSV

#### Formato del Reporte

El archivo exportado incluye:
- Encabezado con logo de la empresa
- Fecha de generación
- Nombre del reporte
- Datos de los contenedores seleccionados

---

## Contenedores Extraídos 🔓

### HU-120: Listar Contenedores Extraídos

Muestra los contenedores que han sido extraídos por los clientes del terminal.

#### Estados de Extracción

| Estado | Descripción |
|--------|-------------|
| **Extraídos** | Contenedores con fecha de salida registrada |
| **No Devueltos** | Extraídos y no devueltos en plazo |
| **Devueltos** | Ya devueltos al terminal |

#### Columnas Mostradas

- Contenedor
- BL
- Tipo / Longitud
- Fecha de Entrada
- Fecha de Salida
- Días en Puerto
- Días Extraídos
- Provincia
- Importador

---

### HU-120a: Filtrar Contenedores Extraídos

Permite filtrar los contenedores extraídos por criterios específicos.

#### Campos de Filtro Disponibles

- Contenedor (parcial)
- BL (parcial)
- Provincia (parcial)
- Estado de devolución (Virtual: No Devueltos / Devueltos)
- Rango de fechas (entrada/salida)

---

### HU-120b: Exportar Contenedores Extraídos

Permite exportar los contenedores extraídos para reportes externos.

#### Características

- Aplica los filtros activos
- Permite selección de columnas
- Formato Excel o CSV

---

## Documentos de Embarque 📄

Esta sección permite gestionar los documentos asociados a cada importación: Bill of Lading (BL), Facturas, Packing Lists y documentos digitales.

### HU-83: Adicionar Documentos de Embarque

Funcionalidad principal para registrar y adjuntar documentos de embarque.

#### Componentes

1. **Pestaña BL**: Registro del Bill of Lading
2. **Pestaña Factura-PL**: Registro de facturas y packing lists
3. **Pestaña Documentos Digitales**: Carga de archivos

---

### HU-83a: Adicionar BL

Permite registrar un Bill of Lading y asociar los contenedores correspondientes.

#### Datos del BL

| Campo | Obligatorio | Descripción |
|-------|-------------|-------------|
| Número BL | Sí | Número único del Bill of Lading |
| Naviera | Sí | Línea naviera emitsora |
| Fecha Emisión | Sí | Fecha de emisión |
| Puerto Origen | Sí | Puerto de carga |
| Puerto Destino | Sí | Puerto de destino |
| Contenedores | Sí | Lista de contenedores asociados |
| Mercancía | No | Descripción de mercancía |
| Peso | No | Peso total |
| Volumen | No | Volumen total |

#### Association de Contenedores

1. Ingresa el número de BL
2. El sistema sugiere contenedores con ese BL
3. Selecciona los contenedores a asociar
4. Confirma la asociación

---

### HU-83b: Adicionar Factura-PL

Permite registrar facturas comerciales y packing lists.

#### Datos de Factura

| Campo | Obligatorio | Descripción |
|-------|-------------|-------------|
| Número Factura | Sí | Número de factura del proveedor |
| Fecha | Sí | Fecha de emisión |
| Proveedor | Sí | Proveedor/emisor |
| Cliente | Sí | Cliente receptor |
| Importe | Sí | Valor total |
| Moneda | Sí | Moneda de la factura |

#### Datos del Packing List

| Campo | Obligatorio | Descripción |
|-------|-------------|-------------|
| Número PL | Sí | Número de packing list |
| Bultos | Sí | Cantidad de bultos |
| Peso Bruto | Sí | Peso bruto total |
| Peso Neto | Sí | Peso neto total |
| Volumen | No | Volumen |

#### Cálculo Automático

El sistema permite calcular:
- Importe = Precio × Cantidad
- Peso total por línea de producto

---

### HU-83c: Adicionar Documentos Digitales

Permite cargar documentos digitales (PDF, imágenes) y organizarlos automáticamente.

#### Estructura de Carpetas

```
/Documentos_Embarque/
  /Proveedor_<CodProveedor>_<NombreProveedor>/
    /BL_<NroBL>/
      BL_<NroBL>.pdf
    /Cliente_<CodCliente>_<NombreCliente>/
      F_<NroFactura>.pdf
      PL_<NroFactura>.pdf
```

#### Auto-renombrado

Los archivos se renombran automáticamente al subir:
- BL: `BL_<NroBL>.pdf`
- Factura: `F_<NroFactura>.pdf`
- Packing List: `PL_<NroFactura>.pdf`

---

## Contenedores BL-Endosado / Otra Importadora 🔄

### HU-115: Listar Contenedores Estado = BL-ENDOSADO/OTRA-IMPORTADORA

Muestra los contenedores que han sido transferidos a otros importadores.

#### Casos de Uso

- Contenedores endosados a otro importador
- Transferencias entre importadores
- Cambios de propiedad

#### Columnas Mostradas

- Contenedor
- BL Original
- Nuevo Importador
- Fecha de Transferencia
- Estado
- Provincia

---

### HU-116: Filtrar Contenedores Estado = BL-ENDOSADO/OTRA-IMPORTADORA

Permite filtrar los contenedores transferidos.

#### Filtros Disponibles

- Contenedor (parcial)
- BL (parcial)
- Nuevo Importador (parcial)
- Provincia (parcial)
- Fecha de transferencia (rango)

---

### HU-117: Exportar Contenedores Estado = BL-ENDOSADO/OTRA-IMPORTADORA

Permite exportar los contenedores transferidos.

#### Características

- Respeta filtros activos
- Selección de columnas
- Formato Excel o CSV

---

## Estados de Contenedor 📊

| Estado | Descripción | Transición |
|--------|-------------|-------------|
| **Nuevo** | Contenedor recien importado | → Sin identificar |
| **Sin identificar** | Sin información de desaduanaje | → Navegando |
| **Navegando** | En tránsito marítimo | → En patio |
| **En Patio** | Llegado al puerto | → Parcialmente extraído / Extraído |
| **Parcialmente Extraído** | Algunos bultos extraídos | → Extraído |
| **Extraído** | Todos los bultos extraídos | → BL-ENDOSADO/OTRA-IMPORTADORA |
| **BL-ENDOSADO/OTRA-IMPORTADORA** | Transferido a otro importador | - |
| **Devuelto** | Contenedor retornado al terminal | - |

## Tipos de Contenedor 📦

| Código | Descripción | Capacidad |
|--------|-------------|-----------|
| **GP** | Contenedor de propósito general | Estándar |
| **HC** | High Cube (40 pies alto) | 76.4 m³ |
| **RH** | Contenedor Refrigerado | Temperatura controlada |
| **OT** | Open Top (sin techo) | Carga sobredimensionada |

## Longitudes de Contenedor 📏

| Longitud | Descripción |
|----------|-------------|
| **20 pies** | Estándar pequeño |
| **40 pies** | Estándar grande |
| **45 pies** | High Cube extendido |

---

## Errores Comunes y Soluciones ⚠️

| Error | Causa | Solución |
|-------|-------|----------|
| Contenedor no encontrado | No existe en el sistema | Verificar importación previa |
| BL no asociado | Contenedor sin BL | Registrar BL primero |
| Error de formato CSV | Estructura del archivo incorrecta | Verificar plantilla |
| Sin permisos de importación | Rol sin autorización | Contactar administrador |

:::warning IMPORTANTE
- El sistema filtra automáticamente registros de "AGRIMPEX" durante la importación
- Todos los cambios de estado quedan registrados en la trazabilidad
- Los archivos de importación deben ser del día anterior (parte diario)
:::

---

**Siguiente**: [Desaduanaje](/docs/logistica/desaduane) - Aprende sobre el proceso de desaduanaje.
