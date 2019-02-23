import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Checkbox extends Component {
  handleCheckboxChange = () => {
    this.props.onChange();
  }

  render() {
    const { name, checked, value } = this.props;

    return (
      <div>
        <label htmlFor={name}>{name}</label>
        <input
          type="checkbox"
          name={name}
          id={name}
          onChange={this.handleCheckboxChange}
          value={value}
          checked={checked}
        />
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
