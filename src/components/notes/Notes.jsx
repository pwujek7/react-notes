import React from 'react';
import PropTypes from 'prop-types';

const Notes = ({ match }) => (
  <div>
    <h1>{ match.params.filter } Notes view </h1>
  </div>
);

Notes.propTypes = {
  match: PropTypes.object
};

export default Notes;
