# 📚 Agrimpex - Manual de Usuario 🌾

> 🖥️ Sistema de Gestión de Importaciones - Documentación oficial

[![Docusaurus](https://img.shields.io/badge/Docusaurus-3.9.2-blue?style=flat&logo=docusaurus)](https://docusaurus.io)
[![React](https://img.shields.io/badge/React-19.0.0-61DAFB?style=flat&logo=react)](https://react.dev)
[![Node](https://img.shields.io/badge/Node.js-%3E%3D20.0-339933?style=flat&logo=node.js)
[![Licencia](https://img.shields.io/badge/Licencia-Propietaria-orange)](https://eicma.cu)

---

## 📋 Descripción del Proyecto

**Agrimpex** es un sistema integral de gestión de importaciones desarrollado por **[EICMA Soft](https://eicma.cu)** 🇨🇺, diseñado para optimizar y controlar todo el proceso de importación de mercancías.

Este repositorio contiene la **documentación oficial del usuario** 📖, construida con [Docusaurus](https://docusaurus.io), un generador moderno de sitios estáticos basado en React.

### 🛠️ Tecnologías Utilizadas

| Tecnología | Propósito |
|------------|-----------|
| 🦖 Docusaurus 3.9.2 | Framework de documentación |
| ⚛️ React 19.0.0 | UI del sitio |
| 📝 MDX | Markdown + JSX |
| 🎨 TailwindCSS | Estilos (en la app principal) |

### 📱 Aplicación Principal

El sistema Agrimpex (no incluido en este repositorio) está desarrollado con:
- **Frontend**: 🌐 Angular + TailwindCSS
- **Backend**: 🔧 Symfony (API Platform) con JWT
- **Base de datos**: 🗄️ MySQL

---

## 📦 Instalación

```bash
# 📥 Clonar el repositorio
git clone https://github.com/usuario/agrimpex-docs.git
cd agrimpex-docs

# 📚 Instalar dependencias
yarn install
# o si prefieres npm
npm install
```

---

## 🚀 Desarrollo Local

```bash
# 🏃 Iniciar servidor de desarrollo
yarn start
# o
npm run start
```

Este comando inicia un servidor de desarrollo local y abre automaticamente tu navegador 🌐. La mayoría de los cambios se reflejan en tiempo real sin necesidad de reiniciar el servidor.

> � **Nota:** El servidor estará disponible en `http://localhost:3000`

---

## 🏗️ Construcción para Producción

```bash
# 📦 Generar contenido estático
yarn build
# o
npm run build
```

Este comando genera contenido estático en el directorio `build` 📁, que puede ser desplegado en cualquier servicio de hosting estático.

---

## ☁️ Despliegue

### Usando SSH (recomendado 🔐):

```bash
USE_SSH=true yarn deploy
```

### Sin SSH:

```bash
GIT_USER=<Tu_usuario_de_GitHub> yarn deploy
```

Este comando construye el sitio web y lo envía a la rama `gh-pages` 📤, listo para ser alojado en GitHub Pages.

---

## 📂 Estructura del Proyecto

```
agrimpex-docs/
├── 📄 docs/                  # 📖 Documentación en Markdown
│   ├── 🔐 auth/              # Documentación de autenticación
│   ├── ⚙️ administracion/    # Módulo de administración
│   ├── 🚚 logistica/         # Módulo de logística
│   ├── 📑 nomenclaturas/     # Catálogos y nomenclaturas
│   └── 🔒 seguridad/         # Documentación de seguridad
├── 🎨 src/                   # Código fuente custom
│   ├── 📊 css/               # Estilos personalizados
│   └── 🧩 components/        # Componentes React
├── 🖼️ static/                # Activos estáticos (imágenes, favicon)
├── ⚙️ scripts/                # Utilidades y scripts
├── 📝 docusaurus.config.js   # Configuración de Docusaurus
└── 📑 sidebars.js            # Configuración de navegación
```

---

## 📖 Contenido de la Documentación

La documentación cubre los siguientes módulos 📚:

1. **📌 Introducción** - ¿Qué es Agrimpex?
2. **🔐 Autenticación** - Sistema de login y seguridad
3. **👥 Administración** - Gestión de usuarios y grupos
4. **🚚 Logística** - Importaciones, contenedores, desaduanaje, entregas
5. **📑 Nomenclaturas** - Catálogos (17 tipos: países, contenedores, monedas, productos...)
6. **🔒 Seguridad** - Trazabilidad y auditoría

---

## 🤝 Contribuciones

¡Las contribuciones son bienvenidas! 🎉 Por favor, lee las [guías de contribución](https://gitlab.eicma.cu/eicma/agrimpex) para más detalles.

---

## 📞 Contacto

| Canal | Enlace |
|-------|--------|
| 🌐 Sitio Web | [https://eicma.cu](https://eicma.cu) |
| 🐙 GitLab | [https://gitlab.eicma.cu/eicma/agrimpex](https://gitlab.eicma.cu/eicma/agrimpex) |
| 📧 Email | contacto@eicma.cu |

---

## 📅 Información del Proyecto

- **Versión**: 1.0.0
- **Última actualización**: 2026
- **Desarrollador**: EICMA Soft 🇨🇺
- **Licencia**: Propietaria

---

<div align="center">

🇨🇺 *Desarrollado con ❤️ por EICMA Soft*

</div>
