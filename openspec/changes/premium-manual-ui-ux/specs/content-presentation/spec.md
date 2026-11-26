# Spec Delta

## Purpose

Define la presentación y el feedback visual del contenido del manual: aparición progresiva al desplazarse, transiciones en controles y legibilidad de bloques de código y tablas sin alterar el contenido publicado.

## ADDED Requirements

### Requirement: Aparición progresiva del contenido

Los bloques de contenido SHALL aparecer con una transición suave de opacidad y desplazamiento vertical cuando entran en el área visible, SHALL completarse una sola vez por bloque y SHALL no provocar desplazamientos bruscos del layout. Cuando el sistema solicita movimiento reducido, los bloques SHALL mostrarse de inmediato sin animación.

#### Scenario: El usuario desplaza la página

- **WHEN** un bloque de contenido entra por primera vez en el área visible
- **THEN** aparece con una transición suave de opacidad y desplazamiento vertical
- **AND** el contenido circundante no cambia de posición de forma brusca

#### Scenario: El bloque ya fue mostrado

- **WHEN** el usuario vuelve a desplazarse sobre un bloque ya animado
- **THEN** el bloque permanece visible sin repetir la animación

#### Scenario: El sistema solicita movimiento reducido

- **WHEN** el usuario activa la preferencia de movimiento reducido
- **THEN** los bloques se muestran completos sin animación de entrada

### Requirement: Transiciones en controles

Los botones, enlaces y elementos interactivos del sidebar SHALL usar transiciones suaves de aproximadamente 200 ms en sus cambios de color, fondo y borde, y SHALL conservar un indicador de foco visible. Las transiciones SHALL no retrasar la activación del control.

#### Scenario: El usuario pasa el cursor por un enlace

- **WHEN** el cursor entra en un botón, enlace o elemento del sidebar
- **THEN** el cambio visual ocurre de forma gradual en aproximadamente 200 ms
- **AND** el control responde de inmediato al clic

#### Scenario: El usuario navega con teclado

- **WHEN** un control interactivo recibe el foco
- **THEN** se muestra un contorno de foco visible sobre el fondo correspondiente

### Requirement: Legibilidad de código y tablas

Los bloques de código y las tablas SHALL mostrar texto, bordes y fondos con contraste suficiente en modo claro y oscuro, de modo que las celdas, columnas y resaltados de sintaxis se distingan sin depender del color del tema por defecto.

#### Scenario: El usuario lee una tabla en modo claro

- **WHEN** se muestra una tabla de documentación con tema claro
- **THEN** el texto, los bordes de fila y el encabezado se distinguen claramente del fondo

#### Scenario: El usuario lee código en modo oscuro

- **WHEN** se muestra un bloque de código con tema oscuro
- **THEN** los tokens resaltados y el texto conservan contraste frente al fondo del bloque

### Requirement: Contenido accesible sin JavaScript

El contenido de las páginas SHALL permanecer visible y legible cuando las animaciones no puedan ejecutarse, incluidos entornos sin JavaScript o sin soporte de observación de intersección.

#### Scenario: El navegador no ejecuta las animaciones

- **WHEN** el mecanismo de animación no está disponible
- **THEN** los bloques de contenido se muestran completos desde el inicio

#### Scenario: JavaScript está desactivado

- **WHEN** un usuario abre una página con JavaScript desactivado
- **THEN** puede leer el texto, las tablas y los bloques de código sin contenido oculto
