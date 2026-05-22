# TENER EN CUENTA

## 1. Estructura y Navegación (User Experience - UX)

Tu profesor evaluará si el catálogo es realmente "interactivo".

- **Diseño Modular**: Dado que son 12 a 15 secciones (o fichas), evita poner todo en una sola página gigante que obligue al usuario a hacer scroll infinito. Es mejor usar "pestañas" o un menú lateral/superior que permita saltar entre: Técnicas, Medios de Comunicación, Co-creación, y Evaluación.
- **Navegación Intuitiva**: Asegúrate de que siempre haya un botón de "Inicio" o "Volver al menú principal".
- **Responsividad**: Como es una web, debe verse bien tanto en una laptop como en un celular. Si usas algún framework básico como Bootstrap o Tailwind CSS, esto será muy sencillo de lograr.

## 2. Estándares Técnicos (Engineering Mindset)

Como estudiante de Ingeniería de Sistemas, tu código debe ser limpio:

- **Semántica HTML**: Usa etiquetas apropiadas (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`). No uses todo dentro de `<div>`.
- **Separación de responsabilidades**:
  - **HTML**: Estructura (lo que el usuario ve).
  - **CSS**: Estilo (colores, fuentes, espacios).
  - **JS** (Opcional): Si quieres añadir interactividad real (ej. que al hacer clic en un botón se despliegue un modal con la información de la herramienta).
- **Control de Versiones**: Aprovecha que es GitHub. Haz commits frecuentes con mensajes claros (ej: `feat: add zotero description`, `fix: adjust navigation menu`). Esto es evidencia indiscutible de que el equipo trabajó de forma colaborativa.

## 3. Contenido y Acceso

- **Hipervínculos**: El profesor pidió explícitamente: "Se puede usar link que nos deriven a la información". Asegúrate de que los enlaces externos (como a Zotero, Canva, ChatGPT) se abran en una pestaña nueva (`target="_blank"`) para no sacar al usuario de tu catálogo.
- **Jerarquía Visual**: Usa encabezados claros (`<h1>` para el título principal, `<h2>` para categorías, `<h3>` para nombres de herramientas). Esto ayuda tanto al usuario como a la lectura del código.

## 4. Preparación para la Exposición (El "Plus")

- **Justificación**: En alguna parte de la web (o en el README), incluye una sección de "Justificación Metodológica". Explica brevemente por qué seleccionaron esas herramientas para el e-learning. Esto responde directamente a la instrucción número 5 de tu guía.
- **Relación con competencias**: Puedes añadir una pequeña tabla o lista que relacione las herramientas con las competencias del tutor investigador. Esto demostrará que entendieron el fondo pedagógico y no solo la parte técnica.

## 5. La "Hoja de Ruta" de Trabajo (Para el equipo)

Antes de empezar a programar, te sugiero que se repartan las tareas así:

1. **Frontend/Arquitectura (Tú)**: Configurar el repositorio, la estructura base (HTML/CSS) y el despliegue en GitHub Pages.
2. **Redacción de Fichas (Equipo)**: Que tus compañeros escriban el contenido de las 12-15 fichas en un documento compartido (Notion o Word).
3. **Integración**: Tú tomas ese contenido y lo maquetas en la web.
