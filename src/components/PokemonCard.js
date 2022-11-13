import { useState } from "react";
import Card from "react-bootstrap/Card";
import "./Cards.css";

function PokemonCard({ id, image, name, description }) {
  const { front, back } = image;
  const [img, setImg] = useState(front);
  return (
    <Card
      style={{ width: "18rem" }}
      className="card-root"
      onMouseEnter={() => setImg(back)}
      onMouseLeave={() => setImg(front)}
    >
      <Card.Img
        className="card-img"
        variant="top"
        src={front}
        style={img !== front ? { visibility: "hidden", display: "none" } : {}}
      />
      <Card.Img
        className="card-img"
        variant="top"
        src={back}
        style={img !== back ? { visibility: "hidden", display: "none" } : {}}
      />
      <Card.Body className="card-body">
        <Card.Title className="card-title">{name}</Card.Title>
        <Card.Text className="card-text">{description}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default PokemonCard;
