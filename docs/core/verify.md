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


## Verificación pública

La verificación pública consulta el Código Seguro de Verificación (CSV) impreso en el sello de un documento. `/verify` y `/verify/:code` se declaran fuera del layout autenticado y sin guardias: la inicialización de la aplicación omite la comprobación de sesión en las rutas que contienen `verify`, y el parámetro `:code` se enlaza como entrada del componente, por lo que al abrir la ruta concreta el código queda precargado y se consulta automáticamente. El formulario muestra «Verifique la autenticidad de su documento», la instrucción «Introduzca el Código Seguro de Verificación (CSV) que aparece en el sello del documento.», el campo «Código de verificación» con el ejemplo `Ej. A1B2C3D4E5F6A7B8` y el botón «Verificar», que materializa la acción **Buscar** de la sección **Acciones**.

| Ruta | Sesión | Resultado documentado |
|------|--------|-----------------------|
| `/verify` | No requerida | Formulario vacío para introducir el CSV y pulsar «Verificar». |
| `/verify/DEMO-CODE` | No requerida | Ejemplo concreto: el código se precarga y se consulta solo. |
| `/verification` y `/verification/:code` | Requerida | Verificación interna dentro de `LayoutPage`. |

Según el código, la página pública responde con «Documento auténtico» y las secciones «Información del documento» y «Datos verificados», o con los avisos «Código no encontrado», «Documento alterado», «Demasiadas solicitudes» y «No se pudo verificar». En el entorno local, `/verify/DEMO-CODE` devuelve «Código no encontrado — No existe un documento emitido con el código ingresado. Verifique el CSV e intente nuevamente.»; el código de ejemplo no garantiza un documento válido.

La diferencia con `/verification` es de alcance y de sesión: la ruta interna vive dentro del layout autenticado, usa las traducciones `VERIFICATION.*` y añade catálogo de tipos soportados, auditoría, copia del CSV y del resumen, descarga JSON, impresión y un enlace «Abrir /verify». Su entrada en el menú está reservada a `ROLE_ADMIN`, aunque la URL es accesible para cualquier usuario autenticado; la página pública, en cambio, no exige rol, usa su propia cabecera «AGRIMPEX — Verificación de documentos» y su pie solo muestra el copyright, sin los enlaces legales del layout.

![Verificación pública — formulario de entrada del CSV](/img/screenshots/core/verify-formulario.png)

*Captura tomada del backoffice Agrimpex: ruta pública `/verify`, campo de código y botón «Verificar».*

![Verificación pública — resultado de `/verify/DEMO-CODE`](/img/screenshots/core/verify-resultado.png)

*Captura tomada del backoffice Agrimpex: ruta concreta `/verify/DEMO-CODE` con el aviso «Código no encontrado».*
