// src/vehiculos/Moto.ts
import { Vehiculo } from './vehiculo';

export class Moto extends Vehiculo {
  private _cilindrada: number;

  constructor(marca: string, modelo: string, año: number, cilindrada: number) {
    super(marca, modelo, año);
    this._cilindrada = cilindrada;
  }

  get cilindrada(): number {
    return this._cilindrada;
  }

  set cilindrada(cilindrada: number) {
    this._cilindrada = cilindrada;
  }

  // Sobrescribimos el método mostrarInfo para mostrar información específica de Moto
  mostrarInfo(): string {
    return `${super.mostrarInfo()} - Cilindrada: ${this._cilindrada}cc`;
  }
}
