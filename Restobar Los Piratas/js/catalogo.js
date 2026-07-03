export class Producto{
    id;
    categoria;
    imagen;
    leyenda;

    constructor({ id, categoria, imagen, leyenda }) {
        this.id = id;
        this.categoria = categoria;
        this.imagen = imagen;
        this.leyenda = leyenda;
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
    { id: 1,  categoria: "bebidas", imagen: "agua_cielo.png",                    leyenda: "Agua Cielo" },
    { id: 2,  categoria: "bebidas", imagen: "agua_vida.png",                     leyenda: "Agua Vida" },
    { id: 3,  categoria: "bebidas", imagen: "bebida_redbull.png",                leyenda: "Red Bull" },
    { id: 4,  categoria: "bebidas", imagen: "bebida_sporade.png",                leyenda: "Sporade" },
    { id: 5,  categoria: "bebidas", imagen: "bebida_volt.png",                   leyenda: "Volt Energy" },
    { id: 6,  categoria: "bebidas", imagen: "cerveza_corona.png",                leyenda: "Cerveza Corona" },
    { id: 7,  categoria: "bebidas", imagen: "cerveza_cristal.png",               leyenda: "Cerveza Cristal" },
    { id: 8,  categoria: "bebidas", imagen: "cerveza_cusquena.png",              leyenda: "Cerveza Cusqueña" },
    { id: 9,  categoria: "bebidas", imagen: "cerveza_pilsen.png",                leyenda: "Cerveza Pilsen" },
    { id: 10, categoria: "bebidas", imagen: "cerveza_wild.png",                  leyenda: "Wild Beer" },
    { id: 11, categoria: "bebidas", imagen: "gaseosa_coca_cola_personal.png",    leyenda: "Coca Cola Personal" },
    { id: 12, categoria: "bebidas", imagen: "gaseosa_coca_cola.png",             leyenda: "Coca Cola" },
    { id: 13, categoria: "bebidas", imagen: "gaseosa_fanta.png",                 leyenda: "Fanta" },
    { id: 14, categoria: "bebidas", imagen: "gaseosa_pepsi.png",                 leyenda: "Pepsi" },
    { id: 15, categoria: "bebidas", imagen: "mikes_hard_lemonade.png",           leyenda: "Mike's Hard Lemonade" },
    { id: 16, categoria: "comidas", imagen: "arroz_con_mariscos.png",            leyenda: "Arroz con Mariscos" },
    { id: 17, categoria: "comidas", imagen: "arroz_con_pato_chiclayana.png",     leyenda: "Arroz con Pato a la Chiclayana" },
    { id: 18, categoria: "comidas", imagen: "caballa_pasada_por_agua_caliente.png", leyenda: "Caballa Pasada por Agua Caliente" },
    { id: 19, categoria: "comidas", imagen: "causa.png",                         leyenda: "Causa" },
    { id: 20, categoria: "comidas", imagen: "ceviche_de_caballa_fresca.png",     leyenda: "Ceviche de Caballa Fresca" },
    { id: 21, categoria: "comidas", imagen: "ceviche_toyo.png",                  leyenda: "Ceviche de Toyo" },
    { id: 22, categoria: "comidas", imagen: "chicharron_de_calamar.png",         leyenda: "Chicharrón de Calamar" },
    { id: 23, categoria: "comidas", imagen: "chilcano_de_pescado.png",           leyenda: "Chilcano de Pescado" },
    { id: 24, categoria: "comidas", imagen: "chinguirito.png",                   leyenda: "Chinguirito" },
    { id: 25, categoria: "comidas", imagen: "espesado.png",                      leyenda: "Espesado" },
    { id: 26, categoria: "comidas", imagen: "frito.png",                         leyenda: "Jalea de Pescado Frita" },
    { id: 27, categoria: "comidas", imagen: "jalea_de_pescado.png",              leyenda: "Jalea de Pescado" },
    { id: 28, categoria: "comidas", imagen: "parihuela_chiclayana.png",          leyenda: "Parihuela Chiclayana" },
    { id: 31, categoria: "comidas", imagen: "seco_de_cabrito_con_frijoles.png",  leyenda: "Seco de Cabrito con Frijoles" },
    { id: 32, categoria: "comidas", imagen: "sudado_de_cachema.png",             leyenda: "Sudado de Cachema" },
    { id: 33, categoria: "comidas", imagen: "tortilla_de_raya.png",              leyenda: "Tortilla de Raya" },
    { id: 34, categoria: "otros",   imagen: "salon_interior.png",                leyenda: "Salón interior" },
    { id: 35, categoria: "otros",   imagen: "show_en_vivo.png",                  leyenda: "Show en vivo" },
    { id: 36, categoria: "otros",   imagen: "zona_bar.png",                      leyenda: "Zona bar" },
    { id: 37, categoria: "otros",   imagen: "zonabar_1.png",                     leyenda: "Zona bar" },
    { id: 38, categoria: "otros",   imagen: "zonabar_2.png",                     leyenda: "Zona bar" },
    { id: 39, categoria: "otros",   imagen: "zonabar_3.png",                     leyenda: "Zona bar" },
    { id: 40, categoria: "otros",   imagen: "zonabar_4.png",                     leyenda: "Zona bar" },
    { id: 41, categoria: "otros",   imagen: "zonabar_5.png",                     leyenda: "Zona bar" },
    { id: 42, categoria: "otros",   imagen: "zonabar_6.png",                     leyenda: "Zona bar" },
    { id: 43, categoria: "otros",   imagen: "zonabar_7.png",                     leyenda: "Zona bar" },
    { id: 44, categoria: "otros",   imagen: "zonabar_8.png",                     leyenda: "Zona bar" },
    { id: 45, categoria: "otros",   imagen: "zonabar_9.png",                     leyenda: "Zona bar" },
    { id: 46, categoria: "otros",   imagen: "zonabar_10.png",                    leyenda: "Zona bar" },
    { id: 47, categoria: "otros",   imagen: "zonabar_11.png",                    leyenda: "Zona bar" },
    { id: 48, categoria: "otros",   imagen: "zonabar_12.png",                    leyenda: "Zona bar" },
    { id: 49, categoria: "otros",   imagen: "zonabar_13.png",                    leyenda: "Zona bar" },
    { id: 50, categoria: "otros",   imagen: "zonabar_14.png",                    leyenda: "Zona bar" },
    { id: 51, categoria: "otros",   imagen: "zonabar_15.png",                    leyenda: "Zona bar" },
    { id: 52, categoria: "otros",   imagen: "zonabar_16.png",                    leyenda: "Zona bar" },
    { id: 53, categoria: "otros",   imagen: "zonabar_17.png",                    leyenda: "Zona bar" },
    { id: 54, categoria: "otros",   imagen: "zonabar_18.png",                    leyenda: "Zona bar" },
    { id: 55, categoria: "otros",   imagen: "zonabar_19.png",                    leyenda: "Zona bar" },
    { id: 56, categoria: "otros",   imagen: "zonabar_20.png",                    leyenda: "Zona bar" },
];