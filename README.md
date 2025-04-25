# 🚀 ecomers-astro

Sitio web de e-commerce desarrollado con [Astro](https://astro.build/) y Node.js.  
Carga productos por categoría a través de la URL usando parámetros GET, y ofrece una interfaz dinámica con componentes reutilizables.

---

## 📦 Stack Técnico

- ⚙️ Astro `^5.7.5`
- 🟩 Node.js `v18.20.6`
- 💅 HTML + CSS + Astro Components

---

## 📁 Archivos ignorados (.gitignore)

Build output

dist/
Tipos generados

.astro/
Dependencias

node_modules/
Logs

npm-debug.log* yarn-debug.log* yarn-error.log* pnpm-debug.log*
Variables de entorno

.env .env.production
macOS

.DS_Store
JetBrains

.idea/


---

## 🛠️ Configuración requerida

Una vez descargado el repositorio, asegurate de que tu archivo `astro.config.mjs` tenga la siguiente configuración:

```js
import { defineConfig } from 'astro/config';

export default defineConfig({
  output: 'server',
});

    ✅ Esto es obligatorio para que las rutas funcionen correctamente con parámetros GET.

🌐 Estructura del proyecto
📄 Páginas

    index.astro
    📍 src/pages/index.astro
    Página de inicio que carga automáticamente los siguientes componentes:
    <Header />, <Welcome /> y <Footer />

    ProductosPage.astro
    📍 src/pages/ProductosPage.astro
    Similar a la principal, pero con contenido dinámico en el centro gracias al componente <Productos />, que muestra los productos por categoría.

🧩 Componentes

    <Header />
    📍 src/components/Header.astro
    Cabecera del sitio con menú horizontal. Las opciones redirigen a ProductosPage.astro enviando la categoría como parámetro.

    <Welcome />
    📍 src/components/Welcome.astro
    Contenido de bienvenida que incluye atajos a categorías. Redirige a ProductosPage.astro con el parámetro correspondiente.

    <Footer />
    📍 src/components/Footer.astro
    Pie de página del sitio. (Actualmente sin funcionalidades activas)

    <Productos />
    📍 src/components/Productos.astro
    Muestra productos según la categoría pasada por GET, por ejemplo:
    ProductosPage?categoria=category/smartphones

    🚧 En desarrollo:

        🛒 Agregar al carrito ("Comprar")

        🙋‍♂️ Registro de usuario ("Registrarse")

🧪 Requisitos

    Node.js v18.20.6 o superior

    Astro CLI instalado globalmente (opcional pero recomendado)

💻 Instalación rápida

git clone https://github.com/koke2911/ecomers-astro
cd ecomers-astro
npm install
npm run dev

📬 Contacto

¿Tenés ideas o sugerencias? ¡Abrí un issue o mandá un pull request!
📧 victor.martinez.zamorano@estudiante.ipss.cl 
📝 Licencia

VMZ © 2025 - [Victor Martínez Zamora]


