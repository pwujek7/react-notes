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
    expect(noteItem.find('Checkbox')).toHaveLength(2);
  });
});
