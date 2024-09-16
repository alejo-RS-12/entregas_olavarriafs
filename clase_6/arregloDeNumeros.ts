/*•Construya un algoritmo que tenga un arreglo
de números y se los muestre al usuario
•El arreglo debe ser llamado num
•El arreglo num debe contener los siguientes
datos: 20, 14, 8, 0, 5, 19 y 24.
• Mostrar los valores resultantes del arreglo*/
let num : number[] = new Array(7);

let indice: number = 0;
num[0] = 20;
num[1] = 14;
num[2] = 8;
num[3] = 0;
num[4] = 5;
num[5] = 19;
num[6] = 24;
while(indice < 7){
    console.log("el numero en la posicion"+ indice + "es" + num[indice]);
    indice++;
}