document.getElementById('btnEnviar').addEventListener('click', function(event){
    alert('MENSAJE ENVIADO')
})

const mensaje = document.getElementById("mensaje");
const contador = document.getElementById("numero-letras");

mensaje.addEventListener("input", function () {
    contador.textContent = `${this.value.length}/300`;
});