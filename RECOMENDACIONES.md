# Recomendaciones para la Página Web Interactiva

## 1. Stack Tecnológico

| Tecnología | Por qué usarla |
|---|---|
| **HTML5** | Semántica limpia (`<header>`, `<nav>`, `<section>`, `<footer>`) |
| **CSS3** | Estilos, colores, fuentes, animaciones y responsividad |
| **JavaScript (vanilla)** | Interactividad sin depender de frameworks pesados |
| **GitHub Pages** | Hosting gratuito y directo desde el repo |

---

## 2. Arquitectura del Sitio

```
/
├── index.html              # Página principal (carátula + navegación)
├── pages/
│   ├── tecnicas.html        # Técnicas didácticas
│   ├── medios-comunicacion.html
│   ├── medios-cocreacion.html
│   └── medios-evaluacion.html
├── assets/
│   ├── css/
│   │   └── style.css
│   ├── js/
│   │   └── main.js
│   └── images/
└── README.md
```

**Alternativa:** Una sola página con secciones y navegación por anclas (`#seccion`) para evitar múltiples archivos.

---

## 3. Diseño y UX

- **Menú lateral fijo** o **barra superior sticky** para navegar entre categorías sin perder el contexto.
- **Cards o fichas visuales** para cada herramienta — imagen/icono + nombre + breve descripción + botón "Ver más".
- **Modales** para expandir la información de cada ficha sin recargar la página.
- **Animaciones suaves** en transiciones y hover para sensación interactiva.
- **Responsive** con media queries y flexbox/grid.

---

## 4. Interactividad con JavaScript

| Funcionalidad | Cómo implementarla |
|---|---|
| Navegación por pestañas | Mostrar/ocultar secciones con clases `active` |
| Modales | `display: flex` + overlay backdrop |
| Buscador rápido | Filtro en tiempo real sobre las fichas |
| Scroll suave | `scroll-behavior: smooth` |
| Menú hamburguesa (mobile) | Toggle con JS |

---

## 5. GitHub Pages

- El sitio se publica automáticamente desde la rama `main` (o `gh-pages`) en:
  `https://<usuario>.github.io/<repo>/`
- Para rutas internas usa **rutas relativas** (`./pages/tecnicas.html`), no absolutas.
- Mantén el repo público para que funcione.

---

## 6. Estructura de Cada Ficha (Card)

```html
<div class="card">
  <img src="assets/images/zotero-icon.png" alt="Zotero" />
  <h3>Zotero</h3>
  <p>Gestor de referencias bibliográficas...</p>
  <a href="#" class="btn-ver-mas" data-id="zotero">Ver más</a>
</div>
```

---

## 7. Flujo de Trabajo Recomendado

1. Crear `index.html` con carátula y estructura base.
2. Maquetar las cards de herramientas con HTML + CSS.
3. Agregar JS para modales / pestañas.
4. Publicar en GitHub Pages para feedback temprano.
5. Refinar estilos y contenido.
6. Presentación final.

---

## 8. Checklist Final

- [ ] Carátula con nombre del catálogo e integrantes
- [ ] Navegación funcional entre todas las secciones
- [ ] 12-15 fichas completas con nombre, descripción, uso científico, ventajas, ejemplo y enlace
- [ ] Los enlaces externos se abren en `target="_blank"`
- [ ] Diseño responsive (mobile + desktop)
- [ ] Publicado en GitHub Pages y funcionando
- [ ] Participación de todos los integrantes (commits visibles en GitHub)
- [ ] Justificación metodológica incluida
