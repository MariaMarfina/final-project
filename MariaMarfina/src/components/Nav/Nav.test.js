import React from 'react';
import { shallow } from 'enzyme';
import Nav from './Nav';

test('should render Nav correctly', () => {
  const wrapper = shallow(<Nav />);
  expect(wrapper).toMatchSnapshot();
});