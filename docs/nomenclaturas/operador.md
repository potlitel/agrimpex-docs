---
sidebar_position: 12
---

# Operadores Navieros

## Descripción

El catálogo de **Operadores** (navieras) contiene información de las compañías de transporte marítimo que operan los contenedores. Es esencial para el seguimiento de rutas, tiempos de tránsito y coordinación logística.

## Acceso

- **Menú**: Nomenclaturas → Operadores
- **Ruta directa**: `/management/nomenclatures/operator`

## Interfaz

### Listado de Operadores

![Listado de Operadores](/img/nomenclaturas/operator-listado.png)

## Propósito

Este catálogo se utiliza en:
- Registro de contenedores
- Seguimiento de rutas
- Cálculo de tiempos de tránsito
- Facturación de fletes

## Principales Navieras

| Código | Nombre | Siglas |
|--------|--------|--------|
| MSC | Mediterranean Shipping Company | MSC |
| CMA | CMA CGM Group | CMA CGM |
| MAE | Maersk Line | MAERSK |
| COS | COSCO Shipping | COSCO |
| OOL | Ocean Network Express | ONE |
| HAP | Hapag-Lloyd | HAPAG |
| YML | Yang Ming Marine | YML |
| EVE | Evergreen Marine | EVERGREEN |

## Campos

| Campo | Tipo | Descripción |
|-------|------|-------------|
| Código | Texto | Código identificador de la naviera |
| Nombre | Texto | Razón social completa |
| Nombre Corto | Texto | Nombre comercial |
| País | Relación | País de origen |
| Código SCAC | Texto | Standard Carrier Alpha Code |
| Web | Texto | Sitio web oficial |
| Teléfono | Texto | Contacto telefónico |
| Email | Texto | Correo de contacto |

## Información de Rastreo

| Campo | Tipo | Descripción |
|-------|------|-------------|
| Prefijo Tracking | Texto | Prefijo para rastreo |
| Formato Tracking | Texto | Formato del número de seguimiento |
| URL Tracking | Texto | URL para rastreo en línea |

## Información Financiera

| Campo | Tipo | Descripción |
|-------|------|-------------|
| Código Receptor | Texto | Código para facturación |
| Términos Comunes | Texto | INCOTERMS comunes |

## Crear Operador

1. Accede al módulo de Operadores
2. Haz clic en **"+ Agregar Operador"**
3. Completa los datos básicos:
   - Código de naviera
   - Nombre completo
   - Nombre corto para visualización
   - País de origen
4. Agrega información de contacto:
   - Website
   - Teléfono
   - Email
5. Configura rastreo:
   - Prefijo de tracking
   - URL de rastreo
6. Agrega datos financieros si aplica
7. Activa el toggle "Activo"
8. Haz clic en **"Guardar"**

## Seguimiento de Contenedores

:::info NOTA
Para rastrear un contenedor, necesitas el número de contenedor (11 caracteres) y puedes usar la URL de rastreo configurada en el operador.
:::

---

**Volver a**: [Nomenclaturas - Introducción](/docs/nomenclaturas/intro)
