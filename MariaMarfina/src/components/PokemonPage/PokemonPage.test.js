import React from 'react';
import { shallow } from 'enzyme';
import PokemonPage from './PokemonPage';

test('should render PokemonPage with caught pokemon info', () => {
  const pokemon = {
    id: 5,
    name: 'Pikachu',
    caught: true,
    catchDate: '2/20/2020, 7:27:32 PM'
  }
  const wrapper = shallow(<PokemonPage pokemon={pokemon} />);
  expect(wrapper).toMatchSnapshot();
});

test('should render PokemonPage with not caught pokemon info', () => {
  const pokemon = {
    id: 6,
    name: 'Bulbasaur',
    caught: false
  }
  const wrapper = shallow(<PokemonPage pokemon={pokemon} />);
  expect(wrapper).toMatchSnapshot();
});