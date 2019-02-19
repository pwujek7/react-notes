import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Input extends Component {
  handleInputChange = (event) => {
    this.props.onChange(event);
  }

  render() {
    const { type, value, name } = this.props;

    return (
      <div>
        <label htmlFor={name}>{name}</label>
        <input onChange={this.handleInputChange} id={name} type={type} value={value} name={name} />
      </div>
    );
  }
}

Input.propTypes = {
  onChange: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool
  ]),
  name: PropTypes.string.isRequired
};

export default Input;
