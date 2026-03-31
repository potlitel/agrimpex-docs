---
sidebar_position: 2
---

# Gestión de Grupos

## Descripción

El módulo de grupos permite organizar a los usuarios en conjuntos lógicos para facilitar la administración de permisos y políticas de acceso. Los grupos pueden tener roles asignados que se heredan automáticamente a todos sus miembros.

## Acceso al Módulo

1. Inicia sesión en el sistema
2. En el menú lateral, navega a **Administración** → **Grupos**
3. También puedes acceder directamente desde `/management/group`

## Crear Nuevo Grupo

### Paso 1: Acceder al Formulario

1. Desde la página de grupos, haz clic en **"+ Agregar Grupo"**
2. Se abrirá el formulario de creación

### Paso 2: Completar Datos

| Campo | Obligatorio | Descripción |
|-------|-------------|-------------|
| Nombre | Sí | Nombre descriptivo del grupo |
| Descripción | No | Descripción del propósito del grupo |
| Roles | Sí | Roles que se asignarán a los miembros |
| Activo | Sí | Estado del grupo |

### Paso 3: Guardar Grupo

1. Verifica que los datos sean correctos
2. Haz clic en **"Guardar"**
3. El sistema creará el grupo y mostrará un mensaje de éxito

## Asignar Usuarios a Grupo

### Paso 1: Editar Grupo

1. En la tabla de grupos, busca el grupo deseado
2. Haz clic en el botón de **edición**

### Paso 2: Agregar Miembros

1. En la sección de miembros, busca el usuario a agregar
2. Selecciona el usuario
3. Haz clic en **"Agregar"**

## Eliminar Grupo

### Paso 1: Confirmar Eliminación

1. En la tabla de grupos, busca el grupo a eliminar
2. Haz clic en el botón de **eliminación**
3. Confirma la acción en el diálogo de verificación

:::danger ADVERTENCIA
- No puedes eliminar grupos que tengan usuarios asignados
- Primero debes reassignar o eliminar los usuarios del grupo
:::

---

**Siguiente**: [Nomenclaturas](/docs/nomenclaturas/area) - Aprende a gestionar los catálogos del sistema.
