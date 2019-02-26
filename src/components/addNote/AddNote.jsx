import React from 'react';
import PropTypes from 'prop-types';

import NoteForm from '../form/NoteForm';

const AddNote = (props) => (
  <div>
    <h1>Add note view</h1>
    <NoteForm noteId={props.match.params.noteId} />
  </div>
);

AddNote.propTypes = {
  match: PropTypes.object.isRequired
};

export default AddNote;
