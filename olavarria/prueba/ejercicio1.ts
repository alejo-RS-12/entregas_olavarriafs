/*Cree un string de al menos 15 caracteres (sin que el usuario lo ingrese). 
Cuente la cantidad de A, E y O que hay en ese string y almacene esas
cantidades en otro arreglo de 3 elementos en el orden que usted desee*/ 
function generarcadena(longitud: number):string{
    let caracteres: string = 'ABCDEFGHIJKLMNOPQRSTUWXYZabcdefghijklmnopqrstuwxyz0123456789';// se define conjuntos de caracteres para incluir en la caden
    let resultado = '';
    for(let i = 0; i<longitud; i++ ) { // se repite el proceso de agregar un carácter aleatorio 'longitud' veces.
        let indice:number = Math.floor(Math.random() * caracteres.length);// se genera un índice aleatorio para seleccionar un carácter del conjunto.
        resultado += caracteres[indice];// Añado el carácter seleccionado a la cadena resultado.
    }
    return resultado;

}

function contarletras(Cadena: string):number[]{
    let contadorA:number = 0;
    let contadorE:number = 0;
    let contadorO:number = 0; 
    for(let i = 0; i < Cadena.length; i++){ // Recorre cada carácter de la cadena para contar 'A', 'E', 'O'.

        let caracter = Cadena[i];

        if(caracter === 'A' || caracter === 'a'){
            contadorA++;
        }
        else if(caracter === 'E' || caracter === 'e'){
            contadorE++;
        }
        else if(caracter === 'O' || caracter === 'o'){
            contadorO++;
        }
    }
    return [contadorA, contadorE, contadorO];    // Devuelve un arreglo con los conteos en el orden [contadorA, contadorE, contadorO].
}
let longitudDeseada = 15;
let cadenaleatoria = generarcadena(longitudDeseada);

console.log(`Cadena aleatoria generada: ${cadenaleatoria}`);

const conteo = contarletras(cadenaleatoria);
console.log(`Cantidad de 'A': ${conteo[0]}`);
console.log(`Cantidad de 'E': ${conteo[1]}`);
console.log(`Cantidad de 'O': ${conteo[2]}`);