# Tasks

## 1. Infraestructura de capturas

- [x] 1.1 Verificar que el API local (`127.0.0.1:8990`) y el frontend (`https://localhost:5000`) responden, que un bearer con rol de administrador es válido y que `/logistic`, `/logistic/import`, `/logistic/terminal-inventory`, un listado CRUD, su formulario y `/logistic/reports` cargan con la sesión inyectada.
- [x] 1.2 Añadir a `scripts/docs-captures.json` las capturas de los 33 `docId` de Logística con sufijo, ruta concreta y `clickText`/`scrollY`/`scrollRight`/`waitFor` según corresponda; verificar que el JSON parsea, que los `docId` existen en `scripts/docs-inventory.json`, que ninguna ruta contiene `:` o `$`, que no hay duplicados y que las entradas previas no cambiaron respecto a `HEAD`.
- [x] 1.3 Ejecutar `scripts/capture-screenshots.js` en modo `extra` acotado a Logística por grupos y verificar que aparecen las PNG sufijadas nuevas, que los paneles de filtros, la columna de acciones y los gráficos son visibles en las capturas correspondientes y que las 33 PNG originales conservan su hash. El script no se modifica.
- [x] 1.4 Ampliar `scripts/check-doc-coverage.mjs` con los encabezados nuevos `Mapa del módulo`, `Operaciones y estados`, `Control y trazabilidad`, `Columnas y resultados` y `Generación y exportación`, y con la validación de las entradas nuevas del manifiesto; verificar que `npm run check:docs` falla al renombrar temporalmente una PNG del manifiesto y vuelve a pasar al restaurarla.

## 2. Mapa del módulo

- [x] 2.1 Enriquecer `docs/logistica/index.md` con `## Mapa del módulo`, derivado de los enrutadores de importación, contenedores, operaciones CRUD y reportes; verificar que se describen los cuatro grupos con ruta y rol, que se explican las redirecciones de las rutas vacías a `list` y que la página muestra al menos dos capturas reales con leyenda de backoffice.

## 3. Importación (nueve páginas)

- [x] 3.1 Enriquecer `docs/logistica/importacion/dashboard.md` y `docs/logistica/importacion/estadisticas.md` con `## Interpretación del panel`; verificar que se documentan las series y los indicadores visibles sin prometer valores concretos, con captura real de cada panel.
- [x] 3.2 Enriquecer `docs/logistica/importacion/mariel.md`, `santiago.md`, `no-devueltos.md`, `extraidos.md` y `excluidos.md` con `## Filtros del listado` y `## Columnas y resultados`; verificar que se enumeran controles, columnas y acciones observables, con captura real del panel o de la tabla.
- [x] 3.3 Enriquecer `docs/logistica/importacion/recepcion-puerta.md` y `docs/logistica/importacion/logs.md` con `## Operaciones y estados`; verificar que se documentan la recepción, los estados y la consulta de logs con su rol y ruta, con captura real.

## 4. Control y contenedores (diez páginas)

- [x] 4.1 Enriquecer `docs/logistica/control-importaciones.md`, `contenedores/inventario-terminal.md`, `contenedores/navegando.md` y `contenedores/retorno.md` con `## Control y trazabilidad`; verificar que se documenta qué consulta cada vista, su terminal activa, sus filtros y la navegación al detalle, con captura real.
- [x] 4.2 Enriquecer `docs/logistica/contenedores/documentos.md`, `documentos-formulario.md`, `explorador.md` y `trazabilidad.md` con `## Filtros del listado` y, en el formulario, `## Formulario (alta y edición)`; verificar que se documentan búsqueda, expedientes, pestañas, campos y validaciones, con captura real de cada estado.
- [x] 4.3 Enriquecer `docs/logistica/contenedores/extracciones-diarias.md` y `contenedores/extraidos.md` con `## Filtros del listado` y `## Operaciones y estados`; verificar que se documentan el rango de fechas, las acciones disponibles y su rol, con captura real.

## 5. Operaciones CRUD (doce páginas)

- [x] 5.1 Enriquecer los listado y formulario de entregas e inbonds (`docs/logistica/entregas/`, `docs/logistica/inbonds/`) con `## Filtros del listado`, `## Operaciones y estados` y `## Formulario (alta y edición)`; verificar que se documentan filtros, rol y ruta de edición, campos obligatorios y validaciones, con captura real por sección.
- [x] 5.2 Enriquecer los listado y formulario de solicitudes de extensión y desaduane (`docs/logistica/solicitudes-extension/`, `docs/logistica/desaduanes/`) con las mismas tres secciones; verificar que se documentan los estados del trámite, la restricción por estado, `edit/:id` frente a `id` por parámetro de consulta y las validaciones de fechas y números, con captura real por sección.
- [x] 5.3 Enriquecer los listado y formulario de especialistas y fletes aéreos (`docs/logistica/especialistas/`, `docs/logistica/fletes-aereos/`) con las mismas tres secciones; verificar que se documentan filtros, roles, campos y validaciones, y que se distingue el formulario compartido por `add` y `edit`, con captura real por sección.

## 6. Reportes

- [x] 6.1 Enriquecer `docs/logistica/reportes.md` con `## Generación y exportación`; verificar que se documentan el tipo de reporte, el rango de fechas de arribo, el rol, la generación y la exportación sin prometer un archivo concreto, con captura real.

## 7. Verificación final

- [x] 7.1 Comprobar el carácter aditivo en las 33 páginas; verificar que el front matter, el H1 y las secciones Propósito, Acceso, Captura, Campos y Acciones son idénticos a los del commit anterior, que las secciones nuevas aparecen después de `## Acciones` y que las 12 páginas `unlisted` no cambiaron.
- [x] 7.2 Ejecutar `npm run check:docs` y `npm run build`; verificar que el inventario sigue teniendo 113 pantallas, que todas las imágenes referenciadas existen y que Docusaurus genera el sitio sin enlaces rotos.
- [x] 7.3 Revisar el sitio en `http://localhost:3003/docs/logistica/`; verificar visualmente el mapa con más de una captura legible y dos páginas de grupos distintos con las secciones nuevas renderizadas.

## Workflow follow-up

- Archive the change after the project's review requirements are satisfied.
- Verify the archived result.
