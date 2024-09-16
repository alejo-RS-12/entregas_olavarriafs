/*•Implemente un algoritmo que calcule y muestre
por pantalla el precio final de un producto
después de aplicarle un descuento
• El precio inicial del producto es $450,50
• El descuento a aplicar es del 10%. Recuerde que
puede obtener el 10% de un valor multiplicado por 0,1
• El precio y el descuento deben ser guardados en
variables (no ingresados por teclado)*/
let precioProducto : number = 450.50;
let precioDescuento: number =  precioProducto*0.1;
let precioFinal: number = precioProducto - precioDescuento;

console.log("el descuento es de: " + precioDescuento);

console.log("el precio final del producto es: " + precioFinal);