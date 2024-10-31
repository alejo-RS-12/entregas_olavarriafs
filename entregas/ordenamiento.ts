/*implemente un algoritomo de ordenamiento con el metodo bubble sort, para que ordene un arreglo de longitud n en orden ascendente*/
function bubbleSort(arr: number[]): number[] {

    let nuevoarr = arr.length;// almacena la longitud del arreglo en nuevoarr 

    for (let i = 0; i < nuevoarr; i++) {//itera a travez de todos los elementos del arreglo

        for (let j = 0; j < nuevoarr - i - 1; j++) {//la variable j recorre elementos del arreglo hasta el ultimo elemento que no este en su lugar correcto
        
            if (arr[j] > arr[j + 1]) {// se compara el elemento acutual arr[j] con el siguiente, si el elemento es mayor que el siguiente, los cambia
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    return arr;// una ves todos los elementos en su lugar correcto los rentorna con arr
}


let arr: number[] = [64, 34, 25, 12, 22, 11, 90];
console.log("Arreglo original:", arr);
let arreglosort = bubbleSort(arr);
console.log("Arreglo ordenado:", arreglosort);