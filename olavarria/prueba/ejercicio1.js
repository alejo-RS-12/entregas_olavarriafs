/*Cree un string de al menos 15 caracteres (sin que el usuario lo ingrese).
Cuente la cantidad de A, E y O que hay en ese string y almacene esas
cantidades en otro arreglo de 3 elementos en el orden que usted desee*/
function generarcadena(longitud) {
    var caracteres = 'ABCDEFGHIJKLMNOPQRSTUWXYZabcdefghijklmnopqrstuwxyz0123456789';
    var resultado = '';
    for (var i = 0; i < longitud; i++) {
        var indice = Math.floor(Math.random() * caracteres.length);
        resultado += caracteres[indice];
    }
    return resultado;
}
function contarletras(Cadena) {
    var contadorA = 0;
    var contadorE = 0;
    var contadorO = 0;
    for (var i = 0; i < Cadena.length; i++) {
        var caracter = Cadena[i];
        if (caracter === 'A' || caracter === 'a') {
            contadorA++;
        }
        else if (caracter === 'E' || caracter === 'e') {
            contadorE++;
        }
        else if (caracter === 'O' || caracter === 'o') {
            contadorO++;
        }
    }
    return [contadorA, contadorE, contadorO];
}
var longitudDeseada = 15;
var cadenaleatoria = generarcadena(longitudDeseada);
console.log("Cadena aleatoria generada: ".concat(cadenaleatoria));
var conteo = contarletras(cadenaleatoria);
console.log("Cantidad de 'A': ".concat(conteo[0]));
console.log("Cantidad de 'E': ".concat(conteo[1]));
console.log("Cantidad de 'O': ".concat(conteo[2]));
