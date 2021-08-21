if (edad < 18) {
    console.log("hola")
} else if (edad == 18) {
    console.log("uwu")
} else {
    console.log("awa")
}

// condicion en una sola linea

var numero = 1

var resultado = numero === 1 ? "si es un uno" : "no es un uno"

// juego de piedra papel o tijeras

var op1 = "Piedra";
var op2 = "Papel";
var op3 = "Tijera";

var resultado = function(user, cpu) {
    if (user != cpu) {
        if (user === op1 && cpu === op3) {
            console.log("el usuario GANO con " + op1)
        } else if (user === op2 && cpu === op1) {
            console.log("el usuario GANO con " + op2)
        } else if (user === op3 && cpu === op2) {
            console.log("el usuario GANO con " + op3)
        } else {
            console.log("La CPU Gano!!")
        }
    } else if (user === cpu) {
        console.log("Empate")
    }
};