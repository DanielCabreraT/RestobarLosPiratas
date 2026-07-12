const btnTema = document.getElementById("btn-tema");

btnTema.addEventListener("click", () => {
    const esOscuroActualmente = document.documentElement.getAttribute("data-tema") === "oscuro";

    if (esOscuroActualmente) {
        document.documentElement.removeAttribute("data-tema");
        localStorage.setItem("tema", "claro");
    } else {
        document.documentElement.setAttribute("data-tema", "oscuro");
        localStorage.setItem("tema", "oscuro");
    }
});