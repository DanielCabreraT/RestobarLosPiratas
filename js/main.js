const boton = document.getElementById("btn-nav");
const menu = document.getElementById("menu");

boton.addEventListener("click", function(){
    menu.classList.toggle("activo")

    if (menu.classList.contains("activo")) {
        boton.textContent = "✕";
    } else {
        boton.textContent = "☰";
    }
})