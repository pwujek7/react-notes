import React, { Component } from 'react';

class NoteForm extends Component {
  state = {
    test: 'test'
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state.test);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <button type="submit">SAVE</button>
      </form>
    );
  }
}

export default NoteForm;
