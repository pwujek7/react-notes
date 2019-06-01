import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import uuidv1 from 'uuid';
import styled from 'styled-components';

import { addNote, editNote } from '../../actions/notesActions';
import { StyledButton } from '../common-styled/Button';

import TextInput from './fields/TextInput';
import TextareaInput from './fields/TextareaInput';
import DayPickerInput from './fields/DayPickerInput';

import { getNote } from '../../utilities/notes';
import { getRandomInt } from '../../utilities/random';
import { convertToDate } from '../../utilities/date';

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

const StyledSubmitButton = styled(StyledButton)`
  font-size: 14px; 
  padding: 10px 20px;
  margin-left: auto;
  display: block;
`;

class NoteForm extends Component {
  state = {
    title: this.props.note.length ? this.props.note[0].title : '',
    content: this.props.note.length ? this.props.note[0].content : '',
    day: this.props.note.length ? this.props.note[0].day : '',
    patternId: this.props.note.length ? this.props.note[0].patternId : ''
  }

  handleInputChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleDayChange = (selectedDay) => {
    this.setState({ day: selectedDay });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { title, content, day, patternId } = this.state;
    const { noteId: id, addNote, editNote } = this.props;

    if (id) {
      editNote({ id, title, content, day, patternId });
    } else {
      const id = uuidv1();
      const patternId = getRandomInt(4);
      addNote({ id, title, content, day, patternId });
    }

    this.setState({
      title: '',
      content: '',
      day: null
    });
  }

  render() {
    const { title, content, day } = this.state;
    const date = convertToDate(day);

    return (
      <StyledForm onSubmit={this.handleSubmit}>
        <TextInput onChange={this.handleInputChange} value={title} name="title" placeholder="type title here..." />
        <TextareaInput onChange={this.handleInputChange} value={content} name="content" placeholder="type content here..." />
        <DayPickerInput onChange={this.handleDayChange} value={date} name="day" />
        <StyledSubmitButton type="submit">SAVE</StyledSubmitButton>
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
    note: getNote(state, ownProps)
  };
};

const mapDispatchToProps = {
  addNote,
  editNote
};

export default connect(mapStateToProps, mapDispatchToProps)(NoteForm);
