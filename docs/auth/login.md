---
sidebar_position: 1
---

# Inicio de Sesión

## Descripción

El módulo de autenticación permite a los usuarios acceder al sistema Agrimpex de manera segura. Utiliza autenticación basada en tokens JWT (JSON Web Token) para mantener la sesión activa.

## Credenciales de Acceso

Para iniciar sesión necesitas:

| Campo | Descripción |
|-------|-------------|
| **Usuario** | Correo electrónico registrado en el sistema |
| **Contraseña** | Clave de acceso asignada por el administrador |

### Credenciales de Prueba

```
Usuario: admin@eicmasoft.cu
Contraseña: 123456789
```

:::warning NOTA DE SEGURIDAD
Las credenciales anteriores son de ejemplo. En producción, cada usuario debe tener credenciales únicas asignadas por el administrador del sistema.
:::

## Proceso de Inicio de Sesión

### Paso 1: Acceder a la Página de Login

1. Abre tu navegador web
2. Ingresa la URL del sistema: `https://agrimpex.eicmasoft.cu/auth/login`
3. Presiona Enter para cargar la página

### Paso 2: Ingresar Credenciales

1. En el campo **Usuario**, ingresa tu correo electrónico
2. En el campo **Contraseña**, ingresa tu contraseña
3. Verifica que los datos sean correctos

### Paso 3: Iniciar Sesión

1. Haz clic en el botón **Iniciar Sesión** o presiona la tecla Enter
2. El sistema validará tus credenciales
3. Si son correctas, serás redirigido al Dashboard principal
4. Si son incorrectas, verás un mensaje de error

## Recuperación de Contraseña

Si has olvidado tu contraseña, sigue estos pasos:

### Paso 1: Acceder a Recuperación

1. En la página de login, haz clic en **"¿Olvidaste tu contraseña?"**
2. Serás redirigido a la página de recuperación

### Paso 2: Solicitar Código de Recuperación

1. Ingresa tu correo electrónico registrado
2. Haz clic en **"Enviar Código"**
3. Recibirás un código de verificación en tu correo

### Paso 3: Restablecer Contraseña

1. Ingresa el código recibido en el campo correspondiente
2. Ingresa tu nueva contraseña
3. Confirma la nueva contraseña
4. Haz clic en **"Restablecer"**

:::info IMPORTANTE
- La nueva contraseña debe tener al menos 8 caracteres
- Se recomienda usar una combinación de letras, números y símbolos
:::

## Sesión y Seguridad

### Tiempo de Sesión

- La sesión expira después de un período de inactividad
- Si expires, serás redirigido automáticamente a la página de login

### Cierre de Sesión

Para cerrar sesión de forma segura:

1. Haz clic en tu perfil en la esquina superior derecha
2. Selecciona **"Cerrar Sesión"**
3. Confirma la acción

:::warning RECOMENDACIÓN
Siempre cierra tu sesión cuando termines de usar el sistema, especialmente si compartes computadora.
:::

## Errores Comunes

| Error | Posible Solución |
|-------|------------------|
| "Usuario o contraseña incorrectos" | Verifica tus credenciales |
| "Cuenta deshabilitada" | Contacta al administrador |
| "Token expirado" | Inicia sesión nuevamente |
| "Error de conexión" | Verifica tu conexión a internet |

---

**Siguiente**: [Dashboard](/docs/logistica/dashboard) - Conoce el panel principal del sistema.
