import { Badge, Col, Container, Image, Row } from "react-bootstrap";
import "./Pokemon.css";

function Pokemon({ id }) {
  return (
    <Container className="pokemon-container">
      <Row>
        <h1>
          <b>Pikachu</b> <span>#025</span>
        </h1>
      </Row>
      <Row>
        <Col>
          <Image
            roundedCircle
            height={140}
            src="https://assets.pokemon.com/static2/_ui/img/og-default-image.jpeg"
          />
        </Col>
        <Col>
          <Row>
            <h5>Height</h5>
            <h6>{6 * 10}cm</h6>
          </Row>
          <Row>
            <h5>Weight</h5>
            <h6>6kg</h6>
          </Row>
        </Col>
        <Col>
          <Row>
            <h5>Experience</h5>
            <h6>113</h6>
          </Row>
          <Row>
            <h5>Abilities</h5>
            <h6>6kg</h6>
          </Row>
        </Col>
      </Row>
      <Row>
        <Col>
          <h5>Loves to eat.</h5>
        </Col>
        <Col>
          <Row>
            <h5>Species</h5>
            <div className="pokemon-type">
              <Badge bg="secondary">Clefairy</Badge>
            </div>
          </Row>
        </Col>
        <Col>
          <Row>
            <h5>Type</h5>
            <div className="pokemon-type">
              <Badge bg="danger">Fire</Badge>
            </div>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default Pokemon;
