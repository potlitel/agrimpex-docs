# Tasks

## 1. Infraestructura de capturas

- [x] 1.1 Verificar que el API local (`127.0.0.1:8990`) y el frontend (`https://localhost:5000`) responden, que un bearer con rol de administrador es válido y que `/reports`, `/reports/days-range`, `/reports/monitoring`, `/reports/customs-priorities` y `/reports/arrived-enabled` cargan con la sesión inyectada.
- [x] 1.2 Añadir a `scripts/docs-captures.json` las capturas de los ocho `docId` de Reportes con sufijo, ruta concreta y `clickText`/`scrollY`/`scrollRight` según corresponda; verificar que el JSON parsea, que los `docId` existen en `scripts/docs-inventory.json`, que ninguna ruta contiene `:` o `$`, que no hay duplicados y que las entradas previas no cambiaron respecto a `HEAD`.
- [x] 1.3 Ejecutar `scripts/capture-screenshots.js` en modo `extra` acotado a Reportes y verificar que aparecen las PNG sufijadas nuevas, que el panel de filtros y la columna de acciones son visibles en las capturas correspondientes y que las ocho PNG originales conservan su hash. El script no se modifica.
- [x] 1.4 Ampliar `scripts/check-doc-coverage.mjs` con los encabezados nuevos `Mapa del módulo` y `Variantes de exportación`, y con la validación de las entradas nuevas del manifiesto; verificar que `npm run check:docs` falla al renombrar temporalmente una PNG del manifiesto y vuelve a pasar al restaurarla.
- [x] 1.5 Añadir al manifiesto 22 capturas adicionales: 7 condiciones de monitorización con `clickText` y 15 variantes de exportación con su ruta concreta; capturarlas en modo `extra` sin modificar el script y ampliar `check-doc-coverage.mjs` para exigir 7 y 15 subsecciones `###` con captura existente. Verificar que no hay rutas con `:` o `$`, duplicados ni cambios en entradas previas.

## 2. Mapa del módulo

- [x] 2.1 Enriquecer `docs/reportes/index.md` con `## Mapa del módulo`, derivado de los enrutadores de reportes; verificar que se describen los cuatro grupos con ruta y rol, que se explica la redirección de `/reports` a `/reports/days-range` y que la página muestra al menos dos capturas reales con leyenda de backoffice.
- [x] 2.2 Bajo la captura del panel de monitorización en el mapa, añadir texto explicativo y una tabla con los siete reportes de **Monitoreo de Contenedores**, enlazando cada uno a su subsección con captura en `docs/reportes/monitorizacion.md`; verificar los siete anclas en el sitio renderizado.

## 3. Reportes de listado

- [x] 3.1 Añadir `## Filtros del listado` y `## Operaciones y estados` a `docs/reportes/por-rango-fechas.md` y `docs/reportes/por-estado.md`; verificar que se documentan los filtros, las columnas, **Generar**, **Exportar Excel**, sus roles y rutas, con captura real por sección y sin cifras garantizadas.
- [x] 3.2 Añadir `## Filtros del listado` y `## Operaciones y estados` a `docs/reportes/por-especialista.md` y `docs/reportes/estado-por-especialista.md`; verificar que se documentan los filtros propios de cada reporte, las columnas y las acciones compartidas por `ReportsListComponent`, con captura real por sección.

## 4. Monitorización y prioridades aduaneras

- [x] 4.1 Añadir `## Interpretación del panel` a `docs/reportes/monitorizacion.md`; verificar que se documentan las condiciones operativas seguidas, sus indicadores y las acciones **Generar** y **Actualizar**, sin prometer valores concretos, con captura real del panel.
- [x] 4.2 Añadir `## Filtros del listado` y `## Operaciones y estados` a `docs/reportes/prioridades-aduaneras.md`; verificar que se documentan los filtros, el cálculo de estadía, la exportación y la restricción del guard `canMatch` a Administrador, Especialista, Logístico y Consultor, con captura real por sección.
- [x] 4.3 Añadir siete subsecciones `###` en `docs/reportes/monitorizacion.md`, una por condición operativa (24h sin Especialista, 48h en Trámite Aduana, 25 días sin extraer, Demora en Devolución (15 días), Habilitados no liberados, Almacenaje en Terminal y Habilitados sin extraer 72h), con criterio, indicador y una captura real de cada condición.

## 5. Exportación de reportes

- [x] 5.1 Añadir `## Variantes de exportación` a `docs/reportes/exportacion.md`; verificar que se documentan las variantes de arribos, precios, tendencias y alertas como opciones de `ExportReportsComponent` y no como páginas independientes, junto con formatos, rango de fechas y columnas, con captura real.
- [x] 5.2 Añadir quince subsecciones `###` en `docs/reportes/exportacion.md`, una por variante declarada en el enrutador (cinco de arribos, cuatro de precios, precita, dos de alertas y tres de tendencias), con ruta, columnas, rango de fechas y una captura real de cada variante.

## 6. Verificación final

- [x] 6.1 Comprobar el carácter aditivo en las ocho páginas; verificar que el front matter, el H1 y las secciones Propósito, Acceso, Captura, Campos y Acciones son idénticos a los del commit anterior y que las secciones nuevas aparecen después de `## Acciones`; confirmar que este módulo no tiene páginas `unlisted`.
- [x] 6.2 Ejecutar `npm run check:docs` y `npm run build`; verificar que el inventario sigue teniendo 113 pantallas, que todas las imágenes referenciadas existen y que Docusaurus genera el sitio sin enlaces rotos.
- [x] 6.3 Revisar el sitio en `http://localhost:3003/docs/reportes/`; verificar visualmente el mapa con más de una captura legible y una página de reporte o exportación con las secciones nuevas renderizadas.
- [x] 6.4 Verificar la cobertura exhaustiva: ejecutar `npm run check:docs` y `npm run build` con las 22 capturas nuevas, confirmar que el inventario sigue en 113 pantallas, que las siete condiciones y las quince variantes tienen subsección y captura, y revisar en `http://localhost:3003/docs/reportes/monitorizacion` y `/docs/reportes/exportacion` que todas las subsecciones renderizan su imagen.

## Workflow follow-up

- Archive the change after the project's review requirements are satisfied.
- Verify the archived result.
