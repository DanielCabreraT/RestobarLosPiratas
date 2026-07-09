// Carrusel de imágenes de ambiente en la página de inicio.

import { data } from "./catalogo.js";

const pista = document.getElementById("carrusel-pista");
const btnPrev = document.querySelector(".carrusel-prev");
const btnNext = document.querySelector(".carrusel-next");
const contenedorPuntos = document.getElementById("carrusel-puntos");

const fotosAmbiente = data.filter(p => p.categoria === "otros");

let indiceActual = 0;
let intervalo;

// ── Generar imágenes dinámicamente desde el catálogo ─────────────────────
fotosAmbiente.forEach(producto => {
    const img = document.createElement("img");
    img.src = `imagenes/${producto.categoria}/${producto.imagen}`;
    img.alt = producto.leyenda;
    pista.appendChild(img);
});

const total =  fotosAmbiente.length;

// ── Generar puntos de paginación ─────────────────────────────────────────
fotosAmbiente.forEach((_, i) => {
    const punto = document.createElement("button");
    punto.classList.add("carrusel-punto");
    punto.setAttribute("aria-label", `Ir a imagen ${i + 1}`);
    punto.addEventListener("click", () => {
        irA(i);
        reiniciarAutoplay();
    });
    contenedorPuntos.appendChild(punto);
});

const puntos = document.querySelectorAll(".carrusel-punto");

// ── Navegar a un índice específico ───────────────────────────────────────
function irA(indice) {
    indiceActual = (indice + total) % total;
    pista.style.transform = `translateX(-${indiceActual * 100}%)`;

    puntos.forEach((p, i) => {
        p.classList.toggle("activo", i === indiceActual);
    });
}

// ── Autoplay cada 4 segundos ─────────────────────────────────────────────
function iniciarAutoplay() {
    clearInterval(intervalo);
    intervalo = setInterval(() => irA(indiceActual + 1), 4000);
}

function reiniciarAutoplay() {
    iniciarAutoplay();
}

// ── Eventos de flechas ───────────────────────────────────────────────────
btnPrev.addEventListener("click", () => {
    irA(indiceActual - 1);
    reiniciarAutoplay();
});

btnNext.addEventListener("click", () => {
    irA(indiceActual + 1);
    reiniciarAutoplay();
});

// Pausar autoplay al hacer hover y reanudar al salir
const carrusel = document.querySelector(".carrusel");
carrusel.addEventListener("mouseenter", () => clearInterval(intervalo));
carrusel.addEventListener("mouseleave", iniciarAutoplay);

// ── Arranque ─────────────────────────────────────────────────────────────
irA(0);
iniciarAutoplay();