import React from 'react';
import { shallow } from 'enzyme';

import TextInput, { StyledTextInput } from './TextInput';
import { StyledLabel } from '../../common-styled/Label';

describe('<TextInput />', () => {
  const props = {
    name: 'testName',
    value: '',
    onChange: jest.fn(),
    placeholder: 'test placeholder'
  };

  beforeEach(() => {
    props.onChange.mockClear();
  });

  it('renders without errors', () => {
    shallow(<TextInput {...props} />);
  });

  it('renders without errors and with proper elements inside', () => {
    const input = shallow(<TextInput {...props} />);

    expect(input.find(StyledLabel)).toHaveLength(1);
    expect(input.find(StyledTextInput)).toHaveLength(1);
  });

  it('calls handleInputChange() method when input value is changed', () => {
    const event = {
      target: {
        value: 'testValue'
      }
    };

    const input = shallow(<TextInput {...props} />);

    input.instance().handleInputChange(event);
    expect(props.onChange).toHaveBeenCalledWith(event);
  });
});
