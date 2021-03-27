import { DefaultTheme } from 'styled-components/macro';

export const BREAKPOINT_SIZES = {
  sm: 576,
  med: 768,
  lg: 992,
};

/*
 *  Mobile first responsive breakpoints based on Bootstrap.
 *  https://getbootstrap.com/docs/4.0/layout/overview/#responsive-breakpoints
 */
export const BREAKPOINTS = {
  sm: `(min-width: ${BREAKPOINT_SIZES.sm}px)`,
  med: `(min-width: ${BREAKPOINT_SIZES.med}px)`,
  lg: `(min-width: ${BREAKPOINT_SIZES.lg}}px)`,
};

export const COLORS = {
  gray: {
    '100': 'hsl(208, 21%, 93%)',
    '300': 'hsl(210, 16%, 76%)',
    '400': 'hsl(208, 12%, 58%)',
    '500': 'hsl(207, 12%, 43%',
    '900': 'hsl(209, 15%, 28%)',
  },
  current: 'currentColor',
};

export const THEME: DefaultTheme = {
  breakpoints: BREAKPOINTS,
};
