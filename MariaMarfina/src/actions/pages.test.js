import { changePageNum, calcLastPageNum, catchPokemon } from './pagesAC';

test('should setup change page num action object', () => {
  const pageNum = 5;
  const pageType = 'EPAM';
  const action = changePageNum(pageNum, pageType);
  expect(action).toEqual({
    type: 'pages/CHANGE_PAGE_NUM',
    pageNum,
    pageType
  });
});

test('should setup calc last page num action object', () => {
  const pokemonsNum = 10;
  const pageType = 'EPAM';
  const action = calcLastPageNum(pokemonsNum, pageType);
  expect(action).toEqual({
    type: 'pages/CALC_LAST_PAGE_NUM',
    pokemonsNum,
    pageType
  });
});

test('should setup catch pokemon action object', () => {
  const id = 43;
  const action = catchPokemon(id);
  expect(action).toEqual({
    type: 'pages/CATCH_POKEMON',
    id: 43
  });
});