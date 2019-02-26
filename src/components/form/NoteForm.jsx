import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import uuidv1 from 'uuid';

import { addNote, editNote } from '../../actions/notesActions';

import TextInput from './fields/TextInput';
import DayPickerInput from './fields/DayPickerInput';

class NoteForm extends Component {
  state = {
    title: !this.props.note.length ? '' : this.props.note[0].title,
    content: !this.props.note.length ? '' : this.props.note[0].content,
    day: !this.props.note.length ? '' : this.props.note[0].day
  }

  handleInputChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleDayChange = (selectedDay) => {
    this.setState({ day: selectedDay });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { title, content, day } = this.state;
    const { noteId: id, addNote, editNote } = this.props;

    if (id) {
      editNote({ id, title, content, day });
    } else {
      const id = uuidv1();
      addNote({ id, title, content, day });
    }

    this.setState({
      title: '',
      content: '',
      day: null
    });
  }

  render() {
    const { title, content, day } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <TextInput onChange={this.handleInputChange} value={title} name="title" />
        <TextInput onChange={this.handleInputChange} value={content} name="content" />
        <DayPickerInput onChange={this.handleDayChange} value={day} name="day" />
        <button type="submit">SAVE</button>
      </form>
    );
  }
}

NoteForm.propTypes = {
  addNote: PropTypes.func.isRequired,
  editNote: PropTypes.func,
  note: PropTypes.array,
  noteId: PropTypes.string
};

const mapStateToProps = (state, ownProps) => {
  return {
    note: state.notes.filter(note => note.id === ownProps.noteId)
  };
};

const mapDispatchToProps = {
  addNote,
  editNote
};

export default connect(mapStateToProps, mapDispatchToProps)(NoteForm);
