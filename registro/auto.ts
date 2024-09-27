// src/vehiculos/Auto.ts
import { Vehiculo } from './vehiculo';

export class Auto extends Vehiculo {
  private _cantidadPuertas: number;

  constructor(marca: string, modelo: string, año: number, cantidadPuertas: number) {
    super(marca, modelo, año);
    this._cantidadPuertas = cantidadPuertas;
  }

  get cantidadPuertas(): number {
    return this._cantidadPuertas;
  }

  set cantidadPuertas(cantidadPuertas: number) {
    this._cantidadPuertas = cantidadPuertas;
  }

  // Sobrescribimos el método mostrarInfo para mostrar información específica de Auto
  mostrarInfo(): string {
    return `${super.mostrarInfo()} - Puertas: ${this._cantidadPuertas}`;
  }
}
