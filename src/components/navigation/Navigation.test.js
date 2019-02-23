import React from 'react';
import { shallow } from 'enzyme';
import { Link } from 'react-router-dom';

import Navigation from './Navigation';

describe('<Navigation />', () => {
  const navigation = shallow(<Navigation />);

  it('renders without errors', () => {
    shallow(<Navigation />);
  });

  it('renders navigation list with 5 links', () => {
    expect(navigation.find(Link)).toHaveLength(6);
  });

  it('renders navigation links and each of the link has "to" property defined', () => {
    navigation.find(Link).forEach((node) => {
      expect(node.props().to).toBeDefined();
    });
  });
});
