import { Servicio } from "./Servicio";
import { HabitacionSuite } from "./HabitacionSuite";
import { HabitacionEstandar } from './HabitacionEstandar';

// Crear servicios adicionales
const desayuno = new Servicio("Desayuno", 10);
const spa = new Servicio("Spa", 20);
const internet = new Servicio("Internet", 0, true); // Internet gratuito

// Crear habitaciones
const habitacion1 = new HabitacionEstandar(101, "disponible", 100);// cuidado al poner la inicial con mayuscula
const habitacion2 = new HabitacionSuite(201, "reservada", 200);

// Reservar habitaciones
habitacion1.reservar();
habitacion2.reservar();

// Agregar servicios adicionales
habitacion1.agregarServicio(desayuno);
habitacion2.agregarServicio(spa);
habitacion2.agregarServicio(internet);
habitacion2.agregarServicio(desayuno);

// Calcular costos para una estancia de x días
console.log(`Costo total habitación estándar para 4 días: ${habitacion1.calcularCostoTotal(4)}`);
console.log(`Costo total suite para 3 días: ${habitacion2.calcularCostoTotal(3)}`);



