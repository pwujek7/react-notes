import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TextInput extends Component {
  handleInputChange = (event) => {
    this.props.onChange(event);
  }

  render() {
    const { value, name } = this.props;

    return (
      <div>
        <label htmlFor={name}>{name}</label>
        <input
          name={name}
          onChange={this.handleInputChange}
          id={name}
          type="text"
          value={value}
        />
      </div>
    );
  }
}

TextInput.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool
  ])
};

export default TextInput;
