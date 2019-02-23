import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import uuidv1 from 'uuid';

import { addNote } from '../../actions/notesActions';

import TextInput from './fields/TextInput';
import DayPickerInput from './fields/DayPickerInput';

class NoteForm extends Component {
  state = {
    title: '',
    content: '',
    day: null
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
    const id = uuidv1();

    this.props.addNote({ id, title, content, day });

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
  addNote: PropTypes.func.isRequired
};

const mapDispatchToProps = {
  addNote
};

export default connect(null, mapDispatchToProps)(NoteForm);
