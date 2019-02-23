import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Checkbox from '../form/fields/Checkbox';

import { toggleFinish, toggleImportant } from '../../actions/notesActions';

export class NoteItem extends Component {
  state = {
    isFinished: this.props.note.isFinished,
    isImportant: this.props.note.isImportant
  }

  changeFinish = () => {
    const { note, toggleFinish } = this.props;
    this.setState((prevState) => ({ isFinished: !prevState.isFinished }));
    toggleFinish(note.id);
  }

  changeImportant = () => {
    const { note, toggleImportant } = this.props;
    this.setState((prevState) => ({ isImportant: !prevState.isImportant }));
    toggleImportant(note.id);
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
          onChange={this.changeFinish}
          value={isFinished}
          checked={isFinished}
        />
        <Checkbox
          name="isImportant"
          onChange={this.changeImportant}
          value={isImportant}
          checked={isImportant}
        />
      </div>
    );
  }
}

NoteItem.propTypes = {
  note: PropTypes.object.isRequired,
  toggleFinish: PropTypes.func,
  toggleImportant: PropTypes.func
};

const mapDispatchToProps = {
  toggleFinish,
  toggleImportant
};

export default connect(null, mapDispatchToProps)(NoteItem);
