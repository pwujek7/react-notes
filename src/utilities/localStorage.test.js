import {
  loadStateFromLocalStorage,
  saveStateToLocalStorage,
  clearLocalStorage
} from './localStorage';

describe('localStorage utils', () => {
  let originalLocalStorage;

  beforeAll(() => {
    originalLocalStorage = window.localStorage;
    delete window.localStorage;
    Object.defineProperty(window, 'localStorage', {
      writable: true,
      value: {
        getItem: jest.fn().mockName('getItem'),
        setItem: jest.fn().mockName('setItem'),
        clear: jest.fn().mockName('clear')
      }
    });
    Object.defineProperty(window.location, 'reload', {
      configurable: true,
    });
  });

  beforeEach(() => {
    localStorage.getItem.mockClear();
    localStorage.setItem.mockClear();
    localStorage.clear.mockClear();
    window.location.reload = jest.fn();
  });

  afterAll(() => {
    Object.defineProperty(window, 'localStorage', { writable: true, value: originalLocalStorage });
  });

  const key = 'state';
  const data = { a: 123, b: 'test' };
  const error = new Error();

  it('calls loadStateFromLocalStorage() and loads data from localStorage', () => {
    localStorage.getItem.mockReturnValueOnce('{"a":123,"b":"test"}');

    const result = loadStateFromLocalStorage();

    expect(result).toEqual(data);
    expect(localStorage.getItem).toHaveBeenCalledWith(key);
    expect(localStorage.getItem).toHaveBeenCalledTimes(1);
  });

  it('calls loadStateFromLocalStorage() and returns undefined if there is no data in localStorage', () => {
    const data = undefined;

    localStorage.getItem.mockReturnValueOnce(null);

    const result = loadStateFromLocalStorage();

    expect(result).toEqual(data);
    expect(localStorage.getItem).toHaveBeenCalledWith(key);
    expect(localStorage.getItem).toHaveBeenCalledTimes(1);
  });

  it('calls loadStateFromLocalStorage() and handles error', () => {
    localStorage.getItem.mockImplementationOnce(() => { throw error; });

    const result = loadStateFromLocalStorage();

    expect(result).toEqual(null);
  });

  it('calls saveStateToLocalStorage() and saves data in localStorage', () => {
    const result = saveStateToLocalStorage(data);

    expect(result).toEqual(true);
    expect(localStorage.setItem).toHaveBeenCalledWith(key, '{"a":123,"b":"test"}');
    expect(localStorage.setItem).toHaveBeenCalledTimes(1);
  });

  it('calls saveStateToLocalStorage() and handles error', () => {
    localStorage.setItem.mockImplementationOnce(() => { throw error; });

    const result = saveStateToLocalStorage(data);

    expect(result).toEqual(false);
  });

  it('calls clearLocalStorage() and deletes data from localStorage', () => {
    localStorage.clear.mockReturnValueOnce(null);

    const result = clearLocalStorage();

    expect(result).toEqual(undefined);
    expect(localStorage.clear).toHaveBeenCalledTimes(1);
    expect(window.location.reload).toHaveBeenCalledTimes(1);
  });
});
