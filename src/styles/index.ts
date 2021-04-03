import { createGlobalStyle } from 'styled-components';
import { ResetCSS } from './reset-css';
import { Typography } from './typography';

export const GlobalStyle = createGlobalStyle`
    ${ResetCSS}
    ${Typography}
`;
