# Design

## Context

Ver `proposal.md` para la motivación. Restricciones que determinan el enfoque:

- El frontend Angular vive en `../agrimpex-backoffice`, fuera de este repositorio; el cambio solo escribe en `agrimpex-docs`.
- `sidebars.js` declara hoy ocho categorías y seis documentos sueltos en la raíz (`notification/index`, `ai-assistant/index`, `reports/index`, `verification/index`, `calidad/index`, `configuration/index`, `user-profile/index`, `shared/index`).
- `docs/` contiene ~80 archivos, la mayoría nomenclaturas; `scripts/capture-screenshots.js` ya existe para capturas reales y depende de una sesión local autenticada.
- Docusaurus 3.9.2 deriva la URL pública del `id` del documento, por lo que mover un archivo cambia su URL.

## Goals / Non-Goals

**Goals:**

- Producir un inventario verificable módulo → pantalla → ruta → componente → documento.
- Dejar `sidebars.js` con exactamente nueve categorías de módulo, sin entradas sueltas.
- Dar a cada pantalla principal una página con la misma estructura y una captura real del backoffice, conservando un placeholder de respaldo para pantallas aún no capturadas.
- Conservar enlaces publicados mediante páginas de migración.

**Non-Goals:**

- Modificar el frontend, sus rutas o su internacionalización.
- Modificar el backend ni la configuración de autenticación del frontend para facilitar las capturas.
- Documentar cada combinación de parámetros CRUD; `add`/`edit` comparten página.
- Traducir el manual al inglés ni cambiar el tema visual de Docusaurus.

## Decisions

### 1. Fuente de verdad y inventario

Se genera `scripts/docs-inventory.json` con una entrada por pantalla principal:

```json
{
  "module": "seguridad",
  "docId": "seguridad/notificaciones",
  "label": "Notificaciones",
  "sourceRoute": "/logistic/notification/:entityType/:entityId",
  "sourceComponent": "NotificationEntityPageComponent",
  "canonical": true
}
```

`scripts/check-doc-coverage.mjs` valida que todo `docId` del inventario aparece una sola vez en `sidebars.js`, que el archivo existe y que su front matter declara `source_route` y `source_component`. Se añade `npm run check:docs` que ejecuta el script; se usa en la verificación antes de `npm run build`.

- **Alternativa descartada**: inventario solo en un Markdown de `docs/` → no es validable de forma automática y acabaría desactualizado.

### 2. Estructura de carpetas propuesta

```text
docs/
├── intro.md
├── autenticacion/
│   ├── index.md            # Panel de acceso
│   ├── login.md            # Inicio de sesión
│   ├── recuperar-clave.md  # /auth/forgot-password
│   └── nueva-clave.md      # /auth/new-password (nuevo)
├── administracion/
│   ├── index.md
│   ├── usuarios/listado.md
│   ├── usuarios/formulario.md          # alta + edición
│   ├── grupos/listado.md
│   ├── grupos/formulario.md
│   └── asistente-ia.md                 # reubicado desde ai-assistant/index
├── logistica/
│   ├── index.md
│   ├── importacion/dashboard.md
│   ├── importacion/mariel.md
│   ├── importacion/santiago.md
│   ├── importacion/no-devueltos.md
│   ├── importacion/extraidos.md
│   ├── importacion/recepcion-puerta.md
│   ├── importacion/logs.md
│   ├── control-importaciones.md
│   ├── contenedores/inventario-terminal.md
│   ├── contenedores/navegando.md
│   ├── contenedores/retorno.md
│   ├── contenedores/documentos.md      # documentos de embarque + explorador
│   ├── contenedores/trazabilidad.md
│   ├── entregas/listado.md
│   ├── entregas/formulario.md
│   ├── inbonds/listado.md
│   ├── inbonds/formulario.md
│   ├── solicitudes-extension/listado.md
│   ├── solicitudes-extension/formulario.md
│   └── reportes.md
├── nomenclaturas/
│   ├── index.md
│   └── <uno por nomenclador activo del routes.ts; ~38 archivos>
├── seguridad/
│   ├── index.md
│   ├── trazabilidad/listado.md
│   ├── trazabilidad/dashboard.md
│   ├── verificar-documento.md          # reubicado desde verification/index
│   └── notificaciones.md               # reubicado desde notification/index
├── reportes/
│   ├── index.md
│   ├── por-rango-fechas.md
│   ├── por-estado.md
│   ├── por-especialista.md
│   ├── monitorizacion.md
│   ├── prioridades-aduaneras.md
│   └── exportacion.md                  # todas las variantes arrived-*/price-*/trends-*
├── calidad/
│   ├── index.md
│   ├── permisos-importacion/cenasa.md
│   ├── permisos-importacion/fitosanitario.md
│   ├── permisos-importacion/inhem.md
│   ├── preliberaciones/salud.md
│   ├── preliberaciones/veterinario.md
│   └── preliberaciones/fitosanitario.md
├── configuracion/
│   ├── index.md
│   ├── formulario.md
│   ├── recomplus-sync.md
│   └── origen-parte.md
├── perfil/
│   ├── index.md
│   ├── preferencias.md
│   └── cambiar-clave.md
├── core/                                # soporte, al final del sidebar
└── shared/                              # referencia técnica, fuera del sidebar
```

### 3. Sidebar propuesto

```js
const sidebars = {
  docsSidebar: [
    { type: 'doc', id: 'intro', label: 'Introducción' },
    { type: 'category', label: 'Autenticación', items: [
      'autenticacion/index', 'autenticacion/login',
      'autenticacion/recuperar-clave', 'autenticacion/nueva-clave',
    ]},
    { type: 'category', label: 'Administración', items: [
      'administracion/index', 'administracion/usuarios/listado',
      'administracion/usuarios/formulario', 'administracion/grupos/listado',
      'administracion/grupos/formulario', 'administracion/asistente-ia',
    ]},
    { type: 'category', label: 'Logística', items: [ /* árbol logistica/ */ ]},
    { type: 'category', label: 'Nomenclaturas', items: [ /* árbol nomenclaturas/ */ ]},
    { type: 'category', label: 'Seguridad', items: [
      'seguridad/index', 'seguridad/verificar-documento',
      'seguridad/trazabilidad/listado', 'seguridad/trazabilidad/dashboard',
      'seguridad/notificaciones',
    ]},
    { type: 'category', label: 'Reportes', items: [ /* árbol reportes/ */ ]},
    { type: 'category', label: 'Calidad', items: [ /* árbol calidad/ */ ]},
    { type: 'category', label: 'Configuración', items: [ /* árbol configuracion/ */ ]},
    { type: 'category', label: 'Perfil', items: [ /* árbol perfil/ */ ]},
    { type: 'category', label: 'Acerca del Sistema', items: [ /* core/ */ ]},
  ],
};
```

`verification` se ubica en **Seguridad** porque es una función de cumplimiento, no un módulo propio; `shared/` queda fuera de la navegación principal y se conserva como referencia técnica.

### 4. Módulo canónico para pantallas duplicadas

`import-permits` y `preliberations` existen tanto en `logistic/routes.ts` como en `calidad/routes.ts`. El documento canónico SHALL vivir en **Calidad**, que es el grupo montado en `/calidad` con su propio `i18n`; Logística SHALL enlazar a esos documentos desde su índice en lugar de crear copias.

- **Alternativa descartada**: duplicar las páginas en ambos módulos → contradice el requisito de un único `id` por pantalla y multiplica el mantenimiento.

### 5. Plantilla de página y capturas

Toda página de pantalla usa este esqueleto, con `source_route` y `source_component` en el front matter:

```md
---
sidebar_position: 1
source_route: /ejemplo/list
source_component: EjemploListComponent
---

# Listado de Ejemplo

## Propósito
<!-- una línea -->

## Acceso
<!-- ruta y menú -->

## Captura

![Listado de Ejemplo — captura real](/img/screenshots/ejemplo/listado.png)

*Captura tomada del backoffice Agrimpex.*

## Campos

| Campo | Descripción | Obligatorio |
|-------|-------------|-------------|

## Acciones

| Acción | Botón | Rol | Ruta |
|--------|-------|-----|------|
```

`scripts/capture-screenshots.js` recorre el inventario con una sesión local autenticada, guarda `static/img/screenshots/<docId>.png` y reescribe la sección Captura de cada página. Las rutas con parámetros usan valores concretos de ejemplo definidos en el propio script. Se conserva un único `static/img/screenshots/placeholder.svg` como respaldo reutilizable para cualquier pantalla que aún no tenga captura, de modo que nunca haya enlaces rotos. `npm run check:docs` exige que, si existe el PNG real, la página lo referencie y no conserve la leyenda de pendiente.

### 6. Compatibilidad de URLs

Para cada documento reubicado se conserva un archivo en la ruta antigua con `unlisted: true` en el front matter y este contenido mínimo:

```md
---
unlisted: true
---

# Documento movido

Esta página se ha movido a **[<título>](</docs/<nueva-ruta>)**.
```

- **Alternativa descartada**: `@docusaurus/plugin-client-redirects` → añade dependencia y configuración nueva para un número pequeño de URLs.

### 7. Convenciones de `front matter` y encabezados

Claves permitidas: `sidebar_position`, `source_route`, `source_component`, `status` (`vigente` | `obsoleto`) y `unlisted` solo en páginas de migración. Un único H1 por archivo; H2 para Propósito, Acceso, Captura, Campos y Acciones; H3 para agrupaciones. La etiqueta del sidebar copia literalmente el H1.

## Risks / Trade-offs

- **Desfase entre repositorios** (el frontend cambia sin avisar) → inventario con ruta/componente y `npm run check:docs` en la verificación; si el frontend cambia, el inventario se actualiza en el mismo commit.
- **Volumen de nomenclaturas** (~38 páginas repetitivas) → generarlas desde una sola plantilla y revisarlas por lotes; no redactar contenido inventado cuando el `routes.ts` solo expone `list`.
- **Duplicidad Logística/Calidad** → módulo canónico declarado en el inventario y enlaces cruzados; se documenta en cada índice para evitar ambigüedad del lector.
- **Páginas de migración indexadas** → `unlisted: true` añade `noindex` en Docusaurus; se comprueba en el build.
- **Contenido heredado inexacto** (p. ej. "Nueva Importación" en `imports.md`) → cada página se contrasta con plantilla + i18n; lo que no exista se elimina o se marca `status: obsoleto`.
- **Cambio de `id` en enlaces internos** → buscar `/docs/` en todo `docs/` y actualizar los destinos antes del build.

## Migration Plan

1. Generar `scripts/docs-inventory.json` recorriendo `app.routes.ts` y los `routes.ts` de los módulos; fijar el módulo canónico de permisos y preliberaciones.
2. Crear las nueve carpetas y los archivos de migración (`unlisted: true`) para cada `id` antiguo.
3. Escribir o reescribir las páginas de pantalla según la plantilla, con el placeholder compartido.
4. Reemplazar `sidebars.js` por la estructura de nueve categorías; actualizar enlaces internos `/docs/*`.
5. Añadir `scripts/check-doc-coverage.mjs` y el script `check:docs` en `package.json`.
6. Verificar con `npm run check:docs` y `npm run build`; revisar que el sidebar no contenga documentos sueltos.
7. Rollback: revertir el commit; no hay cambios en datos ni servicios externos.
