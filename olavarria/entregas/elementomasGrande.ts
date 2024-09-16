/*Dado el siguiente arreglo
[4,7,9,3,1,45,67,23,29,78,11,16]
- Crear un programa que encuentre cuál es el número
más grande del arreglo e imprimirlo por consola
- Almacenar el número más grande en una variable
global y pasarlo a una función para determinar si el
número es par o impar*/

let numeros: number[] = [4,7,9,3,1,45,67,23,29,78,11,16];// se define arreglo

let MaxNumber: number = numeros[0];// almacena la variable mas grande encontada en el arreglo
function encontrarNumero (arr: number[]): number {//la funcion toma de arreglo de numeros como parametro
    let Max = arr[0];
    for (let i = 1; i<arr.length; i++){
        if (arr[i] > Max){
            Max = arr[i];

        }
    }
    return Max;//recorre el arreglo comenzando desde el segundo elemento si encuentra un valor mas grande que max, actualiza max
}// despues de recorrer el arreglo retorna el valor a max
function ParoImpar(num: number): string {//la funcion se encarga de encontrar el numero elegido y verifica si es par o impar
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
MaxNumber = encontrarNumero(numeros);// se almacena el resultado mas grande en la variable maxnumber


console.log(`El número más grande del arreglo es: ${MaxNumber}`);//se imprime el numero mas grande

let result: string = ParoImpar(MaxNumber); // determina que el numero almacenado enla variable maxnumber sea par o impar

// Imprimir el resultado en consola
console.log(result);


  
