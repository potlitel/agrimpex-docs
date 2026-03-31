---
sidebar_position: 1
---

# Gestión de Usuarios

## Descripción

El módulo de administración de usuarios permite crear, modificar, eliminar y visualizar las cuentas de usuario del sistema Agrimpex. Solo los usuarios con rol de Administrador tienen acceso a este módulo.

## Acceso al Módulo

1. Inicia sesión en el sistema
2. En el menú lateral, navega a **Administración** → **Usuarios**
3. También puedes acceder directamente desde `/management/user`

## Interfaz de Usuario

La página de gestión de usuarios presenta:

- **Tabla de usuarios**: Muestra todos los usuarios registrados
- **Barra de búsqueda**: Filtra usuarios por nombre, correo o rol
- **Botón Agregar**: Crea nuevos usuarios
- **Acciones por usuario**: Editar, Eliminar, Ver detalles

## Crear Nuevo Usuario

### Paso 1: Acceder al Formulario

1. Desde la página de usuarios, haz clic en **"+ Agregar Usuario"**
2. Se abrirá el formulario de creación

### Paso 2: Completar Datos

Rellena los siguientes campos:

| Campo | Obligatorio | Descripción |
|-------|-------------|-------------|
| Nombre | Sí | Primer nombre del usuario |
| Apellidos | Sí | Apellidos del usuario |
| Correo electrónico | Sí | Correo único del sistema |
| Rol | Sí | Rol del usuario (Admin, Editor, etc.) |
| Grupo | No | Grupo al que pertenece |
| Idioma | No | Idioma preferido |
| Género | No | Género del usuario |
| Fecha de nacimiento | No | Fecha de nacimiento |
| Teléfono móvil | No | Número de contacto |
| DNI | No | Número de identificación |

### Paso 3: Guardar Usuario

1. Verifica que los datos sean correctos
2. Haz clic en **"Guardar"**
3. El sistema creará el usuario y mostrará un mensaje de éxito

## Editar Usuario

### Paso 1: Seleccionar Usuario

1. En la tabla de usuarios, busca el usuario a modificar
2. Haz clic en el botón de **edición** (ícono de lápiz)

### Paso 2: Modificar Datos

1. Actualiza los campos necesarios
2. Haz clic en **"Guardar"**

:::warning NOTA
El correo electrónico no puede ser modificado después de crear el usuario.
:::

## Eliminar Usuario

### Paso 1: Confirmar Eliminación

1. En la tabla de usuarios, busca el usuario a eliminar
2. Haz clic en el botón de **eliminación** (ícono de papelera)
3. Confirma la acción en el diálogo de verificación

:::danger ADVERTENCIA
La eliminación de un usuario es irreversible. Asegúrate de que es necesario antes de proceder.
:::

## Estados de Usuario

| Estado | Descripción |
|--------|-------------|
| **Activo** | Usuario puede iniciar sesión y usar el sistema |
| **Inactivo** | Usuario no puede acceder al sistema |
| **Pendiente** | Usuario creado pero requiere activación |

---

**Siguiente**: [Grupos](/docs/administracion/grupos) - Aprende a gestionar grupos de usuarios.
