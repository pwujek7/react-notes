import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import NoteForm from '../form/NoteForm';

const StyledAddNote = styled.div`
  position: relative;
`;

const AddNote = (props) => (
  <StyledAddNote>
    <NoteForm noteId={props.match.params.noteId} />
  </StyledAddNote>
);

AddNote.propTypes = {
  match: PropTypes.object.isRequired
};

export default AddNote;
