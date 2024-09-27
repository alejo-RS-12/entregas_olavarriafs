// src/vehiculos/Vehiculo.ts
export class Vehiculo {
    private _marca: string;
    private _modelo: string;
    private _año: number;
  
    constructor(marca: string, modelo: string, año: number) {
      this._marca = marca;
      this._modelo = modelo;
      this._año = año;
    }
  
    get marca(): string {
      return this._marca;
    }
  
    set marca(marca: string) {
      this._marca = marca;
    }
  
    get modelo(): string {
      return this._modelo;
    }
  
    set modelo(modelo: string) {
      this._modelo = modelo;
    }
  
    get año(): number {
      return this._año;
    }
  
    set año(año: number) {
      this._año = año;
    }
  
    mostrarInfo(): string {
      return `${this._marca} ${this._modelo} (${this._año})`;
    }
  }
  