export const ADD_NOTE = 'ADD_NOTE';
export const TOGGLE_FINISH = 'TOGGLE_FINISH';
export const TOGGLE_IMPORTANT = 'TOGGLE_IMPORTANT';

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
