# Tasks

## 1. Infraestructura de capturas

- [x] 1.1 Verificar que el API local (`127.0.0.1:8990`) y el frontend (`https://localhost:5000`) responden, que un bearer con rol de administrador es válido y que `/dashboard`, `/about`, `/contact`, `/privacy`, `/terms`, `/error/404`, `/error/500`, `/verify` y la ruta concreta `/verify/DEMO-CODE` cargan con la sesión inyectada, registrando el acceso real observado de las páginas informativas.
- [x] 1.2 Añadir a `scripts/docs-captures.json` las capturas de los nueve `docId` de Acerca del Sistema con sufijo, ruta concreta y `clickText`/`scrollY`/`waitFor` según corresponda; verificar que el JSON parsea, que los `docId` existen en `scripts/docs-inventory.json`, que ninguna ruta contiene `:` o `$`, que no hay duplicados y que las entradas previas no cambiaron respecto a `HEAD`.
- [x] 1.3 Ejecutar `scripts/capture-screenshots.js` en modo `extra` acotado a Acerca del Sistema y verificar que aparecen las PNG sufijadas nuevas, que los dos estados de error y las vistas compartidas de `/dashboard` son distinguibles y que las nueve PNG originales conservan su hash. El script no se modifica.
- [x] 1.4 Ampliar `scripts/check-doc-coverage.mjs` con los encabezados nuevos `Mapa del manual`, `Contenido y acceso`, `Códigos y recuperación`, `Estructura de la plantilla` y `Verificación pública`, y con la validación de las entradas nuevas del manifiesto; verificar que `npm run check:docs` falla al renombrar temporalmente una PNG del manifiesto y vuelve a pasar al restaurarla.

## 2. Mapa del manual

- [x] 2.1 Enriquecer `docs/intro.md` con `## Mapa del manual`; verificar que se describen las nueve áreas funcionales y 113 pantallas, que se propone un recorrido de lectura desde el acceso a los módulos operativos y que la sección muestra al menos dos capturas reales con leyenda de backoffice.

## 3. Páginas informativas y de pie

- [x] 3.1 Añadir `## Contenido y acceso` a `docs/core/about.md` y `docs/core/contact.md`; verificar que se documenta el contenido de cada página, su ruta, el acceso observado y los enlaces del pie, con captura real por página.
- [x] 3.2 Añadir `## Contenido y acceso` a `docs/core/privacy.md` y `docs/core/terms.md`; verificar que se documenta el contenido de cada página, su ruta, el acceso observado y los enlaces del pie, sin atribuir formularios ni acciones inexistentes, con captura real por página.

## 4. Páginas de error

- [x] 4.1 Añadir `## Códigos y recuperación` a `docs/core/errors.md`; verificar que se documentan los estados 404 y 500, la redirección de `/error` a `/error/404`, el mensaje y la acción **Regresar**, con captura real de ambos códigos.

## 5. Plantilla y componentes compartidos

- [x] 5.1 Añadir `## Estructura de la plantilla` a `docs/core/layout.md`; verificar que se documentan el menú lateral, la barra superior y las acciones globales del usuario, derivadas del componente y del i18n, con captura real diferenciable de `/dashboard`.
- [x] 5.2 Añadir `## Estructura de la plantilla` a `docs/core/template.md`; verificar que se documentan los componentes reutilizados y qué elementos son comunes o varían según el rol o el tema, sin presentarlos como páginas independientes, con captura real diferenciable.

## 6. Verificación pública

- [x] 6.1 Añadir `## Verificación pública` a `docs/core/verify.md`; verificar que se documenta la entrada del código CSV en `/verify/:code`, la ruta concreta de ejemplo `/verify/DEMO-CODE`, el resultado mostrado, la distinción con `/verification` y el acceso sin autenticación, con más de una captura real.

## 7. Verificación final

- [x] 7.1 Comprobar el carácter aditivo en las nueve páginas; verificar que el front matter, el H1 y las secciones Propósito, Acceso, Captura, Campos y Acciones son idénticos a los del commit anterior y que las secciones nuevas aparecen después de `## Acciones`; confirmar que esta sección no tiene páginas `unlisted`.
- [x] 7.2 Ejecutar `npm run check:docs` y `npm run build`; verificar que el inventario sigue teniendo 113 pantallas, que todas las imágenes referenciadas existen y que Docusaurus genera el sitio sin enlaces rotos.
- [x] 7.3 Revisar el sitio en `http://localhost:3003/docs/intro` y en `http://localhost:3003/docs/core/verify`; verificar visualmente el mapa del manual con más de una captura legible y la verificación pública con las secciones nuevas renderizadas.

## Workflow follow-up

- Archive the change after the project's review requirements are satisfied.
- Verify the archived result.
