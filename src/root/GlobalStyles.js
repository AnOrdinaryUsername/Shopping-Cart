import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    /* http://meyerweb.com/eric/tools/css/reset/ 
    v2.0 | 20110126
    License: none (public domain)
    */

    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed, 
    figure, figcaption, footer, header, hgroup, 
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font: inherit;
        vertical-align: baseline;
    }

    /* HTML5 display-role reset for older browsers */
    article, aside, details, figcaption, figure, 
    footer, header, hgroup, menu, nav, section {
        display: block;
    }

    body {
        line-height: 1;
    }
    ol, ul {
        list-style: none;
    }

    blockquote, q {
        quotes: none;
    }

    blockquote:before, blockquote:after,
    q:before, q:after {
        content: '';
        content: none;
    }

    table {
        border-collapse: collapse;
        border-spacing: 0;
    }

    /* ------------ End of CSS Reset ------------ */

    *,
    *::after,
    *::before {
        box-sizing: border-box;
    }

    @media screen and (prefers-reduced-motion: reduce), (update: slow) {
        *,
        *::before,
        *::after {
            animation-duration: 0s !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0s !important;
            transition-delay: 0s !important;
            animation-delay: 0s !important;
        }
    }

    *:focus:not(:focus-visible) {
        outline: none;
    }

    *:focus-visible {
        outline: 2px auto red;
    }

    /* Default is light theme. */
    :root {
        --bg-color: hsl(204, 15%, 94%);
        --font-color: hsl(0, 0%, 25%);
        --header-bg: hsl(0, 0%, 97%);
        --invert-bg: hsl(0, 0%, 25%);
        --invert-font: hsl(204, 15%, 94%);
        --button-bg-color: hsl(0, 0%, 26%);
        --button-font-color: hsl(204, 15%, 94%);
        --heading-color: hsl(0, 0%, 26%);
        --code-bg: hsl(0, 0%, 87%);
    }

    [data-theme='dark'] {
        --bg-color: hsl(232, 20%, 17%);
        --font-color: hsl(0, 0%, 96%);
        --header-bg: hsl(0, 0%, 11%);
        --invert-bg: hsl(0, 0%, 96%);
        --invert-font: hsl(232, 20%, 17%);
        --heading-color: hsl(0, 0%, 100%);
        --card-shadow: none;
        --win-bg-color: hsl(180, 45%, 29%);
        --win-font-color: hsl(0, 0%, 96%);
        --code-bg: hsl(0, 0%, 25%);
    }

    html {
        background-color: var(--bg-color);
        color: var(--font-color);
        display: flex;
        font-size: 62.5%;
        min-height: 100%;
    }

    a {
        color: inherit;
        text-decoration: none;
    }

    body {
        display: flex;
        flex: 1;
        flex-flow: column nowrap;
        font: 16px/1.65 Nunito, system-ui, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans,
            Helvetica Neue, sans-serif;
        font-size: 1.6em;
        line-height: 1.65;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    button {
        appearance: none;
        background-color: inherit;
        border: none;
        color: inherit;
        cursor: pointer;
        font-family: inherit;
        font-size: inherit;
        line-height: normal;
    }

    code {
        background-color: var(--code-bg);
        font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
        padding: 0 0.3rem;
    }

    em {
        font-style: italic;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        color: var(--heading-color);
        line-height: 1.2;
    }

    header {
        display: flex;
        flex-direction: row-reverse;
        align-items: baseline;
        justify-content: space-between;
        width: 100%;
        max-width: 80rem;
        margin: auto;
        padding: 2rem 3.2rem;

        @media ${(p) => p.theme.breakpoints.med} {
            flex-direction: row;
        }
    }

    main {
        flex: 1;
        overflow: hidden;
    }

    small {
        font-size: smaller;
    }

    strong {
        font-weight: bold;
    }

    #root {
        display: flex;
        flex-direction: column;
        height: 100%;
    }
`;

export default GlobalStyles;
