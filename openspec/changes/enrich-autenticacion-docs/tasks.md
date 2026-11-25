# Tasks

## 1. Infraestructura de capturas de estados

- [x] 1.1 Verificar que el API local (`127.0.0.1:8990`) y el frontend (`https://localhost:5000`) responden, que un bearer válido funciona y que `/auth/login`, `/auth/forgot-password` y `/auth/new-password` cargan sin heredar la sesión del administrador.
- [x] 1.2 Ampliar `scripts/docs-captures.json` con las entradas de Autenticación sufijo, ruta concreta, `fill`, `clickText` y respuestas simuladas; verificar que el JSON parsea, que los cuatro `docId` existen en `scripts/docs-inventory.json`, que ninguna ruta contiene `:` o `$`, que no hay sufijos duplicados y que las 27 entradas de Calidad siguen intactas.
- [x] 1.3 Ampliar `scripts/capture-screenshots.js` con relleno de campos e interceptación de respuestas declaradas en el manifiesto, sin romper el modo `extra` de Calidad; verificar con una ejecución acotada a dos `docId` que aparecen las PNG sufijadas nuevas y que las cuatro originales conservan su hash.
- [x] 1.4 Ampliar `scripts/check-doc-coverage.mjs` con los ocho encabezados nuevos permitidos y la validación de las entradas de Autenticación; verificar que `npm run check:docs` falla al renombrar temporalmente una PNG del manifiesto y vuelve a pasar al restaurarla.

## 2. Recorrido público y contenedor compartido

- [x] 2.1 Enriquecer `docs/autenticacion/index.md` con `## Recorrido del acceso`, derivado de `modules/auth/routes.ts` y de las transiciones de los tres formularios; verificar que se describen las cuatro vistas con sus rutas públicas y que la página muestra al menos dos capturas reales, con leyenda de backoffice.
- [x] 2.2 Añadir `## Contenedor y modal legal` a `docs/autenticacion/index.md` desde `auth.page.html` y `ui/legal-modal/legal-modal.component.html`; verificar que se documentan la ilustración, el logotipo, el pie con enlace legal, la apertura y cierre del modal y el carácter público, con una captura real del modal abierto.

## 3. Inicio de sesión

- [x] 3.1 Añadir `## Formulario de inicio de sesión` a `docs/autenticacion/login.md` desde `login.component.html/.ts` y el i18n español; verificar que se documentan correo y contraseña obligatorios, la validación de email, las credenciales precargadas solo en local, el botón de inicio y su estado de carga, con captura real del formulario vacío.
- [x] 3.2 Añadir `## Sesión, errores y redirecciones` a `docs/autenticacion/login.md`; verificar que se documentan «Credenciales inválidas.», la denegación por rol con cierre de sesión, la redirección a `redirectUrl` y el salto al inicio con sesión activa, con captura real del estado de error.

## 4. Recuperación de clave

- [x] 4.1 Añadir `## Formulario de recuperación` a `docs/autenticacion/recuperar-clave.md` desde `forgot-password.component.html/.ts`; verificar que se documentan el correo obligatorio con validación de email, **Enviar** con estado de carga y **Cancelar**, con captura real del formulario.
- [x] 4.2 Añadir `## Envío del código` a `docs/autenticacion/recuperar-clave.md`; verificar que se documentan el aviso condicional «Si el correo está registrado…», el botón **Continuar** hacia `/auth/new-password` y el hecho de que no se afirma entrega del correo, con captura real del estado enviado.

## 5. Nueva contraseña

- [x] 5.1 Añadir `## Formulario de nueva contraseña` a `docs/autenticacion/nueva-clave.md` desde `reset-code.component.html/.ts`; verificar que se documentan los cuatro dígitos numéricos con avance de foco, nueva contraseña y confirmación, la complejidad mínima y la coincidencia, con captura real del formulario.
- [x] 5.2 Añadir `## Validación del código y errores` a `docs/autenticacion/nueva-clave.md`; verificar que se documentan «El código enviado no es correcto o ha expirado», los mensajes de campos incompletos y formatos, el cifrado previo al envío, la confirmación de éxito y el retorno a `/auth/login`, con captura real del estado de error.

## 6. Verificación final

- [x] 6.1 Comprobar el carácter aditivo en las cuatro páginas; verificar que el front matter, el H1 y las secciones Propósito, Acceso, Captura, Campos y Acciones son idénticos a los del commit anterior y que las secciones nuevas aparecen después de `## Acciones`.
- [x] 6.2 Ejecutar `npm run check:docs` y `npm run build`; verificar que el inventario sigue teniendo 113 pantallas, que todas las imágenes referenciadas existen y que Docusaurus genera el sitio sin enlaces rotos.
- [x] 6.3 Revisar el sitio en `http://localhost:3003/docs/autenticacion/`; verificar visualmente el recorrido con más de una captura legible y una página de formulario con las secciones nuevas renderizadas.

## Workflow follow-up

- Archive the change after the project's review requirements are satisfied.
- Verify the archived result.
