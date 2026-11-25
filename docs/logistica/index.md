---
sidebar_position: 1
source_route: /logistic
source_component: LogisticPage
status: vigente
---

# Logística

## Propósito

Panel principal del módulo logístico y acceso a sus procesos; los permisos y preliberaciones se consultan en Calidad.

## Acceso

- **Menú:** Logística → Logística
- **Ruta directa:** `/logistic`
- **Componente:** `LogisticPage`

## Captura

![index — captura real](/img/screenshots/logistica/index.png)

*Captura tomada del backoffice Agrimpex.*

## Campos

| Campo | Descripción | Obligatorio |
|-------|-------------|-------------|
| Puerto | Terminal activa seleccionada. | No |
| Contenedor | Referencia del contenedor. | No |

## Acciones

| Acción | Botón | Rol | Ruta |
|--------|-------|-----|------|
| Ir al dashboard | Acceder | Administrador, Especialista, Consultor o Logístico | `/logistic/import` |
| Ir a Calidad | Acceder | Administrador, Especialista, Consultor o Logístico | `/docs/calidad` |

## Mapa del módulo

`LogisticPage` es un contenedor con un único `router-outlet` montado en `/logistic`; protege la entrada con `AccessGuardCanWrite` y reparte la navegación en cuatro grupos. Las rutas vacía y comodín del contenedor raíz redirigen a `/logistic/import`, por lo que al abrir `/logistic` se muestra el panel «Control de Carga». Pueden consultar el módulo los roles Administrador, Especialista, Consultor y Logístico; las rutas `add` y `edit` exigen además permisos de escritura (Administrador, Especialista, Logístico o Calidad).

| Grupo | Rutas principales | Rol | Qué contiene |
|-------|-------------------|-----|--------------|
| Importación | `/logistic/import` y sus hijas `tc-mariel`, `puerto-santiago`, `no-devueltos`, `extraidos`, `recepcion-puerta`, `logs` y `stats`; `/logistic/excludes-containers` | Administrador, Especialista, Consultor o Logístico | Panel de control de carga, carga de ficheros, registro de importaciones, estadísticas y contenedores de otra importadora. |
| Control y contenedores | `/logistic/imports-control`, `/logistic/terminal-inventory`, `/logistic/navigating-containers/list`, `/logistic/return-cycle`, `/logistic/shipping-documents/list`, `/logistic/container-control`, `/logistic/daily-extractions`, `/logistic/extracted-containers` | Administrador, Especialista, Consultor o Logístico; el explorador de documentos en `/logistic/documents/explorer` exige Administrador, Especialista, Especialista Principal o Gerente Comex | Consulta de contenedores por terminal, inventario, tránsito, retorno, documentos de embarque, trazabilidad y extracciones. |
| Operaciones CRUD | `/logistic/delivery-orders`, `/logistic/inbond-goods`, `/logistic/extensions-requests`, `/logistic/desaduanes`, `/logistic/specialist-suppliers` y `/logistic/airs-freights`, cada una con `list`, `add` y `edit` | Consulta: Administrador, Especialista, Consultor o Logístico; alta y edición: Administrador, Especialista, Logístico o Calidad | Seis pares listado/formulario para entregas, inbonds, prórrogas, desaduane, especialistas y fletes aéreos. |
| Reportes | `/logistic/reports` | Administrador, Especialista, Consultor o Logístico | Generación y exportación de estados de contenedores en Excel y PDF. |

Los contenedores del enrutador declaran una ruta vacía con `pathMatch: 'full'` que redirige a `list`: ocurre en `specialist-suppliers`, `airs-freights`, `shipping-documents`, `delivery-orders`, `inbond-goods`, `extensions-requests`, `desaduanes` y `navigating-containers`. Así, `/logistic/shipping-documents` abre `/logistic/shipping-documents/list` y `/logistic/specialist-suppliers` abre su listado. Los grupos `import-permits` y `preliberations` redirigen primero a `cenasa` y `health` y, desde ahí, también a `list`. La edición usa dos convenciones: `edit/:id` por segmento en documentos de embarque, prórrogas, desaduane y permisos, frente a `edit?id=<id>` por parámetro de consulta en entregas, inbonds, especialistas y fletes aéreos.

![Logística — panel de importación del mapa del módulo](/img/screenshots/logistica/index-mapa-importacion.png)

*Captura tomada del backoffice Agrimpex: destino `/logistic/import` del grupo de importación.*

![Logística — inventario en terminal del mapa del módulo](/img/screenshots/logistica/index-mapa-contenedores.png)

*Captura tomada del backoffice Agrimpex: destino `/logistic/terminal-inventory` del grupo de contenedores.*

![Logística — listado operativo del mapa del módulo](/img/screenshots/logistica/index-mapa-crud.png)

*Captura tomada del backoffice Agrimpex: destino `/logistic/delivery-orders/list` del grupo de operaciones CRUD.*

![Logística — generador de reportes del mapa del módulo](/img/screenshots/logistica/index-mapa-reportes.png)

*Captura tomada del backoffice Agrimpex: destino `/logistic/reports` del grupo de reportes.*
