import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import FetchingPokemons from './FetchingPokemons';

const mapStateToProps = (state) => {
  const limit = state.pagesInfo.pokemons.numPokemonsOnPage;
  const dataFetching = state.dataAccessLayerInfo.dataFetching;
  const isInLocalMemory = state.pagesInfo["pokemons"].pokemonsIdsForPages[1];

  return {
    limit,
    dataFetching,
    isInLocalMemory
  }
}

export default withRouter(connect(mapStateToProps)(FetchingPokemons));