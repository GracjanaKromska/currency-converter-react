import { createGlobalStyle } from "styled-components";
import background from "./background.png";

export const GlobalStyle = createGlobalStyle`
    html {
        box-sizing: border-box;
    }

    *, ::after, ::before {
        box-sizing: inherit;
    }

    body {
        font-family: 'Lato', sans-serif;
        max-width: 500px;
        min-height: 300px;
        margin: 0 auto;
        padding: 0 20px;
        background-image: url("${background}");
        background-size: cover;
        background-position: center;
    }
`;