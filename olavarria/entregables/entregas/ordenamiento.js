/*implemente un algoritomo de ordenamiento con el metodo bubble sort, para que ordene un arreglo de longitud n en orden ascendente*/
function bubbleSort(arr) {
    var _a;
    var nuevoarr = arr.length; // almacena la longitud del arreglo en nuevoarr 
    for (var i = 0; i < nuevoarr; i++) { //itera a travez de todos los elementos del arreglo
        for (var j = 0; j < nuevoarr - i - 1; j++) { //la variable j recorre elementos del arreglo hasta el ultimo elemento que no este en su lugar correcto
            if (arr[j] > arr[j + 1]) { // se compara el elemento acutual arr[j] con el siguiente, si el elemento es mayor que el siguiente, los cambia
                _a = [arr[j + 1], arr[j]], arr[j] = _a[0], arr[j + 1] = _a[1];
            }
        }
    }
    return arr; // una ves todos los elementos en su lugar correcto los rentorna con arr
}
var arr = [64, 34, 25, 12, 22, 11, 90];
console.log("Arreglo original:", arr);
var arreglosort = bubbleSort(arr);
console.log("Arreglo ordenado:", arreglosort);
