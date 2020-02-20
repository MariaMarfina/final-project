import React from 'react';

import { fetchPokemons, fetchPokemonsLength  } from '../actions/dataAccessLayerAC';
import FetchedPokemons from './FetchedPokemons';

class FetchingPokemons extends React.Component  {
  componentDidMount() {
    if (!this.props.dataFetching && !this.props.isInLocalMemory) {
      this.props.dispatch(fetchPokemons(1, this.props.limit))
    };
    this.props.dispatch(fetchPokemonsLength());
  }

  render() {
    return <FetchedPokemons />
  }
};

export default FetchingPokemons;