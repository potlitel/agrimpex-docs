---
sidebar_position: 1
---

# Trazabilidad y Seguridad

## Descripción

El módulo de Trazabilidad (Trace) permite registrar y consultar todas las operaciones realizadas en el sistema. Cada acción de los usuarios queda registrada con información detallada para auditoría y seguridad.

## Acceso al Módulo

1. Inicia sesión en el sistema
2. En el menú lateral, navega a **Seguridad** → **Trazabilidad**
3. También puedes acceder directamente desde `/security/trace`

## Funcionalidades

### Registro de Trazabilidad

El sistema registra automáticamente:

- **Usuario**: Quién realizó la acción
- **Fecha y Hora**: Momento exacto de la operación
- **Módulo**: En qué parte del sistema
- **Acción**: Tipo de operación (crear, editar, eliminar, etc.)
- **Entidad Afectada**: Qué registro fue modificado
- **Datos Anteriores**: Valores antes del cambio
- **Datos Nuevos**: Valores después del cambio
- **Dirección IP**: Desde donde se realizó la acción

### Tipos de Acciones Registradas

| Acción | Descripción |
|--------|-------------|
| CREATE | Creación de nuevo registro |
| UPDATE | Modificación de registro |
| DELETE | Eliminación de registro |
| LOGIN | Inicio de sesión |
| LOGOUT | Cierre de sesión |
| EXPORT | Exportación de datos |
| LOGIN_FAILED | Intento de login fallido |

## Consultar Trazabilidad

### Paso 1: Filtrar Búsqueda

1. Accede al módulo de trazabilidad
2. Usa los filtros disponibles:
   - **Rango de fechas**: Entre dos fechas
   - **Usuario**: Filtrar por usuario específico
   - **Módulo**: Filtrar por parte del sistema
   - **Acción**: Tipo de acción
   - **Buscar**: Texto libre

### Paso 2: Ver Detalles

1. Haz clic en una fila de la tabla
2. Se mostrarán los detalles completos:
   - Datos anteriores (si aplica)
   - Datos nuevos (si aplica)
   - IP del usuario
   - Navegador utilizado

## Exportar Registros

Para exportar los registros de trazabilidad:

1. Configura los filtros deseados
2. Haz clic en **"Exportar"**
3. Selecciona el formato (Excel, CSV, PDF)
4. Descarga el archivo

:::info IMPORTANTE
Los registros de trazabilidad se mantienen por un período mínimo de 1 año. Consultar política de retención de datos.
:::

## Uso para Auditoría

La trazabilidad es fundamental para:

- **Auditorías internas**: Verificar quién hizo qué y cuándo
- **Resolución de incidentes**: Investigar problemas
- **Cumplimiento regulatorio**: Demostrar controles
- **Análisis de comportamiento**: Detectar anomalías

---

**Fin del Manual**: Gracias por utilizar el manual de usuario de Agrimpex. Para soporte adicional, contacta al administrador del sistema.
