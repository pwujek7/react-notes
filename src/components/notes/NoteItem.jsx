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
  border-top: 5px solid #C5DDF4;
  background-color: #DFECF9;
`;

const StyledNoteBox = styled.div`
  position: relative;
  min-height: 100px;

  &:first-child {
    background-color: #F8FBFD;
  }
`;

const StyledDateBox = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #5E91C5;
  border-bottom: 5px solid #C5DDF4;
  position: absolute;
  top: -15px;
  right: 15px;
`;

const StyledMenuBox = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: no-wrap;
  height: 50px;
  background-color: #C5DDF4;
`;

const StyledNoteContent = styled.p`
  height: 100px;
  color: #5E91C5;
  margin: 15px auto;
  padding: 15px;
  overflow: hidden;
`;

const StyledDateText = styled.span`
  color: #FFF;
  text-align: center;
  font-size: 18px;
  font-weight: normal;

  &:nth-child(2) {
    text-transform: uppercase;
  }

  &:nth-child(3) {
    font-size: 12px;
    text-transform: lowercase;
    margin-bottom: 10px;
  }
`;

const StyledDateTextBig = styled(StyledDateText)`
  font-size: 64px;
  font-weight: bold;
  margin: 0 15px;
`;

const StyledTitle = styled.p`
  font-size: 32px;
  font-weight: bold;
  color: #5E91C5;
  position: absolute;
  bottom: -15px;
  left: 25px;
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
          <StyledTitle>{title}</StyledTitle>
          <StyledDateBox>
            <StyledDateTextBig>{dayOfMonth}</StyledDateTextBig>
            <StyledDateText>{month}</StyledDateText>
            <StyledDateText>{dayOfWeek}</StyledDateText>
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
