# Spec Delta

## Purpose

Definir el contenido mínimo y verificable de cada página de pantalla del manual, de modo que un usuario pueda reconocer la pantalla real, entender sus campos y conocer las acciones disponibles antes de usar el sistema.

## ADDED Requirements

### Requirement: Cobertura de pantallas principales frente al frontend

El manual SHALL contener una página por cada pantalla principal — listado, formulario o dashboard — declarada en el inventario derivado de los `routes.ts` del backoffice. Cada página SHALL registrar en su front matter la ruta de origen y el componente que la implementa.

#### Scenario: Se audita un módulo

- **WHEN** se comparan las rutas del módulo con las páginas del manual
- **THEN** cada pantalla principal del inventario tiene una página documentada
- **AND** esa página declara su ruta de origen y su componente en el front matter

#### Scenario: Aparece una pantalla sin documento

- **WHEN** el inventario incluye una pantalla principal que no tiene página
- **THEN** la auditoría la marca como pendiente
- **AND** no se considera completa la cobertura del módulo

### Requirement: Estructura obligatoria de la página

Cada página de pantalla SHALL incluir, en este orden, las secciones Propósito, Acceso, Captura, Campos y Acciones. Las secciones Campos y Acciones SHALL presentarse como tablas con una fila por campo o acción relevante.

#### Scenario: Un usuario abre la página de una pantalla

- **WHEN** un usuario abre cualquier página de pantalla del manual
- **THEN** encuentra las cinco secciones obligatorias en el orden indicado
- **AND** las secciones Campos y Acciones contienen al menos una fila cada una

#### Scenario: Una pantalla no tiene campos editables

- **WHEN** la pantalla documentada es un dashboard o un listado sin formulario
- **THEN** la tabla Campos describe los filtros o columnas visibles
- **AND** la sección no se omite ni se deja vacía

### Requirement: Captura de la pantalla real

Cada página de pantalla SHALL mostrar una imagen ubicada en `static/img/screenshots/` que corresponda a `static/img/screenshots/<docId>.png` cuando exista, con texto alternativo descriptivo y una leyenda que indique que proviene del backoffice Agrimpex. Cuando aún no exista la captura real, la página SHALL usar el placeholder compartido y MARCAR la leyenda como pendiente. La imagen SHALL resolver siempre a un archivo existente para evitar enlaces rotos.

#### Scenario: Se renderiza una página con captura real

- **WHEN** se genera el sitio estático y existe `static/img/screenshots/<docId>.png`
- **THEN** la imagen de la sección Captura referencia ese archivo
- **AND** la leyenda indica que la captura fue tomada del backoffice Agrimpex
- **AND** no aparece la leyenda de captura pendiente

#### Scenario: Se renderiza una página sin captura real

- **WHEN** se genera el sitio estático y no existe `static/img/screenshots/<docId>.png`
- **THEN** la imagen de la sección Captura referencia `placeholder.svg`
- **AND** la leyenda indica que es una captura pendiente de sustituir

#### Scenario: Se captura una ruta con parámetros

- **WHEN** la ruta de origen contiene parámetros y se ejecuta `scripts/capture-screenshots.js`
- **THEN** se usa un valor concreto de ejemplo definido en el script
- **AND** la captura resultante se guarda con el `docId` de la pantalla

### Requirement: Los campos y acciones coinciden con la pantalla real

Los nombres de campos, botones y estados documentados SHALL corresponder a las etiquetas vigentes de la plantilla y los archivos de internacionalización de la pantalla de origen. Cuando una acción esté restringida por rol, la página SHALL indicarlo.

#### Scenario: Se documenta un formulario

- **WHEN** se contrasta la tabla Campos con la plantilla y el archivo de idioma del componente
- **THEN** cada etiqueta documentada existe en la pantalla real
- **AND** cada campo obligatorio aparece marcado como tal

#### Scenario: Se documenta una acción restringida

- **WHEN** una acción solo está disponible para determinados roles
- **THEN** la tabla Acciones nombra los roles autorizados
- **AND** no presenta la acción como disponible para todos los usuarios

### Requirement: Variantes de edición se documentan juntas

Cuando las rutas `add` y `edit` comparten un mismo componente de formulario, el manual SHALL documentarlas en una sola página y SHALL describir ambas acciones en la tabla Acciones, indicando la diferencia de comportamiento entre crear y modificar.

#### Scenario: Se documenta un formulario reutilizado

- **WHEN** las rutas de alta y edición apuntan al mismo componente
- **THEN** existe una única página para ese formulario
- **AND** la tabla Acciones incluye tanto "Crear" como "Editar" con su ruta correspondiente

### Requirement: Las pantallas obsoletas no se presentan como vigentes

Toda página del manual sin una ruta equivalente en el frontend SHALL retirarse del sidebar o marcarse explícitamente como obsoleta con indicación de la pantalla que la sustituye.

#### Scenario: Se revisa una página heredada

- **WHEN** una página documentada no tiene ruta equivalente en los `routes.ts` actuales
- **THEN** la página no aparece en la navegación principal
- **AND** si se conserva, incluye una nota de obsolescencia con el reemplazo

#### Scenario: Se elimina una funcionalidad descrita

- **WHEN** el manual describe una acción que ya no existe en la pantalla real
- **THEN** la acción se elimina de la tabla Acciones
- **AND** la página se marca como revisada en el inventario de auditoría
