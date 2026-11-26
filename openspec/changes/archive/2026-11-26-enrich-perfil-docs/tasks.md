# Tasks

## 1. Infraestructura de capturas

- [x] 1.1 Verificar que el API local (`127.0.0.1:8990`) y el frontend (`https://localhost:5000`) responden, que un bearer con rol de administrador es válido y que `/profile`, `/profile/overview`, `/profile/preferences` y `/profile/change-password` cargan con la sesión inyectada.
- [x] 1.2 Añadir a `scripts/docs-captures.json` las capturas de los tres `docId` de Perfil con sufijo, ruta concreta y `clickText`/`scrollY` según corresponda; verificar que el JSON parsea, que los `docId` existen en `scripts/docs-inventory.json`, que ninguna ruta contiene `:` o `$`, que no hay duplicados y que las entradas previas no cambiaron respecto a `HEAD`.
- [x] 1.3 Ejecutar `scripts/capture-screenshots.js` en modo `extra` acotado a Perfil y verificar que aparecen las PNG sufijadas nuevas, que los destinos y los grupos de preferencias son visibles en las capturas correspondientes y que las tres PNG originales conservan su hash. El script no se modifica.
- [x] 1.4 Ampliar `scripts/check-doc-coverage.mjs` con los encabezados nuevos `Vista de perfil y widgets`, `Preferencias de visualización` y `Cambio de contraseña`, y con la validación de las entradas nuevas del manifiesto; verificar que `npm run check:docs` falla al renombrar temporalmente una PNG del manifiesto y vuelve a pasar al restaurarla.

## 2. Mapa del módulo

- [x] 2.1 Enriquecer `docs/perfil/index.md` con `## Mapa del módulo`, derivado del enrutador de perfil; verificar que se describen los tres destinos con ruta y rol, que se explica la redirección de `/profile` a `/profile/overview` y que la página muestra al menos dos capturas reales con leyenda de backoffice.

## 3. Vista de perfil

- [x] 3.1 Añadir `## Vista de perfil y widgets` a `docs/perfil/index.md`; verificar que se documentan los datos de identidad del usuario autenticado, los seis widgets comunes —Indicadores personales, Actividad y trazabilidad, Gráfico de contribución, Notificaciones, Configuración efectiva y Documentos y sellos— con campos, filtros, enlaces y estados, y los widgets condicionados por rol —especialización, permisos de calidad y embudo logístico— sin afirmar que todos los usuarios los ven, con captura real.

## 4. Preferencias

- [x] 4.1 Añadir `## Preferencias de visualización` a `docs/perfil/preferencias.md`; verificar que se documentan los tres grupos —preferencias de visualización, control de importaciones y prioridades aduaneras— con sus seis opciones, su efecto, el guardado inmediato sin botones **Guardar** ni **Cancelar**, y más de una captura real.

## 5. Cambio de contraseña

- [x] 5.1 Añadir `## Cambio de contraseña` a `docs/perfil/cambiar-clave.md`; verificar que se documentan contraseña actual y nueva sin campo de confirmación, las cinco reglas de complejidad, el panel de fortaleza, el error de contraseña actual incorrecta, el botón **Aceptar** frente a **Cancelar**, el acceso de cualquier usuario autenticado, y que la captura muestra el formulario vacío sin ejecutar el cambio.

## 6. Verificación final

- [x] 6.1 Comprobar el carácter aditivo en las tres páginas; verificar que el front matter, el H1 y las secciones Propósito, Acceso, Captura, Campos y Acciones son idénticos a los del commit anterior y que las secciones nuevas aparecen después de `## Acciones`; confirmar que este módulo no tiene páginas `unlisted`.
- [x] 6.2 Ejecutar `npm run check:docs` y `npm run build`; verificar que el inventario sigue teniendo 113 pantallas, que todas las imágenes referenciadas existen y que Docusaurus genera el sitio sin enlaces rotos.
- [x] 6.3 Revisar el sitio en `http://localhost:3003/docs/perfil/`; verificar visualmente el mapa con más de una captura legible y la página de preferencias o cambio de contraseña con las secciones nuevas renderizadas.

## Workflow follow-up

- Archive the change after the project's review requirements are satisfied.
- Verify the archived result.
