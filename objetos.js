var miAuto = {
    marca: "Toyota",
    modelo: "Corola",
    annio: 2020,
    detalleDelAuto: function(){
        console.log(`Auto ${this.modelo} ${this.aniio}`);
        //this es una variable que hace referceia a su objeto padre.
        //en este caso represanta miAuto.modelo miAuto.annio 
    }
};

console.log(miAuto.modelo);
//devuelve "Corola"

miAuto.detalleDelAuto();
// como el valor de la plabra clave es una funcion hay que llamarla como una funcion usando ()

//devuelve "Auto Corolla 2020"

/////////////////////////////////////////////////////////////////////////////////////////////

function auto(marca, modelo, annio) {
    this.marca = marca;
    this.modelo = modelo;
    this.annio = annio;
}

var AutoNuevo = new auto("Tesla", "Model 3", 2020);
// esta es la manera de ingresar un nuevo objeto usando constructor anterior.

var AutoNuevo2 = new auto("Tesla", "Model x", 2018);
var AutoNuevo3 = new auto("Toyota", "Corolla", 2020);

/////////////////////////////////////////////////////////////////////////////////////////////


// METODOS


var articulos = [
    {nombre: "Bici", costo: 3000 },
    {nombre: "Tv", costo: 2500 },
    {nombre: "Libro", costo: 320 },
    {nombre: "Celular", costo: 10000 },
    {nombre: "Laptop", costo: 20000 },
    {nombre: "Teclado", costo: 500 },
    {nombre: "Audifonos", costo: 1700 },
    {nombre: "Monitor", costo: 5000 },
    {nombre: "Mouse", costo: 1000 },
];

var articulosFiltrados = articulos.filter(function(articulo){
    //                          .filter() es el metodo
    return articulo.costo <=500
});

// devuelve dos items el libro y el teclado


var nombreArticulos = articulos.map(function(articulo){
    return articulo.nombre
});

//devuelve nombreArticulos=[ "Bici","Tv","Libro", etc]; solo los nombres

var encuentraArticulo = articulos.find(function(articulo){
    return articulo.nombre === "Laptop"
})

// devuelve encuentraArticulo={nombre:"Latop", costo 2000} 

//IMPORTANTE solo devuelve un resultado, cuando encuentra lo que busca, no 
// seguira buscando si hay otro que coincida con el parametro.


articulos.forEach(function(articulo){
    console.log(articulo.nombre);    
});
//imprimiria en la consola
//    Bici
//    TV
//    Libro
//    etc. 

var articulosBaratos = articulos.some(function(articulo){
    return articulo.costo <= 700;
})

// devuele true  // este metodo solo devuelve verdadero o falso.