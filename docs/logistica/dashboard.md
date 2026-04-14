---
sidebar_position: 1
---

# Dashboard de Importaciones 📊

## Descripción

El Dashboard es la pantalla principal que se muestra después de iniciar sesión. Proporciona una visión general del estado de las importaciones y métricas clave del sistema. Muestra información en tiempo real del inventario de contenedores en las Terminales de Contenedores (TC) y el estado del proceso de importación.

## Acceso

1. Inicia sesión en el sistema
2. Serás redirigido automáticamente al Dashboard
3. También puedes acceder desde el menú: **Dashboard** o `/dashboard`

## Componentes del Dashboard

### Métricas Principales

El dashboard muestra tarjetas con información clave:

| Métrica | Descripción |
|---------|-------------|
| **Importaciones Activas** | Número de importaciones en proceso |
| **Contenedores en Terminal** | Contenedores actualmente en TC Mariel / TC SCU |
| **Contenedores Extraídos** | Contenedores retirados por clientes |
| **Pendientes de Desaduanaje** | Contenedores esperando trámites aduaneros |
| **No Devueltos** | Contenedores extraídos sin devolución |
| **Entregas Realizadas** | Entregas completadas en el período |

### Gráficos y Visualizaciones

- **Gráfico de importaciones por estado**: Muestra la distribución de importaciones por su estado actual
- **Gráfico de contenedores por terminal**: Distribución entre TC Mariel y TC SCU
- **Línea de tiempo**: Evolución de las importaciones en los últimos meses
- **Mapa de ubicación**: Localización actual de contenedores

### Tabla de Actividad Reciente

Muestra las últimas operaciones realizadas en el sistema:

- Fecha y hora de la operación
- Usuario que realizó la operación
- Tipo de operación
- Estado anterior y nuevo

### Inventario de Terminales

Panel que muestra el resumen de contenedores por terminal:

| Terminal | Contenedores | Estado |
|----------|--------------|--------|
| TC Mariel | Total en inventario | Activo |
| TC SCU | Total en inventario | Activo |

## Uso del Dashboard

### Filtrar Información

1. Usa los filtros de fecha para especificar el período
2. Selecciona el tipo de importación a visualizar
3. Aplica filtros por estado o región
4. Filtra por terminal (Mariel / Santiago de Cuba)

### Actualizar Datos

- Los datos se actualizan automáticamente cada 5 minutos
- Haz clic en el botón de **Actualizar** para obtener datos en tiempo real
- Las importaciones desde TC se realizan diariamente

### Acciones Rápidas

Desde el Dashboard puedes acceder directamente a:
- **Importar Datos**: Subir archivos de las terminales
- **Ver Contenedores**: Listado de contenedores en terminal
- **Documentos de Embarque**: Gestionar BLs y facturas
- **Reportes**: Generar reportes de importación

:::info NOTA
Los datos históricos pueden tener un retraso de hasta 24 horas. Los datos de las Terminales de Contenedores se importan diariamente mediante los procesos de importación CSV.
:::

---

**Siguiente**: [Control de Importaciones](/docs/logistica/imports) - Aprende a gestionar las importaciones.
