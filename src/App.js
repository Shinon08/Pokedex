import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
import PokemonThumbnail from './components/molecules/PokemonThumbnail';

function App() {

  const [allPokemons, setAllPokemons] = useState([]);

  const [loadPoke, setLoadPoke] = useState(`https://pokeapi.co/api/v2/pokemon?limit=900`);

  const getAllPokemons = async() => {
    const res = await fetch(loadPoke);
    const data = await res.json();

    setLoadPoke(data.next);

    function createPokemonObject(result){
      result.forEach(async(pokemon) =>{
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`);
        const data = await res.json();

        setAllPokemons((currentList) => [...currentList, data])
      })
    }

    createPokemonObject(data.results);
    await console.log(allPokemons);
  } 
  return(
    <div className='app-container'>
      <h1>Poke Base de Datos</h1>

      <div className='pokemon-container'>
        <div className="all-container">
          {allPokemons.map((pokemon, index) => (
            <PokemonThumbnail
              id = {pokemon.id}
              name = {pokemon.name}
              image = {pokemon.sprites.other.dream_world.front_default}
              type = {pokemon.types[0].type.name}
              height = {pokemon.height}
              weight = {pokemon.weight}
              bs1 = {pokemon.stats[0].base_stat}
              bs2 = {pokemon.stats[1].base_stat}
              bs3 = {pokemon.stats[2].base_stat}
              bs4 = {pokemon.stats[3].base_stat}
              bs5 = {pokemon.stats[4].base_stat}
              bs6 = {pokemon.stats[5].base_stat}
              />
          ))}
        </div>

        <button className='load-more'
        onClick={() => getAllPokemons()}>
            Cargar más Pokemones
        </button>

      </div>
    </div>
  );
}

export default App;