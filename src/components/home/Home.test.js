import React from 'react';
import { shallow } from 'enzyme';

import Home, { StyledOuterContainer, StyledInnerContainer, StyledTitle } from './Home';

describe('<Home />', () => {
  it('renders without errors', () => {
    shallow(<Home />);
  });

  it('renders with proper content', () => {
    const home = shallow(<Home />);

    expect(home.find(StyledOuterContainer)).toHaveLength(1);
    expect(home.find(StyledInnerContainer)).toHaveLength(1);
    expect(home.find(StyledTitle)).toHaveLength(1);
  });
});
