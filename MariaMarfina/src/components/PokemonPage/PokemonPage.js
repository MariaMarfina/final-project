import React from 'react';

const PokemonPage = ( props ) => (
  <div className="container" >
    <div className="row justify-content-center">
      <div className="card" >
        <div className="card-body">
          <img className="card-img" src={`../../../db/pokemons/${props.pokemon.id}.png`} alt={props.pokemon.name}/>
          <h5 className="card-title text-capitalize">Name: {props.pokemon.name}</h5>
          <p>ID: {props.pokemon.id}</p>
          <p>Status: {props.pokemon.caught ? 'caught' : 'not caught' }</p>
          {props.pokemon.caught && <p>Caught at: {props.pokemon.catchDate}</p>}
        </div>
      </div>
    </div>
  </div>
)

export default PokemonPage;