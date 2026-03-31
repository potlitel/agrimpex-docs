---
sidebar_position: 2
---

# Control de Importaciones

## Descripción

El módulo de Control de Importaciones permite gestionar todo el ciclo de vida de las importaciones, desde su solicitud hasta la entrega final.

## Acceso al Módulo

1. Inicia sesión en el sistema
2. En el menú lateral, navega a **Logística** → **Control de Importaciones**
3. También puedes acceder directamente desde `/logistic/imports-control`

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
| Cliente | Sí | Cliente associated a la importación |
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
   - Certificados erforderidos
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

## Reportes

### Generar Reporte

1. Haz clic en **"Reportes"**
2. Selecciona el tipo de reporte:
   - Estado de importaciones
   - Valor por cliente
   - Tiempos de entrega
3. Define el período de tiempo
4. Haz clic en **"Generar"**
5. Descarga el reporte en PDF o Excel

---

**Siguiente**: [Gestión de Contenedores](/docs/logistica/contenedores) - Aprende a gestionar contenedores.
