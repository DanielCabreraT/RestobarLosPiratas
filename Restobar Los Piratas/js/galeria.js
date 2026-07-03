import { Producto } from "./catalogo.js";
import { Catalogo } from "./catalogo.js";
import { data } from "./catalogo.js";

const catalogo = new Catalogo(data);

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

        figcaption.textContent = producto.leyenda;

        figure.appendChild(img);
        figure.appendChild(figcaption);
        galeriaGrid.appendChild(figure);
    }
}

// Muestra solo las tarjetas de la categoría seleccionada o todas si es "todos"
function filtrarPorCategoria(event) {
    const categoria = event.target.dataset.categoria;

    if (categoria === "todos") {
        document.querySelectorAll(".tarjeta").forEach(t => t.style.display = "block");
        return;
    }

    document.querySelectorAll(".tarjeta").forEach(t => {
        t.style.display = t.dataset.categoria === categoria ? "block" : "none";
    });
}

// Asigna el evento de filtrado a cada botón de categoría
document.querySelectorAll(".btn-filtro").forEach(btn => {
    btn.addEventListener("click", filtrarPorCategoria);
});

cargarProductos();