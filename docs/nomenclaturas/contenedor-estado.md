---
sidebar_position: 6
---

# Estados de Contenedor 🚢

## Descripción

El catálogo de **Estados de Contenedor** define los estados físicos y operativos en los que puede encontrarse un contenedor durante su ciclo de vida. Es fundamental para el seguimiento y control del inventario de contenedores.

## Acceso

- **Menú**: Nomenclaturas → Estados de Contenedor
- **Ruta directa**: `/management/nomenclatures/containers-state`

## User Stories Asociadas

| HU | Nombre | Descripción |
|----|--------|-------------|
| HU-50 | Adicionar Estado del contenedor | Crear nuevos estados |
| HU-51 | Editar Estado del contenedor | Modificar estados existentes |
| HU-52 | Listar Estados del contenedor | Ver todos los estados activos |
| HU-53 | Filtar Estados del contenedor | Buscar y filtrar estados |

## Interfaz

### Listado de Estados de Contenedor

![Listado de Estados de Contenedor](/img/nomenclaturas/containers-state-listado.png)

## Propósito

Este catálogo se utiliza en:
- Seguimiento de contenedores
- Inventario de terminal
- Control de calidad
- Reporting operativo

## Campos

| Campo | Obligatorio | Descripción |
|-------|-------------|-------------|
| Estado del contenedor | Sí | Nombre del estado |
| Activo | Sí | Toggle (por defecto: Activo) |

## Operaciones CRUD

### HU-50: Adicionar Estado del contenedor

1. Accede al módulo de Estados de Contenedor
2. Haz clic en **"+ Adicionar Estado"**
3. Ingresa el nombre del estado
4. Verifica que esté activo
5. Haz clic en **"Guardar"**

### HU-51: Editar Estado del contenedor

1. Busca el estado en la tabla
2. Haz clic en editar
3. Modifica el nombre
4. Puedes activar/desactivar
5. Guarda los cambios

### HU-52: Listar Estados del contenedor

- Muestra todos los estados activos
- Ordenado alfabéticamente

### HU-53: Filtar Estados del contenedor

| Filtro | Tipo |
|--------|------|
| Estado | Búsqueda parcial |
| Estado filter | Activo/Inactivo |

---

## Estados del Ciclo de Vida del Contenedor

El catálogo contiene todos los estados del ciclo de vida:

| Estado | Descripción |
|--------|-------------|
| **Nuevo** | Contenedor recien creado en el sistema |
| **No identificado** | No se puede asociar con especialista |
| **BL endosado** | El BL ha sido endosado |
| **Otra Importadora** | Cambio de propiedad a otro importador |
| **Cartera** | No aprobado en cartera |
| **Pendiente Documento embarque** | Faltan documentos de embarque |
| **Permiso de Importación** | Permiso de importación solicitado |
| **Pre-liberaciones** | En proceso de pre-liberación |
| **Aduana** | Documentos presentados a aduana |
| **Canal Rojo** | Inspección física |
| **Canal Naranja** | Inspección documental |
| **Habilitado** | Pasó control de aduana |
| **Precita** | Precita solicitada al puerto |
| **Transferencia** | Transferido al cliente |
| **Extraído** | Salió del puerto |
| **Devuelto** | Retornado vacío al puerto |
| **Reexportar** | Listo para reexportar |

---

## Reglas de Negocio

- El nombre del estado debe ser único
- Se crea con estado Activo por defecto
- Solo estados Activos aparecen en los listados

:::danger ADVERTENCIA
No puedes eliminar un estado que esté asociado a contenedores en el sistema. Debes reasignar los contenedores primero.
:::

---

**Volver a**: [Nomenclaturas - Introducción](/docs/nomenclaturas/intro)
