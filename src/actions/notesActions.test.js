import {
  addNote,
  toggleFinish,
  toggleImportant,
  deleteNote,
  editNote,
  ADD_NOTE,
  TOGGLE_FINISH,
  TOGGLE_IMPORTANT,
  DELETE_NOTE,
  EDIT_NOTE
} from './notesActions';

describe('notes actions', () => {
  const note = {
    id: 1,
    title: 'test title',
    content: 'test content',
    day: new Date(),
    isFinished: false,
    isImportant: false
  };

  it('calls addNote() action and creates note', () => {
    const expectedAction = {
      type: ADD_NOTE,
      payload: note
    };

    expect(addNote(note)).toEqual(expectedAction);
  });

  it('calls toggleFinish() action and changes isFinished value', () => {
    const expectedAction = {
      type: TOGGLE_FINISH,
      payload: note.id
    };

    expect(toggleFinish(note.id)).toEqual(expectedAction);
  });

  it('calls toggleImportant() action and changes isImportant value', () => {
    const expectedAction = {
      type: TOGGLE_IMPORTANT,
      payload: note.id
    };

    expect(toggleImportant(note.id)).toEqual(expectedAction);
  });

  it('calls deleteNote() action and deletes note', () => {
    const expectedAction = {
      type: DELETE_NOTE,
      payload: note.id
    };

    expect(deleteNote(note.id)).toEqual(expectedAction);
  });

  it('calls editNote() action and edits note', () => {
    const expectedAction = {
      type: EDIT_NOTE,
      payload: note
    };

    expect(editNote(note)).toEqual(expectedAction);
  });
});
