import { Producto } from "./catalogo.js";
import { Catalogo } from "./catalogo.js";
import { data } from "./catalogo.js";

const catalogo = new Catalogo(data);

const modal = document.getElementById("modal-imagen");
const imagenModal = document.getElementById("imagen-modal");
const leyendaModal = document.getElementById("leyenda-modal");
const cerrarModal = document.getElementById("cerrar-modal");
const flechaAnterior = document.getElementById("flecha-anterior");
const flechaSiguiente = document.getElementById("flecha-siguiente");

// Almacena las imágenes que se muestran en la galería (respetando el filtro actual)
let imagenesVisibles = [];
let indiceActual = 0;

function cargarProductos() {
    const galeriaGrid = document.getElementById("galeria-grid");
    imagenesVisibles = [];

    // Se invierte el orden para mostrar los más recientes primero
    for (const producto of catalogo.getProductos().slice().reverse()) {
        const figure = document.createElement("figure");
        const img = document.createElement("img");
        const figcaption = document.createElement("figcaption");

        figure.classList.add("tarjeta");
        // Guardamos la categoría como atributo para poder filtrar sin lógica extra
        figure.dataset.categoria = producto.categoria;

        img.src = `imagenes/${producto.categoria}/${producto.imagen}`;
        img.alt = producto.leyenda;

        img.style.cursor = "pointer";

        // Al hacer clic en una imagen, se abre el modal con su contenido
        img.addEventListener("click", () => {
            // Reconstruimos el listado de imágenes visibles en el orden actual del DOM
            imagenesVisibles = Array.from(galeriaGrid.querySelectorAll("figure"))
                .filter(f => f.style.display !== "none")
                .map(f => ({
                    src: f.querySelector("img").src,
                    alt: f.querySelector("img").alt
                }));

            indiceActual = imagenesVisibles.findIndex(item => item.src === img.src);

            mostrarImagenModal();
            modal.style.display = "flex";
        });

        figcaption.textContent = producto.leyenda;

        figure.appendChild(img);
        figure.appendChild(figcaption);
        galeriaGrid.appendChild(figure);
    }
}

function mostrarImagenModal() {
    if (indiceActual < 0 || imagenesVisibles.length === 0) return;

    const actual = imagenesVisibles[indiceActual];
    imagenModal.src = actual.src;
    imagenModal.alt = actual.alt;
    leyendaModal.textContent = actual.alt;
}

function imagenSiguiente() {
    if (imagenesVisibles.length === 0) return;
    indiceActual = (indiceActual + 1) % imagenesVisibles.length;
    mostrarImagenModal();
}

function imagenAnterior() {
    if (imagenesVisibles.length === 0) return;
    indiceActual = (indiceActual - 1 + imagenesVisibles.length) % imagenesVisibles.length;
    mostrarImagenModal();
}

// Muestra solo las tarjetas de la categoría seleccionada o todas si es "todos"
function filtrarPorCategoria(event) {
    const categoria = event.target.dataset.categoria;

    document.querySelectorAll(".tarjeta").forEach(t => {
        t.style.display = (categoria === "todos" || t.dataset.categoria === categoria)
            ? "block"
            : "none";
    });
}

// Asigna el evento de filtrado a cada botón de categoría
document.querySelectorAll(".btn-filtro").forEach(btn => {
    btn.addEventListener("click", filtrarPorCategoria);
});

// Cierra el modal al hacer clic en el botón "X"
cerrarModal.addEventListener("click", () => {
    modal.style.display = "none";
});

// Cierra el modal únicamente si se hace clic sobre el fondo oscuro
modal.addEventListener("click", e => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});

// Navegación con flechas
flechaSiguiente.addEventListener("click", e => {
    e.stopPropagation();
    imagenSiguiente();
});

flechaAnterior.addEventListener("click", e => {
    e.stopPropagation();
    imagenAnterior();
});

// Navegación con teclado dentro del modal
document.addEventListener("keydown", e => {
    if (modal.style.display === "flex") {
        if (e.key === "ArrowRight") imagenSiguiente();
        if (e.key === "ArrowLeft") imagenAnterior();
        if (e.key === "Escape") modal.style.display = "none";
    }
});

cargarProductos();