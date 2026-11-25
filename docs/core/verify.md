---
sidebar_position: 9
source_route: /verify/:code
source_component: VerifyPage
status: vigente
---

# Verificación pública

## Propósito

Código público de verificación de documentos sin autenticación.

## Acceso

- **Menú:** Acerca del Sistema → Verificación pública
- **Ruta directa:** `/verify/:code`
- **Componente:** `VerifyPage`

## Captura

![verify — captura real](/img/screenshots/core/verify.png)

*Captura tomada del backoffice Agrimpex.*

## Campos

| Campo | Descripción | Obligatorio |
|-------|-------------|-------------|
| Código | Código CSV a verificar. | Sí |
| Resultado | Estado de validez. | No |

## Acciones

| Acción | Botón | Rol | Ruta |
|--------|-------|-----|------|
| Buscar | Buscar | Público (sin autenticación) | `/verify/:code` |
