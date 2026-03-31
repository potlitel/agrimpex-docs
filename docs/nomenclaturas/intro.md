---
sidebar_position: 1
---

# Nomenclaturas - Introducción 📑

## Descripción

Las **Nomenclaturas** son catálogos maestros del sistema que contienen los valores y datos de referencia utilizados en todo Agrimpex. Estos catálogos permiten estandarizar la información y garantizar la consistencia de los datos. El módulo de Nomenclaturas contiene 10 tipos de catálogos con operaciones CRUD estándar.

## Acceso al Módulo

1. Inicia sesión en el sistema
2. En el menú lateral, navega a **Nomenclaturas**
3. Selecciona el tipo de nomenclatura a gestionar

---

## Tipos de Nomenclaturas

### Geográficos 🌍

| Nomenclatura | Código HU | Descripción |
|-------------|-----------|-------------|
| [Áreas](/docs/nomenclaturas/area) | HU-18 a HU-21 | Áreas geográficas o departamentos |
| [Países](/docs/nomenclaturas/pais) | - | Países del mundo |
| [Estados](/docs/nomenclaturas/estado) | HU-46 a HU-49 | Estados o provincias dentro de un país |
| [Condados](/docs/nomenclaturas/condado) | HU-26 a HU-29 | Condados o municipios dentro de un estado |

### Contenedores 🚢

| Nomenclatura | Código HU | Descripción |
|-------------|-----------|-------------|
| [Estados de Contenedor](/docs/nomenclaturas/contenedor-estado) | HU-50 a HU-53 | Estados físicos y operativos del contenedor |
| [Tipos de Contenedor](/docs/nomenclaturas/contenedor-tipo) | HU-42 a HU-45 | Tipos de contenedor (20GP, 40HC, etc.) |

### Importación 📦

| Nomenclatura | Código HU | Descripción |
|-------------|-----------|-------------|
| [Tipos de Permiso](/docs/nomenclaturas/permiso) | HU-38 a HU-41 | Tipos de permiso de importación |
| [Tipos de Carga](/docs/nomenclaturas/carga) | HU-34 a HU-37 | Tipos de carga |
| [Estados de Solicitud SAP](/docs/nomenclaturas/sap) | HU-54 a HU-57 | Estados de la solicitud de permiso |

### Comercial 💰

| Nomenclatura | Descripción |
|-------------|-------------|
| [Monedas](/docs/nomenclaturas/moneda) | Monedas y tipos de cambio |
| [Productos](/docs/nomenclaturas/producto) | Catálogo de productos |
| [Clientes](/docs/nomenclaturas/cliente) | Catálogo de clientes |
| [Proveedores](/docs/nomenclaturas/proveedor) | Catálogo de proveedores |

### Logística 🚚

| Nomenclatura | Código HU | Descripción |
|-------------|-----------|-------------|
| [Operadores](/docs/nomenclaturas/operador) | HU-30 a HU-33 | Operadores navieros |
| [Plantas](/docs/nomenclaturas/planta) | HU-22 a HU-25 | Plantas o instalaciones |

---

## Patrón CRUD Estándar

Todas las nomenclaturas siguen el mismo patrón de operaciones:

| Operación | Descripción | HUs |
|-----------|-------------|-----|
| **Adicionar** | Crear nuevo registro | X |
| **Editar** | Modificar registro existente | X+1 |
| **Listar** | Ver registros activos | X+2 |
| **Filtrar** | Buscar y filtrar registros | X+3 |

---

## Campos Comunes

| Campo | Tipo | Descripción |
|-------|------|-------------|
| Nombre/Código | Texto | Identificador único, requerido |
| Descripción | Texto | Texto adicional opcional |
| Activo | Toggle | Estado Activo/Inactivo |

---

## Reglas de Negocio Comunes

### Para Todas las Nomenclaturas

1. **Valores Únicos**: Los campos de nombre/código deben ser únicos
2. **Activo por Defecto**: Los nuevos registros se crean como Activos
3. **Solo Activos en Listados**: Solo aparecen registros Activos
4. **Orden Alfabético**: Los listados se ordenan por nombre ascendente
5. **Mensaje Vacío**: "No existen [nomenclatura] activos registrados"
6. **Confirmación de Desactivación**: "Una vez desactivado, no se podrá volver a usar... ¿Desea continuar?"
7. **Mensaje de Éxito**: "La operación se realizó satisfactoriamente"
8. **Opción Cancelar**: Descartar cambios y volver

### Validaciones Comunes

- Nombre requerido y único
- Código requerido y único (para algunos catálogos)
- Solo caracteres alfabéticos para nombres
- Dependencias entre catálogos (ej: Estados dependen de Países)

---

## Operaciones Comunes

### Crear Registro

1. Accede a la nomenclatura deseada
2. Haz clic en **"+ Adicionar [Nomenclatura]"**
3. Completa los campos requeridos
4. Guarda el registro

### Editar Registro

1. Busca el registro a modificar
2. Haz clic en **Editar**
3. Actualiza los valores
4. Guarda los cambios
5. Puedes activar/desactivar con el toggle

### Eliminar/Desactivar Registro

1. Busca el registro a eliminar
2. Haz clic en **Eliminar** o desactiva el toggle
3. Confirma la acción
4. El registro cambia a Inactivo

:::danger ADVERTENCIA
- No elimines registros que estén siendo utilizados
- Verifica que no existan dependencias antes de desactivar
- Desactivar es preferible a eliminar para mantener trazabilidad
:::

### Listar Registros

1. Accede a la nomenclatura
2. Verás el listado de registros Activos
3. Ordenado alfabéticamente por nombre

### Filtrar Registros

1. Usa el campo de búsqueda para buscar por nombre
2. Usa el filtro de Estado para ver Activos/Inactivos/Todos
3. Los filtros se combinan con lógica AND

---

## Exportar Catálogos

Para exportar un catálogo:

1. Accede a la nomenclatura
2. Haz clic en **"Exportar"**
3. Selecciona el formato (Excel, CSV, PDF)
4. Descarga el archivo

---

## Estados de Contenedor (Detalle) 📊

El catálogo de Estados de Contenedor contiene todos los estados del ciclo de vida del contenedor:

| Estado | Descripción |
|--------|-------------|
| **Nuevo** | Contenedor recien creado en el sistema |
| **No identificado** | No se puede asociar con especialista |
| **BL endosado** | El BL ha sido endosado |
| **Otra Importadora** | Cambio de propiedad |
| **Cartera** | No aprobado en cartera |
| **Pendiente Documento embarque** | Faltan documentos |
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

## Tipos de Gestión (Forma de Gestión)

Los tipos de forma de gestión disponibles en el sistema:

| ID | Nombre |
|----|---------|
| 1 | Mipyme |
| 2 | TCP |

---

**Siguiente**: [Áreas](/docs/nomenclaturas/area) - Gestionar áreas geográficas.
