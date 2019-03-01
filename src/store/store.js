import { createStore, combineReducers } from 'redux';
import notesReducer from '../reducers/notesReducer';
import { loadStateFromLocalStorage, saveStateToLocalStorage } from '../utilities/localStorage';

const localStorageState = loadStateFromLocalStorage();

const rootReducer = combineReducers({
  notes: notesReducer
});

const store = createStore(
  rootReducer,
  localStorageState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe(() => {
  saveStateToLocalStorage(store.getState());
});

export default store;
