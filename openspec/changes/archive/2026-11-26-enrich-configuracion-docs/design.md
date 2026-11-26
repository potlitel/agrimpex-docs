# Design

## Context

Ver `proposal.md` para la motivación y `specs/configuracion-reference/spec.md` para los requisitos. Restricciones observadas en el repositorio:

- `docs/configuracion/` tiene cuatro páginas canónicas con front matter, H1 y las secciones Propósito, Acceso, Captura, Campos y Acciones, más una captura `<docId>.png` por página. Ninguna tiene secciones adicionales ni páginas `unlisted` de migración.
- `/settings` carga `ConfigurationManagementPage`, un contenedor con `router-outlet`; la ruta vacía y la comodín redirigen a `form`. Por eso la página de índice se documenta como un mapa de destinos y no como una pantalla con controles propios.
- `/settings/form` está disponible para todo usuario autenticado. `CONFIG_TABS` define diez pestañas para administrador, en este orden: `general`, `sequences`, `operations`, `recomplus`, `import_permits`, `model_signatures`, `permission_matrix`, `verification`, `notifications` y `report_parameters`. Un usuario sin `ROLE_ADMIN` solo ve `notifications` y cualquier `?tab=` ajeno se reescribe a `?tab=notifications`. Notificaciones tiene dos subvistas: «Mis Preferencias» para todos y «Configuración de Roles» solo para administradores; con bearer de administrador, el deep link abre por defecto la subvista de roles.
- `/settings/recomplus-sync` y `/settings/origen-parte` declaran `canMatch` con `ROLE_ADMIN`. El primero filtra por recurso, estado y usuario disparador y abre un panel de detalle; el segundo reúne ocho secciones con opciones enumeradas y una prueba de conexión.
- `scripts/docs-captures.json`, `scripts/capture-screenshots.js` (modo `extra`) y `scripts/check-doc-coverage.mjs` ya existen y cubren clics por texto, desplazamiento vertical y horizontal y validación de manifiestos. El validador ya permite `Filtros del listado` y `Operaciones y estados`.

## Goals / Non-Goals

**Goals:**

- Añadir secciones nuevas a las cuatro páginas sin tocar una sola línea del contenido ya publicado.
- Documentar las diez pestañas del formulario con explicación extendida, captura real, rol y enlace profundo, sin añadir un H2 nuevo al documento.
- Derivar pestañas, filtros, secciones, opciones y roles de los componentes, el enrutador y el i18n español del frontend.
- Capturar los estados relevantes de cada sección con las capacidades existentes del script de capturas.
- Reutilizar el manifiesto y el validador, ampliando únicamente la lista de encabezados permitidos y las entradas nuevas.

**Non-Goals:**

- Modificar el frontend, sus rutas ni su internacionalización.
- Cambiar el número de pantallas, los `docId`, el sidebar ni las páginas `unlisted` (no hay en este módulo).
- Redactar las secciones publicadas en `HEAD` ni reemplazar las cuatro capturas originales del inventario; la captura de Notificaciones añadida por este change sí se recaptura para seleccionar «Mis Preferencias».
- Prometer resultados concretos de sincronizaciones, pruebas de conexión o configuraciones del parte.

## Decisions

### 1. Edición aditiva por bloque

Cada página se modifica únicamente insertando bloques nuevos después de `## Acciones`. El prefijo original se compara con `git show HEAD:<archivo>` antes y después para garantizar que no cambió.

- **Alternativa descartada**: regenerar páginas desde el inventario → contraviene la restricción de no modificar lo documentado y borraría las capturas publicadas.

### 2. Secciones nuevas con nombres fijos

| Página | Encabezados nuevos |
|--------|--------------------|
| Índice | `Mapa del módulo` |
| Formulario | `Pestañas y preferencias`, con una subsección `###` por cada una de las diez pestañas |
| Sincronización Recomplus | `Filtros del listado`, `Operaciones y estados` |
| Origen de parte | `Secciones de configuración` |

De estos, `Mapa del módulo`, `Pestañas y preferencias` y `Secciones de configuración` son nombres nuevos para `check-doc-coverage.mjs`; los demás ya están permitidos desde changes anteriores.

- **Alternativa descartada**: documentar los filtros dentro de la tabla Campos existente → mezclaría contenido nuevo con el publicado y rompería la verificación aditiva.

### 3. Fuente de verdad del frontend

Se leen únicamente el módulo `configuration`, sus rutas, plantillas, componentes, modelos de opciones y archivos `i18n`, además de los vocablos globales. Las rutas documentadas SHALL ser las declaradas en los enrutadores. Los roles se derivan de los guards `canMatch` y del ACL del segmento `settings`, que es común a todo usuario autenticado.

- **Alternativa descartada**: usar el inventario → no distingue las pestañas visibles por rol ni las ocho secciones del origen de parte.

### 4. Capturas sufijadas sobre el manifiesto existente

Se añaden entradas a `scripts/docs-captures.json` con `docId`, `suffix`, ruta concreta y, cuando haga falta, `clickText` o `scrollY`. El archivo resultante es `static/img/screenshots/<docId>-<sufijo>.png`; la PNG original nunca se sustituye. Las entradas de otros módulos no se modifican. La pestaña de notificaciones se captura con `/settings/form?tab=notifications`, ruta concreta que no contiene `:` ni `$`.

- **Alternativa descartada**: reutilizar las cuatro imágenes existentes → incumple el requisito de captura real por sección nueva y no muestra pestañas ni paneles.

### 5. Vistas dependientes del rol

Las capturas se toman con el bearer de administrador, por lo que el formulario puede mostrar también «Configuración de Roles». La documentación describe «Mis Preferencias» como la vista común y aclara que la matriz de roles solo aparece para administradores, sin afirmar que un usuario no administrador vea la misma pantalla.

- **Alternativa descartada**: capturar con un usuario sin rol de administrador → las dos subrutas restringidas no cargarían y el token disponible no garantizaría el acceso.

### 6. Validación extendida sin cambiar el inventario

`npm run check:docs` seguirá comprobando inventario, docs, sidebar y capturas; se ampliará con los tres encabezados nuevos, con la validación de las entradas nuevas del manifiesto y con el requisito de más de una captura en el mapa y de once capturas en el formulario (una por pestaña y dos para Notificaciones). El número de pantallas permanece en 113.

### 7. Sesión de captura

Se reutiliza la base HTTPS `https://localhost:5000`, el bearer con rol de administrador y el Chrome de la caché de Playwright. Todas las rutas requieren sesión (las dos subrutas, además, rol de administrador), por lo que se conserva la inyección de token del script. Para las pestañas nuevas se usan deep links `?tab=<id>` y `waitForText` con el texto del i18n, en lugar de depender de clics en pestañas desplazadas fuera del viewport. El volumen es reducido y no requiere particionar por lotes.

### 8. Una pestaña, una subsección y una captura

Dentro de `## Pestañas y preferencias` se añaden diez subsecciones `###`, una por pestaña, con: etiqueta visible, `data-tab`, deep link, rol, controles y su efecto, forma de guardado y una leyenda de captura. Notificaciones tiene dos capturas porque sus subvistas tienen permisos distintos. La pestaña `recomplus` se describe como parte del formulario y se distingue explícitamente de la ruta admin `/settings/recomplus-sync`.

- **Alternativa descartada**: un único H2 nuevo por pestaña → añadiría doce encabezados al validador y fragmentaría una sección que ya quedó publicada dentro de este mismo change.
- **Alternativa descartada**: una sola tabla resumen → no cumple la petición de explicaciones extendidas y ocultaría controles como los subtabs de Recomplus o los bloqueos por rol de Notificaciones.

## Risks / Trade-offs

- [Las etiquetas de pestañas y filtros pueden traducirse de otra forma] → verificar el texto real del i18n y ajustar `clickText` a la etiqueta observada.
- [Varios tabs quedan fuera del viewport y el menú «Tabs ocultos» duplica sus etiquetas] → usar deep links `?tab=<id>`, `waitForText` y selectores `button[data-tab]` en lugar de texto suelto.
- [El parámetro `?tab=` no se actualiza al hacer clic en otra pestaña] → documentarlo como enlace profundo inicial y no usar la URL para afirmar la pestaña activa tras interacciones.
- [Con bearer de administrador, `?tab=notifications` abre «Configuración de Roles»] → hacer clic explícito en `#notif-tab-mine` para la captura de «Mis Preferencias» y verificar el texto de ayuda esperado.
- [La vista del formulario depende del rol del usuario] → capturar con administrador y documentar explícitamente la diferencia para otros usuarios.
- [Los datos de Recomplus y del parte son volátiles] → no documentar estados ni resultados concretos como garantizados.
- [El panel de detalle puede no abrirse con un clic simple] → verificar la captura y, si hace falta, ajustar `clickText` sin modificar el script.
- [Cambio accidental de texto publicado] → verificar el prefijo inmutable de cada archivo antes de aceptar el enriquecimiento.

## Migration Plan

No hay migración de datos ni de rutas. La implementación consiste en añadir secciones a cuatro archivos Markdown —con diez subsecciones detalladas en el formulario—, cinco PNG nuevas, una recaptura de Notificaciones, entradas al manifiesto y la comprobación de once imágenes de pestañas en el validador. La reversión se logra revertiendo el commit; las cuatro capturas originales descritas en el inventario permanecen intactas.

## Open Questions

Ninguna. El alcance, los nombres de sección y los estados a capturar quedan fijados.
