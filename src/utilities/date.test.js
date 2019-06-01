import {
  getDayOfMonth,
  getDayOfWeek,
  getMonth,
  convertToDate
} from './date';

describe('date utils', () => {
  const date = new Date(2021, 1, 1);

  it('calls getDayOfMonth() and returns proper day number', () => {
    const result = getDayOfMonth(date);

    expect(result).toEqual(1);
  });

  it('calls getDayOfWeek() and returns proper weekday name', () => {
    const result = getDayOfWeek(date);

    expect(result).toEqual('Monday');
  });

  it('calls getMonth() and returns proper month name', () => {
    const result = getMonth(date);

    expect(result).toEqual('February');
  });

  it('calls convertToDate() and returns proper date', () => {
    const result = convertToDate(date);

    expect(result).toEqual(date);
  });
});
