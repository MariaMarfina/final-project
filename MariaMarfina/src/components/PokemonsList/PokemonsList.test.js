import React from 'react';
import { shallow } from 'enzyme';
import { PokemonsList } from './PokemonsList';

test('should correctly render PokemonsList', () => {
  const pokemonsOnPage = [
    {name: "bulbasaur", id: 1, caught: false, catchDate: ""},
    {name: "ivysaur", id: 2, caught: false, catchDate: ""},
    {name: "venusaur", id: 3, caught: false, catchDate: ""}
  ]
  const wrapper = shallow(
    <PokemonsList 
      dataFetching={false}
      error={false}
      pokemonsOnPage={pokemonsOnPage}
      dispatch={jest.fn()}
    />);
  expect(wrapper).toMatchSnapshot();
});
