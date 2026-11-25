---
sidebar_position: 2
source_route: /verification
source_component: VerificationPage
status: vigente
---

# Verificación de documentos

## Propósito

Valida un documento mediante su código CSV y muestra el resultado de la verificación.

## Acceso

- **Menú:** Seguridad → Verificación de documentos
- **Ruta directa:** `/verification`
- **Componente:** `VerificationPage`

> La versión pública corresponde a `/verify/:code` y no requiere autenticación.

## Captura

![verificar-documento — captura real](/img/screenshots/seguridad/verificar-documento.png)

*Captura tomada del backoffice Agrimpex.*

## Campos

| Campo | Descripción | Obligatorio |
|-------|-------------|-------------|
| Código | Código CSV introducido o recibido por ruta. | Sí |
| Tipo | Naturaleza del documento verificado. | No |
| Resultado | Estado de validez del documento. | No |

## Acciones

| Acción | Botón | Rol | Ruta |
|--------|-------|-----|------|
| Buscar | Buscar | Todo usuario autenticado | `/verification` |
| Copiar | Copiar | Todo usuario autenticado | `/verification` |
| Descargar | Descargar | Todo usuario autenticado | `/verification` |
| Imprimir | Imprimir | Todo usuario autenticado | `/verification` |
| Contactar | Contacto | Todo usuario autenticado | `/contact` |
