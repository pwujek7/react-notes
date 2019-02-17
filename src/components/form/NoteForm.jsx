import React, { Component } from 'react';

import Input from './Input';
import DayPickerInput from './DayPickerInput';

class NoteForm extends Component {
  state = {
    title: '',
    content: '',
    day: null
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleDayChange = (selectedDay) => {
    this.setState({ day: selectedDay });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { title, content, day } = this.state;

    console.log(title, content, day);

    this.setState({
      title: '',
      content: '',
      day: null
    });
  }

  render() {
    const { title, content, day } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <Input onChange={this.handleChange} type="text" value={title} name="title" />
        <Input onChange={this.handleChange} type="text" value={content} name="content" />
        <DayPickerInput onChange={this.handleDayChange} value={day} name="day" />
        <button type="submit">SAVE</button>
      </form>
    );
  }
}

export default NoteForm;
