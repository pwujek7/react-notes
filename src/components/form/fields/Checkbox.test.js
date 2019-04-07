import React from 'react';
import { shallow } from 'enzyme';

import Checkbox, { StyledCheckbox, StyledLabel } from './Checkbox';

describe('<Checkbox />', () => {
  const props = {
    id: '1',
    name: 'test name',
    onChange: jest.fn(),
    value: false,
    checked: false
  };

  beforeEach(() => {
    props.onChange.mockClear();
  });

  it('renders without errors', () => {
    shallow(<Checkbox {...props} />);
  });

  it('renders without errors and with proper elements', () => {
    const checkbox = shallow(<Checkbox {...props} />);

    expect(checkbox.find(StyledLabel)).toHaveLength(1);
    expect(checkbox.find(StyledCheckbox)).toHaveLength(1);
  });

  it('calls handleCheckboxChange() method when checkbox value is changed', () => {
    const input = shallow(<Checkbox {...props} />);

    input.instance().handleCheckboxChange();
    expect(props.onChange).toHaveBeenCalled();
  });
});
