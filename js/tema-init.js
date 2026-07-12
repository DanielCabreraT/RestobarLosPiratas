function aplicarTemaGuardado() {
    const temaGuardado = localStorage.getItem("tema");
    if (temaGuardado === "oscuro") {
        document.documentElement.setAttribute("data-tema", "oscuro");
    }
}

aplicarTemaGuardado();