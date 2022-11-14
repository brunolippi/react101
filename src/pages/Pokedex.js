import "./Pokedex.css";
import PokemonCard from "../components/PokemonCard";
import { useEffect, useState } from "react";
import { getAllPokemon } from "../api/api";
import PaginationBasic from "../components/Pagination";

function Pokedex() {
  const [pokemons, setPokemons] = useState([]);
  const [page, setPage] = useState(0);
  useEffect(() => {
    async function fetch() {
      console.log("page", page);
      const pokemons = await getAllPokemon(page);
      setPokemons(pokemons);
    }
    fetch();
  }, [page]);
  return (
    <div className="pokedex-cards">
      {pokemons.length ? (
        <>
          {pokemons.map((pokemon) => (
            <PokemonCard
              name={pokemon.formattedName}
              description={pokemon.description}
              image={pokemon.images}
              id={pokemon.id}
            />
          ))}
          <PaginationBasic page={page} setPage={setPage} />
        </>
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );
}

export default Pokedex;
