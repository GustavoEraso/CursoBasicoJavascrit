// hay 2 tipos de funciones

//Declarativas

function miFuncion(){
    return 3;

}


//Expresión

var miFuncion = function(a,b){
    return a + b;
}

miFuncion();

//EJEMPLOS

function saludarEstudiantes(estudiante){
    console.log(estudiante);
}

saludarEstudiantes("Gustavo");

//devuelve "Gustavo" en la consola


function saludarEstudiantes(estudiante){
    console.log(`Hola ${estudiante}`);
}

saludarEstudiantes("Gustavo");

// devuelve "Hola Gustavo" en la consola} or cada no,bre en la variable


function sumar (a,b){
    var resultado = a + b;
    return resultado;
}

sumar(1,3)
//devuelve 4