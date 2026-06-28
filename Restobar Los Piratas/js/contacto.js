const formReserva = document.getElementById("form-reserva");
const inputNombre = document.getElementById("nombre");
const inputEmail = document.getElementById("email");
const inputMensaje = document.getElementById("mensaje");
const contadorLetras = document.getElementById("numero-letras");

const limite = 250;
inputMensaje.addEventListener("input", () => {
    const longitud = inputMensaje.value.length;
    contadorLetras.textContent = `${longitud}/${limite}`;
    
    if (longitud > limite) {
        contadorLetras.style.color = "red";
    } else {
        contadorLetras.style.color = "var(--negro-pirata)"; 
    }
});

formReserva.addEventListener("submit", (e) => {
    let errores = [];

    const nombreRegex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;
    if (inputNombre.value.trim().length < 3) {
        errores.push("El nombre debe tener al menos 3 caracteres.");
    } else if (!nombreRegex.test(inputNombre.value.trim())) {
        errores.push("El nombre solo debe contener letras, sin números.");
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(inputEmail.value.trim())) {
        errores.push("Ingresa un correo electrónico válido.");
    }

    if (inputMensaje.value.trim().length === 0) {
        errores.push("El mensaje no puede estar vacío.");
    } else if (inputMensaje.value.trim().length > limite) {
        errores.push("El mensaje superó el límite de 250 caracteres.");
    }

    if (errores.length > 0) {
        e.preventDefault(); 
        alert("Error en el ingreso de datos:\n\n- " + errores.join("\n- "));
    } else {
        e.preventDefault();
        alert("¡Mensaje enviado! Nos contactaremos pronto.");
        formReserva.reset(); 
        contadorLetras.textContent = `0/${limite}`;
    }
});