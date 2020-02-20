import { pokemonsAPI } from '../api/api';
import { calcLastPageNum } from './pagesAC';
import { DATA_FETCHING, DATA_FETCHED, DATA_FETCHING_ERROR } from './dataAccessLayerActions';

export const dataFetching = () => ({
  type: DATA_FETCHING 
});

export const dataFetched = ( pokemonsListForPage, pageNum, pageType ) => ({
  type: DATA_FETCHED,
  pokemons: pokemonsListForPage,
  pokemonsIdsForPages: pokemonsListForPage.map((pokemon) => pokemon.id),
  pageType, 
  pageNum
});

export const dataFetchingError = (error) => ({
  type: DATA_FETCHING_ERROR, 
  error
});

export const fetchPokemons = (pageNum, limit) => async (dispatch) => {
  try {    
    dispatch(dataFetching());
    const pokemonsListForPage = await pokemonsAPI.getPokemons(pageNum, limit);
    dispatch(dataFetched(pokemonsListForPage, pageNum, 'pokemons'));
  } catch (error) {
    dispatch(dataFetchingError(error))
  }
};

export const fetchPokemonsLength = () => async (dispatch) => {
  const pokemonsTotalCount = await pokemonsAPI.getPokemonsTotalCount()
  dispatch(calcLastPageNum(pokemonsTotalCount, "pokemons"))
};