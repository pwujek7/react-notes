import React from 'react';
import { shallow } from 'enzyme';

import { NoteItem } from './NoteItem';

describe('<NoteItem />', () => {
  const toggleFinish = jest.fn();
  const toggleImportant = jest.fn();
  const note = {
    id: 1,
    title: 'test title',
    content: 'test content',
    day: new Date(),
    isFinished: false,
    isImportant: false,
  };

  it('renders without errors', () => {
    shallow(<NoteItem note={note} />);
  });

  it('renders without errors and with proper elements', () => {
    const noteItem = shallow(<NoteItem note={note} />);

    expect(noteItem.find('p')).toHaveLength(3);
    expect(noteItem.find('Checkbox')).toHaveLength(2);
  });

  it('calls changeFinish() method and changes isFinished to opposite value', () => {
    const noteItem = shallow(
      <NoteItem note={note} toggleFinish={toggleFinish} toggleImportant={toggleImportant} />
    );

    noteItem.instance().changeFinish();
    expect(noteItem.state().isFinished).toEqual(true);
    expect(toggleFinish).toHaveBeenCalledWith(note.id);
  });

  it('calls changeImportant() method and changes isImportant to opposite value', () => {
    const noteItem = shallow(
      <NoteItem note={note} toggleFinish={toggleFinish} toggleImportant={toggleImportant} />
    );

    noteItem.instance().changeImportant();
    expect(noteItem.state().isImportant).toEqual(true);
    expect(toggleImportant).toHaveBeenCalledWith(note.id);
  });
});
