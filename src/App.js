import "./App.css";
import PokemonCard from "./components/PokemonCard";
import NavBar from "./components/NavBar";
import { useEffect, useState } from "react";
import { getAllPokemon } from "./api/api";
import PokemonListFilter from "./components/PokemonListFilter";
import Pokedex from "./pages/Pokedex";
import Pokemon from "./pages/Pokemon";
import { Route, Routes } from "react-router";
import Footer from "./components/Footer";
import About from "./components/About";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="App-header">
        <div className="container">
          <Routes>
            <Route path="/" exact element={<Pokedex />} />
            <Route path="/about" exact element={<About />} />
            <Route path="/pokemon/:id" exact element={<Pokemon />} />
          </Routes>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
