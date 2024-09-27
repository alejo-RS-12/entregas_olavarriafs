"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*•En una prueba, un piloto tiene que completar 4
vueltas
•Se necesita un programa que permita ingresar
por teclado el tiempo de cada vuelta
•El programa debe retornar el tiempo total y el
promedio de vuelta*/
var readlineSync = require("readline-sync");
// Definimos un array para almacenar los tiempos de vuelta
var tiempos = [];
var totalTiempo = 0;
// Obtenemos los tiempos de vuelta del usuario
for (var i = 1; i <= 4; i++) {
    var tiempov = readlineSync.question("Ingrese el tiempo de la vuelta: ");
    var tiempo = Number(tiempov);
    if (!isNaN(tiempo)) { // si el valor ingresado no es un numero retrocede para volver a ingresar el valor numero, sino procede.
        tiempos.push(tiempo);
        totalTiempo += tiempo;
    }
    else {
        console.log("El tiempo ingresado no es válido. Intente de nuevo.");
        i--; // Retrocedemos para ingresar el tiempo nuevamente
    }
}
// Calculamos el tiempo total y el promedio de vuelta
var promedio = totalTiempo / tiempos.length;
// Mostramos los resultados por consola
console.log("Tiempo total de las 4 vueltas: ".concat(totalTiempo, " segundos"));
console.log("Promedio de vuelta: ".concat(promedio, " segundos"));
