---
sidebar_position: 5
source_route: /terms
source_component: TermsPage
status: vigente
---

# Términos de uso

## Propósito

Términos de uso del sistema.

## Acceso

- **Menú:** Acerca del Sistema → Términos de uso
- **Ruta directa:** `/terms`
- **Componente:** `TermsPage`

## Captura

![terms — captura real](/img/screenshots/core/terms.png)

*Captura tomada del backoffice Agrimpex.*

## Campos

| Campo | Descripción | Obligatorio |
|-------|-------------|-------------|
| Términos | Texto de los términos de uso. | No |

## Acciones

| Acción | Botón | Rol | Ruta |
|--------|-------|-----|------|
| Leer | Acceder | Público (sin autenticación) | `/terms` |


## Contenido y acceso

`TermsPage` presenta los términos de uso como un documento de lectura. La cabecera «Términos de uso» describe las condiciones de acceso al sistema y un aviso señala que las cláusulas son genéricas y deben ser revisadas por el equipo legal antes de su publicación. El cuerpo, titulado «Normas de uso del sistema», comienza con la aceptación implícita de los términos y se organiza en nueve apartados: Aceptación de los términos, Acceso y credenciales, Uso permitido, Licencia de uso del software, Confidencialidad, Propiedad intelectual, Limitación de responsabilidad, Modificaciones y Legislación aplicable. El apartado de licencia enumera tres prohibiciones: copiar, distribuir, revender o sublicenciar el sistema; realizar ingeniería inversa, descompilación o modificación del código; y usarlo fuera del ámbito de la organización. La página no ofrece formularios ni acciones de aceptación.

La ruta declarada es `/terms`, montada dentro de `LayoutPage`, con el breadcrumb «Términos de uso». La sección **Acciones** publicada la describe como acceso público; la comprobación local se realizó con la sesión de administrador inyectada y la página cargó correctamente, conservando el texto publicado. El pie de la plantilla enlaza «Acerca de» (`/about`), «Política de privacidad» (`/privacy`), «Términos de uso» (`/terms`) y «Contacto» (`/contact`), que permiten pasar de una página informativa a otra.

![Términos de uso — normas de uso del sistema](/img/screenshots/core/terms-contenido.png)

*Captura tomada del backoffice Agrimpex: `/terms` con la sesión de administrador inyectada.*
