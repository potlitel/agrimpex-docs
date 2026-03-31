---
sidebar_position: 3
---

# Países

## Descripción

El catálogo de **Países** contiene todos los países del mundo utilizados en el sistema para registrar información geográfica de proveedores, clientes, origen de importaciones y ubicaciones de operaciones.

## Acceso

- **Menú**: Nomenclaturas → Países
- **Ruta directa**: `/management/nomenclatures/country`

## Interfaz

### Listado de Países

![Listado de Países](/img/nomenclaturas/country-listado.png)

## Propósito

Este catálogo se utiliza en:
- Origen y destino de importaciones
- Datos de proveedores internacionales
- Datos de clientes
- Registro de operadores navieros
- Clasificación estadística

## Campos

| Campo | Tipo | Descripción |
|-------|------|-------------|
| Código ISO | Texto | Código de 2-3 letras (ISO 3166-1) |
| Nombre | Texto | Nombre oficial del país |
| Código Telefónico | Texto | Prefijo telefónico internacional |
| Zona | Texto | Zona geográfica (América, Europa, Asia, etc.) |
| Idioma Principal | Texto | Idioma oficial del país |
| Moneda Principal | Texto | Moneda oficial del país |
| Activo | Booleano | Si el país está disponible para usar |

## Crear País

1. Accede al módulo de Países
2. Haz clic en **"+ Agregar País"**
3. Completa los campos requeridos:
   - Ingresa el código ISO (ej: CU, US, ES)
   - Ingresa el nombre oficial completo
   - Selecciona la zona geográfica
   - Agrega el prefijo telefónico
4. Activa el toggle "Activo" si el país está operativo
5. Haz clic en **"Guardar"**

## Editar País

1. Busca el país en la tabla
2. Haz clic en el botón de edición
3. Modifica los campos necesarios
4. Guarda los cambios

## Eliminar País

:::danger ADVERTENCIA
No puedes eliminar un país que esté siendo utilizado en:
- Proveedores
- Clientes
- Operadores
- Historial de importaciones

Primero debes reasignar o eliminar los registros asociados.
:::

## Países Más Usados

| Código | País | Zona |
|--------|------|------|
| CU | Cuba | Caribe |
| US | Estados Unidos | Norteamérica |
| ES | España | Europa |
| CN | China | Asia |
| BR | Brasil | Sudamérica |
| MX | México | Norteamérica |

---

**Volver a**: [Nomenclaturas - Introducción](/docs/nomenclaturas/intro)
