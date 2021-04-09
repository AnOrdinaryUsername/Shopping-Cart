import { createGlobalStyle } from 'styled-components';
import Nunito300woff from './nunito-v16-latin-300.woff';
import Nunito300woff2 from './nunito-v16-latin-300.woff2';
import Nunito600woff from './nunito-v16-latin-600.woff';
import Nunito600woff2 from './nunito-v16-latin-600.woff2';
import Nunito700woff from './nunito-v16-latin-700.woff';
import Nunito700woff2 from './nunito-v16-latin-700.woff2';
import Nunito800woff from './nunito-v16-latin-800.woff';
import Nunito800woff2 from './nunito-v16-latin-800.woff2';
import Nunito900woff from './nunito-v16-latin-900.woff';
import Nunito900woff2 from './nunito-v16-latin-900.woff2';
import Nunito400woff from './nunito-v16-latin-regular.woff';
import Nunito400woff2 from './nunito-v16-latin-regular.woff2';

export default createGlobalStyle`
/* nunito-300 - latin */
@font-face {
    font-family: 'Nunito';
    font-style: normal;
    font-weight: 300;
    src: local(''),
         url(${Nunito300woff2}) format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
         url(${Nunito300woff}) format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
  }

  /* nunito-regular - latin */
  @font-face {
    font-family: 'Nunito';
    font-style: normal;
    font-weight: 400;
    src: local(''),
         url(${Nunito400woff2}) format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
         url(${Nunito400woff}) format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
  }

  /* nunito-600 - latin */
  @font-face {
    font-family: 'Nunito';
    font-style: normal;
    font-weight: 600;
    src: local(''),
         url(${Nunito600woff2}) format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
         url(${Nunito600woff}) format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
  }

  /* nunito-700 - latin */
  @font-face {
    font-family: 'Nunito';
    font-style: normal;
    font-weight: 700;
    src: local(''),
         url(${Nunito700woff2}) format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
         url(${Nunito700woff}) format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
  }

  /* nunito-800 - latin */
  @font-face {
    font-family: 'Nunito';
    font-style: normal;
    font-weight: 800;
    src: local(''),
         url(${Nunito800woff2}) format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
         url(${Nunito800woff}) format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
  }

  /* nunito-900 - latin */
  @font-face {
    font-family: 'Nunito';
    font-style: normal;
    font-weight: 900;
    src: local(''),
         url(${Nunito900woff2}) format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
         url(${Nunito900woff}) format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
  }
`;
