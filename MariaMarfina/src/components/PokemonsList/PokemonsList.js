import React from 'react';
import { catchPokemon } from '../../actions/pagesAC';
import Pagination from '../../containers/Pagination';
import { Pokemon } from '../Pokemon/Pokemon';
import PageStateMessage from '../PageStateMessage/PageStateMessage';

export const PokemonsList = ( props ) => {
  const clicked = (id) => (e) => {
    e.preventDefault();
    props.dispatch(catchPokemon(id));
  }
  const dataFetching = props.dataFetching || false;
  return (
    <div className="container sm md lg xl h-100 " >
        <PageStateMessage 
          dataFetching={ dataFetching } 
          pokemonsNum={ props.pokemonsOnPage.length } 
          error={props.error} 
        />
        { props.pokemonsOnPage.length > 0 && 
          (<div className="row justify-content-left align-items-center">
            { 
              props.pokemonsOnPage.map( pokemon => 
                <Pokemon
                  id={ pokemon.id }
                  name={ pokemon.name }
                  isCaught={ pokemon.caught }
                  handleCatch={ clicked }
                  key={ pokemon.id }
                /> 
              ) 
            }
          </div>) 
        }
        {props.otherPages > 1 && <Pagination />} 
    </div>
  )
}