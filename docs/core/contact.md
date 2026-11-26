---
sidebar_position: 3
source_route: /contact
source_component: ContactPage
status: vigente
---

# Contacto

## Propósito

Datos de contacto para soporte del sistema.

## Acceso

- **Menú:** Acerca del Sistema → Contacto
- **Ruta directa:** `/contact`
- **Componente:** `ContactPage`

## Captura

![contact — captura real](/img/screenshots/core/contact.png)

*Captura tomada del backoffice Agrimpex.*

## Campos

| Campo | Descripción | Obligatorio |
|-------|-------------|-------------|
| Correo electrónico | Canal de contacto. | No |

## Acciones

| Acción | Botón | Rol | Ruta |
|--------|-------|-----|------|
| Contactar | Enviar email | Público (sin autenticación) | `/contact` |


## Contenido y acceso

`ContactPage` organiza los canales oficiales en dos bloques informativos. La cabecera «Hablemos» indica que son canales para consultas comerciales, operativas y de soporte técnico. Cuatro tarjetas muestran el correo general `contacto@agrimpex.cu`, el teléfono `+53 7 000 0000`, la dirección «La Habana, Cuba» y el horario «Lun – Vie · 8:00 – 17:00». El bloque «Canales operativos» añade `soporte@agrimpex.cu` para soporte técnico, «Mariel y Santiago de Cuba (SCU)» como puertos operativos y `privacidad@agrimpex.cu` para asuntos de privacidad. La página es informativa: no incorpora un formulario ni un botón de envío propio.

La ruta declarada es `/contact` y se monta dentro de `LayoutPage` con el breadcrumb «Contacto». La sección **Acciones** publicada la describe como acceso público; la verificación local se hizo con la sesión de administrador inyectada y la ruta cargó correctamente, sin alterar el texto ya publicado. El pie de la plantilla ofrece «Acerca de» (`/about`), «Política de privacidad» (`/privacy`), «Términos de uso» (`/terms`) y «Contacto» (`/contact`), que conectan las cuatro páginas informativas.

![Contacto — canales oficiales de Agrimpex](/img/screenshots/core/contact-contenido.png)

*Captura tomada del backoffice Agrimpex: `/contact` con la sesión de administrador inyectada.*
