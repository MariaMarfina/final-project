import { CHANGE_PAGE_NUM, CALC_LAST_PAGE_NUM, CATCH_POKEMON } from '../actions/pagesActions';
import { DATA_FETCHED } from '../actions/dataAccessLayerActions';

const defaultState = { 
  pokemons: {
    pageNum: 1,
    lastPageNum: 1,
    pokemonsIdsForPages: {
    },
    numPokemonsOnPage: 12,
  },
  caughtPokemons: {
    pageNum: 1,
    lastPageNum: 1,
    pokemonsIdsForPages: {
      1: []
    }
  }
};

export const pagesInfo = (state = defaultState, action) => {
  switch (action.type) {
    case DATA_FETCHED:
      return { 
        ...state,
        [action.pageType]: {
          ...state[action.pageType],
          pokemonsIdsForPages: {
            ...state[action.pageType].pokemonsIdsForPages,
            [action.pageNum]: action.pokemonsIdsForPages
          }
        }                                       
      };
    case CHANGE_PAGE_NUM:
      return { 
        ...state, 
        [action.pageType]: {
          ...state[action.pageType], 
          pageNum: action.pageNum
        }  
      };
    case CALC_LAST_PAGE_NUM:
      return { 
        ...state, 
        [action.pageType]: {
          ...state[action.pageType], 
          lastPageNum: Math.ceil(action.pokemonsNum / state.pokemons.numPokemonsOnPage)
        }
      };
    case CATCH_POKEMON: 
      let lastPageNum = state.caughtPokemons.lastPageNum;
      const pokemonsIdsForPages = state.caughtPokemons.pokemonsIdsForPages;
      const isLastPageFull = pokemonsIdsForPages[lastPageNum].length === state.pokemons.numPokemonsOnPage;
      if ( isLastPageFull ) {
        pokemonsIdsForPages[ lastPageNum + 1 ] = [ action.id ];
        lastPageNum++;
      } else {
        pokemonsIdsForPages[lastPageNum].push(action.id);
      }
      return {
        ...state,
        caughtPokemons: {
          ...state.caughtPokemons,
          lastPageNum,
          pokemonsIdsForPages
        }
      };
    default:
      return state;    
  };
};