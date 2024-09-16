/*•Desarrolle un algoritmo que diga el precio de
una compra
• La compra se compone del precio del producto
y la cantidad
•Si el cliente gasta más de $1000 debemos
aplicarle un descuento del 10%*/ 
import * as readlineSync from "readline-sync";
let precioProducto = readlineSync.question("ingrese un precio de compra");
let cantidad = readlineSync.question("ingrese una cantidad");

// se convierten los valores ingresados en numeros
let precioProductos = Number(precioProducto);
let cantida = Number(cantidad);

// se calcula el precio total de la compra
let precioTotal: number = precioProductos * cantida;

// se verifica si aplica el descuento
let precioFinal:number;
if(precioTotal>1000){
    let descuento: number = precioTotal * 0.1;
    console.log("se aplico el descuento del 10%");
}
else{
    precioFinal = precioTotal;
}
// se muestra el precio final por consola 
console.log("precio total de la compra: " + precioTotal);
console.log("");