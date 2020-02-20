import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { PokemonsList } from '../components/PokemonsList/PokemonsList';

const mapStateToProps = (state) => {
  const pageNum = state.pagesInfo["caughtPokemons"].pageNum;
  const pokemons = state.dataAccessLayerInfo.pokemonsWithCatchInfo;
  const error = state.dataAccessLayerInfo.error;

  const pokemonsIdsForPages = state.pagesInfo["caughtPokemons"].pokemonsIdsForPages[pageNum] ? 
    state.pagesInfo["caughtPokemons"].pokemonsIdsForPages[pageNum] : 
    { [pageNum]: [] };
  const pokemonsOnPage = pokemonsIdsForPages.length === 0 ? 
    [] : 
    (pokemonsIdsForPages.map(id => pokemons[id])) ;
  const otherPages = state.pagesInfo["caughtPokemons"].lastPageNum;

  return {
    pokemonsOnPage,
    otherPages,
    error
  }
}

export default withRouter(connect(mapStateToProps)(PokemonsList));