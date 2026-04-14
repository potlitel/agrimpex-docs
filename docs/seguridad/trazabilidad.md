---
sidebar_position: 1
---

# Trazabilidad y Seguridad 🔒

## Descripción

El módulo de Seguridad y Acceso gestiona el control de usuarios, roles, sesiones y la trazabilidad de todas las operaciones realizadas en el sistema. Este módulo es fundamental para garantizar la seguridad, el control de acceso y la auditoría de todas las acciones.

## Acceso al Módulo

1. Inicia sesión en el sistema
2. En el menú lateral, navega a **Seguridad**
3. Selecciona la funcionalidad deseada

---

## Gestión de Usuarios 👥

El sistema permite gestionar los usuarios que tendrán acceso al sistema, incluyendo su información personal, credenciales y roles asignados.

### HU-01: Adicionar Usuario

Permite crear nuevos usuarios en el sistema.

#### Datos del Usuario

| Campo | Obligatorio | Descripción | Validaciones |
|-------|-------------|-------------|--------------|
| Usuario | Sí | Nombre de usuario (login) | Mínimo 5 caracteres, sin espacios, único |
| Nombre | Sí | Nombre del usuario | Solo caracteres alfabéticos |
| Apellidos | Sí | Apellidos del usuario | Solo caracteres alfabéticos |
| Correo electrónico | Sí | Email del usuario | Formato válido de email, único |
| Contraseña | Sí | Password inicial | Mínimo 8 caracteres, mayúsculas + minúsculas + número + carácter especial |
| Rol | Sí | Rol asignado al usuario | Seleccionar de lista de roles |
| Activo | Sí | Estado del usuario | Activo/Inactivo (por defecto: Activo) |

#### Reglas de Negocio

- El usuario se crea con estado Activo por defecto
- El nombre de usuario no es editable después de creado
- La contraseña tiene botón de mostrar/ocultar (icono de ojo)
- Solo los usuarios Activos aparecen en los listados
- Los usuarios se ordenan alfabéticamente por nombre de usuario

---

### HU-02: Editar Usuario

Permite modificar la información de un usuario existente.

#### Campos Editables

| Campo | Descripción |
|-------|-------------|
| Nombre | Modificar nombre del usuario |
| Apellidos | Modificar apellidos |
| Correo electrónico | Cambiar email (debe ser único) |
| Rol | Cambiar rol asignado |
| Activo | Activar/desactivar usuario |

#### Reglas de Negocio

- El campo "Usuario" no es editable
- Al desactivar un usuario, pierde acceso inmediatamente
- Los usuarios inactivos no aparecen en los listados

---

### HU-03: Listar Usuarios

Muestra todos los usuarios activos del sistema.

#### Columnas Mostradas

| Columna | Descripción |
|---------|-------------|
| Usuario | Nombre de usuario |
| Nombre | Nombre completo |
| Apellidos | Apellidos completos |
| Correo electrónico | Email del usuario |
| Rol | Rol asignado |
| Estado | Activo/Inactivo |

#### Comportamiento

- Solo muestra usuarios con estado Activo
- Ordenado alfabéticamente por usuario
- Mensaje "No existen usuarios activos registrados" si está vacío

---

### HU-04: Filtrar Usuarios

Permite buscar y filtrar usuarios por diferentes criterios.

#### Filtros Disponibles

| Filtro | Tipo de Búsqueda |
|--------|-----------------|
| Usuario | Parcial, sin distinción de mayúsculas |
| Nombre | Parcial |
| Apellidos | Parcial |
| Rol | Exacta (dropdown) |
| Estado | Exacta (Activo/Inactivo) |

---

## Gestión de Roles 🎭

Los roles definen los permisos y accesos de los usuarios en el sistema.

### HU-05: Adicionar Rol

Permite crear nuevos roles en el sistema.

#### Datos del Rol

| Campo | Obligatorio | Descripción |
|-------|-------------|-------------|
| Nombre del rol | Sí | Nombre del rol |
| Descripción del rol | No | Breve descripción del rol |
| Estado | Sí | Activo/Inactivo |

#### Reglas de Negocio

- El nombre del rol debe ser único
- Se crea con estado Activo por defecto

---

### HU-06: Editar Rol

Permite modificar un rol existente.

#### Campos Editables

- Nombre del rol
- Descripción del rol
- Estado (Activo/Inactivo)

#### Reglas de Negocio

- Al desactivar un rol, no se puede asignar a nuevos usuarios
- Los usuarios con ese rol mantienen su acceso

---

### HU-07: Listar Roles

Muestra todos los roles activos del sistema.

#### Columnas Mostradas

| Columna | Descripción |
|---------|-------------|
| Nombre del rol | Nombre del rol |
| Descripción | Descripción del rol |
| Estado | Activo/Inactivo |

---

### HU-08: Filtrar Roles

Permite buscar roles por nombre o estado.

#### Filtros Disponibles

| Filtro | Tipo |
|--------|------|
| Nombre del rol | Parcial |
| Estado | Exacta |

---

## Gestión de Sesión 🔑

### HU-09: Iniciar Sesión

Permite a los usuarios acceder al sistema.

#### Campos de Login

| Campo | Obligatorio | Descripción |
|-------|-------------|-------------|
| Usuario | Sí | Nombre de usuario |
| Contraseña | Sí | Contraseña del usuario |

#### Comportamiento

1. Ingresa el nombre de usuario
2. Ingresa la contraseña
3. Haz clic en "Iniciar Sesión"
4. Si las credenciales son válidas, accede al Dashboard
5. Si son inválidas, muestra error: "Usuario o contraseña incorrectos"

#### Reglas de Seguridad

- Contraseña con visibilidad toggle (botón mostrar/ocultar)
- Bloqueo después de múltiples intentos fallidos
- Sesión válida por tiempo limitado

---

### HU-10: Cerrar Sesión

Permite cerrar la sesión de forma segura.

#### Comportamiento

1. Haz clic en el botón de cerrar sesión
2. Confirma la acción
3. Se invalidan todas las credenciales y tokens
4. Redirecciona a la página de login

---

### HU-11: Recuperar Contraseña

Permite recuperar la contraseña mediante email.

#### Proceso de Recuperación

1. En la página de login, haz clic en "¿Olvidaste tu contraseña?"
2. Ingresa el correo electrónico registrado
3. El sistema envía un enlace/código de recuperación
4. Ingresa el código recibido
5. Define una nueva contraseña (debe cumplir las reglas de seguridad)
6. Confirma la nueva contraseña
7. Accede al sistema con la nueva contraseña

#### Reglas de Nueva Contraseña

- Mínimo 8 caracteres
- Debe incluir: mayúsculas, minúsculas, números y caracteres especiales

---

## Perfil de Usuario 👤

### HU-12: Ver Detalles Mi Perfil

Permite al usuario ver su información de perfil.

#### Campos de Perfil (Solo Lectura)

| Campo | Descripción |
|-------|-------------|
| Nombre | Nombre completo |
| Apellidos | Apellidos completos |
| Correo electrónico | Email registrado |
| Rol | Rol asignado |

---

### HU-13: Editar Mi Perfil

Permite al usuario modificar su información personal.

#### Campos Editables

| Campo | Obligatorio | Descripción |
|-------|-------------|-------------|
| Nombre | Sí | Nombre del usuario |
| Apellidos | Sí | Apellidos del usuario |
| Correo electrónico | Sí | Email del usuario |

#### Validaciones

- Nombre y apellidos: Solo caracteres alfabéticos
- Correo electrónico: Formato válido, único en el sistema

---

### HU-14: Cambiar Contraseña

Permite al usuario cambiar su contraseña.

#### Campos

| Campo | Obligatorio | Descripción |
|-------|-------------|-------------|
| Contraseña actual | Sí | Contraseña actual |
| Nueva contraseña | Sí | Nueva contraseña |
| Confirmar nueva contraseña | Sí | Repetir nueva contraseña |

#### Validaciones

- La nueva contraseña debe cumplir las reglas de seguridad
- La nueva contraseña debe ser diferente a la actual
- La confirmación debe coincidir con la nueva contraseña
- Mínimo 8 caracteres, mayúsculas + minúsculas + número + carácter especial

---

## Trazabilidad 📋

El sistema registra todas las operaciones realizadas para auditoría y seguridad.

### HU-15: Listar Trazas

Muestra todos los registros de auditoría del sistema.

#### Columnas Mostradas

| Columna | Descripción |
|---------|-------------|
| Usuario | Usuario que realizó la acción |
| Rol del usuario | Rol del usuario |
| Fecha y hora | Momento exacto de la operación |
| Módulo | Módulo del sistema donde ocurrió |
| Funcionalidad | Característica ejecutada |
| Acción realizada | Descripción de la acción |

#### Comportamiento

- Ordenado por fecha descendente (más reciente primero)
- Solo lectura

---

### HU-16: Filtrar Trazas

Permite buscar y filtrar los registros de trazabilidad.

#### Filtros Disponibles

| Filtro | Tipo |
|--------|------|
| Usuario | Parcial |
| Rol | Exacta |
| Módulo | Exacta |
| Funcionalidad | Exacta |
| Tipo de acción | Exacta |
| Fecha | Rango de fechas |

#### Tipos de Acciones Registradas

| Acción | Descripción |
|--------|-------------|
| CREATE | Creación de nuevo registro |
| UPDATE | Modificación de registro |
| DELETE | Eliminación de registro |
| LOGIN | Inicio de sesión |
| LOGOUT | Cierre de sesión |
| EXPORT | Exportación de datos |
| LOGIN_FAILED | Intento de login fallido |

---

### HU-17: Ver Detalles Trazas

Permite ver los detalles completos de un registro de trazabilidad.

#### Datos Mostrados

- Usuario que realizó la acción
- Rol del usuario
- Fecha y hora exacta
- Módulo
- Funcionalidad
- Acción realizada
- Datos anteriores (si aplica)
- Datos nuevos (si aplica)
- Dirección IP del usuario
- Navegador utilizado

---

## Exportar Registros

Para exportar los registros de trazabilidad:

1. Configura los filtros deseados
2. Haz clic en **"Exportar"**
3. Selecciona el formato (Excel, CSV, PDF)
4. Descarga el archivo

:::info NOTA
Los registros de trazabilidad se mantienen por un período mínimo de 1 año. Consultar política de retención de datos.
:::

---

## Uso para Auditoría

La trazabilidad es fundamental para:

- **Auditorías internas**: Verificar quién hizo qué y cuándo
- **Resolución de incidentes**: Investigar problemas
- **Cumplimiento regulatorio**: Demostrar controles
- **Análisis de comportamiento**: Detectar anomalías

---

**Siguiente**: [Nomenclaturas](/docs/nomenclaturas/intro) - Aprende a gestionar los catálogos del sistema.
