import "./App.css";
import PokemonCard from "./components/PokemonCard";
import NavBar from "./components/NavBar";
import { useEffect, useState } from "react";
import { getAllPokemon } from "./api/api";
import PokemonListFilter from "./components/PokemonListFilter";
import Pokedex from "./pages/Pokedex";
import Pokemon from "./pages/Pokemon";

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="App-header">
        <div className="container">
          {/* <Pokemon /> */}
          <Pokedex />
        </div>
      </div>
    </div>
  );
}

export default App;
