import { Arquero } from "./arquero";
import { Mago } from "./mago";
import { Sanador } from "./sanador";
import { Luchador } from "./luchador";

export function iniciarJuego() {
    console.log("Bienvenido al juego RPG");
}

export function crearPersonajes() {
    const mago = new Mago("Gandalf", "Humano", "Báculo", "Bola de Fuego", 20, 150);
    const luchador = new Luchador("Siegward", "Lagarto", "Espada", "Patada Giratoria", 10, 200);
    const arquero = new Arquero("Eragon", "Elfo", "Arco", "Flecha Envenenada", 50, 80);
    const sanador = new Sanador("Irina", "Draconiano", "Bastón Santo", "Recuperación Media", 11, 120);

    return { mago, luchador, arquero, sanador };
}

export function mostrarAcciones(personaje: any) {
    console.log(personaje.mostrarInfo());

    personaje.atacar();
    personaje.habilidadesUnicas();
    personaje.subirNivel();
    // Intentar evolucionar el personaje de forma aleatoria
    if (Math.random() < 0.2) {  // 20% de chance de evolucionar
        personaje.evolucionar();
    } else {
        console.log(`${personaje.nombre} no ha evolucionado.`);
    }
}
