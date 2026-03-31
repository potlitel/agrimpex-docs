---
sidebar_position: 13
---

# Plantas

## Descripción

El catálogo de **Plantas** registra las instalaciones industriales, almacenes, depósitos y centros de almacenamiento utilizados en el proceso de importación. Cada planta tiene capacidades y características específicas.

## Acceso

- **Menú**: Nomenclaturas → Plantas
- **Ruta directa**: `/management/nomenclatures/plant`

## Interfaz

### Listado de Plantas

![Listado de Plantas](/img/nomenclaturas/plant-listado.png)

## Propósito

Este catálogo se utiliza en:
- Asignación de destinos de entrega
- Control de capacidad
- Planificación de almacenamiento
- Reporting operativo

## Tipos de Instalaciones

| Código | Tipo | Descripción |
|--------|------|-------------|
| ALM | Almacén | Depósito general |
| DEP | Depósito | Depósito aduanero |
| PLA | Planta | Planta procesadora |
| TER | Terminal | Terminal de contenedores |
| FRÍO | Refrigerado | Almacén refrigerado |
| ZFR | Zona Franca | Zona franca industrial |

## Campos

| Campo | Tipo | Descripción |
|-------|------|-------------|
| Código | Texto | Identificador único de la planta |
| Nombre | Texto | Nombre de la instalación |
| Tipo | Relación | Tipo de instalación |
| Área | Relación | Área geográfica |
| Estado | Relación | Estado donde se ubica |
| Condado | Relación | Municipio específico |
| Dirección | Texto | Dirección completa |

## Características Técnicas

| Campo | Tipo | Descripción |
|-------|------|-------------|
| Capacidad Total | Número | Capacidad total (m² o m³) |
| Capacidad Usada | Número | Capacidad en uso actual |
| Tiene Refrigeración | Booleano | Si tiene cámara fría |
| Temperatura Min | Número | Temperatura mínima (°C) |
| Temperatura Max | Número | Temperatura máxima (°C) |
| muelles | Número | Número de muelles de carga |

## Información de Contacto

| Campo | Tipo | Descripción |
|-------|------|-------------|
| Responsable | Texto | Nombre del responsable |
| Teléfono | Texto | Teléfono de contacto |
| Email | Texto | Correo electrónico |
| Horario | Texto | Horario de operación |

## Crear Planta

1. Accede al módulo de Plantas
2. Haz clic en **"+ Agregar Planta"**
3. Completa los datos básicos:
   - Código identificador
   - Nombre de la instalación
   - Tipo de instalación
4. Define la ubicación:
   - Selecciona el área
   - Selecciona el estado
   - Selecciona el condado
   - Ingresa la dirección completa
5. Especifica capacidades:
   - Capacidad total
   - Si tiene refrigeración
   - Rango de temperatura
6. Agrega información de contacto
7. Activa el toggle "Activo"
8. Haz clic en **"Guardar"**

## Gestión de Capacidad

:::info NOTA
Es importante mantener actualizada la capacidad usada de cada planta para evitar sobreasignaciones y problemas logísticos.
:::

---

**Volver a**: [Nomenclaturas - Introducción](/docs/nomenclaturas/intro)
