import { ADD_NOTE } from '../actions/notesActions';

const notesReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_NOTE: {
      const note = {
        ...action.payload,
        isImportant: false,
        isFinished: false
      };

      return [...state, note];
    }
    default:
      return state;
  }
};

export default notesReducer;
