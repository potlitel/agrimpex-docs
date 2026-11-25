---
sidebar_position: 17
source_route: /logistic/documents/explorer
source_component: ExplorerPageComponent
status: vigente
---

# Explorador de documentos

## Propósito

Explora los expedientes documentales de BL y AWB.

## Acceso

- **Menú:** Logística → Explorador de documentos
- **Ruta directa:** `/logistic/documents/explorer`
- **Componente:** `ExplorerPageComponent`

> Ruta restringida a Administrador, Especialista, Especialista Principal y Gerente Comex.

## Captura

![explorador — captura real](/img/screenshots/logistica/contenedores/explorador.png)

*Captura tomada del backoffice Agrimpex.*

## Campos

| Campo | Descripción | Obligatorio |
|-------|-------------|-------------|
| No. BL | Número de conocimiento de embarque. | No |
| No. Manifiesto | Número de manifiesto. | No |
| Contenedor | Contenedor vinculado. | No |

## Acciones

| Acción | Botón | Rol | Ruta |
|--------|-------|-----|------|
| Buscar | Buscar | Administrador, Especialista, Logístico o Consultor | `/logistic/documents/explorer` |
| Seleccionar | Seleccionar | Administrador, Especialista, Logístico o Consultor | `/logistic/documents/explorer` |

## Filtros del listado

`/logistic/documents/explorer` está restringido por guard a los roles Administrador, Especialista, Especialista Principal y Gerente Comex; el resto de usuarios con acceso al módulo no puede abrirlo. No usa el panel **Filtrar** genérico: el control segmentado **Tipo** combina **Todos**, **Marítimo** (`bl`) y **Aéreo** (`awb`), y se complementa con **Año** —el actual y los cinco anteriores, u **Todos**— y **Estado** —**Activo**, **Eliminado**, **Archivado**—. El cuadro «Buscar expediente» admite BL, AWB, proveedor, embarcador o manifiesto, sugiere coincidencias a partir de dos caracteres y aplica la búsqueda con breve retardo. El botón **Nuevo Expediente** ofrece **Nuevo Expediente Marítimo**, que abre `/logistic/shipping-documents/add`, y **Nuevo Expediente Aéreo**, que abre `/logistic/airs-freights/add`; si ya hay un tipo seleccionado, abre directamente el formulario de ese tipo. Las tarjetas de indicadores resumen expedientes, marítimos, aéreos, sin documentos, con error, documentos y versiones, enlaces activos, actualizaciones recientes y espacio usado.

![Explorador de documentos — panel de búsqueda](/img/screenshots/logistica/contenedores/explorador-panel.png)

*Captura tomada del backoffice Agrimpex: controles de tipo, año, estado y búsqueda del explorador.*

![Explorador de documentos — resultados](/img/screenshots/logistica/contenedores/explorador-resultados.png)

*Captura tomada del backoffice Agrimpex: tabla de expedientes y tarjetas de indicadores.*
