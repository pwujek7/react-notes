import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledCheckbox = styled.input`
  display: none;
`;

const StyledLabel = styled.label`
  display: block;
  width: 36px;
  height: 36px;
  background-image: url('src/resources/icons/ico_${props => props.htmlFor}.svg');
  background-repeat: no-repeat;
  background-position: center;
  cursor: pointer;

  ${StyledCheckbox}:checked + & {
    background-image: url('src/resources/icons/ico_${props => props.htmlFor}_checked.svg');
    background-repeat: no-repeat;
    background-position: center;
  }
`;

class Checkbox extends Component {
  handleCheckboxChange = () => {
    this.props.onChange();
  }

  render() {
    const { name, checked, value } = this.props;

    return (
      <div>
        <StyledCheckbox
          type="checkbox"
          name={name}
          id={name}
          onChange={this.handleCheckboxChange}
          value={value}
          checked={checked}
        />
        <StyledLabel htmlFor={name} />
      </div>
    );
  }
}

Checkbox.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.bool.isRequired,
  checked: PropTypes.bool.isRequired
};

export default Checkbox;
