import { Habitacion } from "./Habitacion";

export class HabitacionSuite extends Habitacion{
   
    calcularCostoTotal(dias: number): number {
        let costoTotal = this.precioBase * dias;

        for (let i = 0; i < this.serviciosAdicionales.length; i++) {
            const servicio = this.serviciosAdicionales[i];
            // En la suite, el Internet es gratuito
            if (!(servicio.nombre === "Internet" && servicio.esGratuito)) {
                costoTotal += servicio.costo * dias;
            }
        }

        return costoTotal;
    }
}