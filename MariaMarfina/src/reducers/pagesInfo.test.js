import { pagesInfo } from './pagesInfo';
import { CHANGE_PAGE_NUM, CALC_LAST_PAGE_NUM, CATCH_POKEMON } from '../actions/pagesActions';
import { DATA_FETCHED } from '../actions/dataAccessLayerActions';

test('should setup default data access layer info', () => {
  const state = pagesInfo(undefined, { type: '@@INIT' });
  expect(state).toEqual({
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
  });
});

test('should add pokemons ids for page when data fetched', () => {
  const action = {
    type: DATA_FETCHED,
    pageType: 'pokemons',
    pageNum: 1,
    pokemonsIdsForPages: [1, 2, 3]
  };
  const state = pagesInfo(undefined, action);
  expect(state.pokemons.pokemonsIdsForPages).toEqual({
    1: [1, 2, 3]
  });
});

test('should change page num', () => {
  const action = {
    type: CHANGE_PAGE_NUM,
    pageType: 'pokemons',
    pageNum: 3
  };
  const state = pagesInfo(undefined, action);
  expect(state.pokemons.pageNum).toBe(3);
});

test('should calculate last page num', () => {
  const action = {
    type: CALC_LAST_PAGE_NUM,
    pageType: 'pokemons',
    pokemonsNum: 13,
  };
  const state = pagesInfo(undefined, action);
  expect(state.pokemons.lastPageNum).toBe(2);
});

test('should update last page num if needed when pokemon caught', () => {
  const action = {
    type: CATCH_POKEMON,
    id: 6
  };
  const pagesInfoState = {
    pokemons: {
      pageNum: 1,
      lastPageNum: 2,
      pokemonsIdsForPages: {
        1: [1, 2, 3, 4, 5],
        2: [6, 7, 8, 9, 10]
      },
      numPokemonsOnPage: 5,
    },
    caughtPokemons: {
      pageNum: 1,
      lastPageNum: 1,
      pokemonsIdsForPages: {
        1: [1, 2, 3, 4, 5]
      }
    }
  }
  const state = pagesInfo(pagesInfoState, action);
  expect(state.caughtPokemons.lastPageNum).toBe(2);
});

test('should not update last page num if not needed when pokemon caught', () => {
  const action = {
    type: CATCH_POKEMON,
    id: 6
  };
  const pagesInfoState = {
    pokemons: {
      pageNum: 1,
      lastPageNum: 2,
      pokemonsIdsForPages: {
        1: [1, 2, 3, 4, 5],
        2: [6, 7, 8, 9, 10]
      },
      numPokemonsOnPage: 5,
    },
    caughtPokemons: {
      pageNum: 1,
      lastPageNum: 1,
      pokemonsIdsForPages: {
        1: [1, 2, 3, 4]
      }
    }
  }
  const state = pagesInfo(pagesInfoState, action);
  expect(state.caughtPokemons.lastPageNum).toBe(1);
});

test('should add pokemon when pokemon caught', () => {
  const action = {
    type: CATCH_POKEMON,
    id: 6
  };
  const pagesInfoState = {
    pokemons: {
      pageNum: 1,
      lastPageNum: 2,
      pokemonsIdsForPages: {
        1: [1, 2, 3, 4, 5],
        2: [6, 7, 8, 9, 10]
      },
      numPokemonsOnPage: 5,
    },
    caughtPokemons: {
      pageNum: 1,
      lastPageNum: 1,
      pokemonsIdsForPages: {
        1: [1, 2, 3, 4, 5]
      }
    }
  }
  const state = pagesInfo(pagesInfoState, action);
  expect(state.caughtPokemons.pokemonsIdsForPages).toEqual({
    1: [1, 2, 3, 4, 5],
    2: [6]
  });
});