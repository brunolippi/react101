import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useEffect } from "react";
import { getAllPokemons } from "../api/api"
import "./Cards.css";

function BasicExample() {

    useEffect(() => {
        async function fetch(){
            const pokemons = await getAllPokemons();
            console.table(pokemons);
        }
        fetch();
    }, [])
  return (
    <Card style={{ width: "18rem" }} className="card-root">
      <Card.Img
        className="card-img"
        variant="top"
        src="https://assets.pokemon.com/static2/_ui/img/og-default-image.jpeg"
      />
      <Card.Body className="card-body">
        <Card.Title className="card-title">
          Pikachu
        </Card.Title>
        <Card.Text className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default BasicExample;
