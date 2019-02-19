import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import NoteItem from './NoteItem';

const NotesList = ({ notes }) => (
  <div>
    {
      notes && notes.map(note => (
        <NoteItem key={note.id} note={note} />
      ))
    }
  </div>
);

NotesList.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.object)
};

const mapStateToProps = (state) => {
  return {
    notes: state.notes
  };
};

export default connect(mapStateToProps)(NotesList);
