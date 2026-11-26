# Spec Delta

## Purpose

Define la cobertura documental de las páginas transversales del manual —introducción, información institucional, errores, plantilla y verificación pública— con capturas reales por sección y sin alterar lo ya publicado.

## ADDED Requirements

### Requirement: Enriquecimiento estrictamente aditivo

Las páginas existentes de Acerca del Sistema SHALL conservar sin cambios su front matter, encabezado H1 y secciones Propósito, Acceso, Captura, Campos y Acciones. Toda sección nueva SHALL añadirse sin reescribir, reordenar ni eliminar contenido previamente publicado.

#### Scenario: Se enriquece una página vigente

- **WHEN** se añade una sección informativa a una página de Acerca del Sistema ya publicada
- **THEN** el contenido anterior permanece byte a byte idéntico
- **AND** la sección nueva aparece después de las secciones existentes

### Requirement: Cobertura del mapa del manual

La página renderizada en `/docs/intro` SHALL explicar las nueve áreas funcionales del manual y el recorrido sugerido desde el acceso hasta los módulos operativos, y SHALL mostrar más de una captura real del backoffice.

#### Scenario: Se consulta la introducción del manual

- **WHEN** un usuario abre `http://localhost:3003/docs/intro`
- **THEN** encuentra descritas las áreas del manual y un recorrido de lectura
- **AND** la página muestra al menos dos capturas reales

### Requirement: Cobertura de páginas informativas y de pie

La documentación SHALL explicar el contenido de las páginas de información institucional —acerca de, contacto, privacidad y términos—, su acceso según la ruta declarada y los enlaces del pie que las conectan, sin atribuirles formularios o acciones que no ofrecen.

#### Scenario: Se consulta una página informativa

- **WHEN** un usuario abre una página de información del pie
- **THEN** la documentación describe su contenido y su acceso
- **AND** identifica los enlaces que permiten navegar entre esas páginas

### Requirement: Cobertura de páginas de error

La documentación SHALL explicar los códigos 404 y 500 del backoffice, la redirección de `/error` a `/error/404` y la acción de regreso disponible, con capturas de ambos estados.

#### Scenario: Se produce un error de navegación

- **WHEN** un usuario abre `/error/404` o `/error/500`
- **THEN** la documentación describe el código, el mensaje y la acción de regreso
- **AND** explica que la ruta vacía `/error` redirige al estado 404

### Requirement: Cobertura de la plantilla y los componentes compartidos

La documentación SHALL describir la estructura de la plantilla —menú lateral, barra superior y componentes reutilizados— y SHALL indicar qué elementos son comunes y cuáles pueden variar según el rol o el tema, sin presentarlos como páginas independientes.

#### Scenario: Se consulta la referencia de plantilla

- **WHEN** un usuario abre las páginas de plantilla y componentes compartidos
- **THEN** la documentación describe los elementos visibles y su función
- **AND** distingue los componentes comunes de los condicionados por rol o tema

### Requirement: Cobertura de la verificación pública

La documentación SHALL explicar la verificación pública por código CSV en `/verify/:code`, usando una ruta concreta de ejemplo, y SHALL distinguirla de la verificación interna `/verification`, indicando el rol requerido en cada caso.

#### Scenario: Se verifica un documento sin sesión

- **WHEN** un usuario abre la ruta concreta de verificación pública
- **THEN** la documentación describe la entrada del código y el resultado mostrado
- **AND** aclara la diferencia respecto de la verificación autenticada

### Requirement: Captura real por sección añadida

Cada sección nueva SHALL incluir al menos una captura real del backoffice Agrimpex referenciada desde `static/img/screenshots/`. Cuando una sección contenga varias vistas relevantes —mapa del manual, estados de error o verificación pública— SHALL incluir más de una captura. Ninguna sección nueva SHALL usar el placeholder compartido ni el manifiesto SHALL contener rutas con `:` o `$`.

#### Scenario: Se incorpora una sección con capturas

- **WHEN** se añade una sección nueva a una página de Acerca del Sistema
- **THEN** la sección referencia al menos una imagen PNG existente
- **AND** la ruta de captura es concreta y no contiene parámetros

### Requirement: Verificación sin cambiar el inventario

La validación `npm run check:docs` SHALL comprobar que las secciones nuevas referencian imágenes existentes y que el inventario conserva sus 113 `docId`. El enriquecimiento SHALL NOT añadir ni eliminar pantallas del inventario.

#### Scenario: Se valida el manual enriquecido

- **WHEN** se ejecuta `npm run check:docs` después del enriquecimiento
- **THEN** la validación termina sin errores
- **AND** el número de pantallas del inventario sigue siendo 113
