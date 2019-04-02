import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import Checkbox from '../form/fields/Checkbox';
import { StyledFlexRow } from '../common-styled/FlexRow';

import {
  toggleFinish,
  toggleImportant,
  deleteNote
} from '../../actions/notesActions';

import { getDayOfMonth, getDayOfWeek, getMonth } from '../../utilities/date';


const StyledNote = styled.div`
  width: 100%;
  background-image: url('src/resources/patterns/pattern_${props => props.patternId}.png');
  background-repeat: repeat;
  border: 1px solid #e0e0e0;
  border-bottom: 3px solid #5c6bc0;
  box-shadow: 3px 3px 3px 0px rgba(224,224,224,1);
`;

const StyledNoteBox = styled.div`
  position: relative;
  min-height: 100px;
`;

const StyledDateBox = styled.div`
  width: 100px;
  color: #e8eaf6;
  background-color: #5c6bc0;
  border-bottom: 3px solid #7986cb;
  position: absolute;
  top: -15px;
  right: 15px;
`;

const StyledMenuWrapper = styled(StyledFlexRow)`
  height: 50px;
  background-color: #fafafa;
  justify-content: space-between;
  align-items: center;
`;

const StyledMenuBox = styled(StyledFlexRow)`
`;

const StyledNoteContent = styled.p`
  height: 100px;
  color: #212121;
  background-color: #fafafa;
  padding: 5px 15px 15px 15px;
  overflow: hidden;
`;

const StyledDateText = styled.span`
  display: block;
  color: #fafafa;
  text-align: center;
  font-size: 18px;
  font-weight: normal;
  text-align: right;
  margin-right: 15px;

  &:nth-child(2) {
    text-transform: capitalize;
  }

  &:nth-child(3) {
    font-size: 12px;
    font-weight: 700;
    text-transform: uppercase;
    margin-bottom: 10px;
  }
`;

const StyledDateTextBig = styled(StyledDateText)`
  font-size: 64px;
  line-height: 64px;
  font-weight: bold;
  padding-top: 10px;
`;

const StyledTitle = styled.p`
  color: #5c6bc0;
  font-size: 24px;
  font-weight: 700;
  padding: 0 15px 5px 15px;
`;

const StyledDeleteButton = styled.button`
  width: 24px;
  height: 24px;
  margin: 0 10px 0 0;
  padding: 0;
  border: none;
  background-color: transparent;
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
  margin: 0 10px 0 0;
  background-image: url('src/resources/icons/ico_edit.svg');
  cursor: pointer;
  transition: .5s;

  &:hover {
    background-image: url('src/resources/icons/ico_edit_hover.svg');
  }
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
    const { id, title, content, day, patternId } = this.props.note;
    const dayOfMonth = getDayOfMonth(day);
    const dayOfWeek = getDayOfWeek(day);
    const month = getMonth(day);

    return (
      <StyledNote patternId={patternId}>
        <StyledNoteBox>
          <StyledDateBox>
            <StyledDateTextBig>{dayOfMonth}</StyledDateTextBig>
            <StyledDateText>{month}</StyledDateText>
            <StyledDateText>{dayOfWeek}</StyledDateText>
          </StyledDateBox>
        </StyledNoteBox>
        <StyledNoteBox>
          <StyledTitle>{title}</StyledTitle>
          <StyledNoteContent>{content}</StyledNoteContent>
          <StyledMenuWrapper>
            <StyledMenuBox>
              <Checkbox
                id={id}
                name="isFinished"
                onChange={this.changeFinish}
                value={isFinished}
                checked={isFinished}
              />
              <Checkbox
                id={id}
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
