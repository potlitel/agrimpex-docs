---
sidebar_position: 5
---

# Órdenes de Entrega

## Descripción

El módulo de Órdenes de Entrega permite gestionar la autorización y seguimiento de la entrega de mercancía a los clientes. Controla todo el proceso desde la solicitud hasta la confirmación de entrega.

## Acceso al Módulo

1. Inicia sesión en el sistema
2. En el menú lateral, navega a **Logística** → **Órdenes de Entrega**
3. También puedes acceder directamente desde `/logistic/delivery-orders`

## Crear Orden de Entrega

### Paso 1: Nueva Orden

1. Accede al módulo
2. Haz clic en **"+ Nueva Orden de Entrega"**

### Paso 2: Completar Datos

| Campo | Obligatorio | Descripción |
|-------|-------------|-------------|
| Número de Orden | Sí | Identificador único |
| Importación | Sí | Importación asociada |
| Cliente | Sí | Cliente receptor |
| Fecha de Entrega | Sí | Fecha programada |
| Dirección | Sí | Dirección de entrega |
| Contacto | No | Persona de contacto |
| Teléfono | No | Teléfono de contacto |

### Paso 3: Confirmar

1. Verifica los datos
2. Haz clic en **"Guardar"**

## Estados de Orden de Entrega

| Estado | Descripción |
|--------|-------------|
| **Pendiente** | Orden creada, esperando confirmación |
| **Confirmada** | Orden confirmada por cliente |
| **En Reparto** | Mercancía en reparto |
| **Entregada** | Entrega completada |
| **Cancelada** | Orden cancelada |

## Seguimiento de Entrega

### Paso 1: Buscar Orden

1. Ingresa el número de orden o cliente
2. Haz clic en **"Buscar"**

### Paso 2: Actualizar Estado

1. Selecciona la orden
2. Haz clic en **"Cambiar Estado"**
3. Selecciona el nuevo estado
4. Agrega comentarios si es necesario

---

**Siguiente**: [Nomenclaturas - Área](/docs/nomenclaturas/area) - Aprende a gestionar los catálogos.
