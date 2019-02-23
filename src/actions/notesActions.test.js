import {
  addNote,
  toggleFinish,
  toggleImportant,
  ADD_NOTE,
  TOGGLE_FINISH,
  TOGGLE_IMPORTANT
} from './notesActions';

describe('notes actions', () => {
  it('calls addNote() action and creates note', () => {
    const note = {
      id: 1,
      title: 'test title',
      content: 'test content',
      day: new Date()
    };

    const expectedAction = {
      type: ADD_NOTE,
      payload: note
    };

    expect(addNote(note)).toEqual(expectedAction);
  });

  it('calls toggleFinish() action and changes isFinished value', () => {
    const note = {
      id: 1,
      title: 'test title',
      content: 'test content',
      day: new Date(),
      isFinished: false
    };

    const expectedAction = {
      type: TOGGLE_FINISH,
      payload: note.id
    };

    expect(toggleFinish(note.id)).toEqual(expectedAction);
  });

  it('calls toggleImportant() action and changes isImportant value', () => {
    const note = {
      id: 1,
      title: 'test title',
      content: 'test content',
      day: new Date(),
      isImportant: false
    };

    const expectedAction = {
      type: TOGGLE_IMPORTANT,
      payload: note.id
    };

    expect(toggleImportant(note.id)).toEqual(expectedAction);
  });
});
