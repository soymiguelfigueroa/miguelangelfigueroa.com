# Portafolio Profesional — Miguel Ángel Figueroa

Portafolio web moderno, ultrarrápido y responsivo para **Full Stack Developer**, construido con **Astro 5** y **Tailwind CSS**.

---

## 🚀 Inicio Rápido

### 1. Iniciar servidor de desarrollo
```bash
npm run dev
```
Abre en tu navegador: [http://localhost:4321](http://localhost:4321)

### 2. Generar compilación estática (Producción)
```bash
npm run build
```
Los archivos optimizados para producción se generarán en la carpeta `dist/`.

---

## 🛠️ Personalización de Datos

Toda la información del portafolio está completamente desacoplada de la interfaz en:
👉 `src/data/portfolio.ts`

Desde allí puedes actualizar fácilmente:
- **Datos Personales**: Nombre, rol, biografía, redes sociales y correo de contacto.
- **Proyectos**: Título, descripción, tags de tecnologías, enlaces a demo y repositorio de GitHub, métricas de impacto.
- **Habilidades / Stack**: Tecnologías por áreas (Frontend, Backend, Bases de Datos, DevOps/Cloud).
- **Experiencia**: Línea de tiempo laboral, empresas, fechas y logros concretos.
- **Educación y Certificaciones**: Títulos universitarios y enlaces de verificación de certificados.
- **Currículum**: Reemplaza el archivo `public/cv.pdf` con tu PDF real.

---

## 🎨 Características

- **Diseño Moderno & Mobile-First**: Optimizado para dispositivos móviles, tablets y monitores de escritorio.
- **Modo Oscuro / Claro**: Selector interactivo persistente en `localStorage` y sin parpadeo de carga (FOUC).
- **Core Web Vitals**: Puntuaciones Lighthouse cercanas al 100% gracias a la arquitectura estática de Astro.
- **Accesibilidad (a11y)**: Navegación accesible por teclado y contraste adecuado.
- **Acciones Rápidas**: Copiado de correo electrónico al portapapeles con feedback instantáneo y botón de descarga de CV.

---

## 📦 Despliegue

Puedes desplegar este portafolio con 1 clic en:
- **Vercel** (`npx vercel`)
- **Netlify** (`npx netlify deploy`)
- **Cloudflare Pages** o **GitHub Pages**
