---
sidebar_position: 26
source_route: /logistic/extensions-requests/add
source_component: ExtensionRequestFormComponent
status: vigente
---

# Formulario de solicitudes de extensión

## Propósito

Crea o edita una solicitud de prórroga con el mismo formulario.

## Acceso

- **Menú:** Logística → Formulario de solicitudes de extensión
- **Ruta directa:** `/logistic/extensions-requests/add`
- **Componente:** `ExtensionRequestFormComponent`

## Captura

![formulario — captura real](/img/screenshots/logistica/solicitudes-extension/formulario.png)

*Captura tomada del backoffice Agrimpex.*

## Campos

| Campo | Descripción | Obligatorio |
|-------|-------------|-------------|
| Contenedor | Dato del formulario. | Sí |
| Tipo de Prórroga | Dato del formulario. | Sí |
| Observaciones | Dato del formulario. | Sí |

## Acciones

| Acción | Botón | Rol | Ruta |
|--------|-------|-----|------|
| Crear | Añadir | Administrador, Especialista, Logístico o Calidad | `/logistic/extensions-requests/add` |
| Editar | Editar | Administrador, Especialista, Logístico o Calidad | `/logistic/extensions-requests/edit/:id` |
| Guardar | Guardar | Administrador, Especialista, Logístico o Calidad | `Formulario actual` |
| Cancelar | Cancelar | Administrador, Especialista, Logístico o Calidad | `Listado del módulo` |

## Filtros del listado

El formulario de solicitud de prórroga no ofrece panel **Filtrar**: se abre desde `/logistic/extensions-requests/add` o desde `edit/:id`. La búsqueda «Buscar contenedores por Bill of Lading» —con texto «Buscar Bill of Lading…» y «No se encontraron BLs con contenedores elegibles»— actúa como selector de los contenedores candidatos. El número de solicitud se genera automáticamente con prefijo `MRL-` o `SCU-` y aparece como campo deshabilitado con el texto «Generando número…» mientras se calcula.

![Solicitud de extensión — datos generales](/img/screenshots/logistica/solicitudes-extension/formulario-formulario-general.png)

*Captura tomada del backoffice Agrimpex: número autogenerado y fecha de solicitud.*

## Operaciones y estados

La fecha de solicitud es obligatoria. El tipo de prórroga se deriva de los días: **1ra Prórroga** entre 20 y 59 y **2da Prórroga** desde 60. No se pueden mezclar tipos en una misma solicitud, superar el máximo configurado —15 por defecto, con «Límite de contenedores»—, repetir BL ni incorporar un BL incompatible. Para Mariel los contenedores elegibles deben tener más de 20 días y estar sin habilitar; en Santiago no se aplica esa restricción de estado. Al eliminar un contenedor con observaciones se pide confirmación. **Cancelar** vuelve al listado y **Previsualizar PDF** y **Descargar PDF** requieren fecha y al menos un contenedor; **Guardar** muestra «Solicitud guardada correctamente».

![Solicitud de extensión — contenedores agregados](/img/screenshots/logistica/solicitudes-extension/formulario-formulario-contenedores.png)

*Captura tomada del backoffice Agrimpex: contenedores elegibles y observaciones.*

## Formulario (alta y edición)

Cada contenedor incorporado se presenta como una tarjeta con número, BL y días en puerto de solo lectura y un campo de **Observaciones** libre. El tipo se muestra en la tarjeta y no se puede combinar con otro tipo. La validación impide guardar si faltan campos obligatorios, no hay contenedores, algún contenedor carece de número o no se seleccionó BL, con mensajes como «Complete todos los campos obligatorios» y «Debe agregar al menos un contenedor». La edición usa el mismo componente que el alta, con el identificador tomado del segmento `edit/:id`.

![Solicitud de extensión — alta y edición compartidas](/img/screenshots/logistica/solicitudes-extension/formulario-formulario-general.png)

*Captura tomada del backoffice Agrimpex: formulario compartido por `/add` y `edit/:id`.*
