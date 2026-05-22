# Control de Enlaces y Recursos Faltantes en el Proyecto

A continuación se detalla la lista de categorías y herramientas con sus enlaces reales extraídos del archivo interactivo de PowerPoint (`Catalogo_Interactivo_InvestigaLab_Virtual.pptx.pptx`), seguido de una auditoría comparativa que identifica qué elementos faltan o se deben reorganizar en la aplicación web actual.

---

## 1. Listado Completo de Categorías y Recursos (Con Enlaces Reales)

### 1. Técnicas de Problematización
* **Cola de pescado**: [Abrir recurso ↗](https://miro.com/diagramming/what-is-a-fishbone-diagram/)
* **Árbol de problemas**: [Abrir recurso ↗](https://miro.com/templates/problem-tree/)
* **Línea de tiempo**: [Abrir recurso ↗](https://www.canva.com/create/timeline-maker/)

### 2. Organización Conceptual
* **Mapas conceptuales**: [Abrir recurso ↗](https://www.canva.com/create/concept-maps/)
* **Mapas mentales**: [Abrir recurso ↗](https://www.mindmeister.com/)
* **Referencia clave (Novak y Cañas)**: [Abrir recurso ↗](https://cmap.ihmc.us/docs/theory-of-concept-maps)

### 3. Revisión de Fuentes
* **Barrida de textos**: [Abrir recurso ↗](https://scholar.google.com/)

### 4. Comunicación Académica
* **Foros virtuales**: [Abrir recurso ↗](https://docs.moodle.org/en/Forum_activity)
* **Paneles**: [Abrir recurso ↗](https://support.zoom.com/hc)
* **Debates guiados**: [Abrir recurso ↗](https://www.canva.com/education/)

### 5. Medios de Comunicación y Exposición
* **Videos**: [Abrir recurso ↗](https://www.youtube.com/)
* **Prezi**: [Abrir recurso ↗](https://prezi.com/)
* **Genially**: [Abrir recurso ↗](https://genially.com/es/)
* **Canva**: [Abrir recurso ↗](https://www.canva.com/create/presentations/)
* **PowerPoint interactivo**: [Abrir recurso ↗](https://support.microsoft.com/powerpoint)

### 6. Comunicación Sincrónica y Académica
* **Zoom**: [Abrir recurso ↗](https://zoom.us/)
* **Google Meet**: [Abrir recurso ↗](https://meet.google.com/)
* **WhatsApp académico**: [Abrir recurso ↗](https://www.whatsapp.com/)

### 7. Medios de Co-creación Visual
* **Miro**: [Abrir recurso ↗](https://miro.com/)
* **MindMeister**: [Abrir recurso ↗](https://www.mindmeister.com/)
* **Padlet**: [Abrir recurso ↗](https://padlet.com/)
* **Jamboard**: [Abrir recurso ↗](https://support.google.com/jamboard?hl=es)
* **Lucidchart**: [Abrir recurso ↗](https://www.lucidchart.com/)

### 8. Medios de Organización del Trabajo
* **Trello**: [Abrir recurso ↗](https://trello.com/)
* **Notion**: [Abrir recurso ↗](https://www.notion.so/)

### 9. Evaluación (Gamificación)
* **Quizizz**: [Abrir recurso ↗](https://quizizz.com/)
* **Kahoot**: [Abrir recurso ↗](https://kahoot.com/)
* **Mentimeter**: [Abrir recurso ↗](https://www.mentimeter.com/)
* **Wordwall**: [Abrir recurso ↗](https://wordwall.net/)

### 10. Gestión del Aprendizaje (LMS)
* **Moodle**: [Abrir recurso ↗](https://moodle.org/)
* **Google Classroom**: [Abrir recurso ↗](https://classroom.google.com/)
* **Canvas LMS**: [Abrir recurso ↗](https://www.instructure.com/canvas)

### 11. Investigación y Apoyo con IA
* **Zotero**: [Abrir recurso ↗](https://www.zotero.org/)
* **Mendeley**: [Abrir recurso ↗](https://www.mendeley.com/)
* **ChatGPT**: [Abrir recurso ↗](https://chatgpt.com/)
* **Elicit**: [Abrir recurso ↗](https://elicit.com/)
* **Scite.ai**: [Abrir recurso ↗](https://scite.ai/)

---

## 2. Auditoría Comparativa del Proyecto Web

Al contrastar la base de datos actual en `assets/js/main.js` con las 11 categorías y recursos del PowerPoint, se identifican las siguientes diferencias y ausencias:

### A. Elementos Faltantes (No implementados o combinados)
1. **Separación de Mapas Conceptuales y Mentales**:
   * *Estado actual:* Están agrupados en una sola tarjeta (`mapas-conceptuales` con el nombre `"Mapas Conceptuales / Mentales"`).
   * *Acción:* Deben separarse en dos herramientas independientes en la base de datos de `main.js`:
     * **Mapas Conceptuales** (Enlace: `https://www.canva.com/create/concept-maps/`)
     * **Mapas Mentales** (Enlace: `https://www.mindmeister.com/`)
2. **Referencia Clave (Novak y Cañas)**:
   * *Estado actual:* Falta por completo en la sección de "Organización Conceptual".
   * *Acción:* Añadir como una nueva herramienta independiente en `main.js` (Enlace: `https://cmap.ihmc.us/docs/theory-of-concept-maps`).

### B. Reestructuración de Categorías/Subcategorías
1. **Subcategoría de Comunicación Sincrónica**:
   * *Estado actual:* Las herramientas **Zoom**, **Google Meet** y **WhatsApp Académico** están ubicadas dentro del tab "Comunicación y Exposición" en la subcategoría de "Medios de Exposición".
   * *Acción:* Para coincidir exactamente con el orden y estructura académica del PowerPoint:
     * Crear una nueva subcategoría en `subcategoryMeta.comunicacion.subs` llamada `sincrónica` ("Comunicación Sincrónica y Académica").
     * Mover **Zoom**, **Google Meet** y **WhatsApp Académico** a esta subcategoría en `main.js`.

### C. Enlaces Desactualizados o Incorrectos
Se detectaron los siguientes enlaces obsoletos o genéricos en `main.js` que difieren del catálogo del PPTX:
* **Cola de pescado**: cambiar `https://www.canva.com/es_mx/graficos/diagrama-de-ishikawa/` por `https://miro.com/diagramming/what-is-a-fishbone-diagram/`
* **Árbol de problemas**: cambiar `https://miro.com/es/diagrama-de-arbol/` por `https://miro.com/templates/problem-tree/`
* **Línea de tiempo**: cambiar `https://www.canva.com/es_mx/crear/lineas-de-tiempo/` por `https://www.canva.com/create/timeline-maker/`
* **Foros virtuales**: cambiar `https://moodle.org/` por `https://docs.moodle.org/en/Forum_activity`
* **Paneles de discusión**: cambiar `https://support.google.com/meet/` por `https://support.zoom.com/hc`
* **Debates guiados**: cambiar `https://www.mentimeter.com/` por `https://www.canva.com/education/`
* **Genially**: cambiar `https://genially.com/` por `https://genially.com/es/`
* **Canva**: cambiar `https://www.canva.com/` por `https://www.canva.com/create/presentations/`
* **PowerPoint interactivo**: cambiar `https://www.microsoft.com/powerpoint` por `https://support.microsoft.com/powerpoint`
* **WhatsApp académico**: cambiar `https://web.whatsapp.com/` por `https://www.whatsapp.com/`
* **Jamboard**: cambiar `https://jamboard.google.com/` por `https://support.google.com/jamboard?hl=es` (añadiendo nota de servicio cerrado por Google).

---

## 3. Plan de Implementación en el Código

1. **Editar `assets/js/main.js`**:
   * Modificar el array `tools` actualizando los links de las herramientas existentes.
   * Modificar la entrada de `mapas-conceptuales` para que sea únicamente "Mapas Conceptuales".
   * Insertar una nueva entrada para "Mapas Mentales".
   * Insertar una nueva entrada para "Referencia clave (Novak y Cañas)".
   * Agregar la nueva subcategoría `sincronica` bajo la categoría `comunicacion`.
   * Reasignar las subcategorías de `zoom`, `google-meet` y `whatsapp` a `sincronica`.
2. **Pruebas y Verificación**:
   * Validar sintaxis del archivo JS.
   * Ejecutar la aplicación web en local para asegurar que la renderización visual y filtros funcionen perfectamente.
