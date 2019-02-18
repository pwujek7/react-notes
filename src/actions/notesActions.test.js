import { addNote, ADD_NOTE } from './notesActions';

describe('notes actions', () => {
  it('calls addNote() action and creates note', () => {
    const note = {
      id: 1,
      title: 'test title',
      content: 'test content',
      date: new Date()
    };
    const expectedAction = {
      type: ADD_NOTE,
      payload: note
    };

    expect(addNote(note)).toEqual(expectedAction);
  });
});
