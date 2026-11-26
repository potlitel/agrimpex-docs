---
sidebar_position: 2
source_route: /about
source_component: AboutPage
status: vigente
---

# Acerca de

## Propósito

Descripción institucional del sistema Agrimpex.

## Acceso

- **Menú:** Acerca del Sistema → Acerca de
- **Ruta directa:** `/about`
- **Componente:** `AboutPage`

## Captura

![about — captura real](/img/screenshots/core/about.png)

*Captura tomada del backoffice Agrimpex.*

## Campos

| Campo | Descripción | Obligatorio |
|-------|-------------|-------------|
| Producto | Agrimpex y su propósito. | No |

## Acciones

| Acción | Botón | Rol | Ruta |
|--------|-------|-----|------|
| Leer | Acceder | Público (sin autenticación) | `/about` |


## Contenido y acceso

`AboutPage` presenta el mapa operativo del sistema en tres bloques. La cabecera «Todo el comercio exterior en un solo lugar» resume el ciclo de importaciones —desde el arribo del buque hasta el despacho aduanero— y muestra cuatro indicadores: 7 estaciones del ciclo, 7 pilares del dominio, 13 entidades núcleo y 2 puertos (Mariel / SCU). El bloque «Ciclo de vida del contenedor» enumera siete etapas: Buque, Contenedor (Mariel/SCU), BL, Delivery Order, Extensiones, Permisos / Preliberaciones y Despacho aduanero. El bloque «Pilares del dominio» describe siete áreas —Comercio Exterior, Operaciones Terminal, Ciclo del Contenedor, Documental, Permisos & Calidad, Monitoreo & Reportes y Transversales— y cierra con «Cada movimiento deja huella», dedicado a la auditoría mediante `TraceSubscriber`, la sincronización Recomplus en cuatro fases y los archivos multimedia gestionados con Vich.

La ruta declarada en el enrutador es `/about`, montada dentro de `LayoutPage` con el breadcrumb «Acerca de». La sección **Acciones** publicada describe esta página como acceso público; la comprobación en el entorno local se realizó con la sesión de administrador inyectada y la página cargó correctamente, sin que esta adición modifique ese texto publicado. El pie de la plantilla enlaza «Acerca de» (`/about`), «Política de privacidad» (`/privacy`), «Términos de uso» (`/terms`) y «Contacto» (`/contact`), de modo que desde aquí se navega al resto de páginas informativas.

![Acerca de — mapa operativo del sistema](/img/screenshots/core/about-contenido.png)

*Captura tomada del backoffice Agrimpex: `/about` con la sesión de administrador inyectada.*
