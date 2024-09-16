"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readlineSync = require("readline-sync");
var precioProducto = readlineSync.questionInt("ingrese el precio del producto");
var precioDescuento = precioProducto * 0.1;
var precioFinal = precioProducto - precioDescuento;
console.log("el precio final de su producto es: " + precioFinal);
console.log("eñ precio final es: " + precioProducto * 0.9);
