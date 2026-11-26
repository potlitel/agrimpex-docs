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

La tarjeta se titula **Preferencias de notificaciones** y se describe así: «Configure qué eventos generan notificaciones, los umbrales de alerta y la frecuencia de consulta.». Debajo aparece una barra interna con `aria-label="Vistas de notificaciones"` y dos botones: **Mis Preferencias**, disponible para todo usuario autenticado, y **Configuración de Roles**, que solo se muestra a administradores. El enlace profundo se lee al construir el componente: los administradores entran en la vista de roles, los demás usuarios son redirigidos a `?tab=notifications` y siempre ven **Mis Preferencias**. Cambiar de subpestaña no modifica la URL.

![Notificaciones — backoffice Agrimpex](/img/screenshots/configuracion/formulario-notificaciones.png)

*Captura tomada del backoffice Agrimpex con la vista superior de Mis Preferencias.*

#### Mis Preferencias

##### Contenido y control

La vista muestra el texto de ayuda «Active solo los eventos que desea recibir.» y una rejilla de dos columnas con diez casillas. Cada fila contiene la etiqueta del tipo, su descripción completa y, cuando corresponde, un icono de candado con el motivo por el que no se puede modificar. Las filas bloqueadas no obligatorias se muestran atenuadas; las obligatorias permanecen activas aunque su valor no se pueda cambiar. Los cambios son locales hasta que se pulsa **Guardar preferencias**: no hay indicador de cambios pendientes y el botón está habilitado aunque no se haya tocado ninguna casilla.

| Código | Etiqueta visible | Descripción |
|--------|------------------|-------------|
| `BL_SIN_ESPECIALISTA` | BL sin especialista asignado | Se genera cuando un BL está cargado en el sistema sin un especialista de calidad asignado, impidiendo continuar la gestión de la importación. |
| `CONTENEDOR_HABILITADO_SIN_OE` | Contenedor habilitado sin Orden de Entrega | Se genera cuando el contenedor ya está habilitado por Aduana (autorizado para mover) pero aún no tiene una Orden de Entrega que permita su extracción. |
| `CONTENEDOR_LISTO_DESADUANE` | Contenedor listo para Desaduane | Se genera cuando el contenedor alcanza el estado de listo y debe iniciarse su proceso de Desaduane (despacho aduanero). |
| `CONTENEDOR_PENDIENTE_PRELIBERACION` | Preliberación de calidad pendiente | Se genera cuando el contenedor tiene pendiente la preliberación de calidad y debe aprobarse antes de continuar. |
| `CONTENEDOR_RETRASO_EXTRACCION_72H` | Retraso de extracción (> 72h) | Se genera cuando la extracción del contenedor supera el umbral configurado de retraso (por defecto 72 horas). |
| `PRORROGA_POR_VENCER` | Prórroga por vencer | Se genera cuando una prórroga autorizada está por vencer dentro del plazo configurado de aviso (por defecto 5 días). |
| `CONTENEDOR_PRECITA_SIN_AVANCE` | Precita/Transferido sin avance | Se genera cuando un contenedor en estado Precita/Transferido no refleja avance dentro del período configurado (por defecto 7 días), alertando de una posible gestión estancada. |
| `IMPORTACION_COMPLETADA` | Importación completada | Se genera cuando el proceso de importación del contenedor finalizó exitosamente con su extracción. |
| `CONTENEDOR_EXTRAIDO_SINTETICO` | Extracción sintética por reconciliación | Se genera cuando la reconciliación del parte diario detecta contenedores que estaban en el patio y ya no aparecen, y les crea una extracción sintética para regularizar la salida. |
| `PARTE_ORIGEN_PROCESADO` | Parte diario procesado | Se genera cuando el ciclo de Origen del Parte Diario termina (éxito o con errores) y su resumen queda disponible en la campana. |

El texto `> 72h` de la quinta etiqueta es fijo: aunque el administrador cambie el umbral de extracción, la etiqueta visible no se actualiza.

![Mis Preferencias — vista superior](/img/screenshots/configuracion/formulario-preferencias-mine-top.png)

*Captura tomada del backoffice Agrimpex con la tarjeta, las subpestañas y los primeros tipos de Mis Preferencias.*

![Mis Preferencias — tipos 1 a 6](/img/screenshots/configuracion/formulario-preferencias-mine-types-1.png)

*Captura tomada del backoffice Agrimpex con la primera mitad de la rejilla de tipos.*

![Mis Preferencias — tipos 7 a 10](/img/screenshots/configuracion/formulario-preferencias-mine-types-2.png)

*Captura tomada del backoffice Agrimpex con la segunda mitad de la rejilla de tipos.*

##### Motivos de bloqueo

Una casilla puede estar deshabilitada por tres causas. El sistema evalúa los motivos en este orden y muestra solo el primero que aplica:

1. **«Requiere rol: …»**: el tipo no aplica al usuario y la configuración global declaró roles requeridos. Los nombres se muestran traducidos y separados por comas, por ejemplo «Gerente de Comex, Calidad, Logístico».
2. **«No aplicable a su rol.»**: el tipo no aplica al usuario y no hay roles requeridos declarados.
3. **«Deshabilitada por el administrador.»**: el tipo fue desactivado globalmente en **Configuración de Roles**.
4. **«Notificación obligatoria para su rol.»**: el tipo es obligatorio para uno de los roles del usuario; la casilla aparece activa pero no se puede cambiar.

Incluso si el navegador fuerza un cambio, la aplicación descarta la modificación de cualquier fila bloqueada antes de guardar.

##### Estados y guardado

Mientras carga, la vista muestra diez esqueletos en la rejilla. Si la consulta falla aparece «No se pudieron cargar tus preferencias de notificación.»; si el servicio devuelve una lista vacía aparece «Todavía no hay tipos de notificación para mostrar.». En esos tres estados no se muestra el botón de guardado.

**Guardar preferencias** envía únicamente un mapa `tipo → booleano` de los tipos desbloqueados del usuario actual. No envía umbrales, roles, frecuencia de sondeo ni correo. Tras guardar, la respuesta vuelve a resolver la matriz y sustituye la vista local. El éxito se avisa con «Preferencias de notificación guardadas correctamente.» y cualquier fallo con «Error al guardar las preferencias de notificación.».

![Mis Preferencias — guardado al final del desplazamiento](/img/screenshots/configuracion/formulario-preferencias-mine-save.png)

*Captura tomada del backoffice Agrimpex con el botón Guardar preferencias al final de la vista de usuario.*

#### Configuración de Roles

Esta vista es exclusiva de `ROLE_ADMIN`. Si la consulta global no ha terminado, el botón de guardado permanece deshabilitado; si la carga falla después de iniciada, se avisa con «No se pudo cargar la configuración de notificaciones.». El panel se organiza en cuatro fieldsets, que aparecen en este orden.

##### Tipos de notificación

El primer fieldset repite la ayuda «Active solo los eventos que desea recibir.» y los mismos diez tipos de la vista de usuario, esta vez como interruptores globales. Desmarcar un tipo lo desactiva para todos los usuarios, incluso para aquellos a los que el tipo sería obligatorio: la resolución final lo deja apagado.

![Configuración de Roles — subpestaña y tipos globales](/img/screenshots/configuracion/formulario-preferencias-roles.png)

*Captura tomada del backoffice Agrimpex con la vista superior de Configuración de Roles.*

![Configuración de Roles — últimos tipos globales](/img/screenshots/configuracion/formulario-preferencias-roles-types-2.png)

*Captura tomada del backoffice Agrimpex con el final del fieldset de tipos.*

##### Roles destinatarios por tipo

La ayuda indica: «Seleccione uno o más roles que recibirán cada tipo. Si un tipo queda sin asignar, se usará su rol por defecto.». Hay un selector múltiple por tipo con los ocho roles disponibles, el botón **Seleccionar todos** y el placeholder «Sin asignar (rol por defecto)».

| Código del rol | Etiqueta visible |
|----------------|------------------|
| `ROLE_USER` | Usuario |
| `ROLE_ADMIN` | Administrador |
| `ROLE_ESPECIALISTA` | Especialista |
| `ROLE_CONSULTOR` | Consultor |
| `ROLE_GERENTE_COMEX` | Gerente de Comex |
| `ROLE_ESPECIALISTA_PRINCIPAL` | Especialista Principal |
| `ROLE_CALIDAD` | Calidad |
| `ROLE_LOGISTICO` | Logístico |

Los roles por defecto son: **Gerente de Comex** para `BL_SIN_ESPECIALISTA`; **Calidad** para `CONTENEDOR_PENDIENTE_PRELIBERACION`; **Logístico** para los ocho tipos operativos restantes; y ninguno para `PARTE_ORIGEN_PROCESADO`. Cuando no hay asignación explícita se muestra «Rol por defecto: …» con los roles traducidos; si el tipo no tiene default se muestra «Sin rol por defecto: visible para todos los usuarios.».

**Seleccionar todos** marca los ocho roles; si ya están todos marcados, los limpia y devuelve el tipo a su rol por defecto. Dejar el selector vacío elimina la asignación en lugar de enviar una lista vacía, para que el backend aplique el default.

![Configuración de Roles — destinatarios, primera parte](/img/screenshots/configuracion/formulario-preferencias-roles-recipients-1.png)

*Captura tomada del backoffice Agrimpex con el inicio del fieldset de roles destinatarios.*

![Configuración de Roles — destinatarios, segunda parte](/img/screenshots/configuracion/formulario-preferencias-roles-recipients-2.png)

*Captura tomada del backoffice Agrimpex con el final de los selectores y las indicaciones de rol por defecto.*

![Configuración de Roles — desplegable de roles](/img/screenshots/configuracion/formulario-preferencias-roles-role-dropdown.png)

*Captura tomada del backoffice Agrimpex con el desplegable abierto y los ocho roles traducidos.*

##### Umbrales de alerta

El tercer fieldset contiene cuatro campos numéricos obligatorios y una casilla adicional.

| Campo | Valor inicial | Mínimo | Efecto |
|-------|---------------|--------|--------|
| Días de retraso para alerta de extracción | 3 | 0 | Controla `CONTENEDOR_RETRASO_EXTRACCION_72H`; el valor se convierte a horas (`días × 24`) para la alerta. |
| Días de antelación para prórroga por vencer | 5 | 0 | Controla `PRORROGA_POR_VENCER` con el plazo de aviso configurado. |
| Días sin avance (Precita/Transferido) | 7 | 0 | Controla `CONTENEDOR_PRECITA_SIN_AVANCE`. |
| Frecuencia de sondeo (segundos) | 60 | 10 | Se envía como `pollingSeconds`, pero hoy no altera la campana, que sigue sondeando cada 60 segundos. |

**Enviar también por correo** se envía en la configuración global como `emailByType`, pero el backend vigente no lo aplica: no genera envíos adicionales. Ninguno de estos campos muestra mensajes de validación en línea; un valor fuera de rango simplemente impide guardar.

![Configuración de Roles — umbrales de alerta](/img/screenshots/configuracion/formulario-preferencias-roles-thresholds.png)

*Captura tomada del backoffice Agrimpex con los cuatro umbrales y la opción de correo.*

##### Tipos obligatorios

La ayuda indica: «Marque un tipo como obligatorio y seleccione los roles para los que queda bloqueado (casilla siempre activa).». Cada fila lleva el distintivo «Obligatoria» al marcar la casilla. Al activarla se prellenan los roles destinatarios de ese tipo; si no tiene destinatarios, se marcan los ocho roles. Si la lista de roles queda vacía se avisa «Sin roles seleccionados el tipo no queda obligatorio para nadie.»; si el tipo no tenía roles destinatarios se avisa «El tipo no tiene roles destinatarios: se marcó obligatorio para todos los roles.». Aparece entonces un segundo selector múltiple con el placeholder «Sin asignar (rol por defecto)».

Los tipos obligatorios ignoran el valor guardado por el usuario: la resolución final fuerza la casilla activa para los roles indicados. Las listas vacías se descartan al guardar, porque «obligatoria para nadie» no es una configuración válida.

![Configuración de Roles — tipos obligatorios](/img/screenshots/configuracion/formulario-preferencias-roles-mandatory-1.png)

*Captura tomada del backoffice Agrimpex con el fieldset de tipos obligatorios.*

![Configuración de Roles — roles de un tipo obligatorio](/img/screenshots/configuracion/formulario-preferencias-roles-mandatory-2.png)

*Captura tomada del backoffice Agrimpex con el selector de roles de un tipo obligatorio ya desplegado.*

##### Guardado global

El botón **Guardar preferencias** de esta vista guarda la configuración global: tipos activos, umbrales, destinatarios por tipo, tipos obligatorios y los valores de sondeo/correo enviados. No recarga la respuesta del servidor después de guardar; la pantalla conserva los valores locales. El éxito y el error usan los mismos textos que el guardado de usuario: «Preferencias de notificación guardadas correctamente.» y «Error al guardar las preferencias de notificación.».

Este guardado **no** es el de **Mis Preferencias**, que solo persiste booleanos del usuario actual, y **no** es la **Matriz de Permisos**, que reparte permisos de importación por línea de producto.

![Configuración de Roles — guardado al final del desplazamiento](/img/screenshots/configuracion/formulario-preferencias-roles-save.png)

*Captura tomada del backoffice Agrimpex con el botón Guardar preferencias al final de la configuración global.*

### 10. Parámetros de Reportes (`report_parameters`)

- **Acceso:** `/settings/form?tab=report_parameters`, solo administradores.
- **Para qué sirve:** ajusta el parámetro del reporte de monitoreo **Listar Prioridades Aduana**.
- **Controles:** el campo **Cantidad días de entrega de la mercancía** es numérico, obligatorio y no admite valores negativos; debajo se indica el nombre del reporte al que afecta.
- **Guardado:** **Actualizar** persiste el valor; **Resetear** descarta el cambio pendiente y **Restablecer valores por defecto** recupera el valor inicial.

![Parámetros de Reportes — backoffice Agrimpex](/img/screenshots/configuracion/formulario-parametros-reportes.png)

*Captura tomada del backoffice Agrimpex con la pestaña de parámetros de reportes.*

Las capturas se tomaron con un bearer de administrador, por lo que se ve la barra completa de diez pestañas y la subpestaña **Configuración de Roles**. Un usuario sin ese rol solo ve **Notificaciones** y, dentro de ella, **Mis Preferencias**.
