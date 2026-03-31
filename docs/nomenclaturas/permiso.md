---
sidebar_position: 8
---

# Tipos de Permiso

## Descripción

El catálogo de **Tipos de Permiso** define las diferentes categorías de permisos de importación requeridos por las autoridades aduaneras. Cada tipo de permiso tiene requisitos y trámites específicos.

## Acceso

- **Menú**: Nomenclaturas → Tipos de Permiso
- **Ruta directa**: `/management/nomenclatures/permit-type`

## Interfaz

### Listado de Tipos de Permiso

![Listado de Tipos de Permiso](/img/nomenclaturas/permit-type-listado.png)

## Propósito

Este catálogo se utiliza en:
- Clasificación de importaciones
- Trámites de desaduanaje
- Control de restricciones
- Reporting regulatorio

## Categorías de Permisos

### Permisos Generales
| Código | Nombre | Descripción |
|--------|--------|-------------|
| LIC | Licencia | Requiere licencia ministerial |
| REG | Registro | Requiere registro sanitario |
| CERT | Certificado | Requiere certificación especial |

### Permisos Especiales
| Código | Nombre | Descripción |
|--------|--------|-------------|
| FITO | Fitosanitario | Productos vegetales |
| SANI | Sanitario | Productos alimentarios |
| AMBI | Ambiental | Productos controlados |
| MILI | Militar | Material bélico |
| FARM | Farmacéutico | Medicamentos |

### Permisos de Transporte
| Código | Nombre | Descripción |
|--------|--------|-------------|
| BL | Bill of Lading | Documento de transporte |
| ATR | ATR | Autorización de transporte |

## Campos

| Campo | Tipo | Descripción |
|-------|------|-------------|
| Código | Texto | Identificador único del permiso |
| Nombre | Texto | Nombre descriptivo |
| Descripción | Texto | Detalles y requisitos |
| Categoría | Texto | Categoría del permiso |
| Autoridad | Texto | Organismo emisor |
| Vigencia | Número | Vigencia en días |
| Requiere Renovación | Booleano | Si requiere renovación periódica |
| Documentos Adjuntos | Lista | Documentos necesarios |
| Activo | Booleano | Si está disponible |

## Crear Tipo de Permiso

1. Accede al módulo de Tipos de Permiso
2. Haz clic en **"+ Agregar Tipo"**
3. Completa los campos:
   - Código identificador
   - Nombre descriptivo
   - Descripción de requisitos
   - Autoridad emissora
   - Vigencia en días
4. Especifica los documentos requeridos
5. Activa "Requiere Renovación" si aplica
6. Haz clic en **"Guardar"**

---

**Volver a**: [Nomenclaturas - Introducción](/docs/nomenclaturas/intro)
