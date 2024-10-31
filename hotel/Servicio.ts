export class Servicio{
    nombre: string;
    costo: number;
    esGratuito: boolean;

    constructor(nombre: string, costo: number, esGratuito: boolean = false) {
        this.nombre = nombre;
        this.costo = costo;
        this.esGratuito = esGratuito;
    }

}