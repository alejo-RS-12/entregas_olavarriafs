type Raza = "Humano" | "Alto Humano" | "Elfo" | "Alto Elfo" | "Lagarto" | "Naga" | "Draconiano" | "Elder";

import { Personaje } from './personajes';

export class Luchador extends Personaje {
    constructor(nombre: string, raza: Raza, arma: string, unicaHabilidad: string, nivel: number, puntosVida: number) {
        super(nombre, raza, arma, unicaHabilidad, nivel, puntosVida);
    }

    habilidadesUnicas() {
        console.log(`${this._nombre} realiza un golpe brutal.`);
    }
}
