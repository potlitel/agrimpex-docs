# Proposal

## Why

Las cuatro páginas de Autenticación muestran una sola captura y tablas genéricas de campos y acciones: no explican las validaciones de los formularios, los estados de error, el código OTP de cuatro dígitos, las redirecciones por sesión ni el recorrido completo de recuperación de clave. Tras aplicar el patrón de enriquecimiento aditivo al módulo Calidad, el módulo público de acceso es el siguiente con documentación insuficiente para soportar al usuario y al soporte técnico.

## What Changes

- Enriquecer de forma **adicional** las cuatro páginas vigentes de `docs/autenticacion/`: conservar literalmente el front matter, el H1 y las secciones Propósito, Acceso, Captura, Campos y Acciones ya publicadas, y añadir secciones nuevas sin reescribir ni eliminar las actuales.
- Documentar en `autenticacion/index.md` el **recorrido del acceso** —pantalla pública, inicio de sesión, recuperación, nueva clave y modal legal— con más de una captura real, como contrapartida del panel de decisión de Calidad.
- Documentar en `autenticacion/login.md` el formulario de acceso (correo y contraseña, validaciones `required`/`email`, credenciales por defecto solo en el entorno local), el estado de carga, el aviso «Credenciales inválidas.», la denegación por rol y la redirección al destino solicitado mediante `redirectUrl` o al inicio cuando ya hay sesión.
- Documentar en `autenticacion/recuperar-clave.md` el envío del código: validación del correo, estado «Si el correo está registrado, recibirá un código…», botón **Continuar** hacia nueva clave, y acciones **Enviar** / **Cancelar**.
- Documentar en `autenticacion/nueva-clave.md` el código OTP de cuatro posiciones con enfoque automático y solo dígitos, las validaciones de longitud y complejidad de la contraseña, la coincidencia entre contraseña y confirmación, los errores «El código enviado no es correcto o ha expirado» y sus alternativas, el cifrado previo al envío, la confirmación de éxito y el retorno a `/auth/login`.
- Documentar el contenedor compartido `AuthPage`: ilustración lateral, logotipo, pie de página con enlace legal y modal de términos, sin estado de autenticación (rol público).
- Incorporar al menos una captura real del backoffice en cada sección nueva y más de una cuando la sección tenga estados relevantes (formulario vacío, error, código enviado, modal legal). Las capturas de estados que dependen de la API se obtienen con respuestas controladas, sin enviar correos reales ni modificar cuentas.
- Ampliar `scripts/capture-screenshots.js` con apoyo a estados de formulario (relleno de campos, clics y respuestas simuladas) y ampliar `scripts/check-doc-coverage.mjs` para validar el manifiesto y exigir una captura por sección añadida.
- Mantener `scripts/docs-inventory.json` como fuente de verdad: las 113 pantallas y sus `docId` no cambian.

## Capabilities

### New Capabilities

- `autenticacion-reference`: cobertura documental del módulo Autenticación —formularios, validaciones, estados de error, sesión, recuperación de clave y recorrido público— con capturas reales por sección y ediciones estrictamente aditivas.

### Modified Capabilities

- Ninguna. La capability `calidad-reference` ya publicada no cambia sus requisitos; este change solo crea una capability nueva.

## Impact

- `docs/autenticacion/` (4 páginas, solo adiciones) y `static/img/screenshots/autenticacion/` (nuevas capturas sufijadas).
- `scripts/capture-screenshots.js` y `scripts/check-doc-coverage.mjs`: soporte y validación de estados capturados y de capturas adicionales por página.
- `scripts/docs-inventory.json`: solo metadata derivada si hace falta; el número de pantallas y los `docId` se conservan.
- Repo vecino `../agrimpex-backoffice` se usa únicamente como fuente de lectura de rutas, componentes, validaciones e i18n; no se modifica.
