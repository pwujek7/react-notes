import React from 'react';
import { shallow } from 'enzyme';

import Input from './Input';

describe('<Input />', () => {
  const props = {
    type: 'text',
    name: 'testName',
    value: '',
    onChange: jest.fn()
  };

  beforeEach(() => {
    props.onChange.mockClear();
  });

  it('renders without errors', () => {
    shallow(<Input {...props} />);
  });

  it('renders without errors and with proper elements inside', () => {
    const input = shallow(<Input {...props} />);

    expect(input.find('label')).toHaveLength(1);
    expect(input.find('input')).toHaveLength(1);
  });

  it('calls handleInputChange() method when input value is changed', () => {
    const event = {
      target: {
        value: 'testValue'
      }
    };

    const input = shallow(<Input {...props} />);

    input.instance().handleInputChange(event);
    expect(props.onChange).toHaveBeenCalledWith(event);
  });
});
