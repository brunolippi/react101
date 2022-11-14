import { useEffect, useState } from "react";
import { Badge, Col, Container, Image, Row } from "react-bootstrap";
import { useParams } from "react-router";
import {
  getFormattedName,
  getPokemon,
  getPokemonDescription,
  getPokemonImgs,
} from "../api/api";
import { getFormattedNumber } from "../utils";
import "./Pokemon.css";

function Pokemon() {
  const [hover, setHover] = useState(false);
  const [pokemon, setPokemon] = useState("");
  const { id } = useParams();

  useEffect(() => {
    async function fetch() {
      const pokemons = await getPokemon(id);
      const images = await getPokemonImgs(id);
      const description = await getPokemonDescription(id);
      console.log(pokemons);
      setPokemon({ ...pokemons, images, description });
    }
    fetch();
  }, []);
  return (
    <Container className="pokemon-container">
      {pokemon ? (
        <>
          <Row>
            <h1>
              <b>{getFormattedName(pokemon.name)}</b>{" "}
              <span>{getFormattedNumber(id)}</span>
            </h1>
          </Row>
          <Row>
            <Col
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
            >
              <Image
                roundedCircle
                height={150}
                src={pokemon.images.front}
                style={hover ? { visibility: "hidden", display: "none" } : {}}
              />
              <Image
                roundedCircle
                height={150}
                src={pokemon.images.back}
                style={!hover ? { visibility: "hidden", display: "none" } : {}}
              />
              <Row>
                <h6>{pokemon.description}</h6>
              </Row>
            </Col>
            <Col>
              <Row>
                <h5>Height</h5>
                <h6>{pokemon.height * 10}cm</h6>
              </Row>
              <Row>
                <h5>Weight</h5>
                <h6>{pokemon.weight / 10}kg</h6>
              </Row>
              <Row>
                <h5>Species</h5>
                <div className="pokemon-type">
                  <Badge bg="secondary">{pokemon.species.name}</Badge>
                </div>
              </Row>
            </Col>
            <Col>
              <Row>
                <h5>Experience</h5>
                <h6>{pokemon.base_experience}</h6>
              </Row>
              <Row>
                <h5>Abilities</h5>
                <h6>
                  {pokemon.abilities.map((ab) => ab.ability.name).join(", ")}
                </h6>
              </Row>
              <Row>
                <h5>Type</h5>
                <div className="pokemon-type">
                  <Badge bg="danger">{pokemon.types[0].type.name}</Badge>
                </div>
              </Row>
            </Col>
          </Row>
        </>
      ) : (
        ""
      )}
    </Container>
  );
}

export default Pokemon;
