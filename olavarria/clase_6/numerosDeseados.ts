/*Construya un algoritmo que tenga un arreglo de

dimensión 5 y llénelo con los números que el usuario

desee.

• Muestre los números del arreglo al usuario*/
import * as rls from 'readline-sync';
let arreglonum: number[] = new Array(5);
let nro : number, indice : number;
for (indice = 0; indice<5; indice++){
    nro = rls.questionInt("ingrese 5 numeros: ");
    arreglonum[indice] = nro;
}
for(indice = 0; indice<5; indice++){
    console.log("el numero en la posicion " +indice + "es" + arreglonum[indice] );
}
