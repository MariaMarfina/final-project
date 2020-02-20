import { dataFetching, dataFetched, dataFetchingError, fetchPokemons, fetchPokemonsLength } from './dataAccessLayerAC';

test('should setup data fetching action object', () => {
  const action = dataFetching();
  expect(action).toEqual({
    type: 'dataAccessLayerInfo/DATA_FETCHING'
  });
});

test('should setup data fetched action object', () => {
  const pokemonsListForPage = [
    {name: 'pokemon1', id: 1},
    {name: 'pokemon2', id: 2},
    {name: 'pokemon3', id: 3}
  ];
  const pageNum = 1;
  const pageType = 'pokemons';
  const action = dataFetched(pokemonsListForPage, pageNum, pageType);
  expect(action).toEqual({
    type: 'dataAccessLayerInfo/DATA_FETCHED',
    pokemons: pokemonsListForPage,
    pokemonsIdsForPages: pokemonsListForPage.map((pokemon) => pokemon.id),
    pageType, 
    pageNum
  });
});

test('should setup data fetching error action object', () => {
  const error = 'Error message';
  const action = dataFetchingError(error);
  expect(action).toEqual({
    type: 'dataAccessLayerInfo/DATA_FETCHING_ERROR',
    error
  });
});

test('should setup fetch pokemons thunk', async () => {
  const dispatch = jest.fn();
  const getState = jest.fn();
  const pageNum = 1;
  const limit = 3;
  const pokemonsListForPage = [
    {name: 'bulbasaur', id: 1},
    {name: 'ivysaur', id: 2},
    {name: 'venusaur', id: 3}
  ];
  const pageType = 'pokemons'
  await fetchPokemons(pageNum, limit)(dispatch, getState);
  expect(dispatch).toBeCalledWith({
    type: "dataAccessLayerInfo/DATA_FETCHING"
  });
  expect(dispatch).toBeCalledWith({
    type: 'dataAccessLayerInfo/DATA_FETCHED',
    pokemons: pokemonsListForPage,
    pokemonsIdsForPages: pokemonsListForPage.map((pokemon) => pokemon.id),
    pageType, 
    pageNum}
  );
});

test('should setup fetch pokemons length thunk', async () => {
  const dispatch = jest.fn();
  const getState = jest.fn();
  const pageType = 'pokemons';
  const pokemonsNum = 949;
  await fetchPokemonsLength()(dispatch, getState);
  expect(dispatch).toBeCalledWith({
    type: 'pages/CALC_LAST_PAGE_NUM',
    pokemonsNum,
    pageType
  });
});