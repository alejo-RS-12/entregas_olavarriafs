import { Habitacion } from "./Habitacion";

export class HabitacionEstandar extends Habitacion{
  
    calcularCostoTotal(dias: number): number {
        let costoTotal = this.precioBase * dias;//se calcula el costo base de la habitacion multiplicando el precio base por la cantidad de dias reservados

        for (let i = 0; i < this.serviciosAdicionales.length; i++) {// recorre el array de servicios la condicion i indica que el bucle se ejecuta mientras sea menor que el numero total de sercicios
            const servicio = this.serviciosAdicionales[i];//se accede al servicio actual mediante i y  se lo asigna a la variable servicio

            if (!servicio.esGratuito) {// si no es gratuito es falso y se ejecutara el bloque de codigo dentro del if sino omite el bloque y el costo no se suma 
                costoTotal += servicio.costo * dias;//si el servicio no es gratuito se calcula el costototal por la cantidad de dias 
            }
        }

        return costoTotal;// retorna costototal porque la variable contiene el precio base mas el costo de todos los servicios 
    }
    

}