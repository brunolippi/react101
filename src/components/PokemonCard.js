import { useState } from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import "./Cards.css";

function PokemonCard({ id, image, name, description }) {
  const { front, back } = image;
  const [hover, setHover] = useState(false);
  return (
    <Card
      style={{ width: "18rem" }}
      className="card-root"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)} // on Hover
    >
      <Link to={`pokemon/${id}`}>
        <Card.Img
          className="card-img"
          variant="top"
          src={front}
          style={hover ? { visibility: "hidden", display: "none" } : {}}
        />
        <Card.Img
          className="card-img"
          variant="top"
          src={back}
          style={!hover ? { visibility: "hidden", display: "none" } : {}}
        />
        <Card.Body className="card-body">
          <Card.Title className="card-title">{name}</Card.Title>
          <Card.Text className="card-text">{description}</Card.Text>
        </Card.Body>
      </Link>
    </Card>
  );
}

export default PokemonCard;
