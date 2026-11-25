---
sidebar_position: 13
source_route: /logistic/navigating-containers/list
source_component: ContainerListComponent
status: vigente
---

# Contenedores en tránsito

## Propósito

Lista los contenedores en tránsito y permite gestionar sus documentos de embarque.

## Acceso

- **Menú:** Logística → Contenedores en tránsito
- **Ruta directa:** `/logistic/navigating-containers/list`
- **Componente:** `ContainerListComponent`

## Captura

![navegando — captura real](/img/screenshots/logistica/contenedores/navegando.png)

*Captura tomada del backoffice Agrimpex.*

## Campos

| Campo | Descripción | Obligatorio |
|-------|-------------|-------------|
| Contenedor | Identificador del contenedor. | No |
| No. BL | Número de conocimiento de embarque. | No |
| Estado | Estado de tránsito. | No |

## Acciones

| Acción | Botón | Rol | Ruta |
|--------|-------|-----|------|
| Buscar | Buscar | Administrador, Especialista, Consultor o Logístico | `/logistic/navigating-containers/list` |
| Añadir documento de embarque | Añadir | Administrador, Especialista, Logístico o Calidad | `/logistic/navigating-containers/add-shipping-documents` |
| Editar documento de embarque | Editar | Administrador, Especialista, Logístico o Calidad | `/logistic/navigating-containers/edit-shipping-documents` |

## Control y trazabilidad

`/logistic/navigating-containers/list` restringe la consulta a los BL con estado `sailing`: los repositorios de Mariel y Santiago fijan ese valor en los filtros por defecto y lo mantienen al paginar. El conmutador de terminal cambia la fuente de datos sin alterar la ruta. El panel **Filtrar** ofrece **# Contenedor**, **No. BL**, **Especialista** y **Proveedor**, con búsqueda y recarga genéricas y exportación a Excel.

La tabla muestra **# Contenedor**, **No. BL**, **Especialista**, **Proveedor**, **Clientes** y **Productos** —con el recuento total de la lista de productos— y **Acciones**. El número de BL y el lápiz abren `/logistic/shipping-documents/edit/:blId?fromNavigating=true&container=…&blNumber=…`; el menú de puntos ofrece **Adicionar BL**, que lleva a `/logistic/navigating-containers/add-shipping-documents?container=…&blNumber=…&fromNavigating=true`, **Modificar BL**, **TC Mariel (General)** y **Panel de Auditoría**. La barra de herramientas permite **Documentos Embarque** para llegar al formulario compartido en modo alta. Las acciones de escritura se muestran solo para Administrador, Especialista o Logístico; la consulta está disponible para los roles habituales del módulo.

![Contenedores en tránsito — panel de filtros](/img/screenshots/logistica/contenedores/navegando-filtros.png)

*Captura tomada del backoffice Agrimpex: filtros de cargas en tránsito.*

![Contenedores en tránsito — acciones de la tabla](/img/screenshots/logistica/contenedores/navegando-operaciones.png)

*Captura tomada del backoffice Agrimpex: columna Acciones y enlaces al documento de embarque.*
