//  Funciones declarativas

function miFuncion() {
    return 3;
}

function saludar(nombre, a, b) {
    console.log(`hola ${nombre}`);
    return a + b;
}
// Funcion de expresion

// las variables pueden almacenar funciones

var miFUncion = function(a, b) {
    return a + b;
}

miFuncion();