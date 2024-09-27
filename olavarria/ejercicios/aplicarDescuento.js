"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*•Desarrolle un algoritmo que diga el precio de
una compra
• La compra se compone del precio del producto
y la cantidad
•Si el cliente gasta más de $1000 debemos
aplicarle un descuento del 10%*/
var readlineSync = require("readline-sync");
var precioProducto = readlineSync.question("ingrese un precio de compra");
var cantidad = readlineSync.question("ingrese una cantidad");
// se convierten los valores ingresados en numeros
var precioProductos = Number(precioProducto);
var cantida = Number(cantidad);
// se calcula el precio total de la compra
var precioTotal = precioProductos * cantida;
// se verifica si aplica el descuento
var precioFinal;
if (precioTotal > 1000) {
    var descuento = precioTotal * 0.1;
    console.log("se aplico el descuento del 10%");
}
else {
    precioFinal = precioTotal;
}
// se muestra el precio final por consola 
console.log("precio total de la compra: " + precioTotal);
console.log("");
