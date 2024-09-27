// src/RegistroAutomotor.ts
import { Vehiculo } from './vehiculo';

export class RegistroAutomotor {
  private vehiculos: Vehiculo[] = [];

  agregarVehiculo(vehiculo: Vehiculo): void {
    this.vehiculos.push(vehiculo);
  }

  getVehiculos(): Vehiculo[] {
    return this.vehiculos;
  }

  getVehiculo(indice: number): Vehiculo | null {
    return this.vehiculos[indice] || null;
  }

  modificarVehiculo(indice: number, vehiculo: Vehiculo): void {
    if (this.vehiculos[indice]) {
      this.vehiculos[indice] = vehiculo;
    } else {
      console.log("Vehículo no encontrado");
    }
  }

  darDeBaja(indice: number): void {
    if (this.vehiculos[indice]) {
      this.vehiculos.splice(indice, 1);
      console.log("Vehículo dado de baja correctamente");
    } else {
      console.log("Vehículo no encontrado");
    }
  }

  mostrarRegistro(): void {
    if (this.vehiculos.length === 0) {
      console.log("No hay vehículos registrados.");
    } else {
      this.vehiculos.forEach((vehiculo, index) => {
        console.log(`${index + 1}. ${vehiculo.mostrarInfo()}`);
      });
    }
  }
}
