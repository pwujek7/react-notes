import React, { Component } from 'react';
import PropTypes from 'prop-types';

import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';

const DISABLED_DAYS = { before: new Date() };

class DayPickerInput extends Component {
  state = {
    selectedDay: null
  }

  handleDayClick = (day, { selected, disabled }) => {
    if (disabled) {
      return null;
    }

    this.setState(
      { selectedDay: selected ? undefined : day },
      () => this.props.onChange(this.state.selectedDay)
    );
  }

  render() {
    const { name, value } = this.props;

    return (
      <div>
        <label htmlFor={name}>{name}</label>
        <DayPicker
          id={name}
          selectedDays={value}
          onDayClick={this.handleDayClick}
          disabledDays={DISABLED_DAYS}
        />
      </div>
    );
  }
}

DayPickerInput.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.instanceOf(Date)
};

export default DayPickerInput;
