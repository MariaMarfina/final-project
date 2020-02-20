import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import Pagination from '../components/Pagination/Pagination';

const mapStateToProps = (state, routerInfo) => {
  var path = routerInfo.match.path;
  let pageType = '';
  switch (path) {
    case '/pokemons':
      pageType = 'pokemons';
      break;
    case '/caught-pokemons':
      pageType = 'caughtPokemons';
      break;
    default:
      pageType = 'pokemon';
  }

  const lastPageNum = state.pagesInfo[pageType].lastPageNum || 1;
  const pageNum = state.pagesInfo[pageType].pageNum || 1;
  const limit = state.pagesInfo.pokemons.numPokemonsOnPage;
  const dataFetching = state.dataAccessLayerInfo.dataFetching;
  const localMemory = state.pagesInfo[pageType];
  
  return {
    lastPageNum, 
    pageNum,
    pageType,
    limit,
    dataFetching,
    localMemory
  }
}

export default withRouter(connect(mapStateToProps)(Pagination));