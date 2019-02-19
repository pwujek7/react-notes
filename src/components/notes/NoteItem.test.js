import React from 'react';
import { shallow } from 'enzyme';

import NoteItem from './NoteItem';

describe('<NoteItem />', () => {
  const note = {
    id: 1,
    title: 'test title',
    content: 'test content',
    day: new Date(),
    isFinished: false,
    isImportant: false
  };

  it('renders without errors', () => {
    shallow(<NoteItem note={note} />);
  });

  it('renders without errors and with proper elements', () => {
    const noteItem = shallow(<NoteItem note={note} />);

    expect(noteItem.find('p')).toHaveLength(3);
    expect(noteItem.find('Input')).toHaveLength(2);
  });

  it('calls handleInputChange() method and changes isFinished to opposite value', () => {
    const noteItem = shallow(<NoteItem note={note} />);
    const event = {
      target: {
        name: 'isFinished',
        value: note.isFinished
      }
    };

    noteItem.instance().handleInputChange(event);
    expect(noteItem.state().isFinished).toEqual(true);
  });

  it('calls handleInputChange() method and changes isImportant to opposite value', () => {
    const noteItem = shallow(<NoteItem note={note} />);
    const event = {
      target: {
        name: 'isImportant',
        value: note.isImportant
      }
    };

    noteItem.instance().handleInputChange(event);
    expect(noteItem.state().isImportant).toEqual(true);
  });
});
