---
sidebar_position: 4
source_route: /settings/origen-parte
source_component: OrigenParteConfigComponent
status: vigente
---

# Origen de parte

## Propósito

Configura el origen del parte diario utilizado en la reconciliación.

## Acceso

- **Menú:** Configuración → Origen de parte
- **Ruta directa:** `/settings/origen-parte`
- **Componente:** `OrigenParteConfigComponent`

> Subruta exclusiva de administrador según `canMatch`.

## Captura

![origen-parte — captura real](/img/screenshots/configuracion/origen-parte.png)

*Captura tomada del backoffice Agrimpex.*

## Campos

| Campo | Descripción | Obligatorio |
|-------|-------------|-------------|
| Buscar | Filtro de texto para localizar registros. | No |
| Filtrar | Aplica los filtros seleccionados al listado. | No |
| Fecha | Fecha del parte. | No |
| Archivo | Archivo de origen. | No |
| Resultado | Resultado del procesamiento. | No |

## Acciones

| Acción | Botón | Rol | Ruta |
|--------|-------|-----|------|
| Guardar | Guardar | Administrador | `/settings/origen-parte` |
| Cancelar | Cancelar | Administrador | `/settings/origen-parte` |

## Secciones de configuración

`/settings/origen-parte` exige `ROLE_ADMIN` mediante `canMatch` y abre `OrigenParteConfigComponent`. La cabecera reúne el interruptor **Módulo habilitado**, **Probar conexión** y **Guardar**. Debajo hay ocho paneles plegables; cada uno se despliega pulsando su título.

| Sección | Opciones |
|---------|----------|
| Conexión al buzón | Protocolo (IMAP o POP3), Servidor IMAP/POP3, Puerto, Seguridad (SSL, TLS o Sin cifrar), Validar certificado TLS, Usuario, Contraseña —dejarla vacía conserva la actual cifrada— y Carpeta. |
| Filtrado de mensajes | El asunto contiene, Remitente, Procesar solo no leídos, Marcar como leído tras procesar y Eliminar mensaje tras procesar. |
| Adjuntos y procesamiento | Tamaño máx. ZIP adjunto (MB), Tamaño máx. descomprimido (MB), Extensiones objetivo —separadas por comas—, Formato del parte (Auto detectar, Inicial o Nuevo) e Importadores objetivo. |
| Límites por ejecución | Máx. partes por ejecución. |
| Frecuencia de sondeo | Estrategia de sondeo (Intervalo fijo, Adaptativa, IDLE (push) o Manual), Intervalo fijo (seg), Intervalo mínimo (seg), Intervalo máximo (seg), Umbral vacíos, Timeout IDLE (seg), Hora inicio laboral, Hora fin laboral, Intervalo fuera de horas (seg) y Tiempo máx. ejecución (seg). |
| Notificaciones | Destinatarios de notificación, Cuándo notificar (Siempre, Solo errores, Solo éxitos o Nunca), Asunto y Cuerpo para éxito y error, con las variables disponibles indicadas en el formulario. |
| Logging y persistencia | Nivel de log (Depuración, Información, Avisos, Errores o Críticos), Archivo de log, Log a consola, Persistencia de ejecuciones (Base de datos o Archivo) y Ruta de persistencia. |
| Reintentos y timeouts | Reintentos, Timeout conexión (seg) y Timeout lectura (seg). |

**Probar conexión** verifica servidor, puerto, seguridad y certificado, y muestra «Conexión correcta» o «Error de conexión» con latencia, mensajes coincidentes y posibles causas. **Guardar** persiste la configuración. Ni la prueba ni el guardado garantizan un resultado concreto: dependen del buzón y de la red del entorno.

![Secciones de configuración — backoffice Agrimpex](/img/screenshots/configuracion/origen-parte-secciones.png)

*Captura tomada del backoffice Agrimpex con las ocho secciones plegables.*

![Frecuencia de sondeo — backoffice Agrimpex](/img/screenshots/configuracion/origen-parte-frecuencia.png)

*Captura tomada del backoffice Agrimpex con la sección Frecuencia de sondeo desplegada.*

![Reintentos y timeouts — backoffice Agrimpex](/img/screenshots/configuracion/origen-parte-reintentos.png)

*Captura tomada del backoffice Agrimpex con la sección Reintentos y timeouts desplegada.*
