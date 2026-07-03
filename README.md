# Los Piratas Restobar

Sitio web informativo y comercial para **Los Piratas Restobar**, desarrollado como proyecto del curso **Taller de Programación Web** (UTP).

## Descripción

Web temática para un restobar de cocina marina/santa roseña con identidad visual pirata. Incluye 8 páginas con carta completa, promociones, galería filtrable, ubicación con mapa interactivo, formulario de contacto/reserva y Libro de Reclamaciones virtual. Todo el sitio soporta **modo claro/oscuro** persistente y es **responsive**.

## Tecnologías utilizadas

- **HTML5** semántico (`header`, `nav`, `main`, `section`, `article`, `footer`, `fieldset`, `dialog`)
- **CSS3:** variables (custom properties), Flexbox, CSS Grid, CSS multi-columna (masonry), `clamp()` para tipografía fluida, media queries (desktop-first), transiciones y `@keyframes`
- **JavaScript (ES6+):** módulos ES, clases, `localStorage`, manipulación del DOM, expresiones regulares, `HTMLDialogElement`
- **Google Fonts:** Pirata One y Poppins
- **Integraciones externas:** Google Maps (iframe embebido) y WhatsApp (`wa.me`)

## Páginas del sitio

- `index.html`: portada con hero de bienvenida, platos estrella y llamados a la acción.
- `menu.html`: carta completa en 6 categorías con navegación por anclas (Ceviches, Sudados, Arroces, Fritos, Especiales, Bebidas) y 31 productos con precio.
- `promociones.html`: 6 promociones y combos destacados.
- `nosotros.html`: historia, misión, visión y show en vivo.
- `ubicacion.html`: ficha de sede, horario, **mapa de Google Maps embebido**, botón de WhatsApp y llamada directa.
- `galeria.html`: galería **filtrable por categoría** (Todos / Platos / Bebidas / Ambiente), generada dinámicamente por JavaScript.
- `contacto.html`: datos de contacto y **formulario de reserva/mensaje** con validación en tiempo real y envío por WhatsApp.
- `reclamaciones.html`: **Libro de Reclamaciones** virtual (Indecopi) con modal de confirmación. Accesible desde el footer.

## Estructura del proyecto

```
Restobar Los Piratas/
├── index.html · menu.html · promociones.html · nosotros.html
├── ubicacion.html · galeria.html · contacto.html · reclamaciones.html
├── estilos/        # 8 hojas CSS (base + una por página)
│   ├── styles.css          # base común: variables, tema claro/oscuro, header, footer
│   ├── mainStyle.css · menuStyle.css · galeria.css · nosotrosStyle.css
│   └── contactoStyle.css · ubicacion.css · reclamaciones.css
├── js/             # 7 scripts
│   ├── tema-init.js · tema.js   # modo claro/oscuro (persistente)
│   ├── main.js                  # menú hamburguesa responsive
│   ├── catalogo.js · galeria.js # catálogo de datos + galería dinámica
│   ├── contacto.js              # validación de formulario + envío WhatsApp
│   └── reclamaciones.js         # validación + modal del libro de reclamaciones
└── imagenes/       # 62 imágenes en subcarpetas
    ├── bebidas/ (15) · comidas/ (16) · logo/ (1)
    └── otros/ (25) · pagos/ (3) · redes/ (2)
```

## Funcionalidades (JavaScript)

- **Modo claro/oscuro:** botón en el header que alterna el atributo `data-tema` en `<html>` y guarda la preferencia en `localStorage`. `tema-init.js` la aplica al cargar para evitar parpadeo.
- **Menú responsive:** botón hamburguesa que despliega/oculta la navegación en móvil.
- **Catálogo y galería dinámicos:** `catalogo.js` define clases `Producto`/`Catalogo` y un arreglo de 54 ítems; `galeria.js` los renderiza y filtra por categoría.
- **Formulario de contacto inteligente:** campos condicionales (personas/fecha solo para reservas), validación en tiempo real con reglas por campo y accesibilidad ARIA, contador de caracteres y envío por WhatsApp (sin backend).
- **Libro de Reclamaciones:** validación en el envío (documento según tipo — DNI/CE/Pasaporte —, teléfono, correo, monto y textos mínimos) y modal `<dialog>` de confirmación.

## Paleta de colores

Definida como variables CSS en `:root` (`styles.css`):

- Negro pirata: `#0B0B0B`
- Marrón oscuro: `#2B140C`
- Marrón madera: `#5C2A14`
- Cobre: `#A64B22`
- Dorado (marca): `#D9A441`
- Pergamino: `#F3D2B8`
- Crema: `#FFF3E0`

El **modo oscuro** redefine los tokens de fondo y texto (`--fondo-superficie`, `--fondo-tarjeta`, `--texto-principal`).

## Tipografías

- **Pirata One** para títulos, logo y precios.
- **Poppins** (400–800) para textos generales y navegación.

## Características implementadas

- Diseño responsive con menú hamburguesa y breakpoints (1100 → 480 px).
- Modo claro/oscuro persistente entre páginas.
- Maquetación con Flexbox, CSS Grid y multi-columna (masonry en la galería).
- Tarjetas de producto/promoción unificadas con imagen, descripción y precio.
- Navegación por anclas en la carta; galería filtrable.
- Formularios con validación en tiempo real e integración con WhatsApp.
- Mapa de Google Maps embebido en Ubicación.
- Métodos de pago (Visa, Mastercard, Yape) y redes sociales (Facebook, Instagram) en el footer.
- Pseudo-clases (`:hover`, `:focus`, `:checked`) y pseudo-elementos decorativos (`::before`, `::after`, `::backdrop`), animaciones y transiciones.

## Integrantes

- Ayala Uchofen Elvis Esmith
- Cabrera Tanchira Daniel Agustin
- Diaz Cumpa Leonardo Fabrisio
- Garnique Acosta Leonardo Jhampiere

## Docente

- Rodriguez Castro Jorge Martin — Taller de Programación Web (Sección 47365)
