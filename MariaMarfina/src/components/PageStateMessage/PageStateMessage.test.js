import React from 'react';
import { shallow } from 'enzyme';
import PageStateMessage from './PageStateMessage';

test('should render correct PageStateMessage when data is loading', () => {
  const wrapper = shallow(
    <PageStateMessage
      dataFetching={true} 
      pokemonsNum={0} 
      error={false} 
    />);
  expect(wrapper).toMatchSnapshot();
});

test('should render correct PageStateMessage when some error occured', () => {
  const wrapper = shallow(
    <PageStateMessage
      dataFetching={false} 
      pokemonsNum={0} 
      error={true} 
    />);
  expect(wrapper).toMatchSnapshot();
});

test('should render correct PageStateMessage when there is no items', () => {
  const wrapper = shallow(
    <PageStateMessage
      dataFetching={false} 
      pokemonsNum={0} 
      error={false} 
    />);
  expect(wrapper).toMatchSnapshot();
});