import "./App.css";
import PokemonCard from "./components/PokemonCard";
import NavBar from "./components/NavBar";
import { useEffect, useState } from "react";
import { getAllPokemon } from "./api/api";
import PokemonListFilter from "./components/PokemonListFilter";
import Pokedex from "./pages/Pokedex";
import Pokemon from "./pages/Pokemon";
import { Route, Routes } from "react-router";

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="App-header">
        <div className="container">
          <Routes>
            <Route path="/" element={<Pokedex />} />
            <Route path="/pokemon/:id/:name" element={<Pokemon />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
