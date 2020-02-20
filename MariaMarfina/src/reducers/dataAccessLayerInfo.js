import { DATA_FETCHING, DATA_FETCHED, DATA_FETCHING_ERROR } from '../actions/dataAccessLayerActions'; 
import { CATCH_POKEMON } from '../actions/pagesActions';

const defaultState = {
  dataFetching: false,
  pokemonsWithCatchInfo: {},
  error: null
};

const dataAccessLayerInfo = ( state = defaultState, action ) => {
  switch ( action.type ) {
    case DATA_FETCHING:
      return {
        ...state,
        dataFetching: true
      };
    case DATA_FETCHING_ERROR:
      return {
        ...state, 
        dataFetching: false,
        error: action.error || true
      };
    case DATA_FETCHED:
      return {
        ...state, 
        dataFetching: false,  
        error: null,
        pokemonsWithCatchInfo: {
          ...state.pokemonsWithCatchInfo, 
          ...action.pokemons.reduce(( acc, item ) => {
            return { 
              ...acc, 
              [item.id]: {...item, caught: false, catchDate: ""} 
            }
          }, {})
      }};
    case CATCH_POKEMON:
        return {
          ...state,
          pokemonsWithCatchInfo: {
            ...state.pokemonsWithCatchInfo,
            [action.id]: {
              ...state.pokemonsWithCatchInfo[action.id],
              caught: true,
              catchDate: new Date().toLocaleString()
            }
          }
        };
    default:
      return state;    
  };
};

export default dataAccessLayerInfo;