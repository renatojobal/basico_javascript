// Declarativas


function miFuncion() {
    return 3;
}



// Expresión o anónimas

var miFuncionDeExpresion = function(a,b) {
    return a + b;
}

// Tambien pueden ser no anónimas
var miFuncionDeExpresion = function nombreCualquiera(a,b) {
    return a + b;
}

miFuncionDeExpresion(1, 3);

function saludarEstudiante(estudiante) {
    console.log(estudiante);
}

function saludarEstudiante(estudiante) {
    console.log(`Hola ${estudiante}`);
}

saludarEstudiante("Diego");