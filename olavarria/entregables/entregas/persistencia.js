"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*const precios: number[] = [525, 3500, 400, 1999];
const productos: string[] = ["Leche", "Galletitas", "Harina",
"Queso"];
en un archivo “precios.txt” y “productos.txt”
respectivamente.
Luego recupera la información en forma de
array nuevamente y mostrala por consola.*/
var fs = require("node:fs");
// Arrays de precios y productos
var precios = [525, 3500, 400, 1999];
var productos = ["Leche", "Galletitas", "Harina", "Queso"];
// Escribir los arrays en los archivos
var contenidoPrecios = '';
for (var i = 0; i < precios.length; i++) {
    contenidoPrecios += precios[i] + '\n';
}
fs.writeFileSync('precios.txt', contenidoPrecios, 'utf8');
var contenidoProductos = '';
for (var i = 0; i < productos.length; i++) {
    contenidoProductos += productos[i] + '\n';
}
fs.writeFileSync('productos.txt', contenidoProductos, 'utf8');
console.log("Archivos escritos con éxito");
// Leer los archivos y recuperar los arrays
var datosPrecios = fs.readFileSync('precios.txt', 'utf8');
var datosProductos = fs.readFileSync('productos.txt', 'utf8');
// Procesar los datos leídos
var preciosRecuperados = [];
var precioActual = '';
for (var i = 0; i < datosPrecios.length; i++) {
    if (datosPrecios[i] === '\n') {
        preciosRecuperados.push(Number(precioActual));
        precioActual = '';
    }
    else {
        precioActual += datosPrecios[i];
    }
}
var productosRecuperados = [];
var productoActual = '';
for (var i = 0; i < datosProductos.length; i++) {
    if (datosProductos[i] === '\n') {
        productosRecuperados.push(productoActual);
        productoActual = '';
    }
    else {
        productoActual += datosProductos[i];
    }
}
// Mostrar los arrays por consola
console.log('Precios:', preciosRecuperados);
console.log('Productos:', productosRecuperados);