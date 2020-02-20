import * as axios from "axios";

const instance = axios.create({
  baseURL: 'http://localhost:3000/pokemons'
});

export const pokemonsAPI = {
  async getPokemons(page, limit) {
    const response = await instance.get(`?_page=${ page }&_limit=${ limit }`);
    return response.data;
  },
  async getPokemonsTotalCount() {
    const response = await instance.get(`?_page=1&_limit=1`);
    return parseInt(response.headers['x-total-count']);
  }
}