import { useState } from "react";
import { Image } from "react-bootstrap";

function Pokemon({ id }) {
  const [pokemon, setPokemon] = useState("");
  return (
    <div>
      <h2>{id}</h2>
      <Image
        className="card-img"
        roundedCircle
        height={140}
        src="https://assets.pokemon.com/static2/_ui/img/og-default-image.jpeg"
        si
      />
    </div>
  );
}

export default Pokemon;
