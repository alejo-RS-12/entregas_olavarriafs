"use strict"
async function obtenerPokemones(url) {// esta funcion se encarga de hacer la peticion a la api 
    try {
        const response = await fetch(url);// peticion http
        const data = await response.json();// se convierte en json
        const listaPokemones = data.results;//estrae la lista de pokemones

        // Obtenemos los detalles de cada Pokémon de la lista
        for (let pokemon of listaPokemones) {
            const detallesPokemon = await fetch(pokemon.url);
            const datosPokemon = await detallesPokemon.json();
            mostrarPokemon(datosPokemon); // Llamamos a la función mostrarPokemon para renderizar la tarjeta

        }
    } catch (error) {
        console.error('Error al obtener los Pokémon:', error);// si ocurre un error se muestra en consola
    }
}

function mostrarPokemon(pokemon) {
    const cardsContainer = document.getElementById('cardsContainer');// Seleccionamos el contenedor donde irán las tarjetas

    const card = document.createElement('div');// se crea contenedor para las targetas
    card.classList.add('card');

    const nombre = document.createElement('h2');// nombre del pokemon
    nombre.textContent = pokemon.name;

    const imagen = document.createElement('img');// imagen del pokemon
    imagen.src = pokemon.sprites.front_default;
    imagen.alt = pokemon.name;

    const habilidades = document.createElement('p');// habilidades del pokemon
    // se usa el map y no un foreach para hacer mas sencillo el codido
    habilidades.textContent = `Habilidades: ${pokemon.abilities.map(a => a.ability.name).join(', ')}`;// re corre eñ array de habilidades y obtiene el nombre de cada habilidad
    // elementos de targeta
    card.appendChild(nombre);
    card.appendChild(imagen);
    card.appendChild(habilidades);
    // se añade la targeta al contenerdor principal
    cardsContainer.appendChild(card);
}

const url = 'https://pokeapi.co/api/v2/pokemon?limit=20';
obtenerPokemones(url);// se llama a la funcion para iniciar