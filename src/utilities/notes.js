export const getFilteredNotes = (notes, filter) => {
  switch (filter) {
    case 'all':
      return notes;
    case 'important':
      return notes.filter(note => note.isImportant && !note.isFinished);
    case 'finished':
      return notes.filter(note => note.isFinished);
    case 'expired':
      return notes.filter(note => note.day < new Date());
    default:
      return null;
  }
};
