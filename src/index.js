import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import {
  HashRouter,
  Switch,
  Route
} from 'react-router-dom';
import { Provider } from 'react-redux';

import styled, { ThemeProvider } from 'styled-components';
import GlobalStyle from './theme/globalStyle';
import { theme } from './theme/theme';

import store from './store/store';

import Navigation from './components/navigation/Navigation';
import Home from './components/home/Home';
import NotesList from './components/notes/NotesList';
import AddNote from './components/addNote/AddNote';

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 25% 75%;
  height: 100vh;
`;

const StyledContainer = styled.div`
  background-color: ${({ theme }) => theme.color.lightGray};
`;

const App = () => (
  <HashRouter>
    <ThemeProvider theme={theme}>
      <Fragment>
        <GlobalStyle />
        <GridContainer>
          <Navigation />
          <StyledContainer>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/add-note/:noteId" component={AddNote} />
              <Route path="/add-note" component={AddNote} />
              <Route path="/:filter" component={NotesList} />
            </Switch>
          </StyledContainer>
        </GridContainer>
      </Fragment>
    </ThemeProvider>
  </HashRouter>
);

const ROOT = document.getElementById('root');

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  ROOT
);
