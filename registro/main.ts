// src/index.ts
import { Auto } from './auto';
import { Moto } from './moto';
import { Camion } from './camion';
import { RegistroAutomotor } from './registroautomotor';

// Crear una instancia del RegistroAutomotor
const registro = new RegistroAutomotor();

// Crear instancias de diferentes vehículos
const auto1 = new Auto("honda", "civic", 2023, 2);
const moto1 = new Moto("guerrero", "chopper", 1995, 250);
const camion1 = new Camion("Mercedes-Benz", "Atron", 2012, 18000);

// Agregar vehículos al registro
registro.agregarVehiculo(auto1);
registro.agregarVehiculo(moto1);
registro.agregarVehiculo(camion1);

// Mostrar todos los vehículos en el registro
registro.mostrarRegistro();


// Modificar el camión
const nuevoCamion = new Camion("Volvo", "FH", 2022, 20000);
registro.modificarVehiculo(1, nuevoCamion);

//modifico una moto
const nuevaMoto = new Moto("gilera", "chopper", 1997, 150);
registro.modificarVehiculo(1, nuevaMoto);

// Mostrar el registro actualizado
registro.mostrarRegistro();

// Dar de baja la moto
registro.darDeBaja(1);
registro.darDeBaja(1); 

// Mostrar el registro después de la baja
registro.mostrarRegistro();
