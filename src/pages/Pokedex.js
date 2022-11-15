import "./Pokedex.css";
import PokemonCard from "../components/PokemonCard";

function Pokedex() {
  return (
    <div className="pokedex-cards">
      <PokemonCard
        name={"Pikachu"}
        description={"Likes to relax"}
        image={{
          back: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/25.png",
          front:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png",
        }}
        id={25}
      />
    </div>
  );
}

export default Pokedex;
