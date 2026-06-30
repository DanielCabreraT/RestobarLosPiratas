import { Producto } from "./catalogo.js";
import { Catalogo } from "./catalogo.js";
import { data } from "./catalogo.js";

let catalogo = new Catalogo(data);

function cargarProductos(){
    for(let producto of catalogo.getProductos().slice().reverse()){

        const galeriaGrid = document.getElementById("galeria-grid");

        let div = document.createElement('div');
        let img = document.createElement('img');

        div.classList.add("tarjeta");
        div.dataset.categoria = producto.categoria;

        img.src = `imagenes/${producto.categoria}/${producto.imagen}`

        div.appendChild(img);
        galeriaGrid.appendChild(div);
    }
}

function filtrarPorCategoria(event){
    let categoria = event.target.dataset.categoria;

    if(categoria == 'todos'){
        document.querySelectorAll('.tarjeta').forEach(t => t.style.display = 'block');
        return;
    }

    document.querySelectorAll('.tarjeta').forEach(t=>{
        if(t.dataset.categoria == categoria){
            t.style.display = 'block';
        }else{
            t.style.display = 'none'
        }
    });
}

document.querySelectorAll('.btn-filtro').forEach(btn => {
    btn.addEventListener('click', filtrarPorCategoria);
});

cargarProductos();