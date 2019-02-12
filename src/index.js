import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import Navigation from './components/navigation/Navigation';
import Home from './components/home/Home';
import Notes from './components/notes/Notes';
import AddNote from './components/addNote/AddNote';

const ROOT = document.getElementById('root');

const App = () => (
  <Router>
    <Fragment>
      <Navigation />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/:filter" component={Notes} />
        <Route path="/add-note" component={AddNote} />
      </Switch>
    </Fragment>
  </Router>
);

ReactDOM.render(<App />, ROOT);
