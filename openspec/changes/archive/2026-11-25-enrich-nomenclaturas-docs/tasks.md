# Tasks

## 1. Infraestructura de capturas

- [x] 1.1 Verificar que el API local (`127.0.0.1:8990`) y el frontend (`https://localhost:5000`) responden, que un bearer con rol de administrador o especialista es válido y que `/management/nomenclatures`, un listado con panel de filtros, un formulario compartido y el listado de solo lectura cargan con la sesión inyectada.
- [x] 1.2 Añadir a `scripts/docs-captures.json` las capturas de los 34 `docId` de Nomenclaturas con sufijo, ruta concreta y `clickText`/`scrollY`/`scrollRight` según corresponda; verificar que el JSON parsea, que los `docId` existen en `scripts/docs-inventory.json`, que ninguna ruta contiene `:` o `$`, que no hay duplicados y que las entradas previas no cambiaron respecto a `HEAD`.
- [x] 1.3 Ejecutar `scripts/capture-screenshots.js` en modo `extra` acotado a Nomenclaturas por grupos y verificar que aparecen las PNG sufijadas nuevas, que el panel de filtros y la columna de acciones son visibles en las capturas correspondientes y que las 34 PNG originales conservan su hash. El script no se modifica.
- [x] 1.4 Ampliar `scripts/check-doc-coverage.mjs` con los encabezados nuevos `Mapa del módulo` y `Excepciones del nomenclador`, y con la validación de las entradas nuevas del manifiesto; verificar que `npm run check:docs` falla al renombrar temporalmente una PNG del manifiesto y vuelve a pasar al restaurarla.

## 2. Mapa del módulo

- [x] 2.1 Enriquecer `docs/nomenclaturas/index.md` con `## Mapa del módulo`, derivado de los enrutadores de nomencladores; verificar que se describen los cuatro grupos con ruta y rol, que se explica la redirección de las raíces a `list` y que la página muestra al menos dos capturas reales con leyenda de backoffice.

## 3. Nomencladores básicos y de estado (12 páginas)

- [x] 3.1 Enriquecer `docs/nomenclaturas/moneda.md`, `permiso.md`, `contenedor-tipo.md` y `area.md` con `## Filtros del listado` y `## Operaciones y estados`; verificar que se documentan los controles, las columnas, las acciones y sus roles derivados del componente, con captura real por sección.
- [x] 3.2 Enriquecer `docs/nomenclaturas/cargo.md`, `pais.md`, `condado.md` y `estado.md` con las mismas dos secciones; verificar que se documentan búsqueda, panel **Filtrar** cuando exista, alta, edición con `id` por parámetro de consulta y eliminación, con captura real por sección.
- [x] 3.3 Enriquecer `docs/nomenclaturas/contenedor-estado.md`, `operador.md`, `carga.md` y `planta.md` con las mismas dos secciones y, en los que declaren formulario propio, con `## Formulario (alta y edición)`; verificar que se documentan los campos y validaciones específicos frente al formulario genérico, con captura real.

## 4. Nomencladores logísticos y comerciales (12 páginas)

- [x] 4.1 Enriquecer `docs/nomenclaturas/producto.md`, `sap.md`, `contract.md` y `oferta.md` con `## Filtros del listado`, `## Operaciones y estados` y `## Formulario (alta y edición)` cuando exista; verificar que se documentan filtros, columnas, roles y campos propios, con captura real por sección.
- [x] 4.2 Enriquecer `docs/nomenclaturas/cliente.md`, `proveedor.md`, `gestion.md` y `product-line.md` con las mismas secciones; verificar que se documentan las relaciones dependientes del formulario, la edición por parámetro de consulta y las validaciones, con captura real por sección.
- [x] 4.3 Enriquecer `docs/nomenclaturas/product-origin.md`, `port.md`, `shipper.md` y `airline.md` con las mismas secciones; verificar que se documentan los campos específicos de cada nomenclador y que no se repite texto genérico, con captura real por sección.

## 5. Nomencladores de apoyo (nueve páginas)

- [x] 5.1 Enriquecer `docs/nomenclaturas/airport.md`, `ship.md` y `download-address.md` con `## Filtros del listado`, `## Operaciones y estados` y `## Formulario (alta y edición)`; verificar que se documentan sus campos propios y validaciones, con captura real por sección.
- [x] 5.2 Enriquecer `docs/nomenclaturas/solicitud-compra.md` con `## Filtros del listado`, `## Operaciones y estados` y `## Excepciones del nomenclador`; verificar que se declara explícitamente que el frontend expone solo el listado y que no se atribuyen acciones inexistentes, con captura real.
- [x] 5.3 Enriquecer `docs/nomenclaturas/manufacturer.md`, `brand.md`, `unit-of-measure.md`, `categoria.md` y `margen-comercial.md` con las secciones correspondientes; verificar que se documentan filtros, operaciones y campos del formulario compartido, con captura real por sección.

## 6. Verificación final

- [x] 6.1 Comprobar el carácter aditivo en las 34 páginas; verificar que el front matter, el H1 y las secciones Propósito, Acceso, Captura, Campos y Acciones son idénticos a los del commit anterior, que las secciones nuevas aparecen después de `## Acciones` y que las siete páginas `unlisted` no cambiaron.
- [x] 6.2 Ejecutar `npm run check:docs` y `npm run build`; verificar que el inventario sigue teniendo 113 pantallas, que todas las imágenes referenciadas existen y que Docusaurus genera el sitio sin enlaces rotos.
- [x] 6.3 Revisar el sitio en `http://localhost:3003/docs/nomenclaturas/`; verificar visualmente el mapa con más de una captura legible y dos listados de grupos distintos con las secciones nuevas renderizadas.

## Workflow follow-up

- Archive the change after the project's review requirements are satisfied.
- Verify the archived result.
