var estudiantes = ["Maria","Sergio","Rosa","Daniel"];

function saludarEstudiantes(estudiante){
        console.log(`Hola, ${estudiante}`);
}

///////////////////////////////////////////////////////////////////////////////////////////

for(var i = 0 ; i < estudiantes.length; i++){
 // for( var i = 0 ;mientras i sea menos que largo de estudiantes; sumar 1 a variable i)
    saludarEstudiantes(estudiantes[i]);

}

//devuelve:
// Hola, Maria
// Hola, Sergio
// Hola, Rosa
// Hola, Daniel

for(var estudiante of estudiantes){
    saludarEstudiantes(estudiante);
}

// devuelve
// Hola, Maria
// Hola, Sergio
// Hola, Rosa
// Hola, Daniel

/////////////////////////////////////////////////////////////////////////////////////////////

while(estudiantes.length > 0){
// mientras estudiantes.length sea menor a 0
    var estudiante = estudiante.shift();
    // va quitando el primer item del array en cada pasada hasta llegar a 0
    saludarEstudiantes(estiante);
}