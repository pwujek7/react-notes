import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import NoteForm from '../form/NoteForm';

const StyledAddNote = styled.div`
  position: relative;
  height: 100%;
`;

const AddNote = ({ match }) => (
  <StyledAddNote>
    <NoteForm noteId={match.params.noteId} />
  </StyledAddNote>
);

AddNote.propTypes = {
  match: PropTypes.object.isRequired
};

export default AddNote;
