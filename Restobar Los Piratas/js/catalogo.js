export class Producto{
    id;
    categoria;
    imagen;
    constructor({id, categoria, imagen}){
        this.id = id;
        this.categoria = categoria;
        this.imagen = imagen;
    }
}

export class Catalogo{
    productos;

    getProductos(){
        return this.productos;
    }

    getProducto(id){
        return this.productos.find(p => p.id == id);
    }

    constructor(data){
        this.productos = data.map(p => new Producto(p));
    }
}

export const data = [
    {id:1 , categoria: "bebidas", imagen: "agua_cielo.png"},
    {id:2 , categoria: "bebidas", imagen: "agua_vida.png"},
    {id:3 , categoria: "bebidas", imagen: "bebida_redbull.png"},
    {id:4 , categoria: "bebidas", imagen: "bebida_sporade.png"},
    {id:5 , categoria: "bebidas", imagen: "bebida_volt.png"},
    {id:6 , categoria: "bebidas", imagen: "cerveza_corona.png"},
    {id:7 , categoria: "bebidas", imagen: "cerveza_cristal.png"},
    {id:8 , categoria: "bebidas", imagen: "cerveza_cusquena.png"},
    {id:9 , categoria: "bebidas", imagen: "cerveza_pilsen.png"},
    {id:10 , categoria: "bebidas", imagen: "cerveza_wild.png"},
    {id:11 , categoria: "bebidas", imagen: "gaseosa_coca_cola_personal.png"},
    {id:12 , categoria: "bebidas", imagen: "gaseosa_coca_cola.png"},
    {id:13 , categoria: "bebidas", imagen: "gaseosa_fanta.png"},
    {id:14 , categoria: "bebidas", imagen: "gaseosa_pepsi.png"},
    {id:15 , categoria: "bebidas", imagen: "mikes_hard_lemonade.png"},
    {id:16 , categoria: "comidas", imagen: "arroz_con_mariscos.png"},
    {id:17 , categoria: "comidas", imagen: "arroz_con_pato_chiclayana.png"},
    {id:18 , categoria: "comidas", imagen: "caballa_pasada_por_agua_caliente.png"},
    {id:19 , categoria: "comidas", imagen: "causa.png"},
    {id:20 , categoria: "comidas", imagen: "ceviche_de_caballa_fresca.png"},
    {id:21 , categoria: "comidas", imagen: "ceviche_toyo.png"},
    {id:22 , categoria: "comidas", imagen: "chicharron_de_calamar.png"},
    {id:23 , categoria: "comidas", imagen: "chilcano_de_pescado.png"},
    {id:24 , categoria: "comidas", imagen: "chinguirito.png"},
    {id:25 , categoria: "comidas", imagen: "espesado.png"},
    {id:26 , categoria: "comidas", imagen: "frito.png"},
    {id:27 , categoria: "comidas", imagen: "jalea_de_pescado.png"},
    {id:28 , categoria: "comidas", imagen: "parihuela_chiclayana.png"},
    {id:29 , categoria: "comidas", imagen: "plato_combinado.jpeg"},
    {id:30 , categoria: "comidas", imagen: "plato_mariscos.jpeg"},
    {id:31 , categoria: "comidas", imagen: "seco_de_cabrito_con_frijoles.png"},
    {id:32 , categoria: "comidas", imagen: "sudado_de_cachema.png"},
    {id:33 , categoria: "comidas", imagen: "tortilla_de_raya.png"},
    {id:34 , categoria: "otros", imagen: "salon_interior.jpeg"},
    {id:35 , categoria: "otros", imagen: "show_en_vivo.jpeg"},
    {id:36 , categoria: "otros", imagen: "zona_bar.jpeg"},
]