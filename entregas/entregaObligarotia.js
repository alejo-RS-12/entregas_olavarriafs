"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*EJERCICIOS DE ENTREGA OBLIGATIORIA (Viernes 03/05/2024)

DESARROLLAR UN ALGORITMO QUE DADO UN NUMERO, INGRESADO POR EL USUARIO DETERMINE SI EL NUMERO ES PAR O IMPAR Y LE INFORME AL USUARIO
EN EL CASO DE SER 0 EL ALGORITMO DEBERÁ INFORMALO
TENGA EN CUENTA QUE EN JS HAY UN OPERADOR DENOMINADO MODULO (%) QUE DEVUELVE EL RESTO DE UNA DIVISION
Recuerde plantear el pseudocodigo y las pruebas de escritorio*/
var readlineSync = require("readline-sync");
var numeroIngresado = readlineSync.question("ingrese un numero "); // se pide al usuario que ingrese un numero que se guarda en la variable numeroIngresado
var numeroNuevo = Number(numeroIngresado); // se convierte la cadena numero ingresado en un numero (number) y el numero convertido se guarda en la variable numeroNuevo
if (!isNaN(numeroNuevo)) { // en este if se verifica si el numero es par o inpar y si es un valor numerico
    if (numeroNuevo === 0) { // si el numero mostrado es 0 salta por consola el siguiente mensaje, sino prosigue con el if 
        console.log("el numero es 0");
    }
    else if (numeroNuevo % 2 == 0) { // si elnumero es diferente de 0 se verifica si es par o inpar usando el operador %
        console.log("el numero es par");
    }
    else {
        console.log("el numero es impar");
    }
}
else {
    console.log("por favor ingrese un numero valido ");
}
