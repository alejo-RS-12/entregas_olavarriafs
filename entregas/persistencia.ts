/*const precios: number[] = [525, 3500, 400, 1999];
const productos: string[] = ["Leche", "Galletitas", "Harina",
"Queso"];
en un archivo “precios.txt” y “productos.txt”
respectivamente.
Luego recupera la información en forma de
array nuevamente y mostrala por consola.*/
import * as fs from 'node:fs';

// Arrays de precios y productos
const precios: number[] = [525, 3500, 400, 1999];
const productos: string[] = ["Leche", "Galletitas", "Harina", "Queso"];

// Escribir los arrays en los archivos
let contenidoPrecios = '';
for (let i = 0; i < precios.length; i++) {
    contenidoPrecios += precios[i] + '\n';
}
fs.writeFileSync('precios.txt', contenidoPrecios, 'utf8');

let contenidoProductos = '';
for (let i = 0; i < productos.length; i++) {
    contenidoProductos += productos[i] + '\n';
}
fs.writeFileSync('productos.txt', contenidoProductos, 'utf8');

console.log("Archivos escritos con éxito");

// Leer los archivos y recuperar los arrays
const datosPrecios = fs.readFileSync('precios.txt', 'utf8');
const datosProductos = fs.readFileSync('productos.txt', 'utf8');

// Procesar los datos leídos
const preciosRecuperados: number[] = [];
let precioActual = '';
for (let i = 0; i < datosPrecios.length; i++) {
    if (datosPrecios[i] === '\n') {
        preciosRecuperados.push(Number(precioActual));
        precioActual = '';
    } else {
        precioActual += datosPrecios[i];
    }
}

const productosRecuperados: string[] = [];
let productoActual = '';
for (let i = 0; i < datosProductos.length; i++) {
    if (datosProductos[i] === '\n') {
        productosRecuperados.push(productoActual);
        productoActual = '';
    } else {
        productoActual += datosProductos[i];
    }
}

// Mostrar los arrays por consola
console.log('Precios:', preciosRecuperados);
console.log('Productos:', productosRecuperados);