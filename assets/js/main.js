const tools = [
  // ===== TÉCNICAS DIDÁCTICAS =====
  // Problematización
  {
    id: 'cola-pescado',
    name: 'Cola de Pescado',
    category: 'tecnicas',
    subcategory: 'problematizacion',
    icon: '🐟',
    description: 'Diagrama de causa-efecto que organiza las posibles causas de un problema principal.',
    fullDescription: 'También conocido como diagrama de Ishikawa, es una herramienta visual que permite identificar, clasificar y analizar las causas raíz de un problema específico, organizándolas en categorías para su estudio sistemático.',
    scientificUse: 'Se utiliza para descomponer problemas complejos de investigación en factores manejables. Ayuda a formular hipótesis causales y a estructurar el marco teórico en torno a variables interrelacionadas.',
    virtualAdvantages: 'Facilita la lluvia de ideas en equipos remotos usando pizarras digitales colaborativas. Permite que cada integrante aporte causas desde su perspectiva en tiempo real.',
    practicalExample: 'Al investigar la deserción universitaria, se coloca el problema en la cabeza del pescado y se identifican causas como: factores económicos, académicos, familiares y de salud, cada uno con sus ramificaciones específicas.',
    link: 'https://miro.com/diagramming/what-is-a-fishbone-diagram/'
  },
  {
    id: 'arbol-problemas',
    name: 'Árbol de Problemas',
    category: 'tecnicas',
    subcategory: 'problematizacion',
    icon: '🌳',
    description: 'Estructura jerárquica que organiza un problema central con sus causas y consecuencias.',
    fullDescription: 'Técnica de análisis que representa gráficamente la relación entre un problema central (tronco), sus causas (raíces) y sus efectos (ramas), facilitando la comprensión sistémica de una situación problemática.',
    scientificUse: 'Permite definir con precisión el problema de investigación y visualizar sus dimensiones. Es útil para la elaboración del planteamiento del problema y la justificación del estudio.',
    virtualAdvantages: 'Se puede construir colaborativamente en plataformas como Miro o Lucidchart. Cada miembro del equipo puede añadir causas y efectos desde cualquier ubicación.',
    practicalExample: 'Para investigar la baja producción científica en una universidad, se coloca este problema como tronco, las raíces serían falta de capacitación y recursos, y las ramas serían pocas publicaciones y bajo impacto académico.',
    link: 'https://miro.com/diagramming/problem-tree-analysis/'
  },
  {
    id: 'lineas-tiempo',
    name: 'Líneas de Tiempo',
    category: 'tecnicas',
    subcategory: 'problematizacion',
    icon: '📅',
    description: 'Representación visual cronológica de eventos, procesos o hitos históricos.',
    fullDescription: 'Herramienta gráfica que ordena secuencialmente eventos, descubrimientos o fases de un proceso a lo largo de un eje temporal, permitiendo visualizar la evolución y relaciones temporales.',
    scientificUse: 'Ayuda a contextualizar el estado del arte mostrando la evolución de teorías o tecnologías. Facilita la identificación de tendencias y vacíos de conocimiento en la literatura.',
    virtualAdvantages: 'Se pueden crear líneas de tiempo interactivas con herramientas digitales que incluyen imágenes, videos y enlaces, enriqueciendo la experiencia de aprendizaje.',
    practicalExample: 'Al estudiar la evolución de la inteligencia artificial, se traza una línea desde 1950 (prueba de Turing) hasta la actualidad, marcando hitos como Deep Blue, Watson, GPT y demás avances significativos.',
    link: 'https://www.canva.com/graphs/timeline/'
  },
  // Organización Conceptual
  {
    id: 'mapas-conceptuales',
    name: 'Mapas Conceptuales',
    category: 'tecnicas',
    subcategory: 'organizacion',
    icon: '🧩',
    description: 'Representación gráfica de esquemas de conocimiento con conceptos y relaciones jerárquicas.',
    fullDescription: 'Los mapas conceptuales organizan el conocimiento de forma estructurada mediante nodos y palabras enlace, facilitando la comprensión de las conexiones jerárquicas entre ideas.',
    scientificUse: 'Ideales para estructurar el marco teórico, conceptualizar variables complejas y organizar las categorías de análisis de la investigación.',
    virtualAdvantages: 'Permiten la construcción y discusión en tiempo real dentro de pizarras colaborativas o plataformas de mapas en la nube.',
    practicalExample: 'Estructurar la variable "competencia investigativa" y conectarla jerárquicamente con sus dimensiones teóricas e indicadores.',
    link: 'https://www.canva.com/graphs/concept-maps/'
  },
  {
    id: 'mapas-mentales',
    name: 'Mapas Mentales',
    category: 'tecnicas',
    subcategory: 'organizacion',
    icon: '🧠',
    description: 'Diagramas radiales que organizan ideas y conceptos en torno a un núcleo central.',
    fullDescription: 'Herramienta visual que permite organizar libremente y asociar ideas de forma no lineal partiendo de un tema central, estimulando el pensamiento creativo.',
    scientificUse: 'Excelentes para la lluvia de ideas inicial, estructuración del alcance de la investigación y desglose inicial de variables.',
    virtualAdvantages: 'Se editan colaborativamente en la nube, se comparten mediante enlaces interactivos y se exportan fácilmente como gráficos.',
    practicalExample: 'Desglosar en ramas radiales los diferentes subtemas posibles para una propuesta de enseñanza virtual de la ciencia.',
    link: 'https://www.mindmeister.com/'
  },
  {
    id: 'referencia-novak',
    name: 'Referencia Clave (Novak y Cañas)',
    category: 'tecnicas',
    subcategory: 'organizacion',
    icon: '📌',
    description: 'Sustento metodológico y conceptual del mapa conceptual como organizador de conocimiento.',
    fullDescription: 'El marco teórico de Joseph Novak y Alberto Cañas fundamenta al mapa conceptual como una herramienta idónea para estructurar ideas, basada en el aprendizaje significativo.',
    scientificUse: 'Aporta el fundamento pedagógico que valida el uso de mapas para la síntesis conceptual y la coherencia en investigaciones científicas.',
    virtualAdvantages: 'Recurso educativo digital listo para integrarse en Genially, Canva, blogs o aulas virtuales para guiar al estudiante de tesis.',
    practicalExample: 'Diseñar y documentar la coherencia interna de una investigación (pregunta, objetivos y métodos) bajo la teoría del aprendizaje significativo.',
    link: 'https://cmap.ihmc.us/docs/theory-of-concept-maps'
  },
  // Revisión de Fuentes
  {
    id: 'barrida-textos',
    name: 'Barrida de Textos',
    category: 'tecnicas',
    subcategory: 'revision',
    icon: '🔍',
    description: 'Técnica de lectura exploratoria rápida para identificar información relevante en textos.',
    fullDescription: 'Consiste en revisar de manera ágil y selectiva documentos académicos (títulos, resúmenes, conclusiones) para determinar su pertinencia antes de una lectura profunda, optimizando el tiempo de investigación.',
    scientificUse: 'Permite filtrar grandes volúmenes de literatura científica en poco tiempo. Es el primer paso en la revisión sistemática de la literatura y ayuda a construir el estado del arte.',
    virtualAdvantages: 'Los buscadores académicos (Google Scholar, Scopus) y gestores de referencias facilitan la barrida digital con filtros por año, autor, keywords y métricas de impacto.',
    practicalExample: 'Al iniciar una investigación sobre ciberseguridad, se ingresan palabras clave en Google Scholar y se revisan títulos y abstracts de los 50 resultados más recientes para seleccionar los 10 artículos más relevantes.',
    link: 'https://scholar.google.com/'
  },
  // Comunicación Académica
  {
    id: 'foros',
    name: 'Foros Virtuales',
    category: 'tecnicas',
    subcategory: 'comunicacion',
    icon: '💬',
    description: 'Espacios de discusión asíncrona donde se debate sobre temas académicos.',
    fullDescription: 'Plataformas de comunicación donde los participantes publican mensajes, responden intervenciones y construyen conocimiento de forma colaborativa, moderados por un facilitador que guía la discusión.',
    scientificUse: 'Fomentan el pensamiento crítico y la argumentación fundamentada. Permiten discutir hallazgos, contrastar perspectivas y construir consensos en comunidades académicas distribuidas.',
    virtualAdvantages: 'Al no requerir coincidencia horaria, facilitan la participación reflexiva de todos los miembros del equipo, documentando el proceso de discusión para referencia futura.',
    practicalExample: 'En un curso de metodología, se abre un foro sobre "Validez y confiabilidad en investigación cualitativa" donde cada estudiante aporta un artículo de referencia y los demás comentan su pertinencia.',
    link: 'https://docs.moodle.org/en/Forum_activity'
  },
  {
    id: 'paneles',
    name: 'Paneles de Discusión',
    category: 'tecnicas',
    subcategory: 'comunicacion',
    icon: '🎤',
    description: 'Grupo de expertos que debaten un tema frente a una audiencia moderada.',
    fullDescription: 'Técnica donde varios especialistas exponen diferentes perspectivas sobre un mismo tema, seguido de preguntas de la audiencia. Favorece el análisis multidimensional de problemas complejos.',
    scientificUse: 'Permite contrastar enfoques metodológicos y teóricos. Es útil en seminarios de investigación para recibir retroalimentación de múltiples expertos sobre un proyecto.',
    virtualAdvantages: 'Las plataformas de videoconferencia permiten reunir expertos de diferentes instituciones y países, grabando la sesión para su difusión asíncrona.',
    practicalExample: 'En un seminario de tesis, tres docentes con diferentes enfoques (cuantitativo, cualitativo y mixto) discuten la metodología más adecuada para un proyecto específico.',
    link: 'https://support.zoom.com/hc'
  },
  {
    id: 'debates',
    name: 'Debates Guiados',
    category: 'tecnicas',
    subcategory: 'comunicacion',
    icon: '⚖️',
    description: 'Discusión estructurada donde equipos defienden posturas opuestas sobre un tema.',
    fullDescription: 'Técnica de comunicación académica donde dos o más grupos argumentan posiciones contrastantes sobre un tema, siguiendo reglas de participación y tiempos definidos, moderados por un facilitador.',
    scientificUse: 'Desarrolla habilidades de argumentación, pensamiento crítico y síntesis. Ayuda a examinar todas las aristas de un problema de investigación antes de tomar una postura.',
    virtualAdvantages: 'Se pueden realizar debates sincrónicos por videoconferencia o asíncronos en foros, permitiendo a los participantes preparar mejor sus argumentos.',
    practicalExample: 'Se organiza un debate sobre "¿Es ético usar IA para generar contenido académico?" donde un equipo defiende su uso como herramienta de apoyo y otro argumenta los riesgos de dependencia tecnológica.',
    link: 'https://www.canva.com/education/'
  },
  // ===== MEDIOS DE COMUNICACIÓN Y EXPOSICIÓN =====
  {
    id: 'videos',
    name: 'Videos Educativos',
    category: 'comunicacion',
    subcategory: 'exposicion',
    icon: '🎥',
    description: 'Contenido audiovisual diseñado para transmitir conocimiento de forma dinámica.',
    fullDescription: 'Recursos multimedia que combinan imágenes, audio, animaciones y texto para explicar conceptos, demostrar procedimientos o presentar resultados de investigación de manera atractiva y accesible.',
    scientificUse: 'Permiten demostrar procedimientos experimentales, explicar conceptos complejos mediante animaciones y presentar resultados de investigación a audiencias amplias.',
    virtualAdvantages: 'Se pueden alojar en plataformas como YouTube o Vimeo, con opciones de subtítulos, velocidad variable y acceso permanente desde cualquier dispositivo.',
    practicalExample: 'Para explicar el funcionamiento de un algoritmo de machine learning, se crea un video animado que muestra paso a paso cómo los datos fluyen a través del modelo.',
    link: 'https://www.youtube.com/'
  },
  {
    id: 'prezi',
    name: 'Prezi',
    category: 'comunicacion',
    subcategory: 'exposicion',
    icon: '🎯',
    description: 'Herramienta de presentaciones con zoom y navegación no lineal e interactiva.',
    fullDescription: 'Plataforma de presentaciones basada en un lienzo zoomable que permite crear narrativas visuales no lineales, donde los elementos se conectan mediante transiciones dinámicas en un espacio tridimensional.',
    scientificUse: 'Ideal para presentar proyectos de investigación que requieren mostrar relaciones jerárquicas entre conceptos, permitiendo al público visualizar el panorama general y acercarse a detalles específicos.',
    virtualAdvantages: 'Su formato interactivo mantiene la atención de la audiencia remota. Las presentaciones se comparten mediante enlace sin necesidad de descargar archivos pesados.',
    practicalExample: 'Al presentar un proyecto de investigación, se muestra primero el mapa general del estudio y se hace zoom a cada fase: problema, marco teórico, metodología, resultados y conclusiones.',
    link: 'https://prezi.com/'
  },
  {
    id: 'genially',
    name: 'Genially',
    category: 'comunicacion',
    subcategory: 'exposicion',
    icon: '✨',
    description: 'Plataforma para crear contenido interactivo y animado sin programación.',
    fullDescription: 'Herramienta que permite diseñar presentaciones, infografías, imágenes interactivas, gamificaciones y guías visuales con animaciones integradas, ideal para crear experiencias de aprendizaje inmersivas.',
    scientificUse: 'Permite crear catálogos interactivos de herramientas de investigación, líneas de tiempo animadas y mapas conceptuales con elementos interactivos que enriquecen la comunicación científica.',
    virtualAdvantages: 'Todo el contenido se visualiza en el navegador sin instalar software. Incluye plantillas prediseñadas y se integra con LMS como Moodle para seguimiento.',
    practicalExample: 'Se crea una infografía interactiva sobre el método científico donde cada paso (observación, pregunta, hipótesis, experimentación) se despliega al hacer clic, mostrando ejemplos y recursos adicionales.',
    link: 'https://genially.com/es/'
  },
  {
    id: 'canva',
    name: 'Canva',
    category: 'comunicacion',
    subcategory: 'exposicion',
    icon: '🎨',
    description: 'Plataforma de diseño gráfico con plantillas para presentaciones e infografías.',
    fullDescription: 'Herramienta de diseño online con interfaz intuitiva drag-and-drop que ofrece miles de plantillas para crear presentaciones, infografías, pósters, documentos y contenido visual para investigación.',
    scientificUse: 'Facilita la creación de materiales visuales para comunicar resultados de investigación: pósters académicos, infografías de datos, presentaciones de congresos y figuras para publicaciones.',
    virtualAdvantages: 'Permite la edición colaborativa en tiempo real, con biblioteca de recursos gráficos y elementos de marca. Los diseños se almacenan en la nube y se comparten por enlace.',
    practicalExample: 'El equipo de investigación diseña un póster académico sobre los resultados de su estudio usando una plantilla de Canva, personalizando colores institucionales y añadiendo gráficos de datos.',
    link: 'https://www.canva.com/presentations/'
  },
  {
    id: 'powerpoint',
    name: 'PowerPoint Interactivo',
    category: 'comunicacion',
    subcategory: 'exposicion',
    icon: '📊',
    description: 'Presentaciones con botones de acción y navegación no lineal.',
    fullDescription: 'Software de presentaciones que permite crear diapositivas con hipervínculos, botones de acción, menús interactivos y elementos multimedia, transformando presentaciones lineales en experiencias navegables.',
    scientificUse: 'Útil para crear catálogos interactivos, menús de navegación para defensas de tesis y presentaciones modulares donde el usuario elige qué contenido explorar.',
    virtualAdvantages: 'Se puede exportar a PDF interactivo o video, o compartirse online mediante OneDrive. Los botones de acción permiten simular una navegación tipo web dentro de la presentación.',
    practicalExample: 'Se diseña un catálogo de herramientas didácticas donde la diapositiva principal funciona como menú con botones que llevan a secciones específicas: técnicas, medios, evaluación y recursos.',
    link: 'https://support.microsoft.com/powerpoint'
  },
  {
    id: 'zoom',
    name: 'Zoom',
    category: 'comunicacion',
    subcategory: 'sincronica',
    icon: '📹',
    description: 'Plataforma de videoconferencias para clases y reuniones síncronas.',
    fullDescription: 'Herramienta de comunicación audiovisual que permite reuniones virtuales con múltiples participantes, compartir pantalla, salas de grupos, pizarra virtual y grabación de sesiones.',
    scientificUse: 'Facilita reuniones de equipos de investigación distribuidos, defensas de tesis virtuales, seminarios web académicos y tutorías personalizadas a distancia.',
    virtualAdvantages: 'Soporta hasta 100 participantes en versión gratuita, con salas simultáneas para trabajo en grupos pequeños. Las sesiones se graban para referencia posterior.',
    practicalExample: 'El equipo de investigación se reúne semanalmente por Zoom para reportar avances. Usan salas de grupos para discutir subtemas y luego comparten conclusiones en la sala principal.',
    link: 'https://zoom.us/'
  },
  {
    id: 'google-meet',
    name: 'Google Meet',
    category: 'comunicacion',
    subcategory: 'sincronica',
    icon: '🔵',
    description: 'Videollamadas integradas con Google Workspace para educación.',
    fullDescription: 'Servicio de videoconferencias de Google que se integra nativamente con Google Classroom, Calendar y Drive, ofreciendo subtítulos automáticos, presentación de pantalla y grabación.',
    scientificUse: 'Perfecto para tutorías académicas, reuniones de equipos de investigación que usan el ecosistema Google y clases virtuales con integración directa al LMS.',
    virtualAdvantages: 'No requiere instalación (funciona en el navegador), tiene subtítulos automáticos en tiempo real y se integra con Google Calendar para programar sesiones recurrentes.',
    practicalExample: 'El tutor programa asesorías de tesis mediante Google Meet desde Google Calendar. Los estudiantes reciben el enlace automáticamente y la sesión se graba en Google Drive.',
    link: 'https://meet.google.com/'
  },
  {
    id: 'whatsapp',
    name: 'WhatsApp Académico',
    category: 'comunicacion',
    subcategory: 'sincronica',
    icon: '💚',
    description: 'Mensajería instantánea para comunicación académica rápida.',
    fullDescription: 'Aplicación de mensajería que permite comunicación instantánea grupal e individual, envío de documentos, imágenes, audios y videos, utilizada como canal de comunicación académica informal pero efectiva.',
    scientificUse: 'Facilita la coordinación rápida de equipos de investigación, el intercambio de recursos y la resolución de dudas inmediatas durante el desarrollo de proyectos académicos.',
    virtualAdvantages: 'Está presente en prácticamente todos los dispositivos móviles. Los grupos permiten comunicación asíncrona con notificaciones en tiempo real y compartición de archivos.',
    practicalExample: 'El equipo de investigación crea un grupo de WhatsApp para compartir enlaces a artículos, coordinar reuniones, resolver dudas rápidas y mantener comunicación fluida entre sesiones formales.',
    link: 'https://www.whatsapp.com/'
  },
  // ===== MEDIOS DE CO-CREACIÓN Y ORGANIZACIÓN =====
  {
    id: 'miro',
    name: 'Miro',
    category: 'cocreacion',
    subcategory: 'colaboracion',
    icon: '📋',
    description: 'Pizarra digital colaborativa infinita para equipos remotos.',
    fullDescription: 'Plataforma de pizarra online que permite a equipos colaborar visualmente en tiempo real con sticky notes, diagramas, mapas mentales, wireframes y plantillas prediseñadas.',
    scientificUse: 'Ideal para sesiones de lluvia de ideas, construcción colaborativa de mapas conceptuales, diseño de metodologías de investigación y planificación visual de proyectos académicos.',
    virtualAdvantages: 'Espacio de trabajo infinito que soporta múltiples formatos. Permite la colaboración asíncrona con comentarios y seguimiento de cambios. Se integra con Teams, Slack y Jira.',
    practicalExample: 'El equipo de investigación utiliza Miro para diseñar el flujo de trabajo del proyecto, usando sticky notes de colores para cada fase: recolección de datos, análisis, interpretación y redacción.',
    link: 'https://miro.com/'
  },
  {
    id: 'mindmeister',
    name: 'MindMeister',
    category: 'cocreacion',
    subcategory: 'colaboracion',
    icon: '🗺️',
    description: 'Herramienta de mapas mentales colaborativos en tiempo real.',
    fullDescription: 'Plataforma online especializada en la creación de mapas mentales con edición en tiempo real, presentaciones integradas y exportación a múltiples formatos (PDF, imagen, documento).',
    scientificUse: 'Perfecta para organizar visualmente el marco teórico, planificar capítulos de tesis, estructurar artículos científicos y desglosar objetivos de investigación en tareas concretas.',
    virtualAdvantages: 'Permite que varios investigadores editen simultáneamente el mismo mapa desde cualquier ubicación, con historial de cambios y modo presentación integrado.',
    practicalExample: 'Al planificar una tesis, se crea un mapa mental con el tema central y ramas para: introducción, marco teórico, metodología, resultados, discusión y conclusiones, asignando responsables a cada rama.',
    link: 'https://www.mindmeister.com/'
  },
  {
    id: 'padlet',
    name: 'Padlet',
    category: 'cocreacion',
    subcategory: 'colaboracion',
    icon: '📌',
    description: 'Muro virtual colaborativo para compartir recursos e ideas visualmente.',
    fullDescription: 'Plataforma visual que funciona como un tablero de corcho digital donde los participantes pueden publicar notas, imágenes, videos, enlaces y documentos de forma colaborativa y organizada.',
    scientificUse: 'Útil para realizar curaduría colectiva de fuentes bibliográficas, compartir hallazgos de investigación y crear galerías virtuales de proyectos académicos.',
    virtualAdvantages: 'Interfaz intuitiva y visual. Se personaliza con diferentes diseños (muro, lienzo, línea de tiempo, mapa). Los muros se incrustan en LMS y sitios web.',
    practicalExample: 'En un seminario de investigación, cada estudiante publica en Padlet un artículo científico que encontró, con un breve resumen y por qué es relevante para su tema. Todos ven y comentan las publicaciones.',
    link: 'https://padlet.com/'
  },
  {
    id: 'jamboard',
    name: 'Jamboard',
    category: 'cocreacion',
    subcategory: 'colaboracion',
    icon: '✏️',
    description: 'Pizarra digital interactiva referencial (servicio retirado por Google).',
    fullDescription: 'Aunque Google retiró oficialmente este servicio, funciona en el ámbito educativo como el antecedente clásico de pizarras colaborativas visuales en tiempo real.',
    scientificUse: 'Facilita la explicación visual de conceptos complejos durante tutorías virtuales, la resolución colaborativa de problemas y la diagramación de procesos de investigación.',
    virtualAdvantages: 'Se integra nativamente con Google Workspace. Los Jams se guardan automáticamente en Drive y se comparten con el mismo sistema de permisos de Google.',
    practicalExample: 'Durante una tutoría virtual, el profesor y el estudiante trabajan simultáneamente en un Jamboard para diagramar el diseño metodológico de la investigación, ajustando variables y relaciones.',
    link: 'https://support.google.com/jamboard?hl=es'
  },
  {
    id: 'lucidchart',
    name: 'Lucidchart',
    category: 'cocreacion',
    subcategory: 'colaboracion',
    icon: '📐',
    description: 'Plataforma de diagramación inteligente y visualización de datos.',
    fullDescription: 'Herramienta de diagramación basada en la nube que permite crear diagramas de flujo, organigramas, diagramas UML, mapas de proceso y wireframes con funcionalidades de colaboración en tiempo real.',
    scientificUse: 'Ideal para diseñar diagramas de flujo metodológicos, representar arquitecturas de sistemas, modelar bases de datos y crear diagramas de proceso para publicaciones científicas.',
    virtualAdvantages: 'Cuenta con una biblioteca extensa de plantillas y figuras. Se integra con Confluence, Jira, Microsoft Teams y Google Workspace. Permite exportar en alta resolución.',
    practicalExample: 'Para documentar la metodología de un proyecto de software, se crea un diagrama de flujo que muestra desde la recolección de requisitos hasta el despliegue, con decisiones y ciclos de retroalimentación.',
    link: 'https://www.lucidchart.com/'
  },
  {
    id: 'trello',
    name: 'Trello',
    category: 'cocreacion',
    subcategory: 'organizacion',
    icon: '📋',
    description: 'Gestor visual de proyectos con tableros Kanban.',
    fullDescription: 'Herramienta de gestión de proyectos basada en el método Kanban, que utiliza tableros, listas y tarjetas para organizar tareas de forma visual y colaborativa.',
    scientificUse: 'Permite gestionar el ciclo de vida de un proyecto de investigación: desde la revisión de literatura hasta la publicación, asignando responsables, fechas límite y etiquetas de prioridad.',
    virtualAdvantages: 'Interfaz visual e intuitiva. Soporta checklists, fechas de vencimiento, etiquetas, archivos adjuntos y comentarios. Se integra con Slack, Google Drive y calendarios.',
    practicalExample: 'El equipo crea un tablero Trello con listas: "Por hacer", "En curso", "En revisión" y "Completado". Cada tarea del proyecto de investigación es una tarjeta asignada a un miembro.',
    link: 'https://trello.com/'
  },
  {
    id: 'notion',
    name: 'Notion',
    category: 'cocreacion',
    subcategory: 'organizacion',
    icon: '📝',
    description: 'Espacio de trabajo todo-en-uno para documentación y gestión.',
    fullDescription: 'Plataforma integrada que combina notas, bases de datos, wikis, calendarios y gestión de tareas en un solo espacio, altamente personalizable para equipos de investigación.',
    scientificUse: 'Funciona como repositorio central de investigación: almacena referencias bibliográficas, notas de lectura, borradores de artículos, datos de experimentos y actas de reuniones.',
    virtualAdvantages: 'Sincronización en tiempo real con potentes funciones de base de datos. Permite crear plantillas personalizadas, enlazar páginas y compartir espacios de trabajo con el equipo.',
    practicalExample: 'El equipo de investigación crea una base de datos en Notion con todas las fuentes bibliográficas, cada una con campos para autor, año, resumen, palabras clave y estado de lectura.',
    link: 'https://www.notion.so/'
  },
  // ===== MEDIOS DE EVALUACIÓN Y GESTIÓN =====
  // Gamificación
  {
    id: 'quizizz',
    name: 'Quizizz',
    category: 'evaluacion',
    subcategory: 'gamificacion',
    icon: '🏆',
    description: 'Plataforma de quizzes gamificados con feedback inmediato.',
    fullDescription: 'Herramienta de evaluación interactiva que permite crear cuestionarios con preguntas de opción múltiple, con temporizador, memes, tablas de clasificación y música para motivar a los participantes.',
    scientificUse: 'Permite evaluar la comprensión de conceptos metodológicos, teorías y técnicas de investigación de forma dinámica, obteniendo reportes detallados del desempeño individual y grupal.',
    virtualAdvantages: 'Los estudiantes responden desde cualquier dispositivo sin necesidad de cuenta. El modo "tarea" permite realizar quizzes asíncronos con fecha límite y múltiples intentos.',
    practicalExample: 'Después de la sesión sobre "Tipos de investigación", el profesor aplica un Quizizz con 15 preguntas. Los estudiantes compiten en tiempo real y al final reciben retroalimentación detallada.',
    link: 'https://quizizz.com/'
  },
  {
    id: 'kahoot',
    name: 'Kahoot',
    category: 'evaluacion',
    subcategory: 'gamificacion',
    icon: '🎮',
    description: 'Plataforma de aprendizaje basada en juegos de preguntas en vivo.',
    fullDescription: 'Sistema de respuesta en aula que convierte las evaluaciones en juegos competitivos con preguntas proyectadas que los estudiantes responden desde sus dispositivos en tiempo real.',
    scientificUse: 'Útil como herramienta de diagnóstico inicial para evaluar conocimientos previos sobre metodología, o como repaso interactivo antes de exámenes de investigación.',
    virtualAdvantages: 'Los estudiantes participan desde su celular ingresando un PIN. Incluye modos de juego en equipo y desafíos asíncronos. Las preguntas pueden incluir imágenes y videos.',
    practicalExample: 'Al iniciar el curso de metodología, se aplica un Kahoot diagnóstico con preguntas sobre conceptos básicos: qué es una variable, tipos de muestreo, diferencias entre enfoques cuantitativo y cualitativo.',
    link: 'https://kahoot.com/'
  },
  {
    id: 'mentimeter',
    name: 'Mentimeter',
    category: 'evaluacion',
    subcategory: 'gamificacion',
    icon: '📊',
    description: 'Herramienta de presentaciones interactivas con encuestas en vivo.',
    fullDescription: 'Plataforma que permite crear presentaciones con elementos interactivos como encuestas en tiempo real, nubes de palabras, preguntas abiertas, quizzes y escalas de valoración.',
    scientificUse: 'Ideal para realizar sondeos de opinión durante seminarios, recoger expectativas de investigación, evaluar la comprensión de conceptos y visualizar datos cualitativos mediante nubes de palabras.',
    virtualAdvantages: 'Los resultados se visualizan en tiempo real en la presentación. La audiencia participa desde su dispositivo sin instalar aplicaciones. Se integra con PowerPoint y Google Slides.',
    practicalExample: 'Durante una exposición sobre tendencias en investigación educativa, el ponente pregunta "¿Cuál consideran el mayor desafío actual?" y las respuestas forman una nube de palabras en vivo.',
    link: 'https://www.mentimeter.com/'
  },
  {
    id: 'wordwall',
    name: 'Wordwall',
    category: 'evaluacion',
    subcategory: 'gamificacion',
    icon: '🧩',
    description: 'Creador de actividades educativas interactivas y plantillas imprimibles.',
    fullDescription: 'Plataforma que permite crear actividades educativas personalizadas usando plantillas interactivas (ruletas, crucigramas, sopas de letras, concursos, abrecajas) y sus equivalentes imprimibles.',
    scientificUse: 'Facilita la creación de actividades lúdicas para repasar terminología científica, clasificar tipos de investigación, emparejar metodologías con ejemplos y reforzar vocabulario técnico.',
    virtualAdvantages: 'Las actividades se pueden asignar como tarea con seguimiento de resultados. Las plantillas son altamente personalizables y se pueden compartir por enlace o incrustar en LMS.',
    practicalExample: 'Se crea una ruleta de Wordwall con términos de metodología. El estudiante gira la ruleta y debe definir el término que sale (ej: "hipótesis", "variable", "muestra") en menos de 30 segundos.',
    link: 'https://wordwall.net/'
  },
  // Gestión
  {
    id: 'moodle',
    name: 'Moodle',
    category: 'evaluacion',
    subcategory: 'gestion',
    icon: '🎓',
    description: 'LMS de código abierto para gestión de cursos y aprendizaje virtual.',
    fullDescription: 'Plataforma de aprendizaje virtual más utilizada en educación superior, que permite crear cursos online con foros, tareas, cuestionarios, wikis, glosarios and sistema de calificaciones.',
    scientificUse: 'Sirve como repositorio central de cursos de metodología, aloja materiales de investigación, gestiona entregas de proyectos y facilita la comunicación asíncrona entre tutores e investigadores.',
    virtualAdvantages: 'Es gratuito, altamente personalizable y compatible con estándares SCORM. Cuenta con herramientas de seguimiento, reportes de actividad y plugins para videoconferencia y autenticación.',
    practicalExample: 'El curso de "Metodología de la Investigación" en Moodle contiene: foro de novedades, unidades temáticas con recursos, tareas de avance de proyecto, cuestionarios autocalificables y calificaciones visibles.',
    link: 'https://moodle.org/'
  },
  {
    id: 'classroom',
    name: 'Google Classroom',
    category: 'evaluacion',
    subcategory: 'gestion',
    icon: '🏫',
    description: 'LMS integrado con Google Workspace para educación.',
    fullDescription: 'Plataforma educativa de Google que simplifica la creación, distribución y calificación de tareas, integrada con Google Drive, Docs, Meet y Calendar para un flujo de trabajo educativo completo.',
    scientificUse: 'Facilita la gestión de cursos de investigación, la distribución de materiales, la recolección de trabajos y la retroalimentación continua entre tutores y estudiantes-investigadores.',
    virtualAdvantages: 'Configuración rápida e intuitiva. Las tareas se entregan directamente desde Google Drive. Permite feedback en múltiples formatos y comunicación directa con cada estudiante.',
    practicalExample: 'El tutor crea una clase en Classroom para el semillero de investigación. Publica guías semanales, los estudiantes suben sus avances de proyecto, reciben comentarios y ven sus calificaciones.',
    link: 'https://classroom.google.com/'
  },
  {
    id: 'canvas',
    name: 'Canvas LMS',
    category: 'evaluacion',
    subcategory: 'gestion',
    icon: '📚',
    description: 'LMS moderno con herramientas colaborativas y analíticas.',
    fullDescription: 'Sistema de gestión de aprendizaje basado en la nube con interfaz moderna, herramientas de colaboración, rúbricas de evaluación, analíticas de aprendizaje y soporte para estándares educativos.',
    scientificUse: 'Ofrece herramientas avanzadas para la gestión de cursos de posgrado, portafolios digitales de investigación, rúbricas detalladas para evaluar proyectos y conferencias web integradas.',
    virtualAdvantages: 'Interfaz limpia y moderna. Incluye SpeedGrader para calificación eficiente, analíticas de aprendizaje para seguimiento y aplicación móvil completa para estudiantes y docentes.',
    practicalExample: 'En un curso de tesis, los estudiantes suben cada capítulo a Canvas, el profesor usa SpeedGrader para dejar comentarios de voz y texto directamente sobre el documento, y las rúbricas evalúan cada criterio.',
    link: 'https://www.instructure.com/canvas'
  },
  // Investigación
  {
    id: 'zotero',
    name: 'Zotero',
    category: 'evaluacion',
    subcategory: 'investigacion',
    icon: '📖',
    description: 'Gestor de referencias bibliográficas de código abierto y gratuito.',
    fullDescription: 'Zotero es un gestor de referencias bibliográficas de código abierto y gratuito. Permite recolectar, organizar, citar y sincronizar fuentes de información en diferentes formatos.',
    scientificUse: 'Automatiza la creación de la base teórica e introductoria. Permite compilar rápidamente normativas, manuales técnicos o papers para estructurar el estado del arte y genera automáticamente las citas (en formatos como APA o IEEE) dentro del procesador de texto.',
    virtualAdvantages: 'Cuenta con una extensión para el navegador web que extrae los metadatos de un documento con un solo clic. Al estar sincronizado en la nube, previene la pérdida de información y facilita el trabajo asíncrono.',
    practicalExample: 'Al investigar sobre integraciones de facturación electrónica con estándares XML UBL 2.1, se guardan las documentaciones técnicas y manuales de servicios SOAP directamente desde el navegador. Luego, al redactar el informe técnico del proyecto, Zotero genera las citas automáticamente sin tener que tipear los datos a mano.',
    link: 'https://www.zotero.org/'
  },
  {
    id: 'mendeley',
    name: 'Mendeley',
    category: 'evaluacion',
    subcategory: 'investigacion',
    icon: '📘',
    description: 'Gestor de referencias y red social académica con visor de PDFs.',
    fullDescription: 'Mendeley es un gestor de referencias y una red social académica desarrollada por Elsevier. Está diseñado para gestionar bibliografías, pero destaca por su potente visor y editor de documentos.',
    scientificUse: 'Funciona como un entorno de lectura crítica. Los investigadores pueden subir sus artículos en PDF, resaltarlos, añadir notas adhesivas y cruzar información empírica directamente dentro de la plataforma sin necesidad de imprimir nada.',
    virtualAdvantages: 'Fomenta la creación de grupos de investigación privados. Un equipo distribuido geográficamente puede compartir una misma biblioteca de artículos, ver las anotaciones que dejaron sus compañeros y debatir sobre la literatura dentro del mismo entorno.',
    practicalExample: 'Un equipo que diseña un modelo conceptual de base de datos relacional crea un grupo en Mendeley. Allí suben artículos sobre optimización de esquemas SQL. Un integrante resalta en amarillo los diagramas útiles en el PDF y otro deja un comentario evaluando si esa estructura sirve para el proyecto, todo en la misma plataforma.',
    link: 'https://www.mendeley.com/'
  },
  {
    id: 'chatgpt',
    name: 'ChatGPT',
    category: 'evaluacion',
    subcategory: 'investigacion',
    icon: '🤖',
    description: 'Modelo de lenguaje IA para asistencia en investigación y código.',
    fullDescription: 'ChatGPT es un modelo de lenguaje de inteligencia artificial generativa desarrollado por OpenAI. Utiliza procesamiento de lenguaje natural para mantener conversaciones, responder preguntas complejas y procesar grandes volúmenes de texto o código.',
    scientificUse: 'Actúa como un asistente para la fase de ideación, revisión y depuración. Útil para traducir documentos técnicos, estructurar índices, resumir metodologías extensas o encontrar errores lógicos en los experimentos prácticos.',
    virtualAdvantages: 'Está disponible 24/7 y proporciona feedback inmediato. Reduce drásticamente la carga cognitiva en tareas mecánicas, permitiendo al investigador enfocarse en el análisis crítico y la toma de decisiones.',
    practicalExample: 'Durante la etapa de desarrollo de la investigación, se le proporciona un bloque de código (por ejemplo, la lógica de un temporizador tipo debounce en Python o la estructura de un archivo YAML) y se le pide que identifique posibles cuellos de botella u optimice el algoritmo antes de incluirlo en el prototipo final.',
    link: 'https://chatgpt.com/'
  },
  {
    id: 'elicit',
    name: 'Elicit',
    category: 'evaluacion',
    subcategory: 'investigacion',
    icon: '🔬',
    description: 'Asistente de investigación con IA para búsqueda y análisis de papers.',
    fullDescription: 'Herramienta de IA especializada en investigación académica que ayuda a buscar artículos científicos, extraer datos relevantes, resumir hallazgos y organizar la revisión de literatura de forma inteligente.',
    scientificUse: 'Automatiza la revisión sistemática de literatura al encontrar papers relevantes, extraer automáticamente información clave (metodología, resultados, limitaciones) y mostrar resúmenes comparativos.',
    virtualAdvantages: 'Filtra y prioriza artículos según la pregunta de investigación. Extrae datos estructurados sin leer manualmente cada paper. Los resultados se exportan a CSV para análisis posterior.',
    practicalExample: 'Al investigar sobre "efectos del aprendizaje remoto en estudiantes universitarios", Elicit encuentra los 50 papers más relevantes y extrae automáticamente: tamaño de muestra, metodología usada y principales hallazgos de cada uno.',
    link: 'https://elicit.com/'
  },
  {
    id: 'scite',
    name: 'Scite.ai',
    category: 'evaluacion',
    subcategory: 'investigacion',
    icon: '📊',
    description: 'Plataforma que muestra cómo se citan los artículos científicos.',
    fullDescription: 'Herramienta que analiza el contexto de las citas en artículos académicos, mostrando si un artículo fue respaldado, contrastado o simplemente mencionado, proporcionando métricas de impacto contextual.',
    scientificUse: 'Permite evaluar la calidad y repercusión de las fuentes bibliográficas al mostrar si otros investigadores apoyan o refutan sus hallazgos, fortaleciendo la credibilidad del marco teórico.',
    virtualAdvantages: 'Visualización interactiva de redes de citación. Muestra el texto exacto donde se cita cada artículo, ahorrando tiempo de verificación manual.',
    practicalExample: 'Al evaluar fuentes para el marco teórico, se ingresa un artículo en Scite y se descubre que de 45 citas recibidas, 30 son de apoyo, 5 contrastan los hallazgos y 10 solo lo mencionan superficialmente.',
    link: 'https://scite.ai/'
  }
];

const subcategoryMeta = {
  tecnicas: {
    title: 'Técnicas Didácticas',
    description: 'Estrategias y metodologías para facilitar la enseñanza y el aprendizaje en entornos de investigación científica.',
    subs: {
      problematizacion: { title: 'Problematización', desc: 'Técnicas para identificar, analizar y estructurar problemas de investigación.' },
      organizacion: { title: 'Organización Conceptual', desc: 'Herramientas para estructurar y relacionar conceptos y teorías.' },
      revision: { title: 'Revisión de Fuentes', desc: 'Técnicas para la búsqueda y selección eficiente de información académica.' },
      comunicacion: { title: 'Comunicación Académica', desc: 'Estrategias para el debate, la argumentación y la discusión académica.' }
    }
  },
  comunicacion: {
    title: 'Medios de Comunicación y Exposición',
    description: 'Plataformas y herramientas para presentar, comunicar y difundir contenido académico de forma efectiva.',
    subs: {
      exposicion: { title: 'Medios de Exposición', desc: 'Herramientas para crear y presentar contenido visual e interactivo.' },
      sincronica: { title: 'Comunicación Sincrónica y Académica', desc: 'Canales sincrónicos y de comunicación inmediata para soporte y tutoría.' }
    }
  },
  cocreacion: {
    title: 'Medios de Co-creación y Organización',
    description: 'Espacios digitales para la creación colaborativa y la gestión de proyectos de investigación.',
    subs: {
      colaboracion: { title: 'Co-creación', desc: 'Plataformas para trabajar en equipo de forma visual y colaborativa.' },
      organizacion: { title: 'Organización', desc: 'Herramientas para planificar, gestionar y dar seguimiento a proyectos.' }
    }
  },
  evaluacion: {
    title: 'Medios de Evaluación y Gestión',
    description: 'Plataformas y herramientas para evaluar conocimientos y gestionar entornos de aprendizaje virtual.',
    subs: {
      gamificacion: { title: 'Gamificación', desc: 'Herramientas lúdicas para evaluar y reforzar el aprendizaje de forma interactiva.' },
      gestion: { title: 'Gestión del Aprendizaje', desc: 'LMS y plataformas para administrar cursos y contenidos educativos.' },
      investigacion: { title: 'Investigación', desc: 'Herramientas especializadas para la gestión de referencias y la investigación asistida.' }
    }
  }
};

function renderSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (!section) return;

  const meta = subcategoryMeta[sectionId];
  if (!meta) return;

  const query = searchQuery.trim().toLowerCase();

  // Filtrar herramientas según búsqueda
  const categoryTools = tools.filter(t => t.category === sectionId && 
    (!query || 
     t.name.toLowerCase().includes(query) || 
     t.description.toLowerCase().includes(query) || 
     (t.fullDescription && t.fullDescription.toLowerCase().includes(query)) ||
     (t.scientificUse && t.scientificUse.toLowerCase().includes(query))
    )
  );

  let subcategoriesHTML = '';
  if (categoryTools.length === 0) {
    const otherMatches = findMatchesInOtherTabs(searchQuery, sectionId);
    let suggestionHTML = '';
    if (otherMatches.length) {
      suggestionHTML = `
        <p style="font-size: 0.95rem; margin-top: 0.5rem;">
          Resultados en:
          ${otherMatches.map(m => `<a href="#" onclick="switchTab('${m.tab}'); scrollToNav(); return false;" style="color:var(--primary);font-weight:600;text-decoration:underline;">${m.label} (${m.count})</a>`).join(' · ')}
        </p>
      `;
    }
    subcategoriesHTML = `
      <div class="no-results" style="grid-column: 1/-1; text-align: center; padding: 3rem 1rem; color: var(--text-muted);">
        <div style="font-size: 3rem; margin-bottom: 1rem;">🔍</div>
        <p style="font-size: 1.1rem; font-weight: 500;">No se encontraron resultados para "${searchQuery}" en ${subcategoryMeta[sectionId].title}</p>
        ${suggestionHTML}
        <p style="font-size: 0.9rem; opacity: 0.7; margin-top: 0.5rem;">Consejo: el buscador no diferencia mayúsculas y acepta palabras parciales (ej. "zot" encuentra "Zotero")</p>
      </div>
    `;
  } else {
    subcategoriesHTML = Object.entries(meta.subs).map(([key, sub]) => {
      const items = categoryTools.filter(t => t.subcategory === key);
      if (!items.length) return '';
      return `
        <div class="subcategory">
          <h3 class="subcategory-title">${sub.title}</h3>
          <p class="subcategory-desc">${sub.desc}</p>
          <div class="cards-grid">
            ${items.map(t => `
              <div class="card" onclick="openModal('${t.id}')">
                <div class="card-icon">${t.icon}</div>
                <h3>${t.name}</h3>
                <p>${t.description}</p>
                <button class="btn-more" id="btn-more-${t.id}">Ver más</button>
              </div>
            `).join('')}
          </div>
        </div>
      `;
    }).join('');
  }

  section.innerHTML = `
    <h2 class="section-title">${meta.title}</h2>
    <p class="section-desc">${meta.description}</p>
    ${subcategoriesHTML}
  `;
}

function renderAllSections() {
  ['tecnicas', 'comunicacion', 'cocreacion', 'evaluacion'].forEach(renderSection);
  renderJustification();
}

function renderJustification() {
  const container = document.getElementById('justificacion-content');
  if (!container) return;
  container.innerHTML = `
    <h2>Justificación Metodológica</h2>
    <p>
      La selección de estas técnicas y medios didácticos responde a un enfoque de <strong>enseñanza e-learning</strong>
      orientado a la formación de tutores investigadores virtuales. Cada herramienta fue elegida considerando:
    </p>
    <ul>
      <li><strong>Pertinencia pedagógica:</strong> que aporten valor real al proceso de enseñanza-aprendizaje de la investigación científica.</li>
      <li><strong>Accesibilidad:</strong> que sean gratuitas o de bajo costo y funcionen en entornos virtuales sin requerir hardware especializado.</li>
      <li><strong>Colaboración:</strong> que fomenten el trabajo en equipo y la construcción colectiva del conocimiento.</li>
      <li><strong>Interactividad:</strong> que permitan una participación activa del estudiante, superando el modelo pasivo de transmisión de información.</li>
      <li><strong>Evaluación formativa:</strong> que faciliten la retroalimentación continua y la autoevaluación del progreso.</li>
    </ul>

    <h3 style="margin-top:2rem;color:var(--primary);">Relación con Competencias del Tutor Investigador</h3>
    <table>
      <thead>
        <tr>
          <th>Competencia</th>
          <th>Técnicas / Medios Relacionados</th>
          <th>Aporte</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Pensamiento crítico y analítico</td>
          <td>Cola de Pescado, Árbol de Problemas, Debates</td>
          <td>Estructuran problemas y desarrollan argumentación fundamentada</td>
        </tr>
        <tr>
          <td>Gestión de información</td>
          <td>Zotero, Mendeley, Elicit, Scite.ai</td>
          <td>Automatizan la recolección, organización y validación de fuentes</td>
        </tr>
        <tr>
          <td>Comunicación efectiva</td>
          <td>Prezi, Genially, Canva, Videos</td>
          <td>Potencian la presentación visual y narrativa de resultados</td>
        </tr>
        <tr>
          <td>Trabajo colaborativo remoto</td>
          <td>Miro, Padlet, Trello, Notion</td>
          <td>Facilitan la co-creación y organización en equipos distribuidos</td>
        </tr>
        <tr>
          <td>Evaluación y retroalimentación</td>
          <td>Quizizz, Kahoot, Mentimeter, Moodle</td>
          <td>Permiten evaluar de forma dinámica y dar seguimiento personalizado</td>
        </tr>
        <tr>
          <td>Innovación tecnológica</td>
          <td>ChatGPT, Elicit, Scite.ai, Genially</td>
          <td>Integran IA y recursos interactivos para potenciar la investigación</td>
        </tr>
      </tbody>
    </table>
    <p style="margin-top:1.5rem;font-style:italic;color:var(--text-muted);">
      "La IA (ChatGPT) sirve para procesar ideas y código, mientras que los gestores (Zotero/Mendeley)
      dan el soporte científico y la validez académica que un proyecto necesita para no caer en el plagio o la desinformación."
    </p>
  `;
}

function openModal(id) {
  const tool = tools.find(t => t.id === id);
  if (!tool) return;

  const linkLabel = tool.link.replace(/^https?:\/\//, '').split('/')[0];
  document.getElementById('modal-title').textContent = `${tool.icon} ${tool.name}`;
  document.getElementById('modal-fields').innerHTML = `
    <div class="modal-field">
      <strong>Descripción</strong>
      <p>${tool.fullDescription}</p>
    </div>
    <div class="modal-field">
      <strong>Aplicación en investigación científica</strong>
      <p>${tool.scientificUse}</p>
    </div>
    <div class="modal-field">
      <strong>Ventajas para entornos virtuales</strong>
      <p>${tool.virtualAdvantages}</p>
    </div>
    <div class="modal-field">
      <strong>Ejemplo práctico de uso</strong>
      <p>${tool.practicalExample}</p>
    </div>
    <div class="modal-field">
      <strong>Recurso de acceso</strong>
      <a href="${tool.link}" target="_blank" rel="noopener" class="modal-link">
        Ir a ${linkLabel}
      </a>
    </div>
  `;
  document.getElementById('modal-overlay').classList.add('open');
}

function closeModal() {
  document.getElementById('modal-overlay').classList.remove('open');
}

function switchTab(tabId) {
  document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
  document.querySelectorAll('nav a').forEach(a => a.classList.remove('active'));

  const target = document.getElementById(tabId);
  if (target) target.classList.add('active');

  const link = document.querySelector(`nav a[data-tab="${tabId}"]`);
  if (link) link.classList.add('active');

  const searchContainer = document.getElementById('search-container');
  if (searchContainer) {
    if (tabId === 'justificacion') {
      searchContainer.style.display = 'none';
    } else {
      searchContainer.style.display = 'block';
    }
  }

  // Volver a renderizar la sección activa con el filtro actual
  if (['tecnicas', 'comunicacion', 'cocreacion', 'evaluacion'].includes(tabId)) {
    renderSection(tabId);
  }
}

let searchQuery = '';
let lastSearchSuggestion = '';

function scrollToNav() {
  const nav = document.getElementById('main-nav');
  if (nav) nav.scrollIntoView({ behavior: 'smooth' });
}

function findMatchesInOtherTabs(query, currentTab) {
  const q = query.trim().toLowerCase();
  if (!q) return [];
  const results = [];
  const tabNames = { tecnicas: 'Técnicas', comunicacion: 'Comunicación', cocreacion: 'Co-creación', evaluacion: 'Evaluación' };
  for (const tab of Object.keys(tabNames)) {
    if (tab === currentTab) continue;
    const matches = tools.filter(t => t.category === tab && (
      t.name.toLowerCase().includes(q) ||
      t.description.toLowerCase().includes(q) ||
      (t.fullDescription && t.fullDescription.toLowerCase().includes(q))
    ));
    if (matches.length) {
      results.push({ tab, label: tabNames[tab], count: matches.length });
    }
  }
  return results;
}

function handleSearch(event) {
  searchQuery = event.target.value;
  const activeLink = document.querySelector('nav a.active');
  if (activeLink) {
    const activeTab = activeLink.dataset.tab;
    if (['tecnicas', 'comunicacion', 'cocreacion', 'evaluacion'].includes(activeTab)) {
      renderSection(activeTab);
    }
  }
}

document.addEventListener('DOMContentLoaded', () => {
  renderAllSections();

  document.querySelectorAll('nav a').forEach(a => {
    a.addEventListener('click', e => {
      e.preventDefault();
      switchTab(a.dataset.tab);
    });
  });

  const searchInput = document.getElementById('search-input');
  if (searchInput) {
    searchInput.addEventListener('input', handleSearch);
  }

  document.getElementById('modal-overlay').addEventListener('click', e => {
    if (e.target === e.currentTarget) closeModal();
  });

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeModal();
  });

  switchTab('tecnicas');
});
