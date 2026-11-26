# Tasks

## 1. Infraestructura de capturas

- [x] 1.1 Verificar que el API local (`127.0.0.1:8990`) y el frontend (`https://localhost:5000`) responden, que un bearer con rol de administrador es válido y que `/settings`, `/settings/form`, `/settings/form?tab=notifications`, `/settings/recomplus-sync` y `/settings/origen-parte` cargan con la sesión inyectada.
- [x] 1.2 Añadir a `scripts/docs-captures.json` las capturas de los cuatro `docId` de Configuración con sufijo, ruta concreta y `clickText`/`scrollY` según corresponda; verificar que el JSON parsea, que los `docId` existen en `scripts/docs-inventory.json`, que ninguna ruta contiene `:` o `$`, que no hay duplicados y que las entradas previas no cambiaron respecto a `HEAD`.
- [x] 1.3 Ejecutar `scripts/capture-screenshots.js` en modo `extra` acotado a Configuración y verificar que aparecen las PNG sufijadas nuevas, que el panel de filtros y las pestañas son visibles en las capturas correspondientes y que las cuatro PNG originales conservan su hash. El script no se modifica.
- [x] 1.4 Ampliar `scripts/check-doc-coverage.mjs` con los encabezados nuevos `Mapa del módulo`, `Pestañas y preferencias` y `Secciones de configuración`, y con la validación de las entradas nuevas del manifiesto; verificar que `npm run check:docs` falla al renombrar temporalmente una PNG del manifiesto y vuelve a pasar al restaurarla.

## 2. Mapa del módulo

- [x] 2.1 Enriquecer `docs/configuracion/index.md` con `## Mapa del módulo`, derivado de los enrutadores de configuración; verificar que se describen los tres destinos con ruta y rol, que se explica la redirección de `/settings` a `/settings/form`, que se identifican las dos subrutas restringidas a administrador y que la página muestra al menos dos capturas reales con leyenda de backoffice.

## 3. Formulario de configuración

- [x] 3.1 Añadir `## Pestañas y preferencias` a `docs/configuracion/formulario.md`; verificar que se documentan los parámetros de empresa, la secuencia de órdenes de entrega, el sello de verificación y el formato de importación, derivados del componente y del i18n, con captura real del formulario.
- [x] 3.2 Completar `## Pestañas y preferencias` con las preferencias de notificación; verificar que se distingue «Mis Preferencias» de «Configuración de Roles» según el rol, que se documenta el enlace profundo `/settings/form?tab=notifications` y que la sección muestra más de una captura real.

## 4. Sincronización Recomplus

- [x] 4.1 Añadir `## Filtros del listado` a `docs/configuracion/recomplus-sync.md`; verificar que se documentan recurso, estado de sincronización y usuario disparador, su control y efecto, y el rol de administrador que exige la ruta, con captura real del panel abierto.
- [x] 4.2 Añadir `## Operaciones y estados` a `docs/configuracion/recomplus-sync.md`; verificar que se documentan las columnas del historial, la búsqueda, la recarga y la apertura del panel de detalle sin prometer resultados concretos, con captura real de la tabla.

## 5. Origen de parte

- [x] 5.1 Añadir `## Secciones de configuración` a `docs/configuracion/origen-parte.md`; verificar que se documentan las ocho secciones (conexión, filtrado, adjuntos, límites, frecuencia, notificaciones, logging y reintentos), sus opciones, la prueba de conexión, el guardado y el rol de administrador, con captura real.

## 6. Verificación final

- [x] 6.1 Comprobar el carácter aditivo en las cuatro páginas; verificar que el front matter, el H1 y las secciones Propósito, Acceso, Captura, Campos y Acciones son idénticos a los del commit anterior y que las secciones nuevas aparecen después de `## Acciones`; confirmar que este módulo no tiene páginas `unlisted`.
- [x] 6.2 Ejecutar `npm run check:docs` y `npm run build`; verificar que el inventario sigue teniendo 113 pantallas, que todas las imágenes referenciadas existen y que Docusaurus genera el sitio sin enlaces rotos.
- [x] 6.3 Revisar el sitio en `http://localhost:3003/docs/configuracion/`; verificar visualmente el mapa con más de una captura legible y el formulario o el origen de parte con las secciones nuevas renderizadas.

## 7. Cobertura exhaustiva de las pestañas del formulario

- [x] 7.1 Añadir al manifiesto `scripts/docs-captures.json` cinco entradas nuevas de `configuracion/formulario` para `recomplus`, `permisos-importacion`, `firmas-modelos`, `matriz-permisos` y `parametros-reportes`, usando deep links `?tab=<id>` y `waitForText` del i18n, y corregir la entrada `notificaciones` con `clickText: "Mis Preferencias"`; verificar que el JSON parsea, que no hay sufijos duplicados, que las rutas no contienen `:` ni `$`, que los `docId` existen y que las entradas previas no cambian.
- [x] 7.2 Ejecutar `scripts/capture-screenshots.js` en modo `extra` acotado a `configuracion/formulario` y verificar que aparecen las cinco PNG nuevas, que `formulario-notificaciones.png` muestra «Mis Preferencias» y `formulario-preferencias-roles.png` muestra «Configuración de Roles», y que las cuatro PNG originales conservan su hash.
- [x] 7.3 Ampliar `docs/configuracion/formulario.md` con diez subsecciones `###` dentro de `Pestañas y preferencias`, una por pestaña, con etiqueta visible, `data-tab`, deep link, rol, controles, efecto, guardado, leyenda de captura y explicación extendida; verificar que el prefijo hasta `## Acciones` sigue idéntico a `HEAD` y que las once imágenes referenciadas existen.
- [x] 7.4 Ampliar `scripts/check-doc-coverage.mjs` para exigir once imágenes en la sección del formulario y comprobar que el manifiesto declara las diez pestañas; verificar que `npm run check:docs` falla al renombrar temporalmente una PNG de pestaña y vuelve a pasar al restaurarla.
- [x] 7.5 Repetir la verificación final: `npm run check:docs`, `npm run build` y revisión DOM en `http://localhost:3003/docs/configuracion/formulario` con las diez subsecciones y once imágenes cargadas; marcar entonces 6.2 y 6.3 como completas.

## Workflow follow-up

- Archive the change after the project's review requirements are satisfied.
- Verify the archived result.
