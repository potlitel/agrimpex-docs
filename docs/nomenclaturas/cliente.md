---
sidebar_position: 15
---

# Clientes 👥

## Descripción

El catálogo de **Clientes** contiene la información de todas las empresas o personas que reciben importaciones a través del sistema. Es fundamental para la gestión comercial, facturación y seguimiento de entregas.

## Acceso

- **Menú**: Nomenclaturas → Clientes
- **Ruta directa**: `/management/nomenclatures/client`

## User Stories Associadas

El catálogo de Clientes sigue el patrón CRUD estándar.

## Interfaz

### Listado de Clientes

![Listado de Clientes](/img/nomenclaturas/client-listado.png)

## Propósito

Este catálogo se utiliza en:
- Registro de importaciones
- Facturación
- Órdenes de entrega
- Reporting comercial

## Campos

| Campo | Obligatorio | Descripción |
|-------|-------------|-------------|
| NIT | Sí | Identificador tributario |
| Nombre | Sí | Nombre del cliente |
| Administrador | No | Nombre del administrador |
| Correo | No | Correo electrónico |
| Teléfono | No | Teléfono de contacto |
| Tipo Forma Gestión | Sí | Mipyme o TCP |

## Datos de Ejemplo

| NIT | Nombre | Administrador | Correo | Teléfono | Tipo Forma Gestión |
|-----|--------|---------------|--------|----------|-------------------|
| 678899999999 | MALPICA | Jose L. Rodriguez Rodriguez | joser@gmail.com | 55555555 | Mipyme |
| 532236895633 | CARBONEL VARGAS SURL | Angel Carbonel Díaz | carbonel@gmail.com | 51887458 | TCP |

---

## Tipos de Cliente

| Código | Tipo | Descripción |
|--------|------|-------------|
| EMPRESA | Empresa | Sociedad mercantil |
| GOBIERNO | Entidad Gubernamental | Organismo estatal |
| PERSONA | Persona Natural | Particular |
| COOPERATIVA | Cooperativa | Cooperativa productiva |

---

## Reglas de Negocio

- El NIT debe ser único
- El tipo de forma de gestión es requerido
- Solo clientes Activos aparecen en los listados

---

**Volver a**: [Nomenclaturas - Introducción](/docs/nomenclaturas/intro)
