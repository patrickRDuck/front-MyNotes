import styled from "styled-components";
import { IPropsTheme } from "../../styles/theme";

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-rows: 105px auto;
    grid-template-areas: 
    "header"
    "content"
    ;

    > main {
        grid-area: content;
        padding: 64px 0;
        overflow-y: scroll;
    }
`

export const Links = styled.ul<IPropsTheme>`
    list-style: none;

    > li {
        margin-top: 12px;

        a {
            color: ${props => props.theme.COLORS.WHITE};
            word-wrap: break-word;
        }
    }
`;

export const Content = styled.div`
    max-width: 550px;
    margin: 0 auto;

    display: flex;
    flex-direction: column;

    > header {
        display: flex;
        align-items: center;
        justify-content: space-between;

        > button {
            font-size: 18px;
            
            &:first-child {
                margin-bottom: -5.5px;
            }
        }
    }

    > button:first-child {
        align-self: end;
    }

    > h1 {
        font-size: 26px;
        font-weight: 500;
        padding-top: 64px;
    }

    > p {
        font-size: 16px;
        margin-top: 16px;
        text-align: justify;
        word-wrap: break-word;
        width: 100%;
    }
`