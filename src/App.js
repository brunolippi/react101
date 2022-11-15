import "./App.css";
import NavBar from "./components/NavBar";
import Pokedex from "./pages/Pokedex";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="App-header">
        <div className="container">{/*  <Pokedex /> */}</div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
