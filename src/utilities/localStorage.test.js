import { loadStateFromLocalStorage, saveStateToLocalStorage } from './localStorage';

describe('localStorage utils', () => {
  let originalLocalStorage;

  beforeAll(() => {
    originalLocalStorage = window.localStorage;
    delete window.localStorage;
    Object.defineProperty(window, 'localStorage', {
      writable: true,
      value: {
        getItem: jest.fn().mockName('getItem'),
        setItem: jest.fn().mockName('setItem')
      }
    });
  });

  beforeEach(() => {
    localStorage.getItem.mockClear();
    localStorage.setItem.mockClear();
  });

  afterAll(() => {
    Object.defineProperty(window, 'localStorage', { writable: true, value: originalLocalStorage });
  });

  it('calls loadStateFromLocalStorage() and loads data from localStorage', () => {
    const key = 'state';
    const data = { a: 123, b: 'test' };

    localStorage.getItem.mockReturnValueOnce('{"a":123,"b":"test"}');

    const result = loadStateFromLocalStorage();

    expect(result).toEqual(data);
    expect(localStorage.getItem).toHaveBeenCalledWith(key);
    expect(localStorage.getItem).toHaveBeenCalledTimes(1);
  });

  it('calls saveStateToLocalStorage() and saves data in localStorage', () => {
    const key = 'state';
    const data = { a: 123, b: 'test' };

    const result = saveStateToLocalStorage(data);

    expect(result).toEqual(true);
    expect(localStorage.setItem).toHaveBeenCalledWith(key, '{"a":123,"b":"test"}');
    expect(localStorage.setItem).toHaveBeenCalledTimes(1);
  });
});
