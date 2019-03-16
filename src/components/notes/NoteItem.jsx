import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import Checkbox from '../form/fields/Checkbox';

import {
  toggleFinish,
  toggleImportant,
  deleteNote
} from '../../actions/notesActions';

import { getDayOfMonth, getDayOfWeek, getMonth } from '../../utilities/date';

const StyledNote = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: no-wrap;
  width: 100%;
  border: 1px solid red;
`;

const StyledNoteBox = styled.div`
  position: relative;
  min-height: 100px;
`;

const StyledDateBox = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid green;
  position: absolute;
  top: -25px;
  right: 25px;
`;

const StyledMenuBox = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: no-wrap;
  height: 50px;
  border: 1px solid yellow;
  position: absolute;
  bottom: -25px;
  left: 50%;
  transform: translateX(-50%);
`;

const StyledNoteContent = styled.p`
  height: 75px;
  margin: 0 auto 50px auto;
  padding: 10px;
  overflow: hidden;
`;

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

  handleDelete = () => {
    const { note, deleteNote } = this.props;
    deleteNote(note.id);
  }

  render() {
    const { isFinished, isImportant } = this.state;
    const { id, title, content, day } = this.props.note;
    const dayOfMonth = getDayOfMonth(day);
    const dayOfWeek = getDayOfWeek(day);
    const month = getMonth(day);

    return (
      <StyledNote>
        <StyledNoteBox>
          <p>{title}</p>
          <StyledDateBox>
            <span>{dayOfMonth}</span>
            <span>{month}</span>
            <span>{dayOfWeek}</span>
          </StyledDateBox>
        </StyledNoteBox>
        <StyledNoteBox>
          <StyledNoteContent>{content}</StyledNoteContent>
          <StyledMenuBox>
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
            <button type="button" onClick={this.handleDelete}>Delete</button>
            <Link to={`/add-note/${id}`}>Edit</Link>
          </StyledMenuBox>
        </StyledNoteBox>
      </StyledNote>
    );
  }
}

NoteItem.propTypes = {
  note: PropTypes.object.isRequired,
  toggleFinish: PropTypes.func,
  toggleImportant: PropTypes.func,
  deleteNote: PropTypes.func
};

const mapDispatchToProps = {
  toggleFinish,
  toggleImportant,
  deleteNote
};

export default connect(null, mapDispatchToProps)(NoteItem);
