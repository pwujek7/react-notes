import { getFilteredNotes } from './notes';

describe('getFilteredNotes()', () => {
  const noteOne = {
    id: 1,
    title: 'test title 1',
    content: 'test content 1',
    isFinished: false,
    isImportant: false,
    day: new Date(2029, 1, 1)
  };

  const noteTwo = {
    id: 2,
    title: 'test title 2',
    content: 'test content 2',
    isFinished: false,
    isImportant: true,
    day: new Date(2029, 1, 2)
  };

  const noteThree = {
    id: 3,
    title: 'test title 3',
    content: 'test content 3',
    isFinished: true,
    isImportant: false,
    day: new Date(2029, 1, 3)
  };

  const noteFour = {
    id: 4,
    title: 'test title 4',
    content: 'test content 4',
    isFinished: false,
    isImportant: false,
    day: new Date(2009, 1, 1)
  };

  const notes = [noteOne, noteTwo, noteThree, noteFour];

  it('returns all notes', () => {
    const result = getFilteredNotes(notes, 'all');

    expect(result).toEqual(notes);
  });

  it('returns important notes', () => {
    const result = getFilteredNotes(notes, 'important');

    expect(result).toEqual([noteTwo]);
  });

  it('returns finished notes', () => {
    const result = getFilteredNotes(notes, 'finished');

    expect(result).toEqual([noteThree]);
  });

  it('returns expired notes', () => {
    const result = getFilteredNotes(notes, 'expired');

    expect(result).toEqual([noteFour]);
  });

  it('returns null if there is no filter', () => {
    const result = getFilteredNotes(notes);

    expect(result).toEqual(null);
  });
});
