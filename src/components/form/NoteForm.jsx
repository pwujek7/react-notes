import React, { Component } from 'react';

import Input from './Input';

class NoteForm extends Component {
  state = {
    title: '',
    content: ''
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { title, content } = this.state;

    console.log(title, content);

    this.setState({
      title: '',
      content: ''
    });
  }

  render() {
    const { title, content } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <Input onChange={this.handleChange} type="text" value={title} name="title" />
        <Input onChange={this.handleChange} type="text" value={content} name="content" />
        <button type="submit">SAVE</button>
      </form>
    );
  }
}

export default NoteForm;
