import {
  ADD_NOTE,
  TOGGLE_FINISH,
  TOGGLE_IMPORTANT,
  DELETE_NOTE
} from '../actions/notesActions';

const notesReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_NOTE: {
      const note = {
        ...action.payload,
        isFinished: false,
        isImportant: false
      };

      return [...state, note];
    }

    case TOGGLE_FINISH: {
      const updatedNotes = state.map(note => {
        return note.id === action.payload
          ? {
            ...note,
            isFinished: !note.isFinished
          }
          : note;
      });

      return [...updatedNotes];
    }

    case TOGGLE_IMPORTANT: {
      const updatedNotes = state.map(note => {
        return note.id === action.payload
          ? {
            ...note,
            isImportant: !note.isImportant
          }
          : note;
      });

      return [...updatedNotes];
    }

    case DELETE_NOTE: {
      const updatedNotes = state.filter(note => note.id !== action.payload);

      return [...updatedNotes];
    }

    default:
      return state;
  }
};

export default notesReducer;
