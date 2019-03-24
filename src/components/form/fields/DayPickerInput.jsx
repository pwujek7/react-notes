import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import DayPicker from 'react-day-picker';
import './dayPickerStyles.css';

const DISABLED_DAYS = { before: new Date() };

const StyledLabel = styled.label`
  display: block;
  margin: 25px 0 5px 10px;
  text-transform: capitalize;
  font-size: 14px;
  color: #BDBDBD;
`;

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
        <StyledLabel htmlFor={name}>{name}</StyledLabel>
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
