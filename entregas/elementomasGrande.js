/*Dado el siguiente arreglo
[4,7,9,3,1,45,67,23,29,78,11,16]
- Crear un programa que encuentre cuál es el número
más grande del arreglo e imprimirlo por consola
- Almacenar el número más grande en una variable
global y pasarlo a una función para determinar si el
número es par o impar*/
var numeros = [4, 7, 9, 3, 1, 45, 67, 23, 29, 78, 11, 16]; // se define arreglo
var MaxNumber = numeros[0]; // almacena la variable mas grande encontada en el arreglo
function encontrarNumero(arr) {
    var Max = arr[0];
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] > Max) {
            Max = arr[i];
        }
    }
    return Max; //recorre el arreglo comenzando desde el segundo elemento si encuentra un valor mas grande que max, actualiza max
} // despues de recorrer el arreglo retorna el valor a max
function ParoImpar(num) {
    if (num === 0) {
        return 'El número es cero.';
    }
    else if (num % 2 === 0) {
        return 'El número es par.';
    }
    else {
        return 'El número es impar.';
    }
}
// Encontrar el número más grande
MaxNumber = encontrarNumero(numeros); // se almacena el resultado mas grande en la variable maxnumber
console.log("El n\u00FAmero m\u00E1s grande del arreglo es: ".concat(MaxNumber)); //se imprime el numero mas grande
var result = ParoImpar(MaxNumber); // determina que el numero almacenado enla variable maxnumber sea par o impar
// Imprimir el resultado en consola
console.log(result);
