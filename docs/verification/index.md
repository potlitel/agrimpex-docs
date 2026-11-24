---
sidebar_position: 1
---

# Verificación de Documentos

## Descripción

El sistema Agrimpex permite verificar documentos de importación mediante un código de verificación (verificación de documentos). Este módulo está dividido en dos partes:

- **Verificación pública:** página pública donde cualquier persona puede validar un CSV de verificación
- **Verificación interna:** módulo dentro del sistema (backoffice) para verificación de documentos en el flujo autenticado

## Verificación Pública

Permite a cualquier persona con un código de verificación consultar el estado de un documento de importación sin necesidad de iniciar sesión.

### Acceso

1. Ruta directa: `/verify`
2. Ingresa el código de verificación del documento

### Flujo

1. Ingresa el código de verificación proporcionado
2. El sistema valida el código
3. Se muestra el estado del documento verificado

:::info
La verificación pública es útil para validar documentos entregados por proveedores o interlocutores sin acceso al sistema interno.
:::

## Verificación Interna (Backoffice)

Dentro del sistema autenticado, el módulo de verificación de documentos permite:

- Verificar documentos mediante códigos de verificación en el flujo del sistema
- Seguimiento de verificaciones realizadas por el personal autorizado

## Componentes Compartidos

El servicio de verificación de documentos y el modelo de verificación están implementados de forma compartida entre la página pública y el módulo interno.
