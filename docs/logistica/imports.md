---
sidebar_position: 2
---

# Control de Importaciones 📦

## Descripción

El módulo de Control de Importaciones permite gestionar todo el ciclo de vida de las importaciones, desde su solicitud hasta la entrega final. Este módulo integra la recepción de datos desde las Terminales de Contenedores (TC) con el seguimiento interno del sistema.

## Acceso al Módulo

1. Inicia sesión en el sistema
2. En el menú lateral, navega a **Logística** → **Control de Importaciones**
3. También puedes acceder directamente desde `/logistic/imports-control`

---

## Importación de Datos 📥

El sistema permite importar archivos CSV/XLSX diarios generados por las Terminales de Contenedores para mantener actualizado el estado de las importaciones. Esta funcionalidad es fundamental para mantener sincronizada la información entre los sistemas externos y Agrimpex.

### Tipos de Importación

| HU | Nombre | Descripción |
|----|--------|-------------|
| HU-58 | Importar Contenedores en TC Mariel | Parte diario del TC Mariel |
| HU-59 | Importar Contenedores No Devueltos | Contenedores extraídos sin devolver |
| HU-60 | Importar Contenedores Extraídos | Extracciones diarias |
| HU-61 | Importar Recepción por Puerta y Totales | Contenedores devueltos |
| HU-62 | Importar Contenedores en TC Santiago de Cuba | Parte diario del TC SCU |

### Proceso de Importación

#### Paso 1: Preparar Archivo

1. Obtén el parte diario de la terminal correspondiente
2. Verifica que el formato sea CSV o XLSX
3. Confirma que contiene registros de "AGRIMPEX"

#### Paso 2: Seleccionar Tipo de Importación

1. Navega a **Logística** → **Control de Importaciones** → **Importar**
2. Selecciona el tipo de importación sesuai al archivo:
   - **TC Mariel**: HU-58, HU-59, HU-60, HU-61
   - **TC Santiago de Cuba**: HU-62

#### Paso 3: Subir Archivo

1. Haz clic en **"Seleccionar Archivo"**
2. Navega al archivo CSV/XLSX
3. Haz clic en **"Importar"**

#### Paso 4: Verificar Resultados

El sistema muestra:
- Total de registros procesados
- Registros insertados
- Registros actualizados
- Errores encontrados (si los hay)

### Estructura de Archivos de Importación

#### Contenedores en TC Mariel (HU-58)

| Campo | Tipo | Descripción |
|-------|------|-------------|
| Contenedor | String | Número de contenedor (11 caracteres) |
| Días | Integer | Días en puerto |
| Días sin DM | Integer | Días sin Declaración de Mercancías |
| No BL | String | Número de Bill of Lading |
| No Manifiesto | String | Número de manifiesto |
| Tipo | String | Tipo (GP, HC, RH, OT) |
| Longitud | Integer | Longitud (20, 40, 45 pies) |
| Naviera | String | Línea naviera |
| Habilitado | String | Estado (Si, No, DM+30d) |
| Ubicación | String | Ubicación en terminal |
| Liberado BL House | String | BL House liberado (Si/No) |
| Fecha Transferencia | DateTime | Fecha de transferencia |
| Bloqueado | String | Estado de bloqueo |
| Peso | Decimal | Peso del contenedor |
| Liberado BL Master | String | BL Master liberado |

#### Contenedores No Devueltos (HU-59)

| Campo | Tipo | Descripción |
|-------|------|-------------|
| Contenedor | String | Número de contenedor |
| Días en Puerto | Integer | Días en puerto |
| Días Extraido | Integer | Días desde extracción |
| Total Días | Integer | Total de días |
| Fecha Entrada | Date | Fecha de ingreso |
| Fecha de Salida | Date | Fecha de extracción |
| Provincia | String | Provincia de destino |
| Importador | String | Nombre del importador |
| Organismo | String | Organismo gubernamental |
| Manifiesto | String | Número de manifiesto |
| No BL | String | Número de Bill of Lading |
| Transportista | String | Empresa de transporte |
| Camión | String | Placa del camión |
| Longitud | Integer | Longitud |
| Tipo | String | Tipo de contenedor |
| Conductor | String | Nombre del conductor |
| Naviera | String | Línea naviera |
| Dirección | String | Dirección de entrega |

#### Contenedores Extraídos (HU-60)

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

#### Recepción por Puerta (HU-61)

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
| Propietario | String | Línea naviera |

### Reglas de Procesamiento

1. **Filtrado de Importador**: Solo se procesan registros donde el importador sea "AGRIMPEX" o variantes
2. **Lógica UPSERT**:
   - Si el contenedor NO existe → Insertar con estado="Nuevo"
   - Si el contenedor EXISTE → Actualizar campos (días, habilitación, liberación BL)
3. **Transiciones de Estado**:
   - Nuevo → Sin identificar (si Días > 1)
   - Si Habilitado="Si" o "DM+30d" y Liberado BL House="Si" → Habilitado

### Manejo de Errores

| Error | Causa | Solución |
|-------|-------|----------|
| Formato de archivo inválido | Extensión no permitida | Usar CSV o XLSX |
| Sin datos AGRIMPEX | No hay registros del importador | Verificar archivo fuente |
| Error de conexión | Problema con base de datos | Verificar conexión y reintentar |
| Estructura de columnas incorrecta | Archivo no cumple plantilla | Descargar plantilla ejemplo |

---

## Estados de Importación

| Estado | Descripción |
|--------|-------------|
| **Pendiente** | Importación creada, esperando revisión |
| **Aprobada** | Importación aprobada y en proceso |
| **En Tránsito** | Mercancía en camino |
| **En Desaduanaje** | En proceso de trámites aduaneros |
| **Completada** | Importación entregada |
| **Cancelada** | Importación cancelada |

## Crear Nueva Importación

### Paso 1: Iniciar Solicitud

1. Desde el módulo, haz clic en **"+ Nueva Importación"**
2. Se abrirá el formulario de creación

### Paso 2: Completar Datos

| Campo | Obligatorio | Descripción |
|-------|-------------|-------------|
| Número de Referencia | Sí | Identificador único de la importación |
| Cliente | Sí | Cliente asociado a la importación |
| Proveedor | Sí | Proveedor internacional |
| País de Origen | Sí | País de procedencia |
| Fecha de Solicitud | Sí | Fecha de creación |
| Descripción | No | Descripción de la mercancía |
| Valor FOB | No | Valor en origen (FOB) |
| Valor CIF | No | Valor incluyendo seguro y flete |

### Paso 3: Adjuntar Documentos

1. En la sección de documentos, adjunta:
   - Factura comercial
   - Bill of Lading (BL)
   - Lista de empaque
   - Certificados requeridos
2. Haz clic en **"Guardar"**

## Seguimiento de Importación

### Paso 1: Buscar Importación

1. En la barra de búsqueda, ingresa el número de referencia
2. Haz clic en **"Buscar"**

### Paso 2: Ver Detalles

1. Selecciona la importación de los resultados
2. Verás el historial completo de estados
3. Podrás agregar notas y comentarios

## Actualizar Estado

### Paso 1: Cambiar Estado

1. Desde los detalles de la importación, haz clic en **"Cambiar Estado"**
2. Selecciona el nuevo estado
3. Agrega un comentario (opcional)
4. Confirma el cambio

:::warning IMPORTANTE
- Algunos cambios de estado requieren permisos específicos
- El sistema registra todos los cambios para auditoría
:::

---

## Reportes

### Generar Reporte

1. Haz clic en **"Reportes"**
2. Selecciona el tipo de reporte:
   - Estado de importaciones
   - Valor por cliente
   - Tiempos de entrega
   - Contenedores por terminal
3. Define el período de tiempo
4. Haz clic en **"Generar"**
5. Descarga el reporte en PDF o Excel

---

**Siguiente**: [Gestión de Contenedores](/docs/logistica/contenedores) - Aprende a gestionar contenedores.
