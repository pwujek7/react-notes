import React from 'react';
import { shallow } from 'enzyme';
import DayPicker from 'react-day-picker';

import DayPickerInput from './DayPickerInput';
import { StyledLabel } from '../../common-styled/Label';

describe('<DayPickerInput />', () => {
  const props = {
    name: 'testName',
    onChange: jest.fn()
  };

  beforeEach(() => {
    props.onChange.mockClear();
  });

  it('renders without errors', () => {
    shallow(<DayPickerInput {...props} />);
  });

  it('renders without errors and with proper elements', () => {
    const dayPickerInput = shallow(<DayPickerInput {...props} />);

    expect(dayPickerInput.find(StyledLabel)).toHaveLength(1);
    expect(dayPickerInput.find(DayPicker)).toHaveLength(1);
  });

  it('calls handleDayClick() method and returns null after click on disabled day', () => {
    const dayPickerInput = shallow(<DayPickerInput {...props} />);
    const date = new Date(2018, 1, 1);

    const result = dayPickerInput.instance().handleDayClick(date, {
      selected: false, disabled: true
    });

    expect(result).toEqual(null);
  });

  it('calls handleDayClick() method and returns undefined after click on selected day', () => {
    const dayPickerInput = shallow(<DayPickerInput {...props} />);
    const date = undefined;

    dayPickerInput.instance().handleDayClick(date, {
      selected: true, disabled: false
    });

    dayPickerInput.setState({ selectedDay: date });
    expect(dayPickerInput.state().selectedDay).toEqual(undefined);
    expect(props.onChange).toHaveBeenCalledWith(undefined);
  });

  it('calls handleDayClick() method and returns selected day', () => {
    const dayPickerInput = shallow(<DayPickerInput {...props} />);
    const date = new Date();

    dayPickerInput.instance().handleDayClick(date, {
      selected: false, disabled: false
    });

    dayPickerInput.setState({ selectedDay: date });
    expect(dayPickerInput.state().selectedDay).toEqual(date);
    expect(props.onChange).toHaveBeenCalledWith(date);
  });
});
