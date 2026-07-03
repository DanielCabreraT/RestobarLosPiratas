const formReserva = document.getElementById("form-reserva");
const inputNombre = document.getElementById("nombre");
const selectMotivo = document.getElementById("motivo");
const inputPersonas = document.getElementById("personas");
const inputFecha = document.getElementById("fecha");
const inputMensaje = document.getElementById("mensaje");
const contadorLetras = document.getElementById("numero-letras");
const feedback = document.getElementById("form-feedback");

const campoPersonas = document.getElementById("campo-personas");
const campoFecha = document.getElementById("campo-fecha");

const limite = 250;

const numeroWhatsapp = "51912262484";

const motivosConReserva = ["Reserva de mesa", "Evento especial"];

const motivosConMensajeObligatorio = ["Consulta general", "Reclamo o sugerencia"];

// ----- Mostrar/ocultar campos -----
selectMotivo.addEventListener("change", () => {
    const esReserva = motivosConReserva.includes(selectMotivo.value);

    campoPersonas.hidden = !esReserva;
    campoFecha.hidden = !esReserva;

    inputPersonas.required = esReserva;
    inputFecha.required = esReserva;

    if (!esReserva) {
        inputPersonas.value = "";
        inputFecha.value = "";
        mostrarError(inputPersonas, "");
        mostrarError(inputFecha, "");
        inputPersonas.classList.remove("input-valido", "input-invalido");
        inputFecha.classList.remove("input-valido", "input-invalido");
    }

    mostrarError(selectMotivo, "");
});

// ----- Reglas de validación segun el campo -----
const reglas = {
    nombre: (valor) => {
        const v = valor.trim();
        const nombreRegex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;
        if (v.length === 0) return "El nombre es obligatorio.";
        if (v.length < 3) return "El nombre debe tener al menos 3 caracteres.";
        if (!nombreRegex.test(v)) return "El nombre solo debe contener letras.";
        return "";
    },
    motivo: (valor) => {
        if (!valor) return "Selecciona un motivo.";
        return "";
    },
    personas: (valor) => {
        if (!inputPersonas.required) return "";
        const n = Number(valor);
        if (!valor) return "Indica el número de personas.";
        if (!Number.isInteger(n) || n < 1) return "Ingresa un número válido (mínimo 1).";
        if (n > 50) return "Para grupos mayores a 50, contáctanos directamente.";
        return "";
    },
    fecha: (valor) => {
        if (!inputFecha.required) return "";
        if (!valor) return "Selecciona la fecha y hora deseada.";
        const fechaElegida = new Date(valor);
        if (fechaElegida < new Date()) return "La fecha debe ser futura.";
        return "";
    },
    mensaje: (valor) => {
        const v = valor.trim();
        const esObligatorio = motivosConMensajeObligatorio.includes(selectMotivo.value);
        if (v.length === 0 && esObligatorio) return "Cuéntanos brevemente tu consulta o reclamo.";
        if (v.length > limite) return `El mensaje supera el límite de ${limite} caracteres.`;
        return "";
    }
};

// ----- para mostrar/ocultar errores -----
function mostrarError(input, mensaje) {
    const errorSpan = document.getElementById(`error-${input.id}`);
    if (!errorSpan) return;

    if (mensaje) {
        errorSpan.textContent = mensaje;
        input.classList.add("input-invalido");
        input.classList.remove("input-valido");
        input.setAttribute("aria-invalid", "true");
    } else {
        errorSpan.textContent = "";
        input.classList.remove("input-invalido");
        if (input.value) input.classList.add("input-valido");
        input.setAttribute("aria-invalid", "false");
    }
}

function validarCampo(input) {
    const mensaje = reglas[input.id](input.value);
    mostrarError(input, mensaje);
    return mensaje === "";
}

const camposBase = [inputNombre, selectMotivo, inputMensaje];
const camposReserva = [inputPersonas, inputFecha];

// ----- Validación en tiempo real -----
[...camposBase, ...camposReserva].forEach((input) => {
    input.addEventListener("blur", () => validarCampo(input));
    input.addEventListener("input", () => {
        if (input.classList.contains("input-invalido")) {
            validarCampo(input);
        }
    });
});

// ----- Contador de caracteres del mensaje -----
inputMensaje.addEventListener("input", () => {
    const longitud = inputMensaje.value.length;
    contadorLetras.textContent = `${longitud}/${limite}`;
    contadorLetras.style.color = longitud > limite ? "#c0392b" : "var(--negro-pirata)";
});

// ----- Envio del formulario -----
formReserva.addEventListener("submit", (e) => {
    e.preventDefault();

    const esReserva = motivosConReserva.includes(selectMotivo.value);
    const camposAValidar = esReserva
        ? [...camposBase, ...camposReserva]
        : camposBase;

    const formularioValido = camposAValidar
        .map((input) => validarCampo(input))
        .every(Boolean);

    if (!formularioValido) {
        feedback.textContent = "Por favor corrige los campos marcados en rojo.";
        feedback.className = "form-feedback feedback-error";

        const primerInvalido = camposAValidar.find((input) => input.classList.contains("input-invalido"));
        if (primerInvalido) primerInvalido.focus();
        return;
    }

    // ----- mensaje prellenado para WhatsApp -----
    const nombre = inputNombre.value.trim();
    const motivo = selectMotivo.value;
    const mensaje = inputMensaje.value.trim();

    let lineas = [
        `Hola, soy ${nombre}.`,
        `Motivo: ${motivo}`
    ];

    if (esReserva) {
        const personas = inputPersonas.value;
        const fechaLegible = new Date(inputFecha.value).toLocaleString("es-PE", {
            dateStyle: "long",
            timeStyle: "short"
        });
        lineas.push(`Número de personas: ${personas}`);
        lineas.push(`Fecha y hora: ${fechaLegible}`);
    }

    if (mensaje) {
        lineas.push(`Mensaje: ${mensaje}`);
    }

    const textoWhatsapp = encodeURIComponent(lineas.join("\n"));
    const urlWhatsapp = `https://wa.me/${numeroWhatsapp}?text=${textoWhatsapp}`;

    feedback.textContent = "Te estamos redirigiendo a WhatsApp para enviar tu mensaje...";
    feedback.className = "form-feedback feedback-exito";

    window.open(urlWhatsapp, "_blank");

    // ----- Reset del formulario -----
    formReserva.reset();
    contadorLetras.textContent = `0/${limite}`;
    campoPersonas.hidden = true;
    campoFecha.hidden = true;
    inputPersonas.required = false;
    inputFecha.required = false;

    [...camposBase, ...camposReserva].forEach((input) => {
        input.classList.remove("input-valido", "input-invalido");
        input.removeAttribute("aria-invalid");
    });
});