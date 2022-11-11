import axios from 'axios'

export const getAllPokemons = async (offset, limit) => {
    const params = {
        limit: limit ?? 10,
        offset: offset ?? 0,
    }
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${params.limit}&offset=${params.offset}`)
    return {
        data: response.data.results,
        total: response.data.count,
        nextOffset: Number(offset + limit)
    }
}