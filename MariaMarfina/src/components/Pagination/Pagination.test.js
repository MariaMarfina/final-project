import React from 'react';
import { shallow } from 'enzyme';
import Pagination from './Pagination';

test('should correctly render Pagination', () => {
  const localMemory = {
    pageNum: 1, 
    lastPageNum: 190, 
    pokemonsIdsForPages: {
      1: [1, 2, 3, 4, 5],
      2: [6, 7, 8, 9, 10],
      3: [11]
    }, 
    numPokemonsOnPage: 5
  }
  const wrapper = shallow(
    <Pagination 
      pageNum={1}
      lastPageNum={190}
      limit={5}
      dataFetching={false}
      pageType={'pokemons'}
      dispatch={jest.fn()}
      localMemory={localMemory}
    />);
  expect(wrapper).toMatchSnapshot();
});