# Tasks

## 1. Infraestructura de capturas

- [x] 1.1 Verificar que el API local (`127.0.0.1:8990`) y el frontend (`https://localhost:5000`) responden, que un bearer con rol de administrador es válido y que `/security/trace/list`, `/security/trace/dashboard`, `/verification` y la ruta concreta `/logistic/notification/BL/BL-1` cargan con la sesión inyectada.
- [x] 1.2 Añadir a `scripts/docs-captures.json` las capturas de los cinco `docId` de Seguridad con sufijo, ruta concreta y `clickText`/`scrollY`/`scrollRight` según corresponda; verificar que el JSON parsea, que los `docId` existen en `scripts/docs-inventory.json`, que ninguna ruta contiene `:` o `$`, que no hay duplicados y que las entradas previas no cambiaron respecto a `HEAD`.
- [x] 1.3 Ejecutar `scripts/capture-screenshots.js` en modo `extra` acotado a Seguridad y verificar que aparecen las PNG sufijadas nuevas, que el panel de filtros y la columna de acciones son visibles en las capturas correspondientes y que las cinco PNG originales conservan su hash. El script no se modifica.
- [x] 1.4 Ampliar `scripts/check-doc-coverage.mjs` con los encabezados nuevos `Mapa del módulo`, `Uso de la verificación` y `Detalle de la notificación`, y con la validación de las entradas nuevas del manifiesto; verificar que `npm run check:docs` falla al renombrar temporalmente una PNG del manifiesto y vuelve a pasar al restaurarla.

## 2. Mapa del módulo

- [x] 2.1 Enriquecer `docs/seguridad/index.md` con `## Mapa del módulo`, derivado de los enrutadores de trazabilidad, verificación y notificaciones; verificar que se describen los tres destinos con ruta y rol, que se explica la redirección de `/security/trace` al listado, que la ruta de notificaciones usa valores concretos de ejemplo y que la página muestra al menos dos capturas reales con leyenda de backoffice.

## 3. Trazabilidad

- [x] 3.1 Añadir `## Filtros del listado` a `docs/seguridad/trazabilidad/listado.md` desde `trace-list.component.html/.ts`; verificar que se documentan usuario, rol, rango de fechas, módulo, acción, clase e identificador de entidad y correlación, su control y efecto, con captura real del panel abierto.
- [x] 3.2 Añadir `## Operaciones y estados` a `docs/seguridad/trazabilidad/listado.md`; verificar que se documentan búsqueda, recarga y apertura del diálogo de diferencias, los roles y la ausencia de operaciones de escritura, con captura real de la tabla y sus acciones.
- [x] 3.3 Añadir `## Interpretación del panel` a `docs/seguridad/trazabilidad/dashboard.md`; verificar que se documentan los indicadores agregados y su significado sin prometer cifras concretas, con captura real del panel.

## 4. Verificación de documentos

- [x] 4.1 Añadir `## Uso de la verificación` a `docs/seguridad/verificar-documento.md`; verificar que se documentan la entrada del código CSV, la búsqueda, el resultado, las acciones de copiar, descargar, imprimir y contactar, la distinción con `/verify/:code` y el rol requerido, con captura real de la versión interna.

## 5. Notificaciones

- [x] 5.1 Añadir `## Detalle de la notificación` a `docs/seguridad/notificaciones.md`; verificar que se documentan severidad, estado de lectura, fecha relativa, tipo y mensaje, el acceso a la traza y a la vista completa, y el uso de la ruta concreta `/logistic/notification/BL/BL-1` en lugar del patrón con parámetros, con captura real.

## 6. Verificación final

- [x] 6.1 Comprobar el carácter aditivo en las cinco páginas; verificar que el front matter, el H1 y las secciones Propósito, Acceso, Captura, Campos y Acciones son idénticos a los del commit anterior, que las secciones nuevas aparecen después de `## Acciones` y que la página `unlisted` no cambió.
- [x] 6.2 Ejecutar `npm run check:docs` y `npm run build`; verificar que el inventario sigue teniendo 113 pantallas, que todas las imágenes referenciadas existen y que Docusaurus genera el sitio sin enlaces rotos.
- [x] 6.3 Revisar el sitio en `http://localhost:3003/docs/seguridad/`; verificar visualmente el mapa con más de una captura legible y una página de trazabilidad o verificación con las secciones nuevas renderizadas.

## Workflow follow-up

- Archive the change after the project's review requirements are satisfied.
- Verify the archived result.
