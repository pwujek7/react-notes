import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Checkbox from '../form/fields/Checkbox';

class NoteItem extends Component {
  state = {
    isFinished: this.props.note.isFinished,
    isImportant: this.props.note.isImportant
  }

  toggleImportant = () => {
    this.setState((prevState) => ({ isImportant: !prevState.isImportant }));
  }

  toggleFinish = () => {
    this.setState((prevState) => ({ isFinished: !prevState.isFinished }));
  }

  render() {
    const { isFinished, isImportant } = this.state;
    const { title, content, day } = this.props.note;

    return (
      <div>
        <p>{title}</p>
        <p>{content}</p>
        <p>{day.toLocaleString()}</p>
        <Checkbox
          name="isFinished"
          onChange={this.toggleFinish}
          value={isFinished}
          checked={isFinished}
        />
        <Checkbox
          name="isImportant"
          onChange={this.toggleImportant}
          value={isImportant}
          checked={isImportant}
        />
      </div>
    );
  }
}

NoteItem.propTypes = {
  note: PropTypes.object.isRequired
};

export default NoteItem;
