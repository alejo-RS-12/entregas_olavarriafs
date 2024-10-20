type Raza = "Humano" | "Alto Humano" | "Elfo" | "Alto Elfo" | "Lagarto" | "Naga" | "Draconiano" | "Elder";


export class Personaje {
    protected _nombre: string;
    protected _raza: Raza;
    protected _arma: string;
    protected _unicaHabilidad: string;
    protected _nivel: number;
    protected _puntosVida: number;

    constructor(nombre: string, raza: Raza, arma: string, unicaHabilidad: string, nivel: number, puntosVida: number) {
        this._nombre = nombre;
        this._raza = raza;
        this._arma = arma;
        this._unicaHabilidad = unicaHabilidad;
        this._nivel = nivel;
        this._puntosVida = puntosVida;
    }

    // Getters y Setters
    get nombre(): string {
        return this._nombre;
    }

    set nombre(nombre: string) {
        this._nombre = nombre;
    }

    get raza(): Raza {
        return this._raza;
    }

    set raza(raza: Raza) {
        this._raza = raza;
    }

    get arma(): string {
        return this._arma;
    }

    set arma(arma: string) {
        this._arma = arma;
    }

    get unicaHabilidad(): string {
        return this._unicaHabilidad;
    }

    set unicaHabilidad(unicaHabilidad: string) {
        this._unicaHabilidad = unicaHabilidad;
    }

    get nivel(): number {
        return this._nivel;
    }

    set nivel(nivel: number) {
        this._nivel = nivel;
    }

    get puntosVida(): number {
        return this._puntosVida;
    }

    set puntosVida(puntosVida: number) {
        this._puntosVida = puntosVida;
    }

    // Métodos generales
    atacar() {
        console.log(`${this._nombre} ataca con ${this._arma}.`);
    }

    defender() {
        console.log(`${this._nombre} se defiende.`);
    }

    usarHabilidad() {
        console.log(`${this._nombre} usa su habilidad única: ${this._unicaHabilidad}.`);
    }

    subirNivel() {
        this._nivel++;
        this._puntosVida += 10;
        console.log(`${this._nombre} ha subido al nivel ${this._nivel} y ahora tiene ${this._puntosVida} puntos de vida.`);
    }

    mostrarInfo(): string {
        return `Nombre: ${this._nombre} | Raza: ${this._raza} | Nivel: ${this._nivel} | Vida: ${this._puntosVida} | Arma: ${this._arma} | Habilidad única: ${this._unicaHabilidad}`;
    }

    // Método de evolución
    evolucionar() {
        switch (this._raza) {
            case "Humano":
                this._raza = "Alto Humano";
                this._unicaHabilidad = "Fuerza Divina";
                this._nivel += 2;
                this._puntosVida += 50;
                break;

            case "Elfo":
                this._raza = "Alto Elfo";
                this._unicaHabilidad = "Magia Arcana";
                this._nivel += 2;
                this._puntosVida += 50;
                break;

            case "Lagarto":
                this._raza = "Naga";
                this._unicaHabilidad = "Veneno Mortal";
                this._nivel += 2;
                this._puntosVida += 50;
                break;

            case "Draconiano":
                this._raza = "Elder";
                this._unicaHabilidad = "Llama Eterna";
                this._nivel += 2;
                this._puntosVida += 50;
                break;

            default:
                console.log(`${this._nombre} no puede evolucionar.`);
                return;
        }

        console.log(`${this._nombre} ha evolucionado a ${this._raza} con una nueva habilidad: ${this._unicaHabilidad}. Ahora tiene ${this._nivel} nivel y ${this._puntosVida} puntos de vida.`);
    }
}
