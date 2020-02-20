import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PokemonPage from '../components/PokemonPage/PokemonPage';

const mapStateToProps = (state, routerInfo) => {
  const pokemon = state.dataAccessLayerInfo.pokemonsWithCatchInfo[routerInfo.match.params.id];
  return {
    pokemon
  }
}

export default withRouter(connect(mapStateToProps)(PokemonPage))
