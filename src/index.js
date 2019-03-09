import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import {
  HashRouter,
  Switch,
  Route
} from 'react-router-dom';
import { Provider } from 'react-redux';

import styled, { createGlobalStyle } from 'styled-components';

import store from './store/store';

import Navigation from './components/navigation/Navigation';
import Home from './components/home/Home';
import NotesList from './components/notes/NotesList';
import AddNote from './components/addNote/AddNote';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 25% 75%;
  height: 100vh;
`;

const App = () => (
  <HashRouter>
    <Fragment>
      <GlobalStyle />
      <GridContainer>
        <Navigation />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/add-note/:noteId" component={AddNote} />
          <Route path="/add-note" component={AddNote} />
          <Route path="/:filter" component={NotesList} />
        </Switch>
      </GridContainer>
    </Fragment>
  </HashRouter>
);

const ROOT = document.getElementById('root');

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  ROOT
);
