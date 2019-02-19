import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Input from '../form/Input';

class NoteItem extends Component {
  state = {
    isFinished: this.props.note.isFinished,
    isImportant: this.props.note.isImportant
  }

  handleInputChange = (event) => {
    this.setState({ [event.target.name]: !event.target.value });
  }

  render() {
    const { isFinished, isImportant } = this.state;
    const { title, content, day } = this.props.note;

    return (
      <div>
        <p>{title}</p>
        <p>{content}</p>
        <p>{day.toLocaleString()}</p>
        <Input onChange={this.handleInputChange} type="checkbox" value={isFinished} name="isFinished" />
        <Input onChange={this.handleInputChange} type="checkbox" value={isImportant} name="isImportant" />
      </div>
    );
  }
}

NoteItem.propTypes = {
  note: PropTypes.object.isRequired
};

export default NoteItem;
