/*encuenta el promedio de una lista de numeros´´
encuentra el numero mas grande de una lista´´
encuentra el numero mas pequeño de una lista´´
encuentra el numero de elementos pares en una lista´´
encuentra el numero de veces que aparece un elemento en una lista
calucal el producto de todos los elemntos en una lista
encuentra el numero mas grande entro dos numeros*/
import * as rls from 'readline-sync';
function definirArreglo(dimension:number): number[] {
    let arreglo: number[] = new Array(dimension);
    for(let i = 0; i < dimension; i++){
        arreglo[i] = rls.questionInt("indique el numero que va en la posicion i ");
    }
    return arreglo;
}

function calcularPromedio(arreglo :number[]) : number{
    let suma: number = 0;
    for(let  i = 0; i< arreglo.length; i++){
        suma += arreglo[i];
    }
    return suma/arreglo.length;
}
function numeroGrande(arreglo:number[]) : number{
    let mayor: number = arreglo[0];// se asume que el primer numero es el mayor
    for(let i = 1; i < arreglo.length; i++){
        if (arreglo[i]> mayor){
            mayor = arreglo[i];
        }
    }
    return mayor;
}
function numeroChico(arreglo:number[]) : number{
    let menor: number = arreglo[0];// se asume que el primer numero es el menor
    for(let i = 1; i < arreglo.length; i++){
        if (arreglo[i]< menor){
            menor = arreglo[i];
        }
    }
    return menor;
}
function numerosPares(arreglo:number[]):number{
    let cantidad: number = arreglo[0];
    for(let i = 0; i<arreglo.length; i ++){
        if (arreglo[i] % 2 == 0){
            cantidad++;
        }
    }
    return cantidad;
}
function numerosIguales(arreglo:number[]): number{// esta funcoin no supe como simplificarla mas, tuve que utilizar formas de codigo que se utiliza en java
    let iguales:{ [key: number]: number } = {};
    for(let i = 0; i<arreglo.length; i++){
        if(iguales[arreglo[i]]){
            iguales[arreglo[i]]++;
        }
        else{
        iguales[arreglo[i]] = 1;
         }
    }
    let cantidadIguales: number = 0;
    for (let key in iguales) {
        if (iguales[key] > 1) {
            cantidadIguales++;
        }
    }
    return cantidadIguales;
}


let dimensionArreglo: number = rls.questionInt('Ingrese la dimension del arreglo: ');

let arreglo = definirArreglo(dimensionArreglo);
let promedio = calcularPromedio(arreglo);
let mayor = numeroGrande(arreglo); 
let menor = numeroChico(arreglo);
let cantidad = numerosPares(arreglo);
let cantidadIguales = numerosIguales(arreglo);

// Mostrando los elementos del arreglo
for (let i = 0; i < arreglo.length; i++) {
    console.log(`El número en la posición ${i} es: ${arreglo[i]}`);
}

// Mostrando el promedio del arreglo
console.log(`El promedio del arreglo es: ${promedio}`);

console.log(`el numero mayor del arreglo es: ${mayor}`);
console.log(`el numero menor del arreglo es: ${menor}`);
console.log(`la cantidad de numeros pares es de: ${cantidad}`);
console.log(`la cantidad de numeros iguales es: ${cantidadIguales}`);

/*import * as readline from "readline-sync";

/* 
* Ordenamiento Burbujeo   


let arr : number[] = [3,2,1,5,9,10,7];
arr = burbujeoAscendente(arr);

function burbujeoAscendente(arreglo : number[]) : number[]{
    let numeroActual = 0;
    let numeroSiguiente = 0;
    console.log("----Como ordena el arreglo burbujeo----");
    for(let i = 0; i < arreglo.length; i++){
        console.log("---------------------------------------")
        console.log(`i en este momento es  = ${i}`)
        console.log("---------------------------------------")
        for(let j = 0; j < arreglo.length - 1; j++){            
            numeroActual = arreglo[j];
            numeroSiguiente = arreglo[j + 1];
            console.log(`j en este momento es = ${j}`)
            /* 
            *Si el numero que esta en la posicion actual donde estoy parado 
            * es mayor al numero que esta en la posicion siguiente 
            if(numeroActual > numeroSiguiente){
                //* Muevo el numero siguiente a la posicion donde esta el numero actual
                arreglo[j] = numeroSiguiente;
                //* Despus muevo el numero actual a la posicion donde estaba el numero siguiente
                arreglo[j+1] = numeroActual;
            }
            console.log("Arreglo luego de pasar por i = [" + i + "] y j = [" + j + "]: " + arreglo);
        }
    }
    console.log("Arreglo ordenado: " + arreglo);
    return arreglo;
}
function showArray(array:number[]){ console.log(`[${array.join('-')}]`);}*/ 