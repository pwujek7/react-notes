import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import uuidv1 from 'uuid';
import styled from 'styled-components';

import { addNote, editNote } from '../../actions/notesActions';

import TextInput from './fields/TextInput';
import DayPickerInput from './fields/DayPickerInput';

const StyledForm = styled.form`
  background-color: #f5f5f5;
  border: 1px solid #e8eaf6;
  padding: 0 25px 25px 25px;
  box-shadow: 3px 3px 3px 0px rgba(224,224,224,1);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const StyledButton = styled.button`
  color: #e8eaf6;
  background-color: #7986cb;
  border: none;
  font-size: 14px; 
  text-transform: uppercase;
  text-decoration: none;
  padding: 10px 20px;
  margin-left: auto;
  display: block;
  cursor: pointer;
  transition: all ease-out .5s;

  &:hover {
    background-color: #5c6bc0;
  }
`;

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
      <StyledForm onSubmit={this.handleSubmit}>
        <TextInput onChange={this.handleInputChange} value={title} name="title" placeholder="type title here..." />
        <TextInput onChange={this.handleInputChange} value={content} name="content" placeholder="type content here..." />
        <DayPickerInput onChange={this.handleDayChange} value={day} name="day" />
        <StyledButton type="submit">SAVE</StyledButton>
      </StyledForm>
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
