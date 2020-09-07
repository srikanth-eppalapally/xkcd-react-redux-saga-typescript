import React from 'react';
import { HashRouter as Router, Route, Switch,  BrowserRouter } from 'react-router-dom';
import './App.css';
import { Provider } from 'react-redux';
import configureStore from './State/Configure.store';

import { AppContainer, Global } from './styles';
import { ComicsGrid } from './Containers/ComicsGrid';
import { ComicDetails } from './Containers/ComicDetails';


const { store } = configureStore();
function App() {
  return (
    <AppContainer>
      <Provider store={store}>
        <header className="header"></header>
        <Router >
          <Global />
          <main className="main">
            <BrowserRouter>
              <Switch>
                <Route name="comics" exact path="/">
                  <ComicsGrid />
                </Route>
                <Route name="comic" path="/comic/:comicNumber">
                  <ComicDetails />
                </Route>
              </Switch>
            </BrowserRouter>
          </main>
        </Router>

      </Provider >
    </AppContainer>
  );
}




export default App;
