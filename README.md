# Hermanos Asesores - Landing Page Premium

Este es un proyecto de landing page premium diseñada para **Hermanos Asesores**, una firma de asesoría financiera de lujo.

## 🚀 Características
- **Diseño Premium Light Mode**: Estética limpia, elegante y profesional.
- **Glassmorphism**: Efectos de transparencia modernos en la navegación y tarjetas.
- **Totalmente Responsivo**: Optimizado para Desktop, Tablet y Móvil.
- **Animaciones Suaves**: Utiliza Intersection Observer para animaciones de entrada fluidas.
- **SEO Optimizado**: Etiquetas meta, estructura de encabezados semántica.
- **Interacciones 3D**: Tarjetas de servicios con efecto flip 3D.

## 📁 Estructura del Proyecto
- `index.html`: Estructura semántica del sitio.
- `styles.css`: Sistema de diseño basado en variables y flexbox/grid.
- `script.js`: Lógica de animaciones e interacciones.
- `/images`: Galería de imágenes generadas por IA coherentes con la marca.

## 🛠️ Tecnologías
- HTML5 Semántico
- CSS3 (Variables, Flexbox, Grid, Animaciones)
- Vanilla JavaScript

## ⚙️ Configuración del Webhook (n8n)
La web está configurada para enviar los datos del formulario al siguiente Webhook de n8n:
`https://insider-stunning.app.n8n.cloud/webhook/632c2c52-f63c-4a05-8c27-ca7f7cd24a1c`

Si necesitas cambiarlo, simplemente actualiza la variable `webhookUrl` en el archivo `script.js`.

## 📦 Despliegue en GitHub
Para subir este proyecto a tu propio repositorio de GitHub, sigue estos pasos:

1. Crea un repositorio nuevo en GitHub (ej. `hermanos-asesores-web`).
2. Copia la URL de tu repositorio.
3. En la terminal dentro de la carpeta `project`, ejecuta:
   ```bash
   git remote add origin TU_URL_DEL_REPOSITORIO
   git branch -M main
   git push -u origin main
   ```

## 📄 Notas
El formulario de contacto utiliza el modo `no-cors` para asegurar la compatibilidad con servidores que no tienen CORS habilitado por defecto.
