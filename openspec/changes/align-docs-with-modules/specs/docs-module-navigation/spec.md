# Spec Delta

## Purpose

Define la navegación del manual de usuario para que cada pantalla del backoffice Agrimpex se encuentre bajo el módulo al que pertenece, con etiquetas, orden y rutas de documento estables.

## ADDED Requirements

### Requirement: El sidebar refleja los nueve módulos del producto

El manual SHALL exponer exactamente nueve categorías de primer nivel — Autenticación, Administración, Logística, Nomenclaturas, Seguridad, Reportes, Calidad, Configuración y Perfil — en ese orden, y SHALL NOT mostrar documentos sueltos mezclados con dichas categorías.

#### Scenario: Un lector abre el manual

- **WHEN** un lector abre la barra lateral del manual
- **THEN** ve las nueve categorías de módulo en el orden indicado
- **AND** no ve entradas de primer nivel que no sean una de esas categorías ni la sección de soporte "Acerca del Sistema"

#### Scenario: Se intenta agregar una sección nueva

- **WHEN** se propone una sección que no corresponde a uno de los nueve módulos
- **THEN** la sección se incorpora dentro de un módulo existente o se rechaza
- **AND** el número de categorías de primer nivel permanece en nueve

### Requirement: Cada pantalla pertenece a un solo módulo

Cada documento de pantalla SHALL aparecer bajo una única categoría de módulo. Cuando una pantalla es alcanzable desde más de un módulo del frontend, el manual SHALL designar un módulo canónico y los demás módulos SHALL referenciarlo sin duplicar el documento.

#### Scenario: Una pantalla aparece en dos módulos del frontend

- **WHEN** el inventario de auditoría identifica la misma pantalla bajo Logística y bajo Calidad
- **THEN** el documento se registra una sola vez bajo el módulo canónico declarado en el inventario
- **AND** el otro módulo enlaza al documento canónico en lugar de crear una copia

#### Scenario: Se verifica la barra lateral completa

- **WHEN** se recorren todos los `id` de documento declarados en el sidebar
- **THEN** ningún `id` aparece en dos categorías distintas

### Requirement: Notificaciones y Asistente IA quedan integrados

El manual SHALL ubicar "Notificaciones" dentro de Seguridad y "Asistente IA" dentro de Administración, sin dejarlos como entradas independientes de primer nivel.

#### Scenario: Un lector busca notificaciones

- **WHEN** un lector expande la categoría Seguridad
- **THEN** encuentra la página "Notificaciones" entre los documentos del módulo
- **AND** no encuentra "Notificaciones" como entrada raíz

#### Scenario: Un lector busca el asistente

- **WHEN** un lector expande la categoría Administración
- **THEN** encuentra la página "Asistente IA" entre las herramientas del módulo
- **AND** no encuentra "Asistente IA" como entrada raíz

### Requirement: La jerarquía de encabezados es uniforme

Todos los documentos de pantalla SHALL usar el mismo patrón de encabezados: un único H1 con el nombre de la pantalla, H2 para las secciones Propósito, Acceso, Campos, Acciones y Captura, y H3 para agrupaciones internas. La etiqueta del sidebar SHALL coincidir con el H1 del documento al que apunta.

#### Scenario: Se comparan dos páginas de módulos distintos

- **WHEN** un editor abre páginas de dos módulos diferentes
- **THEN** ambas usan el mismo orden y nivel de secciones
- **AND** cada una contiene exactamente un encabezado H1

#### Scenario: Se renombra una página

- **WHEN** cambia el H1 de una página de pantalla
- **THEN** la etiqueta del sidebar se actualiza con el mismo texto
- **AND** el `id` del documento no cambia salvo que se documente su migración

### Requirement: Las rutas antiguas guían al lector

Cuando un documento se reubica, la URL publicada anteriormente SHALL resolver a una página que indique la nueva ubicación y enlace a ella. El `id` anterior SHALL permanecer documentado en el inventario de migración.

#### Scenario: Un lector sigue un enlace antiguo

- **WHEN** un lector abre una URL publicada antes de la reorganización
- **THEN** obtiene una página que nombra la nueva sección y ofrece un enlace al documento vigente
- **AND** no obtiene una página en blanco ni un error 404 silencioso
