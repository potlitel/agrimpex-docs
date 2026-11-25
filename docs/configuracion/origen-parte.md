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
