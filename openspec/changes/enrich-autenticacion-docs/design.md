# Design

## Context

Ver `proposal.md` para la motivación y `specs/autenticacion-reference/spec.md` para los requisitos. Restricciones observadas en el repositorio:

- `docs/autenticacion/` tiene cuatro páginas vigentes (`index`, `login`, `recuperar-clave`, `nueva-clave`) con front matter, H1 y las secciones Propósito, Acceso, Captura, Campos y Acciones, además de una captura `<docId>.png` por página.
- El módulo `../agrimpex-backoffice/src/app/modules/auth/` contiene la página contenedora `auth.page.html`, tres componentes de formulario, el modal legal y el enrutador `routes.ts` con `login`, `forgot-password` y `new-password`; la ruta vacía y el comodín redirigen a `login`.
- Los textos visibles están en `i18n/locale.ts` (`AUTH_LOCALE_ES`) y en los vocablos globales españoles (`ACTION.*`, `VALIDATION.*`, `TERMS.*`).
- El flujo de login usa correo y contraseña obligatorios con validación de email, muestra el aviso «Credenciales inválidas.», puede denegar el acceso por rol y respeta `redirectUrl`; en entorno local precarga credenciales por defecto.
- La recuperación envía un código tras validar el correo y habilita **Continuar** hacia `new-password`; la nueva clave usa un OTP de cuatro dígitos, valida complejidad y coincidencia de contraseñas, cifra el valor antes de enviarlo y vuelve a `login` tras el éxito.
- `scripts/docs-captures.json`, `scripts/capture-screenshots.js` (modo `extra`) y `scripts/check-doc-coverage.mjs` ya existen gracias al change de Calidad y pueden reutilizarse sin reconstruirlos.

## Goals / Non-Goals

**Goals:**

- Añadir secciones nuevas a las cuatro páginas sin tocar una sola línea del contenido ya publicado.
- Derivar campos, validaciones, estados y rutas de los componentes, el enrutador y el i18n español del frontend, no de suposiciones.
- Capturar estados relevantes del flujo (formulario vacío, error, código enviado, modal legal) sin enviar correos reales ni alterar cuentas.
- Reutilizar el manifiesto y el validador existentes, ampliándolos solo donde el módulo lo exige.

**Non-Goals:**

- Modificar el frontend, sus rutas, sus validaciones ni su internacionalización.
- Cambiar el número de pantallas, los `docId` ni la jerarquía del sidebar.
- Redactar las secciones existentes ni reemplazar las capturas actuales.
- Probar o documentar flujos de registro de usuarios, cambio de clave de un usuario autenticado ni administración de cuentas.

## Decisions

### 1. Edición aditiva por bloque

Cada página se modifica únicamente insertando bloques nuevos después de `## Acciones`. El prefijo original se compara antes y después para garantizar que no cambió.

- **Alternativa descartada**: regenerar las páginas desde el inventario → contraviene la restricción de no modificar lo documentado y borraría las capturas publicadas.

### 2. Secciones nuevas con nombres fijos

Bloques previstos: `## Recorrido del acceso` y `## Contenedor y modal legal` en `index.md`; `## Formulario de inicio de sesión` y `## Sesión, errores y redirecciones` en `login.md`; `## Formulario de recuperación` y `## Envío del código` en `recuperar-clave.md`; `## Formulario de nueva contraseña` y `## Validación del código y errores` en `nueva-clave.md`. `check-doc-coverage.mjs` ampliará su lista de encabezados permitidos con estos ocho nombres.

- **Alternativa descartada**: un único bloque «Detalles» por página → no distingue formularios de estados y dificulta exigir una captura por sección.

### 3. Fuente de verdad del frontend

Se leen únicamente `modules/auth/routes.ts`, las plantillas y los componentes de `modules/auth/`, `auth/ui/legal-modal/`, `i18n/locale.ts` (ES), los vocablos globales españoles y la configuración de errores/roles. Las rutas documentadas SHALL ser las del enrutador público. Los mecanismos internos (servicios, repositorios, cifrado) se traducen a comportamientos observables y no se citan como nombres de implementación en la spec.

- **Alternativa descartada**: usar el inventario → solo contiene etiquetas genéricas y no refleja validaciones, estados de error ni redirecciones.

### 4. Capturas sufijadas sobre el manifiesto existente

Se añaden entradas al manifiesto `scripts/docs-captures.json` con `docId`, `suffix`, `route` concreto y, cuando haga falta, `clickText`, `scrollY` y campos nuevos `fill` y `respond`. El nombre de archivo resultante es `static/img/screenshots/<docId>-<sufijo>.png`; la PNG original `<docId>.png` nunca se sustituye. Las 27 entradas de Calidad no se modifican.

- **Alternativa descartada**: reutilizar las cuatro imágenes existentes → incumple el requisito de captura real por sección nueva y no muestra los estados del flujo.

### 5. Estados deterministas sin efectos externos

Las capturas de estados que dependen de la API se logran interceptando las peticiones del formulario y devolviendo respuestas controladas (éxito en recuperación, error de código expirado en nueva clave, fallo de credenciales en login). El navegador ya elimina el almacenamiento de sesión al visitar rutas `/auth`, por lo que no se hereda la sesión del administrador. La configuración local precarga correo y contraseña: las entradas `fill` con valores vacíos o de prueba garantizan el estado buscado.

- **Alternativa descartada**: enviar correos o cambiar contraseñas reales → efecto externo no reversible y dependencia de un buzón.
- **Alternativa descartada**: falsear las imágenes con capturas de otro proyecto → incumple el requisito de captura real del backoffice.

### 6. Validación extendida sin cambiar el inventario

`npm run check:docs` seguirá comprobando inventario, docs, sidebar y capturas; se ampliará para aceptar los ocho encabezados nuevos, verificar que cada sección nueva referencia una imagen existente y validar las entradas nuevas del manifiesto. El número de pantallas permanece en 113.

### 7. Sesión de captura

Se reutiliza la base HTTPS `https://localhost:5000`, el bearer local y el Chrome de la caché de Playwright. Las rutas `/auth` son públicas y el script ya limpia el token en esas rutas, por lo que no hace falta una sesión especial; el API local sigue disponible en `127.0.0.1:8990` para las respuestas interceptadas.

## Risks / Trade-offs

- [El formulario local precarga credenciales] → usar `fill` explícito en las entradas del manifiesto para capturar el estado vacío.
- [Las respuestas interceptadas pueden no coincidir con el contrato real] → derivarlas de los mensajes y códigos observados en el componente y en el i18n.
- [El modal legal puede quedar fuera del viewport] → usar `clickText` sobre el enlace del pie y `scrollY` si hace falta.
- [Crecimiento del repositorio por nuevas PNG] → limitar las capturas a los estados documentados y reutilizar el sufijo cuando dos secciones ilustren la misma vista.
- [Cambio accidental de texto publicado] → verificar el prefijo inmutable de cada archivo antes de aceptar el enriquecimiento.

## Migration Plan

No hay migración de datos ni de rutas. La implementación consiste en añadir secciones a cuatro archivos Markdown, nuevas PNG, entradas al manifiesto y extensiones acotadas a los scripts. La reversión se logra revertiendo el commit; las capturas antiguas permanecen intactas.

## Open Questions

Ninguna. El alcance de los estados a capturar y los nombres de sección quedan fijados arriba, por lo que no afectan a la descomposición en tareas.
