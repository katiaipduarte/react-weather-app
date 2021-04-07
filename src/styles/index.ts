import { createGlobalStyle } from 'styled-components';
import { ResetCSS } from './reset-css';
import { Typography } from './typography';

export const GlobalStyle = createGlobalStyle`
    ${ResetCSS}
    ${Typography}

    body {
        min-width: 360px;
        display: flex;
        min-height: 100vh;
        flex-direction: column;

        main {
            height: calc(100vh - 100px);
            padding: 0;
            flex: 1;
            padding: 25rem;

            h1, h2, h3, h4, h5, h6, p {
                color: white;
                cursor: default;
            }

            h1 {
                font-size: 35rem;
            }

            h2 {
                font-size: 25rem;
            }

            h3 {
                font-size: 20rem;
            }

            svg {
                color: white;
            }
        }
    }
`;
