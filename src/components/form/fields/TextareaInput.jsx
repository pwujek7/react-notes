import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { StyledLabel } from '../../common-styled/Label';

const StyledTextarea = styled.textarea`
  display: block;
  width: 100%;
  padding: 10px 15px;
  font-size: ${({ theme }) => theme.font.size.m};
  background: ${({ theme }) => theme.color.lightGray};
  border: none;
  border-bottom: 3px solid ${({ theme }) => theme.color.lightBlue};
  resize: none;
  overflow: hidden;
  transition: all ease-out .5s;

  &:hover {
    border-bottom: 3px solid ${({ theme }) => theme.color.blue};
  }

  &::placeholder {
    color: ${({ theme }) => theme.color.blueGray};
    transition: all ease-out .5s;
  }

  &:focus::placeholder {
    opacity: 0;
    transform: translateX(150px);
  }
`;

class TextareaInput extends Component {
  handleInputChange = (event) => {
    this.props.onChange(event);
  }

  render() {
    const { value, name, placeholder } = this.props;

    return (
      <div>
        <StyledLabel htmlFor={name}>{name}</StyledLabel>
        <StyledTextarea
          name={name}
          id={name}
          onChange={this.handleInputChange}
          value={value}
          cols="40"
          rows="4"
          placeholder={placeholder}
        />
      </div>
    );
  }
}

TextareaInput.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string
};

export default TextareaInput;
