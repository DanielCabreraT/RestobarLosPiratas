import { Producto } from "./catalogo.js";
import { Catalogo } from "./catalogo.js";
import { data } from "./catalogo.js";

const catalogo = new Catalogo(data);

const modal = document.getElementById("modal-imagen");
const imagenModal = document.getElementById("imagen-modal");
const leyendaModal = document.getElementById("leyenda-modal");
const cerrarModal = document.getElementById("cerrar-modal");

function cargarProductos() {
    const galeriaGrid = document.getElementById("galeria-grid");

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
          imagenModal.src = img.src;
          imagenModal.alt = img.alt;
          leyendaModal.textContent = producto.leyenda;

          modal.style.display = "flex";
        });

        figcaption.textContent = producto.leyenda;

        figure.appendChild(img);
        figure.appendChild(figcaption);
        galeriaGrid.appendChild(figure);
    }
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

cargarProductos();