import axios from 'axios'

const pokemonLimit = Number(6);

const getPokemonList = async (offset = 0, limit) => {
  const response = await axios.get(
    `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
  );
  return {
    data: response.data.results,
    total: response.data.count,
    nextOffset: Number(offset + limit),
    limit,
  };
};

export const getPokemon = async (id) => {
  return (await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)).data;
};

export const getPokemonDescription = async (id) => {
  const descriptions = (
    await axios.get(`https://pokeapi.co/api/v2/characteristic/${id}`)
  ).data.descriptions;
  return (
    descriptions.find((desc) => desc.language.name === "en").description ??
    "Great partner."
  );
};

export const getPokemonImgs = async (id) => {
  const response = await axios.get(
    `https://pokeapi.co/api/v2/pokemon-form/${id}`
  );
  return {
    front: response.data.sprites.front_default,
    back: response.data.sprites.back_default,
  };
};

export const getFormattedName = (name) => {
  const words = name.split(" ");
  const formattedName = [];
  for (const word of words) {
    formattedName.push(`${word.charAt(0).toUpperCase()}${word.slice(1)}`);
  }
  return formattedName.join(" ");
};

export const getAllPokemon = async (page = 0, limit = pokemonLimit) => {
  const list = await getPokemonList(Number(page * limit), limit);
  const pokemons = [];
  for (const pokemon of list.data) {
    const { name, url } = pokemon;
    const id = url.split("pokemon/")[1].split(/(\d+)/)[1];
    const description = await getPokemonDescription(id);
    const formattedName = getFormattedName(name);
    const images = await getPokemonImgs(name);
    pokemons.push({
      id,
      description,
      formattedName,
      images,
      name,
    });
  }
  return pokemons;
};