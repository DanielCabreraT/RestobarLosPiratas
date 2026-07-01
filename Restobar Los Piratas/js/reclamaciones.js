// Obtener elementos principales del formulario y del modal
const formulario = document.querySelector(".form-reclamaciones");
const modal = document.getElementById("modal-reclamo");
const cerrarModal = document.getElementById("cerrar-modal");

// Evento que se ejecuta al enviar el formulario
formulario.addEventListener("submit", function(event){
    event.preventDefault();

     // Obtener y limpiar los datos ingresados por el usuario
    const nombre = document.getElementById("nombre").value.trim();
    const tipoDocumento = document.getElementById("tipo-doc").value;
    const numeroDocumento = document.getElementById("num-doc").value.trim();
    const telefono = document.getElementById("telefono").value.trim();
    const correo = document.getElementById("correo").value.trim();
    const monto = parseFloat(document.getElementById("monto").value);
    const descripcion = document.getElementById("descripcion").value.trim();
    const detalle = document.getElementById("detalle").value.trim();
    const pedido = document.getElementById("pedido").value.trim();
    const terminos = document.querySelector('input[name="terminos"]').checked;

    // Validar ingreso de datos
    if(nombre.length<5){
        alert("Ingrese sus nombres y apellidos completos");
        return;
    }

    if(tipoDocumento === "DNI"){
        if(!/^\d{8}$/.test(numeroDocumento)){
            alert("El DNI debe tener exactamente 8 digitos.");
            return;
        }
    }

    if(tipoDocumento === "CE"){
        if(!/^\d{9}$/.test(numeroDocumento)){
            alert("El C.E debe tener exactamente 9 digitos.");
            return;
        }
    }

    if(tipoDocumento === "Pasaporte"){
        if(!/^[A-Za-z0-9]{6,12}$/.test(numeroDocumento)){
            alert("El pasaporte debe tener entre 6 y 12 caracteres alfanuméricos.");
            return;
        }
    }

    if(!/^\d{9}$/.test(telefono)){
        alert("El numero telefono debe tener exactamente 9 digitos");
        return;
    }

    if(!correo.includes("@") || !correo.includes(".")){
        alert("Ingrese un correo valido.");
        return;
    }

    if(isNaN(monto) || monto<=0){
        alert("Ingrese un monto reclamado válido.");
        return;
    }

    if(descripcion.length<15){
        alert("La descripcion debe tener al menos 15 caracteres.");
        return;
    }

    if(detalle.length<15){
        alert("El detalle del reclamo o queja debe tener al menos 15 caracteres.");
        return;
    }

    if(pedido.length<15){
        alert("El pedido o solucion esperada debe tener al menos 15 caracteres.");
        return;
    }

    if(!terminos){
        alert("Debe aceptar la declaracion para enviar el reclamo.");
        return;
    }

    // Mostrar modal de confirmación y resetear formulario
    modal.showModal();
    formulario.reset();
})

//cerrar el modal
cerrarModal.addEventListener("click", function(){
    modal.close();
})