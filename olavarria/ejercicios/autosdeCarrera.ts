/*•En una prueba, un piloto tiene que completar 4
vueltas
•Se necesita un programa que permita ingresar
por teclado el tiempo de cada vuelta
•El programa debe retornar el tiempo total y el
promedio de vuelta*/
import * as readlineSync from "readline-sync";

// Definimos un array para almacenar los tiempos de vuelta
const tiempos: number[] = [];
let totalTiempo = 0;// calcual el tiempo total sumando los tiempos de vuelta

//se usa for para obtener los tiempos de vuela del usuario , se ejecuta 4 veces
for (let i = 1; i <= 4; i++) {
    const tiempov = readlineSync.question(`Ingrese el tiempo de la vuelta: `);
    const tiempo = Number(tiempov);

    if (!isNaN(tiempo)) {// si el valor ingresado no es un numero retrocede para volver a ingresar el valor numero, sino procede.
        tiempos.push(tiempo);
        totalTiempo += tiempo;
    } else {
        console.log("El tiempo ingresado no es válido. Intente de nuevo.");
        i--; // Retrocedemos para ingresar el tiempo nuevamente
    }
}

// Calculamos el tiempo total y el promedio de vuelta
const promedio = totalTiempo / tiempos.length;

// Mostramos los resultados por consola
console.log(`Tiempo total de las 4 vueltas: ${totalTiempo} segundos`);
console.log(`Promedio de vuelta: ${promedio} segundos`);
