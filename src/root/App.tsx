import GlobalFonts from 'assets/fonts';
import { Footer, Header } from 'components/organisms';
import { About, Cart, FAQ, Home, NotFound, Shop } from 'components/pages';
import { useOnScreen, useToggle, useWindowSize } from 'hooks';
import React, { useEffect, useRef, useState } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import GlobalStyles from 'root/GlobalStyles';
import styled, { ThemeProvider } from 'styled-components/macro';
import { BREAKPOINT_SIZES, THEME } from '../constants';
import CartContext, { CartStorage } from './CartContext';

const App = () => {
  const [cartStorage, setCartStorage] = useState<CartStorage>([]);
  const [isToggled, setIsToggled] = useToggle();

  const MOBILE_HEADER_HEIGHT = '215px';
  const headerRef: any = useRef<HTMLDivElement>();
  const isHeaderVisible = useOnScreen<HTMLDivElement>(headerRef, MOBILE_HEADER_HEIGHT);

  const { width } = useWindowSize();
  const isMobile = width < BREAKPOINT_SIZES.med;

  // Removes mobile navigation when header is no longer visible
  // (e.g. changing sticky header to static).
  useEffect(() => {
    if (isToggled && !isHeaderVisible) {
      setIsToggled();
    }
  }, [isHeaderVisible, isToggled, setIsToggled]);

  return (
    <HashRouter>
      <ThemeProvider theme={THEME}>
        <GlobalStyles />
        <GlobalFonts />
        <CartContext.Provider value={{ cartStorage, setCartStorage }}>
          <Header
            headerRef={headerRef}
            isMobile={isMobile}
            isToggled={isToggled}
            updateHamburgerIcon={setIsToggled}
          />
          <main>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/about" component={About} />
              <Route exact path="/shop" component={Shop} />
              <Route exact path="/faq" component={FAQ} />
              <Route exact path="/cart" component={Cart} />
              <Route exact path="*" component={NotFound} />
            </Switch>
          </main>
          <Footer />
          {isMobile && <Overlay isMobileMenuPresent={isToggled} />}
        </CartContext.Provider>
      </ThemeProvider>
    </HashRouter>
  );
};

const Overlay = styled.div`
  display: ${(props: { isMobileMenuPresent: boolean }) =>
    props.isMobileMenuPresent ? 'block' : 'none'};
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
