import logo from "./logo.svg";
import "./App.css";
import Button from "react-bootstrap/Button";
import BasicExample from "./components/Card";
import ColorSchemesExample from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <ColorSchemesExample />
      <header className="App-header">
        <p></p>

        <BasicExample />
      </header>
    </div>
  );
}

export default App;
