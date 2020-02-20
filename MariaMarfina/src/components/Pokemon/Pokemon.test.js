import React from 'react';
import { shallow } from 'enzyme';
import { Pokemon } from './Pokemon';

test('should correctly render not caught Pokemon', () => {
  const wrapper = shallow(
    <Pokemon 
      id={5}
      name={'Pikachu'} 
      isCaught={false}
      handleCatch={jest.fn()}
    />);
  expect(wrapper).toMatchSnapshot();
});

test('should correctly render caught Pokemon', () => {
  const wrapper = shallow(
    <Pokemon 
      id={5}
      name={'Pikachu'} 
      isCaught={true}
      handleCatch={jest.fn()}
    />);
  expect(wrapper).toMatchSnapshot();
});