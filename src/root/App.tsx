import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { Header } from '../components/organisms';
import { About, Home, Stuff } from '../components/pages';
import GlobalStyles from './GlobalStyles';

function App() {
  return (
    <HashRouter basename={process.env.PUBLIC_URL}>
      <GlobalStyles />
      <Header />
      <main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/stuff" component={Stuff} />
        </Switch>
      </main>
    </HashRouter>
  );
}

export default App;
