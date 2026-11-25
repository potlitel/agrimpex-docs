---
sidebar_position: 3
source_route: /management/user/add
source_component: UserFormComponent
status: vigente
---

# Formulario de usuarios

## Propósito

Crea un usuario nuevo o modifica los datos de uno existente con el mismo formulario.

## Acceso

- **Menú:** Administración → Formulario de usuarios
- **Ruta directa:** `/management/user/add`
- **Componente:** `UserFormComponent`

> Las rutas `add` y `edit` comparten `UserFormComponent`; la edición precarga el usuario seleccionado.

## Captura

![formulario — captura real](/img/screenshots/administracion/usuarios/formulario.png)

*Captura tomada del backoffice Agrimpex.*

## Campos

| Campo | Descripción | Obligatorio |
|-------|-------------|-------------|
| Nombre | Dato del formulario. | Sí |
| Usuario | Dato del formulario. | Sí |
| Email | Dato del formulario. | Sí |
| Género | Dato del formulario. | Sí |
| Activo | Dato del formulario. | Sí |
| Apellido | Dato del formulario. | Sí |
| Contraseña | Dato del formulario. | Sí |
| Teléfono | Dato del formulario. | Sí |
| Rol | Dato del formulario. | Sí |
| Dni | Dato del formulario. | Sí |
| Grupos | Dato del formulario. | Sí |
| Fecha de nacimiento | Dato del formulario. | Sí |

## Acciones

| Acción | Botón | Rol | Ruta |
|--------|-------|-----|------|
| Crear | Añadir | Administrador | `/management/user/add` |
| Editar | Editar | Administrador | `/management/user/edit` |
| Guardar | Guardar | Administrador | `Formulario actual` |
| Cancelar | Cancelar | Administrador | `Listado del módulo` |


## Formulario (alta y edición)

Las rutas `/management/user/add` y `/management/user/edit?id=<id>` comparten `UserFormComponent`. La tabla anterior resume los campos del inventario; la siguiente detalla los controles y validadores declarados en el componente. En alta se abre vacío y se genera automáticamente una contraseña aleatoria de 12 caracteres; en edición se precarga el usuario del parámetro de consulta, se retira el control de contraseña y se deshabilita **Activo** cuando se edita la propia cuenta. Los cambios sin guardar se conservan en `FormStateManager` durante 10 minutos y, al abandonar la ruta, se pregunta si se descartan.

| Campo | Control | Obligatorio | Validaciones y observaciones |
|-------|---------|-------------|------------------------------|
| Nombre (`name`) | Texto | Sí | `required`; muestra el error de la API si vuelve uno asociado al campo. |
| Apellido (`lastname`) | Texto | Sí | `required`; igualmente muestra errores de la API. |
| Email (`email`) | Texto tipo `email` | Sí | `required` y formato de correo, validados al perder el foco (`updateOn: 'blur'`). La unicidad se comprueba de forma asíncrona con 500 ms de retardo: mientras está pendiente aparece «🔍 Verificando unicidad...» y, si ya existe, «⚠️ Este email ya está registrado en el sistema.». |
| Dni (`dni`) | Texto de hasta 11 caracteres | Sí | `required` y validación del carné de identidad (`ciLength`, `ciInvalid`, `ciNumeric`); el campo acepta solo dígitos. La unicidad también es asíncrona: «🔍 Verificando unicidad...» / «⚠️ Este DNI ya está registrado en el sistema.». |
| Teléfono (`mobile`) | Texto | No | Sin validador `required` en el control; puede mostrar errores devueltos por la API. |
| Género (`gender`) | Selector `ng-select` | No | Opciones de `AVAILABLE_GENDERS`, placeholder «Seleccionar». El servicio del CI lo completa y lo bloquea automáticamente cuando el carné es válido; también se deshabilita al editar una instancia de paciente. |
| Cargo (`cargo`) | Selector `ng-select` | No | Lista de la consulta `GetCargos`, con `name` como etiqueta y `id` como valor. |
| Área (`area`) | Selector `ng-select` | No | Lista de la consulta `GetAreas`, con el mismo formato que Cargo. |
| Grupos (`groups`) | Selector múltiple `ng-select` | Sí | Lista de grupos disponibles, `required`, con `name` como etiqueta y `id` como valor. |
| Roles (`roles`) | Control de lista | No | Declarado en el formulario y en el esquema de mutación con los valores de `AVAILABLE_ROLES`; la plantilla actual no muestra un selector propio para él. |
| Activo (`enabled`) | Interruptor `hlm-switch` | No | Valor inicial `true`; se deshabilita al editar la propia cuenta. |
| Contraseña (`password`) | Campo de contraseña, solo en alta | Sí | `required` y `passwordStrength()`: al menos 10 caracteres con minúscula, mayúscula, dígito y símbolo. El icono de actualizar genera una clave aleatoria que se muestra como «Contraseña autogenerada»; la clave se cifra antes de enviarse. |
| Fecha de nacimiento (`birthdate`) | Control de fecha derivado del CI | No | No se edita directamente: el servicio del carné la extrae, la escribe y la deshabilita. |

Al escribir 11 dígitos en el DNI, `UserFormCiService` intenta extraer la fecha de nacimiento y el género del carné y los autocompleta. Si la validación es correcta, sobre el formulario aparece el aviso de validación de CI con la fecha, el género y la edad calculada; si faltan dígitos o la estructura no es válida, los campos vuelven a estar habilitados y se muestran los errores `ciLength`, `ciInvalid` o `ciNumeric` correspondientes.

El pie ofrece **Regresar** y **Guardar**. Tras guardar se muestra «Operación completada correctamente» y se vuelve al listado; si falla la validación o la mutación, aparece un aviso de error.

![Usuarios — formulario de alta compartido por las rutas add y edit](/img/screenshots/administracion/usuarios/formulario-formulario-general.png)

*Captura tomada del backoffice Agrimpex en `/management/user/add`.*
