---
sidebar_position: 4
source_route: /privacy
source_component: PrivacyPage
status: vigente
---

# Política de privacidad

## Propósito

Política de privacidad del sistema.

## Acceso

- **Menú:** Acerca del Sistema → Política de privacidad
- **Ruta directa:** `/privacy`
- **Componente:** `PrivacyPage`

## Captura

![privacy — captura real](/img/screenshots/core/privacy.png)

*Captura tomada del backoffice Agrimpex.*

## Campos

| Campo | Descripción | Obligatorio |
|-------|-------------|-------------|
| Política | Texto de la política de privacidad. | No |

## Acciones

| Acción | Botón | Rol | Ruta |
|--------|-------|-----|------|
| Leer | Acceder | Público (sin autenticación) | `/privacy` |


## Contenido y acceso

`PrivacyPage` muestra la política de privacidad como un documento de lectura. La cabecera «Política de privacidad» explica cómo se recopila, usa y protege la información personal gestionada por el sistema, y un aviso advierte que la razón social, los datos de contacto y las referencias legales son provisionales y deben revisarse antes de su publicación. El cuerpo, bajo «Disposiciones generales», consta de diez apartados numerados: Responsable del tratamiento, Datos personales que procesamos, Finalidades del tratamiento, Base legal, Conservación de los datos, Destinatarios y transferencias, Derechos de los interesados, Cookies, Seguridad de la información y Contacto. Los apartados segundo y tercero detallan, respectivamente, los datos de usuarios, proveedores, clientes y documentación de importaciones, y las finalidades de gestión, trazabilidad y cumplimiento legal. La página no contiene formularios ni acciones de aceptación.

La ruta declarada es `/privacy`, dentro de `LayoutPage`, con el breadcrumb «Política de privacidad». La sección **Acciones** publicada la describe como acceso público; en el entorno local se comprobó con la sesión de administrador inyectada y la ruta cargó correctamente, sin modificar el texto publicado. El pie de la plantilla enlaza «Acerca de» (`/about`), «Política de privacidad» (`/privacy`), «Términos de uso» (`/terms`) y «Contacto» (`/contact`) para navegar entre las páginas informativas.

![Política de privacidad — documento de referencia](/img/screenshots/core/privacy-contenido.png)

*Captura tomada del backoffice Agrimpex: `/privacy` con la sesión de administrador inyectada.*
