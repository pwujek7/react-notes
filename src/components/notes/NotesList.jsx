import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import NoteItem from './NoteItem';

import { getFilteredNotes } from '../../utilities/notes';

const StyledNotesList = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 50px;
  margin: 50px;
`;

const NotesList = ({ notes }) => (
  <StyledNotesList>
    {
      notes && notes.map(note => (
        <NoteItem key={note.id} note={note} />
      ))
    }
  </StyledNotesList>
);

NotesList.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.object)
};

const mapStateToProps = (state, ownProps) => {
  return {
    notes: getFilteredNotes(state.notes, ownProps.match.params.filter)
  };
};

export default connect(mapStateToProps)(NotesList);
