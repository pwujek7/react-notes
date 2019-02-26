import notesReducer from './notesReducer';
import {
  addNote,
  toggleFinish,
  toggleImportant,
  deleteNote,
  editNote
} from '../actions/notesActions';

describe('notesReducer()', () => {
  const initialState = [];
  const note = {
    id: 1,
    title: 'test title',
    content: 'test content',
    day: new Date()
  };

  const noteTwo = {
    id: 2,
    title: 'test title 2',
    content: 'test content 2',
    day: new Date(),
    isFinished: false,
    isImportant: false
  };

  const noteThree = {
    id: 3,
    title: 'test title 3',
    content: 'test content 3',
    day: new Date(),
    isFinished: false,
    isImportant: false
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

  it('returns new state with finished notes', () => {
    const state = notesReducer([noteTwo, noteThree], toggleFinish(noteTwo.id));

    expect(state).toEqual([
      {
        ...noteTwo,
        isFinished: true
      },
      {
        ...noteThree
      }
    ]);
  });

  it('returns new state with important notes', () => {
    const state = notesReducer([noteTwo, noteThree], toggleImportant(noteThree.id));

    expect(state).toEqual([
      {
        ...noteTwo
      },
      {
        ...noteThree,
        isImportant: true
      }
    ]);
  });

  it('returns new state without deleted notes', () => {
    const state = notesReducer([noteTwo, noteThree], deleteNote(noteThree.id));

    expect(state).toEqual([
      {
        ...noteTwo
      }
    ]);
  });

  it('returns new state with edited notes', () => {
    const state = notesReducer([noteTwo], editNote(noteTwo));

    expect(state).toEqual([
      {
        ...noteTwo
      }
    ]);
  });

  it('returns new state with no edited notes', () => {
    const state = notesReducer([noteTwo], editNote(noteThree));

    expect(state).toEqual([
      {
        ...noteTwo
      }
    ]);
  });
});
