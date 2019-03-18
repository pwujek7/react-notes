import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import Checkbox from '../form/fields/Checkbox';

import {
  toggleFinish,
  toggleImportant,
  deleteNote
} from '../../actions/notesActions';

import { getDayOfMonth, getDayOfWeek, getMonth } from '../../utilities/date';

const StyledFlexRow = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: no-wrap;
`;

const StyledNote = styled.div`
  width: 100%;
  border: 1px solid #000;
`;

const StyledNoteBox = styled.div`
  position: relative;
  min-height: 100px;
  border: 1px solid #000;
`;

const StyledDateBox = styled.div`
  position: absolute;
  top: -15px;
  right: 15px;
  border: 1px solid #000;
`;

const StyledMenuWrapper = styled(StyledFlexRow)`
  justify-content: space-between;
  align-items: center;
  height: 50px;
  border: 1px solid #000;
`;

const StyledMenuBox = styled(StyledFlexRow)`
  border: 1px solid #000;
`;

const StyledNoteContent = styled.p`
  height: 100px;
  margin: 15px auto;
  padding: 15px;
  overflow: hidden;
`;

const StyledDateText = styled.span`
  display: block;
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
  position: absolute;
  bottom: 0;
  left: 30px;
`;

const StyledDeleteButton = styled.button`
  margin: 0;
  padding: 0;
  border: none;
  background-color: transparent;
  width: 24px;
  height: 24px;
  background-image: url('src/resources/icons/ico_delete.svg');
  cursor: pointer;
  transition: .5s;

  &:hover {
    background-image: url('src/resources/icons/ico_delete_hover.svg');
  }
`;

const StyledLink = styled(NavLink)`
  width: 24px;
  height: 24px;
  background-image: url('src/resources/icons/ico_edit.svg');
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
          <StyledMenuWrapper>
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
            </StyledMenuBox>
            <StyledMenuBox>
              <StyledDeleteButton type="button" onClick={this.handleDelete} />
              <StyledLink to={`/add-note/${id}`} />
            </StyledMenuBox>
          </StyledMenuWrapper>
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
