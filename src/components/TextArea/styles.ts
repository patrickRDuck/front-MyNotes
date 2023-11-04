import styled from "styled-components";
import { IPropsTheme } from "../../styles/theme";

export const Container = styled.textarea<IPropsTheme>`
    width: 100%;
    height: 150px;

    background-color: ${({theme}) => theme.COLORS.BACKGROUND_900};
    color: ${({theme}) => theme.COLORS.WHITE};


    border: none;
    resize: none;

    margin-bottom: 8px;
    border-radius: 10px;
    padding: 16px;

    &::placeholder {
        color: ${({theme}) => theme.COLORS.GRAY_300};
    }
`