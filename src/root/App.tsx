import { Header } from 'components/organisms';
import { About, Home, Stuff } from 'components/pages';
import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { THEME } from '../constants';
import GlobalStyles from './GlobalStyles';

function App() {
  return (
    <HashRouter>
      <ThemeProvider theme={THEME}>
        <GlobalStyles />
        <Header />
        <main>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/stuff" component={Stuff} />
          </Switch>
        </main>
      </ThemeProvider>
    </HashRouter>
  );
}

export default App;
