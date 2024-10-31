"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readlineSync = require("readline-sync");
// la funcion principal que se encarga de del programa
function main() {
    console.log("Calculadora de potencias");
    var base = readlineSync.questionInt("Ingrese la base: ");
    var exponente = MayoroIgual("Ingrese el exponente (mayor o igual a cero): "); // se asegura que el valor ingresado sea valido
    var resultado = calcularPotencia(base, exponente); // calcula la potencia y muestra el resultado por consola
    console.log("el resultado de " + base + "elevado a " + exponente + "es: " + resultado);
}
// Método para leer un número entero positivo mayor o igual a cero desde el teclado
function MayoroIgual(message) {
    var num = readlineSync.questionInt(message); // lee un numero ingresado por teclado y lo asigna a la variable num
    if (num < 0) { // verifica que el numero ingresado no sea mejor que cero, si el numero es negativo muesta el siguente mensaje
        console.log("Error: El número debe ser mayor o igual a cero.");
        num = MayoroIgual(message); //llama a la funcion de vuelta para que el usuario vuelva a ingrear un numero valido y asi no se vuelve in vucle infinito
    }
    return num; // retorna al numero ingresado una vez que se valido 
}
function calcularPotencia(base, exponente) {
    if (exponente === 0) { // si el exponent es igual a 0 retorna un 1 
        return 1; // el resultado de cualquier numero elevado a la 0 es 1
    }
    var resultado = 1; // esta variable inicializada en 1 almacenara el resultado de cada multiplicacion
    for (var i = 0; i < exponente; i++) { //en cada iteracion del bucle se multiplica result por base y se almacena en resultado, el for lo que hace es multiplicar la base por exponente veces
        resultado *= base;
    }
    return resultado;
}
// ejecuta la funcion principal
main();
