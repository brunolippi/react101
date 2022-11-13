import "./Pokedex.css";
import PokemonCard from "../components/PokemonCard";
import { useEffect, useState } from "react";
import { getAllPokemon } from "../api/api";
import PokemonListFilter from "../components/PokemonListFilter";

const sleep = async (milliseconds) => {
  await new Promise((resolve) => {
    return setTimeout(resolve, milliseconds);
  });
};

function Pokedex() {
  const [pokemons, setPokemons] = useState([]);
  useEffect(() => {
    async function fetch() {
      const pokemons = await getAllPokemon();
      console.log(pokemons);
      sleep(10000);
      setPokemons(pokemons);
    }
    fetch();
  }, []);
  return (
    <div className="cards">
      <PokemonListFilter />
      {pokemons.length
        ? pokemons.map((pokemon) => (
            <PokemonCard
              name={pokemon.formattedName}
              description={pokemon.description}
              image={pokemon.images}
            />
          ))
        : "Loading..."}
    </div>
  );
}

export default Pokedex;
