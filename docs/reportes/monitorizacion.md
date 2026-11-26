---
sidebar_position: 6
source_route: /reports/monitoring
source_component: MonitoringReportsComponent
status: vigente
---

# Monitorización

## Propósito

Da seguimiento a contenedores en diferentes condiciones operativas.

## Acceso

- **Menú:** Reportes → Monitorización
- **Ruta directa:** `/reports/monitoring`
- **Componente:** `MonitoringReportsComponent`

## Captura

![monitorizacion — captura real](/img/screenshots/reportes/monitorizacion.png)

*Captura tomada del backoffice Agrimpex.*

## Campos

| Campo | Descripción | Obligatorio |
|-------|-------------|-------------|
| Buscar | Filtro de texto para localizar registros. | No |
| Filtrar | Aplica los filtros seleccionados al listado. | No |
| Contenedor | Identificador del contenedor. | No |
| Días | Días transcurridos. | No |
| Horas | Horas transcurridas. | No |

## Acciones

| Acción | Botón | Rol | Ruta |
|--------|-------|-----|------|
| Generar | Generar | Administrador, Especialista, Calidad, Consultor o Logístico | `/reports/monitoring` |
| Actualizar | Actualizar | Administrador, Especialista, Calidad, Consultor o Logístico | `/reports/monitoring` |

## Interpretación del panel

`MonitoringReportsComponent` organiza la pantalla en dos áreas: un panel lateral con las condiciones operativas seguidas y un área de resultados. Al entrar en `/reports/monitoring` se selecciona de forma automática **24h sin Especialista**; también está disponible para **Administrador, Especialista, Calidad, Consultor o Logístico** según la ACL del segmento `reports`.

| Condición seguida | Criterio declarado en el i18n | Unidad del indicador |
|-------------------|-------------------------------|----------------------|
| 24h sin Especialista | Contenedores con más de 24 horas sin asignación de especialista. | Horas |
| 48h en Trámite Aduana | Contenedores en trámite de aduana por más de 48 horas. | Horas |
| 25 días sin extraer | Contenedores sin extraer hace más de 25 días. | Días |
| Demora en Devolución (15 días) | Contenedores con demora en devolución mayor a 15 días. | Días |
| Habilitados no liberados | Contenedores habilitados pero no liberados. | Días |
| Almacenaje en Terminal | Contenedores en almacenaje en terminal (Mariel/SCU). | Días |
| Habilitados sin extraer 72h | Contenedores habilitados sin extraer en 72 horas. | Horas |

La tabla muestra **Contenedor**, **BL**, **No. Manifiesto** y una cuarta columna de tiempo que pasa a **Horas** en las tres condiciones medidas en horas y a **Días** en las demás. El valor del indicador se resalta según umbrales declarados en el componente: en horas, rojo desde 96 y amarillo desde 48; en días, rojo desde 48 y amarillo desde 24; por debajo aparece en verde. El pie indica cuántos contenedores hay en total. Estos colores orientan la prioridad de revisión, pero no garantizan valores ni series concretas: todo depende de los datos del entorno.

| Acción | Control | Condición y efecto |
|--------|---------|--------------------|
| Generar | Selección de una condición en el panel lateral | Carga los datos de la condición elegida y dibuja la tabla; es la forma de «generar» cada reporte de monitorización. |
| Actualizar | Botón **Actualizar** | Vuelve a consultar la condición seleccionada sin cambiarla; se deshabilita mientras carga. |
| Exportar Excel | Botón **Exportar Excel** | Se habilita cuando hay datos; exporta contenedor, BL, manifiesto y la medida de tiempo (días u horas) según la condición activa. |

![Monitorización — panel de condiciones en el backoffice Agrimpex](/img/screenshots/reportes/monitorizacion-panel.png)

*Captura tomada del backoffice Agrimpex con el panel de condiciones y la tabla de indicadores.*

![Monitorización — acciones del panel en el backoffice Agrimpex](/img/screenshots/reportes/monitorizacion-operaciones.png)

*Captura tomada del backoffice Agrimpex con las acciones **Actualizar** y **Exportar Excel** visibles.*

### 24h sin Especialista

Condición seleccionada por defecto al entrar en `/reports/monitoring`. Sigue los contenedores con más de 24 horas sin asignación de especialista. La columna de tiempo se llama **Horas** y el valor se considera amarillo desde 48 horas y rojo desde 96; por debajo aparece en verde. La tabla muestra contenedor, BL y manifiesto, y el pie indica el total. **Actualizar** recarga la condición y **Exportar Excel** incluye la medida en horas.

![24h sin Especialista — backoffice Agrimpex](/img/screenshots/reportes/monitorizacion-condicion-24h-sin-especialista.png)

*Captura tomada del backoffice Agrimpex con la condición «24h sin Especialista» seleccionada.*

### 48h en Trámite Aduana

Sigue los contenedores en trámite de aduana por más de 48 horas. También se mide en **Horas**, con los mismos umbrales de color: amarillo desde 48 y rojo desde 96. La fila seleccionada se resalta en el panel lateral; el área de resultados mantiene las columnas contenedor, BL, manifiesto y horas, con las acciones **Actualizar** y **Exportar Excel**.

![48h en Trámite Aduana — backoffice Agrimpex](/img/screenshots/reportes/monitorizacion-condicion-48h-tramite-aduana.png)

*Captura tomada del backoffice Agrimpex con la condición «48h en Trámite Aduana» seleccionada.*

### 25 días sin extraer

Sigue los contenedores sin extraer hace más de 25 días. La columna de tiempo pasa a **Días**, con umbral amarillo desde 24 y rojo desde 48. La tabla mantiene contenedor, BL y manifiesto, y el total se muestra al pie. La condición se elige pulsando su botón en el panel lateral; **Actualizar** vuelve a consultarla.

![25 días sin extraer — backoffice Agrimpex](/img/screenshots/reportes/monitorizacion-condicion-25-dias-sin-extraer.png)

*Captura tomada del backoffice Agrimpex con la condición «25 días sin extraer» seleccionada.*

### Demora en Devolución (15 días)

Sigue los contenedores con demora en devolución mayor a 15 días. El indicador se expresa en **Días** (amarillo desde 24, rojo desde 48). Sirve para priorizar devoluciones atrasadas; no implica que todos los registros superen ese umbral, sino que esa es la condición declarada en el i18n del módulo.

![Demora en Devolución — backoffice Agrimpex](/img/screenshots/reportes/monitorizacion-condicion-demora-devolucion.png)

*Captura tomada del backoffice Agrimpex con la condición «Demora en Devolución (15 días)» seleccionada.*

### Habilitados no liberados

Sigue los contenedores habilitados pero no liberados. La columna de tiempo es **Días**, con los umbrales de color habituales. La vista es de solo lectura: las únicas acciones del encabezado son **Actualizar** y **Exportar Excel**, disponibles para los roles del segmento `reports`.

![Habilitados no liberados — backoffice Agrimpex](/img/screenshots/reportes/monitorizacion-condicion-habilitados-no-liberados.png)

*Captura tomada del backoffice Agrimpex con la condición «Habilitados no liberados» seleccionada.*

### Almacenaje en Terminal

Sigue los contenedores en almacenaje en terminal (Mariel/SCU). El indicador se mide en **Días** y se resalta según los mismos umbrales. La tabla muestra los contenedores encontrados con su BL, manifiesto y tiempo, sin valores garantizados: las filas dependen del entorno.

![Almacenaje en Terminal — backoffice Agrimpex](/img/screenshots/reportes/monitorizacion-condicion-almacenaje-terminal.png)

*Captura tomada del backoffice Agrimpex con la condición «Almacenaje en Terminal» seleccionada.*

### Habilitados sin extraer 72h

Sigue los contenedores habilitados sin extraer en 72 horas. Es una de las tres condiciones medidas en **Horas**, por lo que la columna de tiempo y la exportación usan horas en lugar de días, con umbral amarillo desde 48 y rojo desde 96.

![Habilitados sin extraer 72h — backoffice Agrimpex](/img/screenshots/reportes/monitorizacion-condicion-habilitados-sin-extraer-72h.png)

*Captura tomada del backoffice Agrimpex con la condición «Habilitados sin extraer 72h» seleccionada.*
