const modal = document.getElementById("modal-menu");
const modalImg = document.getElementById("modal-img");
const modalTitulo = document.getElementById("modal-titulo");
const modalIngredientes = document.getElementById("modal-ingredientes");
const modalPreparacion = document.getElementById("modal-preparacion");
const modalPrecio = document.getElementById("modal-precio");

function cerrarModal() {
    modal.style.display = "none";
}

document.querySelectorAll(".menu-carta").forEach(card => {
    card.addEventListener("click", () => {
        const img = card.querySelector("img");

        modalImg.src = img.src;
        modalImg.alt = img.alt;

        modalTitulo.textContent = card.querySelector("h3").textContent;
        modalPrecio.textContent = card.querySelector(".precio").textContent;

        modalIngredientes.innerHTML = card.dataset.ingredientes
            .split(";")
            .map(i => `<li>${i.trim()}</li>`)
            .join("");

        modalPreparacion.textContent = card.dataset.preparacion;

        modal.style.display = "flex";
    });
});

document.querySelector(".cerrar-menu").addEventListener("click", cerrarModal);

modal.addEventListener("click", e => {
    if (e.target === modal) cerrarModal();
});

document.addEventListener("keydown", e => {
    if (e.key === "Escape") cerrarModal();
});