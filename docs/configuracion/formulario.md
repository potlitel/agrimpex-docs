---
sidebar_position: 2
source_route: /settings/form
source_component: ConfigurationFormComponent
status: vigente
---

# Formulario de configuración

## Propósito

Configura los parámetros generales y las preferencias de notificación del usuario.

## Acceso

- **Menú:** Configuración → Formulario de configuración
- **Ruta directa:** `/settings/form`
- **Componente:** `ConfigurationFormComponent`

> La pestaña de notificaciones muestra "Mis Preferencias" a todos los usuarios y "Configuración de Roles" solo a administradores.

## Captura

![formulario — captura real](/img/screenshots/configuracion/formulario.png)

*Captura tomada del backoffice Agrimpex.*

## Campos

| Campo | Descripción | Obligatorio |
|-------|-------------|-------------|
| Buscar | Filtro de texto para localizar registros. | No |
| Filtrar | Aplica los filtros seleccionados al listado. | No |
| Código NIT | Identificador fiscal de la empresa. | No |
| Nombre | Nombre de la empresa. | No |
| Dirección | Dirección de la empresa. | No |
| Cuenta MN | Cuenta bancaria en moneda nacional. | No |
| Cuenta MLC | Cuenta bancaria en MLC. | No |
| Tasa de conversión MLC | Tasa aplicada a conversiones. | No |
| Logotipo | Imagen corporativa. | No |
| Preferencias de notificaciones | Tipos, umbrales y frecuencia de sondeo. | No |

## Acciones

| Acción | Botón | Rol | Ruta |
|--------|-------|-----|------|
| Guardar | Guardar | Todo usuario autenticado | `/settings/form` |
| Guardar preferencias | Guardar preferencias | Todo usuario autenticado | `/settings/form?tab=notifications` |
| Cancelar | Cancelar | Todo usuario autenticado | `/settings/form` |

## Pestañas y preferencias

`/settings/form` carga `ConfigurationFormComponent`. Para un administrador, la barra superior muestra diez pestañas en el orden en que se describen abajo; para cualquier otro usuario autenticado solo se muestra **Notificaciones** y cualquier parámetro `?tab=` distinto se reescribe a `/settings/form?tab=notifications`.

Cada pestaña admite un enlace profundo `/settings/form?tab=<id>`. El parámetro se lee al construir el componente: sirve para abrir una pestaña directamente, pero no se actualiza al hacer clic en otra. Como las etiquetas son largas, la barra permite desplazarse horizontalmente y ofrece un menú de «Tabs ocultos»; la pestaña activa se desplaza automáticamente para quedar visible.

### 1. Configuración General (`general`)

- **Acceso:** `/settings/form?tab=general`, solo administradores. Es la pestaña inicial cuando no se indica `?tab=`.
- **Para qué sirve:** reúne la identidad, los datos bancarios, la documentación legal y los parámetros de conversión de la empresa. El grupo **Información Bancaria** separa moneda nacional (MN) de moneda libremente convertible (MLC), y el grupo **Documentación Legal** registra los números exigidos por el marco regulatorio.
- **Controles:** **Logotipo** se selecciona al hacer clic sobre la imagen; **Código NIT** admite de 8 a 11 dígitos; **Nombre** y **Dirección** son texto libre. Se completan **Cuenta MN**, **Tarjeta MN**, **Cuenta MLC**, **Tarjeta MLC**, **No. Contrato**, **No. Licencia Cámara de Comercio**, **No. Resolución MINCEX**, **Tasa de conversión MLC**, **Permisología** (0–100) y **Margen conversión**.
- **Guardado:** **Actualizar** confirma los cambios; **Resetear** descarta los pendientes y **Restablecer valores por defecto** repone los valores iniciales de la configuración.

![Configuración General — backoffice Agrimpex](/img/screenshots/configuracion/formulario-general.png)

*Captura tomada del backoffice Agrimpex con la pestaña Configuración General.*

### 2. Secuencias de Orden de Entrega (`sequences`)

- **Acceso:** `/settings/form?tab=sequences`, solo administradores.
- **Para qué sirve:** mantiene la numeración consecutiva por proveedor. Evita reutilizar o saltar números al crear nuevas órdenes de entrega y permite consultar el último consecutivo emitido para cada proveedor.
- **Controles:** **Agregar Secuencia** crea una fila. La tabla muestra **Proveedor**, **Siguiente consecutivo alfanumérico**, **Última Orden de Entrega**, **Total Órdenes** y **Acciones**. El consecutivo siguiente solo se puede editar mientras `Total Órdenes` sea cero; si el proveedor ya tiene órdenes, el campo queda de solo lectura y **Editar** se deshabilita con el aviso «No se puede editar, existen órdenes de entrega para este proveedor». El total se resume como «Total N: TCMariel X / TCSantiago Y».
- **Estados y guardado:** mientras carga se muestra «Cargando secuencias...»; sin datos, «No hay secuencias configuradas. Presione "Agregar Secuencia" para crear una.». Cada fila se confirma de forma independiente con **Crear**, **Guardar cambios** o **Eliminar**; no depende del botón global **Actualizar**.

![Secuencias de Orden de Entrega — backoffice Agrimpex](/img/screenshots/configuracion/formulario-secuencias.png)

*Captura tomada del backoffice Agrimpex con la pestaña de secuencias.*

### 3. Configuración avanzada de operaciones (`operations`)

- **Acceso:** `/settings/form?tab=operations`, solo administradores.
- **Para qué sirve:** limita las solicitudes de prórroga de contenedores y decide qué versión del formato de importación de TC Mariel aceptan las páginas de importación.
- **Controles:** **Máximo de contenedores por solicitud** admite de 1 a 999 y su ayuda indica que es el límite de contenedores agregables en una solicitud. **Formato de importación TC Mariel** ofrece tres opciones: **Aceptar ambos formatos (automático)** —la predeterminada, que detecta el formato de cada archivo—, **Formato inicial (hasta julio 2026)** y **Formato nuevo (a partir de agosto 2026)**. La selección se refleja con los distintivos «Formato inicial» o «Formato nuevo» y una descripción contextual.
- **Guardado:** **Actualizar** aplica los valores; **Resetear** y **Restablecer valores por defecto** permiten volver al estado anterior o inicial. Esta opción no debe confundirse con **Permisos de Importación**, que configura textos de documentos, ni con el parte diario de `/settings/origen-parte`.

![Configuración avanzada de operaciones — backoffice Agrimpex](/img/screenshots/configuracion/formulario-operaciones.png)

*Captura tomada del backoffice Agrimpex con el formato de importación TC Mariel.*

### 4. Recomplus (`recomplus`)

- **Acceso:** `/settings/form?tab=recomplus`, solo administradores.
- **Para qué sirve:** configura la conexión con el servidor Recomplus y ejecuta sincronizaciones desde el propio formulario. Es distinta de la ruta `/settings/recomplus-sync`, que muestra el historial y sus filtros; aquí se gestionan credenciales, recursos y procesos.
- **Conexión:** el primer grupo solicita **URL del servidor Recomplus**, **Ruta base de sincronización**, **Usuario**, **Contraseña** —con control para mostrar u ocultar el valor— y **Client ID**. **Probar conexión** informa si la conexión fue verificada o qué causa y sugerencia produjo el error; **Guardar configuración** persiste los datos. Los indicadores **Última sincronización** y **Nomencladores sincronizados** muestran el estado del entorno, sin garantizar resultados concretos.
- **Sincronización:** la subnavegación interna, que no forma parte del parámetro `?tab=`, tiene dos vistas. **Procesos** ofrece **Sincronizar todo** y **Sincronización parcial**, con la fase 1 de nomencladores base, la fase 2 de puertas y transporte, la fase 3 de proveedores, clientes y productos y la fase 4 de solicitudes, ofertas y contratos. Los recursos seleccionables son País, Moneda, Unidad de Medida, Término Societario, Puerta ES, Transporte, Proveedor, Cliente, Producto, Línea de Producto, Solicitud de Compra, Oferta y Contrato; **Sincronizar seleccionados** abre el panel «Resultados del proceso de sincronización». **Estado** muestra una tabla con **Entidad**, **Total**, **Sincronizados**, **% Sync** y **Último ID Recomplus**, además de **Actualizar** para volver a consultar.

![Recomplus — backoffice Agrimpex](/img/screenshots/configuracion/formulario-recomplus.png)

*Captura tomada del backoffice Agrimpex con la pestaña Recomplus del formulario.*

### 5. Permisos de Importación (`import_permits`)

- **Acceso:** `/settings/form?tab=import_permits`, solo administradores.
- **Para qué sirve:** define los textos y firmantes que se insertan en los documentos de permisos de importación. No es la matriz de asignación por línea de producto, que se describe más abajo.
- **Configuración INHEM:** **Texto "Año XX de La Revolución"** y **Nombre del Especialista de Calidad**, este último seleccionado del servicio de especialistas.
- **Configuración Fitosanitario:** **No. Permiso**, **Nombre del Director**, **Nombre de la Entidad**, **Dirección de la Entidad**, **Nombre del Director DSV** y **Organización DSV**.
- **Configuración CENASA:** **Nombre del Director CENASA**, **Cargo del Director CENASA** y **Saludo del Director CENASA**. Cada campo cuenta con una ayuda que explica dónde aparece en el documento generado. **Actualizar** guarda el conjunto.

![Permisos de Importación — backoffice Agrimpex](/img/screenshots/configuracion/formulario-permisos-importacion.png)

*Captura tomada del backoffice Agrimpex con la pestaña de permisos de importación.*

### 6. Firmas y Destinatarios de Modelos Exportados (`model_signatures`)

- **Acceso:** `/settings/form?tab=model_signatures`, solo administradores.
- **Para qué sirve:** personaliza nombres, cargos, correos y saludos que se imprimen en los modelos exportados. El propio formulario advierte que, si un campo se deja vacío, el modelo usa el valor por defecto del formato oficial.
- **Orden de Entrega:** nombre y cargo del **Gerente Comex** y del **Presidente**.
- **Solicitud de Desaduanes:** nombre y cargo del **Especialista Gerencia Comex** como «Solicitado por» y del firmante como «Recibido por».
- **Preliberación Fitosanitaria:** nombre y cargo del firmante de la preliberación fitosanitaria.
- **Solicitud de Prórrogas:** en **Destinatario**, nombre, cargo, saludo y eslogan del año; en **Firmante Izquierdo** y **Firmante Derecho**, nombre, cargo y correo.
- **Guardado:** **Actualizar** confirma los cambios; **Resetear** y **Restablecer valores por defecto** permiten revertirlos o recuperar los valores oficiales.

![Firmas y Destinatarios de Modelos Exportados — backoffice Agrimpex](/img/screenshots/configuracion/formulario-firmas-modelos.png)

*Captura tomada del backoffice Agrimpex con la pestaña de firmas y destinatarios.*

### 7. Matriz de Permisos (`permission_matrix`)

- **Acceso:** `/settings/form?tab=permission_matrix`, solo administradores.
- **Para qué sirve:** abre `PermissionMatrixComponent`, titulado **Matriz de Asignación de Permisos de Importación**. Relaciona cada línea de producto con los permisos **CENASA**, **INHEM** y **Fitosanitario** que le corresponden.
- **Controles:** la columna **Línea de Producto** se cruza con una casilla por permiso. Los cambios se guardan automáticamente al marcar o desmarcar una casilla. La matriz señala las líneas con badge **Pendiente de asignación**, muestra avisos con el número de líneas sin asignar y de sugerencias disponibles, permite aceptar o descartar cada sugerencia y ofrece **Recargar** para refrescar los datos.
- **Alcance:** esta matriz reparte permisos de importación por línea de producto; no configura los roles destinatarios de las notificaciones, que se ajustan en la pestaña siguiente.

![Matriz de Permisos — backoffice Agrimpex](/img/screenshots/configuracion/formulario-matriz-permisos.png)

*Captura tomada del backoffice Agrimpex con la matriz de asignación de permisos.*

### 8. Verificación de Documentos (`verification`)

- **Acceso:** `/settings/form?tab=verification`, solo administradores.
- **Para qué sirve:** activa el sello de verificación y decide qué modelos lo emiten. El interruptor maestro **Habilitar sello de verificación globalmente** condiciona todos los demás; si está apagado, el formulario indica que hay que activarlo para habilitar los modelos.
- **Modelos:** los switches se agrupan en **Logística** —**Órdenes de Entrega**, **Solicitud de Desaduane** y **Prórrogas**—, **Preliberaciones** —**Preliberación de Salud**, **Veterinaria** y **Fitosanitaria**— y **Calidad** —**CENASA**, **INHEM** y **Fitosanitario**.
- **URL y vista previa:** **URL base de verificación** es de solo lectura porque la define el entorno de despliegue; el texto de ayuda explica que así se evita que los códigos apunten a dominios no confiables. **Ver Ejemplo de Sello** abre un diálogo con zoom de 50 % a 200 % y rotaciones de 0°, 90°, 180° y 270°.
- **Guardado:** **Actualizar** aplica el interruptor maestro, los nueve modelos y la URL, y registra una traza consolidada de los cambios.

![Verificación de Documentos — backoffice Agrimpex](/img/screenshots/configuracion/formulario-verificacion.png)

*Captura tomada del backoffice Agrimpex con el sello de verificación.*

### 9. Notificaciones (`notifications`)

- **Acceso:** `/settings/form?tab=notifications`. Es la única pestaña visible para usuarios autenticados sin `ROLE_ADMIN`. Con bearer de administrador, el enlace profundo abre directamente **Configuración de Roles**; para ver **Mis Preferencias** hay que seleccionar esa subpestaña. Al hacer clic en una subpestaña la URL no cambia.
- **Mis Preferencias:** disponible para todo usuario. Muestra los diez tipos de notificación con su descripción y un interruptor para activarlos; **Guardar preferencias** guarda solo la relación tipo/booleano del usuario actual. Algunos tipos aparecen bloqueados y explican el motivo: «No aplicable a su rol», «Requiere rol: …», «Notificación obligatoria para su rol» o «Deshabilitada por el administrador».
- **Configuración de Roles:** exclusiva de administradores. **Tipos de notificación** activa o desactiva globalmente cada tipo; **Roles destinatarios por tipo** asigna uno o más de los ocho roles disponibles, con **Seleccionar todos** y las indicaciones de rol por defecto o «visible para todos los usuarios» cuando no hay asignación. **Umbrales de alerta** fija los días de retraso para la extracción, la antelación para prórrogas por vencer, los días sin avance en estados Precita/Transferido, la frecuencia de sondeo en segundos y el envío también por correo. **Tipos obligatorios** marca qué tipos quedan fijos para determinados roles. **Guardar preferencias** actualiza la configuración global, que no se confunde con la matriz de permisos de importación.

![Notificaciones — backoffice Agrimpex](/img/screenshots/configuracion/formulario-notificaciones.png)

*Captura tomada del backoffice Agrimpex con la subpestaña Mis Preferencias.*

![Configuración de Roles — backoffice Agrimpex](/img/screenshots/configuracion/formulario-preferencias-roles.png)

*Captura tomada del backoffice Agrimpex con la subpestaña Configuración de Roles.*

### 10. Parámetros de Reportes (`report_parameters`)

- **Acceso:** `/settings/form?tab=report_parameters`, solo administradores.
- **Para qué sirve:** ajusta el parámetro del reporte de monitoreo **Listar Prioridades Aduana**.
- **Controles:** el campo **Cantidad días de entrega de la mercancía** es numérico, obligatorio y no admite valores negativos; debajo se indica el nombre del reporte al que afecta.
- **Guardado:** **Actualizar** persiste el valor; **Resetear** descarta el cambio pendiente y **Restablecer valores por defecto** recupera el valor inicial.

![Parámetros de Reportes — backoffice Agrimpex](/img/screenshots/configuracion/formulario-parametros-reportes.png)

*Captura tomada del backoffice Agrimpex con la pestaña de parámetros de reportes.*

Las capturas se tomaron con un bearer de administrador, por lo que se ve la barra completa de diez pestañas y la subpestaña **Configuración de Roles**. Un usuario sin ese rol solo ve **Notificaciones** y, dentro de ella, **Mis Preferencias**.
