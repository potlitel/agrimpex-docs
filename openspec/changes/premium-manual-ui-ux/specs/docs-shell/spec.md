# Spec Delta

## Purpose

Define el comportamiento observable del chrome de navegación del manual —cabecera, sidebar y pie— incluidos sus estados visuales y el acceso configurable al backoffice de Agrimpex.

## ADDED Requirements

### Requirement: Cabecera con estado al desplazarse

La cabecera SHALL mostrar el logo y la navegación sobre una superficie sólida cuando la página está en la parte superior, y SHALL pasar a una superficie semitransparente con desenfoque de fondo cuando el usuario desplaza la página. El cambio SHALL ser reversible al volver arriba y SHALL conservar la legibilidad del texto y de los controles en ambos estados.

#### Scenario: La página está arriba

- **WHEN** un usuario abre cualquier página del manual sin desplazarse
- **THEN** la cabecera muestra su fondo opaco y el logo y los enlaces son legibles

#### Scenario: El usuario desplaza la página

- **WHEN** el desplazamiento supera el umbral definido
- **THEN** la cabecera aplica fondo semitransparente con desenfoque y sombra sutil
- **AND** los enlaces y el selector de tema permanecen visibles y accesibles

#### Scenario: El usuario vuelve al inicio

- **WHEN** el desplazamiento vuelve por debajo del umbral
- **THEN** la cabecera recupera su fondo opaco sin parpadeo

### Requirement: Acceso al backoffice desde la cabecera

La cabecera SHALL incluir una acción visible «Volver al sistema» en el lado derecho, junto al selector de tema. El destino SHALL tomarse de `AGRIMPEX_BACKOFFICE_URL` cuando exista y, en su defecto, de `https://agrimpex.eicma.cu`. La acción SHALL conservar su etiqueta legible y su estado de foco en ambos modos de color.

#### Scenario: No hay variable de entorno configurada

- **WHEN** se renderiza el manual sin `AGRIMPEX_BACKOFFICE_URL`
- **THEN** la acción «Volver al sistema» enlaza a `https://agrimpex.eicma.cu`

#### Scenario: Hay una URL configurada

- **WHEN** `AGRIMPEX_BACKOFFICE_URL` contiene una URL válida
- **THEN** la acción enlaza exactamente a esa URL y aparece junto al selector de tema

#### Scenario: El usuario usa teclado

- **WHEN** el usuario tabula hasta la acción «Volver al sistema»
- **THEN** aparece un indicador de foco visible y al activarla navega al destino configurado

### Requirement: Sidebar jerárquico con estado activo

El sidebar SHALL presentar las secciones principales con jerarquía tipográfica y espaciados que permitan distinguir categorías de documentos, SHALL asociar un icono a cada sección principal y SHALL marcar la sección activa con un borde izquierdo del color primario y un fondo sutil. Los iconos SHALL ser decorativos para tecnología de asistencia y SHALL no alterar las rutas ni los identificadores de los documentos.

#### Scenario: El usuario examina las secciones

- **WHEN** se muestra el sidebar en una página de documentación
- **THEN** cada sección principal muestra su icono y una jerarquía visual diferenciada de sus documentos hijos
- **AND** los iconos no se anuncian como contenido en lectores de pantalla

#### Scenario: El usuario navega a un documento

- **WHEN** se abre una página cuyo documento pertenece a una sección principal
- **THEN** esa sección muestra borde izquierdo primario y fondo sutil
- **AND** la ruta del documento permanece igual que antes del cambio

### Requirement: Pie de página multicolumna

El pie SHALL organizar sus enlaces en múltiples columnas e SHALL mostrar logo, enlaces rápidos a documentación, copyright y enlaces a GitLab y EICMA Soft. Los enlaces rápidos existentes SHALL permanecer disponibles con las mismas rutas.

#### Scenario: El usuario llega al final de una página

- **WHEN** se desplaza hasta el pie del manual
- **THEN** ve varias columnas con logo, enlaces rápidos, copyright y enlaces al proyecto
- **AND** los enlaces a Introducción, Login y Administración siguen apuntando a sus rutas originales

#### Scenario: El usuario cambia de tema

- **WHEN** el pie se muestra en modo oscuro
- **THEN** mantiene contraste suficiente entre texto, enlaces y fondo
