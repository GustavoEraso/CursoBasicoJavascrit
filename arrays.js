var frutas = ["manzana","Platano","cereza","fresa"];


console.log(frutas);

//devuelve
//(4) ["manzana","Platano","cereza","fresa"]
//(cantidad de items) array

console.log(frutas.length);

// devuelve
//4

console.log(frutas[0]);

//devuelve "manzana"

console.log(frutas[2]);

//devuelve "cereza"

var masFrutas = frutas.push("Uvas");
//inserta "Uvas" al final.

var ultimo = frutas.pop();
// elimina "Uvas" del final del array

var nuevLongitud = frutas.unshift("Uvas");
//inserta "Uvas" al inicio dle array

var borrarFruta = frutas.shift();
// elimina "Uvas"  del inicio del array

var posicion = frutas.indexOf("cereza");
// devuelve 2 (es el index de cereza)

