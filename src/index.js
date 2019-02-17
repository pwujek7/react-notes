import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import {
  HashRouter,
  Switch,
  Route
} from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './store/store';

import Navigation from './components/navigation/Navigation';
import Home from './components/home/Home';
import Notes from './components/notes/Notes';
import AddNote from './components/addNote/AddNote';

const ROOT = document.getElementById('root');

const App = () => (
  <HashRouter>
    <Fragment>
      <Navigation />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/add-note" component={AddNote} />
        <Route path="/:filter" component={Notes} />
      </Switch>
    </Fragment>
  </HashRouter>
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  ROOT
);
