import GlobalFonts from 'assets/fonts/fonts';
import { Header } from 'components/organisms';
import { About, Home, NotFound, Shop } from 'components/pages';
import { useToggle, useWindowSize } from 'hooks';
import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import GlobalStyles from 'root/GlobalStyles';
import styled, { ThemeProvider } from 'styled-components/macro';
import { BREAKPOINT_SIZES, THEME } from '../constants';

const App = () => {
  const [isToggled, setIsToggled] = useToggle();
  const { width } = useWindowSize();
  const isMobile = width < BREAKPOINT_SIZES.med;

  return (
    <HashRouter>
      <ThemeProvider theme={THEME}>
        <GlobalStyles />
        <GlobalFonts />
        <Header isMobile={isMobile} isToggled={isToggled} onClick={setIsToggled} />
        <main>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/shop" component={Shop} />
            <Route exact path="*" component={NotFound} />
          </Switch>
        </main>
        {isMobile && <Overlay isMobileMenuPresent={isToggled} />}
      </ThemeProvider>
    </HashRouter>
  );
};

const Overlay = styled.div`
  ${(props: { isMobileMenuPresent: boolean }) =>
    props.isMobileMenuPresent ? 'display: block;' : 'display: none;'}
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  /* top matches the height of header */
  top: 8.4rem;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`;

export default App;
