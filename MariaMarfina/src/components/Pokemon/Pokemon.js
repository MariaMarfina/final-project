import React from 'react';
import { Link } from 'react-router-dom';

export const Pokemon = ( props ) => (
  <div className="card text-center col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3 " >
    <div className="card-body">
    <Link to={`/pokemons/${props.id}`} className="nav-link"  >
      <img className="card-img" src={ `../../../db/pokemons/${ props.id }.png` } alt={ props.name }/>
      <h3 className="card-title text-info text-capitalize">{ props.name }</h3>
    </Link>
    <button type="button" className="btn btn-success btn-block btn-lg"  onClick={ props.handleCatch(props.id) } disabled={ props.isCaught }>{!props.isCaught ? 'Catch' : 'Caught'}</button>
    </div>
  </div>
)