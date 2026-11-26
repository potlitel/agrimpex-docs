# Spec Delta

## Purpose

Permite al usuario encontrar y abrir páginas del manual desde cualquier lugar mediante un palette de comandos con atajo de teclado, resultados categorizados y un índice generado localmente.

## ADDED Requirements

### Requirement: Atajo global para abrir el palette

El manual SHALL abrir un modal de búsqueda global al pulsar `Ctrl+K` en Windows/Linux o `Cmd+K` en macOS desde cualquier página, y SHALL colocar el foco en el campo de entrada al abrirlo. El atajo SHALL evitar el comportamiento por defecto del navegador y SHALL no activarse cuando falte la tecla modificadora.

#### Scenario: El usuario pulsa el atajo

- **WHEN** un usuario pulsa `Ctrl+K` o `Cmd+K` mientras visualiza el manual
- **THEN** se abre el modal de búsqueda con el campo de entrada enfocado
- **AND** el navegador no realiza su acción predeterminada para esa combinación

#### Scenario: El usuario pulsa la letra sin modificador

- **WHEN** un usuario escribe `k` sin `Ctrl` ni `Cmd`
- **THEN** no se abre el modal y el texto se introduce donde corresponda

### Requirement: Búsqueda sobre índice local

El modal SHALL consultar un índice generado a partir de los títulos, encabezados y categorías del manual, sin realizar peticiones a servicios externos. Los resultados SHALL mostrar el título de la página, la categoría a la que pertenece y una referencia al fragmento encontrado, y SHALL ordenarse por relevancia del texto buscado.

#### Scenario: El usuario busca un término conocido

- **WHEN** un usuario escribe `login` en el campo de búsqueda
- **THEN** el modal muestra las páginas del manual que coinciden con ese término
- **AND** cada resultado indica su categoría y el texto que coincidió

#### Scenario: El usuario busca algo sin coincidencias

- **WHEN** el texto introducido no coincide con ninguna entrada del índice
- **THEN** el modal muestra un estado vacío comprensible en lugar de una lista vacía sin explicación

#### Scenario: El manual se ejecuta sin conexión externa

- **WHEN** el usuario abre el modal en un entorno sin acceso a servicios de búsqueda externos
- **THEN** los resultados se obtienen del índice local del sitio

### Requirement: Resultados categorizados y navegación por teclado

El modal SHALL agrupar los resultados por categoría del manual, SHALL mostrar pistas visuales de atajos de teclado y SHALL permitir recorrer los resultados con las flechas arriba y abajo, abrir el seleccionado con `Enter` y cerrar con `Escape`, devolviendo el foco al elemento anterior.

#### Scenario: El usuario recorre resultados

- **WHEN** hay resultados y el usuario pulsa la flecha abajo
- **THEN** el resaltado pasa al siguiente resultado, respetando el orden por categoría
- **AND** `Enter` abre la página seleccionada

#### Scenario: El usuario cancela la búsqueda

- **WHEN** el usuario pulsa `Escape` o hace clic en el fondo difuminado
- **THEN** el modal se cierra sin navegar y el foco vuelve al elemento que lo abrió

#### Scenario: El usuario ve las pistas de atajos

- **WHEN** el modal está abierto
- **THEN** se muestran indicadores de teclado para abrir, navegar, seleccionar y cerrar

### Requirement: Accesibilidad y presentación del modal

El modal SHALL presentar un fondo difuminado, un campo de entrada de tamaño destacado y resultados legibles en modo claro y oscuro; SHALL declarar su rol de diálogo, SHALL mantener el foco dentro mientras esté abierto y SHALL adaptarse a pantallas estrechas sin perder el acceso a los resultados.

#### Scenario: El modal se abre en modo oscuro

- **WHEN** un usuario con tema oscuro abre el palette
- **THEN** el fondo difuminado, el campo y los resultados conservan contraste suficiente

#### Scenario: El modal se abre en una pantalla estrecha

- **WHEN** el ancho de la pantalla es inferior al de un escritorio
- **THEN** el modal ocupa el espacio disponible y los resultados siguen siendo visibles y seleccionables
