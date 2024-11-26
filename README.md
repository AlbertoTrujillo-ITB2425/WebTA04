# WebTA04 - Portafolio del Grupo 7

Este proyecto es el portafolio web del **Grupo 7** del grado **ASIXc1B** **MDS** **TA04**, el cual muestra información sobre los integrantes del grupo: **Alberto**, **Oscar** e **Izan**. La página web está alojada en **GitHub Pages** y está disponible a través del dominio **[grup7.cat](http://grup7.cat)**.

## Descripción

La web está diseñada para presentar los perfiles y trabajos de los miembros del grupo, con una estructura simple y fácil de navegar. Cada integrante tiene su propia página donde se describe su información y proyectos. Además, el sitio incluye algunas automatizaciones que aseguran que siempre haya un respaldo actualizado del proyecto.

### Integrantes del Grupo

- **Alberto**
- **Oscar**
- **Izan**

## Estructura del Proyecto

La estructura de archivos de este repositorio es la siguiente:

### Descripción de los Archivos y Carpetas

- **`assets/`**:
  - Contiene recursos estáticos como imágenes, hojas de estilo CSS y otros archivos necesarios para el diseño y funcionamiento de la página web.

- **`src/`**:
  - Incluye el archivo **`proyectos.js`**, un archivo JavaScript utilizado para agregar interactividad y funcionalidades dinámicas en el sitio web.

- **`workflows/`**:
  - Carpeta con los flujos de trabajo de **GitHub Actions**.
  - **`backup.yml`**: Archivo de configuración que automatiza las copias de seguridad del repositorio, asegurando que siempre haya una versión actualizada del proyecto.

- **`CNAME`**:
  - Archivo utilizado para configurar un **dominio personalizado**. En este caso, el dominio **`grup7.cat`** es el que se usa para acceder a la página web.

- **`alberto.html`**, **`izan.html`**, **`oscar.html`**:
  - Páginas HTML individuales para cada uno de los integrantes del grupo. Estas páginas contienen información sobre cada persona, sus proyectos y su trabajo.

- **`index.html`**:
  - La **página principal** del sitio web, donde los usuarios pueden encontrar un menú de navegación y acceder a las páginas individuales de los miembros del grupo.

- **`googlef9cdad30c7a90d88.html`**:
  - Un archivo utilizado para **verificar** el sitio en **Google Search Console**, lo que permite monitorear el rendimiento del sitio web y mejorar su visibilidad en los motores de búsqueda.

## Dominio Personalizado

Este sitio está configurado con un **dominio personalizado**: **[grup7.blog](http://grup7.blog)**. Si deseas visitar el portafolio del grupo, puedes hacerlo directamente desde esta URL.

Para configurar el dominio en GitHub Pages, hemos utilizado el archivo **`CNAME`**, que contiene el nombre del dominio **`grup7.blog`**. Asegúrate de que el dominio esté correctamente configurado en tu proveedor de DNS para que apunte a GitHub Pages.

## Flujo de Trabajo de GitHub Actions

Este repositorio utiliza **GitHub Actions** para automatizar las copias de seguridad del proyecto. El archivo **`backup.yml`** dentro de la carpeta **`workflows/`** está configurado para hacer una copia de seguridad automática del repositorio en otro repositorio de respaldo cada vez que se realice un **push** a la rama principal (`main`).

### Pasos del Flujo de Trabajo:
1. **Clonación del Repositorio Original**: Se realiza un `checkout` del repositorio para tener los archivos más recientes.
2. **Clonación del Repositorio de Respaldo**: Se clona el repositorio de respaldo donde se almacenarán las copias.
3. **Copia de Archivos**: Los archivos del repositorio original se copian al repositorio de respaldo.
4. **Commit y Push**: Se realizan un `git commit` y `git push` para guardar los cambios en el repositorio de respaldo.

Este flujo de trabajo asegura que el proyecto siempre esté respaldado y que cualquier cambio se guarde automáticamente.

## Contribuciones

Si deseas contribuir al proyecto, puedes hacer un **fork** de este repositorio y enviar un **pull request** con tus cambios. Si tienes alguna sugerencia o reporte de problemas, no dudes en abrir un **issue**.

## Licencia

Este proyecto está bajo la **Licencia MIT**. Consulta el archivo LICENSE para más detalles.

---

Gracias por visitar este repositorio. Si tienes alguna pregunta o necesitas asistencia, no dudes en abrir un **issue** o contactarme.

