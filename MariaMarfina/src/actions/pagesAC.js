import { CHANGE_PAGE_NUM, CALC_LAST_PAGE_NUM, CATCH_POKEMON } from './pagesActions';

export const changePageNum = ( page, pageType ) => ({
  type: CHANGE_PAGE_NUM, 
  pageNum: page, 
  pageType 
});

export const calcLastPageNum = ( pokemonsNum, pageType ) => ({
  type: CALC_LAST_PAGE_NUM, 
  pokemonsNum,
  pageType 
});

export const catchPokemon = ( id ) => ({
  type: CATCH_POKEMON,
  id
});