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
    {id:31 , categoria: "comidas", imagen: "seco_de_cabrito_con_frijoles.png"},
    {id:32 , categoria: "comidas", imagen: "sudado_de_cachema.png"},
    {id:33 , categoria: "comidas", imagen: "tortilla_de_raya.png"},
    {id:34 , categoria: "otros", imagen: "salon_interior.png"},
    {id:35 , categoria: "otros", imagen: "show_en_vivo.png"},
    {id:36 , categoria: "otros", imagen: "zona_bar.png"},
    {id:37 , categoria: "otros", imagen: "zonabar_1.png"},
    {id:38 , categoria: "otros", imagen: "zonabar_2.png"},
    {id:39 , categoria: "otros", imagen: "zonabar_3.png"},
    {id:40 , categoria: "otros", imagen: "zonabar_4.png"},
    {id:41 , categoria: "otros", imagen: "zonabar_5.png"},
    {id:42 , categoria: "otros", imagen: "zonabar_6.png"},
    {id:43 , categoria: "otros", imagen: "zonabar_7.png"},
    {id:44 , categoria: "otros", imagen: "zonabar_8.png"},
    {id:45 , categoria: "otros", imagen: "zonabar_9.png"},
    {id:46 , categoria: "otros", imagen: "zonabar_10.png"},
    {id:47 , categoria: "otros", imagen: "zonabar_11.png"},
    {id:48 , categoria: "otros", imagen: "zonabar_12.png"},
    {id:49 , categoria: "otros", imagen: "zonabar_13.png"},
    {id:50 , categoria: "otros", imagen: "zonabar_14.png"},
    {id:51 , categoria: "otros", imagen: "zonabar_15.png"},
    {id:52 , categoria: "otros", imagen: "zonabar_16.png"},
    {id:53 , categoria: "otros", imagen: "zonabar_17.png"},
    {id:54 , categoria: "otros", imagen: "zonabar_18.png"},
    {id:55 , categoria: "otros", imagen: "zonabar_19.png"},
    {id:56 , categoria: "otros", imagen: "zonabar_20.png"},
]