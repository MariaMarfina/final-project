import dataAccessLayerInfo from './dataAccessLayerInfo';
import { DATA_FETCHING, DATA_FETCHED, DATA_FETCHING_ERROR } from '../actions/dataAccessLayerActions';
import { CATCH_POKEMON } from '../actions/pagesActions';

test('should setup default data access layer info', () => {
  const state = dataAccessLayerInfo(undefined, { type: '@@INIT' });
  expect(state).toEqual({
    dataFetching: false,
    pokemonsWithCatchInfo: {},
    error: null
  });
});

test('should set data fetching to true when data fetched', () => {
  const state = dataAccessLayerInfo(undefined, { type: DATA_FETCHING });
  expect(state.dataFetching).toBe(true);
});

test('should set data fetching error when error occured', () => {
  const state = dataAccessLayerInfo(undefined, { type: DATA_FETCHING_ERROR, error: 'Error message' });
  expect(state.error).toBe('Error message');
});

test('should set data fetching to false when error occured', () => {
  const state = dataAccessLayerInfo(undefined, { type: DATA_FETCHING_ERROR, error: 'Error message' });
  expect(state.dataFetching).toBe(false);
});

test('should set data fetching error to true when error message isn\'t provided', () => {
  const state = dataAccessLayerInfo(undefined, { type: DATA_FETCHING_ERROR });
  expect(state.error).toBe(true);
});

test('should set data fetching to false when data fetched', () => {
  const action = {
    type: DATA_FETCHED,
    pokemons: [
      {name: 'bulbasaur', id: 1},
      {name: 'ivysaur', id: 2}
    ] 
  };
  const state = dataAccessLayerInfo(undefined, action);
  expect(state.dataFetching).toBe(false);
});

test('should set error to null when data fetched', () => {
  const action = {
    type: DATA_FETCHED,
    pokemons: [
      {name: 'bulbasaur', id: 1},
      {name: 'ivysaur', id: 2}
    ] 
  };
  const state = dataAccessLayerInfo(undefined, action);
  expect(state.error).toBeNull();
});

test('should create pokemons with catch info', () => {
  const action = {
    type: DATA_FETCHED,
    pokemons: [
      {name: 'bulbasaur', id: 1},
      {name: 'ivysaur', id: 2}
    ] 
  };
  const pokemonsWithCatchInfo = {
    1: {name: "bulbasaur", id: 1, caught: false, catchDate: ""},
    2: {name: "ivysaur", id: 2, caught: false, catchDate: ""}
  };
  const state = dataAccessLayerInfo(undefined, action);
  expect(state.pokemonsWithCatchInfo).toEqual(pokemonsWithCatchInfo);
});