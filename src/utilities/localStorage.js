export const loadStateFromLocalStorage = () => {
  try {
    const serializedState = localStorage.getItem('state');

    if (serializedState === null) {
      return undefined;
    }

    return JSON.parse(serializedState);
  } catch (error) {
    return null;
  }
};

export const saveStateToLocalStorage = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('state', serializedState);
    return true;
  } catch (error) {
    return false;
  }
};

export const clearLocalStorage = () => {
  localStorage.clear();
  window.location.reload();
};
