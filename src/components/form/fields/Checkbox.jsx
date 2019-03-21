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
  margin: 0 0 0 10px;
  background-image: url('src/resources/icons/ico_${props => props.icoName}.svg');
  background-repeat: no-repeat;
  background-position: center;
  cursor: pointer;

  ${StyledCheckbox}:checked + & {
    background-image: url('src/resources/icons/ico_${props => props.icoName}_checked.svg');
    background-repeat: no-repeat;
    background-position: center;
  }
`;

class Checkbox extends Component {
  handleCheckboxChange = () => {
    this.props.onChange();
  }

  render() {
    const { id, name, checked, value } = this.props;

    return (
      <div>
        <StyledCheckbox
          type="checkbox"
          name={name}
          id={`${name}-${id}`}
          onChange={this.handleCheckboxChange}
          value={value}
          checked={checked}
        />
        <StyledLabel htmlFor={`${name}-${id}`} icoName={name} />
      </div>
    );
  }
}

Checkbox.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.bool.isRequired,
  checked: PropTypes.bool.isRequired
};

export default Checkbox;
