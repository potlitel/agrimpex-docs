---
sidebar_position: 4
---

# Estados / Provincias

## Descripción

El catálogo de **Estados** (también llamados provincias o estados federados) permite gestionar la división territorial de primer nivel dentro de cada país. Se utiliza para especificar ubicaciones más precisas que el país solo.

## Acceso

- **Menú**: Nomenclaturas → Estados
- **Ruta directa**: `/management/nomenclatures/state`

## Interfaz

### Listado de Estados

![Listado de Estados](/img/nomenclaturas/state-listado.png)

## Propósito

Este catálogo se utiliza en:
- Dirección de plantas y almacenes
- Ubicación de proveedores
- Destino de importaciones
- Reporting geográfico

## Relación Jerárquica

```
País → Estados → Condados
```

Cada Estado debe estar asociado a un País.

## Campos

| Campo | Tipo | Descripción |
|-------|------|-------------|
| Código | Texto | Código identificador del estado |
| Nombre | Texto | Nombre del estado o provincia |
| País | Relación | País al que pertenece |
| Código ISO | Texto | Código ISO del estado (opcional) |
| Capital | Texto | Ciudad capital del estado |
| Activo | Booleano | Si el estado está disponible |

## Crear Estado

1. Accede al módulo de Estados
2. Haz clic en **"+ Agregar Estado"**
3. Completa los campos:
   - Ingresa el código del estado
   - Ingresa el nombre completo
   - Selecciona el país de la lista desplegable
   - Agrega la capital (opcional)
4. Activa el toggle "Activo"
5. Haz clic en **"Guardar"**

## Editar Estado

1. Busca el estado en la tabla
2. Haz clic en editar
3. Modifica los valores
4. Guarda los cambios

## Eliminar Estado

:::danger ADVERTENCIA
No puedes eliminar un estado que tenga condados asociados. Primero debes eliminar o reasignar los condados.
:::

---

**Volver a**: [Nomenclaturas - Introducción](/docs/nomenclaturas/intro)
