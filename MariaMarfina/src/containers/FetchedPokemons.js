import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { PokemonsList } from '../components/PokemonsList/PokemonsList';

const mapStateToProps = (state) => {
  const pageNum = state.pagesInfo["pokemons"].pageNum;
  const pokemons = state.dataAccessLayerInfo.pokemonsWithCatchInfo;
  const dataFetching = state.dataAccessLayerInfo.dataFetching;
  const error = state.dataAccessLayerInfo.error;
  const pokemonsIdsForPages = Object.keys(state.pagesInfo["pokemons"].pokemonsIdsForPages).length !== 0 ? 
    state.pagesInfo["pokemons"].pokemonsIdsForPages : 
    { 1: [] };
  const pokemonsOnPage = dataFetching ? 
    [] : 
    (pokemonsIdsForPages[pageNum].map(page => pokemons[page]));
  const otherPages = state.pagesInfo["pokemons"].lastPageNum;

  return {
    dataFetching,
    pokemonsOnPage,
    otherPages,
    error
  }
}

export default withRouter(connect(mapStateToProps)(PokemonsList));