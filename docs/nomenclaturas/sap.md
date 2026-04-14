---
sidebar_position: 14
---

# Estados de Solicitud SAP 📋

## Descripción

El catálogo de **Estados de Solicitud** (también llamado Estados SAP) define los estados del proceso de solicitud de permisos ante las autoridades competentes. Estos estados reflejan el flujo de trabajo desde la solicitud inicial hasta la aprobación final.

## Acceso

- **Menú**: Nomenclaturas → Estados de Solicitud
- **Ruta directa**: `/management/nomenclatures/sap`

## User Stories Asociadas

| HU | Nombre | Descripción |
|----|--------|-------------|
| HU-54 | Adicionar Estado Solicitud Permiso | Crear nuevos estados |
| HU-55 | Editar Estado Solicitud Permiso | Modificar estados existentes |
| HU-56 | Listar Estado Solicitud Permiso | Ver todos los estados activos |
| HU-57 | Filtar Estado Solicitud Permiso | Buscar y filtrar estados |

## Interfaz

### Listado de Estados SAP

![Listado de Estados SAP](/img/nomenclaturas/sap-listado.png)

## Propósito

Este catálogo se utiliza en:
- Seguimiento de solicitudes de permisos
- Control de workflow
- Reporting de tramitología
- Gestión de tiempos

## Campos

| Campo | Obligatorio | Descripción |
|-------|-------------|-------------|
| Nombre del estado | Sí | Nombre del estado (único) |
| Activo | Sí | Toggle (por defecto: Activo) |

## Operaciones CRUD

### HU-54: Adicionar Estado Solicitud Permiso

1. Accede al módulo de Estados de Solicitud
2. Haz clic en **"+ Adicionar Estado"**
3. Ingresa el nombre del estado
4. Verifica que esté activo
5. Haz clic en **"Guardar"**

### HU-55: Editar Estado Solicitud Permiso

1. Busca el estado en la tabla
2. Haz clic en editar
3. Modifica el nombre
4. Puedes activar/desactivar
5. Guarda los cambios

### HU-56: Listar Estado Solicitud Permiso

- Muestra todos los estados activos
- Ordenado alfabéticamente por nombre

### HU-57: Filtar Estado Solicitud Permiso

| Filtro | Tipo |
|--------|------|
| Estado | Búsqueda parcial |
| Estado filter | Activo/Inactivo |

---

## Flujo de Estados

```
CREADO → EN_REVISIÓN → APROBADO
    ↓         ↓
  OBSERVADO  RECHAZADO
    ↓
REMITIDO → EN_TRÁMITE → OTORGADO
```

## Estados Estándar

| Código | Nombre | Descripción |
|--------|--------|-------------|
| CREADO | Creado | Solicitud registrada |
| EN_REVISION | En Revisión | En análisis por autoridad |
| OBSERVADO | Observado | Requiere correcciones |
| REMITIDO | Remitido | Enviado a otra instancia |
| EN_TRAMITE | En Trámite | En proceso de resolución |
| APROBADO | Aprobado | Solicitud aprobada |
| OTORGADO | Otorgado | Permiso entregado |
| RECHAZADO | Rechazado | Solicitud denegada |
| CADUCADO | Caducado | Vigencia vencida |

---

## Reglas de Negocio

- El nombre del estado debe ser único
- Solo caracteres alfabéticos
- Se crea con estado Activo por defecto
- Solo estados Activos aparecen en los listados

---

**Volver a**: [Nomenclaturas - Introducción](/docs/nomenclaturas/intro)
