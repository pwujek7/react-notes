import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import NoteItem from './NoteItem';

import { getFilteredNotes } from '../../utilities/notes';

const NotesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 25px;
`;

const NotesList = ({ notes }) => (
  <NotesGrid>
    {
      notes && notes.map(note => (
        <NoteItem key={note.id} note={note} />
      ))
    }
  </NotesGrid>
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
