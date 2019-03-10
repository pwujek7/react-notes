import React from 'react';
import { shallow } from 'enzyme';

import Navigation, { StyledLink, StyledButton } from './Navigation';

describe('<Navigation />', () => {
  const navigation = shallow(<Navigation />);

  it('renders without errors', () => {
    shallow(<Navigation />);
  });

  it('renders navigation list with 6 links', () => {
    expect(navigation.find(StyledLink)).toHaveLength(6);
    expect(navigation.find(StyledButton)).toHaveLength(1);
  });

  it('renders navigation links and each of the link has "to" property defined', () => {
    navigation.find(StyledLink).forEach((node) => {
      expect(node.props().to).toBeDefined();
    });
  });

  it('calls handleClick() method', () => {
    const clearLocalStorage = jest.fn();

    navigation.instance().handleClick();
    expect(clearLocalStorage).not.toHaveBeenCalled();
  });
});
