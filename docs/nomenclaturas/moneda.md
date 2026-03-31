---
sidebar_position: 10
---

# Monedas

## Descripción

El catálogo de **Monedas** contiene todas las monedas utilizadas en las transacciones internacionales de importación. Es fundamental para el registro de valores, cálculo de aranceles y reporting financiero.

## Acceso

- **Menú**: Nomenclaturas → Monedas
- **Ruta directa**: `/management/nomenclatures/currency`

## Interfaz

### Listado de Monedas

![Listado de Monedas](/img/nomenclaturas/currency-listado.png)

## Propósito

Este catálogo se utiliza en:
- Registro de valores (FOB, CIF)
- Cálculo de aranceles
- Reporting financiero
- Control de cambio

## Monedas Principales

| Código | Símbolo | Nombre | País |
|--------|---------|--------|------|
| USD | $ | Dólar estadounidense | Estados Unidos |
| EUR | € | Euro | Unión Europea |
| CUP | ₱ | Peso cubano | Cuba |
| CNY | ¥ | Yuan chino | China |
| GBP | £ | Libra esterlina | Reino Unido |
| MXN | $ | Peso mexicano | México |
| BRL | R$ | Real brasileño | Brasil |

## Campos

| Campo | Tipo | Descripción |
|-------|------|-------------|
| Código ISO | Texto | Código de 3 letras (ISO 4217) |
| Símbolo | Texto | Símbolo monetario |
| Nombre | Texto | Nombre completo de la moneda |
| País | Relación | País emisor |
| Decimal | Número | Decimales (usual: 2) |
| Tasa Cambio Base | Número | Tasa respecto a moneda base |
| Fecha Tasa | Fecha | Fecha de la tasa |
| Activo | Booleano | Si está disponible |

## Información Adicional

| Campo | Tipo | Descripción |
|-------|------|-------------|
| Código Numérico | Texto | Código numérico ISO |
| Símbolo Posición | Texto | Antes/Después del valor |
| Separador Miles | Texto | Caracter separador de miles |
| Separador Decimal | Texto | Caracter separador decimal |

## Crear Moneda

1. Accede al módulo de Monedas
2. Haz clic en **"+ Agregar Moneda"**
3. Completa los campos:
   - Código ISO 4217 (ej: USD, EUR)
   - Símbolo monetario (ej: $, €)
   - Nombre completo
   - País emisor
   - Número de decimales
4. Configura el formato:
   - Posición del símbolo
   - Separadores de miles y decimal
5. Establece la tasa de cambio base
6. Activa el toggle "Activo"
7. Haz clic en **"Guardar"**

## Actualizar Tasas de Cambio

:::info NOTA
Las tasas de cambio deben actualizarse regularmente para mantener la precisión en los cálculos de valor.
:::

---

**Volver a**: [Nomenclaturas - Introducción](/docs/nomenclaturas/intro)
