---
sidebar_position: 1
source_route: /profile
source_component: UserProfilePage
status: vigente
---

# Perfil

## Propósito

Muestra los datos del usuario autenticado y enlaza sus preferencias y clave.

## Acceso

- **Menú:** Perfil → Perfil
- **Ruta directa:** `/profile`
- **Componente:** `UserProfilePage`

## Captura

![index — captura real](/img/screenshots/perfil/index.png)

*Captura tomada del backoffice Agrimpex.*

## Campos

| Campo | Descripción | Obligatorio |
|-------|-------------|-------------|
| Nombre | Nombre del usuario. | No |
| Usuario | Nombre de usuario. | No |
| Email | Correo electrónico. | No |
| Rol | Rol asignado. | No |
| Último acceso | Fecha del último ingreso. | No |

## Acciones

| Acción | Botón | Rol | Ruta |
|--------|-------|-----|------|
| Ir a preferencias | Acceder | Todo usuario autenticado | `/profile/preferences` |
| Cambiar contraseña | Acceder | Todo usuario autenticado | `/profile/change-password` |

## Mapa del módulo

`UserProfilePage` es un contenedor con un único `router-outlet`: no tiene formulario ni controles propios. El enrutador de `pages/user-profile/routes.ts` monta tres destinos bajo `/profile`. La ruta vacía y la ruta comodín redirigen a `overview`, por lo que al abrir `/profile` se termina en `/profile/overview`. Ninguna rama declara un guard de rol: las tres están disponibles para cualquier usuario con sesión válida.

| Destino | Ruta | Rol | Contenido |
|---------|------|-----|-----------|
| Detalles | `/profile` → `/profile/overview` | Todo usuario autenticado | Identidad del usuario, indicadores personales y widgets comunes o condicionados por rol. |
| Preferencias | `/profile/preferences` | Todo usuario autenticado | Tres grupos de vistas: visualización, control de importaciones y prioridades aduaneras. |
| Cambiar contraseña | `/profile/change-password` | Todo usuario autenticado | Formulario de contraseña actual y nueva con panel de fortaleza. |

Las migas de pan distinguen cada destino: **Inicio → Perfil → Detalles**, **Perfil → Preferencias** y **Perfil → Cambiar contraseña**. Solo los widgets de la vista de detalles se filtran por rol; las tres rutas se pueden abrir directamente.

![Perfil — vista de detalles a la que redirige `/profile`](/img/screenshots/perfil/index-mapa-detalles.png)

*Captura tomada del backoffice Agrimpex: `/profile` redirige a `/profile/overview`.*

![Perfil — vista de preferencias del mapa del módulo](/img/screenshots/perfil/index-mapa-preferencias.png)

*Captura tomada del backoffice Agrimpex: destino `/profile/preferences`.*

![Perfil — vista de cambio de contraseña del mapa del módulo](/img/screenshots/perfil/index-mapa-cambiar-clave.png)

*Captura tomada del backoffice Agrimpex: destino `/profile/change-password`.*

## Vista de perfil y widgets

La vista `/profile/overview` presenta la identidad del usuario autenticado: nombre y apellidos, correo electrónico, rol, género, DNI, fecha de nacimiento, último acceso, estado de la sesión, idioma y terminal por defecto. También muestra el porcentaje de perfil completado y un enlace **Cambiar foto**. Los valores de la captura pertenecen a la cuenta de administrador con la que se tomó; no son datos fijos del manual.

Además de los datos de identidad, la vista reúne widgets comunes a todos los usuarios autenticados —**Datos personales**, **Roles**, **Hitos recientes**, **Indicadores personales**, **Actividad y trazabilidad**, **Gráfico de contribución**, **Notificaciones**, **Resumen de preferencias**, **Configuración efectiva** y **Documentos y sellos**— y tres widgets adicionales que dependen del rol:

| Widget | Roles que lo ven | Información que muestra |
|--------|------------------|-------------------------|
| Especialización | `ROLE_ESPECIALISTA`, `ROLE_ESPECIALISTA_PRINCIPAL` | Área, cargo, contenedores asignados y gestiones de proveedores; sin datos indica «No hay datos de especialización registrados.» |
| Permisos y pre-liberaciones | `ROLE_CALIDAD` | Permisos y pre-liberaciones; sin datos indica «No hay permisos ni pre-liberaciones registrados.» |
| Embudo de contenedores | `ROLE_LOGISTICO` | Total de contenedores y etapas como «BL endosado» u «Otra importadora»; sin datos indica «No hay contenedores en ningún estado.» |

La comprobación `isProfileWidgetVisible` omite por completo los widgets no autorizados: no los oculta con CSS. Por eso en la captura de esta sección, tomada con un usuario `ROLE_ADMIN`, no aparecen los tres widgets de la tabla. Los seis widgets comunes se detallan a continuación; varios pueden mostrar «Cargando…» mientras se consultan sus datos.

### Indicadores personales

Con el subtítulo «Actividad operativa acumulada», este widget presenta seis tarjetas con el valor del usuario autenticado, la «Media del equipo» y una pequeña línea de tendencia de los últimos siete días:

| Tarjeta | Qué contabiliza |
|---------|-----------------|
| Contenedores gestionados | Contenedores asignados al usuario, tanto de Mariel como de SCU. |
| BL tramitados | Conocimientos de embarque registrados para el usuario. |
| Desaduanes activos | Solicitudes de desaduanamiento a su nombre. |
| Órdenes de entrega | Órdenes de Mariel y SCU asociadas al usuario. |
| Permisos procesados | Permisos CENASA y fitosanitarios. |
| Pre-liberaciones | Pre-liberaciones de salud y veterinaria. |

Los datos proceden de la consulta `GetProfileMyMetrics`, filtrada por el identificador del usuario y con `since` igual a la fecha de hoy menos seis días, es decir, una ventana de siete días. Si no hay registros aparece «Sin actividad en el periodo»; durante la carga se muestran tarjetas animadas y, si falla la consulta, un mensaje de error.

### Actividad y trazabilidad

Con la descripción «Registro de acciones y trazabilidad del usuario.», muestra la lista **Acciones recientes** construida con las últimas 50 trazas ordenadas por fecha descendente. Cada entrada indica módulo, funcionalidad y acción —como creación, consulta, actualización o eliminación—, además de la entidad y su identificador, el usuario y su rol, y la fecha y hora. El botón **Ver detalle** abre el comparador de diferencias de la traza.

La lista admite búsqueda por texto, módulo o identificador, y dos desplegables: **Filtrar por módulo** y **Filtrar por tipo de acción**, ambos con la opción **Todas**. La paginación muestra «Anterior», «Página X de Y», «Siguiente» y el rango «desde–hasta de total». Sin registros indica «No hay registros de auditoría para este usuario.»; si los filtros no encuentran coincidencias, «No hay acciones que coincidan con los filtros.».

### Gráfico de contribución

Es una tarjeta independiente con el subtítulo «Volumen de acciones por día del año seleccionado.», alimentada por la consulta paginada de trazas del usuario. Presenta una cuadrícula de celdas por día y mes, un selector de **Año** y una leyenda que va de «Menos actividad» a «Más actividad». Debajo se indica el total con el formato «N acciones en AAAA». Al pulsar un día se abre **Actividad del `{{date}}`**, donde `{{date}}` es la fecha elegida, con un resumen del total de acciones y módulos, cuatro tarjetas —**Creaciones**, **Consultas**, **Actualizaciones** y **Eliminaciones**— con su porcentaje, un radar de **Distribución de acciones** y la lista de contribuciones de ese día con sus propios filtros y los controles **Mostrar más actividades** y **Mostrar menos actividades**.

Sin datos informa «Sin actividad en este año.»; mientras carga indica «Cargando actividad…» y si falla, «No se pudo cargar el gráfico de actividad.». El detalle de un día sin registros muestra «Sin actividad» y «No hubo actividad registrada el `{{date}}`».

![Perfil — indicadores personales, trazabilidad y gráfico de contribución](/img/screenshots/perfil/index-widgets-indicadores.png)

*Captura tomada del backoffice Agrimpex con indicadores, actividad y gráfico de calor.*

### Notificaciones

Con la descripción «Avisos recientes y resumen de preferencias.», muestra primero el número de mensajes **Sin leer** —limitado a «99+»— y el enlace **Ir a editar notificaciones**, que abre `/settings/form?tab=notifications`. La sección **Últimas notificaciones** lista hasta cinco avisos ordenados por severidad: crítica, advertencia, información y éxito; cada uno muestra título, mensaje y fecha. Si no hay avisos sin leer aparece «No tienes notificaciones sin leer.».

La sección **Resumen de preferencias** resume los tipos configurados en tres contadores: **Activas**, **Desactivadas** y **Obligatorias**. En la sesión capturada el resumen es 0 activas, 10 desactivadas y 1 obligatoria; esos valores dependen de la configuración de la cuenta.

### Configuración efectiva

Bajo la descripción «Idioma, tema y vistas vigentes en el perfil.», presenta cada ajuste con su enlace **Ir a editar perfil**:

| Ajuste | Valor mostrado | Destino del enlace |
|--------|----------------|--------------------|
| Idioma | Código de idioma del usuario, por ejemplo `ES`. | `/management/user/edit/?returnUrl=/profile` |
| Tema | **Claro**, **Oscuro** o **Automático**. | `/settings/form?tab=general` |
| Vistas de control de importaciones | **Detallada** o **Compacta**, según el valor guardado. | `/profile/preferences` |
| Terminal por defecto | Vista vigente del inventario de terminal. | `/management/user/edit/?returnUrl=/profile` |
| Modo demo de notificaciones | **Activado** o **Desactivado**, según el entorno. | `/settings/form?tab=notifications` |

### Documentos y sellos

Con la descripción «Documentos emitidos y sellos de verificación activos.», ofrece el enlace **Ir a editar parámetros** hacia `/settings/form?tab=verification`. El bloque **Documentos emitidos** muestra los totales de **Desaduanes**, **Prórrogas**, **CENASA**, **Salud** y **Órdenes de entrega**; en la sesión capturada son 44, 3, 31, 0 y 8 respectivamente. Si todas las cuentas están a cero, indica «No hay documentos emitidos.».

El bloque **Sellos de verificación** enumera los sellos de desaduanes, prórrogas, CENASA, fitosanitario, INHEM, salud, veterinaria y pre-liberación fitosanitaria. Cada uno se marca como **Activo** o **No activo**; el sello maestro debe estar habilitado para que los individuales aparezcan activos. En la captura todos los sellos figuran como **Activo**, incluidas las dos entradas de **Fitosanitario** —permisos y pre-liberación—.

![Perfil — notificaciones, configuración efectiva y documentos del perfil](/img/screenshots/perfil/index-widgets-resumen.png)

*Captura tomada del backoffice Agrimpex con los tres widgets inferiores.*
