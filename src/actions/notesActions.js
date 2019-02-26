export const ADD_NOTE = 'ADD_NOTE';
export const TOGGLE_FINISH = 'TOGGLE_FINISH';
export const TOGGLE_IMPORTANT = 'TOGGLE_IMPORTANT';
export const DELETE_NOTE = 'DELETE_NOTE';
export const EDIT_NOTE = 'EDIT_NOTE';

export const addNote = (note) => ({
  type: ADD_NOTE,
  payload: note
});

export const toggleFinish = (id) => ({
  type: TOGGLE_FINISH,
  payload: id
});

export const toggleImportant = (id) => ({
  type: TOGGLE_IMPORTANT,
  payload: id
});

export const deleteNote = (id) => ({
  type: DELETE_NOTE,
  payload: id
});

export const editNote = (note) => ({
  type: EDIT_NOTE,
  payload: note
});
