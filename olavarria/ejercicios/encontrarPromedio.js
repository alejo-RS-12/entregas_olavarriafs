"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*encuenta el promedio de una lista de numeros
encuentrael numero mas grande de una lista
encuentra el numero mas pequeño de una lista
calcula la sunma de dos arreglos elementos pares en una lista
encuentra el numero de elementos pares en una lista
encuentra el numero de veces que aparece un elemento en una lista
calucal el producto de todos los elemntos en una lista
encuentra el numero mas grande entro dos numeros*/
var rls = require("readline-sync");
function definirArreglo(dimension) {
    var arreglo = new Array(dimension);
    for (var i = 0; i < dimension; i++) {
        arreglo[i] = rls.questionInt("indique el numero que va en la posicion i ");
    }
    return arreglo;
}
function calcularPromedio(arreglo) {
    var suma = 0;
    for (var i = 0; i < arreglo.length; i++) {
        suma += arreglo[i];
    }
    return suma / arreglo.length;
}
var dimensionArreglo = rls.questionInt('Ingrese la dimensión del arreglo: ');
var arreglo = definirArreglo(dimensionArreglo);
var promedio = calcularPromedio(arreglo);
// Mostrando los elementos del arreglo
for (var i = 0; i < arreglo.length; i++) {
    console.log("El n\u00FAmero en la posici\u00F3n ".concat(i, " es: ").concat(arreglo[i]));
}
// Mostrando el promedio del arreglo
console.log("El promedio del arreglo es: ".concat(promedio));
