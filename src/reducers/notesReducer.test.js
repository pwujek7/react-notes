import notesReducer from './notesReducer';
import { addNote } from '../actions/notesActions';

describe('notesRecuder()', () => {
  const initialState = [];
  const note = {
    id: 1,
    title: 'test title',
    content: 'test content',
    date: new Date()
  };

  it('returns initial state if no action is defined', () => {
    const state = notesReducer(initialState, {});

    expect(state).toEqual([]);
  });

  it('returns initial state when no state is passed', () => {
    const state = notesReducer(undefined, {});

    expect(state).toEqual([]);
  });

  it('returns new state with added note', () => {
    const state = notesReducer(initialState, addNote(note));

    expect(state).toEqual([
      {
        ...note,
        isFinished: false,
        isImportant: false
      }
    ]);
  });

  it('returns new state with appended note', () => {
    const noteOne = {
      ...note,
      isFinished: false,
      isImportant: false
    };
    const noteTwo = {
      id: 2,
      title: 'test title 2',
      content: 'test content 2',
      date: new Date()
    };
    const state = notesReducer([{ ...noteOne }], addNote(noteTwo));

    expect(state).toEqual([
      {
        ...noteOne
      },
      {
        ...noteTwo,
        isFinished: false,
        isImportant: false
      }
    ]);
  });

  it('returns new old state', () => {
    const noteOne = {
      ...note,
      isFinished: false,
      isImportant: false
    };
    const state = notesReducer([{ ...noteOne }], {});

    expect(state).toEqual([
      {
        ...noteOne
      }
    ]);
  });
});
