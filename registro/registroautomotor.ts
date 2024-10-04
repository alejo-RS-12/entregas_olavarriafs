// src/RegistroAutomotor.ts
import { Vehiculo } from './vehiculo';
import { Moto } from './moto';  // Asegúrate de importar estas clases
import { Camion } from './camion'; 

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

  darDeBaja(index: number): void {
    const vehiculo = this.vehiculos[index];
    
    if (!vehiculo) {
      console.log('Índice inválido. No existe un vehículo en la posición proporcionada.');
      return;
    }

    if (vehiculo instanceof Moto) {//verifica si un objeto es una instancia de una clase específica o de su cadena de prototipos
        this.vehiculos.splice(index, 1);// splice permite modificar, eliminar, reemplazar o agregar elementros del array
        console.log('Una moto ha sido dada de baja.');
    } else if (vehiculo instanceof Camion) {
        this.vehiculos.splice(index, 1);
        console.log('Un camión ha sido dado de baja.');
    } else {
        console.log('Solo motos y camiones pueden ser dados de baja.');
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
