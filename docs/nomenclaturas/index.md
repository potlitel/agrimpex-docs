---
sidebar_position: 1
source_route: /management/nomenclatures
source_component: NomenclaturesComponent
status: vigente
---

# Nomencladores

## Propósito

Índice de los nomencladores activos disponibles para la gestión del sistema.

## Acceso

- **Menú:** Nomenclaturas → Nomencladores
- **Ruta directa:** `/management/nomenclatures`
- **Componente:** `NomenclaturesComponent`

## Captura

![index — captura real](/img/screenshots/nomenclaturas/index.png)

*Captura tomada del backoffice Agrimpex.*

## Campos

| Campo | Descripción | Obligatorio |
|-------|-------------|-------------|
| Nombre | Nombre del nomenclador. | No |
| Descripción | Uso del nomenclador. | No |

## Acciones

| Acción | Botón | Rol | Ruta |
|--------|-------|-----|------|
| Buscar | Buscar | Administrador o Especialista | `/management/nomenclatures` |
| Seleccionar | Seleccionar | Administrador o Especialista | `/management/nomenclatures` |

## Mapa del módulo

`NomenclaturesComponent` es un contenedor con un único `router-outlet` montado en `/management/nomenclatures`. La entrada está protegida por `AccessGuardCanMatchFn`, que exige el segmento `nomenclatures`: lo tienen **Administrador** y **Especialista**; ningún otro rol puede abrir el módulo. El enrutador reparte los 33 nomencladores en cuatro grupos y, en cada uno, la ruta raíz (`/management/nomenclatures/<segmento>`) declara `{ path: '', redirectTo: 'list', pathMatch: 'full' }`, por lo que abrir la raíz del nomenclador muestra siempre su listado. La raíz del módulo, en cambio, redirige a `province`; ese grupo no está incluido en `NomenclaturesRoutes` y la ruta comodín devuelve a `nomenclatures`, de modo que la dirección base queda en un contenedor vacío: para trabajar hay que entrar en un `/list` concreto o elegir la opción del menú lateral.

| Grupo | Ruta de entrada | Rol y alcance |
|-------|-----------------|---------------|
| Básicos y de estado (12) | `/management/nomenclatures/currency/list` y análogos | Consulta: Administrador o Especialista. Escritura: Administrador; Especialista puede actualizar operador, planta y estados del contenedor. |
| Logísticos (6) | `/management/nomenclatures/port/list` y análogos | Consulta: Administrador o Especialista. Alta, edición y eliminación: Administrador; Especialista solo con permiso de actualización del recurso. |
| Comerciales (6) | `/management/nomenclatures/contract/list` y análogos | Consulta: Administrador o Especialista. Solo se registra `list`: no hay alta ni edición. |
| De apoyo (9) | `/management/nomenclatures/airport/list` y análogos | Consulta: Administrador o Especialista. Escritura: Administrador en los nomencladores con formulario; `solicitud-compra` es de solo lectura. |

Los segmentos de ruta de cada grupo son:

- **Básicos y de estado:** `currency`, `permit-type`, `container-type`, `area`, `cargo`, `country`, `county`, `state`, `containers-state`, `operator`, `loads-type` y `plant`.
- **Logísticos:** `product`, `sap`, `product-origin`, `port`, `shipper` y `airline`.
- **Comerciales:** `contract`, `oferta`, `client`, `supplier`, `management-type` y `product-line`.
- **De apoyo:** `airport`, `ship`, `download-address`, `solicitud-compra`, `manufacturer`, `brand`, `unit-of-measure`, `categoria` y `margen-comercial`.

La edición no sigue una única convención: la mayoría de los formularios abre `/edit?id=<id>` con el identificador en un parámetro de consulta, mientras que fabricante, marca, categoría y margen comercial usan `/edit/<id>` como segmento de ruta. En los siete nomencladores de solo listado no existe ninguna de las dos rutas.

![Nomenclaturas — listado del grupo de básicos](/img/screenshots/nomenclaturas/index-mapa-basicos.png)

*Captura tomada del backoffice Agrimpex: destino `/management/nomenclatures/currency/list` del grupo de nomencladores básicos.*

![Nomenclaturas — listado del grupo logístico](/img/screenshots/nomenclaturas/index-mapa-logisticos.png)

*Captura tomada del backoffice Agrimpex: destino `/management/nomenclatures/port/list` del grupo logístico.*

![Nomenclaturas — listado del grupo comercial](/img/screenshots/nomenclaturas/index-mapa-comerciales.png)

*Captura tomada del backoffice Agrimpex: destino `/management/nomenclatures/contract/list` del grupo comercial.*

![Nomenclaturas — listado del grupo de apoyo](/img/screenshots/nomenclaturas/index-mapa-apoyo.png)

*Captura tomada del backoffice Agrimpex: destino `/management/nomenclatures/airport/list` del grupo de apoyo.*
