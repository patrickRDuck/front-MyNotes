import { createGlobalStyle } from "styled-components";
import { IPropsTheme } from "./theme";

export const GlobalStyles = createGlobalStyle<IPropsTheme>`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    :root {
        font-family: 'Roboto Slab', serif;
    }

    body {
        background-color: ${props => props.theme.COLORS.BACKGROUND_800};
        color: ${({theme}) => theme.COLORS.WHITE};

        -webkit-font-smoothing: antialiased;

        
        ::-webkit-scrollbar-track {
            background: transparent;
        }

        ::-webkit-scrollbar-thumb {
            background-color: ${props => props.theme.COLORS.ORANGE};
            border-radius: 8px;
        }

        ::-webkit-scrollbar {
            width: 5px;
        }
    }

    input, button, textarea {
        outline: none;
    }

    a {
        text-decoration: none;
    }

    button, a {
        cursor: pointer;
        transition: filter 0.2s;
    }

    button:hover, a:hover {
        filter: brightness(0.9);
    }
`