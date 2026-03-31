---
sidebar_position: 14
---

# Estados de Solicitud (SAP)

## Descripción

El catálogo de **Estados SAP** define los estados del proceso de solicitud de permisos ante las autoridades competentes. Estos estados reflejan el flujo de trabajo desde la solicitud inicial hasta la aprobación final.

## Acceso

- **Menú**: Nomenclaturas → Estados de Solicitud
- **Ruta directa**: `/management/nomenclatures/sap`

## Interfaz

### Listado de Estados SAP

![Listado de Estados SAP](/img/nomenclaturas/sap-listado.png)

## Propósito

Este catálogo se utiliza en:
- Seguimiento de solicitudes de permisos
- Control de workflow
- Reporting de tramitología
- Gestión de tiempos

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

## Campos

| Campo | Tipo | Descripción |
|-------|------|-------------|
| Código | Texto | Identificador del estado |
| Nombre | Texto | Nombre descriptivo |
| Descripción | Texto | Detalles del estado |
| Categoría | Texto | Categoría (inicial, intermedio, final) |
| Color | Color | Color para visualización |
| Permite Edición | Booleano | Si permite editar solicitud |
| Permite Documentos | Booleano | Si permite subir documentos |
| Estado Final | Booleano | Si es un estado terminal |
| Activo | Booleano | Si está disponible |

## Configuración de Workflow

| Campo | Tipo | Descripción |
|-------|------|-------------|
| Estados Siguientes | Lista | Estados a los que puede avanzar |
| Requiere Justificación | Booleano | Si requiere explicación |
| Notifica Usuario | Booleano | Si notifica al solicitante |

## Crear Estado SAP

1. Accede al módulo de Estados SAP
2. Haz clic in **"+ Agregar Estado"**
3. Completa los datos:
   - Código y nombre
   - Descripción
   - Categoría
4. Configura el comportamiento:
   - Permite edición
   - Permite documentos
   - Notifica usuario
5. Define si es estado final
6. Especifica los estados siguientes posibles
7. Asigna un color para la UI
8. Activa el toggle "Activo"
9. Guarda el registro

## Configuración de Transiciones

:::info NOTA
Es importante configurar correctamente las transiciones entre estados para mantener la integridad del workflow de solicitudes.
:::

---

**Volver a**: [Nomenclaturas - Introducción](/docs/nomenclaturas/intro)
