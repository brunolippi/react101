import { useState } from "react";
import { Badge, Col, Container, Image, Row } from "react-bootstrap";
import "./Pokemon.css";

function Pokemon() {
  const [hover, setHover] = useState(false);
  const [pokemon, setPokemon] = useState({
    images: {
      back: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/25.png",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png",
    },
  });

  return (
    <Container className="pokemon-container">
      {pokemon ? (
        <>
          <Row>
            <h1>
              <b>Pikachu</b> <span>#025</span>
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
                <h6>Likes to relax</h6>
              </Row>
            </Col>
            <Col>
              <Row>
                <h5>Height</h5>
                <h6>40cm</h6>
              </Row>
              <Row>
                <h5>Weight</h5>
                <h6>6kg</h6>
              </Row>
              <Row>
                <h5>Species</h5>
                <div className="pokemon-type">
                  <Badge bg="secondary">pikachu</Badge>
                </div>
              </Row>
            </Col>
            <Col>
              <Row>
                <h5>Experience</h5>
                <h6>112</h6>
              </Row>
              <Row>
                <h5>Abilities</h5>
                <h6>static, lightning-rod</h6>
              </Row>
              <Row>
                <h5>Type</h5>
                <div className="pokemon-type">
                  <Badge bg="danger">electric</Badge>
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
