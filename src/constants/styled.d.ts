import {} from 'styled-components';
import { THEME } from '../constants';

declare module 'styled-components' {
  type Theme = typeof THEME;
  export interface DefaultTheme extends Theme {}
}
