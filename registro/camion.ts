// src/vehiculos/Camion.ts
import { Vehiculo } from './vehiculo';

export class Camion extends Vehiculo {
  private _capacidadCarga: number;

  constructor(marca: string, modelo: string, año: number, capacidadCarga: number) {
    super(marca, modelo, año);
    this._capacidadCarga = capacidadCarga;
  }

  get capacidadCarga(): number {
    return this._capacidadCarga;
  }

  set capacidadCarga(capacidadCarga: number) {
    this._capacidadCarga = capacidadCarga;
  }

  // Sobrescribimos el método mostrarInfo para mostrar información específica de Camión
  mostrarInfo(): string {
    return `${super.mostrarInfo()} - Capacidad de carga: ${this._capacidadCarga}kg`;
  }
}
