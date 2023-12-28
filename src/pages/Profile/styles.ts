import styled from "styled-components";
import { IPropsTheme } from "../../styles/theme";

export const Container = styled.div<IPropsTheme>`
    width: 100%;
    height: 100vh;
    padding-bottom: 3rem;
    overflow-y: scroll;

    > header {
        width: 100%;
        height: 144px;

        background-color: ${({theme}) => theme.COLORS.BACKGROUND_900};

        display: flex;
        align-items: center;

        padding: 0 124px;

        > button {
            background: none;
            border: none;

            svg {
                color: ${({theme}) => theme.COLORS.GRAY_100};
                font-size: 24px;
                transition: all 250ms ease-out;
            }

            svg:hover {
                color: ${({theme}) => theme.COLORS.ORANGE};
            }
        }
    }
`

export const Form = styled.form`
    max-width: 340px;
    margin: 30px auto 0;

    > div:nth-child(4) {
        margin-top: 24px;
    }
`

export const Avatar = styled.div<IPropsTheme>`
    position: relative;
    margin: -128px auto 25px;

    width: 186px;
    height: 186px;
    
    > img {
        border-radius: 50%;
        border: 1.5px solid ${({theme}) => theme.COLORS.BACKGROUND_700};
        width: 100%;
        height: 100%;
    }

    > label {
        width: 48px;
        height: 48px;

        background-color: ${({theme}) => theme.COLORS.ORANGE};
        border-radius: 50%;

        display: flex;
        align-items: center;
        justify-content: center;

        position: absolute;
        bottom: 7px; 
        right: 7px;

        cursor: pointer;

        input {
            display: none;
        }

        svg {
            width: 20;
            height: 20;
            color: ${({theme}) => theme.COLORS.BACKGROUND_800};
        }

    }
`