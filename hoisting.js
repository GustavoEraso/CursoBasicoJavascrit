var miNombre;
miNombre = "Gustavo";
// la mayoria de la veces se inicializa y declara al mismo tiempo
// ej
var miApellido = "Eraso";

////////////////////////////////////////////////////////////////////////
//Que devuelve si llamamos una variable antes de ser declarada?

console.log(miEdad);

var miEdad = 33;

// se genera hoisting,  en este caso devuelve undefine, porque js al llegar a la linea del console.log resuelve
//que los datos que puede leer dentro de los parentesis son una variable, pero como esa 
//variable no existe, JS la crea, (var miEdad = undefine;) y ese es el resulatdo que devuelve. 
////////////////////////////////////////////////////////////////////////

var dato = undefined;  //esto es lo que haria JS al leer el console.log

console.log(dato);

dato = "Este dato lo cargue yo"

//devolveria
undefined //este es el undefine que Declaro JS
"Este dato lo cargue yo"


//Es una buena practica declarar las variables y las funciones al inicio del codigo, para 
//de esta manera evitar los casos de histing


