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

## Uso de la verificación

La versión interna `/verification` está disponible para **todo usuario autenticado** (la ACL incluye `verification` entre las rutas comunes) y comparte servicio y contrato con la página pública.

1. **Entrada del CSV.** En *Código de verificación (CSV)* se escribe el Código Seguro de Verificación impreso en el sello del documento, por ejemplo `A1B2C3D4E5F6A7B8`. El campo admite de 8 a 64 caracteres alfanuméricos o guiones y se normaliza a mayúsculas.
2. **Búsqueda.** El botón **Verificar** envía la consulta y permanece deshabilitado mientras el campo está vacío. **Limpiar** restablece el formulario una vez introducido un código o realizada una consulta.
3. **Resultado.** Si el código es válido, se muestra una tarjeta con el estado *Documento auténtico* y secciones de identificación, vigencia, origen y destino, documentos de viaje, carga y datos verificados. El contenido es la proyección pública autorizada por el emisor, no información comercial sensible. Si el código no existe, fue alterado, se alcanza el límite de consultas o falla el servicio, aparece una alerta con el motivo en lugar de la tarjeta.
4. **Acciones del resultado.** Desde el pie de la tarjeta se puede **Copiar resumen**, **Descargar JSON**, **Imprimir**, **Copiar CSV**, abrir **Ver auditoría** en `/security/trace/list` y abrir la página pública. En los estados de error, el panel *¿Necesita ayuda?* ofrece **Contactar soporte** por correo e **Ir a contacto** a `/contact`.

La diferencia con `/verify/:code` es el acceso y el origen del código: la ruta pública queda fuera del layout autenticado y no exige sesión, y recibe el CSV como segmento de la URL para que un tercero pueda validarlo; `/verification` exige inicio de sesión y toma el CSV del campo de texto, aunque también admite `/verification/:code` como ruta de entrada. Ninguna de las dos consultas modifica el documento.

![Verificación de documentos — versión interna del backoffice Agrimpex](/img/screenshots/seguridad/verificar-documento-verificacion.png)

*Captura tomada del backoffice Agrimpex con el formulario de verificación interna en su estado inicial.*
