---
sidebar_position: 15
---

# Clientes

## Descripción

El catálogo de **Clientes** contiene la información de todas las empresas o personas que reciben importaciones a través del sistema. Es fundamental para la gestión comercial, facturación y seguimiento de entregas.

## Acceso

- **Menú**: Nomenclaturas → Clientes
- **Ruta directa**: `/management/nomenclatures/client`

## Interfaz

### Listado de Clientes

![Listado de Clientes](/img/nomenclaturas/client-listado.png)

## Propósito

Este catálogo se utiliza en:
- Registro de importaciones
- Facturación
- Órdenes de entrega
- Reporting comercial

## Tipos de Cliente

| Código | Tipo | Descripción |
|--------|------|-------------|
| EMPRESA | Empresa | Sociedad mercantil |
| GOBIERNO | Entidad Gubernamental | Organismo estatal |
| PERSONA | Persona Natural | Particular |
| COOPERATIVA | Cooperativa | Cooperativa productiva |

## Campos

### Identificación

| Campo | Tipo | Descripción |
|-------|------|-------------|
| Código | Texto | Identificador único del cliente |
| Tipo | Relación | Tipo de cliente |
| RUC / NIT | Texto | Identificador tributario |
| Nombre Comercial | Texto | Nombre de fantasía |
| Razón Social | Texto | Nombre legal completo |
| País | Relación | País de residencia |
| Estado | Relación | Estado/Provincia |
| Condado | Relación | Municipio |

### Información de Contacto

| Campo | Tipo | Descripción |
|-------|------|-------------|
| Dirección | Texto | Dirección completa |
| Teléfono Principal | Texto | Teléfono principal |
| Teléfono Secundario | Texto | Teléfono secundario |
| Email Principal | Texto | Correo principal |
| Email Facturación | Texto | Correo para facturas |
| Web | Texto | Sitio web |

### Información Comercial

| Campo | Tipo | Descripción |
|-------|------|-------------|
| Cliente Desde | Fecha | Fecha de primer contacto |
| Categoría | Texto | Categoría (VIP, Regular, Nuevo) |
| Límite Crédito | Número | Límite de crédito autorizado |
| Condiciones Pago | Texto | Términos de pago |
| Descuento | Número | Descuento porcentual |
| Vendedor Asignado | Relación | Comercial responsable |

## Crear Cliente

1. Accede al módulo de Clientes
2. Haz clic en **"+ Agregar Cliente"**
3. Completa la identificación:
   - Código interno
   - Tipo de cliente
   - RUC/NIT
   - Nombre comercial y razón social
4. Define la ubicación:
   - País, estado, condado
   - Dirección completa
5. Agrega contactos:
   - Teléfonos
   - Emails
6. Configura información comercial:
   - Categoría
   - Límite de crédito
   - Condiciones de pago
7. Activa el toggle "Activo"
8. Haz clic en **"Guardar"**

## Información Adicional

| Campo | Tipo | Descripción |
|-------|------|-------------|
| Contacto Principal | Texto | Persona de contacto |
| Cargo Contacto | Texto | Cargo del contacto |
| Notas | Texto | Observaciones adicionales |

---

**Volver a**: [Nomenclaturas - Introducción](/docs/nomenclaturas/intro)
