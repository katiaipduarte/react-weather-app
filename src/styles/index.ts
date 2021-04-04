import { createGlobalStyle } from 'styled-components';
import { ResetCSS } from './reset-css';
import { Typography } from './typography';

export const GlobalStyle = createGlobalStyle`
    ${ResetCSS}
    ${Typography}

    body {
        background-image: url(https://picsum.photos/id/1080/6858/4574), linear-gradient(rgb(219, 166, 166), rgb(0, 0, 172));
        background-position: center center;
        background-repeat: no-repeat;
        background-size: cover;
        min-width: 360px;
        display: flex;
        min-height: 100vh;
        flex-direction: column;

        main {
            flex: 1;

            h1, h2, h3, h4, h5, h6, p {
                color: white;
                cursor: default;
                font-weight: bold;
            }

            svg {
                color: white;
            }
        }
    }
`;
