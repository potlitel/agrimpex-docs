---
sidebar_position: 8
---

# Tipos de Permiso 📜

## Descripción

El catálogo de **Tipos de Permiso** define las diferentes categorías de permisos de importación requeridos por las autoridades aduaneras. Cada tipo de permiso tiene requisitos y trámites específicos.

## Acceso

- **Menú**: Nomenclaturas → Tipos de Permiso
- **Ruta directa**: `/management/nomenclatures/permit-type`

## User Stories Asociadas

| HU | Nombre | Descripción |
|----|--------|-------------|
| HU-38 | Adicionar Tipo de permiso | Crear nuevos tipos |
| HU-39 | Editar Tipo de permiso | Modificar tipos existentes |
| HU-40 | Listar Tipo de permiso | Ver todos los tipos activos |
| HU-41 | Filtar Tipo de permiso | Buscar y filtrar tipos |

## Interfaz

### Listado de Tipos de Permiso

![Listado de Tipos de Permiso](/img/nomenclaturas/permit-type-listado.png)

## Propósito

Este catálogo se utiliza en:
- Clasificación de importaciones
- Trámites de desaduanaje
- Control de restricciones
- Reporting regulatorio

## Campos

| Campo | Obligatorio | Descripción |
|-------|-------------|-------------|
| Tipo de permiso | Sí | Nombre del tipo (solo alfabético) |
| Activo | Sí | Toggle (por defecto: Activo) |

## Operaciones CRUD

### HU-38: Adicionar Tipo de permiso

1. Accede al módulo de Tipos de Permiso
2. Haz clic en **"+ Adicionar Tipo"**
3. Ingresa el nombre del tipo de permiso
4. Verifica que esté activo
5. Haz clic en **"Guardar"**

### HU-39: Editar Tipo de permiso

1. Busca el tipo en la tabla
2. Haz clic en editar
3. Modifica el nombre
4. Puedes activar/desactivar
5. Guarda los cambios

### HU-40: Listar Tipo de permiso

- Muestra todos los tipos activos
- Ordenado alfabéticamente

### HU-41: Filtar Tipo de permiso

| Filtro | Tipo |
|--------|------|
| Tipo de permiso | Búsqueda parcial |
| Estado filter | Activo/Inactivo |

---

## Categorías de Permisos

### Permisos Generales

| Código | Nombre | Descripción |
|--------|--------|-------------|
| LIC | Licencia | Requiere licencia ministerial |
| REG | Registro | Requiere registro sanitario |
| CERT | Certificado | Requiere certificación especial |

### Permisos Especiales

| Código | Nombre | Descripción |
|--------|--------|-------------|
| FITO | Fitosanitario | Productos vegetales |
| SANI | Sanitario | Productos alimentarios |
| AMBI | Ambiental | Productos controlados |
| MILI | Militar | Material bélico |
| FARM | Farmacéutico | Medicamentos |

---

## Reglas de Negocio

- El nombre del tipo de permiso debe ser único
- Solo caracteres alfabéticos
- Se crea con estado Activo por defecto

---

**Volver a**: [Nomenclaturas - Introducción](/docs/nomenclaturas/intro)
