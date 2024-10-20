import { iniciarJuego, crearPersonajes, mostrarAcciones } from './juego';

iniciarJuego();

const { mago, luchador, arquero, sanador } = crearPersonajes();

mostrarAcciones(mago);
mostrarAcciones(luchador);
mostrarAcciones(arquero);
mostrarAcciones(sanador);
